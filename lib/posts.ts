export type ArticleTag = "Strategy" | "Build" | "Craft" | "Hiring" | "Industry";

export interface ArticleVisualData {
  kind: "mock-strategy" | "mock-quote" | "mock-letter" | "mock-prompts" | "mock-voicemail";
  caption: string;
}

export interface ListArticle {
  slug: string;
  tag: ArticleTag;
  date: string;
  author: string;
  role: string;
  title: string;
  excerpt: string;
  visual: ArticleVisualData;
}

export const TAG_ACCENT: Record<string, string> = {
  Strategy: "var(--amber)",
  Build: "var(--lime)",
  Craft: "var(--cyan)",
  Hiring: "var(--magenta)",
  Industry: "var(--lime)",
};

export const STRIPE_FILTERS = ["All", "Strategy", "Build", "Craft", "Hiring"] as const;

// Articles shown on the Insights landing page.
export const INSIGHTS_ARTICLES: ListArticle[] = [
  {
    slug: "ai-strategy-12-person-business",
    tag: "Strategy",
    date: "May 14, 2026",
    author: "Mara Chen",
    role: "Senior Engineer, Hybrid Theory",
    title: 'What "AI strategy" should mean for a 12-person business.',
    excerpt: "Strategy decks for SMBs are mostly theatre. Here's what we replace them with — and why the version we ship in 30 days is shorter, sharper, and gets used.",
    visual: { kind: "mock-strategy", caption: "30-Day Readiness Audit" },
  },
  {
    slug: "photo-to-quote-tucson",
    tag: "Build",
    date: "April 28, 2026",
    author: "Devon Hill",
    role: "Engineer, Hybrid Theory",
    title: "Photo-to-quote, built in 11 days for a Tucson auto shop.",
    excerpt: "How one custom tool moved average quote-turnaround from two days to under fifteen minutes — and what we learned about training a model on real shop photos.",
    visual: { kind: "mock-quote", caption: "Acme Auto · Photo to Quote" },
  },
  {
    slug: "stop-hiring-cao",
    tag: "Strategy",
    date: "March 19, 2026",
    author: "Mara Chen",
    role: "Senior Engineer, Hybrid Theory",
    title: "Stop hiring a Chief AI Officer. Hire a Tuesday.",
    excerpt: "On the surprising impact of a single half-day per week embedded in your business — and why retainers beat headcount when you're under 50 people.",
    visual: { kind: "mock-letter", caption: "Hire a Tuesday" },
  },
  {
    slug: "three-prompt-patterns",
    tag: "Craft",
    date: "February 02, 2026",
    author: "Yusuf Khan",
    role: "Engineer, Hybrid Theory",
    title: "Three prompt patterns we use with every owner-facing tool.",
    excerpt: "Voice examples, refusal clauses, and 'why this slot' explanations. Small changes that make AI output trustable enough for an owner to send without reading every word.",
    visual: { kind: "mock-prompts", caption: "Prompt Pattern Library" },
  },
  {
    slug: "voicemail-to-crm",
    tag: "Build",
    date: "January 11, 2026",
    author: "Devon Hill",
    role: "Engineer, Hybrid Theory",
    title: "Voicemail → CRM ticket, end-to-end, in a single afternoon.",
    excerpt: "What we built for a dental office on a 4-hour pairing session. Now their front desk doesn't transcribe anything — and the receptionist takes Tuesdays off.",
    visual: { kind: "mock-voicemail", caption: "Voicemail Pipeline" },
  },
];

const ARCHIVE_EXTRAS: ListArticle[] = [
  {
    slug: "against-ai-transformation",
    tag: "Strategy",
    date: "December 06, 2025",
    author: "Mara Chen",
    role: "Senior Engineer, Hybrid Theory",
    title: 'The case against "AI transformation" as a budget line item.',
    excerpt: "Why most enterprise AI budgets get spent on consultants who don't ship — and what to do instead. With receipts.",
    visual: { kind: "mock-strategy", caption: "Budget Reallocation" },
  },
  {
    slug: "first-ten-engagements",
    tag: "Craft",
    date: "November 18, 2025",
    author: "Yusuf Khan",
    role: "Engineer, Hybrid Theory",
    title: "What we learned shipping our first 10 SMB engagements.",
    excerpt: "The patterns that worked, the patterns that didn't, and the ones we're still figuring out. An honest field report after a year of work.",
    visual: { kind: "mock-prompts", caption: "Patterns That Stuck" },
  },
  {
    slug: "inventory-reorder-hvac",
    tag: "Build",
    date: "October 24, 2025",
    author: "Devon Hill",
    role: "Engineer, Hybrid Theory",
    title: "Inventory reorder agent for a regional HVAC distributor.",
    excerpt: "A single agent that watched stock levels, vendor lead times, and seasonal demand — and ordered when it should. Saved them $48K in stockouts.",
    visual: { kind: "mock-voicemail", caption: "Reorder Queue" },
  },
  {
    slug: "ai-feature-ux-problem",
    tag: "Craft",
    date: "September 09, 2025",
    author: "Mara Chen",
    role: "Senior Engineer, Hybrid Theory",
    title: 'Three signs an "AI feature" is actually a UX problem.',
    excerpt: "On the surprising frequency with which AI gets blamed for design choices that were broken to begin with — and how to tell which is which.",
    visual: { kind: "mock-prompts", caption: "Design Diagnosis" },
  },
];

export const ARCHIVE_ARTICLES: ListArticle[] = [...INSIGHTS_ARTICLES, ...ARCHIVE_EXTRAS];

export function getListArticle(slug: string): ListArticle | undefined {
  return ARCHIVE_ARTICLES.find((a) => a.slug === slug);
}

/* ---------- MDX article bodies ---------- */

export interface TocEntry {
  id: string;
  label: string;
}

export interface ArticleFrontmatter {
  slug: string;
  kicker: string;
  date: string;
  author: string;
  authorTitle: string;
  title: string;
  lead: string;
  toc: TocEntry[];
  related?: string[];
}
