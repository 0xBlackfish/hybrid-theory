/* eslint-disable */
// Scroll-spy services — Option E.
// Left rail (5 cases, expand active inline) + right pinned demo stage.

const SPY_CASES = [
  {
    id: "calls",
    kicker: "Booking recovery",
    title: "Turn missed calls into booked appointments",
    accent: "#F5A623",
    desc: "Voicemails and rings-no-answer become a return-call queue with context, suggested time slots, and one-tap booking back into your calendar.",
    bullets: [
      "Auto-transcribe and triage every missed call",
      "Match each caller to past history and intent",
      "Draft a reply in the owner's voice",
      "One-tap booking — slot held until they reply",
    ],
    visual: "calls",
  },
  {
    id: "support",
    kicker: "Customer feedback",
    title: "Mine support requests for product suggestions",
    accent: "#B9FF35",
    desc: "An always-on analyst that tags, clusters, and ranks customer complaints into a weekly product backlog — with citations back to the original tickets.",
    bullets: [
      "Cluster duplicate complaints automatically",
      "Rank by impact, citing the original tickets",
      "Weekly digest mailed to the owner Friday 9am",
      "Hand a ranked backlog to engineering",
    ],
    visual: "support",
  },
  {
    id: "tutoring",
    kicker: "Quality coaching",
    title: "Score sessions from their transcripts",
    accent: "#5BE3FF",
    desc: "Every session is graded against your rubric — engagement, clarity, follow-through — with example quotes attached. Coach where it matters.",
    bullets: [
      "Auto-score every session against your rubric",
      "Pull example quotes with timestamps",
      "Trend each tutor over time",
      "Send coaching notes weekly",
    ],
    visual: "tutoring",
  },
  {
    id: "listings",
    kicker: "Content at scale",
    title: "Write 200 listing descriptions in an afternoon",
    accent: "#FF3DA5",
    desc: "Feed in your spec sheet and photos; get on-brand copy at the length and tone your MLS wants, ready to paste — with consistency guardrails.",
    bullets: [
      "Generate on-brand copy in your voice",
      "Length + tone tuned per platform (MLS, Airbnb, …)",
      "Consistency guardrails (no 'luxury', no 'stunning')",
      "Batch-process from a spec sheet",
    ],
    visual: "listings",
  },
  {
    id: "followups",
    kicker: "Lead nurture",
    title: "Send follow-ups that reference what they browsed",
    accent: "#B9FF35",
    desc: "An agent watches sessions and drafts the next nudge — tied to the exact pages, products, or PDFs the customer touched. You hit send.",
    bullets: [
      "Detect intent signals across your site",
      "Draft a follow-up tied to the exact session",
      "Snooze, edit, or send in one click",
      "Track which drafts actually land",
    ],
    visual: "followups",
  },
];

function ScrollSpyServices() {
  const [active, setActive] = React.useState(0);
  const c = SPY_CASES[active];

  return (
    <section className="svc-section spy-section" id="services">
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
            <p>Five cases. Pick the activity that sounds familiar — the demo on the right is the shape of the build.</p>
          </div>
        </header>

        <div className="spy-grid">
          <aside className="spy-rail" role="tablist">
            {SPY_CASES.map((cs, i) => (
              <button
                key={cs.id}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={"spy-item " + (active === i ? "active" : "")}
                style={{ "--case-accent": cs.accent }}
              >
                <div className="spy-item-head">
                  <span className="spy-item-marker mono">0{i + 1} · {cs.kicker}</span>
                  <span className="spy-item-dot" />
                </div>
                <div className="spy-item-title">{cs.title}</div>
                {active === i && (
                  <div className="spy-item-body">
                    <p className="spy-item-desc">{cs.desc}</p>
                    <ul className="spy-item-bullets">
                      {cs.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  </div>
                )}
              </button>
            ))}
          </aside>

          <div className="spy-stage-wrap">
            <div className="spy-stage" style={{ "--case-accent": c.accent }}>
              <div className="spy-stage-bar">
                <div className="mono spy-stage-l">Live demo · {c.kicker}</div>
                <div className="spy-stage-r">
                  <span className="spy-dot" style={{ background: c.accent }} />
                  <span className="mono">Running</span>
                </div>
              </div>
              <div className="spy-stage-body">
                <window.WideVisualD id={c.visual} />
              </div>
            </div>
            <div className="spy-cta">
              <a className="btn btn-primary" href="#contact">Talk about this build <span style={{ opacity:0.6, fontSize:11 }}>↗</span></a>
              <a className="btn btn-ghost" href="#insights">Case study</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ScrollSpyServices, SPY_CASES });
