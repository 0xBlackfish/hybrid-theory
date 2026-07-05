import type { VerticalContent } from "./types";

export const dentists: VerticalContent = {
  slug: "dentists",
  label: "Dentists",
  navLabel: "Dentists",
  accent: "#5BE3FF",
  metaTitle: "AI for dental practices — fill the chair, work the recall list",
  metaDescription:
    "Backfill the 2pm cancellation, call back the overdue recall list, and answer the phone at lunch. Quiet AI help for busy front desks — you keep every call.",

  hero: {
    eyebrow: "AI for dental practices",
    headline: "A cancelled 2pm shouldn't mean an empty chair",
    lead: "Someone calls to cancel their cleaning, and the slot just sits there. Meanwhile your recall list has hundreds of patients overdue for a visit. We quietly fill the gap — offer the open time to the right patient, work the reactivation list, and pick up the calls your front desk can't get to.",
  },

  stakes: {
    headline: "The chair is booked. Then it isn't.",
    body: "A same-day cancellation is a slot you already paid for — the hygienist, the room, the lights. On a full schedule those add up fast, and the front desk is too busy checking people in to backfill them. Every empty chair is production that walked out the door.",
    stats: [
      {
        value: "1 in 5",
        label:
          "Roughly the share of scheduled appointments that no-show or cancel late at a typical practice",
      },
      {
        value: "$200+",
        label:
          "Illustrative production lost on a single unfilled hygiene slot — before you count the exam it would have led to",
      },
      {
        value: "First call",
        label:
          "New families usually book with the first practice that actually answers the phone",
      },
    ],
  },

  opportunities: [
    {
      icon: "noshow",
      title: "Backfill the cancellation before the chair goes cold",
      body: "The 2pm cancels at 9am. Instead of an empty room, the open slot is quietly offered to patients who wanted an earlier date — and the ones ready to come in get booked. You see a full column instead of a hole.",
    },
    {
      icon: "reactivation",
      title: "Work the recall list that never gets called",
      body: "Hundreds of patients are overdue for a cleaning, sitting untouched in your PMS because nobody has time to dial them. Overdue patients get a gentle, personal nudge to rebook — and the ones who respond land on your schedule.",
    },
    {
      icon: "reception",
      title: "Answer the phone at lunch and after five",
      body: "The front desk goes to voicemail at noon and again after close — exactly when a new patient with a toothache is calling around. Those calls get answered, questions handled, and appointments booked while the office is dark.",
    },
    {
      icon: "intake",
      title: "New-patient paperwork done before they sit down",
      body: "New patients arrive, then spend fifteen minutes on a clipboard while the schedule slips. Intake forms and health history go out ahead of the visit and come back filled in, so the front desk isn't chasing signatures at check-in.",
    },
    {
      icon: "reviews",
      title: "Ask happy patients to say so",
      body: "A family choosing a new dentist reads the reviews first. Patients who just had a good visit get a simple, well-timed ask — so the practice down the street isn't the only one with a full page of five stars.",
    },
  ],

  demoFlow: "noshow",
  demoIntro:
    "Watch a same-day cancellation turn back into a booked chair — before your front desk even hangs up the phone.",

  faq: [
    {
      q: "Is this safe for patient information? We're a HIPAA practice.",
      a: "We take that seriously and we don't overclaim. We work inside the systems you already trust and we don't stand up anything new until we've walked through how patient data is handled together, including a business associate agreement where one is required. If a workflow can't be done carefully, we don't ship it.",
    },
    {
      q: "Does it work with our practice management software?",
      a: "That's the first thing we check. We build around Dentrix, Eaglesoft, Open Dental, Curve and the other systems practices actually run, so recall lists and open slots come from your real schedule — not a separate spreadsheet you have to keep in sync.",
    },
    {
      q: "Will patients know they're not talking to a person?",
      a: "The goal is a smooth experience, never a trick. Messages sound like your office because they carry your name and tone, and anything that needs a human — a nervous patient, a clinical question, an unusual request — gets handed to your front desk instead of forced through automation.",
    },
    {
      q: "Our front desk is already stretched. Is this one more thing to manage?",
      a: "It's meant to take work off their plate, not add a dashboard to babysit. The routine follow-ups and recall calls get quietly handled in the background, and your team steps in only for the conversations that need a person. You keep every judgment call about who gets booked and when.",
    },
    {
      q: "What actually happens in the free assessment?",
      a: "Thirty minutes, no pitch deck. We look at your schedule, your recall list and how calls come in, and you leave knowing your single biggest bottleneck and one specific fix — whether or not you ever work with us.",
    },
  ],

  finalCta: {
    headline: "See where the chair goes empty",
    body: "Book your free 30-minute assessment. We'll find the one place your practice is quietly losing production — a cold recall list, missed lunchtime calls, cancellations nobody backfills — and give you one specific fix to start with. Free, thirty minutes, no obligation.",
  },

  scenario: {
    chipLabel: "Dental practice",
    sms: {
      initials: "MG",
      name: "Maria G.",
      phone: "(602) 555-0143",
      badge: "Waitlist fill",
      system: "**2:00 PM opened up** · cancellation just now",
      messages: [
        {
          from: "business",
          text: "Hi Maria, it's Bright Smile Dental — a **2:00 PM today** just opened for your crown seat. Want it?",
          time: "11:12 AM",
          note: "Sent by **Hybrid** · seconds after the cancel",
        },
        {
          from: "customer",
          text: "Oh yes! I've been wanting to get in sooner",
          time: "11:14 AM",
        },
        {
          from: "business",
          text: "Perfect — **2:00 PM** is yours, Maria. Dr. Shah will be glad to get that crown finished today. See you this afternoon!",
          time: "11:14 AM",
        },
      ],
    },
    digest: {
      title: "Good morning ☀️",
      body: "**$1,800** in treatment kept on the books — 3 open chairs refilled from the waitlist.",
      stats: [
        { value: "3", label: "CHAIRS REFILLED" },
        { value: "0", label: "GAPS LEFT" },
        { value: "2m", label: "AVG FILL" },
      ],
    },
    value: {
      kind: "calendar",
      dayOfWeek: "Tuesday",
      date: "Today",
      addedLabel: "REFILLED",
      slots: [
        { time: "12:30" },
        {
          time: "2:00",
          booking: {
            title: "Crown seat · Maria G.",
            sub: "refilled from waitlist by Hybrid at 11:14 AM",
            receipt: "Filled · $1,800 · Today 2:00 PM",
          },
        },
        { time: "3:30" },
      ],
    },
  },
};
