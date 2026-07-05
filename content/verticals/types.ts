// Shared schema for per-vertical "For You" pages (/for/[slug]).
// Each vertical gets one file in this directory exporting a `VerticalContent`.
//
// HONESTY RULES (pre-launch — enforced across all vertical content):
// - No invented client testimonials, client names, or fabricated results.
// - Industry statistics are allowed ONLY when they are widely reported and the
//   source is named in `source` (e.g. "Harvard Business Review", "Invisalign
//   practice surveys"). When unsure, prefer concrete logic ("the first company
//   to call back usually wins the job") over numbers.
// - Dollar/time examples must be framed as illustrative ("a $9,000 roof job",
//   "roughly two hours a day"), never as client outcomes.

export type VerticalStat = {
  value: string; // "78%", "7×", "$1,200"
  label: string; // what the number means, in one line
  source?: string; // named source; omit → the stat must be self-evident logic
};

export type VerticalOpportunity = {
  /** Key into the shared opportunity icon set (components/home-v2/icons.tsx):
   * speed | sdr | dm | qualify | quote | proposal | bid | missed | reception |
   * abandoned | invoice | docs | reviews | referrals | reviewmine | booking |
   * noshow | intake | winback | reorder | reactivation | upsell */
  icon: string;
  title: string; // vertical-specific, not the generic tile title
  body: string; // 1–2 sentences, owner language, concrete moment from their day
};

export type VerticalFaqItem = {
  q: string;
  a: string; // 2–4 sentences, honest, no hedge-jargon
};

// ---------------------------------------------------------------------------
// SCENARIO — the hero "artifact story" for a vertical.
// Mirrors direction-e-product-light's per-vertical JS data. Three rendered
// artifacts (an SMS thread, a morning digest, and a value receipt that is
// EITHER a booked calendar slot OR a sent quote) tell one money moment.
//
// Text fields support a tiny **bold** markup for inline emphasis (a dollar
// figure, a time). Same honesty rules apply: dollar/time amounts are
// illustrative, shown as an outcome in the artifact — never a client result.
// ---------------------------------------------------------------------------

export type ScenarioMessage = {
  from: "customer" | "business"; // inbound (left) or the AI's reply (right)
  text: string; // supports **bold**
  time: string; // "2:04 PM"
  /** The little "Sent by Hybrid · …" attribution under an AI reply. */
  note?: string; // supports **bold**
};

export type ScenarioSms = {
  initials: string; // avatar monogram, e.g. "MR"
  name: string; // "Mike Reyes"
  phone: string; // "(512) 555-0148"
  badge: string; // header pill, e.g. "Same-hour quote"
  system: string; // centered status line, supports **bold**
  messages: ScenarioMessage[];
};

export type ScenarioDigestStat = {
  value: string; // "4", "22m", "0"
  label: string; // "QUOTES SENT"
};

export type ScenarioDigest = {
  title: string; // "Good morning, Matt ☀️"
  body: string; // supports **bold** (the bold span renders as the lime figure)
  stats: ScenarioDigestStat[]; // 3 items
};

export type ScenarioQuoteValue = {
  kind: "quote";
  company: string; // "Summit Roofing · Estimate"
  sentStamp: string; // "Sent 2:31 PM"
  photoCount?: number; // 0/undefined → hide the photo row
  photoLabel?: string; // override the default "N photos from the customer"
  lineItems: { label: string; amount: string }[];
  totalLabel?: string; // defaults to "Estimate total"
  total: string; // "$6,450"
  receipt: string; // "Sent · $6,450 · 2:31 PM · same hour"
};

export type ScenarioCalendarSlot = {
  time: string; // "8:00"
  /** Present → this slot is the filled one carrying the receipt. */
  booking?: { title: string; sub: string; receipt: string };
};

export type ScenarioCalendarValue = {
  kind: "calendar";
  dayOfWeek: string; // "Wednesday"
  date: string; // "Nov 6" | "Today"
  addedLabel: string; // "JUST ADDED" | "REFILLED"
  slots: ScenarioCalendarSlot[];
};

export type ScenarioValue = ScenarioQuoteValue | ScenarioCalendarValue;

export type VerticalScenario = {
  chipLabel: string; // switcher chip text, e.g. "Roofing company"
  sms: ScenarioSms;
  digest: ScenarioDigest;
  value: ScenarioValue; // ends every scenario in a visible receipt of value
};

export type VerticalContent = {
  slug: string; // route segment, e.g. "hvac-plumbing"
  label: string; // display name, e.g. "HVAC & Plumbing"
  navLabel: string; // short name for the nav dropdown, e.g. "HVAC & plumbing"
  accent: string; // one of the site accents: #B9FF35 #F5A623 #5BE3FF #FF3DA5 #A78BFA #3FE0A8
  metaTitle: string; // <title> — include a search phrase owners actually type
  metaDescription: string; // ~155 chars

  hero: {
    eyebrow: string; // "AI for [vertical]"
    headline: string; // pain/outcome-led, ≤ 9 words, names their world
    lead: string; // 2–3 sentences: what we handle, in their vocabulary
  };

  /** "The leak" — where money quietly escapes in THIS business type. */
  stakes: {
    headline: string;
    body: string; // 2–3 sentences
    stats: VerticalStat[]; // 2–3 items
  };

  /** Top opportunities for this vertical, best first. 4–5 items. */
  opportunities: VerticalOpportunity[];

  /** Optional: key of a LeakCycler demo scene that fits this vertical:
   * missed | speed | noshow | quote | docs | reviews */
  demoFlow?: string;
  demoIntro?: string; // one sentence tying the demo to their day

  faq: VerticalFaqItem[]; // 4–5 vertical-specific objections

  finalCta: {
    headline: string;
    body: string; // reinforce: free, 30 minutes, one specific win
  };

  /** Hero artifact story — SMS thread, morning digest, and a value receipt. */
  scenario: VerticalScenario;
};
