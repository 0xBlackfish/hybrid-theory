import type { VerticalContent } from "./types";

export const tutoring: VerticalContent = {
  slug: "tutoring",
  label: "Tutoring Companies",
  navLabel: "Tutoring",
  accent: "#A78BFA",
  metaTitle: "AI for tutoring centers — answer the Sunday-night parent first",
  metaDescription:
    "Reply to the worried parent before the center down the road does, backfill the 4pm no-show, and re-enroll families between semesters. Quiet AI help — you keep every call.",

  hero: {
    eyebrow: "AI for tutoring centers",
    headline: "The parent who emails Sunday night picks whoever answers first",
    lead: "A bad report card comes home, and Sunday night three centers get the same worried email. The one that writes back first usually gets the enrollment. We quietly answer that inquiry while it's warm, backfill the sessions that fall through, and nudge families who quietly stopped coming — so your director isn't the bottleneck.",
  },

  stakes: {
    headline: "The inquiry comes in warm. Then it cools.",
    body: "A parent who reaches out about a struggling kid is anxious and ready to act — but only for a day or two. By Tuesday they've booked with whoever replied first, and your center never hears back. Meanwhile the 4pm no-show, the family that never re-enrolled after finals, and the intake you meant to schedule are all money that left without a sound.",
    stats: [
      {
        value: "First reply",
        label:
          "A worried parent emailing several centers usually enrolls with the one that answers first",
      },
      {
        value: "5 minutes",
        label:
          "Leads contacted within five minutes are far more likely to convert than those left an hour — widely reported across inbound sales research",
        source: "Harvard Business Review",
      },
      {
        value: "Empty seat",
        label:
          "A 4pm no-show is a tutor paid, a seat held, and a session you usually can't rebill",
      },
    ],
  },

  opportunities: [
    {
      icon: "speed",
      title: "Answer the Sunday-night inquiry before a person is free",
      body: "A parent fills out the form at 9pm after a rough report card, and your director doesn't see it until Monday afternoon. Instead, the inquiry gets a warm, personal reply within minutes — questions answered, an assessment offered — so you're the center that responded, not the one they gave up on.",
    },
    {
      icon: "noshow",
      title: "Backfill the 4pm that just cancelled",
      body: "A parent texts at 2pm that Emma can't make her 4:00, and the tutor sits idle while the seat goes cold. The open slot is quietly offered to families on the waitlist or wanting an earlier time, so a cancellation turns back into a booked session.",
    },
    {
      icon: "winback",
      title: "Re-enroll the families who quietly lapsed",
      body: "After finals a handful of families just stop booking — not unhappy, just busy, and nobody had time to follow up. Those students get a gentle, personal nudge to come back for the next semester, and the ones who respond land back on your schedule.",
    },
    {
      icon: "intake",
      title: "Turn the assessment into a scheduled first session",
      body: "The intake conversation stalls in phone tag between parent, student, and the right tutor. Scheduling gets handled in the background — availability matched, reminders sent — so the assessment actually happens instead of drifting for a week.",
    },
    {
      icon: "referrals",
      title: "Ask for the referral right after the grade goes up",
      body: "A student's math grade jumps from a C to a B and the parent is thrilled — for about a week. That's the moment a simple, well-timed ask goes out, so the parents in their group chat hear about you instead of the franchise across town.",
    },
  ],

  demoFlow: "noshow",
  demoIntro:
    "Watch a 4pm cancellation turn back into a booked session — before your front desk even looks up from check-in.",

  faq: [
    {
      q: "Parents expect a human touch. Won't automation feel cold?",
      a: "The fast, warm first reply is the human touch parents remember. When a scared parent writes at 9pm and hears back in minutes — by name, in your center's voice — that feels like being cared for, not processed. The moment the conversation needs real judgment, a tricky question about their kid, an unusual schedule, it lands with your team, not a script.",
    },
    {
      q: "Every kid is different. Can this handle real conversations about a child?",
      a: "It isn't meant to. It handles the repeatable parts — the first reply, the reminder, the reschedule, the re-enrollment nudge — so your director spends their time on the conversations that actually shape a student's plan. Anything about how a child learns or where to place them goes straight to a person.",
    },
    {
      q: "Does it work with the scheduling and CRM software we already use?",
      a: "That's the first thing we check. We build around the booking and student-management tools centers actually run, so waitlists and open slots come from your real schedule — not a separate spreadsheet your front desk has to keep in sync.",
    },
    {
      q: "Our front desk is already slammed in September. Is this one more thing to manage?",
      a: "It's meant to take work off the desk during exactly those weeks, not add a dashboard to babysit. The routine replies, reminders, and re-enrollment follow-ups get handled quietly in the background, and your team steps in only when a parent needs a person. You keep every call about who enrolls and when.",
    },
    {
      q: "What actually happens in the free assessment?",
      a: "Thirty minutes, no pitch deck. We look at how inquiries come in, how sessions get booked and cancelled, and where families drop off between semesters — and you leave knowing your single biggest bottleneck and one specific fix, whether or not you ever work with us.",
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
          text: "We've got you — finals pressure in Algebra II is something our specialists see every semester. I can book her a **free assessment Saturday 10:00 AM** to find exactly where she's getting stuck. Sound good?",
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
