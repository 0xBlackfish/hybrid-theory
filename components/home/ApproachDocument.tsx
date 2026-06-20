const PAPER_ITEMS: [string, string][] = [
  ["Automations you own", "Built in your accounts, your logins"],
  ["Built live, on the call", "No black box, no lock-in"],
  ["Plain-English docs", "Loom walk-through + README"],
  ["Your team, trained", "They can run and extend it"],
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
            Two ways to run it. <span className="italic" style={{ color: "var(--accent)" }}>Both start with an AI Audit</span> — not a sales pitch.
          </h2>
          <div className="sec-sub">
            <p>Every engagement opens with a fixed-fee AI Audit: we find the busywork leaking time and money, and ship one quick win. From there you choose how we run it — with you, or for you. The fee credits toward whatever comes next.</p>
          </div>
        </header>

        <div className="doc-grid">
          {/* With you — paper brief */}
          <article className="doc-paper">
            <div className="doc-paper-head">
              <span className="mono">Track 01 · With you</span>
              <span className="mono">You keep the keys</span>
            </div>
            <h3 className="doc-paper-title">We build it with you.</h3>
            <p className="doc-paper-sub">On a recurring call we build the automations on your screen, in your accounts — and you walk away owning every one.</p>
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
                <div className="doc-paper-fee">Monthly retainer</div>
              </div>
              <div className="doc-paper-sig">
                <span className="doc-paper-sig-label">signed,</span>
                <span className="doc-paper-sig-line" />
                <span className="mono doc-paper-sig-cap">both parties</span>
              </div>
            </div>
          </article>

          {/* For you — Slack channel */}
          <article className="doc-chan">
            <div className="doc-chan-head">
              <span className="mono">Track 02 · For you</span>
              <span className="mono">#ht-acme</span>
            </div>
            <h3 className="doc-chan-title">We run it for you.</h3>
            <p className="doc-chan-sub">A managed bucket of senior engineering time. One Slack channel, two senior engineers — we build it, watch it, and fix it so you never have to.</p>
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
            Book your AI Audit <span style={{ opacity: 0.6, fontSize: 11 }}>↗</span>
          </a>
          <span className="doc-cta-note">Every engagement starts with a fixed-fee AI Audit.</span>
        </div>
      </div>
    </section>
  );
}
