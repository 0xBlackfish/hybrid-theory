import type { VerticalContent } from "./types";

export const contractors: VerticalContent = {
  slug: "contractors",
  label: "Contractors",
  navLabel: "Contractors",
  accent: "#B9FF35",
  metaTitle: "AI for general contractors & remodelers — get the estimate out same-day",
  metaDescription:
    "Stop writing proposals at 10pm and eating change orders you okayed on a handshake. A quiet helper drafts the estimate, captures the change order same-day, and chases the paperwork — you approve every number.",

  hero: {
    eyebrow: "AI for contractors & remodelers",
    headline: "The proposal you'd write at 10pm, drafted by dinner",
    lead:
      "You were on site all day, and the estimate is still in your head at the kitchen table. A quiet helper drafts it from your past bids — scope, allowances, your draw schedule — sends the follow-up you'd have forgotten, and chases the paperwork the sub never sent. You approve every number and keep every judgment call.",
  },

  stakes: {
    headline: "You don't lose the money on the jobsite. You lose it at the kitchen table.",
    body:
      "You're the best hand on the job and you still watch it leak after dark — the estimate that's a day late because you were framing till six, the change order you okayed on a handshake and never wrote up, the invoice aging while you float the next job's lumber. None of it feels like lost money until you close the books on the season. Then you see it.",
    stats: [
      {
        value: "First",
        label:
          "homeowners line up three or four bids — the first real number back usually makes the short list, and the slow one rarely does",
      },
      {
        value: "~6%",
        label:
          "the net margin a typical contractor runs on — so one change order you eat can wipe out the profit on the whole job",
        source: "CFMA 2024 Construction Financial Benchmarker",
      },
      {
        value: "$0",
        label:
          "what a change order collects when it lived on a handshake — no signature, no line item, and the goodwill's gone by final invoice",
      },
    ],
  },

  opportunitiesHead: {
    headline: "Run the back office off the truck.",
    sub: "Not a new platform to learn — just the after-hours work handled: the estimate drafted, the change order captured, the follow-up sent, the draw invoiced.",
  },

  opportunities: [
    {
      icon: "quote",
      title: "Get the estimate out while they still remember your name",
      body:
        "You walked the job, gave a ballpark, said you'd send the real number. Two days later it's still on a legal pad in the truck. The helper drafts it that afternoon from your scope and allowances, so it lands before the next contractor's van pulls up.",
    },
    {
      icon: "proposal",
      title: "Stop writing proposals after a full day on the tools",
      body:
        "The detailed proposal is the one you keep pushing to 10pm, then 11. The helper builds the first draft from your past bids — line items, allowances, your standard terms and draw schedule — so you're editing numbers, not staring at a blank page at the kitchen table.",
    },
    {
      icon: "bid",
      title: "Answer the bid with real money on it before it closes",
      body:
        "An invite to bid lands with a Friday deadline and a five-figure job attached, and you know a rushed number loses it. The helper pulls your relevant past work and pricing into a clean first response, so a job worth chasing doesn't get a two-line email because you ran out of night.",
    },
    {
      icon: "abandoned",
      title: "Follow up on the lead you meant to call back",
      body:
        "The homeowner who filled out your form is comparing three of you and picks whoever stayed in touch. The helper sends the check-in you'd have forgotten by Friday — warm, in your voice — so the ones you'd lose to silence stay in play.",
    },
    {
      icon: "docs",
      title: "Chase the paperwork that stalls the job",
      body:
        "The sub never sent the COI, the supplier's waiting on a signed proposal, the permit card's still in the truck. The helper does the polite chasing — the reminders, the missing docs, the lien waivers — so the schedule keeps moving without you playing collections all week.",
    },
    {
      icon: "invoice",
      title: "Bill the draw before you're floating the next job",
      body:
        "You already fronted the lumber and the fixtures, and the draw you earned two weeks back is still sitting there. The helper sends it the day the milestone hits, then the gentle nudge after — so you're building on this job's money, not carrying it into the next one.",
    },
  ],

  faq: [
    {
      q: "Every job I do is custom. A computer can't bid my work.",
      a: "It doesn't set your prices, and it never invents a number. It drafts from your own past bids, your line items, and your rate sheet, then hands it to you to check. You approve every figure and every scope line before it goes out — you're editing a smart first draft instead of writing from a blank page at 10pm.",
    },
    {
      q: "I already run Buildertrend (or JobTread). Is this one more thing to log into?",
      a: "No — it sits on top of what you already use instead of replacing it. If you live in Buildertrend, JobTread, or a Procore-style setup, it works there; if your numbers live in QuickBooks and a rate sheet, it works there. We build around your tools and your phone number, not the other way around.",
    },
    {
      q: "Won't a homeowner know they're dealing with a machine?",
      a: "It writes in your voice and hands off to you the moment a conversation needs a real person — a design question, a price negotiation, a tricky site. Most homeowners just want a fast, straight answer and a proposal that shows up when you said it would. That's what they get, instead of your voicemail.",
    },
    {
      q: "I'm a two-truck shop, no office manager. Is this overkill?",
      a: "Small shops feel the leak hardest. There's nobody catching the follow-ups while you're on a roof, so the bids and the change orders wait until you're off the clock and worn out. This is the back-office help you can't justify hiring full-time, working every hour you can't be at a desk.",
    },
    {
      q: "How does it know my pricing and my change-order rates?",
      a: "It learns from what you already have — past proposals, your rate sheet, the jobs you've quoted before. In the assessment we look at how you price today and where your numbers live, then set it up to draft the way you already work. It doesn't ask you to rebuild your business in some new system.",
    },
  ],

  finalCta: {
    headline: "Find the money you're leaving on the jobsite.",
    body:
      "Book your free 30-minute assessment. We'll look at where jobs slip — the slow estimate, the change order you ate, the draw aging while you float materials — and you'll leave with your single biggest bottleneck named and one specific fix. No pitch, no obligation.",
  },

  demoFlow: "quote",
  demoIntro:
    "Here's the estimate you'd normally send at 10pm — drafted from your scope and allowances, out the door the same afternoon, before the homeowner takes the next bid.",

  scenario: {
    chipLabel: "Remodeling company",
    sms: {
      initials: "RO",
      name: "Rachel Ortiz",
      phone: "(303) 555-0164",
      badge: "Same-day estimate",
      system: "**Walkthrough done** · Today 4:10 PM",
      messages: [
        {
          from: "customer",
          text: "Great meeting you — can you get me the number on the primary bath?",
          time: "4:10 PM",
        },
        {
          from: "business",
          text: "You bet, Rachel. Pulling your scope and my tile and fixture allowances now — full estimate to you within the hour, draw schedule included.",
          time: "4:13 PM",
          note: "Sent by **Hybrid** · drafting from your past bids",
        },
        {
          from: "business",
          text: "Estimate's in your inbox — **$28,500** for the primary bath, tile and fixture allowances spelled out, three-draw schedule. Want me to hold a start week?",
          time: "5:02 PM",
        },
        { from: "customer", text: "This is great — yes, let's lock a date", time: "5:09 PM" },
      ],
    },
    digest: {
      title: "Good morning, Matt ☀️",
      body: "**$52,300** in estimates out the door yesterday — none waiting on a late-night write-up.",
      stats: [
        { value: "4", label: "ESTIMATES SENT" },
        { value: "0", label: "WAITING" },
        { value: "41m", label: "AVG TURNAROUND" },
      ],
    },
    value: {
      kind: "quote",
      company: "Ortiz Bath · Estimate",
      sentStamp: "Sent 5:02 PM",
      photoCount: 3,
      lineItems: [
        { label: "Demo & haul-off", amount: "$2,600" },
        { label: "Rough plumbing & electrical", amount: "$4,900" },
        { label: "Tile & fixture allowance", amount: "$8,500" },
        { label: "Vanity, glass & finish carpentry", amount: "$7,200" },
        { label: "Labor & project management", amount: "$5,300" },
      ],
      total: "$28,500",
      receipt: "Sent · $28,500 · 5:02 PM · same day",
    },
  },

  spotlight: {
    headline: "The change order you'd have eaten, signed before the crew leaves.",
    intro:
      "The \"while you're here\" favor that quietly turns into unpaid work — heard on site, priced from your rate sheet, and signed the same morning, so the margin stays yours.",
    name: "Change order, captured",
    context: "Bishop Kitchen · day 4 of 9",
    rail: [
      "Verbal yes on site",
      "Priced from your rate sheet",
      "Sent to sign",
      "Signed before the crew left",
      "Logged to the job",
    ],
    beats: [3200, 3400, 3200, 3600, 2800],
    cards: [
      {
        pos: "a",
        at: 0,
        title: "ON SITE · DAY 4",
        kind: {
          type: "sms",
          sms: {
            initials: "DB",
            name: "Dana Bishop",
            phone: "(720) 555-0132",
            badge: "Change order",
            system: "**Crew on site** · Today 9:12 AM",
            messages: [
              {
                from: "customer",
                text: "While you've got the wall open — can we move that outlet and add a few can lights over the island?",
                time: "9:12 AM",
              },
              {
                from: "business",
                text: "Totally doable. That's added scope though, so I'll send a quick change order to sign before we cut in — keeps it clean for both of us.",
                time: "9:14 AM",
                note: "Sent by **Hybrid** · pricing from your rate sheet",
              },
              {
                from: "business",
                text: "Change order's on your phone — **$1,850** for the outlet plus 4 recessed lights, patch and paint included. Sign and we'll knock it out today.",
                time: "9:24 AM",
              },
              { from: "customer", text: "Just signed 👍", time: "9:41 AM" },
            ],
          },
        },
      },
      {
        pos: "b",
        at: 1,
        title: "CHANGE ORDER #3",
        kind: {
          type: "quote",
          value: {
            kind: "quote",
            company: "Bishop Kitchen · Change Order #3",
            sentStamp: "Sent 9:24 AM",
            lineItems: [
              { label: "Relocate island outlet + rough-in", amount: "$420" },
              { label: "Add 4 recessed lights (island)", amount: "$980" },
              { label: "Patch, texture & paint", amount: "$450" },
            ],
            totalLabel: "Change order total",
            total: "$1,850",
            receipt: "Sent for signature · 9:24 AM",
          },
        },
      },
      {
        pos: "c",
        at: 2,
        title: "SIGNED · 29 MIN",
        kind: {
          type: "timeline",
          rows: [
            { text: "Heard on site", when: "9:12a", done: true },
            { text: "Priced from your rate sheet", when: "9:20a", done: true },
            { text: "Sent for e-signature", when: "9:24a", done: true },
            { text: "Homeowner signed", when: "9:41a", done: true },
          ],
          receiptChip: "Signed in 29 min",
        },
      },
      {
        pos: "d",
        at: 4,
        title: "THIS WEEK",
        dark: true,
        kind: {
          type: "digest",
          digest: {
            title: "Good morning, Matt ☀️",
            body: "**$4,200** in change orders captured and signed this week — nothing left on a handshake.",
            stats: [
              { value: "3", label: "COs SIGNED" },
              { value: "0", label: "UNBILLED" },
              { value: "29m", label: "AVG TO SIGN" },
            ],
          },
        },
      },
    ],
    receipt: "Signed · $1,850 · same morning · margin kept",
  },
};
