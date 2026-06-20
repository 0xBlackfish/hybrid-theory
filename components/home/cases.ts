export interface ServiceCase {
  id: string;
  kicker: string;
  title: string;
  accent: string;
  desc: string;
  bullets: string[];
  visual: string;
}

// Shared across StripServices, BentoModal, etc. (was SPY_CASES in the prototype).
export const SPY_CASES: ServiceCase[] = [
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
