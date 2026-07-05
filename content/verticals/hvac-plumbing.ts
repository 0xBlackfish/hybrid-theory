import type { VerticalContent } from "./types";

export const hvacPlumbing: VerticalContent = {
  slug: "hvac-plumbing",
  label: "HVAC & Plumbing",
  navLabel: "HVAC & plumbing",
  accent: "#5BE3FF",
  metaTitle: "AI for HVAC & plumbing companies | Hybrid Theory",
  metaDescription:
    "Stop losing after-hours no-heat calls and emergency jobs to whoever answered first. AI answers, texts back, and books while your techs are in the field.",

  hero: {
    eyebrow: "AI for HVAC & plumbing",
    headline: "The 7pm no-heat call shouldn't hit voicemail.",
    lead: "When a furnace quits or a pipe lets go, the homeowner calls the next name on the list until someone picks up. AI answers on the first ring, texts back every missed call, and books the job — while your techs stay on the tools and you keep every judgment call.",
  },

  stakes: {
    headline: "The job goes to whoever answered.",
    body: "An emergency call isn't a lead you nurture — it's a job that's booked in the next ten minutes, with you or without you. Your best tech can't take a call from an attic, and by the time you listen to the voicemail the water's already off and the other guy's van is in the driveway.",
    stats: [
      {
        value: "62%",
        label: "of calls to small businesses go unanswered",
        source: "411 Locals study",
      },
      {
        value: "First",
        label: "company to call back usually wins the emergency job",
      },
      {
        value: "$450+",
        label: "an after-hours emergency call is worth — illustrative, before the repair",
      },
    ],
  },

  opportunities: [
    {
      icon: "missed",
      title: "Every missed call texts back — instantly",
      body: "Your tech is under a house and the phone rings out. Before the caller dials the next company, they get a text: \"Sorry we missed you — what's going on and where are you? We can help.\" The job stays yours.",
    },
    {
      icon: "reception",
      title: "The after-hours no-heat call gets a real answer",
      body: "It's 9pm in January and the furnace is dead. Instead of voicemail, AI picks up, figures out whether it's a true emergency, and either books the morning slot or flags the on-call tech — so nobody's freezing and nobody's dialing your competitor.",
    },
    {
      icon: "speed",
      title: "First to respond, even in the busy season",
      body: "Ten calls stacked up during a heat wave and one dispatcher. AI handles the pile-up in parallel — answering, sorting the emergencies from the tune-ups, and getting the fastest reply out the door on every one.",
    },
    {
      icon: "booking",
      title: "No more dispatch phone tag",
      body: "Instead of three calls to pin down a two-hour window, the homeowner picks a slot that matches your crew's route and gets a confirmation text. Fewer callbacks, fewer holes in the schedule.",
    },
    {
      icon: "invoice",
      title: "The invoice from three weeks ago gets paid",
      body: "The job's done, the customer's happy, and the bill is still sitting there. AI sends the polite nudge — and the one after that — so the money doesn't age out while you're busy running the next job.",
    },
    {
      icon: "reviews",
      title: "The review ask lands while they're grateful",
      body: "Right after the heat's back on is the moment a homeowner would happily leave five stars — and the exact moment you forget to ask. AI asks for you, at that moment, every time.",
    },
  ],

  demoFlow: "missed",
  demoIntro:
    "Here's the after-hours call your voicemail usually loses — answered, texted back, and booked in the time it takes to reach the next company on the list.",

  faq: [
    {
      q: "Will my customers hate talking to AI?",
      a: "A homeowner with no heat doesn't want to talk to anyone — they want to know someone's coming. Getting a real text back in ten seconds beats a voicemail they're not even sure you'll hear. Most people never notice it's AI; they notice that, unlike the last three companies, yours actually answered.",
    },
    {
      q: "Can it tell a real emergency from a routine tune-up?",
      a: "Yes — that's the whole point. It asks the same first questions your dispatcher would: no heat, active leak, gas smell, or a maintenance call that can wait until Tuesday. Emergencies get flagged to your on-call tech; the rest get booked into an open slot. You set the rules for what counts as urgent.",
    },
    {
      q: "My techs can't answer the phone from an attic. Does this help with that?",
      a: "That's exactly the gap it fills. Your guys stay on the tools instead of stopping every job to grab a ringing phone, and no call falls through the cracks while they're in a crawlspace. The calls get answered, sorted, and booked without pulling anyone off the work.",
    },
    {
      q: "Do I lose control over who gets booked and when?",
      a: "No. It books into the windows and service areas you define, respects your on-call schedule, and hands off anything unusual to a human. Think of it as a dispatcher who never sleeps and never books a job in the wrong zip code — you still make every call that actually needs judgment.",
    },
    {
      q: "I already have an answering service. Why is this different?",
      a: "An answering service takes a message and hands it back to you — you still have to call everyone back. This actually texts, qualifies, and books, so the job is on the calendar before you'd have finished listening to the voicemail. And it doesn't put your customer on hold at 9pm.",
    },
  ],

  finalCta: {
    headline: "Find the calls you're losing after hours.",
    body: "Book your free 30-minute assessment. We'll look at where jobs are slipping — missed calls, slow callbacks, unpaid invoices — and you'll leave with your single biggest bottleneck named and one specific fix. No pitch, no obligation.",
  },

  scenario: {
    chipLabel: "HVAC company",
    sms: {
      initials: "JT",
      name: "Janet Torres",
      phone: "(480) 555-0172",
      badge: "After-hours",
      system: "**Missed call** · Today 7:04 PM",
      messages: [
        {
          from: "business",
          text: "Hi, this is Cardinal Heating & Air — sorry we missed you! Is your heat out?",
          time: "7:04 PM",
          note: "Sent by **Hybrid** · 6 sec after the call",
        },
        {
          from: "customer",
          text: "Yes! Furnace won't kick on and it's 38° tonight 🥶",
          time: "7:05 PM",
        },
        {
          from: "business",
          text: "That's no good. I can get a tech to you **tomorrow 8:00 AM** for a no-heat diagnostic. Lock it in?",
          time: "7:05 PM",
        },
        { from: "customer", text: "Please, yes", time: "7:06 PM" },
        {
          from: "business",
          text: "Booked ✓ Tomorrow 8:00 AM. Bundle up — reminder coming tonight.",
          time: "7:06 PM",
        },
      ],
    },
    digest: {
      title: "Good morning ☀️",
      body: "**$2,140** in service calls booked overnight. Every after-hours call answered.",
      stats: [
        { value: "5", label: "CALLS BOOKED" },
        { value: "0", label: "MISSED" },
        { value: "6s", label: "AVG REPLY" },
      ],
    },
    value: {
      kind: "calendar",
      dayOfWeek: "Wednesday",
      date: "Nov 6",
      addedLabel: "JUST ADDED",
      slots: [
        { time: "7:00" },
        {
          time: "8:00",
          booking: {
            title: "No-heat diagnostic",
            sub: "Janet Torres · booked by Hybrid at 7:06 PM",
            receipt: "Booked · $289 · Wed 8:00 AM",
          },
        },
        { time: "10:30" },
      ],
    },
  },
};
