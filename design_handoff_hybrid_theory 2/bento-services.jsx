/* eslint-disable */
// Bento services section — Stripe-style.
// 5 cards visible at once · each opens into a full overlay with deeper detail.

const BENTO_CASES = [
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
    size: "wide",
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
    size: "tall",
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
    size: "third",
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
    size: "third",
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
    size: "third",
  },
];

/* ============================================================
   Small preview visuals (mini, per-card)
   ============================================================ */
const Preview = ({ id, accent }) => {
  const txt = { fontFamily: "var(--sans)", color: "#0A0A08" };
  const row = { display: "grid", gridTemplateColumns: "1fr auto", gap: 8, alignItems: "center", padding: "6px 10px", borderRadius: 6, fontSize: 11 };
  const mono = { fontFamily: "var(--mono)", fontSize: 9.5, letterSpacing: "0.08em" };

  if (id === "calls") {
    return (
      <div style={{ background: "#fff", borderRadius: 10, padding: 14, ...txt, boxShadow: "0 12px 32px -16px rgba(0,0,0,0.45)" }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.14em", color: "#7C7A72", textTransform: "uppercase", marginBottom: 10 }}>Return-call queue · 7 missed</div>
        {[
          { n: "Marisol R.", r: "Brake quote", slot: "Tue 2:00p", hot: true },
          { n: "Devon H.",   r: "Tune-up",     slot: "Wed 9:30a" },
          { n: "Yusuf K.",   r: "Battery",     slot: "Tue 4:15p" },
        ].map((c, i) => (
          <div key={i} style={{ ...row, borderTop: i ? "1px dashed #E7E3D6" : "none" }}>
            <div>
              <div style={{ fontWeight: 500, fontSize: 12 }}>{c.n}</div>
              <div style={{ fontSize: 10.5, color: "#7C7A72" }}>{c.r}</div>
            </div>
            <span style={{ ...mono, background: c.hot ? accent : "#F2EFE6", color: "#0A0A08", padding: "4px 8px", borderRadius: 99 }}>{c.slot}</span>
          </div>
        ))}
      </div>
    );
  }
  if (id === "support") {
    return (
      <div style={{ background: "#fff", borderRadius: 10, padding: 14, ...txt, boxShadow: "0 12px 32px -16px rgba(0,0,0,0.45)" }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.14em", color: "#7C7A72", textTransform: "uppercase", marginBottom: 10 }}>Clusters · this week</div>
        {[["Filter resets", 14, true], ["Bulk edit", 9], ["Quickbooks sync", 5], ["Mobile crash", 4]].map(([t, n, a], i) => (
          <div key={i} style={{ ...row, background: a ? "#F2EFE6" : "transparent" }}>
            <span style={{ fontSize: 11.5 }}>{t}</span>
            <span style={{ ...mono, color: "#0A0A08" }}>{n}</span>
          </div>
        ))}
      </div>
    );
  }
  if (id === "tutoring") {
    return (
      <div style={{ background: "#fff", borderRadius: 10, padding: 14, ...txt, boxShadow: "0 12px 32px -16px rgba(0,0,0,0.45)" }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.14em", color: "#7C7A72", textTransform: "uppercase", marginBottom: 10 }}>42 sessions scored</div>
        {[{ n: "A. Patel", s: 92 }, { n: "M. Chen", s: 78 }, { n: "J. Okafor", s: 88 }].map((r, i) => (
          <div key={i} style={{ padding: "6px 0", borderTop: i ? "1px dashed #E7E3D6" : "none" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5 }}>
              <span style={{ fontWeight: 500 }}>{r.n}</span>
              <span style={mono}>{r.s}</span>
            </div>
            <div style={{ height: 3, background: "#F2EFE6", borderRadius: 2, marginTop: 4 }}>
              <div style={{ width: `${r.s}%`, height: "100%", background: "#0A0A08", borderRadius: 2 }} />
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (id === "listings") {
    return (
      <div style={{ background: "#fff", borderRadius: 10, padding: 14, ...txt, boxShadow: "0 12px 32px -16px rgba(0,0,0,0.45)" }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.14em", color: "#7C7A72", textTransform: "uppercase", marginBottom: 8 }}>Batch · 124 / 200</div>
        <div style={{ height: 4, background: "#F2EFE6", borderRadius: 2, marginBottom: 10 }}>
          <div style={{ width: "62%", height: "100%", background: accent, borderRadius: 2 }} />
        </div>
        <div style={{ ...mono, color: "#7C7A72", marginBottom: 4 }}>1429 OAK GROVE LN</div>
        <div style={{ fontSize: 11, lineHeight: 1.45 }}>
          Sunlit ranch on a quiet cul-de-sac. Original oak floors run through a renovated kitchen with quartz counters…
        </div>
      </div>
    );
  }
  if (id === "followups") {
    return (
      <div style={{ background: "#fff", borderRadius: 10, padding: 14, ...txt, boxShadow: "0 12px 32px -16px rgba(0,0,0,0.45)" }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.14em", color: "#7C7A72", textTransform: "uppercase", marginBottom: 8 }}>Draft · jordan@northstead.com</div>
        <div style={{ fontSize: 11.5, fontWeight: 500, marginBottom: 4 }}>About the M-Series spec sheet</div>
        <div style={{ fontSize: 11, lineHeight: 1.5, color: "#3F3F3A" }}>
          Hi Jordan — saw you spent time on the <span style={{ background: accent, padding: "0 3px" }}>M-Series spec PDF</span> and warranty page yesterday. Lead times on M-Series are 5–6 weeks…
        </div>
      </div>
    );
  }
  return null;
};

/* ============================================================
   Card
   ============================================================ */
const BentoCard = ({ c, onExpand }) => {
  const tintRgba = (() => {
    // strip # → r,g,b
    const hex = c.accent.replace("#", "");
    const r = parseInt(hex.slice(0,2), 16), g = parseInt(hex.slice(2,4), 16), b = parseInt(hex.slice(4,6), 16);
    return `rgba(${r}, ${g}, ${b}, 0.18)`;
  })();
  return (
    <article
      className="bento-card"
      style={{
        background: `linear-gradient(135deg, #16181D 0%, #16181D 55%, ${tintRgba} 100%)`,
        borderColor: "var(--rule)",
      }}
    >
      <div className="bento-card-head">
        <div>
          <div className="bento-kicker mono" style={{ color: c.accent }}>{c.kicker}</div>
          <h3 className="bento-title">{c.title}</h3>
        </div>
        <button className="bento-expand" onClick={onExpand} aria-label="Expand">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 8 V12 H6 M12 6 V2 H8 M2 12 L6 8 M12 2 L8 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className="bento-card-preview">
        <Preview id={c.visual} accent={c.accent} />
      </div>
    </article>
  );
};

/* ============================================================
   Modal
   ============================================================ */
const BentoModal = ({ c, onClose }) => {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="bento-backdrop" onClick={onClose}>
      <div className="bento-modal" onClick={(e) => e.stopPropagation()} style={{
        background: `linear-gradient(180deg, #16181D 0%, #0E0F12 280px)`,
      }}>
        <button className="bento-close" onClick={onClose} aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 3 L11 11 M11 3 L3 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        <header className="bento-modal-head">
          <div>
            <div className="bento-kicker mono" style={{ color: c.accent }}>{c.kicker}</div>
            <h2 className="bento-modal-title">{c.title}</h2>
            <p className="bento-modal-desc">{c.desc}</p>
            <div className="bento-modal-cta">
              <a href="#contact" className="btn btn-primary">Talk about this build <span style={{ opacity:0.6, fontSize:11 }}>↗</span></a>
              <a href="#insights" className="btn btn-ghost">Case study</a>
            </div>
          </div>
          <ul className="bento-modal-bullets">
            {c.bullets.map((b, i) => (
              <li key={i}>
                <span className="bento-bullet-tick" style={{ color: c.accent }}>✓</span>
                {b}
              </li>
            ))}
          </ul>
        </header>

        <div className="bento-modal-stage">
          <div className="bento-stage-bar">
            <div className="mono bento-stage-l">Live demo · {c.kicker}</div>
            <div className="bento-stage-r">
              <span className="bento-dot" style={{ background: c.accent }} />
              <span className="mono">Running</span>
            </div>
          </div>
          <div className="bento-stage-body">
            <window.WideVisualD id={c.visual} />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   Section
   ============================================================ */
function BentoServices() {
  const [expandedId, setExpandedId] = React.useState(null);
  const expanded = BENTO_CASES.find((c) => c.id === expandedId);
  return (
    <section className="svc-section bento-section" id="services">
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
            <p>Five cases. Tap any tile to see the full build.</p>
          </div>
        </header>

        <div className="bento-grid">
          {BENTO_CASES.map((c) => (
            <div key={c.id} className={"bento-slot bento-slot-" + c.size}>
              <BentoCard c={c} onExpand={() => setExpandedId(c.id)} />
            </div>
          ))}
        </div>
      </div>

      {expanded && <BentoModal c={expanded} onClose={() => setExpandedId(null)} />}
    </section>
  );
}

Object.assign(window, { BentoServices, BentoModal });
