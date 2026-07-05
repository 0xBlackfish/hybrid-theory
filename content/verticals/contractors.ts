import type { VerticalContent } from "./types";

export const contractors: VerticalContent = {
  slug: "contractors",
  label: "Contractors",
  navLabel: "Contractors",
  accent: "#B9FF35",
  metaTitle: "AI for general contractors & remodelers — get the estimate out same-day",
  metaDescription:
    "Stop writing proposals at 10pm and losing bids you had no time to answer. A quiet helper drafts the estimate, chases the paperwork, and follows up — you approve every number.",

  hero: {
    eyebrow: "AI for contractors & remodelers",
    headline: "The proposal you'd write at 10pm, drafted by dinner",
    lead:
      "You were on site all day, and the estimate is still in your head at the kitchen table. A quiet helper drafts it from your past proposals and pricing, sends the follow-up you'd have forgotten, and chases the documents the sub never sent — while you approve every number and keep every judgment call.",
  },

  stakes: {
    headline: "The job goes to whoever got their number out",
    body:
      "A homeowner gets three bids and picks from the ones that actually showed up on time. A quote that lands the same hour hits different than one that takes three days — but you're framing a wall, not sitting at a desk, so the good bid waits until you're too tired to write it. None of it feels like a lost job until you tally the season.",
    stats: [
      {
        value: "First",
        label: "The contractor who gets the estimate back first usually wins the job",
      },
      {
        value: "78%",
        label: "of buyers go with the business that responds first",
        source: "Harvard Business Review, \"The Short Life of Online Sales Leads\"",
      },
      {
        value: "3",
        label: "bids a homeowner typically collects — the slow one rarely makes the cut",
      },
    ],
  },

  opportunities: [
    {
      icon: "quote",
      title: "Get the estimate out while they still remember your name",
      body:
        "You walked the job, gave a ballpark, said you'd send the real number over. Two days later it's still on a napkin in the truck. The helper drafts it that afternoon with your pricing, so it's in their inbox before the next contractor's van pulls up.",
    },
    {
      icon: "proposal",
      title: "Stop writing proposals after a full day on the tools",
      body:
        "The detailed proposal is the one you keep pushing to 10pm and then 11. The helper builds the first draft from your past proposals — scope, line items, your standard terms — so you're editing and approving numbers instead of starting from a blank page at the kitchen table.",
    },
    {
      icon: "bid",
      title: "Answer the bid with real money on it before it closes",
      body:
        "An RFP lands with a Friday deadline and a five-figure job attached, and you know a rushed bid loses it. The helper pulls your relevant past work and pricing into a clean first response, so a job worth going after doesn't get a two-line email because you ran out of night.",
    },
    {
      icon: "abandoned",
      title: "Follow up on the lead you meant to call back",
      body:
        "The homeowner who filled out your form is comparing three of you, and picks whoever stayed in touch. The helper sends the check-in you'd have forgotten by Friday — warm, in your voice — so the ones you'd have lost to silence stay in play.",
    },
    {
      icon: "docs",
      title: "Chase the documents and change orders that stall the job",
      body:
        "The sub never sent the certificate of insurance, the homeowner never signed the change order, and now the schedule's slipping and nobody wrote it down. The helper does the polite chasing — the reminders, the missing paperwork — so the job keeps moving without you playing collections all week.",
    },
    {
      icon: "invoice",
      title: "Get paid before you're floating another job's materials",
      body:
        "You already fronted the lumber and the fixtures, and the invoice from three weeks back is still sitting there. The helper sends it the day the work wraps, then the gentle nudge after — so you're paid on this job's money, not carrying it into the next one.",
    },
  ],

  demoFlow: "quote",
  demoIntro:
    "Here's the estimate you'd normally send at 10pm — drafted from your pricing and out the door the same afternoon, before the homeowner takes the next bid.",

  faq: [
    {
      q: "My bids are custom. Every job is different — this can't quote for me.",
      a: "It doesn't set your prices, and it never invents a number. It drafts from your own past bids, your line items, and your pricing, then hands it to you to check. You approve every figure and every scope line before anything goes out — you're editing a smart first draft instead of writing from scratch at 10pm.",
    },
    {
      q: "Won't a homeowner know they're dealing with a machine?",
      a: "It writes in your voice and hands off to you the moment a conversation needs a real person — a design question, a price negotiation, a tricky site. Most homeowners just want a fast, straight answer and a proposal that shows up when you said it would. That's what they get, instead of your voicemail.",
    },
    {
      q: "I'm a small shop — me, a couple guys, maybe a bookkeeper. Is this overkill?",
      a: "Small shops feel the leak hardest. There's no office manager catching the follow-ups while you're on a roof, so the bids and the paperwork wait until you're off the clock and worn out. This is the back-office help you can't justify hiring full-time, working every hour you can't be at a desk.",
    },
    {
      q: "How does it know my pricing without me re-entering everything?",
      a: "It learns from what you already have — past proposals, your rate sheet, the jobs you've quoted before. In the assessment we look at how you price today and where your numbers live, then set it up to draft the way you already work. It doesn't ask you to rebuild your business in some new system.",
    },
    {
      q: "I don't have time to babysit another tool.",
      a: "That's the point of it — it runs in the background and does the repetitive part: drafting the estimate, sending the follow-up, chasing the missing document. You get a clean summary and only step in for the calls that actually need you. It's meant to take work off your plate, not add a screen to check.",
    },
  ],

  finalCta: {
    headline: "Find the bids you're losing after dark",
    body:
      "Book your free 30-minute assessment. We'll look at where jobs slip — the slow estimate, the follow-up that never went out, the invoice aging while you float materials — and you'll leave with your single biggest bottleneck named and one specific fix. No pitch, no obligation.",
  },

  scenario: {
    chipLabel: "Remodeling company",
    sms: {
      initials: "TW",
      name: "Tom Walsh",
      phone: "(303) 555-0164",
      badge: "Same-day estimate",
      system: "**Site walk done** · Today 3:38 PM",
      messages: [
        {
          from: "customer",
          text: "Thanks for coming by — can you send over the number for the deck?",
          time: "3:38 PM",
        },
        {
          from: "business",
          text: "Absolutely, Tom. Pulling your measurements and my cedar pricing now — I'll have the full estimate to you within the hour.",
          time: "3:41 PM",
          note: "Sent by **Hybrid** · drafting from your past bids",
        },
        {
          from: "business",
          text: "Here's your estimate — **$18,200** for the cedar deck, good for 30 days. Want me to pencil in a start week?",
          time: "4:12 PM",
        },
        { from: "customer", text: "Looks good — let's move forward", time: "4:20 PM" },
      ],
    },
    digest: {
      title: "Good morning, Matt ☀️",
      body: "**$34,600** in estimates out the door yesterday — none left waiting for a late-night write-up.",
      stats: [
        { value: "3", label: "ESTIMATES SENT" },
        { value: "0", label: "WAITING" },
        { value: "38m", label: "AVG TURNAROUND" },
      ],
    },
    value: {
      kind: "quote",
      company: "Walsh Remodeling · Estimate",
      sentStamp: "Sent 4:12 PM",
      photoCount: 2,
      lineItems: [
        { label: "Demo & footings", amount: "$2,400" },
        { label: "Cedar framing & decking (320 sq ft)", amount: "$9,800" },
        { label: "Railing & stairs", amount: "$3,200" },
        { label: "Permits & finish", amount: "$2,800" },
      ],
      total: "$18,200",
      receipt: "Sent · $18,200 · 4:12 PM · same day",
    },
  },
};
