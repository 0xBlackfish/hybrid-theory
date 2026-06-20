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
// Framing follows the "one niche, one leak, one agent" model: each tile leads with
// the niche + the specific bottleneck it removes, not the underlying capability.
export const SPY_CASES: ServiceCase[] = [
  {
    id: "calls",
    kicker: "Home services · speed-to-lead",
    title: "Turn missed calls into booked jobs",
    accent: "#F5A623",
    desc: "For roofers, HVAC, plumbers and the like: every missed call and voicemail gets an instant text back and lands in a return-call queue with context, suggested slots, and one-tap booking — before the lead calls the next guy.",
    bullets: [
      "Text every missed caller back in 30 seconds",
      "Match each caller to past history and intent",
      "Draft the reply in the owner's voice",
      "One-tap booking — the slot is held until they reply",
    ],
    visual: "calls",
  },
  {
    id: "support",
    kicker: "Voice of customer · market research",
    title: "Turn customer chatter into next month's roadmap",
    accent: "#B9FF35",
    desc: "Market research as a service: an always-on analyst reads your reviews, tickets, and DMs, clusters what people keep asking for, and hands you a ranked roadmap every week — cited back to the original message.",
    bullets: [
      "Cluster duplicate complaints and requests automatically",
      "Rank by impact, cited back to the original message",
      "A ranked roadmap mailed to you every Friday 9am",
      "Know what to build, fix, or say next",
    ],
    visual: "support",
  },
  {
    id: "tutoring",
    kicker: "Call-heavy teams · quality coaching",
    title: "Score every call from the transcript",
    accent: "#5BE3FF",
    desc: "For clinics, support desks and tutoring teams: every session is graded against your rubric — engagement, clarity, follow-through — with example quotes attached, so you coach where it actually matters.",
    bullets: [
      "Auto-score every session against your rubric",
      "Pull example quotes with timestamps",
      "Trend each person over time",
      "Send coaching notes weekly",
    ],
    visual: "tutoring",
  },
  {
    id: "listings",
    kicker: "Real estate · content at scale",
    title: "Write 200 listing descriptions in an afternoon",
    accent: "#FF3DA5",
    desc: "Feed in your spec sheet and photos; get on-brand copy at the length and tone your MLS wants, ready to paste — with consistency guardrails so nothing goes off-message.",
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
    kicker: "Sales · follow-up",
    title: "Send the follow-up your team forgets",
    accent: "#B9FF35",
    desc: "Every lead gets a timely, personal nudge tied to exactly what they touched — the pages, products, or quotes they looked at — drafted and ready so nothing slips through the cracks. You hit send.",
    bullets: [
      "Detect intent signals across your site and inbox",
      "Draft a follow-up tied to the exact session",
      "Snooze, edit, or send in one click",
      "Track which drafts actually land",
    ],
    visual: "followups",
  },
];
