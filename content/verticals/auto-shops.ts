import type { VerticalContent } from "./types";

export const autoShops: VerticalContent = {
  slug: "auto-shops",
  label: "Auto Shops",
  navLabel: "Auto shops",
  accent: "#FF3DA5",
  metaTitle: "AI for independent auto repair shops | Hybrid Theory",
  metaDescription:
    "The phone rings while your writers are at the counter and both techs are under cars. AI answers, books the drop-off, and follows up on the work they deferred.",

  hero: {
    eyebrow: "AI for auto repair shops",
    headline: "The phone rings and everyone's already busy.",
    lead: "Your service writer is mid-estimate at the counter, both techs are under cars, and the phone won't stop. AI picks up on the first ring, books the drop-off, and texts back the ones you couldn't get to — the call that rang out at lunch, the brakes somebody deferred last month — while your crew keeps their hands on the work.",
  },

  stakes: {
    headline: "The biggest job in the shop is the one they deferred.",
    body: "The real money isn't the phone ringing out — it's the work you already found. A tech pulls a wheel, the front brakes are down to the backing plate, the customer nods and says \"next paycheck,\" and drives off. It goes on a sticky note, the note gets buried, and two months later they're getting it done down the road.",
    stats: [
      {
        value: "35%",
        label: "of drivers skip or delay service a mechanic recommended",
        source: "AAA",
      },
      {
        value: "60 days",
        label: "is about all it takes for the brakes they declined to end up on someone else's lift",
      },
      {
        value: "First",
        label: "shop to call back usually gets the car in the bay",
      },
    ],
  },

  opportunitiesHead: {
    headline: "Full bays, cars that come back, and an ARO that reflects the work.",
    sub: "Not a new shop-management system or ten more logins — just the handful of counter moments that decide your week, each one handled.",
  },

  opportunities: [
    {
      icon: "missed",
      title: "Every missed call gets a text back before they try the next shop",
      body: "Both writers are at the counter and the phone rings out. Before that caller pulls up the next place on the map, they get a text: \"Sorry we missed you — what's the car doing, and when do you need it in?\" The car stays yours.",
    },
    {
      icon: "reception",
      title: "\"Is my car ready?\" gets answered without pulling a writer off an estimate",
      body: "Status calls stack up all afternoon, and every one lands while a writer's mid-ticket. AI handles the \"is it done yet,\" texts a real update the second a job closes, and only routes to a person when there's an actual decision to make.",
    },
    {
      icon: "booking",
      title: "Drop-offs book themselves — no three-voicemail phone tag",
      body: "Instead of trading messages to land a time, the customer picks a slot that fits your bay schedule and gets a confirmation text. Fewer holes in tomorrow's board, fewer no-shows you find out about at 8am.",
    },
    {
      icon: "winback",
      title: "The work they deferred actually comes back",
      body: "The brakes, the struts, the timing belt they put off — \"not today.\" Weeks later, AI follows up the way you never have time to: a calm text with the inspection still attached and a link to book. The safe money you already found comes back in the door.",
    },
    {
      icon: "reorder",
      title: "The reminder that brings the car back before it drifts to a quick-lube",
      body: "That oil change is due, the tires are near the wear bars, the inspection's up next month. AI sends the nudge at the right time so the customer books with you — and the bay stays full through the slow weeks.",
    },
    {
      icon: "reviews",
      title: "The review ask goes out while the car's driving right",
      body: "The moment a customer picks up a car that finally tracks straight is when they'd gladly leave five stars — and the exact moment your writer's already onto the next ticket. AI asks for you, right then, every time.",
    },
  ],

  spotlight: {
    headline: "The declined job that comes back on its own.",
    intro:
      "Every inspection turns up good work the customer defers — here's the one that got logged in March, followed up the week it came due, and booked itself back into an open bay.",
    name: "Declined work, revived",
    context: "Prime Auto · ~80 ROs a week",
    rail: [
      "Tech flags it on the inspection",
      "Customer defers — logged, not lost",
      "Weeks later, the check-in text",
      "Books back into an open bay",
      "Recovered revenue, counted",
    ],
    beats: [3200, 3000, 3400, 3200, 3600],
    cards: [
      {
        pos: "a",
        at: 0,
        title: "DVI · 2019 CR-V · 78,412 mi",
        kind: {
          type: "checklist",
          header: "Inspection results",
          items: [
            { label: "Front brakes — 2mm, backing plate soon", tag: "RED · declined" },
            { label: "Rear struts — leaking, fails bounce test", tag: "YELLOW · declined" },
            { label: "Cabin filter — packed with leaves", tag: "APPROVED", done: true },
            { label: "Oil & filter — done today", tag: "APPROVED", done: true },
          ],
          footer: "2 items declined · saved to the customer's profile",
        },
      },
      {
        pos: "b",
        at: 1,
        title: "FOLLOW-UP · 8 WEEKS LATER",
        kind: {
          type: "sms",
          sms: {
            initials: "DT",
            name: "Dana Tran",
            phone: "(714) 555-0132",
            badge: "Declined work · revived",
            system: "**Follow-up** · struts deferred Mar 4",
            messages: [
              {
                from: "business",
                text: "Hi Dana, it's Prime Auto. Back in March we flagged the rear struts on the CR-V — leaking, failed the bounce test — and you wanted to wait. How's it riding? Any clunk over bumps?",
                time: "9:14 AM",
                note: "Sent by **Hybrid** · 8 weeks after the inspection",
              },
              {
                from: "customer",
                text: "Now that you mention it, it's been bouncy and clunks over the train tracks by my house.",
                time: "9:31 AM",
              },
              {
                from: "business",
                text: "That'll be the struts. The **rear strut job's still $760**, photos from the inspection on file. I've got **Thursday 7:30 AM** open — want it back on the board?",
                time: "9:32 AM",
              },
              { from: "customer", text: "Yeah, let's do it", time: "9:34 AM" },
              {
                from: "business",
                text: "Booked ✓ Thursday 7:30. We'll text a reminder the night before.",
                time: "9:34 AM",
              },
            ],
          },
        },
      },
      {
        pos: "c",
        at: 2,
        title: "SCHEDULE · THURSDAY",
        kind: {
          type: "calendar",
          value: {
            kind: "calendar",
            dayOfWeek: "Thursday",
            date: "May 1",
            addedLabel: "REVIVED",
            slots: [
              { time: "7:00" },
              {
                time: "7:30",
                booking: {
                  title: "Rear struts · '19 CR-V",
                  sub: "Dana Tran · revived from Mar 4 inspection",
                  receipt: "Booked · $760 · Thu 7:30 AM",
                },
              },
              { time: "9:00" },
            ],
          },
        },
      },
      {
        pos: "d",
        at: 3,
        title: "This week's declined work",
        dark: true,
        kind: {
          type: "digest",
          digest: {
            title: "Declined work, revived",
            body: "**$2,480** in deferred jobs back on the schedule — struts, brakes, and a timing belt, all found weeks ago and followed up the day they came due.",
            stats: [
              { value: "6", label: "JOBS REVIVED" },
              { value: "11", label: "FOLLOWED UP" },
              { value: "$2,480", label: "BACK IN" },
            ],
          },
        },
      },
    ],
    receipt: "Recovered · $2,480 · 6 declined jobs back",
  },

  faq: [
    {
      q: "Will my customers know they're texting a computer?",
      a: "Most never clock it. Someone whose check-engine light just came on doesn't want a phone tree — they want to know they can get in and when. A real text back in ten seconds beats a voicemail nobody's sure you'll hear. What they notice is that, unlike the last shop they called, yours actually picked up.",
    },
    {
      q: "My writers already text customers from Tekmetric. How is this different?",
      a: "Your writers text when they've got a free hand — this covers the gaps they can't. The call that rings out at lunch, the declined brake job nobody circles back to, the \"is it ready\" at 4:45 while they're closing three tickets. It works alongside the SMS you already send from Tekmetric or Shop-Ware, not instead of it.",
    },
    {
      q: "Does it plug into my shop-management system?",
      a: "It's built to work with what you run the shop on — Tekmetric, Shop-Ware, Mitchell 1 — so a follow-up references the actual declined line from the DVI, not a generic blast. Anything that needs a real diagnosis or a price it shouldn't quote gets handed straight to your writer. You decide where that line sits.",
    },
    {
      q: "Won't chasing declined work feel pushy, like a quick-lube upsell?",
      a: "It's the opposite. The customer already agreed the struts needed doing — they just didn't have it that day. A calm text weeks later with the inspection photos attached and a link to book is a reminder, not a sales pitch. You set the tone and the timing, and anyone can reply STOP and be left alone.",
    },
    {
      q: "How do I know it'll pay for itself?",
      a: "One recovered brake job a week, or a couple of missed calls that would've booked down the street, and it's covered. We start by showing you where work is actually slipping — missed calls, declined jobs nobody followed up on — so you can run the math on your own numbers before you commit to anything.",
    },
  ],

  finalCta: {
    headline: "Find the work you're losing to a ringing phone and a buried sticky note.",
    body: "Book your free 30-minute assessment. We'll look at where the money's slipping — missed calls, declined jobs nobody followed up on, customers who never got a reminder — and you'll leave with your single biggest bottleneck named and one specific fix. No pitch, no obligation.",
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
