/* eslint-disable */
// Insights — Stripe-style article list with Option D header.
// Vertical hairline columns · article entries with text + author + visual

const STRIPE_ARTICLES = [
  {
    slug: "ai-strategy-12-person-business",
    tag: "Strategy",
    date: "May 14, 2026",
    author: "Mara Chen",
    role: "Senior Engineer, Hybrid Theory",
    title: "What \"AI strategy\" should mean for a 12-person business.",
    excerpt: "Strategy decks for SMBs are mostly theatre. Here's what we replace them with — and why the version we ship in 30 days is shorter, sharper, and gets used.",
    visual: { kind: "mock-strategy", caption: "30-Day Readiness Audit" },
  },
  {
    slug: "photo-to-quote-tucson",
    tag: "Build",
    date: "April 28, 2026",
    author: "Devon Hill",
    role: "Engineer, Hybrid Theory",
    title: "Photo-to-quote, built in 11 days for a Tucson auto shop.",
    excerpt: "How one custom tool moved average quote-turnaround from two days to under fifteen minutes — and what we learned about training a model on real shop photos.",
    visual: { kind: "mock-quote", caption: "Acme Auto · Photo to Quote" },
  },
  {
    slug: "stop-hiring-cao",
    tag: "Strategy",
    date: "March 19, 2026",
    author: "Mara Chen",
    role: "Senior Engineer, Hybrid Theory",
    title: "Stop hiring a Chief AI Officer. Hire a Tuesday.",
    excerpt: "On the surprising impact of a single half-day per week embedded in your business — and why retainers beat headcount when you're under 50 people.",
    visual: { kind: "mock-letter", caption: "Hire a Tuesday" },
  },
  {
    slug: "three-prompt-patterns",
    tag: "Craft",
    date: "February 02, 2026",
    author: "Yusuf Khan",
    role: "Engineer, Hybrid Theory",
    title: "Three prompt patterns we use with every owner-facing tool.",
    excerpt: "Voice examples, refusal clauses, and 'why this slot' explanations. Small changes that make AI output trustable enough for an owner to send without reading every word.",
    visual: { kind: "mock-prompts", caption: "Prompt Pattern Library" },
  },
  {
    slug: "voicemail-to-crm",
    tag: "Build",
    date: "January 11, 2026",
    author: "Devon Hill",
    role: "Engineer, Hybrid Theory",
    title: "Voicemail → CRM ticket, end-to-end, in a single afternoon.",
    excerpt: "What we built for a dental office on a 4-hour pairing session. Now their front desk doesn't transcribe anything — and the receptionist takes Tuesdays off.",
    visual: { kind: "mock-voicemail", caption: "Voicemail Pipeline" },
  },
];

const STRIPE_FILTERS = ["All", "Strategy", "Build", "Craft", "Hiring"];
const TAG_ACCENT = {
  Strategy: "var(--amber)",
  Build:    "var(--lime)",
  Craft:    "var(--cyan)",
  Hiring:   "var(--magenta)",
  Industry: "var(--lime)",
};

/* ============================================================
   Per-tag tiny visual placeholders (instead of real imagery)
   ============================================================ */
function ArticleVisual({ v, accent }) {
  const wrap = {
    background: "var(--paper-2)",
    border: "1px solid var(--rule)",
    borderRadius: 14,
    padding: 28,
    aspectRatio: "5 / 3",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  if (v.kind === "mock-strategy") {
    return (
      <div style={wrap}>
        <div style={{ position: "absolute", top: -40, right: -30, width: 200, height: 200, borderRadius: "50%", background: "var(--accent)", filter: "blur(60px)", opacity: 0.20 }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="mono" style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600 }}>30-day readiness</div>
          <h4 style={{ fontFamily: "var(--serif)", fontSize: 28, lineHeight: 1.1, letterSpacing: "-0.02em", margin: "8px 0 14px", color: "var(--ink)" }}>Acme Auto · Tucson</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {["Week 1 — Discovery", "Week 2 — Inventory", "Week 3 — Opportunities", "Week 4 — Roadmap"].map((t, i) => (
              <div key={t} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 8, alignItems: "center" }}>
                <span style={{ width: 10, height: 10, borderRadius: 99, background: i < 2 ? "var(--accent)" : "var(--rule)" }} />
                <span style={{ fontSize: 12, color: i < 2 ? "var(--ink)" : "var(--ink-soft)" }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mono" style={{ fontSize: 9.5, letterSpacing: "0.14em", color: "var(--ink-mute)", textTransform: "uppercase", position: "relative", zIndex: 1 }}>{v.caption}</div>
      </div>
    );
  }
  if (v.kind === "mock-quote") {
    return (
      <div style={wrap}>
        <div className="mono" style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600 }}>Quote #1147</div>
        <div>
          <h4 style={{ fontFamily: "var(--serif)", fontSize: 24, lineHeight: 1.1, letterSpacing: "-0.02em", margin: "12px 0 14px", color: "var(--ink)" }}>Front-axle brake service · '19 Civic</h4>
          <div style={{ background: "#FFFFFF", border: "1px solid var(--rule)", borderRadius: 8, padding: 12, fontSize: 12.5, color: "var(--ink)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderBottom: "1px dashed var(--rule)" }}>
              <span>Brake rotor, front (×2)</span><span className="mono">$184.00</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderBottom: "1px dashed var(--rule)" }}>
              <span>Brake pad set, front</span><span className="mono">$78.00</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderBottom: "1px dashed var(--rule)" }}>
              <span>Labor (2.5 hrs)</span><span className="mono">$275.00</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0 0", fontWeight: 600 }}>
              <span>Total</span>
              <span className="mono" style={{ color: "var(--accent)" }}>$579.00</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (v.kind === "mock-letter") {
    return (
      <div style={{ ...wrap, background: "#FFFFFF", color: "#0A0A08", padding: 32 }}>
        <div style={{ fontFamily: "var(--serif)", fontSize: 14, fontStyle: "italic", color: "var(--ink-mute)" }}>Dear Board,</div>
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <div style={{ fontFamily: "var(--serif)", fontSize: 36, lineHeight: 1.05, letterSpacing: "-0.025em", color: "#0A0A08", fontStyle: "italic" }}>Hire a <span style={{ background: "var(--accent)", padding: "0 6px" }}>Tuesday</span>, not a CTO.</div>
        </div>
        <div className="mono" style={{ fontSize: 9.5, letterSpacing: "0.14em", color: "var(--ink-mute)", textTransform: "uppercase" }}>Memo · March 2026</div>
      </div>
    );
  }
  if (v.kind === "mock-prompts") {
    return (
      <div style={wrap}>
        <div className="mono" style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600 }}>Three patterns</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 12 }}>
          {[
            { n: "01", t: "Voice examples", d: "3 real messages → match tone" },
            { n: "02", t: "Refusal clauses", d: "when not to draft anything" },
            { n: "03", t: "\"Why this slot\"", d: "explain the choice in 2 lines" },
          ].map((p) => (
            <div key={p.n} style={{ background: "#FFFFFF", border: "1px solid var(--rule)", borderRadius: 8, padding: "10px 12px", display: "grid", gridTemplateColumns: "30px 1fr", gap: 10 }}>
              <span className="mono" style={{ fontSize: 10, color: "var(--accent)", letterSpacing: "0.12em" }}>{p.n}</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "var(--ink)" }}>{p.t}</div>
                <div style={{ fontSize: 11.5, color: "var(--ink-soft)", marginTop: 2 }}>{p.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (v.kind === "mock-voicemail") {
    return (
      <div style={wrap}>
        <div className="mono" style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600 }}>Inbound voicemail</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
          {[
            { who: "Marisol R.", t: "Tue 9:14a", note: "Brake quote — '19 Civic" },
            { who: "Devon H.",   t: "Tue 10:02a", note: "Tune-up follow-up" },
            { who: "Aisha B.",   t: "Tue 12:30p", note: "Tire rotation + alignment", hot: true },
          ].map((m) => (
            <div key={m.who} style={{ background: "#FFFFFF", border: "1px solid var(--rule)", borderRadius: 8, padding: "10px 12px", display: "grid", gridTemplateColumns: "1fr auto", gap: 8 }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "var(--ink)" }}>{m.who}</div>
                <div style={{ fontSize: 11.5, color: "var(--ink-soft)" }}>{m.note}</div>
              </div>
              <span className="mono" style={{ fontSize: 10, background: m.hot ? "var(--accent)" : "var(--paper-2)", color: m.hot ? "#0A0A08" : "var(--ink-soft)", padding: "3px 8px", borderRadius: 99, alignSelf: "center", letterSpacing: "0.08em" }}>{m.t}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
}

/* ============================================================
   Stripe-style row entry
   ============================================================ */
function StripeRow({ a }) {
  const accent = TAG_ACCENT[a.tag] || "var(--accent)";
  return (
    <article className="stripe-row">
      {/* Top — text + meta */}
      <div className="stripe-row-text">
        <div className="stripe-tag mono" style={{ borderLeftColor: accent, color: accent }}>{a.tag}</div>
        <h2 className="stripe-row-title">{a.title}</h2>
        <p className="stripe-row-excerpt">{a.excerpt}</p>
        <a href={`article.html?slug=${a.slug}`} className="stripe-read-more">Read more <span className="mono">›</span></a>
      </div>
      <div className="stripe-row-meta">
        <div className="stripe-row-date">
          <span className="stripe-meta-bar" style={{ background: accent }} />
          <span className="mono">{a.date}</span>
        </div>
        <div className="stripe-row-author">
          <div className="stripe-author-avatar">{a.author.split(" ").map(n => n[0]).join("")}</div>
          <div>
            <div className="stripe-author-name">{a.author}</div>
            <div className="stripe-author-role">{a.role}</div>
          </div>
        </div>
      </div>

      {/* Bottom — visual spanning right columns */}
      <div className="stripe-row-visual">
        <ArticleVisual v={a.visual} accent={accent} />
      </div>
    </article>
  );
}

/* ============================================================
   Page
   ============================================================ */
function InsightsPageApp() {
  const [filter, setFilter] = React.useState("All");
  const list = filter === "All" ? STRIPE_ARTICLES : STRIPE_ARTICLES.filter(a => a.tag === filter);
  return (
    <>
      <SiteNav active="insights.html" />
      <main className="stripe-blog">
        {/* ─── HERO (Option D · Newsletter-led) ─── */}
        <section className="optd-hero">
          <div className="wrap">
            <div className="optd-hero-card">
              <div className="optd-hero-glow" aria-hidden="true" />
              <div className="optd-hero-grid">
                <div className="optd-hero-text">
                  <div className="mono optd-hero-pretitle">§ Hybrid Theory · From the studio</div>
                  <h1 className="optd-hero-h">
                    A monthly letter from <span className="italic" style={{ color: "var(--accent)" }}>working engineers</span>.
                  </h1>
                  <p className="optd-hero-lead">
                    One email a month. What we shipped, what we read, what we got wrong. No funnel, no follow-up sequence, no other emails ever.
                  </p>
                  <form className="optd-hero-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="email" placeholder="you@yourdomain.com" />
                    <button type="submit">Subscribe <span style={{ opacity: 0.6, fontSize: 12 }}>→</span></button>
                  </form>
                  <div className="mono optd-hero-stat">2,184 readers · ~once / month · no spam ever</div>
                </div>
                <div className="optd-hero-preview" aria-hidden="true">
                  <div className="mono optd-hero-preview-meta">Latest issue · May 14</div>
                  <div className="optd-hero-preview-title">What "AI strategy" should mean for a 12-person business.</div>
                  <p className="optd-hero-preview-body">Hi friends — this week we wrote about something that's been bugging us for months. Most strategy decks for SMBs are theatre — eighty-three slides, two of which the owner has actually read…</p>
                  <div className="optd-hero-preview-link">Read in browser →</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Filter pills (sticky) ─── */}
        <section className="stripe-filters-wrap">
          <div className="wrap">
            <div className="stripe-filters">
              {STRIPE_FILTERS.map((f) => (
                <button key={f} onClick={() => setFilter(f)} className={"stripe-pill " + (filter === f ? "active" : "")}>{f}</button>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Article list with vertical hairlines ─── */}
        <section className="stripe-list">
          <div className="wrap">
            <div className="stripe-list-grid">
              {list.map((a) => <StripeRow key={a.slug} a={a} />)}
            </div>

            <div className="stripe-view-all">
              <a href="archive.html" className="btn btn-ghost">View all posts <span style={{ opacity:0.6, fontSize:11 }}>›</span></a>
              <span className="mono stripe-archive-count">32 pieces · 2024 → present</span>
            </div>
          </div>
        </section>

        <PageCTA
          title={<>Or, if you'd rather talk than read — <span className="italic" style={{ color:"var(--accent)" }}>book a call</span>.</>}
          sub="A 30-minute conversation. No slides, no pitch."
        />
      </main>
      <SiteFooter />
      <SiteTweaks />
    </>
  );
}

Object.assign(window, { InsightsPageApp, STRIPE_ARTICLES, StripeRow, ArticleVisual, TAG_ACCENT });
