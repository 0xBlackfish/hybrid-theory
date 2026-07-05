import type { VerticalContent } from "./types";

export const dentists: VerticalContent = {
  slug: "dentists",
  label: "Dentists",
  navLabel: "Dentists",
  accent: "#5BE3FF",
  metaTitle: "AI for dental practices — fill the chair, work the recall list",
  metaDescription:
    "Backfill the same-day cancellation, work the overdue recall list, and answer the phone at lunch and after close. Quiet AI help for busy dental front desks — you keep every call.",

  hero: {
    eyebrow: "AI for dental practices",
    headline: "A cancelled cleaning shouldn't mean an empty chair",
    lead: "The 9:40 cancels, the hygienist's chair sits open, and the front desk is too buried in check-ins to fill it. We quietly close the gap — offer the open time to a patient who wanted in sooner, work the recall list nobody has time to call, and pick up the phone at lunch and after five.",
  },

  stakes: {
    headline: "The schedule looked full at 8 a.m.",
    body: "Then the 9:40 cancels, the 11:20 no-shows, and two more \"something came up\" by lunch. The hygienist's chair sits empty while the front desk is buried in check-ins and insurance calls, and the recall list nobody's had time to touch just keeps growing. It's no one's fault — there's just no one left to make the calls.",
    stats: [
      {
        value: "Perishable",
        label:
          "Chair time is inventory that spoils. A slot empty at 2:00 can't be sold back at 5:00.",
      },
      {
        value: "Hundreds",
        label:
          "Patients overdue for hygiene sitting in your system — more than any front desk has time to call.",
      },
      {
        value: "First to answer",
        label:
          "The new patient calling around with a toothache books whoever picks up the phone.",
      },
    ],
  },

  opportunitiesHead: {
    headline: "Picture the column full — and staying that way.",
    sub: "Not a new system or ten more logins. Just the everyday moments where production slips away, each one quietly handled in your voice, so the schedule you built at 8 a.m. is the one you actually run.",
  },

  opportunities: [
    {
      icon: "noshow",
      title: "Backfill the cancellation before the chair goes cold",
      body: "The 9:40 cancels at 8:15. Before the hygienist's chair sits empty, the slot goes out to patients on the ASAP list who wanted in sooner — and the schedule closes back up before you've finished morning huddle.",
    },
    {
      icon: "reactivation",
      title: "Work the recall list nobody has time to call",
      body: "Hundreds of patients are overdue for their six-month cleaning, sitting untouched in Dentrix because the phone never stops. Each one gets a warm, personal nudge to get back on the books — and the ones who reply land in the hygiene column.",
    },
    {
      icon: "reception",
      title: "Pick up at lunch and after the lights are off",
      body: "The front desk rolls to voicemail at noon and again after five — right when a new patient with a toothache is calling down the list. Those calls get answered, questions handled, and appointments booked while the office is closed.",
    },
    {
      icon: "intake",
      title: "Paperwork done before they're in the chair",
      body: "New patients used to fill a clipboard in the waiting room while the schedule backed up. Health history and forms go out ahead of the visit and come back complete, so the front desk isn't chasing a signature at check-in.",
    },
    {
      icon: "reviews",
      title: "Ask your happy patients to say so",
      body: "The family shopping for a new dentist reads the reviews first. The patient who just left thrilled with Dr. Shah gets a simple, well-timed ask — so your five-star page keeps pace with the office down the street.",
    },
  ],

  demoFlow: "noshow",
  demoIntro:
    "Watch a same-day cancellation turn back into a booked chair — before your front desk even hangs up the phone.",

  spotlight: {
    headline: "The treatment they already said yes to.",
    intro:
      "Every practice has a report full of crowns and cleanings patients accepted and never scheduled. This is that list, worked — in your office's voice, while you're seeing patients.",
    name: "The unscheduled list, worked",
    context: "Bright Smile Dental · accepted treatment, never booked",
    rail: [
      "Pull the unscheduled report",
      "Reach each patient in your voice",
      "Karen says yes",
      "Tally the production",
      "Tomorrow's morning digest",
    ],
    beats: [3200, 3600, 3200, 3000, 3400],
    cards: [
      {
        pos: "a",
        at: 0,
        title: "UNSCHEDULED TREATMENT",
        kind: {
          type: "checklist",
          header: "Diagnosed, accepted, never booked",
          items: [
            { label: "Karen D. · crown, #19 · accepted May", tag: "$1,240" },
            { label: "James O. · implant crown · accepted Apr", tag: "$2,050" },
            { label: "Priya N. · deep cleaning, SRP", tag: "$920" },
            { label: "Marcus L. · crown, #14", tag: "$1,240" },
          ],
          footer: "27 patients · accepted treatment, never scheduled",
        },
      },
      {
        pos: "b",
        at: 1,
        title: "KAREN D. · CROWN #19",
        kind: {
          type: "sms",
          sms: {
            initials: "KD",
            name: "Karen D.",
            phone: "(602) 555-0119",
            badge: "Accepted May · unscheduled",
            system: "**Crown #19** · approved in May, never booked",
            messages: [
              {
                from: "business",
                text: "Hi Karen, it's Bright Smile Dental. Dr. Shah had recommended a crown on that lower molar (**#19**) back in May — want me to grab you a time before it starts giving you trouble?",
                time: "9:02 AM",
                note: "Sent by **Hybrid** · from your unscheduled list",
              },
              {
                from: "customer",
                text: "Oh gosh, I completely forgot about that. Yes, please.",
                time: "9:14 AM",
              },
              {
                from: "business",
                text: "Happens to everyone — life gets busy. I've got **Thursday 9:40 AM** or next **Tuesday at 2:00**. Which is easier?",
                time: "9:15 AM",
              },
              {
                from: "customer",
                text: "Thursday works.",
                time: "9:20 AM",
              },
              {
                from: "business",
                text: "Done — **Thursday 9:40 AM** with Dr. Shah for the crown. I'll text a reminder the day before. Glad we caught it, Karen.",
                time: "9:20 AM",
              },
            ],
          },
        },
      },
      {
        pos: "c",
        at: 3,
        title: "THE RUN",
        kind: {
          type: "scorecard",
          rows: [
            { label: "Texted", value: "27" },
            { label: "Replied", value: "9" },
            { label: "Booked", value: "6" },
            { label: "Production rebooked", value: "$8,900" },
          ],
          footer: "Still your patients — nothing pushy, all in your voice.",
        },
      },
      {
        pos: "d",
        at: 4,
        dark: true,
        title: "TOMORROW MORNING",
        kind: {
          type: "digest",
          digest: {
            title: "Good morning ☀️",
            body: "**$8,900** in treatment you'd already diagnosed is back on the schedule — 6 patients booked from the unscheduled list overnight.",
            stats: [
              { value: "6", label: "REBOOKED" },
              { value: "$8,900", label: "PRODUCTION" },
              { value: "0", label: "CALLS FOR YOU" },
            ],
          },
        },
      },
    ],
    receipt: "Rebooked · $8,900 · 6 patients this week",
  },

  faq: [
    {
      q: "Is our patient information safe? We're a HIPAA office.",
      a: "Yes — and we won't pretend it's simple. We work inside the systems you already use rather than copying patient data somewhere new, and where a business associate agreement is required, we sign one before anything goes live. If a workflow can't be done in a way we're both comfortable with, we don't build it. No shortcuts around PHI.",
    },
    {
      q: "Does it work with our practice management software?",
      a: "That's the first thing we check. We build around Dentrix, Eaglesoft, Open Dental, Curve and the other systems practices actually run, so recall lists, open slots and unscheduled treatment come straight from your live schedule — not a spreadsheet someone has to keep in sync by hand.",
    },
    {
      q: "My front desk already does all this. Why would we need it?",
      a: "Then you've got a great front desk, and this isn't here to replace them. It picks up the calls that hit voicemail at lunch and after close, and it works the recall and unscheduled-treatment lists they never get to between check-ins and insurance calls. Your team keeps every decision about who gets booked and when — they just stop losing the after-hours calls and the leftover lists.",
    },
    {
      q: "Will patients know they're not talking to a person?",
      a: "The goal is a smooth experience, not a trick. Messages carry your office name and tone, so they read like your front desk on a good day. And anything that needs a person — a nervous patient, a clinical question, an odd request — gets handed to your team instead of forced through a script.",
    },
    {
      q: "What actually happens in the free assessment?",
      a: "Thirty minutes, no pitch deck. We look at how calls come in, your recall list, and where treatment gets diagnosed but never scheduled — and you leave knowing your single biggest bottleneck and one specific fix, whether or not you ever work with us.",
    },
  ],

  finalCta: {
    headline: "Find the hour your practice is losing",
    body: "Book your free 30-minute assessment. We'll look at where production quietly slips out of your week — the cancellations nobody backfills, the recall list gone cold, the treatment that got diagnosed and never scheduled — and hand you one specific fix to start with. Free, thirty minutes, no obligation.",
  },

  scenario: {
    chipLabel: "Dental practice",
    sms: {
      initials: "MG",
      name: "Maria G.",
      phone: "(602) 555-0143",
      badge: "ASAP list fill",
      system: "**2:00 PM opened** · cleaning cancelled just now",
      messages: [
        {
          from: "business",
          text: "Hi Maria, it's Bright Smile Dental — a **2:00 PM today** just opened for your cleaning. You'd asked to get in sooner, so I grabbed it for you first. Want it?",
          time: "8:22 AM",
          note: "Sent by **Hybrid** · seconds after the cancel",
        },
        {
          from: "customer",
          text: "Yes! That's perfect, I've been meaning to get in.",
          time: "8:26 AM",
        },
        {
          from: "business",
          text: "Great — **2:00 PM** is yours, Maria. See you this afternoon with Dana.",
          time: "8:26 AM",
        },
      ],
    },
    digest: {
      title: "Good morning ☀️",
      body: "**$640** in hygiene kept on the books — 3 chairs refilled from the ASAP list, no gaps before lunch.",
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
            title: "Cleaning · Maria G.",
            sub: "refilled from the ASAP list by Hybrid at 8:26 AM",
            receipt: "Filled · $210 · Today 2:00 PM",
          },
        },
        { time: "3:30" },
      ],
    },
  },
};
