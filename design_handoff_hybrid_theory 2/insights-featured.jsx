/* eslint-disable */
// Section 04 · Insights — "From the studio" / Featured + compact list.

const FROM_STUDIO_ARTICLES = [
  { kicker: "Field note", date: "May 2026", read: "8 min",  title: "What \"AI strategy\" should mean for a 12-person business.",   excerpt: "Strategy decks for SMBs are mostly theatre. Here's what we replace them with — and why it ships faster." },
  { kicker: "Case study", date: "Apr 2026", read: "12 min", title: "Photo-to-quote, built in 11 days for a Tucson auto shop.",   excerpt: "How one custom tool moved their average quote-turnaround from two days to under fifteen minutes." },
  { kicker: "Essay",      date: "Mar 2026", read: "6 min",  title: "Stop hiring a Chief AI Officer. Hire a Tuesday.",            excerpt: "On the surprising leverage of a single half-day per week embedded in your business — and why retainers beat headcount." },
  { kicker: "Field note", date: "Feb 2026", read: "5 min",  title: "Three prompt patterns we use with every owner-facing tool.", excerpt: "Voice examples, refusal clauses, and 'why this slot' explanations." },
  { kicker: "Case study", date: "Jan 2026", read: "9 min",  title: "Voicemail → CRM ticket, end-to-end, in a single afternoon.", excerpt: "What we built for a dental office on a 4-hour pairing session." },
];

function InsightsFeatured() {
  const [hero, ...rest] = FROM_STUDIO_ARTICLES;
  return (
    <section id="insights" className="ins-featured-section">
      <div className="wrap">
        <header className="sec-overhead">
          <div className="sec-marker mono">
            <span className="sec-num">§ 04</span>
            <span className="sec-name">Insights</span>
          </div>
          <h2 className="sec-h">
            From the studio — <span className="italic" style={{ color: "var(--accent)" }}>everything we're reading, writing, and shipping</span>.
          </h2>
          <div className="sec-sub">
            <p>Thought pieces, project notes, the occasional rant. Written for owners, engineers, and curious bystanders.</p>
          </div>
        </header>

        <div className="ins-feat-grid">
          {/* Featured article */}
          <article className="ins-feat-hero">
            <div className="ins-feat-hero-glow" aria-hidden="true" />
            <div className="ins-feat-hero-body">
              <div className="ins-feat-kicker mono">Featured · {hero.kicker}</div>
              <h3 className="ins-feat-hero-title">{hero.title}</h3>
              <p className="ins-feat-hero-excerpt">{hero.excerpt}</p>
              <div className="ins-feat-hero-foot">
                <a href="#" className="btn btn-primary">Read it <span style={{ opacity: 0.6, fontSize: 11 }}>→</span></a>
                <span className="mono ins-feat-meta">{hero.date} · {hero.read}</span>
              </div>
            </div>
          </article>

          {/* Compact list */}
          <div className="ins-feat-list">
            <div className="mono ins-feat-list-label">More writing</div>
            <div className="ins-feat-list-rows">
              {rest.slice(0, 4).map((a, i) => (
                <a key={i} href="#" className="ins-feat-list-row">
                  <div className="mono ins-feat-list-meta">{a.kicker} · {a.date}</div>
                  <div className="ins-feat-list-title">{a.title}</div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="ins-feat-all">
          <a className="btn btn-ghost" href="#">All writing <span style={{ opacity: 0.6, fontSize: 11 }}>↗</span></a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { InsightsFeatured });
