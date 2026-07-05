import type { VerticalContent } from "./types";

export const landscapers: VerticalContent = {
  slug: "landscapers",
  label: "Landscapers",
  navLabel: "Landscapers",
  accent: "#B9FF35",
  metaTitle: "AI for landscaping companies — answer every lead, lock every renewal",
  metaDescription:
    "The calls come in while your crews are on the route. A quiet helper answers every spring lead, sends the estimate, and renews the book before the competition mails theirs.",

  hero: {
    eyebrow: "AI for landscaping companies",
    headline: "Every spring lead answered while the crews are out",
    lead:
      "April hits and the phone doesn't stop — but you're on a mower, not at a desk. A quiet helper picks up every new inquiry, texts back in seconds, and gets the estimate moving before the homeowner calls the next crew on their list. You still walk the property and set the price.",
  },

  stakes: {
    headline: "You lose the most work in the weeks you're busiest.",
    body:
      "By the time the trailers are loaded and the first route's rolling, the phone already has three voicemails you won't hear until dark. Estimates promised at the curb slip by Friday, and last year's accounts quietly re-sign with whoever mailed them first. None of it feels like a lost job — until the route comes out thin in May and you're filling it with one-offs.",
    stats: [
      {
        value: "First",
        label:
          "in spring a homeowner calls three companies and goes with whoever texts back first — the walk-through is usually won before you've quoted a thing",
      },
      {
        value: "7×",
        label:
          "more likely to reach the homeowner when you follow up within the hour instead of letting the lead sit till dark",
        source: "Harvard Business Review",
      },
      {
        value: "1 in 10",
        label:
          "maintenance accounts don't renew each season, and most walk over silence — a missed callback, no reminder — not the quality of the mowing",
        source: "Lawn & Landscape (industry retention benchmark ~90%)",
      },
    ],
  },

  opportunitiesHead: {
    headline: "Tight routes, a full season, the good accounts locked.",
    sub: "Not another app to babysit — just the handful of moments between the truck and the desk, each one handled so the route stays full and last year's clients stay yours.",
  },

  opportunities: [
    {
      icon: "speed",
      title: "Answer the spring rush from the seat of the truck",
      body:
        "A homeowner fills out your form at 9am while your crew's three yards deep on the route. They get a real reply in seconds — not a callback tonight, when they've already booked the next company on their list.",
    },
    {
      icon: "quote",
      title: "The curbside estimate that actually goes out",
      body:
        "You walked the yard, gave a number, said you'd email it over. By the time the day ends it's slipped your mind. The helper drafts and sends it that afternoon with your price, so it lands before the homeowner cools off — and before the other bid shows up.",
    },
    {
      icon: "reorder",
      title: "Renew the maintenance book before it lapses",
      body:
        "Last year's mow-and-maintain accounts don't cancel — they just don't renew, and you don't notice until the route's thin in May. The helper reaches out ahead of the season so the yes happens before someone else asks.",
    },
    {
      icon: "winback",
      title: "Bring back the account that ghosted after fall",
      body:
        "A weekly client goes quiet after the fall cleanup and never books for spring. A warm, well-timed check-in brings a lot of them back onto the route — and nobody had to remember to make the call.",
    },
    {
      icon: "invoice",
      title: "Bill it before the crew's off the property",
      body:
        "The crew wraps, loads up, and rolls to the next stop — and the invoice waits a week, sometimes three. The helper sends it the day the work's done, so you're collecting on this month's cash, not next quarter's.",
    },
  ],

  spotlight: {
    headline: "Renew the whole book before the mailers land.",
    intro:
      "Every February your maintenance accounts come up for renewal — and so does everyone else's postcard. Here's the book re-signed and upsold before the competition licks a stamp.",
    name: "Renewal season, locked",
    context: "GreenScape · 214 accounts up in February",
    rail: ["Pull the book", "Draft each renewal", "Flag the enhancements", "Send & chase", "Season locked"],
    beats: [3000, 3400, 3200, 3600, 3800],
    cards: [
      {
        pos: "a",
        at: 0,
        title: "THE BOOK · FEBRUARY",
        kind: {
          type: "checklist",
          header: "214 maintenance accounts up",
          items: [
            { label: "Pulled from last year's contracts", tag: "214", done: true },
            { label: "Renewals drafted at prior terms", tag: "214", done: true },
            { label: "Enhancements flagged in crew route notes", tag: "41", done: true },
            { label: "Queued to send before the postcards", tag: "go", done: false },
          ],
          footer: "Nobody had to open a spreadsheet.",
        },
      },
      {
        pos: "c",
        at: 1,
        title: "RENEWAL · 4512 LAUREL OAK",
        kind: {
          type: "quote",
          value: {
            kind: "quote",
            company: "GreenScape · Renewal",
            sentStamp: "Sent 8:12 AM",
            lineItems: [
              { label: "Weekly mow & maintain (season)", amount: "$3,120" },
              { label: "Spring cleanup & bed edging", amount: "$680" },
              { label: "Core aeration + overseed (crew flagged thin turf)", amount: "$420" },
            ],
            total: "$4,220",
            receipt: "Renewal sent · $4,220 · +$420 enhancement",
          },
        },
      },
      {
        pos: "b",
        at: 3,
        title: "RENEWAL · ADD-ON",
        kind: {
          type: "sms",
          sms: {
            initials: "DP",
            name: "Dana Powell",
            phone: "(919) 555-0174",
            badge: "Renewal + add-on",
            system: "**Renewal offer** · Feb 3, 8:12 AM",
            messages: [
              {
                from: "business",
                text: "Morning Dana — getting your weekly service set for the season, same crew, same day. One thing: the crew noted the back lawn's thinning out. Want me to add a spring aeration + overseed?",
                time: "8:12 AM",
                note: "Sent by **Hybrid** · renewals, before the rush",
              },
              {
                from: "customer",
                text: "Oh, good call — it has looked rough. Yes, add that. Same as last year otherwise?",
                time: "8:31 AM",
              },
              {
                from: "business",
                text: "Exactly the same, plus the aeration. Sending it over now — you're locked for the season.",
                time: "8:33 AM",
              },
            ],
          },
        },
      },
      {
        pos: "d",
        at: 4,
        title: "Renewal season — locked ✔",
        dark: true,
        kind: {
          type: "digest",
          digest: {
            title: "Renewal season — locked ✔",
            body: "**198 of 214** renewed before March, with **$41,300** in enhancements added on the way through.",
            stats: [
              { value: "198", label: "RENEWED" },
              { value: "$41.3k", label: "ADD-ONS" },
              { value: "16", label: "STILL CHASING" },
            ],
          },
        },
      },
    ],
    receipt: "Renewed · 198 of 214 · +$41.3k in add-ons · before March",
  },

  faq: [
    {
      q: "I already run everything through Jobber. Is this going to replace it?",
      a: "No — it sits on top of what you've got. Whether you're on Jobber, Aspire, LMN, or Yardbook, it works off your existing setup and phone number and hands the booked job or signed renewal back into your system. Your crews and your office don't learn anything new; the leaks just stop.",
    },
    {
      q: "I price every job by walking the property. Does this quote for me?",
      a: "It never sets your prices. It captures the lead, asks the homeowner the right questions, and gets your estimate out the door fast once you've given the number. The walk-through, the scope, the price — every judgment call stays with you.",
    },
    {
      q: "My work dries up in winter. What does this even do December to February?",
      a: "Winter is exactly when it earns its keep. The quiet months are renewal season — it re-signs last year's maintenance book and brings back the accounts that drifted off after fall, so your routes come out full in April instead of thin. Next season gets built while the trucks are parked.",
    },
    {
      q: "My office manager already handles the phones and the estimates. Do I need this?",
      a: "It's not there to replace her — it's there for the calls she can't get to when it's April and every line's ringing at once. It catches the after-hours leads and the follow-ups that slip, then hands her a clean list to work. She keeps the judgment; she loses the part she hates, which is chasing.",
    },
    {
      q: "Won't a homeowner know they're texting a machine?",
      a: "It replies in your company's voice and hands off to a real person the moment a conversation needs one — a tricky property, an odd request, a price question. Most homeowners just want a fast, straight answer in spring, and they get one instead of your voicemail.",
    },
  ],

  finalCta: {
    headline: "Find the leak before next spring's rush.",
    body:
      "Book a free 30-minute assessment. We'll walk through where jobs and renewals slip during your busy season, and you'll leave with your single biggest bottleneck named and one specific fix — no pitch, no obligation.",
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
      title: "Good morning ☀️",
      body: "**$9,400** in spring work quoted while the crews were on the route — every new lead answered same day.",
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
