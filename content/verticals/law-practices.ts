import type { VerticalContent } from "./types";

export const lawPractices: VerticalContent = {
  slug: "law-practices",
  label: "Law Practices",
  navLabel: "Law practices",
  accent: "#F5A623",
  metaTitle: "AI for small law firms — answer the intake call, book the consult",
  metaDescription:
    "The client in crisis calls three firms and retains the one that picked up. Quiet AI help answers, screens, and books consults — you keep every legal judgment.",

  hero: {
    eyebrow: "AI for small law firms",
    headline: "The client in crisis calls three firms.",
    lead: "Someone just got served, got hurt, or got the call from ICE — and they're dialing firm after firm until a human picks up. AI answers on the first ring, gathers the facts, runs an initial conflict check, and books the consult on your calendar. It never gives legal advice — you make every call that counts.",
  },

  stakes: {
    headline: "The one who answered gets retained.",
    body: "A prospective client with a real problem doesn't leave a voicemail and wait — they work down the list until someone picks up, and they hire that firm. Your paralegal is on another line, you're in a hearing, and the intake that would have been a good matter is now sitting in another lawyer's conference room. The lead was warm for about four minutes.",
    stats: [
      {
        value: "First",
        label:
          "The firm that answers a crisis call is usually the one that gets retained",
      },
      {
        value: "4 min",
        label:
          "Illustrative window a crisis caller stays on your firm before dialing the next name on the list",
      },
      {
        value: "Hours",
        label:
          "Illustrative paralegal time each week spent screening intakes and chasing documents that never get billed",
      },
    ],
  },

  opportunities: [
    {
      icon: "missed",
      title: "Every missed intake call gets a text back — right away",
      body: "You're in a deposition and the phone rings out. Before the caller dials the next firm on their search, they get a text: \"This is [Firm] — sorry we missed you. Can you tell us briefly what's going on?\" The matter stays a conversation with your office instead of a voicemail nobody returns.",
    },
    {
      icon: "reception",
      title: "The after-hours call gets a real answer",
      body: "A DUI arrest at 11pm, a spouse served with divorce papers on a Friday night — these don't wait for business hours. Instead of voicemail, AI picks up, takes down the basics, and books the first available consult, so the person in crisis knows your firm is on it before Monday.",
    },
    {
      icon: "intake",
      title: "Intake and conflict screening done before you sit down",
      body: "Every new caller means the same twenty questions, an initial conflict check against the names involved, and a form that has to get filled in. AI gathers the details, flags any potential conflict for your review, and hands your paralegal a clean intake — so nobody's re-keying the same facts three times.",
    },
    {
      icon: "booking",
      title: "No more phone tag to book a consultation",
      body: "It takes four calls to pin down a time that works for the client and for you. Instead, the prospective client picks a consult slot that fits your calendar and gets a confirmation and a reminder. Fewer no-shows, fewer holes in your week.",
    },
    {
      icon: "docs",
      title: "Documents that stall a matter for weeks get chased",
      body: "The case can't move until the client sends the tax returns, the police report, the signed retainer. That request sits unanswered while the file goes cold. AI sends the polite follow-up — and the next one — and collects what comes back, so matters stop stalling on a document nobody circled back on.",
    },
    {
      icon: "invoice",
      title: "The awkward invoice reminder goes out for you",
      body: "The work is done and the bill is aging, but chasing a client for money feels uncomfortable, so it waits. AI sends the courteous nudge on your schedule and the one after it, so your receivables don't quietly stretch to ninety days while you're heads-down on the next matter.",
    },
  ],

  demoFlow: "missed",
  demoIntro:
    "Here's the intake call your voicemail usually loses — answered, screened, and booked for a consult in the time it takes the caller to reach the next firm on the list.",

  faq: [
    {
      q: "Is having AI answer the phone the unauthorized practice of law?",
      a: "No. It schedules consultations and gathers facts — name, contact, what happened, the other parties involved — exactly what a trained intake coordinator does. It does not give legal advice, quote outcomes, or tell anyone what to do about their case. Anything that calls for legal judgment is routed straight to you.",
    },
    {
      q: "What about confidentiality and privilege? These are sensitive matters.",
      a: "We take that seriously and we don't overclaim. We work inside the systems your firm already trusts, scope carefully what information gets collected, and don't stand anything up until we've walked through how it's handled together. If a workflow can't be built to respect confidentiality, we don't ship it.",
    },
    {
      q: "How does the conflict check actually work? I can't afford a mistake there.",
      a: "AI runs an initial screen against the names in your existing records and flags anything that looks like a potential conflict — it does not clear conflicts on its own. The final conflict decision stays with a lawyer, every time. Think of it as the first pass that makes sure a possible conflict lands on your desk before the consult, not after.",
    },
    {
      q: "Will prospective clients know they're not talking to a person?",
      a: "The goal is a smooth experience, never a trick. Messages carry your firm's name and tone, and anything that needs a human — a distraught caller, a nuanced legal question, an unusual situation — gets handed to your team instead of forced through automation. Most callers just notice that, unlike the last two firms, yours answered.",
    },
    {
      q: "Does it work with our practice management software?",
      a: "That's the first thing we check. We build around Clio, MyCase, PracticePanther and the systems small firms actually run, so intakes, conflicts, and calendars come from your real records — not a separate spreadsheet someone has to keep in sync.",
    },
  ],

  finalCta: {
    headline: "Find the intakes you're losing.",
    body: "Book your free 30-minute assessment. We'll look at where matters are slipping — missed calls, slow consult booking, documents that stall a case, invoices that age out — and you'll leave with your single biggest bottleneck named and one specific fix. No pitch, no obligation.",
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
          text: "I'm sorry you're dealing with that — we handle family law and can help. I can book a **consult with an attorney tomorrow 9:00 AM**. Does that work?",
          time: "9:41 PM",
        },
        { from: "customer", text: "Yes, please. Thank you", time: "9:42 PM" },
        {
          from: "business",
          text: "You're booked ✓ Tomorrow 9:00 AM. We'll send what to bring tonight.",
          time: "9:42 PM",
        },
      ],
    },
    digest: {
      title: "Good morning ☀️",
      body: "**5 new intakes** captured overnight — every crisis call answered and screened before morning.",
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
