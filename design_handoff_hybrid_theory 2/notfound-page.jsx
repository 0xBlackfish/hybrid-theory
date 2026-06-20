/* eslint-disable */
// 404 page — small brand-voice moment.

function NotFoundPageApp() {
  return (
    <>
      <SiteNav active="" />
      <main>
        <section className="page-hero" style={{ paddingBottom: 48 }}>
          <div className="wrap">
            <div className="mono page-hero-pretitle">Error 404</div>
            <h1 className="page-hero-h">
              This one's <span className="italic" style={{ color: "var(--accent)" }}>still manual</span>.
            </h1>
            <p className="page-hero-lead">
              The page you're after doesn't exist — or it moved, and we haven't built the thing that redirects you yet. Ironic, we know.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              <a href="index.html" className="btn btn-primary">Back home <span style={{ opacity:0.6, fontSize:11 }}>→</span></a>
              <a href="insights.html" className="btn btn-ghost">Read something instead</a>
            </div>
          </div>
        </section>

        <section className="notfound-links">
          <div className="wrap">
            <div className="mono notfound-links-label">Try one of these</div>
            <div className="notfound-grid">
              {[
                { href: "services.html", k: "Services", d: "How we work — automation, strategy, training." },
                { href: "about.html",    k: "About",    d: "Who we are and why we exist." },
                { href: "insights.html", k: "Insights", d: "Field notes, case studies, essays." },
                { href: "contact.html",  k: "Contact",  d: "Grab a 30-minute call." },
              ].map((l) => (
                <a key={l.href} href={l.href} className="notfound-card">
                  <div className="notfound-card-k">{l.k}</div>
                  <div className="notfound-card-d">{l.d}</div>
                  <div className="mono notfound-card-go">Go →</div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <SiteTweaks />
    </>
  );
}

Object.assign(window, { NotFoundPageApp });
