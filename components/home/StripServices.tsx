"use client";

import { useEffect, useState } from "react";
import { SPY_CASES } from "./cases";
import { WideVisualD } from "./WideVisualD";
import { BentoModal } from "./BentoModal";
import type { CSSVars } from "@/lib/types";

export function StripServices() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [modalId, setModalId] = useState<string | null>(null);
  const list = SPY_CASES;

  // auto-advance · 8s per case · pauses while modal open
  useEffect(() => {
    if (!playing || modalId || list.length === 0) return;
    const t = setInterval(() => {
      setActive((i) => (i + 1) % list.length);
    }, 8000);
    return () => clearInterval(t);
  }, [playing, modalId, list.length]);

  const c = list[active];
  const modalCase = modalId ? list.find((x) => x.id === modalId) : null;
  if (!c) return null;

  return (
    <section className="svc-section strip-section" id="services">
      <div className="wrap">
        <header className="sec-overhead">
          <div className="sec-marker mono">
            <span className="sec-num">§ 01</span>
            <span className="sec-name">Services</span>
          </div>
          <h2 className="sec-h">
            Outcomes you can ship in <span className="italic" style={{ color: "var(--accent)" }}>weeks</span>, not quarters.
          </h2>
          <div className="sec-sub">
            <p>Five cases. The demo cycles every few seconds — click a tile to lock in, or pause and explore.</p>
          </div>
        </header>

        {/* big demo */}
        <div className="strip-stage" style={{ "--case-accent": c.accent } as CSSVars}>
          <div className="strip-stage-bar">
            <div className="mono strip-stage-l" key={c.id + "-label"}>Live demo · {c.kicker}</div>
            <div className="strip-stage-r">
              <button
                className="strip-stage-pause"
                onClick={() => setPlaying((p) => !p)}
                aria-label={playing ? "Pause auto-advance" : "Resume auto-advance"}
                title={playing ? "Pause" : "Play"}
              >
                {playing ? (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <rect x="3" y="2" width="2.4" height="8" rx="0.4" />
                    <rect x="6.6" y="2" width="2.4" height="8" rx="0.4" />
                  </svg>
                ) : (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M3 2 L10 6 L3 10 Z" />
                  </svg>
                )}
              </button>
              <button
                className="strip-stage-expand"
                onClick={() => setModalId(c.id)}
                aria-label={"Open case study for " + c.kicker}
                title="Open case study"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 8 V12 H6 M12 6 V2 H8 M2 12 L6 8 M12 2 L8 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
          <div className="strip-stage-body" key={c.id}>
            <WideVisualD id={c.visual} />
          </div>
        </div>

        {/* 5-tile strip */}
        <div className={"strip-tiles " + (playing ? "" : "paused")} role="tablist">
          {list.map((cs, i) => (
            <button
              key={cs.id}
              role="tab"
              aria-selected={active === i}
              onClick={() => {
                setActive(i);
                setPlaying(false);
              }}
              className={"strip-tile " + (active === i ? "active" : "")}
              style={{ "--case-accent": cs.accent } as CSSVars}
            >
              <div className="strip-tile-marker">
                <span className="strip-tile-n mono">0{i + 1}</span>
                <span className="strip-tile-kicker mono">{cs.kicker}</span>
              </div>
              <div className="strip-tile-title">{cs.title}</div>
              {active === i && <span className="strip-tile-progress" key={active + "-" + String(playing)} />}
            </button>
          ))}
        </div>

        <div className="strip-foot">
          <p className="strip-foot-desc" key={c.id + "-desc"}>{c.desc}</p>
          <div className="strip-foot-cta">
            <a className="btn btn-primary" href="#contact" data-calendly>
              Talk about this build <span style={{ opacity: 0.6, fontSize: 11 }}>↗</span>
            </a>
          </div>
        </div>
      </div>

      {modalCase && <BentoModal c={modalCase} onClose={() => setModalId(null)} />}
    </section>
  );
}
