/* eslint-disable */
// Rail services — Option B.
// Big demo on left + compact case list on right. No inline expansion;
// just kicker + 1-line outcome per row. Below: title + desc + CTAs.

const RAIL_CASES = window.SPY_CASES || [
  { id: "calls",      kicker: "Booking recovery",   title: "Turn missed calls into booked appointments",      accent: "#F5A623", desc: "Voicemails and rings-no-answer become a return-call queue with context, suggested time slots, and one-tap booking.", visual: "calls" },
  { id: "support",    kicker: "Customer feedback",  title: "Mine support requests for product suggestions",   accent: "#B9FF35", desc: "An always-on analyst that tags, clusters, and ranks customer complaints into a weekly product backlog.", visual: "support" },
  { id: "tutoring",   kicker: "Quality coaching",   title: "Score sessions from their transcripts",           accent: "#5BE3FF", desc: "Every session is graded against your rubric — engagement, clarity, follow-through — with example quotes attached.", visual: "tutoring" },
  { id: "listings",   kicker: "Content at scale",   title: "Write 200 listing descriptions in an afternoon",  accent: "#FF3DA5", desc: "Feed in your spec sheet and photos; get on-brand copy at the length and tone your MLS wants, ready to paste.", visual: "listings" },
  { id: "followups",  kicker: "Lead nurture",       title: "Send follow-ups that reference what they browsed", accent: "#B9FF35", desc: "An agent watches sessions and drafts the next nudge — tied to the exact pages, products, or PDFs touched.", visual: "followups" },
];

function RailServices() {
  const [active, setActive] = React.useState(0);
  const c = RAIL_CASES[active];
  return (
    <section className="svc-section rail-section" id="services">
      <div className="wrap">
        <header className="sec-overhead">
          <div className="sec-marker mono">
            <span className="sec-num">§ 01</span>
            <span className="sec-name">Services</span>
          </div>
          <h2 className="sec-h">
            Outcomes you can ship in <span className="italic" style={{ color: "var(--accent)" }}>weeks</span>, not quarters.
          </h2>
          <div className="sec-sub">
            <p>Five cases. Pick the activity that sounds familiar — the demo on the left is the shape of the build.</p>
          </div>
        </header>

        <div className="rail-grid">
          <div className="rail-stage-wrap">
            <div className="rail-stage" style={{ "--case-accent": c.accent }}>
              <div className="rail-stage-bar">
                <div className="mono rail-stage-l">Live demo · {c.kicker}</div>
                <div className="rail-stage-r">
                  <span className="rail-dot" style={{ background: c.accent }} />
                  <span className="mono">Running</span>
                </div>
              </div>
              <div className="rail-stage-body">
                <window.WideVisualD id={c.visual} />
              </div>
            </div>
          </div>

          <aside className="rail-list" role="tablist">
            <div className="rail-list-h mono">Activities</div>
            {RAIL_CASES.map((cs, i) => (
              <button
                key={cs.id}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={"rail-item " + (active === i ? "active" : "")}
                style={{ "--case-accent": cs.accent }}
              >
                <span className="rail-item-n mono">0{i + 1}</span>
                <div className="rail-item-text">
                  <div className="rail-item-kicker">{cs.kicker}</div>
                  <div className="rail-item-title">{cs.title}</div>
                </div>
                <span className="rail-item-dot" />
              </button>
            ))}
          </aside>
        </div>

        <div className="rail-foot">
          <div>
            <h3 className="rail-foot-title">{c.title}</h3>
            <p className="rail-foot-desc">{c.desc}</p>
          </div>
          <div className="rail-foot-cta">
            <a className="btn btn-primary" href="#contact">Talk about this build <span style={{ opacity:0.6, fontSize:11 }}>↗</span></a>
            <a className="btn btn-ghost" href="#insights">Case study</a>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { RailServices });
