/* eslint-disable */
// Individual article — CASE STUDY variant.
// Same shell as article-page.jsx (header · sticky sidecard · related · CTA),
// different body components: a results stat-band and a before/after block.
// This is the second canonical example for the MDX migration — placeholder copy.

const CS_ARTICLE = {
  slug:    "photo-to-quote-tucson",
  kicker:  "Case study",
  date:    "Apr 28, 2026",
  read:    "12 min",
  author:  "Devon Hill",
  authorTitle: "Engineer · Hybrid Theory",
  title:   "Photo-to-quote, built in 11 days for a Tucson auto shop.",
  lead:    "How one custom tool moved average quote-turnaround from two days to under fifteen minutes — and what we learned training a model on real shop photos.",
  toc: [
    { id: "the-problem",   label: "The problem" },
    { id: "what-we-built", label: "What we built" },
    { id: "the-results",   label: "The results" },
    { id: "what-we-learned", label: "What we learned" },
  ],
};

const CS_RELATED = [
  { slug: "ai-strategy-12-person-business", kicker: "Field note", date: "May 14, 2026", read: "8 min",  title: "What \"AI strategy\" should mean for a 12-person business." },
  { slug: "voicemail-to-crm",               kicker: "Case study", date: "Jan 11, 2026", read: "9 min",  title: "Voicemail → CRM ticket, end-to-end, in a single afternoon." },
];

function ArticleCasePageApp() {
  const [activeAnchor, setActiveAnchor] = React.useState(CS_ARTICLE.toc[0].id);
  React.useEffect(() => {
    const onScroll = () => {
      let cur = CS_ARTICLE.toc[0].id;
      for (const t of CS_ARTICLE.toc) {
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
        <article className="article">
          <header className="article-header">
            <div className="wrap">
              <a href="insights.html" className="mono article-back">← Insights · From the studio</a>
              <div className="article-meta-row">
                <span className="mono article-kicker">{CS_ARTICLE.kicker}</span>
                <span className="mono article-meta-dot">·</span>
                <span className="mono article-date">{CS_ARTICLE.date}</span>
              </div>
              <h1 className="article-title">{CS_ARTICLE.title}</h1>
              <p className="article-lead">{CS_ARTICLE.lead}</p>
            </div>
          </header>

          <div className="article-body-wrap">
            <div className="wrap article-body-grid">
              <div className="article-body">

                {/* Client snapshot — a component the essay doesn't have */}
                <div className="article-clientcard">
                  <div className="article-clientcard-row">
                    <div>
                      <div className="mono article-clientcard-label">Client</div>
                      <div className="article-clientcard-val">Acme Auto Repair</div>
                    </div>
                    <div>
                      <div className="mono article-clientcard-label">Where</div>
                      <div className="article-clientcard-val">Tucson, AZ</div>
                    </div>
                    <div>
                      <div className="mono article-clientcard-label">Size</div>
                      <div className="article-clientcard-val">9 employees</div>
                    </div>
                    <div>
                      <div className="mono article-clientcard-label">Built in</div>
                      <div className="article-clientcard-val">11 days</div>
                    </div>
                  </div>
                </div>

                <section id="the-problem">
                  <h2>01 · The problem.</h2>
                  <p>
                    Every quote at Acme started the same way: a customer texts a photo of a worn brake or a cracked manifold, and someone at the front desk walks it back to a tech, waits for an estimate, types it into the system, and texts it back. On a good day that loop took a couple of hours. On a busy day it took two.
                  </p>
                  <p>
                    Customers don't wait two days for a quote. They call the next shop. <em>Placeholder copy — the real article will go here.</em>
                  </p>
                </section>

                <figure className="article-pullquote">
                  <blockquote>
                    The fix wasn't a smarter estimate. It was a faster one — fast enough to land before the customer called anyone else.
                  </blockquote>
                </figure>

                <section id="what-we-built">
                  <h2>02 · What we built.</h2>
                  <p>
                    A single-purpose tool: drop in a photo, get a draft quote in seconds. The model reads the image, identifies likely parts and labor, and pulls live pricing from Acme's existing parts catalog. The service writer reviews, adjusts, and sends — the whole loop now lives on one screen.
                  </p>
                  <div className="article-mock">
                    <div className="article-mock-bar">
                      <div className="mono">tools / photo-to-quote</div>
                      <div className="mono article-mock-app">Acme Auto · custom-built</div>
                    </div>
                    <div className="article-mock-body">
                      <div className="mono article-mock-label">DRAFT QUOTE · #1147</div>
                      <h4>Front-axle brake service · '19 Civic</h4>
                      <table className="article-mock-table">
                        <tbody>
                          <tr><td>Brake rotor, front (×2)</td><td className="mono">$184.00</td></tr>
                          <tr><td>Brake pad set, front</td><td className="mono">$78.00</td></tr>
                          <tr><td>Labor (2.5 hrs)</td><td className="mono">$275.00</td></tr>
                          <tr><td><strong>Total</strong></td><td className="mono"><strong>$579.00</strong></td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                <section id="the-results">
                  <h2>03 · The results.</h2>
                  <p>
                    Three months after launch, the numbers told a clean story. <em>Placeholder — real figures to come.</em>
                  </p>
                  {/* Results stat-band — the distinctive case-study component */}
                  <div className="article-results">
                    <div className="article-result">
                      <div className="article-result-val">2 days <span>→</span> 15 min</div>
                      <div className="article-result-label">Average quote turnaround</div>
                    </div>
                    <div className="article-result">
                      <div className="article-result-val">+34%</div>
                      <div className="article-result-label">Quote-to-booking rate</div>
                    </div>
                    <div className="article-result">
                      <div className="article-result-val">11 days</div>
                      <div className="article-result-label">From kickoff to shipped</div>
                    </div>
                  </div>
                </section>

                <section id="what-we-learned">
                  <h2>04 · What we learned.</h2>
                  <p>
                    Training on real shop photos — bad lighting, grease, odd angles — mattered more than model choice. The first version, trained on clean catalog images, fell apart on a phone photo taken under a lift. <em>Placeholder copy.</em>
                  </p>
                  <p>
                    The lesson generalizes: the data that's annoying to collect is usually the data that makes the tool actually work.
                  </p>
                </section>
              </div>

              <aside className="article-sidecard">
                <div className="article-sidecard-author">
                  <div className="article-author-avatar">{CS_ARTICLE.author.split(" ").map(n => n[0]).join("")}</div>
                  <div>
                    <div className="article-author-name">{CS_ARTICLE.author}</div>
                    <div className="article-author-title">{CS_ARTICLE.authorTitle}</div>
                  </div>
                </div>

                <div className="article-sidecard-section">
                  <div className="mono article-sidecard-label">In this piece</div>
                  <ol className="article-toc-list">
                    {CS_ARTICLE.toc.map((t, i) => (
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
                  <a href="#contact" className="btn btn-primary">Talk to {CS_ARTICLE.author.split(" ")[0]} <span style={{ opacity:0.6, fontSize:11 }}>↗</span></a>
                </div>
              </aside>
            </div>
          </div>
        </article>

        <section className="article-related">
          <div className="wrap">
            <div className="mono article-related-label">Keep reading</div>
            <div className="article-related-grid">
              {CS_RELATED.map((r) => (
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
          title={<>Want a tool like this for <span className="italic" style={{ color: "var(--accent)" }}>your business</span>?</>}
          sub="A 30-minute call. Tell us the loop that's too slow, and we'll tell you whether AI can fix it."
        />
      </main>
      <SiteFooter />
      <SiteTweaks />
    </>
  );
}

Object.assign(window, { ArticleCasePageApp });
