import type { VerticalContent } from "./types";

export const realtors: VerticalContent = {
  slug: "realtors",
  label: "Realtors",
  navLabel: "Realtors",
  accent: "#A78BFA",
  metaTitle: "AI for real estate agents — reply first, work your database",
  metaDescription:
    "Answer the Zillow lead while you're in a showing, wake the cold contact who's finally ready, and quit chasing signatures. Quiet AI help — you keep the client.",

  hero: {
    eyebrow: "AI for real estate agents",
    headline: "The first agent to reply usually wins",
    lead: "A portal lead comes in while you're mid-showing, and by the time you're back in the car three other agents have already texted them. We reply in the moment you can't — answer the first questions, offer a time to see it, and keep your database warm — so being busy stops costing you the client.",
  },

  stakes: {
    headline: "We pay for the leads. The fastest agent gets the client.",
    body: "Every online lead is a race, and it's usually won in minutes — not by the best agent, by the first one to text back. You can't reply while you're walking a buyer through a house or sitting at a closing, so the lead you paid for goes to whoever happened to be free. Now stack that against a database of past clients and old inquiries nobody has time to touch — that's where the real money's leaking.",
    stats: [
      {
        value: "7×",
        label:
          "How much likelier you are to have a real conversation with an online lead when you reach out within the hour instead of an hour later.",
        source: "Harvard Business Review, 2011",
      },
      {
        value: "66%",
        label:
          "Sellers who found their agent through a referral or a past relationship. Your database isn't a list — it's the business.",
        source: "NAR 2025 Profile of Home Buyers and Sellers",
      },
      {
        value: "First to reply",
        label:
          "When a buyer inquires on three listings the same night, they usually go with whoever answers first — not the best agent, the fastest one.",
      },
    ],
  },

  opportunitiesHead: {
    headline: "A pipeline that works while you're at the closing table.",
    sub: "Every lead answered in minutes, every past client remembered, every 'not yet' followed up until it's a yes — without you living inside your CRM.",
  },

  opportunities: [
    {
      icon: "speed",
      title: "Beat the other three agents to the reply",
      body: "A Zillow lead pings while you're unlocking a lockbox for another client. It gets an instant reply in your name — property questions answered, a time to see it offered — so you're the agent who got there first, not the one who called back after dinner.",
    },
    {
      icon: "reactivation",
      title: "Wake up the database that's gone quiet",
      body: "Your CRM is full of people who said 'not yet' a year ago and went dark — and some of them are ready right now. They get a warm, natural check-in on your behalf, and the ones whose timing has finally come land back on your calendar instead of the agent who happened to text last.",
    },
    {
      icon: "qualify",
      title: "Know who's real before you give up your Saturday",
      body: "Not every inquiry is worth a weekend. The first questions get asked for you — price range, timeline, pre-approval, whether they've already signed with someone — so the names that reach your phone are the ones actually ready to move.",
    },
    {
      icon: "reviews",
      title: "Get showing feedback without the phone tag",
      body: "After every showing on your listing, the buyer's agent gets a quick, polite nudge for feedback — so you walk into the price conversation with your sellers holding real notes, not 'I left three voicemails.'",
    },
    {
      icon: "docs",
      title: "Stop being the one chasing signatures",
      body: "A deal stalls because someone hasn't signed the disclosure or sent back the addendum, and you're on reminder number three. The routine nudges go out on their own and the paperwork gets chased down, so you only step in when something actually needs you.",
    },
    {
      icon: "referrals",
      title: "Turn last spring's closing into this spring's referral",
      body: "The clients you handed keys to are your best source of business and the easiest to forget. They get a genuine, well-timed touch — the home-a-versary, a check-in when someone in their circle starts looking — so the referral comes to you, not the agent who stayed in their inbox.",
    },
  ],

  spotlight: {
    headline: "Sunday's open house, handled by Monday morning.",
    intro:
      "You shook 22 hands at the open house. Before you've finished your coffee Monday, every one of them has a text in your voice — and the couple who loved the place are already on the calendar.",
    name: "Open house, followed up",
    context: "Maple & 5th · 22 sign-ins",
    rail: [
      "Sign-ins imported",
      "Everyone texted back",
      "Hot buyer replies",
      "Private showing booked",
      "Sellers get the recap",
    ],
    beats: [3000, 3400, 3200, 3600, 3000],
    cards: [
      {
        pos: "a",
        at: 0,
        title: "OPEN HOUSE · 22 SIGN-INS",
        kind: {
          type: "checklist",
          header: "Maple & 5th · Sunday",
          items: [
            { label: "Dana & Chris R. — pre-approved, loved it", tag: "Private showing", done: true },
            { label: "Marcus B. — browsing the neighborhood", tag: "Texted", done: true },
            { label: "The Ortegas — renting, lease up in spring", tag: "Nurture", done: true },
            { label: "Neighbor — thinking about selling", tag: "Flagged for you", done: true },
          ],
          footer: "Every sign-in got a personal text within the hour",
        },
      },
      {
        pos: "b",
        at: 2,
        title: "FOLLOW-UP · DANA R.",
        kind: {
          type: "sms",
          sms: {
            initials: "DR",
            name: "Dana R.",
            phone: "(407) 555-0193",
            badge: "Open house",
            system: "**Maple & 5th open house** · Sun 3:10 PM",
            messages: [
              {
                from: "business",
                text: "Hi Dana — thanks for coming through Maple & 5th yesterday! You mentioned loving the kitchen. Any questions I can answer, or want a second look?",
                time: "9:02 AM",
                note: "Sent by **Hybrid** · the morning after the open house",
              },
              {
                from: "customer",
                text: "We did love it. Could we see it again Wednesday after work?",
                time: "9:14 AM",
              },
              {
                from: "business",
                text: "Absolutely — I've got **Wednesday 5:30 PM** open. Want me to hold it for you and Chris?",
                time: "9:15 AM",
              },
              { from: "customer", text: "Yes please!", time: "9:16 AM" },
            ],
          },
        },
      },
      {
        pos: "c",
        at: 3,
        title: "CALENDAR · SECOND SHOWING",
        kind: {
          type: "calendar",
          value: {
            kind: "calendar",
            dayOfWeek: "Wednesday",
            date: "May 14",
            addedLabel: "JUST ADDED",
            slots: [
              { time: "4:30" },
              {
                time: "5:30",
                booking: {
                  title: "Private showing · Maple & 5th",
                  sub: "Dana & Chris R. · booked by Hybrid at 9:16 AM",
                  receipt: "Booked · Wed 5:30 PM · 2nd showing",
                },
              },
              { time: "6:30" },
            ],
          },
        },
      },
      {
        pos: "d",
        at: 4,
        title: "SELLER UPDATE",
        dark: true,
        kind: {
          type: "digest",
          digest: {
            title: "Seller update · Maple & 5th",
            body: "**22 visitors** Sunday, 4 serious — one couple is coming back Wednesday for a second look.",
            stats: [
              { value: "22", label: "VISITORS" },
              { value: "4", label: "SERIOUS" },
              { value: "1", label: "2ND SHOWING" },
            ],
          },
        },
      },
    ],
    receipt: "Followed up 22 of 22 · private showing booked",
  },

  faq: [
    {
      q: "Will my leads know it's not me texting?",
      a: "They're getting a fast, real reply — never a trick. Messages go out in your name and match how you actually text, and the moment a conversation gets real — a serious buyer, a question about a specific property, anyone who wants a person — it's handed straight to you. We're upfront about disclosure and would rather step aside early than impersonate you in the conversation that decides the deal.",
    },
    {
      q: "Does it work with Follow Up Boss and wherever my leads come from?",
      a: "That's the first thing we check. We build around what you already run — Follow Up Boss, kvCORE, BoomTown, Sierra Interactive and the like — and plug into where leads actually land: Zillow, Realtor.com, your IDX site, an open-house sign-in. Your CRM stays the source of truth; we just make sure nothing sits in it untouched.",
    },
    {
      q: "I've got an ISA and a small team — does this replace them? And does it work if I'm solo?",
      a: "For a team, think of it as a tireless first-touch ISA that never sleeps through a 9pm lead, so your people spend their hours on the conversations that actually convert. For a solo agent, it's the assistant you can't afford to hire yet — answering, qualifying and following up while you're out in the field. Same engine, sized to how you work.",
    },
    {
      q: "My relationships are the whole business. Doesn't automating that cheapen it?",
      a: "That's exactly why the machine stops at the doorstep. It handles the part that's just speed and memory — replying in the first five minutes, remembering to check in a year later — and hands you the actual relationship. Every judgment call about who to push, what to say, and which client gets a real phone call stays yours.",
    },
    {
      q: "What actually happens in the free assessment?",
      a: "Thirty minutes, no pitch deck. We look at how leads reach you, how fast they get a reply, and what's gone cold in your database — and you leave knowing your single biggest bottleneck and one specific fix, whether or not you ever work with us.",
    },
  ],

  finalCta: {
    headline: "Find the deals slipping through a slow reply.",
    body: "Book your free 30-minute assessment. We'll find the one place clients are quietly slipping away — a portal lead that goes cold mid-showing, a database nobody's touched in months, signatures you're still chasing — and hand you one specific fix to start with. Free, thirty minutes, no obligation.",
  },

  scenario: {
    chipLabel: "Real estate team",
    sms: {
      initials: "PN",
      name: "Priya Nair",
      phone: "(305) 555-0127",
      badge: "Portal lead",
      system: "**New Zillow lead** · Today 1:24 PM",
      messages: [
        {
          from: "customer",
          text: "Is 418 Marigold still available? Would love to see it this weekend.",
          time: "1:24 PM",
        },
        {
          from: "business",
          text: "Hi Priya! Yes, 418 Marigold is still on the market. Are you already working with an agent, and is this your first time seeing it?",
          time: "1:25 PM",
          note: "Sent by **Hybrid** · 30 sec after the inquiry",
        },
        {
          from: "customer",
          text: "Not working with anyone yet — pre-approved, hoping to move by spring",
          time: "1:27 PM",
        },
        {
          from: "business",
          text: "Perfect — I can show it **Saturday 11:00 AM**. Want me to lock that in for you?",
          time: "1:27 PM",
        },
        { from: "customer", text: "Yes, that works great", time: "1:29 PM" },
      ],
    },
    digest: {
      title: "Good morning ☀️",
      body: "**7 new portal leads** answered while you were showing yesterday — 3 booked a showing before another agent even replied.",
      stats: [
        { value: "7", label: "LEADS ANSWERED" },
        { value: "3", label: "SHOWINGS" },
        { value: "40s", label: "AVG REPLY" },
      ],
    },
    value: {
      kind: "calendar",
      dayOfWeek: "Saturday",
      date: "Nov 9",
      addedLabel: "JUST ADDED",
      slots: [
        { time: "10:00" },
        {
          time: "11:00",
          booking: {
            title: "Showing · 418 Marigold",
            sub: "Priya Nair · booked by Hybrid at 1:29 PM",
            receipt: "Booked · Sat 11:00 AM · showing",
          },
        },
        { time: "1:30" },
      ],
    },
  },
};
