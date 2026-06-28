"use client";

const MARKUP = `<div class="bg"><div class="glow"></div><div class="grid"></div><div class="vignette"></div></div>

<!-- ===================== HERO ===================== -->



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

export function HomeRest() {
  // eslint-disable-next-line react/no-danger
  return <div id="ht-v2" dangerouslySetInnerHTML={{ __html: MARKUP }} />;
}
