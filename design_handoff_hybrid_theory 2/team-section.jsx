/* eslint-disable */
// Mini "Our team has worked at" section — sits between Approach and Insights.

const TEAM_LOGOS = [
{ name: "Google", style: "sans" },
{ name: "Stripe", style: "italic" },
{ name: "Anthropic", style: "mono" },
{ name: "Airbnb", style: "sans" },
{ name: "Square", style: "serif" },
{ name: "Shopify", style: "italic" }];


function TeamSection() {
  return (
    <section id="team" className="team-section">
      <div className="wrap">
        <header className="sec-overhead">
          <div className="sec-marker mono">
            <span className="sec-num">§ 03</span>
            <span className="sec-name">Team</span>
          </div>
          <h2 className="sec-h">
            Engineers, <span className="italic" style={{ color: "var(--accent)" }}>designers</span>, and data scientists.
          </h2>
          <div className="sec-sub">
            <p>Hybrid Theory is a team that's shipped products to millions of users — now focused on businesses like yours.</p>
          </div>
        </header>

        <div className="team-grid">
          <div className="team-intro">
            <div className="mono team-intro-label">Our team has worked at</div>
            <a className="team-link" href="#" aria-label="More about us">
              More about us <span style={{ fontFamily: "var(--mono)", fontSize: 11, marginLeft: 4 }}>→</span>
            </a>
          </div>
          <div className="team-logos">
            {TEAM_LOGOS.map((l) =>
            <div key={l.name} className={"team-logo team-logo-" + l.style}>
                {l.name}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}

Object.assign(window, { TeamSection });