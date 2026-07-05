import type { VerticalContent } from "./types";

export const autoShops: VerticalContent = {
  slug: "auto-shops",
  label: "Auto Shops",
  navLabel: "Auto shops",
  accent: "#FF3DA5",
  metaTitle: "AI for independent auto repair shops | Hybrid Theory",
  metaDescription:
    "The phone rings while your writers are with customers and both techs are under cars. AI answers, books the appointment, and follows up on the work they put off.",

  hero: {
    eyebrow: "AI for auto repair shops",
    headline: "The phone rings and everyone's already busy.",
    lead: "Your service writer is walking a customer through an estimate, both techs are under cars, and the phone keeps ringing. AI answers on the first ring, books the appointment, and texts back the ones you couldn't get to — while you and your crew keep your hands on the work.",
  },

  stakes: {
    headline: "The caller you can't reach books down the street.",
    body: "Nobody calls two shops. They call yours, get a ring-ring-ring or a voicemail, and dial the next place on the map. Meanwhile the biggest money in the shop isn't the phone at all — it's the brake job the customer nodded at, said \"next paycheck,\" and drove off without booking.",
    stats: [
      {
        value: "First",
        label: "shop to pick up or call back usually gets the car in the bay",
      },
      {
        value: "$800",
        label: "a deferred brake or suspension job — illustrative, and it walks out the door every week",
      },
      {
        value: "88%",
        label: "of people trust online reviews as much as a personal recommendation",
        source: "BrightLocal Local Consumer Review Survey",
      },
    ],
  },

  opportunities: [
    {
      icon: "missed",
      title: "Every missed call texts back before they dial the next shop",
      body: "Both writers are at the counter and the phone rings out. Before that caller pulls up the next shop on their phone, they get a text: \"Sorry we missed you — what's the car doing, and when do you need it in? We can help.\" The car stays yours.",
    },
    {
      icon: "reception",
      title: "\"Is my car ready?\" gets answered without pulling you off the floor",
      body: "The status calls stack up all afternoon — every one interrupts a writer mid-estimate. AI handles the \"is it done yet\" checks, pushes real updates the second a job closes, and only routes to you when there's an actual decision to make.",
    },
    {
      icon: "booking",
      title: "Appointments book themselves — no phone tag",
      body: "Instead of three voicemails back and forth to land a drop-off time, the customer picks a slot that fits your bay schedule and gets a confirmation text. Fewer holes in tomorrow's board, fewer no-shows you find out about at 8am.",
    },
    {
      icon: "winback",
      title: "The work they put off actually comes back",
      body: "They declined the brakes, the struts, the timing belt — \"not today.\" A week later, AI follows up the way you never have time to: a friendly text with the estimate still attached, a link to book. The safe money you already found comes back in the door.",
    },
    {
      icon: "reorder",
      title: "The reminder that brings the car back for service",
      body: "That oil change is due, those tires are near the wear bars, the inspection's up next month. AI sends the nudge at the right time so the customer books with you instead of drifting to a quick-lube — and the bay stays full in the slow weeks.",
    },
    {
      icon: "reviews",
      title: "The review ask lands while the car's running right",
      body: "The moment a customer picks up a car that finally drives straight is when they'd gladly leave five stars — and the exact moment your writer's already onto the next ticket. AI asks for you, right then, every time. That's who the new family in town trusts.",
    },
  ],

  demoFlow: "missed",
  demoIntro:
    "Here's the call that rings out while your writers are at the counter — answered, texted back, and booked in the time it takes the caller to look up the shop down the street.",

  faq: [
    {
      q: "Will my customers hate talking to AI?",
      a: "Most never clock that it is one. Someone whose check-engine light just came on doesn't want a phone tree — they want to know they can get in and when. A real text back in ten seconds beats a voicemail nobody's sure you'll hear. What they notice is that, unlike the last shop they called, yours actually picked up.",
    },
    {
      q: "Can it handle real questions, or does it just take messages?",
      a: "It does the front-counter basics: books a drop-off, answers \"is my car ready,\" gives your hours and where to find you, and texts an update when a job closes. What it won't do is diagnose a car or quote a price it shouldn't — anything that needs a real look gets handed straight to your writer. You decide where that line sits.",
    },
    {
      q: "Won't the follow-up on declined work feel pushy?",
      a: "It's the opposite of the high-pressure upsell. The customer already agreed the brakes needed doing — they just didn't have it that day. A calm text a week later with the estimate attached and a link to book is a reminder, not a sales pitch. You set the tone and the timing, and anyone can reply \"stop\" and be left alone.",
    },
    {
      q: "I already have an answering service. Why is this different?",
      a: "An answering service takes a message and hands it back — you still have to call everyone. This texts, answers the routine stuff, and books the appointment, so the car's on the schedule before you'd have finished returning the first voicemail. And it never leaves a customer on hold while your writers are slammed.",
    },
    {
      q: "Do I lose control over my schedule and my customers?",
      a: "No. It books into the bay windows and drop-off times you set, follows your rules for what's urgent, and hands anything unusual to a person. Think of it as a front-counter helper who never takes a lunch and never books two cars into one lift — you still make every call that needs judgment.",
    },
  ],

  finalCta: {
    headline: "Find the cars you're losing to a ringing phone.",
    body: "Book your free 30-minute assessment. We'll look at where work is slipping — missed calls, declined jobs nobody followed up on, customers who never got a reminder — and you'll leave with your single biggest bottleneck named and one specific fix. No pitch, no obligation.",
  },

  scenario: {
    chipLabel: "Auto shop",
    sms: {
      initials: "CM",
      name: "Carlos Mendez",
      phone: "(714) 555-0158",
      badge: "Missed call",
      system: "**Missed call** · Today 8:52 AM",
      messages: [
        {
          from: "business",
          text: "Hi, this is Prime Auto — sorry we missed you! What's the car doing, and when do you need it in?",
          time: "8:52 AM",
          note: "Sent by **Hybrid** · 8 sec after the call",
        },
        {
          from: "customer",
          text: "Brakes are grinding on my Silverado. You quoted me last week — can I finally get it in?",
          time: "8:54 AM",
        },
        {
          from: "business",
          text: "Absolutely. That **front brake job runs $840**. I've got **Tuesday 8:00 AM** open — want it?",
          time: "8:54 AM",
        },
        { from: "customer", text: "Yep, book it", time: "8:55 AM" },
        {
          from: "business",
          text: "Booked ✓ Tuesday 8:00 AM. We'll text a reminder the night before.",
          time: "8:55 AM",
        },
      ],
    },
    digest: {
      title: "Good morning ☀️",
      body: "**$3,600** in deferred work booked back in — every missed call texted before they dialed the next shop.",
      stats: [
        { value: "5", label: "CARS BOOKED" },
        { value: "0", label: "MISSED" },
        { value: "9s", label: "AVG REPLY" },
      ],
    },
    value: {
      kind: "calendar",
      dayOfWeek: "Tuesday",
      date: "Nov 5",
      addedLabel: "JUST ADDED",
      slots: [
        { time: "7:30" },
        {
          time: "8:00",
          booking: {
            title: "Front brake job · Silverado",
            sub: "Carlos Mendez · booked by Hybrid at 8:55 AM",
            receipt: "Booked · $840 · Tue 8:00 AM",
          },
        },
        { time: "10:00" },
      ],
    },
  },
};
