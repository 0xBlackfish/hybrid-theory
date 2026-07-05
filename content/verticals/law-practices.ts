import type { VerticalContent } from "./types";

export const lawPractices: VerticalContent = {
  slug: "law-practices",
  label: "Law Practices",
  navLabel: "Law practices",
  accent: "#F5A623",
  metaTitle: "AI for small law firms — answer the intake call, book the consult",
  metaDescription:
    "Most people call more than one firm — and hire the one that answered. Quiet AI help picks up, screens, runs a conflict check, and books the consult. You keep every legal judgment.",

  hero: {
    eyebrow: "AI for small law firms",
    headline: "The client in crisis calls three firms.",
    lead: "Someone just got served, got hurt, or got a call from ICE — and they're dialing firm after firm until a person picks up. Quiet AI help answers on the first ring, gathers the facts, runs an initial conflict screen, and books the consult on your calendar. It schedules and takes down what happened — it never gives legal advice, and every call that needs judgment goes to you.",
  },

  stakes: {
    headline: "The one who answered gets retained.",
    body: "A prospective client with a real problem doesn't leave a voicemail and wait — they work down the search results until a person picks up, and they tend to hire that firm. You're in a hearing, your paralegal's on the other line, and the matter that should have been yours is signing with someone else by the afternoon. Almost everyone calls more than one firm. The difference is who answered.",
    stats: [
      {
        value: "40%",
        label:
          "Only four in ten firms answer a prospective client's call — down from 56% five years earlier",
        source: "Clio Legal Trends Report, 2024",
      },
      {
        value: "1 in 5",
        label:
          "Of the calls firms miss, only about one in five ever gets a call back",
        source: "Clio Legal Trends Report, 2024",
      },
      {
        value: "11%",
        label:
          "Share of legal consumers who hire the first firm they contact — the rest keep working the list",
        source: "Martindale-Avvo",
      },
    ],
  },

  opportunitiesHead: {
    headline: "Consults that convert. Matters that move.",
    sub: "Not a new case-management system or ten more logins — just the handful of moments between a ringing phone and a signed engagement letter, each one handled while it's still warm.",
  },

  opportunities: [
    {
      icon: "missed",
      title: "Every missed intake call gets a text back — right away",
      body: "You're in a deposition and the phone rings out. Before the caller dials the next name on the list, they get a text: \"This is Castillo Law — sorry we missed you. Can you tell us briefly what's going on?\" The matter stays a conversation with your office instead of a voicemail nobody returns.",
    },
    {
      icon: "reception",
      title: "The after-hours call gets a real answer",
      body: "A DUI arrest at 11pm, a spouse served with papers on a Friday night — these don't wait for business hours. Instead of voicemail, it picks up, takes down the basics, and books the first open consult, so the person in crisis knows your firm is on it before Monday.",
    },
    {
      icon: "intake",
      title: "Intake and a conflict screen done before you sit down",
      body: "Every new caller means the same twenty questions, a check against the names involved, and a form somebody has to fill in. It gathers the details, flags any potential conflict for your review, and hands your paralegal a clean intake — so nobody's re-keying the same facts three times.",
    },
    {
      icon: "noshow",
      title: "Fewer consults that quietly no-show",
      body: "A booked consult that doesn't show is an hour of your day you can't rebill. Confirmations and a well-timed reminder go out ahead of time, the ones who need to reschedule do it before the slot's wasted, and your calendar reflects who's actually coming in.",
    },
    {
      icon: "docs",
      title: "Documents that stall a matter for weeks get chased",
      body: "The case can't move until the client sends the tax returns, the police report, the signed disclosures. That request sits unanswered while the file goes cold. It sends the polite follow-up — and the next one — and collects what comes back, so matters stop stalling on a document nobody circled back on.",
    },
    {
      icon: "invoice",
      title: "The awkward invoice reminder goes out for you",
      body: "The work is done and the bill is aging, but chasing a client for money feels uncomfortable, so it waits. It sends the courteous nudge on your schedule and the one after it, so your receivables don't quietly stretch to ninety days while you're heads-down on the next matter.",
    },
  ],

  spotlight: {
    headline: "The consult went great. Now close it before they cool.",
    intro:
      "The hardest gap in a small firm isn't the consult — it's the three days between \"yes, I want to hire you\" and a signed engagement letter, where good clients quietly drift to whoever handed them paperwork on the spot. Here's that gap, closed the same afternoon.",
    name: "Consult to client, same afternoon",
    context: "Castillo Law · DUI matter",
    rail: [
      "Consult wraps — client's a yes",
      "Conflicts cleared, matter opened",
      "Engagement letter e-signed",
      "Retainer funded to trust",
      "Signed client by end of day",
    ],
    beats: [3200, 3600, 3000, 3400, 3800],
    cards: [
      {
        pos: "a",
        at: 0,
        title: "AFTER CONSULT · WEBB, M.",
        kind: {
          type: "sms",
          sms: {
            initials: "MW",
            name: "Marcus Webb",
            phone: "(210) 555-0162",
            badge: "After consult",
            system: "**Consult wrapped** · 3:41 PM · wants to move forward",
            messages: [
              {
                from: "business",
                text: "Thanks for coming in, Marcus. Ms. Castillo has your engagement letter ready — I'll send it here to e-sign, with the retainer link right behind it.",
                time: "3:44 PM",
                note: "Sent by **Hybrid** · right after the consult",
              },
              {
                from: "customer",
                text: "Okay. I just want this handled before my court date honestly",
                time: "3:46 PM",
              },
              {
                from: "business",
                text: "Understood. Letter's the first link, retainer's the second — once both are in, you're officially represented and the team gets to work.",
                time: "3:46 PM",
              },
              { from: "customer", text: "Signing now. Thank you", time: "3:52 PM" },
              {
                from: "business",
                text: "You're all set ✓ Ms. Castillo will reach out about next steps herself.",
                time: "3:58 PM",
              },
            ],
          },
        },
      },
      {
        pos: "b",
        at: 1,
        title: "NEW MATTER · WEBB — DUI",
        kind: {
          type: "checklist",
          header: "Opening the matter",
          items: [
            { label: "Conflict check — cleared by Ms. Castillo", tag: "OK", done: true },
            { label: "Engagement letter — sent to e-sign", tag: "SIGNED", done: true },
            { label: "Retainer — $3,500 to trust (IOLTA)", tag: "FUNDED", done: true },
            { label: "Matter opened in Clio", tag: "OPEN", done: true },
          ],
          footer: "You approved the letter and set the fee. Hybrid just ran the errands.",
        },
      },
      {
        pos: "c",
        at: 3,
        title: "ENGAGEMENT · SIGNED & FUNDED",
        kind: {
          type: "quote",
          value: {
            kind: "quote",
            company: "Castillo Law · Engagement",
            sentStamp: "Signed 3:52 PM",
            lineItems: [
              { label: "Representation · DUI defense", amount: "e-signed" },
              { label: "Retainer to trust (IOLTA)", amount: "$3,500" },
              { label: "Hourly rate (set by attorney)", amount: "$300/hr" },
            ],
            totalLabel: "Retainer to open",
            total: "$3,500",
            receipt: "e-signed + funded · $3,500 · 3:58 PM",
          },
        },
      },
      {
        pos: "d",
        at: 4,
        title: "TODAY'S CLOSES",
        dark: true,
        kind: {
          type: "digest",
          digest: {
            title: "Signed today ☑",
            body: "**3 consults, 3 signed** — engagement letters out and retainers funded before anyone left the parking lot.",
            stats: [
              { value: "3", label: "SIGNED TODAY" },
              { value: "$11k", label: "TO TRUST" },
              { value: "0", label: "STILL WAITING" },
            ],
          },
        },
      },
    ],
    receipt: "Signed client · $3,500 to trust · same day",
  },

  faq: [
    {
      q: "Is having AI answer the phone the unauthorized practice of law?",
      a: "No. It schedules consultations and gathers facts — name, contact, what happened, who else is involved — exactly what a trained intake coordinator does. It doesn't give legal advice, predict an outcome, or tell anyone what to do about their case. Anything that calls for legal judgment is routed straight to you.",
    },
    {
      q: "What about confidentiality? These are sensitive matters.",
      a: "We take it seriously and we don't overclaim. Everything a prospective client tells us is treated as confidential from the first message — the duty you owe them starts before they're a client, and we build to respect that. We work inside the systems your firm already trusts, scope carefully what gets collected, and don't stand anything up until we've walked through how it's handled together. If a workflow can't be built to keep that duty, we don't ship it.",
    },
    {
      q: "How does the conflict check actually work? I can't afford a mistake there.",
      a: "It runs an initial screen against the names in your existing records and flags anything that looks like a potential conflict — it does not clear conflicts on its own. The final call stays with a lawyer, every time. Think of it as the first pass that makes sure a possible conflict lands on your desk before the consult, not after.",
    },
    {
      q: "My paralegal already handles intake. Why would I need this?",
      a: "Your paralegal is good at the part that needs a person — reading a caller, spotting a messy fact pattern, knowing when something's off. What she can't do is answer the 11pm call, send the fifth document reminder, or key the same intake into Clio three times. This takes the after-hours and the repetitive work off her desk and hands her a clean, screened intake to run with. She stays in charge; she just stops doing the parts that don't need her.",
    },
    {
      q: "Does it work with our practice management software?",
      a: "That's the first thing we check. We build around Clio, MyCase, Lawmatics, Smokeball and PracticePanther — the systems small firms actually run — so intakes, conflicts, and calendars come from your real records, not a separate spreadsheet someone has to keep in sync.",
    },
  ],

  finalCta: {
    headline: "Find the matters slipping through.",
    body: "Book your free 30-minute assessment. We'll look at where matters are getting lost — missed calls, slow consult booking, documents that stall a case, engagement letters that never come back signed — and you'll leave with your single biggest bottleneck named and one specific fix. No pitch, no obligation.",
  },

  scenario: {
    chipLabel: "Law firm",
    sms: {
      initials: "DR",
      name: "Dana Reyes",
      phone: "(210) 555-0173",
      badge: "After-hours",
      system: "**Missed call** · Today 9:38 PM",
      messages: [
        {
          from: "business",
          text: "This is Castillo Law — sorry we missed you. Can you tell us briefly what's going on?",
          time: "9:38 PM",
          note: "Sent by **Hybrid** · 7 sec after the call",
        },
        {
          from: "customer",
          text: "I was just served with divorce papers and I don't know what to do",
          time: "9:40 PM",
        },
        {
          from: "business",
          text: "I'm sorry — that's a hard thing to get out of nowhere. We do handle family law. I can hold a **consult with an attorney tomorrow 9:00 AM** — want me to book it?",
          time: "9:41 PM",
        },
        { from: "customer", text: "Yes, please. Thank you", time: "9:42 PM" },
        {
          from: "business",
          text: "You're booked ✓ Tomorrow 9:00 AM. We'll text what to bring tonight.",
          time: "9:42 PM",
        },
      ],
    },
    digest: {
      title: "Good morning ☀️",
      body: "**5 new intakes** captured overnight — every after-hours call answered and screened before you're in the office.",
      stats: [
        { value: "5", label: "CONSULTS BOOKED" },
        { value: "0", label: "MISSED" },
        { value: "7s", label: "AVG REPLY" },
      ],
    },
    value: {
      kind: "calendar",
      dayOfWeek: "Wednesday",
      date: "Nov 6",
      addedLabel: "JUST ADDED",
      slots: [
        { time: "8:30" },
        {
          time: "9:00",
          booking: {
            title: "Divorce consult · Dana R.",
            sub: "intake screened by Hybrid at 9:42 PM",
            receipt: "Booked · Consult · Wed 9:00 AM",
          },
        },
        { time: "11:00" },
      ],
    },
  },
};
