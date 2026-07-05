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
  title: string; // "Good morning ☀️"
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

// ---------------------------------------------------------------------------
// SPOTLIGHT — the vertical page's "see it work" centerpiece: ONE bespoke,
// end-to-end workflow scene for this industry's most acute friction, rendered
// by components/vertical/SpotlightScene in the Home theater's visual language.
// Four cards on a 2×2 stage (positions a=top-left, b=top-right, c=bottom-left,
// d=bottom-right), a step rail, beat timings, and a final value receipt.
// Text fields support **bold**.
// ---------------------------------------------------------------------------

export type SpotlightRow = { text: string; when?: string; done?: boolean };

export type SpotlightCard = {
  pos: "a" | "b" | "c" | "d";
  at: number; // beat index (0-based) when this card enters
  title: string; // card header, e.g. "INTAKE · NEW MATTER"
  dark?: boolean; // dark digest-style card (use at most once, pos d preferred)
  kind:
    | { type: "sms"; sms: ScenarioSms }
    | { type: "calendar"; value: ScenarioCalendarValue }
    | { type: "quote"; value: ScenarioQuoteValue }
    | { type: "digest"; digest: ScenarioDigest }
    | { type: "checklist"; header?: string; items: { label: string; tag: string; done?: boolean }[]; footer?: string }
    | { type: "scorecard"; rows: { label: string; value: string }[]; footer?: string }
    | { type: "timeline"; rows: SpotlightRow[]; receiptChip?: string };
};

export type VerticalSpotlight = {
  headline: string; // section h2 — must carry the section without a kicker
  intro: string; // one sentence tying the scene to this owner's day
  name: string; // scene bar label, e.g. "Storm week, handled"
  context: string; // scene bar context, e.g. "Summit Roofing · 40 calls/day"
  rail: string[]; // 4–5 short stage labels, lighting in beat order
  beats: number[]; // per-beat durations in ms (same length as rail)
  cards: SpotlightCard[]; // exactly 4, one per position
  receipt: string; // the held lime outcome, e.g. "Booked · $12,400 · same day"
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

  /** Section head for the opportunities grid. Headline + sub must be positive
   * and/or aspirational, in this industry's own vocabulary — never loss-framed. */
  opportunitiesHead?: { headline: string; sub: string };

  /** Top opportunities for this vertical, best first. 4–5 items. */
  opportunities: VerticalOpportunity[];

  faq: VerticalFaqItem[]; // 4–5 vertical-specific objections

  finalCta: {
    headline: string;
    body: string; // reinforce: free, 30 minutes, one specific win
  };

  /** Hero artifact story — SMS thread, morning digest, and a value receipt. */
  scenario: VerticalScenario;

  /** The "see it work" centerpiece — one bespoke end-to-end scene for this
   * industry's most acute friction. Optional until all verticals have one;
   * when present it replaces the generic demo. */
  spotlight?: VerticalSpotlight;
};
