"use client";

/* ============================================================================
   WORKFLOW THEATER — the conductor
   One JS timeout chain drives every scene. React state is just {sceneIndex,
   beat}; each beat advance is a single setTimeout keyed off the scene's `beats`
   array. CSS transitions/keyframes own all easing (see theater.module.css) — no
   re-render storms, clean unmount. The stage remounts on scene change (key) so
   the beat-`.rise` animations and count-ups replay fresh.

   Playback pauses when: user hits pause, pointer hovers, the section scrolls
   out of view (IntersectionObserver), or prefers-reduced-motion is set (which
   also snaps each scene to its final composition). Clicking a tab jumps there
   and suspends auto-advance to the next scene for ~30s (the scene still plays
   and then holds on its receipt).
   ========================================================================== */

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import s from "./theater.module.css";
import { SCENES, StageFinal } from "./scenes";

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(" ");
const HOLD_MS = 2500; // dwell on the receipt before auto-advancing
const SUSPEND_MS = 30000; // manual tab click suspends auto-advance this long

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
    </svg>
  );
}

export function WorkflowTheater() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [beat, setBeat] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(true);
  const [reduced, setReduced] = useState(false);
  const suspendUntil = useRef(0);
  const rootRef = useRef<HTMLDivElement>(null);

  const scene = SCENES[sceneIndex];
  const lastBeat = scene.beats.length - 1;

  // prefers-reduced-motion — snap to the final composition, no timers
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  useEffect(() => {
    if (reduced) setBeat(lastBeat);
  }, [reduced, sceneIndex, lastBeat]);

  // pause when the section is off-viewport
  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    // start as the stage enters, not only when deeply in view
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => setVisible(e.isIntersecting)),
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const goToScene = useCallback((i: number) => {
    setSceneIndex(i);
    setBeat(0);
  }, []);

  const halted = userPaused || hovered || !visible || reduced;
  // hover pauses playback — reflect that on the control so it reads intentional
  const showPaused = userPaused || hovered;

  // the single conductor: one timeout per beat; at the last beat it holds
  // (respecting any active suspend window) then advances to the next scene.
  useEffect(() => {
    if (halted) return;
    if (beat >= lastBeat) {
      const wait = Math.max(HOLD_MS, suspendUntil.current - Date.now());
      const id = setTimeout(() => goToScene((sceneIndex + 1) % SCENES.length), wait);
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => setBeat((b) => b + 1), scene.beats[beat]);
    return () => clearTimeout(id);
  }, [halted, beat, lastBeat, sceneIndex, scene, goToScene]);

  const selectTab = useCallback(
    (i: number) => {
      suspendUntil.current = Date.now() + SUSPEND_MS;
      setUserPaused(false);
      goToScene(i);
    },
    [goToScene],
  );

  const onTabKey = (i: number) => (e: KeyboardEvent<HTMLButtonElement>) => {
    let n = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") n = (i + 1) % SCENES.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") n = (i - 1 + SCENES.length) % SCENES.length;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = SCENES.length - 1;
    if (n < 0) return;
    e.preventDefault();
    selectTab(n);
    const sib = e.currentTarget.parentElement?.children[n] as HTMLElement | undefined;
    sib?.focus();
  };

  return (
    <div
      className={s.theater}
      ref={rootRef}
      style={{ "--c": scene.accent } as CSSProperties}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* workflow tabs */}
      <div className={s.tabsWrap}>
        <span className={s.tabsLab}>Pick a workflow</span>
        <div className={s.tabs} role="tablist" aria-label="Choose a workflow to watch">
          {SCENES.map((sc, i) => (
            <button
              key={sc.key}
              type="button"
              role="tab"
              id={`wt-tab-${sc.key}`}
              aria-selected={i === sceneIndex}
              aria-controls="wt-stage"
              tabIndex={i === sceneIndex ? 0 : -1}
              className={cx(s.tab, i === sceneIndex && s.tabActive)}
              onClick={() => selectTab(i)}
              onKeyDown={onTabKey(i)}
            >
              {sc.tabIcon}
              {sc.tab}
            </button>
          ))}
        </div>
      </div>

      {/* the shell: bar · rail · stage */}
      <div className={s.shell}>
        <div className={s.bar}>
          <div className={s.barLeft}>
            <span className={s.barDot} aria-hidden="true" />
            <span className={s.barName}>{scene.name}</span>
            <span className={s.barCtx}>{scene.context}</span>
          </div>
          <button
            type="button"
            className={cx(s.playpause, showPaused && s.playpausePaused)}
            aria-label={userPaused ? "Play workflow" : "Pause workflow"}
            aria-pressed={userPaused}
            onClick={() => setUserPaused((p) => !p)}
          >
            {showPaused ? <PlayIcon /> : <PauseIcon />}
          </button>
        </div>

        <div className={s.railWrap}>
          <div className={s.rail} aria-hidden="true">
            {scene.rail.map((st, i) => (
              <div
                key={i}
                className={cx(
                  s.railStep,
                  beat > i && s.railStepDone,
                  beat === i && s.railStepActive,
                )}
              >
                <span className={s.railIco}>{st.icon}</span>
                <span className={s.railLab}>{st.label}</span>
              </div>
            ))}
          </div>
          <div className={s.railCurrent} aria-hidden="true">
            {scene.rail[Math.min(beat, lastBeat)]?.label}
          </div>
        </div>

        <div className={s.stageWrap}>
          <div className={s.stage}>
            <div
              className={s.grid}
              id="wt-stage"
              role="tabpanel"
              aria-labelledby={`wt-tab-${scene.key}`}
              key={scene.key}
            >
              <StageFinal.Provider value={beat >= lastBeat}>
                {scene.render(beat, reduced)}
              </StageFinal.Provider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
