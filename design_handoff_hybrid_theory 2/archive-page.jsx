/* eslint-disable */
// Archive page — same Stripe-style article rows, no hero, paginated.

const ARCHIVE_ARTICLES = (window.STRIPE_ARTICLES || []).concat([
  {
    slug: "against-ai-transformation",
    tag: "Strategy",
    date: "December 06, 2025",
    author: "Mara Chen",
    role: "Senior Engineer, Hybrid Theory",
    title: "The case against \"AI transformation\" as a budget line item.",
    excerpt: "Why most enterprise AI budgets get spent on consultants who don't ship — and what to do instead. With receipts.",
    visual: { kind: "mock-strategy", caption: "Budget Reallocation" },
  },
  {
    slug: "first-ten-engagements",
    tag: "Craft",
    date: "November 18, 2025",
    author: "Yusuf Khan",
    role: "Engineer, Hybrid Theory",
    title: "What we learned shipping our first 10 SMB engagements.",
    excerpt: "The patterns that worked, the patterns that didn't, and the ones we're still figuring out. An honest field report after a year of work.",
    visual: { kind: "mock-prompts", caption: "Patterns That Stuck" },
  },
  {
    slug: "inventory-reorder-hvac",
    tag: "Build",
    date: "October 24, 2025",
    author: "Devon Hill",
    role: "Engineer, Hybrid Theory",
    title: "Inventory reorder agent for a regional HVAC distributor.",
    excerpt: "A single agent that watched stock levels, vendor lead times, and seasonal demand — and ordered when it should. Saved them $48K in stockouts.",
    visual: { kind: "mock-voicemail", caption: "Reorder Queue" },
  },
  {
    slug: "ai-feature-ux-problem",
    tag: "Craft",
    date: "September 09, 2025",
    author: "Mara Chen",
    role: "Senior Engineer, Hybrid Theory",
    title: "Three signs an \"AI feature\" is actually a UX problem.",
    excerpt: "On the surprising frequency with which AI gets blamed for design choices that were broken to begin with — and how to tell which is which.",
    visual: { kind: "mock-prompts", caption: "Design Diagnosis" },
  },
]);

function ArchivePageApp() {
  const [filter, setFilter] = React.useState("All");
  const [page, setPage] = React.useState(1);
  const PER_PAGE = 4;
  const list = filter === "All" ? ARCHIVE_ARTICLES : ARCHIVE_ARTICLES.filter(a => a.tag === filter);
  const pages = Math.max(1, Math.ceil(list.length / PER_PAGE));
  const visible = list.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  React.useEffect(() => { setPage(1); }, [filter]);

  const StripeRow = window.StripeRow;
  const STRIPE_FILTERS = ["All", "Strategy", "Build", "Craft", "Hiring"];

  return (
    <>
      <SiteNav active="insights.html" />
      <main className="stripe-blog">
        {/* Compact archive header */}
        <section className="stripe-archive-hero">
          <div className="wrap">
            <a href="insights.html" className="mono stripe-archive-back">← Back to From the studio</a>
            <h1 className="stripe-archive-h">Archive</h1>
            <div className="mono stripe-archive-meta">{ARCHIVE_ARTICLES.length} pieces · 2024 → present</div>
          </div>
        </section>

        {/* Filters (no view-archive link here) */}
        <section className="stripe-filters-wrap">
          <div className="wrap">
            <div className="stripe-filters">
              {STRIPE_FILTERS.map((f) => (
                <button key={f} onClick={() => setFilter(f)} className={"stripe-pill " + (filter === f ? "active" : "")}>{f}</button>
              ))}
            </div>
          </div>
        </section>

        {/* List */}
        <section className="stripe-list">
          <div className="wrap">
            <div className="stripe-list-grid">
              {visible.map((a) => StripeRow ? <StripeRow key={a.slug} a={a} /> : null)}
            </div>

            {/* Pagination */}
            <div className="stripe-pagination">
              <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="stripe-page-arrow">‹ Previous</button>
              <div className="stripe-page-numbers">
                {Array.from({ length: pages }).map((_, i) => (
                  <button key={i} onClick={() => setPage(i + 1)} className={"stripe-page-num " + (page === i + 1 ? "active" : "")}>{i + 1}</button>
                ))}
              </div>
              <button onClick={() => setPage(p => Math.min(pages, p + 1))} disabled={page === pages} className="stripe-page-arrow">Next ›</button>
            </div>
          </div>
        </section>

        <PageCTA
          title={<>Or talk to us directly — <span className="italic" style={{ color:"var(--accent)" }}>book a call</span>.</>}
          sub="A 30-minute conversation. No slides, no pitch."
        />
      </main>
      <SiteFooter />
      <SiteTweaks />
    </>
  );
}

Object.assign(window, { ArchivePageApp });
