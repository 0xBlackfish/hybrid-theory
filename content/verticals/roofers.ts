import type { VerticalContent } from "./types";

export const roofers: VerticalContent = {
  slug: "roofers",
  label: "Roofers",
  navLabel: "Roofers",
  accent: "#F5A623",
  metaTitle: "AI for roofing companies — answer every storm call, quote same-hour",
  metaDescription:
    "After a hail event, the first roofer on the roof gets the job. AI texts every caller back, drafts quotes from photos, and chases the insurance supplements — you approve every number and read every deck.",

  hero: {
    eyebrow: "AI for roofing companies",
    headline: "Whoever gets on the roof first gets the roof.",
    lead: "A homeowner sends photos of a leak and a quiet helper reads the shot, pulls a rough square count, and hands you an itemized quote to check — same hour, not next Sunday. You still climb up and read the deck yourself. You just get to the homeowner before the other three trucks do.",
  },

  stakes: {
    headline: "The jobs you lost weren't underbid. They were out-answered.",
    body: "A homeowner staring at a water stain on the ceiling isn't shopping price — they're calling down the list until somebody picks up. By the time you're off the roof and working through yesterday's voicemails, half of them already signed with whoever called back first. And the estimate you did climb up and write? It didn't lose on price. It just never got the second follow-up, and quietly stopped existing.",
    stats: [
      {
        value: "7×",
        label:
          "more likely to qualify a lead when you answer within the hour instead of letting it sit",
        source: "Harvard Business Review, \"The Short Life of Online Sales Leads\"",
      },
      {
        value: "First",
        label:
          "after a storm the homeowner signs with the earliest inspection, not the lowest bid — the first roofer on the roof usually gets it",
      },
      {
        value: "$0",
        label:
          "what a quote earns once it slips off the follow-up pile — and most that never get a second nudge quietly do",
      },
    ],
  },

  opportunitiesHead: {
    headline: "Every storm is a full calendar waiting to happen.",
    sub: "Not a new CRM to learn or ten new tools — just the handful of moments that decide your season: the caller who needs answering, the quote that needs sending, the claim that needs chasing.",
  },

  opportunities: [
    {
      icon: "speed",
      title: "Storm morning, when forty calls hit at once",
      body: "The morning after a hail event the phone doesn't stop and you're already two roofs deep. A helper texts every caller back in the same minute, sorts the active leaks from the tire-kickers, and lines up inspections so nobody sits waiting for a callback that never comes.",
    },
    {
      icon: "quote",
      title: "Photo to draft quote before you leave the driveway",
      body: "A homeowner sends a shot of the damage. Instead of it sitting in your inbox until the weekend, the helper reads the photo, pulls a rough square count and likely materials, and hands you an itemized draft to check. A number that lands the same hour hits different than one that takes three days.",
    },
    {
      icon: "abandoned",
      title: "The quotes buried after a canvassing push",
      body: "Your crew knocked a whole subdivision, wrote twenty estimates, and half went cold on the pile. The helper works them on its own — a check-in at day three, another at day ten, in your voice — so the roofs you already did the legwork for don't just evaporate.",
    },
    {
      icon: "docs",
      title: "The supplement chase you're tired of running",
      body: "Adjuster short-paid the scope, the ridge and the drip edge got missed, and the same claim number's typed in six places. The helper gathers the photos and the docs, keeps each claim moving, and nudges the homeowner for what the carrier still needs — so you're on roofs, not on hold with the desk adjuster.",
    },
    {
      icon: "reviews",
      title: "The reviews that decide the whole street",
      body: "One hail event and the neighborhood watches which yard sign goes up first. After a clean install the helper asks the happy homeowner for a review at the right moment — so when the neighbor finally files a claim, your name is already the one they trust.",
    },
  ],

  faq: [
    {
      q: "My estimates need eyes on the deck. A computer can't price a real roof.",
      a: "Agreed — and it doesn't try to. The helper drafts a starting number from the photos and the square count and gathers everything before you climb up. Every line item, every price, every send is yours to approve or change. It does the typing and the chasing; you still walk the roof, feel for the soft decking, and make the call.",
    },
    {
      q: "I already run AccuLynx (or JobNimbus). Is this going to fight my CRM?",
      a: "No — it works around the tools you already use, including AccuLynx, JobNimbus, CompanyCam, and your EagleView reports. It's the layer that answers, texts, and follows up the moment a lead comes in; the job still lands in your CRM the way it does now. Nothing changes for your production team.",
    },
    {
      q: "Will homeowners know they're texting a bot?",
      a: "It sounds like your company, not a robot, and it hands off to you the second a real conversation starts. Most homeowners just notice they got a fast, straight answer after the storm — which, when three other roofers left them on read, is exactly why they call you back.",
    },
    {
      q: "Storm season is insurance work — supplements, Xactimate, adjusters. Can it actually help there?",
      a: "It won't write your Xactimate estimate or argue the supplement for you. What it does is keep the paperwork from being the bottleneck: it collects the photos and documents, keeps each claim in motion, and reminds the homeowner what the adjuster still needs. You handle the scope and the negotiation; it handles the follow-up you keep forgetting on job eleven.",
    },
    {
      q: "I've got a small crew and no time to set up software.",
      a: "That's the point of the free assessment — we find your single biggest bottleneck and one specific fix, and we build it around the phone number and tools you already have. Nothing new for your crew to learn. The only difference is the leads stop leaking while you're up on a roof.",
    },
  ],

  finalCta: {
    headline: "Find the leak before the next storm.",
    body: "Book your free 30-minute assessment. No pitch, no commitment — you'll leave with your single biggest bottleneck named and one specific fix you can picture running before the next hail event.",
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
          text: "Here are shots of the roof — got a leak over the back bedroom 📷 📷",
          time: "2:04 PM",
        },
        {
          from: "business",
          text: "Got them, thanks Mike. Looks like about **22 squares** and the flashing's near done. I'll have an itemized replacement quote over within the hour.",
          time: "2:05 PM",
          note: "Sent by **Hybrid** · reading the photos now",
        },
        {
          from: "business",
          text: "Here's your estimate — **$11,400** for a full tear-off and replace, good for 30 days. Paying out of pocket, or should we check if it's a claim?",
          time: "2:31 PM",
        },
        { from: "customer", text: "Out of pocket. That's fair — let's book it", time: "2:34 PM" },
      ],
    },
    digest: {
      title: "Good morning, Matt ☀️",
      body: "**$28,600** in quotes out same-day — every photo answered inside the hour.",
      stats: [
        { value: "5", label: "QUOTES SENT" },
        { value: "0", label: "WAITING" },
        { value: "31m", label: "AVG TURNAROUND" },
      ],
    },
    value: {
      kind: "quote",
      company: "Summit Roofing · Estimate",
      sentStamp: "Sent 2:31 PM",
      photoCount: 2,
      lineItems: [
        { label: "Tear-off & haul-off (22 sq)", amount: "$2,050" },
        { label: "Architectural shingles, installed (22 sq)", amount: "$6,400" },
        { label: "Underlayment, ice & water, drip edge", amount: "$1,850" },
        { label: "Pipe boots, step & counter flashing", amount: "$1,100" },
      ],
      total: "$11,400",
      receipt: "Sent · $11,400 · 2:31 PM · same hour",
    },
  },

  spotlight: {
    headline: "See a hail Tuesday become a booked Wednesday.",
    intro:
      "The morning after a storm, whoever gets on the roof first signs the job — here's your phone triaging forty callers while you're still on a ladder.",
    name: "Storm week, handled",
    context: "Summit Roofing · 43 calls before lunch",
    rail: [
      "Calls flood in",
      "Texted back in seconds",
      "Sorted by damage & claim",
      "Clustered onto one route",
      "The morning, booked",
    ],
    beats: [3000, 3200, 3400, 3400, 3200],
    cards: [
      {
        pos: "a",
        at: 0,
        title: "TEXT-BACK · STORM CALLER",
        kind: {
          type: "sms",
          sms: {
            initials: "DK",
            name: "Dana Kessler",
            phone: "(405) 555-0139",
            badge: "Storm caller",
            system: "**Missed call** · 9:12 AM",
            messages: [
              {
                from: "business",
                text: "Hi Dana — Summit Roofing, sorry we missed you! Calling about Tuesday's hail?",
                time: "9:12 AM",
                note: "Sent by **Hybrid** · 8 sec after the call",
              },
              {
                from: "customer",
                text: "Yes — the whole street's getting roofs looked at. Mine's about 12 years old",
                time: "9:13 AM",
              },
              {
                from: "business",
                text: "Worth a look then. Filing an insurance claim, or paying out of pocket?",
                time: "9:13 AM",
              },
              { from: "customer", text: "Insurance, probably", time: "9:14 AM" },
              {
                from: "business",
                text: "Got it. I can have someone up there **tomorrow 10:30** to document it for your adjuster — 4211 Cedar Ridge, right?",
                time: "9:14 AM",
              },
              { from: "customer", text: "That's the one 👍", time: "9:15 AM" },
            ],
          },
        },
      },
      {
        pos: "b",
        at: 1,
        title: "TRIAGE · 43 CALLS",
        kind: {
          type: "checklist",
          header: "This morning's callers",
          items: [
            { label: "Kessler · 12-yr roof · insurance", tag: "INSPECT", done: true },
            { label: "Alvarez · active leak, water inside", tag: "URGENT", done: true },
            { label: "Boone · door-knock flyer, no damage", tag: "NURTURE" },
            { label: "Nyquist · full replace, paying retail", tag: "INSPECT", done: true },
          ],
          footer: "Sorted by damage, roof age and claim — the hot ones surface first",
        },
      },
      {
        pos: "c",
        at: 2,
        title: "SCHEDULE · WED",
        kind: {
          type: "calendar",
          value: {
            kind: "calendar",
            dayOfWeek: "Wednesday",
            date: "Nov 6",
            addedLabel: "JUST ADDED",
            slots: [
              {
                time: "10:30",
                booking: {
                  title: "Inspection · Kessler",
                  sub: "Cedar Ridge · insurance claim",
                  receipt: "Booked · Wed 10:30 AM",
                },
              },
              {
                time: "11:00",
                booking: {
                  title: "Inspection · Nyquist",
                  sub: "Cedar Ridge · retail replace",
                  receipt: "Booked · Wed 11:00 AM",
                },
              },
              { time: "1:30" },
            ],
          },
        },
      },
      {
        pos: "d",
        at: 4,
        title: "STORM BOARD · NOON",
        dark: true,
        kind: {
          type: "digest",
          digest: {
            title: "Storm board · 12:00 PM",
            body: "**11 inspections** booked before lunch — every caller answered, none dumped to voicemail.",
            stats: [
              { value: "43", label: "CALLS IN" },
              { value: "0", label: "MISSED" },
              { value: "9s", label: "AVG REPLY" },
            ],
          },
        },
      },
    ],
    receipt: "Booked · 11 inspections · before noon",
  },
};
