import type { VerticalContent } from "./types";

export const tutoring: VerticalContent = {
  slug: "tutoring",
  label: "Tutoring Companies",
  navLabel: "Tutoring",
  accent: "#A78BFA",
  metaTitle: "AI for tutoring centers — answer the Sunday-night parent first",
  metaDescription:
    "Reply to the worried parent before the center down the road does, backfill the 4pm no-show, and re-enroll families between terms. Quiet AI help — you keep every call.",

  hero: {
    eyebrow: "AI for tutoring centers",
    headline: "The parent who emails Sunday night picks whoever answers first",
    lead: "A rough report card comes home, and by Sunday night three centers have the same worried email in their inbox. The one that writes back first usually books the assessment. We answer that inquiry while it's still warm, backfill the sessions that fall through, and reach back out to families who quietly stopped coming — so your director isn't the bottleneck.",
  },

  stakes: {
    headline: "The inquiry comes in warm. Then it cools.",
    body: "A parent reaching out about a struggling kid is anxious and ready to act — but only for a day or two. By Tuesday they've booked an assessment with whoever replied first, and you never hear back. Meanwhile the 4:00 no-show, the family that never renewed after finals, and the intake still stuck in phone tag are all money leaving without a sound.",
    stats: [
      {
        value: "7×",
        label:
          "Reach an inbound inquiry within the hour and you're roughly 7× more likely to qualify it than waiting even an hour longer",
        source: "Harvard Business Review, 2011",
      },
      {
        value: "Paid twice",
        label:
          "A 4:00 no-show is the tutor still on the clock and the seat held — a session you usually can't rebill",
      },
      {
        value: "Between terms",
        label:
          "The families who lapse after finals were rarely unhappy — they just drifted, and nobody had time to reach back out",
      },
    ],
  },

  opportunitiesHead: {
    headline: "Full rosters. Families who stay. Grades that move.",
    sub: "None of this is a new platform to run. It's the handful of everyday moments — the first reply, the reschedule, the re-enrollment — handled well, so your director spends their time on students instead of chasing them.",
  },

  opportunities: [
    {
      icon: "speed",
      title: "Answer the Sunday-night inquiry before a person is free",
      body: "A parent fills out the form at 9pm after a bad report card, and nobody sees it until Monday afternoon. Instead, that inquiry gets a warm, personal reply in minutes — questions answered, a free assessment offered — so you're the center that responded, not the one they gave up on.",
    },
    {
      icon: "noshow",
      title: "Backfill the 4:00 that just cancelled",
      body: "A parent texts at 2:00 that Emma can't make her 4:00, and the tutor sits idle while the seat goes cold. The open slot is quietly offered to families on the waitlist or wanting an earlier time — so a cancellation turns back into a booked session.",
    },
    {
      icon: "winback",
      title: "Re-enroll the families who quietly lapsed",
      body: "After finals a handful of families just stop booking — not unhappy, just busy, and no one had time to follow up. Those students get a gentle, personal nudge to renew for the next term, carrying the progress they actually made, and the ones who reply land back on the schedule.",
    },
    {
      icon: "intake",
      title: "Turn the assessment into a booked first session",
      body: "The intake stalls in phone tag between parent, student, and the right tutor. Scheduling gets handled in the background — availability matched, a session pack set up, reminders sent — so the assessment actually turns into a standing spot instead of drifting for a week.",
    },
    {
      icon: "referrals",
      title: "Ask for the referral right after the grade goes up",
      body: "A student's math grade jumps from a C to a B and the parent is thrilled — for about a week. That's the moment a simple, well-timed ask goes out, so the parents in their group chat hear your name instead of the franchise across town.",
    },
  ],

  spotlight: {
    headline: "The families who drift away between terms — caught, and kept.",
    intro:
      "Every term ends the same way: a few families quietly don't rebook. No cancellation, no complaint — they just stop showing up on next term's schedule. Here's that week, worked start to finish.",
    name: "Re-enrollment week, handled",
    context: "BrightPath Tutoring · end of fall term",
    rail: ["Term ending", "Who's drifting", "Pull the progress", "Warm the renewal", "Spring pack booked"],
    beats: [3000, 3200, 3400, 3800, 3200],
    receipt: "Re-enrolled · spring pack · same tutor, same time",
    cards: [
      {
        pos: "a",
        at: 0,
        title: "END OF TERM · NOT REBOOKED",
        kind: {
          type: "checklist",
          header: "Fall term ends Friday",
          items: [
            { label: "Maya R. · Algebra II", tag: "3 wks since last" },
            { label: "Ethan P. · Reading", tag: "pack ended" },
            { label: "Sofia D. · SAT prep", tag: "finals done" },
            { label: "Liam T. · Geometry", tag: "2 wks since last" },
          ],
          footer: "7 families drifting — no cancellation, just quiet",
        },
      },
      {
        pos: "b",
        at: 2,
        title: "PROGRESS · MAYA R.",
        kind: {
          type: "scorecard",
          rows: [
            { label: "September baseline", value: "C+" },
            { label: "This week", value: "B+" },
            { label: "Sessions this term", value: "18" },
            { label: "Attendance", value: "94%" },
          ],
          footer: "One term, one full letter grade.",
        },
      },
      {
        pos: "c",
        at: 3,
        title: "RE-ENROLL · SARA R.",
        kind: {
          type: "sms",
          sms: {
            initials: "SR",
            name: "Sara R.",
            phone: "(408) 555-0137",
            badge: "Re-enroll",
            system: "**Term ends Friday** · Maya not yet rebooked",
            messages: [
              {
                from: "business",
                text: "Hi Sara — Maya finished the term strong. She started in September at a C+ in Algebra II and wrapped this week at a **B+**. We'd love to keep that going into spring.",
                time: "4:12 PM",
                note: "Sent by **Hybrid** · with Maya's progress",
              },
              {
                from: "customer",
                text: "That's so good to hear — she's been way more confident. Yes, let's keep her going.",
                time: "5:48 PM",
              },
              {
                from: "business",
                text: "Wonderful. I've got her same **Tuesday 4:00 with Mr. Okafor** held for spring — a 10-session pack. Want me to lock it in?",
                time: "5:49 PM",
              },
              { from: "customer", text: "Yes please, thank you!", time: "5:50 PM" },
              {
                from: "business",
                text: "Done ✓ Spring pack booked — same tutor, same time. I'll email the receipt tonight.",
                time: "5:50 PM",
              },
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
            title: "Re-enrollments this week",
            body: "**8 families** renewed for spring — every one caught before they drifted off the schedule.",
            stats: [
              { value: "8", label: "RE-ENROLLED" },
              { value: "0", label: "LAPSED QUIETLY" },
              { value: "3", label: "TUTORS' HOURS HELD" },
            ],
          },
        },
      },
    ],
  },

  faq: [
    {
      q: "Parents expect a human touch. Won't automation feel cold?",
      a: "The fast, warm first reply is the human touch parents remember. When a scared parent writes at 9pm and hears back in minutes — by name, in your center's voice — that feels like being cared for, not processed. The moment the conversation needs real judgment, a tricky question about their kid or an unusual schedule, it lands with your team, not a script.",
    },
    {
      q: "Does it work with the software we already run?",
      a: "That's the first thing we check. Whether you're on TutorBird, Teachworks, or honestly just a Google Sheet and a shared calendar, we build around it — so waitlists, open slots, and session packs come from your real schedule, not a second system your front desk has to keep in sync.",
    },
    {
      q: "Can it keep parents in the loop on how their kid is doing?",
      a: "It handles the cadence — the session recap, the end-of-term summary, the check-in a parent would otherwise have to ask for — pulled from what your tutors actually logged. It doesn't invent progress or grade a student. The substance comes from your tutors; we just make sure it reaches the parent on time instead of slipping through the cracks.",
    },
    {
      q: "Matching the right tutor is the whole job. This won't try to do that, will it?",
      a: "No — and it shouldn't. Deciding who a student learns with, and how, is exactly the work your director should own. This handles everything around that call: booking the assessment, setting up the pack, scheduling around the match, sending the reminder. Anything about how a child learns goes straight to a person.",
    },
    {
      q: "What actually happens in the free assessment?",
      a: "Thirty minutes, no pitch deck. We look at how inquiries come in, how sessions get booked and cancelled, and where families drop off between terms — and you leave knowing your single biggest bottleneck and one specific fix, whether or not you ever work with us.",
    },
  ],

  finalCta: {
    headline: "See where the enrollments slip away",
    body: "Book your free 30-minute assessment. We'll find the one place your center is quietly losing families — a Sunday-night inquiry that waited too long, no-shows nobody backfills, students who never re-enrolled — and give you one specific fix to start with. Free, thirty minutes, no obligation.",
  },

  scenario: {
    chipLabel: "Tutoring company",
    sms: {
      initials: "DL",
      name: "David Lin",
      phone: "(408) 555-0119",
      badge: "After-hours",
      system: "**New inquiry** · Today 9:41 PM",
      messages: [
        {
          from: "business",
          text: "Hi, this is BrightPath Tutoring — thanks for reaching out! Which subject and grade are we helping with?",
          time: "9:41 PM",
          note: "Sent by **Hybrid** · 9 sec after the form",
        },
        {
          from: "customer",
          text: "My daughter's in Algebra II, really struggling before finals",
          time: "9:43 PM",
        },
        {
          from: "business",
          text: "We've got you — finals pressure in Algebra II is something our tutors see every term. I can book her a **free assessment Saturday 10:00 AM** to find exactly where she's getting stuck. Sound good?",
          time: "9:43 PM",
        },
        { from: "customer", text: "That would be wonderful, thank you", time: "9:44 PM" },
        {
          from: "business",
          text: "Booked ✓ Saturday 10:00 AM. We'll email a quick pre-assessment tonight.",
          time: "9:44 PM",
        },
      ],
    },
    digest: {
      title: "Good morning ☀️",
      body: "**6 new families** booked assessments overnight. Not one inquiry left waiting.",
      stats: [
        { value: "6", label: "ASSESSMENTS" },
        { value: "0", label: "MISSED" },
        { value: "9s", label: "AVG REPLY" },
      ],
    },
    value: {
      kind: "calendar",
      dayOfWeek: "Saturday",
      date: "Nov 9",
      addedLabel: "JUST ADDED",
      slots: [
        { time: "9:00" },
        {
          time: "10:00",
          booking: {
            title: "Free assessment · Algebra II",
            sub: "David Lin · booked by Hybrid at 9:44 PM",
            receipt: "Booked · Sat 10:00 AM · assessment",
          },
        },
        { time: "11:30" },
      ],
    },
  },
};
