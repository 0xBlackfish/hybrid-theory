"use client";

import { useEffect, useRef } from "react";
import { STAGE_HTML, CARDS_HTML } from "./leakMarkup";

type Phase = { t: string; c: string };
type Scene = { flow: string; hex: string; name: string; ctx: string; stbase: string; seq: Phase[] };

// Per-scene config drives the shared controller. Markup lives in leakMarkup.ts
// (faithful to the approved §01 prototype) and is injected once; the controller
// only toggles classes / text, scoped to this component's root.
const SCENES: Scene[] = [
  {
    flow: "missed", hex: "#F5A623", name: "Missed-call text-back", ctx: "Anchor Plumbing · emergency line", stbase: "psub",
    seq: [{ t: "Missed call · 7:52a", c: "mute" }, { t: "Texting back", c: "c" }, { t: "Replied", c: "c" }, { t: "Dispatched ✓", c: "ok" }],
  },
  {
    flow: "speed", hex: "#F5A623", name: "Speed-to-lead", ctx: "Anchor Plumbing · website lead", stbase: "pill",
    seq: [{ t: "New", c: "mute" }, { t: "Reading photos", c: "c" }, { t: "Replying", c: "c" }, { t: "Qualified", c: "c" }, { t: "Customer replied", c: "c" }, { t: "Booked ✓", c: "ok" }],
  },
  {
    flow: "noshow", hex: "#5BE3FF", name: "No-show recovery", ctx: "Cedar Dental · tomorrow's chairs", stbase: "pill",
    seq: [{ t: "At risk", c: "bad" }, { t: "Reminder sent", c: "c" }, { t: "Rescheduling", c: "c" }, { t: "Rebooked", c: "c" }, { t: "Backfilling", c: "c" }, { t: "Chair full ✓", c: "ok" }],
  },
  {
    flow: "quote", hex: "#FF3DA5", name: "Quote automation", ctx: "Summit Roofing · storm season", stbase: "pill",
    seq: [{ t: "Voicemail in", c: "mute" }, { t: "Transcribing", c: "c" }, { t: "Measuring roof", c: "c" }, { t: "Confirming details", c: "c" }, { t: "Pricing", c: "c" }, { t: "Sent ✓", c: "ok" }],
  },
  {
    flow: "docs", hex: "#3FE0A8", name: "Doc chaser", ctx: "Ledgerline CPA · tax season", stbase: "pill",
    seq: [{ t: "3 missing", c: "bad" }, { t: "Reminder sent", c: "c" }, { t: "Receiving", c: "c" }, { t: "Receiving", c: "c" }, { t: "Filing", c: "c" }, { t: "Ready to prep ✓", c: "ok" }],
  },
  {
    flow: "reviews", hex: "#A78BFA", name: "Review requests", ctx: "Lumen Med Spa · after every visit", stbase: "pill",
    seq: [{ t: "Checked out", c: "mute" }, { t: "Asking", c: "c" }, { t: "Reviewing", c: "c" }, { t: "Posted ✓", c: "ok" }, { t: "Posted ✓", c: "ok" }],
  },
];

const HOLD = 2;
const INTERVAL = 1500;

export function LeakCycler() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const stage = root.querySelector<HTMLElement>(".stage");
    const sbname = root.querySelector<HTMLElement>("[data-sbname]");
    const cards = Array.from(root.querySelectorAll<HTMLElement>(".card"));
    if (!stage || !sbname) return;

    let si = 0;
    let k = 0;
    let timer: ReturnType<typeof setInterval> | null = null;

    const panelOf = (flow: string) => root.querySelector<HTMLElement>('.scene[data-flow="' + flow + '"]');
    const typing = (t: string) => t + ' <span class="typing"><i></i><i></i><i></i></span>';

    function special(panel: HTMLElement, flow: string, p: number) {
      if (flow === "missed") {
        panel.querySelectorAll<HTMLElement>(".srstep").forEach((s) => s.classList.toggle("on", Number(s.dataset.i) <= p));
      } else if (flow === "noshow") {
        const slot = panel.querySelector("[data-slot]");
        if (slot) slot.classList.toggle("filled", p >= 4);
      } else if (flow === "docs") {
        let remaining = 0;
        panel.querySelectorAll<HTMLElement>(".chk").forEach((c) => {
          const got = p >= Number(c.dataset.fill);
          c.classList.toggle("done", got);
          if (!got) remaining++;
        });
        const lst = panel.querySelector<HTMLElement>("[data-lstatus]");
        if (lst) {
          if (remaining > 0) { lst.className = "pill bad"; lst.textContent = remaining + " missing"; }
          else { lst.className = "pill ok"; lst.textContent = "All in ✓"; }
        }
      } else if (flow === "reviews") {
        const rate = panel.querySelector(".rate");
        if (rate) rate.classList.toggle("lit", p >= 2);
        const gcount = panel.querySelector<HTMLElement>(".gcount");
        if (gcount) gcount.textContent = p >= 3 ? "412 reviews" : "411 reviews";
      }
    }

    function renderPhase(p: number) {
      const sc = SCENES[si];
      const panel = panelOf(sc.flow);
      if (!panel) return;
      const ph = Math.max(0, Math.min(p, sc.seq.length - 1));
      const st = panel.querySelector<HTMLElement>("[data-status]");
      if (st) {
        st.className = sc.stbase + " " + sc.seq[ph].c;
        st.innerHTML = sc.seq[ph].c === "c" ? typing(sc.seq[ph].t) : sc.seq[ph].t;
      }
      panel.querySelectorAll<HTMLElement>(".reveal").forEach((s) => s.classList.toggle("on", Number(s.dataset.i) <= p));
      special(panel, sc.flow, p);
    }

    function resetScene() {
      const panel = panelOf(SCENES[si].flow);
      if (!panel) return;
      panel.querySelectorAll(".reveal").forEach((s) => s.classList.remove("on"));
      panel.querySelectorAll(".srstep").forEach((s) => s.classList.remove("on"));
      const slot = panel.querySelector("[data-slot]");
      if (slot) slot.classList.remove("filled");
      panel.querySelectorAll(".chk").forEach((c) => c.classList.remove("done"));
      const rate = panel.querySelector(".rate");
      if (rate) rate.classList.remove("lit");
    }

    function renderScene() {
      const sc = SCENES[si];
      root!.querySelectorAll<HTMLElement>(".scene").forEach((s) => s.classList.toggle("active", s.dataset.flow === sc.flow));
      stage!.style.setProperty("--c", sc.hex);
      sbname!.textContent = sc.name;
      cards.forEach((c, i) => {
        const on = i === si;
        c.classList.toggle("active", on);
        const nx = c.querySelector<HTMLElement>(".next");
        if (nx) {
          if (on) { nx.textContent = "● Showing · " + (c.dataset.ind || ""); nx.style.color = "var(--cc)"; }
          else { nx.textContent = c.dataset.ind || ""; nx.style.color = ""; }
        }
      });
    }

    function gotoScene(i: number) {
      si = i;
      k = 0;
      renderScene();
      resetScene();
      renderPhase(0);
    }

    function tick() {
      const L = SCENES[si].seq.length;
      if (k >= L - 1 + HOLD) { gotoScene((si + 1) % SCENES.length); return; }
      k++;
      renderPhase(Math.min(k, L - 1));
    }

    function start() { if (!timer) timer = setInterval(tick, INTERVAL); }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }

    const detach: Array<() => void> = [];
    cards.forEach((c, i) => {
      const handler = () => { stop(); gotoScene(i); start(); };
      c.addEventListener("click", handler);
      detach.push(() => c.removeEventListener("click", handler));
    });

    gotoScene(0);

    let io: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        (entries) => entries.forEach((e) => (e.isIntersecting ? start() : stop())),
        { threshold: 0.15 }
      );
      io.observe(stage);
    } else {
      start();
    }

    return () => {
      stop();
      if (io) io.disconnect();
      detach.forEach((fn) => fn());
    };
  }, []);

  return (
    <div className="htleak" ref={rootRef}>
      {/* eslint-disable-next-line react/no-danger */}
      <div className="stage" dangerouslySetInnerHTML={{ __html: STAGE_HTML }} />
      {/* eslint-disable-next-line react/no-danger */}
      <div className="cards" dangerouslySetInnerHTML={{ __html: CARDS_HTML }} />
    </div>
  );
}
