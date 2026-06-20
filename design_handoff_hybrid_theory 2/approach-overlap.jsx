/* eslint-disable */
// Approach section — Variant F.1 "Overlapping circles".
// Two luminous rings · the overlap labelled with the mutual mode.

function ApproachOverlap() {
  return (
    <section id="approach" className="overlap-section">
      <div className="wrap">
        <header className="sec-overhead">
          <div className="sec-marker mono">
            <span className="sec-num">§ 02</span>
            <span className="sec-name">Approach</span>
          </div>
          <h2 className="sec-h">
            Two ways to work, <span className="italic" style={{ color: "var(--accent)" }}>often together</span>. Always a relationship.
          </h2>
          <div className="sec-sub">
            <p>Project and Retainer aren't a binary choice — they compose. Most engagements end up using both.</p>
          </div>
        </header>

        <div className="overlap-grid">
          {/* Diagram */}
          <div className="overlap-diagram">
            <div className="overlap-glow" />

            <div className="overlap-circle overlap-circle-l">
              <span className="mono overlap-kicker" style={{ color: "var(--lime)" }}>Track 01</span>
              <div className="overlap-title">Project</div>
              <p className="overlap-desc">A specific thing, scoped &amp; shipped on a fixed fee.</p>
            </div>

            <div className="overlap-circle overlap-circle-r">
              <span className="mono overlap-kicker" style={{ color: "var(--amber)" }}>Track 02</span>
              <div className="overlap-title">Retainer</div>
              <p className="overlap-desc">An engineer on call. Monthly hours, used however helps.</p>
            </div>

            <div className="overlap-center">
              <span className="mono overlap-center-label">Most clients</span>
              <div className="overlap-center-text">Both, woven together</div>
            </div>
          </div>

          {/* Examples */}
          <aside className="overlap-aside">
            <div className="mono overlap-aside-label">What this looks like in practice</div>
            <ul className="overlap-mix-list">
              {[
                { mix: ["amber","lime"],  text: "Retainer carries the day-to-day · a project burst when something specific shows up." },
                { mix: ["lime","amber"],  text: "Project ships, retainer continues for upkeep + the next idea." },
                { mix: ["amber"],         text: "Just a retainer — quiet months, busy months. Same engineer." },
                { mix: ["lime"],          text: "One project, no retainer. You have what you need." },
              ].map((r, i) => (
                <li key={i} className="overlap-mix-row">
                  <span className="overlap-mix-dots">
                    {r.mix.map((c, j) => (
                      <span key={j} className={"overlap-mix-dot overlap-mix-" + c} />
                    ))}
                  </span>
                  <span className="overlap-mix-text">{r.text}</span>
                </li>
              ))}
            </ul>
            <div className="overlap-cta-row">
              <a href="#contact" className="btn btn-primary">Start a relationship <span style={{ opacity:0.6, fontSize:11 }}>↗</span></a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ApproachOverlap });
