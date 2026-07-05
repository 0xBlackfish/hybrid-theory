import type { VerticalContent } from "./types";

export const realtors: VerticalContent = {
  slug: "realtors",
  label: "Realtors",
  navLabel: "Realtors",
  accent: "#A78BFA",
  metaTitle: "AI for real estate agents — reply first, work your database",
  metaDescription:
    "Reply to the Zillow lead while you're in a showing, mine the cold contacts who are ready now, and stop chasing signatures. Quiet AI help — you keep every deal.",

  hero: {
    eyebrow: "AI for real estate agents",
    headline: "First to reply usually wins the listing",
    lead: "A portal lead comes in while you're mid-showing, and by the time you're back in the car three other agents have already texted them. We reply in the moment you can't — answer the first questions, book the showing, and keep your database warm — so being busy stops costing you the deal.",
  },

  stakes: {
    headline: "The lead was yours for about five minutes",
    body: "Every online lead is a race, and it's usually decided in minutes — not by the best agent, but by the first one to call back. You can't answer while you're walking a buyer through a house or sitting at a closing table, so the lead you paid for goes to whoever happened to be free. Multiply that by a full pipeline and a database of past clients nobody has time to touch.",
    stats: [
      {
        value: "~5 min",
        label:
          "Reply inside five minutes and you're far more likely to reach and qualify the lead than an agent who calls back an hour later",
        source: "Harvard Business Review",
      },
      {
        value: "~2 in 3",
        label:
          "Share of sellers who find their agent through a referral or use their previous agent again — the database is the business",
        source: "NAR Profile of Home Buyers and Sellers",
      },
      {
        value: "First call",
        label:
          "When a buyer inquires on three listings, they usually go with the agent who answers first",
      },
    ],
  },

  opportunities: [
    {
      icon: "speed",
      title: "Reply to the portal lead before your phone stops buzzing",
      body: "A Zillow inquiry lands while you're unlocking a lockbox. Instead of it going cold for two hours, the lead gets an instant, personal reply in your name — first questions answered, a showing offered — so you're the agent who got there first, not the one who called back too late.",
    },
    {
      icon: "reactivation",
      title: "Mine the database that's been sitting cold",
      body: "Your CRM is full of leads from eighteen months ago — people who said 'not yet' and then went quiet. Some of them are ready now. Those old contacts get a warm, natural check-in, and the ones whose timing has finally come land back on your calendar instead of a competitor's.",
    },
    {
      icon: "qualify",
      title: "Sort the tire-kickers from the ready buyers",
      body: "You spend evenings texting back inquiries that were never going anywhere — no pre-approval, no timeline, just curious. The first questions get asked for you — budget, timeline, are they already working with someone — so the names that reach your phone are the ones worth your night.",
    },
    {
      icon: "docs",
      title: "Stop chasing signatures and disclosures",
      body: "A deal is only stuck because someone hasn't signed the disclosure or sent back the addendum, and you're the one sending the third reminder. The routine follow-ups go out on their own, documents get chased down, and you hear about it only when something actually needs your attention.",
    },
    {
      icon: "referrals",
      title: "Turn closed deals into the next three",
      body: "The clients you handed keys to last spring are your best source of business — and the easiest one to forget. Past clients get a genuine, well-timed touch on the closing anniversary or when someone in their circle is moving, so the referral comes to you instead of the agent who stayed in touch.",
    },
  ],

  demoFlow: "speed",
  demoIntro:
    "Watch a portal lead that came in during a showing get a reply, a qualifying question and a booked appointment — before you're back in the car.",

  faq: [
    {
      q: "Will leads know they're not texting me directly?",
      a: "The goal is a fast, natural first reply, never a trick. Messages go out in your name and your voice — matched to how you actually text — and anything real is handed straight to you: a serious buyer, a specific question about a property, anyone who wants to talk to a person. We're honest about disclosure, and we'd rather hand off early than pretend to be you in a conversation that matters.",
    },
    {
      q: "Does this work with my CRM and lead sources?",
      a: "That's the first thing we check. We build around what you already run — Follow Up Boss, kvCORE, Sierra, LionDesk and the like — and connect to where your leads actually come from, whether that's Zillow, Realtor.com, your site or an open-house sign-in. Your database stays the source of truth; we just make sure nothing sits in it untouched.",
    },
    {
      q: "I've been burned by 'lead' services before. How is this different?",
      a: "We don't sell you leads. This works the ones you already have — the inquiries you paid for and the past clients in your database — so being busy stops meaning being slow. There's no new pile of cold names to sift through; it's about answering faster and following up on the ones already there.",
    },
    {
      q: "My relationships are the whole business. Doesn't automating that cheapen it?",
      a: "That's exactly why the machine stops at the doorstep. It handles the part that's just speed and memory — replying in the first five minutes, remembering to check in a year later — and hands you the actual conversation. You keep every judgment call about who to push, what to say and which relationship deserves a real phone call.",
    },
    {
      q: "What actually happens in the free assessment?",
      a: "Thirty minutes, no pitch deck. We look at how leads reach you, how fast they get a reply, and what's sitting cold in your database — and you leave knowing your single biggest bottleneck and one specific fix, whether or not you ever work with us.",
    },
  ],

  finalCta: {
    headline: "Find the leads you're losing to a slow reply",
    body: "Book your free 30-minute assessment. We'll find the one place deals are quietly slipping — a portal lead that goes cold mid-showing, a database nobody's worked in months, signatures you keep chasing — and give you one specific fix to start with. Free, thirty minutes, no obligation.",
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
          text: "Hi Priya! Yes, 418 Marigold is still on the market. Are you already working with an agent, and is this a first look?",
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
      title: "Good morning, Matt ☀️",
      body: "**7 portal leads** answered mid-showing yesterday — 3 showings booked before another agent replied.",
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
