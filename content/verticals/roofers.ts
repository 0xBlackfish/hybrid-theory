import type { VerticalContent } from "./types";

export const roofers: VerticalContent = {
  slug: "roofers",
  label: "Roofers",
  navLabel: "Roofers",
  accent: "#F5A623",
  metaTitle: "AI for roofing companies — quote faster, chase every lead",
  metaDescription:
    "After a storm, the first roofer to call back usually gets the roof. AI drafts quotes from photos, follows up on every lead, and chases the insurance paperwork — you approve every number.",

  hero: {
    eyebrow: "AI for roofing companies",
    headline: "After the hail, whoever quotes first gets the roof.",
    lead: "When the phone lights up after a storm, a quiet helper texts every caller back, gathers photos and measurements, and hands you a draft quote to check. You still climb up and read the roof — you just get to the homeowner before the other three trucks do.",
  },

  stakes: {
    headline: "The jobs you lost weren't underbid. They were out-answered.",
    body: "A homeowner with a leaking roof isn't shopping on price — they're shopping on who calls back. By the time you circle back to yesterday's forty voicemails, half of them already shook a hand with someone quicker. The quote that never got a second follow-up didn't lose the job; it just quietly stopped existing.",
    stats: [
      {
        value: "7×",
        label:
          "more likely to qualify a lead when you respond within an hour instead of letting it sit",
        source: "Harvard Business Review",
      },
      {
        value: "1st",
        label:
          "homeowners gather three or four bids after a storm — the first roofer to actually follow up usually makes the short list",
      },
      {
        value: "$0",
        label:
          "what an unchased quote earns you, and most quotes that never get a second nudge are quietly abandoned",
      },
    ],
  },

  opportunities: [
    {
      icon: "speed",
      title: "Storm days, when forty calls come at once",
      body: "The morning after a hailstorm, the phone doesn't stop and you're already three roofs deep. A helper texts every caller back in the same minute, books the ones ready to book, and lines up the rest so nobody sits waiting for a callback that never comes.",
    },
    {
      icon: "quote",
      title: "Photo to draft quote before you leave the driveway",
      body: "A homeowner sends a photo of the damage. Instead of it sitting in your inbox until Sunday, the helper reads the shot, pulls likely materials and square footage, and hands you a draft quote to check. A number that lands the same hour hits different than one that takes three days.",
    },
    {
      icon: "abandoned",
      title: "The quotes that never got a second look",
      body: "You sent the estimate, they said they'd think about it, and it slipped off the pile. The helper follows up on its own — a friendly check-in at day three, another at day ten — so the jobs you already did the hard work for don't just evaporate.",
    },
    {
      icon: "docs",
      title: "Insurance paperwork you're tired of chasing",
      body: "Adjuster reports, scope sheets, supplement photos, the same claim number typed in six places. The helper gathers the documents, keeps each claim moving, and nudges the homeowner for what's missing — so you're on roofs instead of on hold with the carrier.",
    },
    {
      icon: "reviews",
      title: "The reviews that decide the whole street",
      body: "One good hail event and the neighborhood watches which sign goes up first. After a clean install, the helper asks the happy homeowner for a review at the right moment, so when their neighbor finally files a claim, your name is already the one they trust.",
    },
  ],

  demoFlow: "quote",
  demoIntro:
    "Here's the photo-to-quote loop — a homeowner's damage photo becomes a draft you approve, not a note you'll get to later.",

  faq: [
    {
      q: "My quotes need eyes on the roof. A computer can't price a real job.",
      a: "Agreed — and it doesn't. The helper drafts a starting number from the photos and measurements and gathers everything before you climb up. Every price, every line item, every send is yours to approve or change. It does the typing and the chasing; you do the judgment.",
    },
    {
      q: "Every roof is different. Won't the estimates be wrong?",
      a: "The draft is a first pass, not the final number. It's there so you walk up already knowing the likely scope instead of starting from a blank page. You adjust for the ridge you can only see from the ladder, the decking that's soft, the flashing nobody mentioned — the tool just saves you the cold start.",
    },
    {
      q: "Will homeowners know they're texting a bot?",
      a: "It sounds like your company, not a robot, and it hands off to you the moment a real conversation starts. Most homeowners just notice they got a fast, straight answer after a storm — which, when three other roofers left them on read, is exactly why they call you back.",
    },
    {
      q: "Insurance work is complicated — supplements, scope, adjusters. Can it really help there?",
      a: "It won't argue a claim for you, but it will keep the paperwork from being the bottleneck. It collects the photos and documents, keeps each claim in motion, and reminds the homeowner what the adjuster still needs. You handle the roofing and the negotiation; it handles the follow-up you keep forgetting.",
    },
    {
      q: "I've got a small crew and no time to set up software.",
      a: "That's the point of the free assessment — we find your single biggest bottleneck and one specific fix, and we build around the tools and phone number you already use. Nothing changes for your crew. The only difference is that the leads stop leaking while you're up on a roof.",
    },
  ],

  finalCta: {
    headline: "Find the leak before the next storm.",
    body: "Book your free 30-minute assessment. No pitch, no commitment — you'll leave with your single biggest bottleneck named and one specific fix you can picture running by next storm season.",
  },

  scenario: {
    chipLabel: "Roofing company",
    sms: {
      initials: "MR",
      name: "Mike Reyes",
      phone: "(512) 555-0148",
      badge: "Same-hour quote",
      system: "**Photos received** · Today 2:04 PM",
      messages: [
        {
          from: "customer",
          text: "Here are pics of the storm damage over the garage 📷 📷",
          time: "2:04 PM",
        },
        {
          from: "business",
          text: "Got them, thanks Mike! Looks like ~18 squares plus some flashing. I'll have an itemized quote over within the hour.",
          time: "2:05 PM",
          note: "Sent by **Hybrid** · reading the photos now",
        },
        {
          from: "business",
          text: "Here's your estimate — **$6,450**, good for 30 days. Want me to hold an install date?",
          time: "2:31 PM",
        },
        { from: "customer", text: "That's fair — yes, let's book it", time: "2:34 PM" },
      ],
    },
    digest: {
      title: "Good morning, Matt ☀️",
      body: "**$11,900** in quotes sent same-day — every photo answered within the hour.",
      stats: [
        { value: "4", label: "QUOTES SENT" },
        { value: "0", label: "WAITING" },
        { value: "22m", label: "AVG TURNAROUND" },
      ],
    },
    value: {
      kind: "quote",
      company: "Summit Roofing · Estimate",
      sentStamp: "Sent 2:31 PM",
      photoCount: 2,
      lineItems: [
        { label: "Tear-off & disposal", amount: "$1,150" },
        { label: "Architectural shingles (18 sq)", amount: "$4,320" },
        { label: "Underlayment & flashing", amount: "$980" },
      ],
      total: "$6,450",
      receipt: "Sent · $6,450 · 2:31 PM · same hour",
    },
  },
};
