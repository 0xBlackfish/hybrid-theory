"use client";

/* ============================================================================
   SPOTLIGHT SCENE
   The vertical page's "see it work" centrepiece: ONE bespoke end-to-end scene
   per industry, defined entirely as data (VerticalSpotlight) and rendered in
   the Home theater's visual language. Four product-artifact cards on a strict
   2×2 grid, a step rail that lights per beat, numbered step markers, and a held
   lime receipt.

   Conductor: a single timeout chain walks `beats`; at the last beat it holds
   ~4s then REPLAYS from beat 0 by remounting the grid (fresh `key`), so every
   entrance — and each artifact's own cascade — re-runs. Pauses on hover, off
   viewport (IntersectionObserver), or reduced-motion; reduced-motion renders the
   final fully-lit composition statically. CSS owns all easing (spotlight.module).

   sms/calendar/quote/digest reuse the real artifact components (data straight
   from the union); checklist/scorecard/timeline are compact renderers here in
   the same card language. Text fields support **bold** via renderRich.
   ========================================================================== */

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import s from "./spotlight.module.css";
import { SmsThread, CalendarCard, QuoteCard, DigestCard } from "@/components/artifacts";
import { renderRich } from "@/components/artifacts/rich";
import type { SpotlightCard, VerticalSpotlight } from "@/content/verticals/types";

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(" ");
const HOLD_MS = 4000; // dwell on the receipt before replaying
const POS: Record<string, string> = { a: s.posA, b: s.posB, c: s.posC, d: s.posD };
const POS_ORDER: Record<string, number> = { a: 0, b: 1, c: 2, d: 3 };

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
function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path className={s.drawPath} d="M20 6 9 17l-5-5" />
    </svg>
  );
}
function DrawCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path className={s.drawPath} d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/* the `kind` discriminated union, and a helper to pick one member by `type` */
type SpotlightKind = SpotlightCard["kind"];
type KindOf<T extends SpotlightKind["type"]> = Extract<SpotlightKind, { type: T }>;
type CardMeta = { title: string; dark?: boolean };

/* ----------------------------------------------------------- card renderers */
function ChecklistCard({ meta, kind }: { meta: CardMeta; kind: KindOf<"checklist"> }) {
  return (
    <div className={cx(s.acard, meta.dark && s.acardDark)}>
      <div className={s.ahead}>
        <span className={s.aheadTitle}>{meta.title}</span>
      </div>
      <div className={s.abody}>
        {kind.header && <div className={s.subnote}>{renderRich(kind.header)}</div>}
        <div className={s.check}>
          {kind.items.map((it, i) => (
            <div key={i} className={s.checkItem}>
              <span className={cx(s.checkBox, !it.done && s.checkBoxPending)}>{it.done && <Check />}</span>
              <span className={s.checkLabel}>{renderRich(it.label)}</span>
              <span className={s.checkTag}>{it.tag}</span>
            </div>
          ))}
        </div>
        {kind.footer && <div className={cx(s.subnote, s.footer)}>{renderRich(kind.footer)}</div>}
      </div>
    </div>
  );
}

function ScorecardCard({ meta, kind }: { meta: CardMeta; kind: KindOf<"scorecard"> }) {
  return (
    <div className={cx(s.acard, meta.dark && s.acardDark)}>
      <div className={s.ahead}>
        <span className={s.aheadTitle}>{meta.title}</span>
      </div>
      <div className={s.abody}>
        <div className={s.score}>
          {kind.rows.map((r, i) => (
            <div key={i} className={s.scoreRow}>
              <span className={s.scoreLab}>{renderRich(r.label)}</span>
              <span className={s.scoreVal}>{r.value}</span>
            </div>
          ))}
        </div>
        {kind.footer && <div className={cx(s.subnote, s.footer)}>{renderRich(kind.footer)}</div>}
      </div>
    </div>
  );
}

function TimelineCard({ meta, kind }: { meta: CardMeta; kind: KindOf<"timeline"> }) {
  return (
    <div className={cx(s.acard, meta.dark && s.acardDark)}>
      <div className={s.ahead}>
        <span className={s.aheadTitle}>{meta.title}</span>
      </div>
      <div className={s.abody}>
        <div className={s.tl}>
          {kind.rows.map((r, i) => (
            <div key={i} className={cx(s.tlRow, r.done && s.tlDone)}>
              <span className={s.tlWhen}>{r.when ?? ""}</span>
              <span className={s.tlText}>{renderRich(r.text)}</span>
            </div>
          ))}
        </div>
        {kind.receiptChip && (
          <div className={cx(s.tlChip, s.footer)}>
            <Check />
            {kind.receiptChip}
          </div>
        )}
      </div>
    </div>
  );
}

function CardBody({ card, animate }: { card: SpotlightCard; animate: boolean }) {
  const meta: CardMeta = { title: card.title, dark: card.dark };
  const k = card.kind;
  switch (k.type) {
    case "sms":
      return (
        <div className={s.artHost}>
          <SmsThread sms={k.sms} animate={animate} />
        </div>
      );
    case "calendar":
      return (
        <div className={s.artHost}>
          <CalendarCard value={k.value} />
        </div>
      );
    case "quote":
      return (
        <div className={s.artHost}>
          <QuoteCard value={k.value} />
        </div>
      );
    case "digest":
      return (
        <div className={s.artHost}>
          <DigestCard digest={k.digest} />
        </div>
      );
    case "checklist":
      return <ChecklistCard meta={meta} kind={k} />;
    case "scorecard":
      return <ScorecardCard meta={meta} kind={k} />;
    case "timeline":
      return <TimelineCard meta={meta} kind={k} />;
  }
}

function CardView({
  card,
  beat,
  final,
  reduced,
  rank,
}: {
  card: SpotlightCard;
  beat: number;
  final: boolean;
  reduced: boolean;
  rank: number;
}) {
  const at = card.at;
  const go = beat >= at;
  const dim = !final && beat > at;
  return (
    <div className={cx(s.slot, POS[card.pos], dim && s.slotDim)}>
      <div className={cx(s.rise, go && s.riseGo)}>
        <span
          className={cx(s.step, beat >= at && s.stepOn, beat === at && s.stepActive)}
          aria-hidden="true"
        >
          {rank}
        </span>
        <CardBody card={card} animate={!reduced} />
      </div>
    </div>
  );
}

function Outcome({ at, beat, children }: { at: number; beat: number; children: ReactNode }) {
  return (
    <div className={cx(s.slot, s.outcome)}>
      <div className={cx(s.rise, beat >= at && s.riseGo)}>
        <div className={s.outcomeChip}>
          <DrawCheck />
          {children}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- component */
export function SpotlightScene({ spotlight }: { spotlight: VerticalSpotlight }) {
  const { rail, beats, cards, receipt, name, context } = spotlight;
  const last = Math.max(0, beats.length - 1);

  const [beat, setBeat] = useState(0);
  const [runKey, setRunKey] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(true);
  const [reduced, setReduced] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  useEffect(() => {
    if (reduced) setBeat(last);
  }, [reduced, last]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => setVisible(e.isIntersecting)),
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const halted = userPaused || hovered || !visible || reduced;

  // single conductor: one timeout per beat; at the last beat, hold then replay
  useEffect(() => {
    if (halted) return;
    if (beat >= last) {
      const id = setTimeout(() => {
        setBeat(0);
        setRunKey((k) => k + 1);
      }, HOLD_MS);
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => setBeat((b) => b + 1), beats[beat] ?? 3000);
    return () => clearTimeout(id);
  }, [halted, beat, last, beats, runKey]);

  const final = beat >= last;
  const showPaused = userPaused || hovered;

  // number the cards in beat-entrance order (ties broken by grid position)
  const ranks: Record<string, number> = {};
  [...cards]
    .sort((a, b) => a.at - b.at || POS_ORDER[a.pos] - POS_ORDER[b.pos])
    .forEach((c, i) => {
      ranks[c.pos] = i + 1;
    });

  const plain = (t: string) => t.replace(/\*\*/g, "");

  return (
    <div
      className={s.spot}
      ref={rootRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={s.shell}>
        <div className={s.bar}>
          <div className={s.barLeft}>
            <span className={s.barDot} aria-hidden="true" />
            <span className={s.barName}>{name}</span>
            <span className={s.barCtx}>{context}</span>
          </div>
          <button
            type="button"
            className={cx(s.playpause, showPaused && s.playpausePaused)}
            aria-label={userPaused ? "Play scene" : "Pause scene"}
            aria-pressed={userPaused}
            onClick={() => setUserPaused((p) => !p)}
          >
            {showPaused ? <PlayIcon /> : <PauseIcon />}
          </button>
        </div>

        <div className={s.railWrap}>
          <div className={s.rail} aria-hidden="true">
            {rail.map((label, i) => (
              <div
                key={i}
                className={cx(
                  s.railStep,
                  beat > i && s.railStepDone,
                  beat === i && s.railStepActive,
                )}
              >
                <span className={s.railNum}>{i + 1}</span>
                <span className={s.railLab}>{label}</span>
              </div>
            ))}
          </div>
          <div className={s.railCurrent} aria-hidden="true">
            {rail[Math.min(beat, rail.length - 1)]}
          </div>
        </div>

        <div className={s.stageWrap}>
          <div className={s.stage}>
            <div
              className={s.grid}
              key={runKey}
              role="img"
              aria-label={`${name}. ${context}. Steps: ${rail.join(" → ")}. Outcome: ${plain(receipt)}.`}
            >
              {cards.map((card) => (
                <CardView
                  key={card.pos}
                  card={card}
                  beat={beat}
                  final={final}
                  reduced={reduced}
                  rank={ranks[card.pos] ?? POS_ORDER[card.pos] + 1}
                />
              ))}
              <Outcome at={last} beat={beat}>
                {renderRich(receipt)}
              </Outcome>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
