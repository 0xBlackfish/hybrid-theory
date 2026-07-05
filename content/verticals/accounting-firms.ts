import type { VerticalContent } from "./types";

export const accountingFirms: VerticalContent = {
  slug: "accounting-firms",
  label: "Accounting Firms",
  navLabel: "Accounting firms",
  accent: "#3FE0A8",
  metaTitle: "AI for accounting firms — chase documents, not clients",
  metaDescription:
    "The return that sits three weeks waiting on one 1099. The organizer nobody finished. Quiet AI help that chases the missing docs so you don't have to — you keep every judgment call.",

  hero: {
    eyebrow: "AI for accounting & bookkeeping firms",
    headline: "The return that's stuck waiting on one form",
    lead: "It's ready to file except for a single 1099 you've asked for three times. So it sits, and so do forty others just like it. We quietly do the chasing — the organizer reminders, the missing-document follow-ups, the client who ghosted the portal — so the work moves and you keep your evenings.",
  },

  stakes: {
    headline: "The work is done. The client isn't.",
    body: "By March the bottleneck isn't the return — it's the one form you're still waiting on to finish it. A partner ends up personally emailing a client for the third time about a mortgage statement, while the deadline doesn't budge and the extensions pile up. The chasing is the job that eats the season, and it's the part nobody trained to do the actual accounting for.",
    stats: [
      {
        value: "3 weeks",
        label:
          "Illustrative time a finished return can sit idle waiting on one missing document from a client",
      },
      {
        value: "April 15",
        label:
          "The deadline doesn't move for the client who still hasn't sent their K-1 — but the extension work lands on you",
      },
      {
        value: "First reply",
        label:
          "The prospect calling around in March usually goes with the firm that answers before the next one does",
      },
    ],
  },

  opportunities: [
    {
      icon: "docs",
      title: "Chase the last missing document so you don't have to",
      body: "One return is ready except for a 1099 that never came. Instead of a partner drafting the third reminder by hand, the missing item gets asked for — by name, politely, as many times as it takes — and the answer lands where your team expects it. You see a complete file instead of an open loop.",
    },
    {
      icon: "intake",
      title: "Get the organizer back before it's a problem",
      body: "You sent the organizer in January and half of them still aren't done. Clients get a warm nudge to finish the parts they skipped, with the specific questions they left blank — so the file that reaches your preparer is ready to work, not half-empty.",
    },
    {
      icon: "invoice",
      title: "Send the invoices the season buried",
      body: "The return went out in April and the bill never followed, because everyone was heads-down and it slipped. Completed work gets invoiced on time, and the ones that go unpaid get a courteous reminder — so the receivables from your busiest months don't quietly age into May.",
    },
    {
      icon: "reception",
      title: "Answer the new-client call during crunch",
      body: "A referral calls in the second week of March — exactly when nobody can pick up. Those inquiries get answered, the basics gathered, and a call with a partner put on the calendar, so the growth you'd take in a slower month doesn't go to voicemail.",
    },
    {
      icon: "reactivation",
      title: "Reopen the door for advisory, after the rush",
      body: "You have clients you only see once a year for a return, who'd happily talk planning if anyone reached out. Once the season quiets, dormant clients get a genuine, personal check-in — so the advisory conversations you keep meaning to start actually get on the calendar.",
    },
  ],

  demoFlow: "docs",
  demoIntro:
    "Watch a return that's stuck on one missing form get chased down and closed out — without a partner writing the reminder.",

  faq: [
    {
      q: "This is client financial data. How do you keep it safe?",
      a: "We take that seriously and we don't overclaim. We work inside the systems you already trust, and we don't turn anything on until we've walked through how client data is handled together — what's touched, what isn't, and where it lives. If a workflow can't be done carefully, we don't ship it.",
    },
    {
      q: "Does it work with our tax and practice software?",
      a: "That's the first thing we check. We build around the tools firms actually run — Drake, Lacerte, UltraTax, ProConnect on the tax side, and Canopy, Karbon, or QuickBooks for practice management and the books — so reminders and status come from your real workflow, not a spreadsheet you have to keep in sync.",
    },
    {
      q: "Will clients know they're not emailing me?",
      a: "The goal is a smooth experience, never a trick. Messages carry your firm's name and tone, and anything that needs your judgment — a confused client, a real tax question, a sensitive situation — gets handed to you instead of forced through automation. The routine chasing gets handled; the professional relationship stays yours.",
    },
    {
      q: "It's already the busiest time of year. Is this one more thing to manage?",
      a: "It's meant to take work off your plate, not add a dashboard to babysit. The document chasing, organizer nudges, and follow-ups run quietly in the background, and your team steps in only where a person is actually needed. You keep every call about what gets filed, extended, or held.",
    },
    {
      q: "What actually happens in the free assessment?",
      a: "Thirty minutes, no pitch deck. We look at how documents come in, where returns get stuck, and how the phone gets answered during season — and you leave knowing your single biggest bottleneck and one specific fix, whether or not you ever work with us.",
    },
  ],

  finalCta: {
    headline: "Find where the season actually gets stuck",
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
      title: "Good morning, Matt ☀️",
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
