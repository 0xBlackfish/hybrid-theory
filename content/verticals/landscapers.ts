import type { VerticalContent } from "./types";

export const landscapers: VerticalContent = {
  slug: "landscapers",
  label: "Landscapers",
  navLabel: "Landscapers",
  accent: "#B9FF35",
  metaTitle: "AI for landscaping companies — answer every lead during the spring rush",
  metaDescription:
    "The calls come in while your crews are out. A quiet helper answers every new lead, sends the estimate, and renews the maintenance contract — you keep every call.",

  hero: {
    eyebrow: "AI for landscaping companies",
    headline: "Every spring lead answered while the crews are out",
    lead:
      "April hits and the phone doesn't stop — but you're on a mower, not at a desk. A quiet helper picks up every new inquiry, texts back in seconds, and gets the estimate moving before the homeowner calls the next guy. You still walk the property and set the price.",
  },

  stakes: {
    headline: "The busy season is where the money leaks",
    body:
      "In spring, more work comes in than a crew boss can catch between stops. Voicemails pile up, estimates get promised on the tailgate and forgotten by Friday, and last year's maintenance clients quietly sign with whoever called them first. None of it feels like a lost job — until you add up the season.",
    stats: [
      {
        value: "First",
        label: "The first company to call a homeowner back usually wins the job",
      },
      {
        value: "78%",
        label: "of buyers go with the business that responds first",
        source: "Harvard Business Review, \"The Short Life of Online Sales Leads\"",
      },
      {
        value: "5×",
        label:
          "leads contacted within 5 minutes are far likelier to convert than ones left an hour",
        source: "Lead Response Management study (Oldroyd, InsideSales)",
      },
    ],
  },

  opportunities: [
    {
      icon: "speed",
      title: "Answer the spring rush before you're back to the truck",
      body:
        "A homeowner fills out your form at 9am while your crew's three yards deep. They get a real reply in seconds — not a callback tonight, when they've already booked someone else.",
    },
    {
      icon: "quote",
      title: "Send the estimate you promised at the curb",
      body:
        "You walked the yard, quoted a number, said you'd email it over. By the time the day ends, it's slipped your mind. The helper drafts and sends it that afternoon, with your price, so it's in their inbox before they cool off.",
    },
    {
      icon: "reorder",
      title: "Renew the seasonal contracts before they lapse",
      body:
        "Last year's mow-and-maintain clients don't cancel — they just don't renew, and you don't notice until the route's thinner in May. The helper reaches out ahead of the season so the yes happens before someone else asks.",
    },
    {
      icon: "winback",
      title: "Re-engage the maintenance clients who drifted off",
      body:
        "A weekly client goes quiet after fall cleanup and never comes back for spring. A simple, warm check-in at the right moment brings a lot of them back — nobody had to remember to make the call.",
    },
    {
      icon: "invoice",
      title: "Close out the invoice while the job's still fresh",
      body:
        "The crew finishes, moves to the next property, and the invoice waits a week — sometimes three. The helper sends it the day the work wraps, so you're paid on this month's cash, not next quarter's.",
    },
  ],

  demoFlow: "speed",
  demoIntro:
    "Here's a spring inquiry landing while your crew's out on a route — and what the homeowner sees instead of your voicemail.",

  faq: [
    {
      q: "It's April and I'm slammed. Is this going to be one more thing to manage?",
      a: "No — that's the point. It runs in the background and handles the repetitive part: answering new leads, sending the estimate, nudging a renewal. You get a clean summary and only step in for the calls that actually need you.",
    },
    {
      q: "I price every job by walking the property. Does this quote for me?",
      a: "It never sets your prices. It captures the lead, asks the homeowner the right questions, and gets your estimate out the door fast once you've given the number. Every judgment call — the walk-through, the price, the scope — stays with you.",
    },
    {
      q: "My work is seasonal. Does this only pay off in spring?",
      a: "Spring is where it earns its keep, but the off-season is when contracts renew and clients drift. It keeps the renewals from lapsing over winter and re-engages last year's clients before the rush starts. The quiet months are where next season's route gets built.",
    },
    {
      q: "Won't a homeowner know they're texting a machine?",
      a: "It replies in your voice and hands off to you the moment a conversation needs a real person — a tricky property, an odd request, a price question. Most homeowners just want a fast, straight answer, and they get one instead of your voicemail.",
    },
    {
      q: "I'm a crew of four, not a big company. Is this overkill?",
      a: "Smaller crews feel the leak hardest — there's no office manager catching the calls you miss while you're on a mower. This is the office help you can't afford to hire full-time, working every hour the phone rings.",
    },
  ],

  finalCta: {
    headline: "Find the leak before next spring's rush",
    body:
      "Book a free 30-minute assessment. We'll look at where jobs slip through during your busy season, and you'll leave with your single biggest bottleneck named and one specific fix — no pitch, no obligation.",
  },

  scenario: {
    chipLabel: "Landscaping company",
    sms: {
      initials: "RB",
      name: "Rachel Brooks",
      phone: "(919) 555-0136",
      badge: "Spring lead",
      system: "**New website lead** · Today 9:12 AM",
      messages: [
        {
          from: "customer",
          text: "Hi, looking for weekly mowing + a spring cleanup for a corner lot. Can you quote?",
          time: "9:12 AM",
        },
        {
          from: "business",
          text: "Happy to, Rachel! Grabbing your lot size and putting a number together — I'll have it over this afternoon.",
          time: "9:13 AM",
          note: "Sent by **Hybrid** · 22 sec after the form",
        },
        {
          from: "business",
          text: "Here's your estimate — **$4,730** for the season, cleanup included. Want your first visit this week?",
          time: "2:05 PM",
        },
        { from: "customer", text: "Perfect, yes — let's get started", time: "2:11 PM" },
      ],
    },
    digest: {
      title: "Good morning, Matt ☀️",
      body: "**$9,400** in spring work quoted while the crews were out — every new lead answered same day.",
      stats: [
        { value: "6", label: "LEADS ANSWERED" },
        { value: "0", label: "WAITING" },
        { value: "18m", label: "AVG REPLY" },
      ],
    },
    value: {
      kind: "quote",
      company: "GreenScape · Estimate",
      sentStamp: "Sent 2:05 PM",
      lineItems: [
        { label: "Spring cleanup & haul-away", amount: "$650" },
        { label: "Weekly mow & maintain (season)", amount: "$2,880" },
        { label: "Mulch & bed refresh", amount: "$1,200" },
      ],
      total: "$4,730",
      receipt: "Sent · $4,730 · 2:05 PM · same day",
    },
  },
};
