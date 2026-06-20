/* eslint-disable */
// Individual article page — hi-fi wireframe.
// Header (kicker, title, byline, meta) · sticky-ish TOC · article body · pull quotes · related posts · CTA.

const ARTICLE = {
  slug:    "ai-strategy-12-person-business",
  kicker:  "Field note",
  date:    "May 14, 2026",
  read:    "8 min",
  author:  "Mara Chen",
  authorTitle: "Senior Engineer · Hybrid Theory",
  title:   "What \"AI strategy\" should mean for a 12-person business.",
  lead:    "Strategy decks for SMBs are mostly theatre. Here's what we replace them with — and why it ships faster.",
  toc: [
    { id: "what-strategy-isnt",    label: "What a strategy isn't" },
    { id: "the-30-day-version",    label: "The 30-day version" },
    { id: "anatomy-of-a-roadmap",  label: "Anatomy of a roadmap" },
    { id: "what-to-cut",           label: "What we cut" },
    { id: "how-to-use-it",         label: "How to actually use it" },
  ],
};

const RELATED = [
  { slug: "photo-to-quote-tucson",      kicker: "Case study", date: "Apr 28, 2026", read: "12 min", title: "Photo-to-quote, built in 11 days for a Tucson auto shop." },
  { slug: "stop-hiring-cao",            kicker: "Essay",      date: "Mar 19, 2026", read: "6 min",  title: "Stop hiring a Chief AI Officer. Hire a Tuesday." },
];

function ArticlePageApp() {
  const [activeAnchor, setActiveAnchor] = React.useState(ARTICLE.toc[0].id);
  React.useEffect(() => {
    const onScroll = () => {
      // simple scroll-spy
      let cur = ARTICLE.toc[0].id;
      for (const t of ARTICLE.toc) {
        const el = document.getElementById(t.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top < 140) cur = t.id;
      }
      setActiveAnchor(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <SiteNav active="insights.html" />
      <main>
        {/* HEADER */}
        <article className="article">
          <header className="article-header">
            <div className="wrap">
              <a href="insights.html" className="mono article-back">← Insights · From the studio</a>
              <div className="article-meta-row">
                <span className="mono article-kicker">{ARTICLE.kicker}</span>
                <span className="mono article-meta-dot">·</span>
                <span className="mono article-date">{ARTICLE.date}</span>
              </div>
              <h1 className="article-title">{ARTICLE.title}</h1>
              <p className="article-lead">{ARTICLE.lead}</p>
            </div>
          </header>

          {/* BODY with sticky sidecard on the right */}
          <div className="article-body-wrap">
            <div className="wrap article-body-grid">
              <div className="article-body">
                <section id="what-strategy-isnt">
                  <h2>01 · What a strategy isn't.</h2>
                  <p>
                    Walk into any 12-person business that's just paid a consultancy for an "AI strategy" and you'll find the same artifact. Eighty-three slides, two of which the owner has actually read. A maturity model. A capability map. Six recommended initiatives, none of which fit the actual operating cadence of a business with no dedicated engineering function.
                  </p>
                  <p>
                    Almost none of it survives contact with Monday morning.
                  </p>
                  <p>
                    The fundamental error is treating SMB AI strategy as a smaller version of enterprise AI strategy. It isn't. The constraints are different, the people involved are different, and most importantly, the decision-making rhythm is different. A regional dental group doesn't need an "AI center of excellence." It needs to know which three things to try first.
                  </p>
                </section>

                <figure className="article-pullquote">
                  <blockquote>
                    The version that ships in 30 days is shorter, sharper, and assumes someone — namely you — will actually use it.
                  </blockquote>
                </figure>

                <section id="the-30-day-version">
                  <h2>02 · The 30-day version.</h2>
                  <p>
                    The version we ship looks more like a one-page surgical plan than a strategy document. Four weeks of work, four artifacts, no extra theatre.
                  </p>
                  <ol className="article-ol">
                    <li><strong>Week 1 — Discovery.</strong> We interview the owner and a few key staff. We map the actual workflows, not the org-chart ideal of them.</li>
                    <li><strong>Week 2 — Inventory.</strong> We look at the tools you already pay for. We find the friction points and the dead air between systems.</li>
                    <li><strong>Week 3 — Opportunities.</strong> We rank candidate AI moves by payback, effort, and risk. Most are small. A few are bigger.</li>
                    <li><strong>Week 4 — Roadmap.</strong> One page. Quarter by quarter. Something you can hand to anyone — including us, if you want to do the building too.</li>
                  </ol>
                </section>

                <section id="anatomy-of-a-roadmap">
                  <h2>03 · Anatomy of a roadmap.</h2>
                  <p>
                    A roadmap that survives Monday morning has three properties: it's short, it's owned, and it's <em>sequenced</em>. Short means it fits on one page. Owned means there's a name next to each item — and that name isn't the consultancy. Sequenced means we've made a real call about what to do first.
                  </p>
                  <div className="article-mock">
                    <div className="article-mock-bar">
                      <div className="mono">strategy / acme-auto-repair.pdf</div>
                      <div className="mono article-mock-app">HT · Readiness</div>
                    </div>
                    <div className="article-mock-body">
                      <div className="mono article-mock-label">30-DAY READINESS · ROADMAP</div>
                      <h4>Acme Auto Repair · Tucson · Quarterly plan</h4>
                      <table className="article-mock-table">
                        <tbody>
                          <tr><td className="mono">Q3</td><td>Inbound voicemail → CRM ticket</td><td className="mono">Highest payback · Low effort</td></tr>
                          <tr><td className="mono">Q4</td><td>Photo-to-quote estimator</td><td className="mono">High payback · Medium effort</td></tr>
                          <tr><td className="mono">Q1</td><td>Auto review-ask post-service</td><td className="mono">High payback · Low effort</td></tr>
                          <tr><td className="mono">Q2</td><td>Inventory reorder agent</td><td className="mono">Medium payback · Medium effort</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                <section id="what-to-cut">
                  <h2>04 · What we cut.</h2>
                  <p>
                    Everything the big consultancies put in the deck and the SMB owner doesn't need. No maturity model. No capability map. No vendor evaluation matrix for tools you'll never buy. No "AI center of excellence" recommendation for a business with twelve employees.
                  </p>
                  <p>
                    What gets kept is the part where someone made a decision about what to try first — and then stuck around long enough to help build it.
                  </p>
                </section>

                <section id="how-to-use-it">
                  <h2>05 · How to actually use it.</h2>
                  <p>
                    Print the roadmap. Tape it next to your monitor. The next time someone tries to sell you "transformation," check what they're proposing against the one page on your wall. If it isn't already on there, you probably don't need it.
                  </p>
                </section>
              </div>

              <aside className="article-sidecard">
                <div className="article-sidecard-author">
                  <div className="article-author-avatar">{ARTICLE.author.split(" ").map(n => n[0]).join("")}</div>
                  <div>
                    <div className="article-author-name">{ARTICLE.author}</div>
                    <div className="article-author-title">{ARTICLE.authorTitle}</div>
                  </div>
                </div>

                <div className="article-sidecard-section">
                  <div className="mono article-sidecard-label">In this piece</div>
                  <ol className="article-toc-list">
                    {ARTICLE.toc.map((t, i) => (
                      <li key={t.id} className={activeAnchor === t.id ? "active" : ""}>
                        <a href={`#${t.id}`}>
                          <span className="mono article-toc-n">0{i + 1}</span>
                          <span>{t.label}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="article-sidecard-section">
                  <div className="mono article-sidecard-label">Share</div>
                  <div className="article-share-row">
                    <button aria-label="Copy link" title="Copy link">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M6 8 L8 6 M5.5 4.5 L6.5 3.5 a2.1 2.1 0 0 1 3 3 L8.5 7.5 M3.5 6.5 L2.5 7.5 a2.1 2.1 0 0 0 3 3 L6.5 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <button aria-label="Share on X" title="Share on X">
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                        <path d="M1.5 1.5 L12.5 12.5 M12.5 1.5 L1.5 12.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
                      </svg>
                    </button>
                    <button aria-label="Share on LinkedIn" title="Share on LinkedIn">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <rect x="1" y="5" width="2.2" height="8" fill="currentColor" />
                        <circle cx="2.1" cy="2.4" r="1.3" fill="currentColor" />
                        <path d="M5 5 H7 V6.2 C7.4 5.4 8.5 4.8 9.5 4.8 C11.5 4.8 12.5 6 12.5 8.2 V13 H10.3 V8.6 C10.3 7.5 9.9 6.9 9 6.9 C8 6.9 7.2 7.6 7.2 8.8 V13 H5 V5 Z" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="article-sidecard-cta">
                  <a href="#contact" className="btn btn-primary">Talk to {ARTICLE.author.split(" ")[0]} <span style={{ opacity:0.6, fontSize:11 }}>↗</span></a>
                </div>
              </aside>
            </div>
          </div>
        </article>

        {/* RELATED */}
        <section className="article-related">
          <div className="wrap">
            <div className="mono article-related-label">Keep reading</div>
            <div className="article-related-grid">
              {RELATED.map((r) => (
                <a key={r.slug} href={`article.html?slug=${r.slug}`} className="article-related-card">
                  <div className="ins-page-card-meta">
                    <span className="kicker">{r.kicker}</span>
                    <span className="dot" />
                    <span>{r.date}</span>
                  </div>
                  <div className="article-related-title">{r.title}</div>
                  <div className="mono article-related-read">Read →</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <PageCTA
          title={<>Want help making one of these for your business?</>}
          sub="A 30-minute call. We'll listen, ask a few questions, and tell you whether it's worth doing."
        />
      </main>
      <SiteFooter />
      <SiteTweaks />
    </>
  );
}

Object.assign(window, { ArticlePageApp });
