/* eslint-disable */
// Approach section — Variant G "single relationship stream".
// Visualizes Project + Retainer as composable parts of one client relationship over time.

function ApproachStream() {
  const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  const projects = [
    { name: "Photo-to-quote tool",     start: 1.4, end: 3.0 },
    { name: "Inbound voicemail agent", start: 5.2, end: 6.4 },
    { name: "Listings batch",          start: 9.0, end: 9.8 },
  ];
  return (
    <section id="approach" className="stream-section">
      <div className="wrap">
        <header className="sec-overhead">
          <div className="sec-marker mono">
            <span className="sec-num">§ 02</span>
            <span className="sec-name">Approach</span>
          </div>
          <h2 className="sec-h">
            Two ways to work, <span className="italic" style={{ color: "var(--accent)" }}>often together</span>. Always a relationship — not a transaction.
          </h2>
          <div className="sec-sub">
            <p>Most clients run a retainer with us and a project on top of it. The shapes are composable, not exclusive — here's a year of one real engagement.</p>
          </div>
        </header>

        <div className="stream-card">
          <div className="stream-card-head">
            <div className="mono stream-card-label">Acme Auto · last 12 months with HT</div>
            <div className="stream-legend">
              <span className="mono"><span className="stream-legend-dot" style={{ background: "var(--amber)" }} />RETAINER</span>
              <span className="mono"><span className="stream-legend-dot" style={{ background: "var(--lime)" }} />PROJECT</span>
            </div>
          </div>

          {/* retainer baseline */}
          <div className="stream-row stream-row-retainer">
            <div className="mono stream-row-label" style={{ color: "var(--amber)" }}>RETAINER</div>
            <div className="stream-retainer-bar">32 hrs / month · ongoing</div>
          </div>

          {/* project bursts */}
          <div className="stream-row stream-row-projects">
            <div className="mono stream-row-label" style={{ color: "var(--lime)" }}>PROJECTS</div>
            <div className="stream-projects">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="stream-month-line" style={{ left: `${(i / 12) * 100}%` }} />
              ))}
              {projects.map((p) => (
                <div key={p.name} className="stream-project-block" style={{
                  left: `${(p.start / 12) * 100}%`,
                  width: `${((p.end - p.start) / 12) * 100}%`,
                }}>
                  <div className="stream-project-name">{p.name}</div>
                  <div className="mono stream-project-dur">{Math.round((p.end - p.start) * 4)} WEEKS</div>
                </div>
              ))}
            </div>
          </div>

          {/* month axis */}
          <div className="stream-axis">
            {months.map((m) => <div key={m} className="mono">{m}</div>)}
          </div>

          <div className="stream-footer">
            <span className="stream-foot-quote">One relationship.</span>
            <span className="stream-foot-desc">The retainer carries the steady work. Projects are the spikes you'd otherwise have to hire for. We just keep going.</span>
            <a href="#contact" className="btn btn-primary">Start one <span style={{ opacity:0.6, fontSize:11 }}>↗</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ApproachStream });
