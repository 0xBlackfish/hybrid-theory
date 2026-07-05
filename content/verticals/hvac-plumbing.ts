import type { VerticalContent } from "./types";

export const hvacPlumbing: VerticalContent = {
  slug: "hvac-plumbing",
  label: "HVAC & Plumbing",
  navLabel: "HVAC & plumbing",
  accent: "#5BE3FF",
  metaTitle: "AI for HVAC & plumbing companies | Hybrid Theory",
  metaDescription:
    "Stop losing after-hours no-heat calls to whoever picks up first. AI answers, texts back every missed call, and books the job while your techs stay on the tools.",

  hero: {
    eyebrow: "AI for HVAC & plumbing",
    headline: "The 7pm no-heat call shouldn't hit voicemail.",
    lead: "When a furnace quits or a pipe lets go, the homeowner calls the next name on the list until someone picks up. AI answers on the first ring, texts back every missed call, and books the job — while your techs stay on the tools and you keep every judgment call.",
  },

  stakes: {
    headline: "The job goes to whoever picks up first.",
    body: "An emergency call isn't a lead you nurture — it's a job that gets booked in the next ten minutes, with you or without you. Your best tech can't take a call from an attic, and by the time you hear the voicemail the water's already shut off and somebody else's van is in the driveway.",
    stats: [
      {
        value: "1st",
        label: "The company that calls back first usually books the emergency job.",
      },
      {
        value: "After hours",
        label: "when the no-heat calls come — exactly when the office phone is dark",
      },
      {
        value: "$400+",
        label:
          "what one after-hours no-heat call can be worth — illustrative, before a repair or replacement",
      },
    ],
  },

  opportunitiesHead: {
    headline: "More of the work already ringing your phone.",
    sub: "Not a new dispatch system or ten more tools — just the moments between the ring and the booked job, each one handled.",
  },

  opportunities: [
    {
      icon: "missed",
      title: "Every missed call gets a text back — before they dial the next guy",
      body: "Your tech's in a crawlspace and the phone rings out. Before the caller scrolls to the next company, a text goes out: \"Sorry we missed you — is your heat out? Where are you? We can help.\" The job stays yours.",
    },
    {
      icon: "reception",
      title: "The 9pm no-heat call gets a real answer, not voicemail",
      body: "First cold snap, the furnace won't fire, and it's 8 at night. Instead of a message you'll hear tomorrow, the call gets answered, triaged, and either booked for the morning or flagged to your on-call tech — so nobody's freezing and nobody's dialing your competitor.",
    },
    {
      icon: "speed",
      title: "First to answer when the first freeze hits",
      body: "The temperature drops and forty calls stack up behind one dispatcher. Every call gets answered in parallel — emergencies sorted from tune-ups, the fastest reply out the door on all of them — instead of a busy signal and a full voicemail box.",
    },
    {
      icon: "booking",
      title: "No more three-call phone tag for one arrival window",
      body: "Instead of trading voicemails to pin down a two-hour window, the homeowner picks a slot that fits your crew's route and gets a confirmation text. Fewer callbacks, fewer holes in the day.",
    },
    {
      icon: "invoice",
      title: "The invoice from three weeks ago finally gets paid",
      body: "The job's done, the customer's happy, and the bill's still sitting open. A polite nudge goes out — and the one after that — so the money doesn't age out while you're running the next call.",
    },
    {
      icon: "reviews",
      title: "The review ask lands while the heat's back on",
      body: "The minute the furnace kicks back on is when a homeowner would gladly leave five stars — and the exact minute you're already driving to the next job. The ask goes out for you, right then, every time.",
    },
  ],

  demoFlow: "missed",
  demoIntro:
    "Here's the after-hours call your voicemail usually loses — answered, texted back, and booked in the time it takes to reach the next company on the list.",

  spotlight: {
    headline: "Fill the slow weeks before the phone even rings.",
    intro:
      "Every fall, hundreds of past customers are due for a furnace tune-up and a stack of maintenance plans are about to lapse — here's that whole list worked overnight, without pulling anyone off the board.",
    name: "Fall tune-up push",
    context: "Cardinal Heating & Air · 1,900 past customers",
    rail: [
      "Pull the due list",
      "Text the member",
      "Rebook the tune-up",
      "Renew the plan",
      "Slow weeks fill",
    ],
    beats: [3200, 3600, 3400, 3600, 3000],
    cards: [
      {
        pos: "a",
        at: 0,
        title: "DUE THIS MONTH",
        kind: {
          type: "checklist",
          header: "Fall tune-ups · Cardinal",
          items: [
            { label: "Dana Reyes — furnace tune-up due", tag: "Plan expires Oct 31" },
            { label: "Whitfield — plan lapsed in August", tag: "Win back" },
            { label: "Okafor — first fall reminder", tag: "Member" },
            { label: "+ 43 more on the list", tag: "Queued" },
          ],
          footer: "Worked overnight by Hybrid",
        },
      },
      {
        pos: "b",
        at: 1,
        title: "REMINDER · PLAN MEMBER",
        kind: {
          type: "sms",
          sms: {
            initials: "DR",
            name: "Dana Reyes",
            phone: "(614) 555-0139",
            badge: "Plan member",
            system: "**Tune-up reminder** · Oct 14",
            messages: [
              {
                from: "business",
                text: "Hi Dana — it's Cardinal Heating & Air. Your comfort plan covers a furnace tune-up before the cold sets in. Want me to grab you a spot this month?",
                time: "9:02 AM",
                note: "Sent by **Hybrid** · fall reminder",
              },
              {
                from: "customer",
                text: "Oh good — yes, I always forget. Mornings are best for me",
                time: "12:20 PM",
              },
              {
                from: "business",
                text: "Easy. I've got **Thurs Oct 23, 8–10 AM** open. Want your usual tech if he's free?",
                time: "12:21 PM",
              },
              { from: "customer", text: "That'd be great, thanks", time: "12:24 PM" },
              {
                from: "business",
                text: "Booked ✓ And your plan's renewed for another year — I'll text a reminder the day before.",
                time: "12:24 PM",
              },
            ],
          },
        },
      },
      {
        pos: "c",
        at: 2,
        title: "SCHEDULE · REFILLED",
        kind: {
          type: "calendar",
          value: {
            kind: "calendar",
            dayOfWeek: "Thursday",
            date: "Oct 23",
            addedLabel: "REFILLED",
            slots: [
              {
                time: "8:00",
                booking: {
                  title: "Furnace tune-up · plan member",
                  sub: "Dana Reyes · rebooked by Hybrid",
                  receipt: "Booked · plan renewed · Thu 8:00 AM",
                },
              },
              { time: "10:30" },
              { time: "1:00" },
            ],
          },
        },
      },
      {
        pos: "d",
        at: 3,
        title: "OVERNIGHT",
        dark: true,
        kind: {
          type: "digest",
          digest: {
            title: "Overnight · Fall push",
            body: "**$4,700** in tune-ups booked and **9 plans renewed** — the slow weeks before winter are filling on their own.",
            stats: [
              { value: "22", label: "TUNE-UPS BOOKED" },
              { value: "9", label: "PLANS RENEWED" },
              { value: "6", label: "WON BACK" },
            ],
          },
        },
      },
    ],
    receipt: "Booked · 22 tune-ups · 9 plans renewed",
  },

  faq: [
    {
      q: "Will my customers know they're texting a computer — and hate it?",
      a: "A homeowner with no heat doesn't want a chat; they want to know someone's coming. A real text back in ten seconds beats a voicemail they're not sure you'll hear. Most never clock that it's automated — they clock that, unlike the last two companies they called, yours actually answered.",
    },
    {
      q: "We already run ServiceTitan. Do I have to rip it out?",
      a: "No. It sits on top of what you've already got — ServiceTitan, Housecall Pro, ServiceFusion, whatever you dispatch from. It reads your open slots and service areas, books into them, and writes the appointment back to your system. Your CRM stays your CRM; this just answers the phone and fills the board.",
    },
    {
      q: "Can it actually tell a no-heat emergency from a tune-up that can wait?",
      a: "Yes — that's the whole job. It asks the same first questions your dispatcher would: no heat, active leak, gas smell, or routine maintenance. Emergencies get flagged to your on-call tech; the rest get booked into an open window. You set what counts as urgent.",
    },
    {
      q: "After hours, is it going to page my on-call guy for every dripping faucet?",
      a: "Only for what you tell it to. You set the bar — no heat, gas smell, active water — and everything under it gets booked for the morning instead of waking anyone. The tech's phone rings for real emergencies, not for a running toilet that can wait till 8.",
    },
    {
      q: "How do I know it won't book a job I can't cover — or quote a price I never set?",
      a: "It only books inside the windows, zip codes, and on-call schedule you give it, and it never quotes a flat-rate repair sight-unseen — just the diagnostic or trip fee you've set, same as your dispatcher. Anything odd, it hands to a human. Think of it as a dispatcher who never books outside your area and never freelances a price.",
    },
  ],

  finalCta: {
    headline: "Find the calls you're losing after hours.",
    body: "Book your free 30-minute assessment. We'll walk your week — missed calls, slow callbacks, tune-ups that never got rebooked, invoices sitting open — and you'll leave with your single biggest leak named and one specific fix. No pitch, no obligation.",
  },

  scenario: {
    chipLabel: "HVAC company",
    sms: {
      initials: "JT",
      name: "Janet Torres",
      phone: "(614) 555-0172",
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
