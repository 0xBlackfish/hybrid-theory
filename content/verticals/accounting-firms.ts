import type { VerticalContent } from "./types";

export const accountingFirms: VerticalContent = {
  slug: "accounting-firms",
  label: "Accounting Firms",
  navLabel: "Accounting firms",
  accent: "#3FE0A8",
  metaTitle: "AI for accounting firms — chase the documents, not the clients",
  metaDescription:
    "The return that's done except for one K-1. The organizer half your clients never finished. Quiet AI help that chases the missing docs so your people don't — you keep every judgment call.",

  hero: {
    eyebrow: "AI for accounting & bookkeeping firms",
    headline: "The return that's done — except for one form.",
    lead: "It's ready to file except for a single 1099 you've asked for three times. So it sits, and so do forty others just like it. We quietly do the chasing — the organizer nudges, the missing-document follow-ups, the client who never opened the portal — so the work moves and your team keeps its evenings.",
  },

  stakes: {
    headline: "The work is done. The client isn't.",
    body: "By the last week of March the bottleneck isn't the return — it's the one form you're still waiting on to finish it. So a partner ends up personally emailing a client for the third time about a mortgage statement, at 9pm, while the deadline doesn't move and the extension list keeps growing. Chasing documents is the job that eats the season, and it's the part nobody went to school to do.",
    stats: [
      {
        value: "April 15",
        label:
          "The deadline never moves for the client still sitting on their K-1 — but the extension work all lands on you.",
      },
      {
        value: "6.6%",
        label:
          "Fewer U.S. accounting graduates again last year — the bench that does the chasing keeps getting thinner.",
        source: "AICPA & CIMA 2025 Trends Report",
      },
      {
        value: "3rd email",
        label:
          "By the time a partner is sending the third reminder for one mortgage statement, the chase has eaten time no invoice will ever bill.",
      },
    ],
  },

  opportunitiesHead: {
    headline: "A busy season that doesn't run on reminders.",
    sub: "Returns that flow instead of stall, organizers that come back finished, and advisory time you actually get to keep — the routine chasing handled so your people do the work only they can do.",
  },

  opportunities: [
    {
      icon: "docs",
      title: "Chase the last missing document, by name",
      body: "A return is done except for a 1099 that never came. Instead of a partner drafting the third reminder by hand, the missing item gets asked for — specifically, politely, as many times as it takes — and the answer lands where your team expects it. You see a complete file instead of an open loop.",
    },
    {
      icon: "intake",
      title: "Get the organizer back before it's a problem",
      body: "You sent organizers in January and half of them still aren't done. Clients get a warm nudge to finish the parts they skipped, with the exact questions they left blank — so the file that reaches your preparer is ready to work, not half-empty.",
    },
    {
      icon: "invoice",
      title: "Send the invoices the season buried",
      body: "The return went out in April and the bill never followed, because everyone was heads-down and it slipped. Completed work gets invoiced on time, and aging balances get a courteous reminder — so the receivables from your busiest months don't quietly drift into summer.",
    },
    {
      icon: "reception",
      title: "Answer the new-client call during crunch",
      body: "A referral calls the second week of March — exactly when nobody can pick up. Those inquiries get answered, the basics gathered, and a partner call put on the calendar, so the growth you'd happily take in a slower month doesn't go to voicemail.",
    },
    {
      icon: "reactivation",
      title: "Reopen the door for advisory, after the rush",
      body: "You have clients you see once a year for a return who'd gladly talk planning if anyone reached out. Once the season quiets, dormant clients get a genuine, personal check-in — so the advisory conversations you keep meaning to start actually get on the calendar.",
    },
  ],

  spotlight: {
    headline: "March 1. Forty-three returns, each stuck on one form.",
    intro:
      "It's the first of the month and forty-three returns are parked on a single missing document apiece — here's the whole book getting chased down at once, without a preparer picking up the phone.",
    name: "Busy season, unblocked",
    context: "Ledgerline CPA · 340 returns in progress",
    rail: [
      "Pull today's missing-doc list",
      "Ask each client, by name",
      "Docs land in the portal",
      "The book clears to file",
      "Partner sees it move",
    ],
    beats: [3200, 3600, 3000, 3400, 3200],
    cards: [
      {
        pos: "a",
        at: 0,
        title: "MISSING DOCS · MAR 1",
        kind: {
          type: "checklist",
          header: "43 returns waiting on one item each",
          items: [
            { label: "Alvarez, R. · K-1 · Cedar Ridge", tag: "in ✓", done: true },
            { label: "Nguyen, T. · 1098 mortgage", tag: "chased" },
            { label: "Brandt, D. · 1099-B", tag: "in ✓", done: true },
            { label: "Okafor, J. · organizer (pg 3)", tag: "waiting" },
            { label: "Sokolov, P. · 1099-INT", tag: "chased" },
          ],
          footer: "43 open at 8am · 34 cleared by noon",
        },
      },
      {
        pos: "b",
        at: 1,
        title: "PORTAL · K-1 CHASE",
        kind: {
          type: "sms",
          sms: {
            initials: "RA",
            name: "Rachel Alvarez",
            phone: "(651) 555-0132",
            badge: "Document chase",
            system: "**Return on hold** · waiting on 1 K-1",
            messages: [
              {
                from: "business",
                text: "Hi Rachel — you're all set except the **K-1 from Cedar Ridge Partners**. Can you forward it when it lands? No need to go hunting — just flag me if it's stuck.",
                time: "9:12 AM",
                note: "Sent by **Hybrid** · 2nd reminder, sent for you",
              },
              {
                from: "customer",
                text: "Oh good timing — just got it this morning. Forwarding now.",
                time: "9:26 AM",
              },
              {
                from: "business",
                text: "Perfect, got it. We'll finish the review and send it for e-signature this week.",
                time: "9:27 AM",
              },
            ],
          },
        },
      },
      {
        pos: "c",
        at: 3,
        title: "THE BOOK · MIDDAY",
        kind: {
          type: "scorecard",
          rows: [
            { label: "Returns waiting on a doc", value: "43 → 9" },
            { label: "Reminders sent for you", value: "51" },
            { label: "Docs back in the portal", value: "34" },
            { label: "Partner hours spent chasing", value: "0" },
          ],
          footer: "The book that was stuck is moving again.",
        },
      },
      {
        pos: "d",
        at: 4,
        title: "MORNING DIGEST",
        dark: true,
        kind: {
          type: "digest",
          digest: {
            title: "Good morning ☀️",
            body: "**34 returns** unblocked before lunch — every missing form asked for by name, no partner in the loop.",
            stats: [
              { value: "34", label: "DOCS IN" },
              { value: "9", label: "STILL OUT" },
              { value: "12", label: "READY TO FILE" },
            ],
          },
        },
      },
    ],
    receipt: "Cleared to file · 34 of 43 · zero partner hours",
  },

  faq: [
    {
      q: "This is client financial data. How do you keep it safe?",
      a: "We take that seriously and we don't overclaim. We work inside the systems you already trust, and we don't turn anything on until we've walked through how client data is handled together — what's touched, what isn't, and where it lives. If a workflow can't be done carefully, we don't ship it.",
    },
    {
      q: "Does it work with our tax and practice software?",
      a: "That's the first thing we check. We build around the tools firms actually run — Drake, Lacerte, UltraTax, ProConnect on the tax side, Karbon, Canopy, or TaxDome for practice management, and SafeSend for organizers, e-signature, and delivery. Reminders and status come from your real workflow, not a spreadsheet someone has to keep in sync.",
    },
    {
      q: "My admin already sends reminders. What's different?",
      a: "This isn't about replacing her — it's the volume and the persistence she can't get to in season. Forty-three clients each getting a personal nudge by name, the third and fourth follow-up nobody has time for, the organizer question left blank flagged specifically. She stops copy-pasting reminders and spends her hours on the calls that actually need a person.",
    },
    {
      q: "Will clients know they're not emailing me?",
      a: "The goal is a smooth experience, never a trick. Messages carry your firm's name and tone, and anything that needs judgment — a confused client, a real tax question, a sensitive situation — gets handed to you instead of forced through automation. The routine chasing gets handled; the relationship stays yours.",
    },
    {
      q: "It's already the busiest time of year. Is this one more thing to manage?",
      a: "It's meant to take work off your plate, not add a dashboard to babysit. The document chasing, organizer nudges, and follow-ups run quietly in the background, and your team steps in only where a person is actually needed. You keep every call about what gets filed, extended, or held.",
    },
  ],

  finalCta: {
    headline: "Find where the season actually gets stuck.",
    body: "Book your free 30-minute assessment. We'll find the one place your firm is quietly losing time — documents nobody's chasing, organizers left half-done, invoices the rush buried — and give you one specific fix to start with. Free, thirty minutes, no obligation.",
  },

  scenario: {
    chipLabel: "Accounting firm",
    sms: {
      initials: "SP",
      name: "Steve Porter",
      phone: "(612) 555-0149",
      badge: "Document chase",
      system: "**Return on hold** · waiting on 1 form",
      messages: [
        {
          from: "business",
          text: "Hi Steve — your return's ready to file except for one **1099-INT** from your bank. Can you upload it to the portal?",
          time: "10:15 AM",
          note: "Sent by **Hybrid** · 3rd reminder, sent for you",
        },
        {
          from: "customer",
          text: "Ugh, sorry — just found it. Uploading now",
          time: "10:41 AM",
        },
        {
          from: "business",
          text: "Got it, thank you! You're all set — we'll finish the review and send it for signature today.",
          time: "10:43 AM",
        },
      ],
    },
    digest: {
      title: "Good morning ☀️",
      body: "**12 returns** unblocked yesterday — every missing document chased down without a partner writing the email.",
      stats: [
        { value: "12", label: "DOCS IN" },
        { value: "0", label: "STALLED" },
        { value: "3", label: "FILED" },
      ],
    },
    value: {
      kind: "quote",
      company: "Ledgerline CPA · Invoice",
      sentStamp: "Sent 3:20 PM",
      lineItems: [
        { label: "Individual return (1040)", amount: "$850" },
        { label: "K-1 & schedules", amount: "$300" },
        { label: "Year-end advisory call", amount: "$250" },
      ],
      totalLabel: "Invoice total",
      total: "$1,400",
      receipt: "Sent · $1,400 · 3:20 PM · same day",
    },
  },
};
