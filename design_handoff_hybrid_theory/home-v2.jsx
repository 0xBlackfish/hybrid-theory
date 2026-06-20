// Hybrid Theory — Home v2 (Studio pattern)
// Hero → Services (4 alternating spreads) → Approach → Insights → Tools strip → CTA
const { useState, useEffect, useRef } = React;

const HomeApp = () => {
  const defaults = /*EDITMODE-BEGIN*/{
    "palette": "lime",
    "type": "grotesque",
    "logoVariant": "wordmark",
    "waveTint": "slate",
    "sectionLayout": "strip"
  } /*EDITMODE-END*/;

  const [t, setTweak] = useTweaks(defaults);

  useEffect(() => {
    document.documentElement.dataset.palette = t.palette;
    document.documentElement.dataset.type = t.type;
  }, [t.palette, t.type]);

  useEffect(() => {
    const onScroll = () => {
      const nav = document.querySelector(".nav");
      if (!nav) return;
      nav.classList.toggle("scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Nav logoVariant={t.logoVariant} />
      <main>
        <Hero waveTint={t.waveTint} />
        {t.sectionLayout === "scrollspy" ? <ScrollSpyServices /> :
        t.sectionLayout === "strip" ? <StripServices /> :
        <RailServices />}
        <ApproachDocument />
        <TeamSection />
        <InsightsFeatured />
        <ToolsStrip />
        <CTA />
      </main>
      <Footer logoVariant={t.logoVariant} />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Section 01 layout">
          <TweakRadio value={t.sectionLayout} onChange={(v) => setTweak("sectionLayout", v)}
          options={[{ value: "rail", label: "Rail (B)" }, { value: "strip", label: "Strip (C)" }, { value: "scrollspy", label: "Spy (E)" }]} />
        </TweakSection>
        <TweakSection title="Wave tint">
          <TweakColor
            label="Hero waves"
            value={t.waveTint}
            onChange={(v) => setTweak("waveTint", v)}
            options={[["#1A1B20", "#0E0F12", "#F4F2EA"], ["#1A2B14", "#0E0F12", "#B9FF35"], ["#2A1F0F", "#0E0F12", "#F5A623"], ["#1F1416", "#0E0F12", "#FF3DA5"]]}
            optionValues={["slate", "lime", "amber", "plum"]} />
        </TweakSection>
        <TweakSection title="Accent color">
          <TweakColor
            label="Pop"
            value={t.palette}
            onChange={(v) => setTweak("palette", v)}
            options={[["#B9FF35", "#0E0F12", "#F4F2EA"], ["#F5A623", "#0E0F12", "#F4F2EA"], ["#FF3DA5", "#0E0F12", "#F4F2EA"], ["#5BE3FF", "#0E0F12", "#F4F2EA"]]}
            optionValues={["lime", "amber", "magenta", "sky"]} />
        </TweakSection>
        <TweakSection title="Typography">
          <TweakRadio value={t.type} onChange={(v) => setTweak("type", v)}
          options={[{ value: "editorial", label: "Editorial" }, { value: "grotesque", label: "Grotesque" }, { value: "mono", label: "Mono" }]} />
        </TweakSection>
        <TweakSection title="Logo in nav">
          <TweakRadio value={t.logoVariant} onChange={(v) => setTweak("logoVariant", v)}
          options={[{ value: "wordmark", label: "Wordmark" }, { value: "mark", label: "Mark" }, { value: "lockup", label: "Lockup" }]} />
        </TweakSection>
        <TweakSection title="Foundations">
          <a className="btn btn-ghost" href="Design System.html" style={{ width: "100%", justifyContent: "center" }}>
            Open Design System →
          </a>
          <a className="btn btn-ghost" href="Directions.html" style={{ width: "100%", justifyContent: "center", marginTop: 8 }}>
            Compare directions →
          </a>
        </TweakSection>
      </TweaksPanel>
    </>);
};

/* ============================================================
   Nav — white paper bg, smaller heavier text, negative space right
   ============================================================ */
const Nav = ({ logoVariant }) => {
  const [open, setOpen] = React.useState(false);
  return (
  <nav className={"nav nav-studio" + (open ? " open" : "")}>
    <div className="nav-inner-grid">
      <a href="#" className="nav-logo" style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none", color: "var(--ink)" }}>
        {logoVariant === "lockup" ?
      <Logo variant="lockup" size={32} /> :
      logoVariant === "mark" ?
      <Logo variant="mark" size={24} /> :
      <span style={{ display: "inline-flex", alignItems: "center", gap: 11 }}>
            <Logo variant="mark" size={28} />
            <Logo variant="wordmark" size={18} />
          </span>}
      </a>
      <div className="nav-links nav-links-studio">
        <a href="services.html">Services</a>
        <a href="insights.html">Insights</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
      </div>
      <div className="nav-cta">
        <a href="#" data-calendly className="btn btn-primary nav-btn">
          Book a call <span style={{ opacity: 0.6, fontSize: 11 }}>↗</span>
        </a>
      </div>
      <button className="nav-toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(o => !o)}>
        {open ?
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 4 L14 14 M14 4 L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg> :
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 5 H15 M3 9 H15 M3 13 H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>}
      </button>
    </div>
    <div className="nav-mobile-panel">
      <a href="services.html" onClick={() => setOpen(false)}>Services</a>
      <a href="insights.html" onClick={() => setOpen(false)}>Insights</a>
      <a href="about.html" onClick={() => setOpen(false)}>About</a>
      <a href="contact.html" onClick={() => setOpen(false)}>Contact</a>
      <div className="nav-mobile-cta">
        <a href="#" data-calendly className="btn btn-primary" onClick={() => setOpen(false)}>Book a call <span style={{ opacity:0.6, fontSize:11 }}>↗</span></a>
      </div>
    </div>
  </nav>);
};

/* ============================================================
   Hero — no bottom rule, plenty of breathing room
   ============================================================ */
// Hero marquee tools — real SVG wordmarks
const MARQUEE_TOOLS = [
{ name: "Stripe", file: "stripe.svg" },
{ name: "Shopify", file: "shopify.svg" },
{ name: "Gmail", file: "gmail.svg" },
{ name: "Slack", file: "slack.svg" },
{ name: "Notion", file: "notion.svg" },
{ name: "Square", file: "square.svg" },
{ name: "Calendly", file: "calendly.svg" },
{ name: "Google Calendar", file: "google-calendar.svg" },
{ name: "Zoom", file: "zoom.svg" }];


const WAVE_TINTS = {
  slate: 0x1A1B20,
  lime: 0x1A2B14,
  amber: 0x2A1F0F,
  plum: 0x1F1416
};

const Hero = ({ waveTint = "slate" }) => {
  const vantaRef = React.useRef(null);
  const vantaInst = React.useRef(null);

  React.useEffect(() => {
    let cancelled = false;
    const tryInit = () => {
      if (cancelled || !vantaRef.current) return;
      if (window.VANTA && window.VANTA.WAVES) {
        // tear down any previous instance before recreating
        try {vantaInst.current && vantaInst.current.destroy && vantaInst.current.destroy();} catch (e) {}
        vantaInst.current = window.VANTA.WAVES({
          el: vantaRef.current,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          color: WAVE_TINTS[waveTint] || WAVE_TINTS.slate,
          shininess: 35,
          waveHeight: 14,
          waveSpeed: 0.45,
          zoom: 0.88
        });
      } else {
        setTimeout(tryInit, 150);
      }
    };
    tryInit();
    return () => {
      cancelled = true;
      try {vantaInst.current && vantaInst.current.destroy && vantaInst.current.destroy();} catch (e) {}
    };
  }, [waveTint]);

  return (
    <section className="hero-studio">
      {/* vanta waves atmosphere */}
      <div ref={vantaRef} className="hero-vanta" aria-hidden="true" />

      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        <h1 className="hero-h fade-up">
          Every company is a tech company now.<br />
          <span className="italic" style={{ color: "var(--accent)" }}>We help you make the leap.</span>
        </h1>
        <div className="hero-row fade-up d2">
          <p className="hero-tag">
            Hybrid Theory is a small studio of builders — engineers, designers, and data scientists. We pair with regular businesses to ship the software they need to act on the moment.
          </p>
          <div className="hero-cta-row">
            <a href="#contact" className="btn btn-primary">
              Book a call <span style={{ opacity: 0.6, fontSize: 11 }}>↗</span>
            </a>
            <a href="#services" className="btn btn-ghost">
              See what we build
            </a>
          </div>
        </div>
      </div>

      {/* tools marquee */}
      <div className="hero-marquee tools-marquee" aria-hidden="true">
        <div className="tm-label mono">Works with</div>
        <div className="tm-viewport">
          <div className="marquee-track">
            {[...MARQUEE_TOOLS, ...MARQUEE_TOOLS, ...MARQUEE_TOOLS].map((t, i) =>
            <span className="marquee-item tm-item" key={i}>
                <img className="tm-logo" src={`assets/logos/${t.file}`} alt={t.name} />
                <span className="marquee-sep">✦</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </section>);

};

/* ============================================================
   SERVICES — Figma-style overarching header + 4 alternating spreads
   ============================================================ */
const SERVICES = [
{
  n: "01", key: "automate", tab: "Automation",
  titleA: "Hand the busywork", titleI: " to AI.",
  blurb: "We find the repetitive work eating your week — bookings, emails, follow-ups, data entry — and quietly automate it end-to-end. You stay the owner; the work just gets done.",
  bullets: ["Email + intake triage", "Quote follow-up loops", "Review + reply pipelines", "Data entry between systems"],
  cta: "How automation works",
  Demo: AutomateDemo
},
{
  n: "02", key: "strategy", tab: "Strategy",
  titleA: "A roadmap,", titleI: " not a slide deck.",
  blurb: "A 30-day readiness audit that maps where AI actually pays back in your business — and a plan you can hand to anyone, including us. Concrete, specific, short enough to actually use.",
  bullets: ["Owner + staff interviews", "Stack + workflow inventory", "Opportunities ranked by payback", "Quarter-by-quarter roadmap"],
  cta: "Inside a readiness audit",
  Demo: StrategyDemo
},
{
  n: "03", key: "tools", tab: "Custom tools",
  titleA: "Software shaped", titleI: " around your business.",
  blurb: "Quoting tools that read photos. Agents that handle your inbox. Internal apps the off-the-shelf software can't do. Yours to keep, documented in plain English.",
  bullets: ["Photo-to-quote estimators", "Inbound voice → CRM agents", "Internal dashboards", "Bespoke web tools"],
  cta: "See a custom tool",
  Demo: ToolsDemo
},
{
  n: "04", key: "train", tab: "Training",
  titleA: "Confident with AI", titleI: " in an afternoon.",
  blurb: "We train your team on the tools they'll actually use, with your data, in your voice. Not a generic ChatGPT primer — a hands-on session that ends with them shipping work.",
  bullets: ["On-site or remote workshops", "Custom curriculum per role", "Voice + prompt libraries", "30-day async support"],
  cta: "What training looks like",
  Demo: TrainDemo
}];


const ServicesSection = () =>
<section className="svc-section" id="services">
    <div className="wrap">
      <header className="sec-overhead">
        <div className="sec-marker mono">
          <span className="sec-num">§ 01</span>
          <span className="sec-name">Services</span>
        </div>
        <h2 className="sec-h">
          Four ways we put AI to work — <span className="italic">all of them tied to revenue</span>, none of them a science project.
        </h2>
        <div className="sec-sub">
          <p>
            We work the way good studios work: scope tightly, ship something real, and stay
            on the line when it breaks. Pick one service, mix several, or hand us the whole
            quarter.
          </p>
        </div>
      </header>

      <div className="svc-spreads">
        {SERVICES.map((s, i) => {
        const Demo = s.Demo;
        const reverse = i % 2 === 1;
        return (
          <article className={"svc-spread " + (reverse ? "reverse" : "")} key={s.key}>
              <div className="svc-copy">
                <div className="svc-marker mono">
                  <span className="svc-n">{s.n}</span>
                  <span className="svc-sep" />
                  <span className="svc-t">{s.tab}</span>
                </div>
                <h3 className="svc-h">
                  {s.titleA}<span className="italic" style={{ color: "var(--accent)" }}>{s.titleI}</span>
                </h3>
                <p className="svc-blurb">{s.blurb}</p>
                <ul className="svc-bullets">
                  {s.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <a className="btn-arrow" href="#contact">{s.cta} <span className="ar">→</span></a>
              </div>
              <div className="svc-visual">
                <div className="svc-stage-card">
                  <Demo />
                </div>
              </div>
            </article>);

      })}
      </div>
    </div>
  </section>;

/* ============================================================
   APPROACH — Section 02, two-track engagement model
   ============================================================ */
const ApproachSection = () =>
<section id="approach" className="approach-studio">
    <div className="wrap">
      <header className="sec-overhead">
        <div className="sec-marker mono">
          <span className="sec-num">§ 02</span>
          <span className="sec-name">Approach</span>
        </div>
        <h2 className="sec-h">
          Two ways to work with us. <span className="italic">Both start with a real conversation</span> — not a sales pitch.
        </h2>
        <div className="sec-sub">
          <p>
            Most studios pick a model and force-fit every client into it. We don't. Choose
            the engagement that matches where you are; switch tracks when it changes.
          </p>
        </div>
      </header>

      <div className="appr-grid">
        <article className="appr-card">
          <div className="appr-head">
            <span className="appr-tag mono">Track 01 · Project</span>
            <span className="appr-price mono">Fixed fee</span>
          </div>
          <h3 className="appr-h">A specific thing, built well.</h3>
          <p className="appr-blurb">
            You have a known problem. We scope it, price it once, build it, and stick
            around for the bumps.
          </p>
          <div className="appr-flow">
            {["Scope", "Build", "Ship", "Maintain"].map((step, i) =>
          <div className={"appr-step " + (i === 1 ? "active" : "")} key={step}>
                <div className="appr-step-dot" />
                <div className="appr-step-l">{step}</div>
                <div className="appr-step-w mono">Week {[1, "2-4", 5, "6+"][i]}</div>
              </div>
          )}
          </div>
          <ul className="appr-list">
            <li>Fixed scope, fixed price, fixed timeline</li>
            <li>Deployed and documented in plain English</li>
            <li>Small monthly retainer for upkeep</li>
          </ul>
        </article>

        <article className="appr-card">
          <div className="appr-head">
            <span className="appr-tag mono">Track 02 · Retainer</span>
            <span className="appr-price mono">Monthly</span>
          </div>
          <h3 className="appr-h">An engineer on call.</h3>
          <p className="appr-blurb">
            You know AI matters but not exactly what you need yet. A monthly bucket of
            senior engineering hours you spend however you want.
          </p>
          <div className="appr-flow appr-flow-r">
            {["Ideas", "Builds", "Fixes", "Advice"].map((step) =>
          <div className="appr-chip" key={step}>{step}</div>
          )}
          </div>
          <ul className="appr-list">
            <li>Flexible hours, used at your discretion</li>
            <li>One Slack channel, two senior engineers</li>
            <li>Pause, scale, or stop whenever — no annual lock-in</li>
          </ul>
        </article>
      </div>
    </div>
  </section>;

/* ============================================================
   INSIGHTS — Section 03, editorial article previews
   ============================================================ */
const ARTICLES = [
{
  kicker: "Field note",
  title: "What \"AI strategy\" should mean for a 12-person business.",
  excerpt: "Strategy decks for SMBs are mostly theatre. Here's what we replace them with — and why it ships faster.",
  read: "8 min",
  date: "May 2026"
},
{
  kicker: "Case study",
  title: "Photo-to-quote, built in 11 days for a Tucson auto shop.",
  excerpt: "How one custom tool moved their average quote-turnaround from two days to under fifteen minutes.",
  read: "12 min",
  date: "Apr 2026"
},
{
  kicker: "Essay",
  title: "Stop hiring a Chief AI Officer. Hire a Tuesday.",
  excerpt: "On the surprising impact of a single half-day per week embedded in your business — and why retainers beat headcount.",
  read: "6 min",
  date: "Mar 2026"
}];


const InsightsSection = () =>
<section id="insights" className="ins-section">
    <div className="wrap">
      <header className="sec-overhead">
        <div className="sec-marker mono">
          <span className="sec-num">§ 04</span>
          <span className="sec-name">Insights</span>
        </div>
        <h2 className="sec-h">
          Plain-English notes from the work. <span className="italic">No thought-leadership, no funnels</span> — just what we've learned shipping.
        </h2>
        <div className="sec-sub">
          <p>
            Field notes, case studies, the occasional essay. Written for owners, not for
            other consultants.
          </p>
        </div>
      </header>

      <div className="ins-grid">
        {ARTICLES.map((a, i) =>
      <article className="ins-card" key={i}>
            <div className="ins-meta mono">
              <span className="ins-kicker">{a.kicker}</span>
              <span className="ins-dot" />
              <span>{a.date}</span>
            </div>
            <h3 className="ins-h">{a.title}</h3>
            <p className="ins-excerpt">{a.excerpt}</p>
            <div className="ins-foot">
              <a href="#" className="btn-arrow">Read <span className="ar">→</span></a>
              <span className="mono ins-read">{a.read}</span>
            </div>
          </article>
      )}
      </div>

      <div className="ins-all">
        <a className="btn btn-ghost" href="#">All writing <span style={{ opacity: 0.6, fontSize: 11 }}>↗</span></a>
      </div>
    </div>
  </section>;

/* ============================================================
   Demo frames (kept from prior — used inside service spreads)
   ============================================================ */
const Frame = ({ title, children, app }) =>
<div className="frame">
    <div className="frame-bar">
      <div className="frame-dots">
        <span className="fd r" /><span className="fd y" /><span className="fd g" />
      </div>
      <div className="frame-title mono">{title}</div>
      <div className="frame-app mono">{app}</div>
    </div>
    <div className="frame-body">{children}</div>
  </div>;

function AutomateDemo() {
  return (
    <Frame title="workflows / customer-intake" app="HT · Autoflow">
      <div className="auto-grid">
        <div className="auto-side">
          <div className="auto-side-h mono">WORKFLOWS</div>
          {["Customer intake", "Quote follow-up", "Review requests", "Inventory low", "No-show recovery"].map((n, i) =>
          <div key={n} className={"auto-side-row " + (i === 0 ? "sel" : "")}>
              <span className="dot" /> {n}
            </div>
          )}
          <button className="auto-new mono">+ NEW WORKFLOW</button>
        </div>
        <div className="auto-canvas">
          {[
          { t: "Trigger", h: "New booking request", s: "website · voicemail · SMS", k: "trigger" },
          { t: "AI", h: "Draft confirmation in your voice", s: "Pulls customer history", k: "ai" },
          { t: "Check", h: "Inventory & calendar", s: "In stock · Wed 2pm — open", k: "check" },
          { t: "Send", h: "Quote + booking link", s: "Auto-follow up in 24h", k: "send" }].
          map((node, i) =>
          <div key={i} className="auto-node">
              <div className={"auto-node-t mono " + node.k}>{node.t}</div>
              <div className="auto-node-h">{node.h}</div>
              <div className="auto-node-s">{node.s}</div>
            </div>
          )}
          <div className="auto-status mono">▶ RUNNING · 14 SUCCESS TODAY</div>
        </div>
      </div>
    </Frame>);
}

function StrategyDemo() {
  const phases = [
  { w: "Week 1", t: "Discovery", note: "Interview owner + key staff." },
  { w: "Week 2", t: "Inventory", note: "Map stack, surface friction." },
  { w: "Week 3", t: "Opportunities", note: "Rank by payback and risk." },
  { w: "Week 4", t: "Roadmap", note: "Quarter-by-quarter plan." }];

  return (
    <Frame title="audits / acme-auto-repair" app="HT · Readiness">
      <div className="strat-grid">
        <div className="strat-left">
          <div className="strat-h mono">30-DAY READINESS AUDIT</div>
          <div className="strat-name">Acme Auto · Tucson</div>
          <div className="strat-timeline">
            {phases.map((p, i) =>
            <div key={p.w} className={"strat-step " + (i < 2 ? "done" : i === 2 ? "now" : "")}>
                <div className="strat-step-dot" />
                <div>
                  <div className="strat-step-w mono">{p.w} · {p.t}</div>
                  <div className="strat-step-n">{p.note}</div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="strat-right">
          <div className="strat-h mono">OPPORTUNITIES — RANKED</div>
          {[
          { t: "Voicemail → CRM ticket", p: "Highest", e: "Low" },
          { t: "Photo-to-quote estimator", p: "High", e: "Medium" },
          { t: "Auto review-ask", p: "High", e: "Low" },
          { t: "Inventory reorder agent", p: "Medium", e: "Medium" }].
          map((o, i) =>
          <div key={i} className="strat-opp">
              <div className="strat-opp-t">{o.t}</div>
              <div className="strat-opp-tags">
                <span className="tag-p">{o.p} payback</span>
                <span className="tag-e">{o.e} effort</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </Frame>);
}

function ToolsDemo() {
  return (
    <Frame title="tools / photo-to-quote" app="Acme Auto · custom-built">
      <div className="tools-demo">
        <div className="tools-demo-left">
          <div className="td-step mono">UPLOAD</div>
          <div className="td-photo">
            <div className="td-photo-stripes" />
            <div className="td-photo-tag mono">brake-rotor-3.jpg · 2.1MB</div>
            <div className="td-photo-ai">⊹ AI extracting line items…</div>
          </div>
          <div className="td-actions">
            <span className="btn btn-ghost" style={{ fontSize: 12, padding: "6px 12px" }}>Re-upload</span>
            <span className="btn btn-primary" style={{ fontSize: 12, padding: "6px 12px" }}>Generate quote</span>
          </div>
        </div>
        <div className="tools-demo-right">
          <div className="td-step mono">QUOTE · DRAFT</div>
          <div className="td-quote-h">Front-axle brake service · '19 Civic</div>
          <div className="td-quote-meta mono">Quote #1147 · drafted in 4.2s</div>
          <table className="td-table">
            <tbody>
              <tr><td>Brake rotor, front (×2)</td><td className="tnum">$184.00</td></tr>
              <tr><td>Brake pad set, front</td><td className="tnum">$78.00</td></tr>
              <tr><td>Caliper service kit</td><td className="tnum">$42.00</td></tr>
              <tr><td>Labor (2.5 hrs)</td><td className="tnum">$275.00</td></tr>
              <tr className="total"><td>Total</td><td className="tnum">$579.00</td></tr>
            </tbody>
          </table>
          <div className="td-flags">
            <span className="flag-ok">✓ Within typical range</span>
            <span className="flag-warn">! Verify left caliper</span>
          </div>
        </div>
      </div>
    </Frame>);
}

function TrainDemo() {
  return (
    <Frame title="learning / your-team" app="HT · Enable">
      <div className="train-grid">
        <div className="train-modules">
          <div className="train-h mono">MODULES · WEEK 1</div>
          {[
          { t: "AI in your day", d: "45 min · interactive", done: true },
          { t: "Writing better prompts", d: "30 min · workshop", done: true },
          { t: "Email + draft assistant", d: "30 min · tool tour", done: true },
          { t: "Notes that write themselves", d: "45 min · hands-on", done: false, on: true },
          { t: "When to trust the AI", d: "30 min · case studies", done: false }].
          map((m, i) =>
          <div key={i} className={"train-mod " + (m.on ? "on" : "")}>
              <div className={"train-check " + (m.done ? "done" : "")}>{m.done ? "✓" : i + 1}</div>
              <div>
                <div className="train-mod-t">{m.t}</div>
                <div className="train-mod-d">{m.d}</div>
              </div>
            </div>
          )}
        </div>
        <div className="train-chat">
          <div className="train-h mono">YOUR AI · ASK ANYTHING</div>
          <div className="train-msg you">How do I stop the AI using corporate-speak with my regulars?</div>
          <div className="train-msg ai">
            Add three real emails you wrote yourself under "Voice examples". The model mirrors your tone — short sentences, first names, no sign-off boilerplate.
            <div className="train-msg-hint mono">⊹ Try it in Gmail · ⌘+Shift+A</div>
          </div>
          <div className="train-msg you">Got it — can my staff see this too?</div>
          <div className="train-input mono">type a question…</div>
        </div>
      </div>
    </Frame>);
}

/* ============================================================
   Tools strip — kept dark, but tighter studio framing
   ============================================================ */
const TOOLS = [
{ name: "QuickBooks", cat: "Accounting" }, { name: "Square", cat: "Payments" },
{ name: "Shopify", cat: "Commerce" }, { name: "Toast", cat: "Restaurants" },
{ name: "Stripe", cat: "Payments" }, { name: "Gmail", cat: "Email" },
{ name: "Outlook", cat: "Email" }, { name: "Calendly", cat: "Scheduling" },
{ name: "Slack", cat: "Comms" }, { name: "Notion", cat: "Docs" },
{ name: "HubSpot", cat: "CRM" }, { name: "Mailchimp", cat: "Marketing" },
{ name: "Zapier", cat: "Glue" }, { name: "Sheets", cat: "Spreadsheets" },
{ name: "Drive", cat: "Files" }, { name: "ChatGPT", cat: "AI" },
{ name: "Salesforce", cat: "CRM" }, { name: "Airtable", cat: "Database" },
{ name: "Excel", cat: "Spreadsheets" }, { name: "Klaviyo", cat: "Marketing" },
{ name: "Acuity", cat: "Scheduling" }, { name: "Jobber", cat: "Field service" },
{ name: "FreshBooks", cat: "Accounting" }, { name: "Microsoft 365", cat: "Workspace" }];


const ToolsStrip = () =>
<section className="tools-studio">
    <div className="wrap">
      <header className="sec-overhead sec-overhead-dark">
        <div className="sec-marker mono">
          <span className="sec-num">§ 05</span>
          <span className="sec-name">Toolkit</span>
        </div>
        <h2 className="sec-h">
          We build with the tools you{" "}
          <span className="italic" style={{ color: "var(--accent)" }}>already pay for</span>.
        </h2>
        <div className="sec-sub">
          <p>
            You don't change your stack — we meet it where it is. A short list of what
            we work with daily; if it has an API or a login, we'll find a way.
          </p>
        </div>
      </header>
      <div className="tools-grid">
        {TOOLS.map((t, i) =>
      <div className="tool-cell" key={t.name} style={{ animationDelay: i * 40 + "ms" }}>
            <div className="tool-glyph">{t.name.slice(0, 2).toUpperCase()}</div>
            <div className="tool-name">{t.name}</div>
            <div className="tool-cat mono">{t.cat}</div>
          </div>
      )}
      </div>
    </div>
  </section>;

/* ============================================================
   CTA
   ============================================================ */
const CTA = () =>
<section className="bigcta" id="contact">
    <div className="wrap">
      <div className="sec-marker mono" style={{ justifyContent: "center", display: "inline-flex" }}>
        <span className="sec-num">§ 06</span>
        <span className="sec-name">Start here</span>
      </div>
      <h2 className="mt-6">
        Tell us the thing in your business that{" "}
        <span className="italic" style={{ color: "var(--accent)" }}>shouldn't still be manual</span>.<br />
        We'll tell you if AI can fix it.
      </h2>
      <p className="lead">
        A 30-minute call, no slides, no pitch. We'll either point you in the right direction
        for free, or scope something we can build together.
      </p>
      <div className="cta">
        <a href="#" className="btn btn-primary">
          Book a call <span style={{ opacity: 0.7, fontSize: 11 }}>↗</span>
        </a>
        <a href="mailto:hello@hybridtheory.ai" className="btn btn-ghost">hello@hybridtheory.ai</a>
      </div>
    </div>
  </section>;

/* ============================================================
   Footer
   ============================================================ */
const Footer = ({ logoVariant }) =>
<footer>
    <div className="wrap">
      <div className="foot-grid">
        <div>
          <Logo variant="lockup" size={56} />
          <p className="mt-6" style={{ maxWidth: 280, fontSize: 13 }}>
            AI consulting for regular businesses.
          </p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="services.html#automation">Automation &amp; Custom Tools</a></li>
            <li><a href="services.html#strategy">AI Strategy</a></li>
            <li><a href="services.html#training">Team Training</a></li>
            <li><a href="services.html">All services ↗</a></li>
          </ul>
        </div>
        <div>
          <h4>Firm</h4>
          <ul>
            <li><a href="about.html">About</a></li>
            <li><a href="insights.html">Insights</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li><a href="mailto:hello@hybridtheory.ai">hello@hybridtheory.ai</a></li>
            <li><a href="#">Book a call ↗</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-bottom">
        <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.1em" }}>
          © 2026 · HYBRID THEORY · MMXXVI
        </div>
        <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.1em" }}>
          HYBRIDTHEORY.AI
        </div>
      </div>
    </div>
  </footer>;

Object.assign(window, { HomeApp });