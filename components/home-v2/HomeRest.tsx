"use client";

import { useEffect, useRef } from "react";

const MARKUP = `<div class="bg"><div class="glow"></div><div class="grid"></div><div class="vignette"></div></div>

<!-- ===================== HERO ===================== -->

<!-- ===================== SEE IT IN ACTION (cycler placement) ===================== -->
<section id="inaction" style="border-top:1px solid var(--line)">
  <div class="wrap">
    <div class="sec-head center">
      <span class="kicker">See it in action</span>
      <h2>Here's what "handled" actually looks like.</h2>
      <p>Pick a moment from a normal day and watch how it plays out — start to finish, without you lifting a finger.</p>
    </div>
    <div class="cyc">
      <div class="cyc-tabs" id="cyc-tabs"></div>
      <div class="cyc-flow" id="cyc-flow"></div>
      <div class="cyc-cap">Illustrative preview — a simplified stand-in for the full animated demo</div>
    </div>
  </div>
</section>

<!-- ===================== HOW IT WORKS ===================== -->
<section id="how" class="band">
  <div class="wrap">
    <div class="sec-head center">
      <span class="kicker">How it works</span>
      <h2>It starts with a conversation — not a contract.</h2>
      <p>You move one step at a time, and each step earns the next. No big commitment up front, no mystery scope — just a clear path forward.</p>
    </div>

    <div class="how-block">
      <div class="how-copy">
        <span class="tag">Step 01 · free</span>
        <h3>It starts with a 15-minute conversation.</h3>
        <p>A few quick questions about how you work, and we pinpoint your <b>single biggest bottleneck</b> — the spot where high frequency meets high friction — then prescribe <b>one tool</b> to fix it.</p>
        <p>You leave with one clear, specific win you could act on tomorrow. Free, no commitment.</p>
      </div>
      <div>
        <div class="assess">
          <div class="assess-top"><div class="t">Free Assessment</div></div>
          <div class="assess-list">
            <div class="it"><span class="ck">✓</span>A few quick questions about how you work</div>
            <div class="it"><span class="ck">✓</span>We pinpoint your #1 bottleneck</div>
            <div class="it"><span class="ck">✓</span>You get one specific tool to fix it</div>
            <div class="it"><span class="ck">✓</span>A straight answer on whether AI fits</div>
          </div>
          <div class="assess-foot">No prep needed. One clear next step.</div>
        </div>
      </div>
    </div>

    <div class="how-block flip" style="margin-top:44px">
      <div class="how-copy">
        <span class="tag">Step 02 · the full picture</span>
        <h3>Want the whole map? That's the audit.</h3>
        <p>The $999 audit is the full report: every opportunity plotted by <b>impact</b> and <b>effort</b>, your <b>six quick wins</b>, the exact tools to use, a 4-day rollout plan, and the ROI to expect.</p>
        <p>You start where the map says to — <em>high impact, low effort</em> — and it's yours to keep. If we build together, <b>the $999 comes off your first month.</b></p>
      </div>
      <div>
        <div class="gmap" role="img" aria-label="Growth Map: a 2 by 2 matrix plotting opportunities by impact and effort, with the quick-wins quadrant highlighted.">
          <div class="gmap-head"><div class="t">Your Growth Map<small>Sample · impact × effort</small></div></div>
          <div class="gmap-body">
            <div class="y-ax">Impact →</div>
            <div class="plot-col">
              <div class="plot">
                <div class="qfill"></div>
                <div class="vline"></div><div class="hline"></div>
                <div class="quad tl">Quick wins</div>
                <div class="quad tr">Major projects</div>
                <div class="quad bl">Fill-ins</div>
                <div class="quad br">Ignore these</div>
                <div class="pt" style="top:13%;left:18%"><span class="d"></span><span class="lbl">Speed-to-lead</span></div>
                <div class="pt" style="top:25%;left:40%"><span class="d"></span><span class="lbl">Instant quotes</span></div>
                <div class="pt" style="top:36%;left:22%"><span class="d"></span><span class="lbl">Missed-call text-back</span></div>
                <div class="pt" style="top:47%;left:33%"><span class="d"></span><span class="lbl">Review requests</span></div>
                <div class="pt amber lft" style="top:19%;left:83%"><span class="d"></span><span class="lbl">Custom CRM build</span></div>
              </div>
              <div class="x-ax"><span>Low effort</span><span>High effort</span></div>
            </div>
          </div>
        </div>
        <div class="mock-cap">Illustrative sample — your map is built in the audit</div>
      </div>
    </div>

    <div class="how-block" style="margin-top:44px">
      <div class="how-copy">
        <span class="tag">Step 03 · two ways to go</span>
        <h3>Then we build it — your call how.</h3>
        <p>Once the map's clear, you pick the lane that fits how you like to work. Same outcome, two very different feels.</p>
        <p>Some owners want a partner building alongside them — the <b>AI Concierge</b>. Others just want it run for them — <b>Managed Agents</b>. Both land in the same place.</p>
      </div>
      <div class="fork">
        <div class="fcard">
          <div class="fic"><svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg"><path fill="#F4F6F3" d="m76.7 42.6h22.3c0.8 0 0.9-2.6-0.7-2.6h-21.6c-1.6 0-2 2.3 0 2.6z"/><path fill="#F4F6F3" d="m135.5 39.8h-21c-1.8 0-1.9 2.8 0 2.8h21c1.6 0 2.8 1.3 2.8 2.8v37.8h-58.5c-1.8 0-2.1 2.8 0 2.9h58.5v4.3c0 1.7-1.3 3.1-2.8 3.2h-52c-2.2-0.2-2.5 2.5-0.2 2.6h13.9c-0.2 1.4-0.8 3.4-1.1 4.8h-15.7l-4.2-13.5c-1.3-4.6-4.6-8.2-8.6-10.3l1.3-4.5h2c3.1 0 5.7-2.2 5.9-5.4l0.1-2.8h1.4c1.7 0 3.3-2 2.2-4l-2.6-5.6c-0.1-7.3-5.1-13.7-13.2-13.7-7 0-13.9 5.4-14 13.3 0 3.4 1.1 6.9 3.4 10.7 0.8 1.2 1.2 2.7 0.8 4.3l-2.3 7.2c-5.2 2.1-10.2 7.5-11 13.9h-2.9v-11.1l5.4-0.5c1.8-0.1 1.8-2.8-0.3-2.8l-13.3 1.4c-1.6 0.3-1.5 2.9 0.3 2.8l5.3-0.6v10.8h-5.9c-4.2 0-8.6 3.6-8.6 8.8v30.3c0 1.4 2.8 1.7 2.8 0v-30.1c0-3.5 2.7-6.2 6-6.2h16.1c2.9 0 6 2.3 6 6v30.3c0 1.8 3.1 2.3 3-0.1v-29.9c0-5.4-4.2-9.1-8.9-9.1h-2.1c1.2-9.2 11.6-15.2 20.4-11.5 3.8 1.3 7.2 4.5 8.6 8.7l4.4 14.9c0.3 0.7 0.7 1.1 1.5 1.1h20.8c4.7 0 5.4 5.2 2.4 7.8-0.5 0.3-1.2 0.8-2.4 0.8h-25.5c-1.9 0-3.7-1.5-4.5-3.5l-5.7-16c-0.8-2-3.5-1-2.8 0.8l5.7 15.4c1.2 3.3 3.6 5.8 6.5 6v8.2c0 0.9 0.6 1.4 1.3 1.4l14.8 0.1c2.8 0 6.4 1.6 7.3 5.1 0.4 1.5 3.2 1.6 2.7-0.7-1.1-3.7-5-7.3-10.1-7.3h-13.2v-6.7h23.8c4.1 0 6.5-3.1 6.5-6.2 0.3-4-3.1-7.9-7-8h-1c0.5-1.4 0.9-3.1 1.1-4.8h13.1c0.2 4.6 0.6 7.4 4.3 11.8h-5.9c-1.6 0-2.2 3 0 3.1h28.4c1.6-0.1 1.8-3-0.3-3.1h-16.2c-1.1 0.1-6.6-2.9-7.3-8.3l-0.3-3.5h19.4c3.3 0.1 5.9-2.6 5.9-5.9v-44.9c0-3.1-2.4-5.5-5.7-5.6zm-79.6 35.9 1.7-5.1c0.6-2.5 0.3-4.7-1-6.8-1.6-2.5-2.9-5.3-2.8-9.4 0.2-6.3 5.8-10.7 11.6-10.7 5.2 0.3 9.4 3.4 9.6 10.4 0 1 1.7 3.8 2.9 7 0 0.3-2 0.2-2.5 0.4-0.7 0.1-1.2 0.6-1.2 1.5l-0.2 3.5c0 1.1-1 3.1-3.4 3.2h-2.9c-0.6 0.2-1.1 0.7-1.2 1.3l-1.5 5.1c-2.8-0.7-5.4-1.1-9.1-0.4z"/><path fill="#F4F6F3" d="m18 64.6c-4.9 2.1-9 7.9-9.2 13.5l-0.1 51.6c0 1.8 2.8 2.2 2.9 0l-0.1-51c0-6.3 5.4-13 12.9-13h24.5c2 0 2.1-2.8 0.1-2.8h-15.6l0.8-2.7h2.4c3.2-0.1 5.5-2.6 5.8-5.6l0.2-3 1.5-0.1c1.9 0 3.3-2.3 2.3-4.4l-3-5.5c0-7.5-5.5-12.6-13-12.6-7.8 0-14.6 5.6-14.6 13.4 0 4 1.8 7.7 3.4 10.2s0.9 4.8-1.2 12zm1.2-22.4c0.3-6 4.8-10.4 10.8-10.4 5.6-0.1 10.5 3.7 10.6 9.9 0 1.2 1.3 2.9 3.1 6.7h-2.3c-2.5 0-1.4 3-2 5.7-0.4 1.4-1.5 3-3.7 3h-2.3c-0.9 0-1.6 0.5-1.8 1.4l-1.2 4.6h-6c-1 0-2.4 0.1-3.3 0.3 1.6-5.2 2.8-8.4 0-12.7-1.2-1.8-2.1-4.8-2.4-7.8z"/><path fill="#F4F6F3" d="m75.7 79.3 17-4.6c7.5 1.4 7.4 1.7 8.7 1 0.8-0.7 2.2-3.1 3.1-4.7 0.7-1.1 1-2.3 0.4-3.4l5.5-1.5c3.7-0.7 3.7-6.1 0.1-7.1h-1.3l-24.6 1.7c-1.9 0.2-1.6 2.9 0.3 2.9l5.6-0.2 0.4 9-16 4.2c-1.5 0.3-1.3 3 0.8 2.7zm17.7-16.2 15.7-1.1c0.8 0 1 0 1.1 0.5 0.2 0.6-0.3 0.7-0.8 0.9l-7 2c-2.2 1.2-0.3 2.7 0 3.3 0.1 0.3 0 0.4-0.5 1.3-0.7 1-1.4 2.5-2 3.2l-6.2-1.1-0.3-9z"/><path fill="#C2F24F" d="m92.9 35.7 6.8 1.8c3.3 1 2.9 1 3.3 1.7l2.4 8.4c0.5 1.9 2.6 1.8 2.8 0.1l2.7-8.2c0.5-0.9 0.5-1.1 3.6-2l6.5-1.8c1.4-0.3 1.6-2.5-0.1-2.8l-6.4-1.9c-2.6-0.6-3.1-0.9-3.6-3.3l-2.7-7.8c-0.5-1.3-2.3-1.3-2.8 0l-2.5 8.8c-0.4 1.3-1.2 1.5-2.8 2l-7.2 2c-1.9 0.7-1.5 2.7 0 3zm9.1-0.3-4.1-1.2 4.5-1.2c3-0.9 3.2-3.5 4.3-7.5l0.9 3.2c1 3.3 2.6 4 5.1 4.7l3.2 0.8-3.4 1c-2.6 1-3.8 1.9-5 7.4l-1.1-3.5c-0.8-2.4-2.7-3.4-4.4-3.7z"/></svg></div>
          <div class="who">With You</div>
          <h3>AI Concierge</h3>
          <p>We build it live, on your screen, and train your team to run it. When we're done, you own it outright — no black box, no dependency.</p>
        </div>
        <div class="fcard">
          <div class="fic"><svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg"><style>.ma0{fill:none;stroke:#C2F24F;stroke-width:2.4869;stroke-linejoin:round;stroke-miterlimit:7}.ma1{fill:none;stroke:#F4F6F3;stroke-width:2.4869;stroke-linecap:round;stroke-linejoin:round}</style><path class="ma0" d="m30.9 70 0.1-15.4c0-0.9 0.4-1.9 1.1-2.6l7.3-7.4"/><path class="ma0" d="m45.5 41.9h16.4c0.9 0 1.8-0.3 2.5-1l7.5-7.3"/><path class="ma0" d="m118.7 77v17.1c0 1-0.3 2-1 2.7l-7.4 7.6"/><path class="ma0" d="m78.9 118.7 15.7 0.1c1 0 1.9-0.3 2.6-1l8-8"/><path class="ma1" d="m60 59.7-15-15.1m-5.7-5.7-7.6-7.3m10.4 71.1v-15.7c0-0.9-0.3-1.8-1.1-2.6l-6.9-7.1m-10.6 48.4 15.7-15.5m32.4 24.4-7.3-5.7-19.3-18.5m59.9-6.6-14.6-14.8m35.9 36.5-15.4-15.2m22.9-21-11.8-11.8m13.2-19.8-13.5 13.7m-43.5-44.4 10.7-10.5"/><path class="ma1" d="m60.9 15.9 10.9 11.1m3.1 7.1v23.9"/><path class="ma1" d="m78.1 33.4 37.7 38"/><path class="ma1" d="m96.1 74.4h18.7"/><path class="ma1" d="m35.8 74.4h18.2"/><path class="ma1" d="m44.9 104.2 15-15.2"/><path class="ma1" d="m64.2 128.3 7.4-6.7"/><path class="ma1" d="m74.9 96.1v18.7"/><path class="ma1" d="m21.9 65.3c-0.5 0-1.1 0.2-1.4 0.6l-5.6 5.9"/><path class="ma1" d="m28.2 71.6-5.4-5.9"/><path class="ma1" d="m66 58h18.1c6.1 0 11.7 5.1 11.7 11.9v14c0 3-2.3 5-4.8 5h-31.7c-2.2 0-5-1.8-5-5.1v-13.2c0-7.2 5.5-12.6 11.7-12.6z"/><path class="ma1" d="m68.4 65h12.9c4.2 0 7.8 3.3 7.8 7.6s-3.1 7.8-7.8 7.8h-12.9c-4.1 0-7.4-3.3-7.4-7.6s3.6-7.8 7.4-7.8z"/><path class="ma1" d="m68.4 73.7v-1.9m12.7 1.9v-1.9"/><path class="ma1" d="m70.4 89c-0.5 2.5-1.1 4.4-1.7 6.7"/><path class="ma1" d="m79.5 89.5c0.6 2.1 1 3.8 1.8 6.3"/><path class="ma1" d="m64 96h22"/><path class="ma1" d="m111.6 22.6c-4.7 0.7-10.3 5.7-10.3 11.7 0 6.3 5 11.3 12.2 11.4 6.6 0 9.8-4.7 10.5-6.3-6 2.3-13.9-0.5-15.2-8.3-0.4-3.1 0.6-6.2 2.8-8.8v0.3z"/><circle class="ma1" cx="92.1" cy="13.7" r="3.9"/><circle class="ma1" cx="57.9" cy="12.8" r="3.9"/><ellipse class="ma1" cx="28.6" cy="28.9" rx="3.9" ry="3.9"/><circle class="ma1" cx="42.1" cy="42" r="3.9"/><circle class="ma1" cx="11.9" cy="74.4" r="3.9"/><circle class="ma1" cx="30.9" cy="74.4" r="3.9"/><circle class="ma1" cx="137.9" cy="54.5" r="3.9"/><circle class="ma1" cx="136.8" cy="92.1" r="3.9"/><circle class="ma1" cx="129.4" cy="128.6" r="3.9"/><circle class="ma1" cx="107.7" cy="107.2" r="3.9"/><circle class="ma1" cx="75.1" cy="137.1" r="3.9"/><circle class="ma1" cx="75.1" cy="118.8" r="3.9"/><circle class="ma1" cx="20.6" cy="128.6" r="3.9"/><circle class="ma1" cx="42.1" cy="107.2" r="3.9"/><circle class="ma1" cx="118.7" cy="74.4" r="3.9"/><circle class="ma1" cx="75" cy="30.1" r="3.9"/></svg></div>
          <div class="who">For You</div>
          <h3>Managed Agents</h3>
          <p>We build it, run it, and keep it sharp. Like hiring a teammate who never sleeps, never forgets to follow up, and never lets a lead go cold.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===================== APPROACH / AOA ===================== -->
<section id="approach">
  <div class="wrap">
    <div class="sec-head center">
      <span class="kicker">Built by operators, not engineers</span>
      <h2>AI doesn't fix a broken process. It <em>scales</em> one.</h2>
      <p>So we work in a deliberate order. It's also why "I tried AI and it flopped" almost always means the first two steps got skipped.</p>
    </div>
    <div class="aoa">
      <div class="aoa-step"><div class="letter">A</div><h3>Audit</h3><p>We learn how the work really flows today, and find what's quietly slowing you down.</p></div>
      <div class="aoa-step"><div class="letter">O</div><h3>Optimize</h3><p>We clear out the busywork and get the process clean — by hand, first.</p></div>
      <div class="aoa-step"><div class="letter">A</div><h3>Automate</h3><p>Then AI takes the repeatable parts, and you keep every judgment call.</p></div>
    </div>
  </div>
</section>

<!-- ===================== WHO ===================== -->
<section id="who" class="band">
  <div class="wrap">
    <div class="sec-head">
      <span class="kicker">Who it's for</span>
      <h2>For owners who run real businesses.</h2>
      <p>If you grow by answering customers fast and doing great work, this was built for you. A few we know well — and the list keeps growing:</p>
    </div>
    <div class="niches">
      <span class="niche">Roofers</span><span class="niche">Dentists</span><span class="niche">Landscapers</span><span class="niche">Med spas</span><span class="niche">Realtors</span><span class="niche">Accounting firms</span><span class="niche">HVAC &amp; plumbing</span><span class="niche">Law practices</span><span class="niche">Auto shops</span><span class="niche">Contractors</span>
    </div>
  </div>
</section>

<!-- ===================== FINAL CTA ===================== -->
<section id="book" class="final">
  <div class="wrap">
    <span class="kicker" style="justify-content:center;display:inline-flex">Your move</span>
    <h2 style="margin-top:20px">See the business you could be running.</h2>
    <p>Fifteen minutes, no slides, no commitment — just a clear read on the one change that would pay for itself the fastest.</p>
    <a href="#" class="btn-primary" style="font-size:16px;padding:15px 28px">Book your free 15-min AI Assessment</a>
  </div>
</section>

<footer>
  <div class="wrap foot-inner">
    <div class="logo" style="font-size:16px"><span class="dot"></span>Hybrid Theory</div>
    <div style="font-family:Inter">AI consulting for real businesses · hybridtheory.ai</div>
  </div>
</footer>`;

type FlowItem = { tab: string; steps: string[] };

const CYCLER: FlowItem[] = [
  { tab: "Speed-to-lead", steps: ["A new lead comes in", "Your AI replies in under 5 minutes", "The conversation gets booked"] },
  { tab: "Missed call", steps: ["A call goes unanswered", "A friendly text goes out instantly", "They book instead of bouncing"] },
  { tab: "Instant quote", steps: ["A customer asks for a price", "Your AI drafts the quote", "It goes out the same hour"] },
  { tab: "Reviews", steps: ["A job is marked complete", "A review request goes out", "A new 5-star rolls in"] },
];

export function HomeRest() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const tabsEl = root.querySelector<HTMLElement>("#cyc-tabs");
    const flowEl = root.querySelector<HTMLElement>("#cyc-flow");
    let timer: ReturnType<typeof setInterval> | null = null;

    if (tabsEl && flowEl) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let idx = 0;
      let auto = true;

      const render = () => {
        Array.from(tabsEl.children).forEach((c, i) => {
          (c as HTMLElement).className = "cyc-tab" + (i === idx ? " on" : "");
        });
        const d = CYCLER[idx];
        flowEl.innerHTML = "";
        d.steps.forEach((s, i) => {
          const step = document.createElement("div");
          step.className = "flow-step cyc-fade" + (i === 2 ? " final" : "");
          step.innerHTML = '<span class="n">' + (i + 1) + '</span><span class="s">' + s + "</span>";
          flowEl.appendChild(step);
          if (i < 2) {
            const a = document.createElement("div");
            a.className = "flow-arrow";
            a.textContent = "→";
            flowEl.appendChild(a);
          }
        });
      };

      tabsEl.innerHTML = "";
      CYCLER.forEach((d, i) => {
        const b = document.createElement("button");
        b.className = "cyc-tab" + (i === 0 ? " on" : "");
        b.textContent = d.tab;
        b.onclick = () => {
          auto = false;
          if (timer) clearInterval(timer);
          idx = i;
          render();
        };
        tabsEl.appendChild(b);
      });
      render();
      if (!reduce) {
        timer = setInterval(() => {
          if (auto) {
            idx = (idx + 1) % CYCLER.length;
            render();
          }
        }, 3600);
      }
    }
    return () => { if (timer) clearInterval(timer); };
  }, []);

  return <div id="ht-v2" ref={ref} dangerouslySetInnerHTML={{ __html: MARKUP }} />;
}
