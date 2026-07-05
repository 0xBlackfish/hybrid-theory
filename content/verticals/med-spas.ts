import type { VerticalContent } from "./types";

export const medSpas: VerticalContent = {
  slug: "med-spas",
  label: "Med Spas",
  navLabel: "Med spas",
  accent: "#FF3DA5",
  metaTitle: "AI for med spas — answer the DMs, keep the calendar full",
  metaDescription:
    "Reply to the 11pm Instagram DM, backfill the consult no-show, and get every tox client back on the books at 90 days. Quiet help for your front desk — you keep every clinical call.",

  hero: {
    eyebrow: "AI for med spas",
    headline: "The 11pm DM shouldn't sit until morning",
    lead: "Someone finds you on Instagram, asks about lip filler at eleven at night, and by the time the desk sees it she's booked down the street. Hybrid answers the moment it lands, backfills the no-shows on your injector's calendar, and gets clients back in when they're due — so the people who want you actually make it to the chair.",
  },

  stakes: {
    headline: "She's not just messaging you. She's messaging three of you.",
    body: "Your front door is the DMs now, and they land at eleven at night and all weekend — while she's texting the two spas down the road at the same time. A consult that no-shows is an hour of injector time you can't sell twice. And the client who loved her results in spring is smooth again by summer, drifting toward whoever reminds her first.",
    stats: [
      {
        value: "63%",
        label:
          "of prospective clients compare two to five med spas before they choose — the fast, human reply is often what wins her",
        source: "Boulevard, 2025 Aesthetics Consumer Survey",
      },
      {
        value: "3–4 months",
        label:
          "how long a tox result lasts before a client is due to rebook — a cadence nobody at the desk is really tracking",
        source: "American Society of Plastic Surgeons",
      },
      {
        value: "$400+",
        label:
          "illustrative revenue on the hour of injector time a consult no-show leaves empty — a slot you can't resell",
      },
    ],
  },

  opportunitiesHead: {
    headline: "A calendar that fills itself — and regulars who keep coming back.",
    sub: "The DMs answered, the no-shows backfilled, the tox clients reminded on schedule — the handful of moments that keep your injectors booked and your regulars loyal.",
  },

  opportunities: [
    {
      icon: "dm",
      title: "Answer the DM before she books somewhere else",
      body: "The questions come in on Instagram at night — how much for lip filler, do you do microneedling, are you booking this week. Those messages get a fast, on-brand reply and a real path to book, instead of sitting unread until the desk logs in and the moment's gone.",
    },
    {
      icon: "noshow",
      title: "Backfill the consult before the chair goes cold",
      body: "A new-client consult no-shows and your injector's 2pm just evaporates — pure lost time you already staffed for. The open slot gets quietly offered to clients waiting on an earlier date, and a confirmation nudge goes out ahead so fewer of them vanish in the first place.",
    },
    {
      icon: "reorder",
      title: "Get every tox client back at 90 days",
      body: "The woman who came in for Botox in March is smooth again by June, forgetting all about it — and drifting toward whichever spa texts her first. When she's coming due, a warm, personal note goes out to rebook, so your calendar stays full without your team working a list.",
    },
    {
      icon: "upsell",
      title: "Catch the membership at checkout, not after",
      body: "She just paid full price for a single treatment and walked out — when the membership or the package would have brought her back three more times. At the right moment she hears about the option that fits what she came in for, in your voice, so it feels like a favor and not a pitch.",
    },
    {
      icon: "reviews",
      title: "Turn a great result into a five-star page",
      body: "A new client choosing where to get her face done reads every review first — that page is your reputation. Clients who just left glowing get a simple, well-timed ask to say so, so the spa across town isn't the only one with a wall of five stars.",
    },
  ],

  spotlight: {
    headline: "Every tox client, back at 90 days.",
    intro:
      "A tox result fades on a clock — so Hybrid watches the calendar and sends the warm, in-your-voice nudge that gets her rebooked before she drifts down the street.",
    name: "The 90-day tap",
    context: "Rebooking on autopilot · no list to work",
    rail: [
      "Scan who's coming due",
      "Reach out in your voice",
      "She books the touch-up",
      "Slot refilled on the calendar",
      "Logged for the morning",
    ],
    beats: [3200, 3600, 3000, 3200, 3400],
    cards: [
      {
        pos: "a",
        at: 0,
        title: "TOX · COMING DUE",
        kind: {
          type: "checklist",
          header: "This week",
          items: [
            { label: "Renee T. · Botox", tag: "Day 91", done: true },
            { label: "Jordan M. · Botox", tag: "Day 88" },
            { label: "Priya S. · Dysport", tag: "Day 94" },
          ],
          footer: "3 clients due this week — watched automatically",
        },
      },
      {
        pos: "b",
        at: 1,
        title: "TEXT · RENEE T.",
        kind: {
          type: "sms",
          sms: {
            initials: "RT",
            name: "Renee T.",
            phone: "(512) 555-0139",
            badge: "90-day rebooking",
            system: "**Rebooking reminder** · Tue 10:12 AM",
            messages: [
              {
                from: "business",
                text: "Hi Renee! It's been about three months since your last Botox with Dr. Lang — right around when most clients come in for a touch-up. Want me to hold a spot this week? 💛",
                time: "10:12 AM",
                note: "Sent by **Hybrid** · 90-day cadence",
              },
              {
                from: "customer",
                text: "yes please! anything thursday?",
                time: "10:26 AM",
              },
              {
                from: "business",
                text: "Thursday **4:30** with Dr. Lang — booked you in ✓ I'll send a reminder the day before.",
                time: "10:27 AM",
              },
            ],
          },
        },
      },
      {
        pos: "c",
        at: 3,
        title: "CALENDAR · THURSDAY",
        kind: {
          type: "calendar",
          value: {
            kind: "calendar",
            dayOfWeek: "Thursday",
            date: "Jul 9",
            addedLabel: "REFILLED",
            slots: [
              { time: "3:30" },
              {
                time: "4:30",
                booking: {
                  title: "Botox · Renee T.",
                  sub: "rebooked by Hybrid — 90 days since her last visit",
                  receipt: "Rebooked · $540 · Thu 4:30 PM",
                },
              },
              { time: "5:30" },
            ],
          },
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
            title: "Rebookings this week",
            body: "**$3,780** in tox rebooked from 90-day reminders — regulars who'd have quietly drifted, back on the calendar.",
            stats: [
              { value: "7", label: "REBOOKED" },
              { value: "0", label: "STAFF CALLS" },
              { value: "11", label: "DUE NEXT WK" },
            ],
          },
        },
      },
    ],
    receipt: "Rebooked · $540 · zero staff calls",
  },

  faq: [
    {
      q: "Our DMs and texts have a specific voice. Will it sound like our front desk?",
      a: "That's the point — it should sound like the person your regulars already message with, not a bot. We tune the replies to your tone, your treatment names, and your booking policies, and we tune them with you before anything goes live. Anything off-script or clinical gets handed to your team instead of guessed at.",
    },
    {
      q: "How is client information handled? We're careful about privacy.",
      a: "We take that seriously and we don't overclaim. We work inside the systems you already trust, and we walk through exactly how client details are handled before anything is turned on. If a workflow can't be done carefully, we don't ship it.",
    },
    {
      q: "Where does the medical judgment stop and the automation start?",
      a: "The automation handles front-desk work — answering the DM, offering an open slot, sending the 90-day rebooking note. It never gives medical advice, recommends a treatment, or clears anyone for a procedure. Anything that touches a clinical decision goes straight to your injector or provider, every time.",
    },
    {
      q: "Does it work with our booking software?",
      a: "Yes, and it's the first thing we check. We build around what med spas actually run — Boulevard, Vagaro, Aesthetic Record, Square — so open slots and rebooking reminders come from your real calendar, not a separate list your team has to keep in sync.",
    },
    {
      q: "What actually happens in the free assessment?",
      a: "Thirty minutes, no pitch deck. We look at how inquiries reach you, how your injector's calendar fills, and where clients slip between visits — and you leave knowing your single biggest bottleneck and one specific fix, whether or not you ever work with us.",
    },
  ],

  finalCta: {
    headline: "See where the clients slip away",
    body: "Book your free 30-minute assessment. We'll find the one place your spa is quietly losing bookings — DMs going unanswered overnight, no-shows nobody backfills, tox clients who never got reminded to come back — and give you one specific fix to start with. Free, thirty minutes, no obligation.",
  },

  scenario: {
    chipLabel: "Med spa",
    sms: {
      initials: "AK",
      name: "Ashley Kim",
      phone: "@ashley.kim",
      badge: "After-hours DM",
      system: "**New Instagram DM** · Today 11:02 PM",
      messages: [
        {
          from: "customer",
          text: "hi! how much is lip filler? do you have anything this week? 💉",
          time: "11:02 PM",
        },
        {
          from: "business",
          text: "Hi Ashley! Lip filler with our injector starts at **$650**. I've got **Friday 2:00 PM** open this week — want me to hold it?",
          time: "11:03 PM",
          note: "Sent by **Hybrid** · 40 sec after the DM",
        },
        {
          from: "customer",
          text: "yes please!! been meaning to book forever",
          time: "11:05 PM",
        },
        {
          from: "business",
          text: "Done ✓ Friday 2:00 PM. I'll text a quick pre-care note before your visit 💛",
          time: "11:05 PM",
        },
      ],
    },
    digest: {
      title: "Good morning ☀️",
      body: "**$2,900** in treatments booked from overnight DMs — every message answered before the desk opened.",
      stats: [
        { value: "4", label: "BOOKED" },
        { value: "0", label: "UNREAD" },
        { value: "1m", label: "AVG REPLY" },
      ],
    },
    value: {
      kind: "calendar",
      dayOfWeek: "Friday",
      date: "Nov 8",
      addedLabel: "JUST ADDED",
      slots: [
        { time: "1:00" },
        {
          time: "2:00",
          booking: {
            title: "Lip filler · Ashley K.",
            sub: "booked from Instagram by Hybrid at 11:05 PM",
            receipt: "Booked · $650 · Fri 2:00 PM",
          },
        },
        { time: "3:30" },
      ],
    },
  },
};
