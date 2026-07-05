"use client";

/* ============================================================================
   WORKFLOW THEATER — scene scripts + beat-synced artifacts
   Each scene is a data object: tab metadata, a per-scene accent, a 5-stage
   progress rail, a `beats` array (ms each stage is held), and a `render(beat)`
   that dresses ONE shared stage grid (see theater.module.css .stage):
       ┌───────────┬───────────┐
       │  a anchor │  b        │      a = anchor artifact (wider, top-left)
       ├───────────┼───────────┤      b = secondary   (top-right)
       │  c        │  d dark   │      c = tertiary     (bottom-left)
       ├───────────┴───────────┤      d = quaternary  (bottom-right, dark/digest)
       │      r  receipt        │      r = held lime receipt, centered
       └───────────────────────┘
   Every scene maps onto the same slot rhythm so all five feel like one stage
   re-dressed. All motion is beat-gated via <Slot> (adds `.riseGo` when the beat
   lands); CSS owns the easing. On the final beat StageFinal flips true and every
   artifact returns to full opacity — the held frame is a fully-lit poster.
   Fictional businesses (Anchor Plumbing, Summit Roofing, BrightPath Tutoring)
   and every line of dialogue are the established site voice — no bot-speak.
   ========================================================================== */

import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import art from "@/components/artifacts/artifacts.module.css";
import s from "./theater.module.css";
import { renderRich } from "@/components/artifacts/rich";

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(" ");

/** True on a scene's final beat — flips all artifacts back to full opacity. */
export const StageFinal = createContext(false);

const POS: Record<string, string> = { a: s.posA, b: s.posB, c: s.posC, d: s.posD };

/* ------------------------------------------------------------- beat primitive */
type SlotProps = {
  at: number;
  /** last beat this artifact holds attention; dims once beat passes it (mid-scene only) */
  until?: number;
  beat: number;
  /** grid slot: a=anchor, b, c, d — omit for artifacts nested inside a card */
  pos?: "a" | "b" | "c" | "d";
  className?: string;
  children: ReactNode;
};
function Slot({ at, until, beat, pos, className, children }: SlotProps) {
  const final = useContext(StageFinal);
  const go = beat >= at;
  const dim = !final && beat > (until ?? at);
  return (
    <div className={cx(s.slot, pos && POS[pos], dim && s.slotDim, className)}>
      <div className={cx(s.rise, go && s.riseGo)}>{children}</div>
    </div>
  );
}

/** The held finale — a full-width lime receipt with a drawn check. */
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

function DrawCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path className={s.drawPath} d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/* ------------------------------------------------------------------ count-up */
function CountUp({
  to,
  active,
  reduced,
  prefix = "",
  durationMs = 900,
}: {
  to: number;
  active: boolean;
  reduced: boolean;
  prefix?: string;
  durationMs?: number;
}) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (reduced) {
      setVal(to);
      return;
    }
    if (!active || started.current) return;
    started.current = true;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, reduced, to, durationMs]);
  return (
    <>
      {prefix}
      {val.toLocaleString("en-US")}
    </>
  );
}

/* -------------------------------------------------------------- SMS bubbles */
function InBubble({ text, time }: { text: string; time: string }) {
  return (
    <div className={cx(art.bub, art.bubIn)}>
      {renderRich(text)}
      <span className={art.bubTime}>{time}</span>
    </div>
  );
}
function BizBubble({ text, time, swap = 0.65 }: { text: string; time: string; swap?: number }) {
  const swapVar = { "--swap": `${swap}s` } as CSSProperties;
  return (
    <div className={cx(art.bub, art.bubOut, s.phaseBub)}>
      <span className={s.phDots} style={swapVar} aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className={s.phText} style={swapVar}>
        {renderRich(text)}
        <span className={art.bubTime}>{time}</span>
      </span>
    </div>
  );
}

/* static call/session waveform */
const WAVE = [7, 13, 20, 11, 17, 23, 9, 15, 21, 12, 8, 18, 22, 10, 14, 19, 9];
function Wave() {
  return (
    <div className={s.wave} aria-hidden="true">
      {WAVE.map((h, i) => (
        <i key={i} style={{ height: `${h}px` }} />
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------- icons */
const I = {
  phoneMissed: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 4h3l1.5 4-2 1.4a11 11 0 005 5l1.4-2 4 1.5V20a1.5 1.5 0 01-1.6 1.5A15 15 0 013.5 6.6 1.5 1.5 0 015 5z" />
      <path d="M15 3l5 5M20 3l-5 5" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 5h16v11H8l-4 3z" />
    </svg>
  ),
  badge: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l2.4 1.7 2.9-.2 1 2.8 2.3 1.7-.9 2.8.9 2.8-2.3 1.7-1 2.8-2.9-.2L12 21l-2.4-1.7-2.9.2-1-2.8L3.4 15l.9-2.8-.9-2.8 2.3-1.7 1-2.8 2.9.2z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </svg>
  ),
  bell: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 9a6 6 0 0112 0c0 5 2 6 2 6H4s2-1 2-6z" />
      <path d="M10 20a2 2 0 004 0" />
    </svg>
  ),
  camera: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <circle cx="12" cy="13" r="3.5" />
      <path d="M8 6l1.5-2h5L16 6" />
    </svg>
  ),
  ruler: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 4l6 6-10 10-6-6z" />
      <path d="M15 9l-1.5 1.5M12 12l-1.5 1.5M9 15l-1.5 1.5" />
    </svg>
  ),
  doc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2h9l5 5v15H6z" />
      <path d="M15 2v5h5M9 13h6M9 17h6" />
    </svg>
  ),
  penCheck: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M3 21h18" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 4h3l1.5 4-2 1.4a11 11 0 005 5l1.4-2 4 1.5V20a1.5 1.5 0 01-1.6 1.5A15 15 0 013.5 6.6 1.5 1.5 0 015 5z" />
    </svg>
  ),
  listCheck: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 6h11M9 12h11M9 18h11" />
      <path d="M4 6l1 1 1.5-1.5M4 12l1 1 1.5-1.5M4 18l1 1 1.5-1.5" />
    </svg>
  ),
  columns: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="7" height="16" rx="1.5" />
      <rect x="14" y="4" width="7" height="16" rx="1.5" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  ),
  video: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="M16 10l5-3v10l-5-3z" />
    </svg>
  ),
  gauge: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 18a8 8 0 1116 0" />
      <path d="M12 18l4-4" />
    </svg>
  ),
  flag: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 21V4M5 4h11l-1.5 4L16 12H5" />
    </svg>
  ),
  note: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 3h9l5 5v13H5z" />
      <path d="M9 12h6M9 16h4" />
    </svg>
  ),
  inbox: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 13l3-8h12l3 8v6H3z" />
      <path d="M3 13h5l1 2h6l1-2h5" />
    </svg>
  ),
  checkCircle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l3 3 5-5" />
    </svg>
  ),
  invoice: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2h12v20l-3-2-3 2-3-2-3 2z" />
      <path d="M9 8h6M9 12h6" />
    </svg>
  ),
  money: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M9.5 9.5a2 2 0 012-1.5h1a2 2 0 010 4h-1a2 2 0 000 4h1a2 2 0 002-1.5" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2z" />
      <path d="M4 19a2 2 0 012-2h13" />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  ),
  photo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="10" r="1.5" />
      <path d="m21 16-5-5L5 19" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path className={s.drawPath} d="M20 6 9 17l-5-5" />
    </svg>
  ),
};

/* numbered step badge — mirrors the rail; lights in sync with the beat */
function StepBadge({ n, at, beat, dark }: { n: number; at: number; beat: number; dark?: boolean }) {
  const on = beat >= at;
  const active = beat === at;
  return (
    <span
      className={cx(s.step, dark && s.stepDark, on && s.stepOn, active && s.stepActive)}
      aria-hidden="true"
    >
      {n}
    </span>
  );
}

/* small shared card header with its numbered step chip */
function AHead({
  step,
  at,
  beat,
  title,
  tag,
}: {
  step: number;
  at: number;
  beat: number;
  title: string;
  tag?: string;
}) {
  return (
    <div className={s.ahead}>
      <StepBadge n={step} at={at} beat={beat} />
      <span className={s.aheadTitle}>{title}</span>
      {tag && <span className={s.aheadTag}>{tag}</span>}
    </div>
  );
}

/* ============================================================ SCENE TYPES */
export type RailStage = { label: string; icon: ReactNode };
export type Scene = {
  key: string;
  tab: string;
  tabIcon: ReactNode;
  accent: string;
  name: string;
  context: string;
  rail: RailStage[];
  beats: number[];
  render: (beat: number, reduced: boolean) => ReactNode;
};

/* ============================================================ 1 · MISSED CALL */
const missedCall: Scene = {
  key: "missed-call",
  tab: "Missed call → booked",
  tabIcon: I.phoneMissed,
  accent: "#F5A623",
  name: "Missed call → booked",
  context: "Anchor Plumbing · 7:52 AM",
  rail: [
    { label: "Missed call", icon: I.phoneMissed },
    { label: "Text-back", icon: I.chat },
    { label: "Qualified", icon: I.badge },
    { label: "Booked", icon: I.calendar },
    { label: "You find out", icon: I.bell },
  ],
  beats: [3200, 3900, 3000, 3400, 3200],
  render: (beat) => (
    <>
      {/* a · the missed call */}
      <Slot at={0} until={0} beat={beat} pos="a">
        <div className={s.callCard}>
          <div className={s.aheadDark}>
            <StepBadge n={1} at={0} beat={beat} dark />
            <span className={s.aheadTitle}>Incoming call</span>
          </div>
          <div className={s.callBody}>
            <div className={cx(s.callState, s.callStateMiss)}>Missed · 7:52 AM</div>
            <div className={cx(s.callAva, beat === 0 && s.callAvaRinging)}>D</div>
            <div className={s.callName}>Dana W.</div>
            <div className={s.callNum}>(415) 555-0182</div>
            <div className={s.callMeta}>
              Rang out after <b>4 rings</b> — you were under a sink.
            </div>
          </div>
        </div>
      </Slot>

      {/* b · text-back + qualification */}
      <Slot at={1} until={2} beat={beat} pos="b">
        <div className={s.acard}>
          <AHead step={2} at={1} beat={beat} title="Anchor Plumbing · text-back" tag="24s" />
          <div className={s.abody}>
            <div className={s.sys}>Missed call · 7:52 AM</div>
            <div className={s.thread}>
              <BizBubble
                text="Hi, it’s Anchor Plumbing — sorry we missed you! What’s going on?"
                time="7:52 AM"
              />
              <InBubble text="Water heater leaking in the garage 😬" time="7:53 AM" />
            </div>
            <Slot at={2} until={2} beat={beat}>
              <div className={s.quals}>
                <span className={s.qual}>{I.check} Emergency</span>
                <span className={cx(s.qual, s.qualNeutral)}>Water heater</span>
                <span className={s.qual}>{I.check} In service area</span>
              </div>
            </Slot>
          </div>
        </div>
      </Slot>

      {/* c · booked */}
      <Slot at={3} until={3} beat={beat} pos="c">
        <div className={s.acard}>
          <AHead step={3} at={3} beat={beat} title="Today · your calendar" />
          <div className={s.abody}>
            <div className={s.arow}>
              <b>9:00 AM</b>
              <span className={s.muted}>Rooter job · Elm St</span>
            </div>
            <div className={s.bookedSlot}>
              <b>10:30 AM</b>
              <span>Water heater assessment · Dana W.</span>
            </div>
            <div className={s.arow}>
              <b>1:00 PM</b>
              <span className={s.muted}>Open</span>
            </div>
            <div className={cx(s.subnote, s.footer)}>{I.check} Synced to your phone calendar</div>
          </div>
        </div>
      </Slot>

      {/* d · you find out (digest) */}
      <Slot at={4} beat={beat} pos="d">
        <div className={s.digest}>
          <div className={s.digestHead}>
            <StepBadge n={4} at={4} beat={beat} dark />
            <span className={s.digestApp}>Hybrid</span>
            <span className={s.digestTime}>now</span>
          </div>
          <div className={s.digestTitle}>While you were on a job</div>
          <div className={s.digestBody}>
            <span className={s.digestNum}>1</span> emergency booked ·{" "}
            <span className={s.digestNum}>0</span> missed. Nothing needed you.
          </div>
          <div className={s.digestRow}>
            <div>
              <div className={s.digestStatK}>24s</div>
              <div className={s.digestStatL}>to first reply</div>
            </div>
            <div>
              <div className={s.digestStatK}>10:30</div>
              <div className={s.digestStatL}>on the schedule</div>
            </div>
          </div>
        </div>
      </Slot>

      <Outcome at={4} beat={beat}>
        Booked · today 10:30 AM
      </Outcome>
    </>
  ),
};

/* ============================================================ 2 · PHOTO QUOTE */
const photoQuote: Scene = {
  key: "photo-quote",
  tab: "Photos → signed quote",
  tabIcon: I.camera,
  accent: "#FF3DA5",
  name: "Photos → signed quote",
  context: "Summit Roofing · storm season",
  rail: [
    { label: "Photos in", icon: I.camera },
    { label: "Measured", icon: I.ruler },
    { label: "Quote sent", icon: I.doc },
    { label: "The nudge", icon: I.bell },
    { label: "Signed", icon: I.penCheck },
  ],
  beats: [3200, 3400, 4000, 3400, 3000],
  render: (beat, reduced) => (
    <>
      {/* a · MMS photos → measured */}
      <Slot at={0} until={1} beat={beat} pos="a">
        <div className={s.acard}>
          <AHead
            step={1}
            at={0}
            beat={beat}
            title="MMS from Mike · 412 Oak"
            tag={beat >= 1 ? "reading" : "2 photos"}
          />
          <div className={s.abody}>
            <div className={s.mms}>
              <div className={cx(s.mmsPhoto, beat === 1 && s.mmsScan)}>{I.photo}</div>
              <div className={cx(s.mmsPhoto, beat === 1 && s.mmsScan)}>{I.photo}</div>
            </div>
            <div className={s.mmsCap}>“Storm damage over the garage — can you quote a re-roof?”</div>
            <Slot at={1} until={1} beat={beat}>
              <div className={s.extract}>
                <span className={s.qual}>{I.check} ≈18 squares</span>
                <span className={s.qual}>{I.check} Flashing damage</span>
                <span className={cx(s.qual, s.qualNeutral)}>Asphalt · 1 layer</span>
              </div>
            </Slot>
          </div>
        </div>
      </Slot>

      {/* b · quote assembles */}
      <Slot at={2} until={2} beat={beat} pos="b">
        <div className={s.acard}>
          <AHead step={2} at={2} beat={beat} title="Estimate · Summit Roofing" tag="Sent 2:31 PM" />
          <div className={s.abody}>
            <div className={s.qLine}>
              <span>Tear-off &amp; disposal</span>
              <span>$1,150</span>
            </div>
            <div className={s.qLine}>
              <span>Architectural shingles · 18 sq</span>
              <span>$4,320</span>
            </div>
            <div className={s.qLine}>
              <span>Underlayment &amp; flashing</span>
              <span>$980</span>
            </div>
            <div className={s.qTotal}>
              <span className={s.qTotalLab}>Estimate total</span>
              <span className={s.bigNum}>
                <CountUp to={6450} prefix="$" active={beat >= 2} reduced={reduced} />
              </span>
            </div>
          </div>
        </div>
      </Slot>

      {/* c · the nudge */}
      <Slot at={3} until={3} beat={beat} pos="c">
        <div className={s.acard}>
          <AHead step={3} at={3} beat={beat} title="Follow-up · Mike R." />
          <div className={s.abody}>
            <div className={s.ticker}>
              <span className={s.tickerDot} />
              Day 3 · no reply
            </div>
            <div className={s.thread}>
              <BizBubble
                text="Hi Mike — any questions on the estimate? Happy to walk through it."
                time="9:10 AM"
              />
            </div>
            <div className={cx(s.subnote, s.footer)}>{I.check} Delivered &amp; read · 9:14 AM</div>
          </div>
        </div>
      </Slot>

      {/* d · signed estimate */}
      <Slot at={4} beat={beat} pos="d">
        <div className={s.acard}>
          <AHead step={4} at={4} beat={beat} title="Estimate · Summit Roofing" tag="Accepted" />
          <div className={s.abody}>
            <div className={s.signRow}>
              <span className={s.signLine}>Mike R.</span>
              <span className={s.miniChip}>{I.check} e-signed</span>
            </div>
            <div className={s.arow}>
              <b>Deposit</b>
              <span className={s.moneyPos}>$1,290 paid</span>
            </div>
            <div className={s.arow}>
              <b>Balance</b>
              <span className={s.muted}>$5,160 on completion</span>
            </div>
            <div className={cx(s.subnote, s.footer)}>Start · week of Jul 14</div>
          </div>
        </div>
      </Slot>

      <Outcome at={4} beat={beat}>
        Accepted · deposit paid $1,290
      </Outcome>
    </>
  ),
};

/* ============================================================ 3 · SALES CALL */
const salesCall: Scene = {
  key: "sales-call",
  tab: "Sales call → follow-through",
  tabIcon: I.phone,
  accent: "#5BE3FF",
  name: "Sales call → follow-through",
  context: "Hartley remodel · consult",
  rail: [
    { label: "Call ends", icon: I.phone },
    { label: "Next steps", icon: I.listCheck },
    { label: "CRM updated", icon: I.columns },
    { label: "Follow-up set", icon: I.clock },
    { label: "Draft ready", icon: I.mail },
  ],
  beats: [3200, 3600, 3400, 3000, 3400],
  render: (beat) => (
    <>
      {/* a · call ends → transcript highlights */}
      <Slot at={0} until={1} beat={beat} pos="a">
        <div className={s.acard}>
          <AHead step={1} at={0} beat={beat} title="Consultation · Hartley remodel" tag="41:22" />
          <div className={s.abody}>
            <div className={s.callRow}>
              <span className={s.callRowAva}>SH</span>
              <div className={s.callRowMeta}>
                <div className={s.callRowName}>Sarah H.</div>
                <div className={s.callRowSub}>Consultation · 41:22</div>
              </div>
              <span className={s.miniChip}>{I.check} ended · recorded</span>
            </div>
            <Wave />
            <div className={s.transcript}>
              <div className={cx(s.tLine, beat >= 1 && s.tHi)}>
                <span className={s.tSpeaker}>Sarah H.</span>
                {renderRich("…budget lands around **$12k**, maybe a touch more…")}
              </div>
              <div className={cx(s.tLine, beat >= 1 && s.tHi)}>
                <span className={s.tSpeaker}>Sarah H.</span>
                {renderRich("…we’ll decide by **Friday** — send those references…")}
              </div>
            </div>
          </div>
        </div>
      </Slot>

      {/* b · next steps write themselves */}
      <Slot at={1} until={1} beat={beat} pos="b">
        <div className={s.acard}>
          <AHead step={2} at={1} beat={beat} title="Next steps · drafted from the call" />
          <div className={s.abody}>
            <div className={s.check}>
              {["Send project references", "Update proposal to $12k scope", "Call Thursday to confirm"].map(
                (t, i) => (
                  <div key={i} className={s.checkItem}>
                    <span className={s.checkBox}>{I.check}</span>
                    {t}
                  </div>
                ),
              )}
            </div>
            <div className={cx(s.subnote, s.footer)}>{I.check} 3 of 3 · saved to the deal</div>
          </div>
        </div>
      </Slot>

      {/* c · CRM card moves + follow-up set */}
      <Slot at={2} until={3} beat={beat} pos="c">
        <div className={s.acard}>
          <AHead step={3} at={2} beat={beat} title="Pipeline · updated" />
          <div className={s.abody}>
            <div className={s.crm}>
              <div className={s.crmCol}>
                <div className={s.crmColLab}>Prospect</div>
                <div className={s.crmGhost}>Kessler kitchen</div>
              </div>
              <div className={cx(s.crmCol, s.crmColActive)}>
                <div className={s.crmColLab}>Proposal</div>
                <div className={s.crmCard}>
                  <div className={s.crmCardName}>Hartley remodel</div>
                  <div className={s.crmCardVal}>$12,000 · decide Fri</div>
                </div>
              </div>
            </div>
            <Slot at={3} until={3} beat={beat} className={s.footer}>
              <div className={cx(s.qual, s.qualLead)}>{I.check} Follow-up call · Thu 2:00 PM</div>
            </Slot>
          </div>
        </div>
      </Slot>

      {/* d · email draft — human keeps the judgment call */}
      <Slot at={4} beat={beat} pos="d">
        <div className={s.acard}>
          <AHead step={4} at={4} beat={beat} title="Email · to Sarah H." />
          <div className={s.abody}>
            <div className={s.draft}>
              <div className={s.draftSub}>References + updated proposal</div>
              <div className={s.draftBody}>
                Hi Sarah — great talking today. Attached are three recent remodels close to your
                scope, plus the revised proposal at the $12k range we discussed…
              </div>
              <span className={s.draftTag}>{I.eye} Drafted for your review</span>
            </div>
          </div>
        </div>
      </Slot>

      <Outcome at={4} beat={beat}>
        Nothing dropped · follow-up set · draft ready
      </Outcome>
    </>
  ),
};

/* ============================================================ 4 · TUTOR COACH */
const tutorCoach: Scene = {
  key: "tutor-coach",
  tab: "Session → coaching",
  tabIcon: I.video,
  accent: "#A78BFA",
  name: "Session → coaching",
  context: "BrightPath Tutoring · director view",
  rail: [
    { label: "Session ends", icon: I.video },
    { label: "Scored", icon: I.gauge },
    { label: "Moment flagged", icon: I.flag },
    { label: "Coaching note", icon: I.note },
    { label: "Director digest", icon: I.inbox },
  ],
  beats: [3000, 3600, 3200, 3600, 3200],
  render: (beat) => (
    <>
      {/* a · session ends */}
      <Slot at={0} until={0} beat={beat} pos="a">
        <div className={s.acard}>
          <AHead step={1} at={0} beat={beat} title="Algebra II · session review" tag="55:12" />
          <div className={s.abody}>
            <div className={s.people}>
              <span className={s.person}>
                <span className={s.personAva} style={{ background: "linear-gradient(135deg,#c9b6ff,#7c4dff)" }}>M</span>
                Maya
              </span>
              <span className={s.person}>
                <span className={s.personAva} style={{ background: "linear-gradient(135deg,#3e7b27,#6bb13f)" }}>P</span>
                Coach Priya
              </span>
              <span className={s.miniChip}>{I.check} transcript in</span>
            </div>
            <div className={s.transcript}>
              <div className={s.tLine}>
                <span className={s.tSpeaker}>Priya</span>Alright, let’s try factoring this one together…
              </div>
              <div className={s.tLine}>
                <span className={s.tSpeaker}>Maya</span>Okay… um, I think I get it?
              </div>
            </div>
            <div className={cx(s.subnote, s.footer)}>{I.check} Recorded · queued for review</div>
          </div>
        </div>
      </Slot>

      {/* b · rubric scorecard, bars overshoot */}
      <Slot at={1} until={1} beat={beat} pos="b">
        <div className={s.acard}>
          <AHead step={2} at={1} beat={beat} title="Session scorecard" tag="auto" />
          <div className={s.abody}>
            <div className={s.rubric}>
              <RubricRow label="Checks understanding" score="9.1" to={0.91} />
              <RubricRow label="Pacing" score="7.4" to={0.74} />
              <RubricRow label="Encouragement" score="8.6" to={0.86} />
            </div>
            <div className={cx(s.subnote, s.footer)}>Scored against your rubric · 3 dimensions</div>
          </div>
        </div>
      </Slot>

      {/* c · flagged moment + coaching note */}
      <Slot at={2} until={3} beat={beat} pos="c">
        <div className={s.acard}>
          <AHead step={3} at={2} beat={beat} title="Worth a look" />
          <div className={s.abody}>
            <div className={s.flag}>
              <span className={s.flagIco}>{I.flag}</span>
              <span>
                <b>12:40</b> — new concept introduced, student went quiet, session moved on.
                <span className={s.lens}>{I.eye} worth a look</span>
              </span>
            </div>
            <Slot at={3} until={3} beat={beat}>
              <div className={s.noteBlock}>
                <div className={s.draftSub}>Coaching note · for Priya</div>
                <div className={s.draftBody}>
                  Great rapport with Maya. One thing to try: pause after each new concept —
                  <b> 12:40</b> is a perfect example.
                </div>
              </div>
            </Slot>
          </div>
        </div>
      </Slot>

      {/* d · director digest */}
      <Slot at={4} beat={beat} pos="d">
        <div className={s.digest}>
          <div className={s.digestHead}>
            <StepBadge n={4} at={4} beat={beat} dark />
            <span className={s.digestApp}>Hybrid · director</span>
            <span className={s.digestTime}>7:00 AM</span>
          </div>
          <div className={s.digestTitle}>Overnight review</div>
          <div className={s.digestBody}>
            <span className={s.digestNum}>6</span> sessions scored · <span className={s.digestNum}>1</span>{" "}
            coaching flag. Team is finding its rhythm.
          </div>
          <div className={s.digestRow}>
            <div>
              <div className={s.digestStatK}>8.4</div>
              <div className={s.digestStatL}>team average</div>
            </div>
            <div>
              <div className={s.digestStatK}>100%</div>
              <div className={s.digestStatL}>reviewed</div>
            </div>
          </div>
        </div>
      </Slot>

      <Outcome at={4} beat={beat}>
        Every session reviewed · coaching ready
      </Outcome>
    </>
  ),
};

function RubricRow({ label, score, to }: { label: string; score: string; to: number }) {
  const style = { "--to": to, "--to-over": Math.min(1, to + 0.08) } as CSSProperties;
  return (
    <div className={s.rbRow}>
      <span className={s.rbLab}>{label}</span>
      <span className={s.rbScore}>{score}</span>
      <div className={s.rbTrack}>
        <div className={s.rbFill} style={style} />
      </div>
    </div>
  );
}

/* ============================================================ 5 · INVOICE PAID */
const invoicePaid: Scene = {
  key: "invoice-paid",
  tab: "Job done → paid",
  tabIcon: I.invoice,
  accent: "#3FE0A8",
  name: "Job done → paid",
  context: "Anchor Plumbing · patio install",
  rail: [
    { label: "Job closed", icon: I.checkCircle },
    { label: "Invoice out", icon: I.invoice },
    { label: "The nudges", icon: I.bell },
    { label: "Paid", icon: I.money },
    { label: "Books tidy", icon: I.book },
  ],
  beats: [3000, 3400, 3600, 3200, 3000],
  render: (beat, reduced) => (
    <>
      {/* a · job ticket closed */}
      <Slot at={0} until={0} beat={beat} pos="a">
        <div className={s.acard}>
          <AHead step={1} at={0} beat={beat} title="Job ticket #318" />
          <div className={s.abody}>
            <div className={s.jobTitle}>Patio install</div>
            <div className={s.arow}>
              <b>Client</b>
              <span className={s.muted}>M. Reyes</span>
            </div>
            <div className={s.arow}>
              <b>Crew</b>
              <span className={s.muted}>Ray + Dev · 2 days</span>
            </div>
            <div className={s.arow}>
              <b>Site</b>
              <span className={s.muted}>1140 Cedar Ln</span>
            </div>
            <span className={cx(s.miniChip, s.miniChipLead)}>{I.check} closed out</span>
          </div>
        </div>
      </Slot>

      {/* b · invoice generated */}
      <Slot at={1} until={1} beat={beat} pos="b">
        <div className={s.acard}>
          <AHead step={2} at={1} beat={beat} title="Invoice #2048" tag="Sent" />
          <div className={s.abody}>
            <div className={s.bigNum}>
              <CountUp to={4800} prefix="$" active={beat >= 1} reduced={reduced} />
            </div>
            <div className={s.arow}>
              <b>Terms</b>
              <span className={s.muted}>Net 14 · due Jul 25</span>
            </div>
            <div className={s.arow}>
              <b>Bill to</b>
              <span className={s.muted}>M. Reyes · materials + labor</span>
            </div>
            <div className={cx(s.subnote, s.footer)}>{I.check} Sent to m.reyes@email.com</div>
          </div>
        </div>
      </Slot>

      {/* c · the nudges → paid */}
      <Slot at={2} until={3} beat={beat} pos="c">
        <div className={s.acard}>
          <AHead step={3} at={2} beat={beat} title="Getting you paid" />
          <div className={s.abody}>
            <div className={s.nudges}>
              <div className={s.nudge}>
                <div className={s.nudgeDay}>Day 7</div>
                <div className={s.nudgeText}>
                  Friendly check-in: <b>“Hope the patio’s treating you well! Just a nudge on invoice #2048.”</b>
                </div>
              </div>
              <div className={s.nudge}>
                <div className={s.nudgeDay}>Day 14</div>
                <div className={s.nudgeText}>Reminder sent with a one-tap pay link.</div>
              </div>
            </div>
            <Slot at={3} until={3} beat={beat} className={s.footer}>
              <div className={cx(s.qual, s.qualLead)}>{I.check} Paid · $4,800</div>
            </Slot>
          </div>
        </div>
      </Slot>

      {/* d · books tidy */}
      <Slot at={4} beat={beat} pos="d">
        <div className={s.acard}>
          <AHead step={4} at={4} beat={beat} title="Ledger" tag="synced" />
          <div className={s.abody}>
            <div className={s.ledgerList}>
              <div className={cx(s.ledger, s.ledgerPrev)}>
                <span className={s.ledgerLeft}>
                  <b>#2041</b> <span>water heater</span> <b>$1,180</b>
                </span>
                <span className={s.ledgerDate}>Jul 2</span>
              </div>
              <div className={s.ledger}>
                <span className={s.ledgerLeft}>
                  <b>#2048</b> <span>patio install</span> <b>$4,800</b>
                </span>
                <span className={s.reconciled}>reconciled</span>
              </div>
            </div>
            <div className={cx(s.subnote, s.footer)}>{I.check} Synced to your books</div>
          </div>
        </div>
      </Slot>

      <Outcome at={4} beat={beat}>
        Paid · $4,800 · 14 days, zero awkward calls
      </Outcome>
    </>
  ),
};

export const SCENES: Scene[] = [missedCall, photoQuote, salesCall, tutorCoach, invoicePaid];
