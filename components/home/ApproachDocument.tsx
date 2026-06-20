const PAPER_ITEMS: [string, string][] = [
  ["A working build", "Deployed, tested, in your hands"],
  ["Plain-English docs", "Loom walk-through + README"],
  ["Source + access", "Yours to keep, no lock-in"],
  ["60-day bump warranty", "We fix what breaks"],
];

const THREAD = [
  { who: "Devon", init: "D", time: "today 9:14a", txt: "Quick one — photo-to-quote chokes on HEIC files >5MB.", ht: false },
  { who: "HT · Mara", init: "M", time: "today 9:22a", txt: "Looking. Likely a conversion step. Fix by EOD?", ht: true },
  { who: "Devon", init: "D", time: "today 9:23a", txt: "Perfect, thanks.", ht: false },
  { who: "HT · Mara", init: "M", time: "today 4:48p", txt: "Shipped. Try a fresh upload on your end?", ht: true, reaction: { emoji: "✓", by: "Devon" } },
] as const;

export function ApproachDocument() {
  return (
    <section id="approach" className="doc-section">
      <div className="wrap">
        <header className="sec-overhead">
          <div className="sec-marker mono">
            <span className="sec-num">§ 02</span>
            <span className="sec-name">Approach</span>
          </div>
          <h2 className="sec-h">
            Two ways to work with us. <span className="italic" style={{ color: "var(--accent)" }}>Both start with a real conversation</span> — not a sales pitch.
          </h2>
          <div className="sec-sub">
            <p>Most clients run a retainer with us and a project on top of it. The artifacts are different; the relationship is the same.</p>
          </div>
        </header>

        <div className="doc-grid">
          {/* Project — paper brief */}
          <article className="doc-paper">
            <div className="doc-paper-head">
              <span className="mono">Track 01 · Project</span>
              <span className="mono">One-page brief</span>
            </div>
            <h3 className="doc-paper-title">A specific thing, built well.</h3>
            <p className="doc-paper-sub">You bring the problem. We scope on one page, build, hand it over, and stick around for the bumps.</p>
            <div className="doc-paper-section">
              <span className="mono doc-paper-label">What you get</span>
              <div className="doc-paper-list">
                {PAPER_ITEMS.map(([t, d]) => (
                  <div className="doc-paper-li" key={t}>
                    <span className="doc-paper-bullet" />
                    <div>
                      <div className="doc-paper-li-t">{t}</div>
                      <div className="doc-paper-li-d">{d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="doc-paper-foot">
              <div>
                <span className="mono doc-paper-label">Fee</span>
                <div className="doc-paper-fee">Fixed, agreed up front</div>
              </div>
              <div className="doc-paper-sig">
                <span className="doc-paper-sig-label">signed,</span>
                <span className="doc-paper-sig-line" />
                <span className="mono doc-paper-sig-cap">both parties</span>
              </div>
            </div>
          </article>

          {/* Retainer — Slack channel */}
          <article className="doc-chan">
            <div className="doc-chan-head">
              <span className="mono">Track 02 · Retainer</span>
              <span className="mono">#ht-acme</span>
            </div>
            <h3 className="doc-chan-title">An engineer on call.</h3>
            <p className="doc-chan-sub">A monthly bucket of senior engineering hours. One Slack channel. Two senior engineers.</p>
            <div className="doc-chan-section">
              <div className="doc-chan-thread">
                {THREAD.map((m, i) => (
                  <div className="doc-chan-msg" key={i}>
                    <div className={"doc-chan-avatar " + (m.ht ? "ht" : "client")}>{m.init}</div>
                    <div className="doc-chan-body">
                      <div className="doc-chan-meta">
                        <span className={"doc-chan-who " + (m.ht ? "ht" : "client")}>{m.who}</span>
                        <span className="mono doc-chan-time">{m.time}</span>
                      </div>
                      <div className="doc-chan-txt">{m.txt}</div>
                      {"reaction" in m && m.reaction && (
                        <div className="doc-chan-reaction" title={m.reaction.by + " reacted"}>
                          <span className="doc-chan-reaction-emoji">{m.reaction.emoji}</span>
                          <span className="mono">1</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="doc-chan-foot">
              <div>
                <span className="mono doc-chan-label">Monthly · pause anytime</span>
                <div className="doc-chan-quote">Spend the bucket however helps.</div>
              </div>
            </div>
          </article>
        </div>

        <div className="doc-cta-row">
          <a href="#contact" className="btn btn-primary">
            Start a relationship <span style={{ opacity: 0.6, fontSize: 11 }}>↗</span>
          </a>
          <span className="doc-cta-note">Both tracks start with the same 30-minute call.</span>
        </div>
      </div>
    </section>
  );
}
