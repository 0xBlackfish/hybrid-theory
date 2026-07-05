import type { VerticalContent } from "./types";

export const medSpas: VerticalContent = {
  slug: "med-spas",
  label: "Med Spas",
  navLabel: "Med spas",
  accent: "#FF3DA5",
  metaTitle: "AI for med spas — answer the DMs, keep the calendar full",
  metaDescription:
    "Reply to the 11pm Instagram DM, backfill the consult no-show, and remind clients when their tox is due. Quiet AI help for your front desk — you keep every clinical call.",

  hero: {
    eyebrow: "AI for med spas",
    headline: "The 11pm DM shouldn't sit until morning",
    lead: "Someone finds you on Instagram, asks about lip filler at eleven at night, and by the time the front desk sees it she's already booked somewhere else. We quietly answer the inquiries as they land, backfill the no-shows on your injector's calendar, and remind clients when they're due — so the people who want you actually make it to the chair.",
  },

  stakes: {
    headline: "The inquiry comes in. Then it goes cold.",
    body: "Your front door isn't the front door anymore — it's the DMs, and they arrive at night and on weekends when nobody's at the desk. A consult booked on injector time that no-shows is an hour you can't sell twice. And the client who loved her results three months ago will drift to whoever reminds her first.",
    stats: [
      {
        value: "11pm",
        label:
          "When a lot of your DM inquiries actually land — long after the front desk has gone home for the night",
      },
      {
        value: "$400+",
        label:
          "Illustrative revenue on an hour of injector time a consult no-show leaves empty — a slot you can't resell",
      },
      {
        value: "3–4 months",
        label:
          "Roughly how long a tox result lasts before a client is due to rebook — a cadence nobody at the desk is tracking",
      },
    ],
  },

  opportunities: [
    {
      icon: "dm",
      title: "Answer the DM before she books somewhere else",
      body: "The questions come in on Instagram at night — how much for lip filler, do you do microneedling, are you booking this week. Those messages get a fast, on-brand reply and a real path to book, instead of sitting unread until the front desk logs in and the moment's gone.",
    },
    {
      icon: "noshow",
      title: "Backfill the consult before the chair goes cold",
      body: "A new-client consult no-shows and your injector's 2pm just evaporates — pure lost time you already staffed for. The open slot gets quietly offered to clients waiting on an earlier date, and a confirmation nudge goes out ahead of time so fewer of them vanish in the first place.",
    },
    {
      icon: "reorder",
      title: "Remind clients when their tox is actually due",
      body: "The woman who came in for Botox in March is smooth again, forgetting all about it — and drifting toward whichever spa texts her first. When she's coming due, a warm, personal reminder goes out to rebook, so your calendar stays full without your team dialing down a list.",
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

  demoFlow: "reviews",
  demoIntro:
    "Watch a happy client walk out the door and turn into a fresh five-star review — without your front desk chasing her for it.",

  faq: [
    {
      q: "Our DMs and texts have a specific voice. Will this sound like us?",
      a: "That's the point — it should sound like the person your regulars already message with, not a bot. We tune the replies to your tone, your treatment names, and your booking policies, and we tune them with you before anything goes live. Anything off-script or clinical gets handed to your team instead of guessed at.",
    },
    {
      q: "How is client information handled? We're careful about privacy.",
      a: "We take that seriously and we don't overclaim. We work inside the systems you already trust, and we walk through exactly how client details are handled before anything is turned on. If a workflow can't be done carefully, we don't ship it.",
    },
    {
      q: "Where does the medical judgment stop and the automation start?",
      a: "The automation handles the front-desk work — answering the DM, offering an open slot, sending the rebooking reminder. It never gives medical advice, recommends a treatment, or clears anyone for a procedure. Anything that touches a clinical decision goes straight to your injector or provider, every time.",
    },
    {
      q: "Does it work with our booking software?",
      a: "That's the first thing we check. We build around the systems med spas actually run — the platforms you use for scheduling, charting, and memberships — so open slots and rebooking reminders come from your real calendar, not a separate list your team has to keep in sync.",
    },
    {
      q: "What actually happens in the free assessment?",
      a: "Thirty minutes, no pitch deck. We look at how inquiries reach you, how your injector's calendar fills, and where clients slip between visits — and you leave knowing your single biggest bottleneck and one specific fix, whether or not you ever work with us.",
    },
  ],

  finalCta: {
    headline: "See where the clients slip away",
    body: "Book your free 30-minute assessment. We'll find the one place your spa is quietly losing bookings — DMs going unanswered overnight, no-shows nobody backfills, clients who never got reminded to come back — and give you one specific fix to start with. Free, thirty minutes, no obligation.",
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
