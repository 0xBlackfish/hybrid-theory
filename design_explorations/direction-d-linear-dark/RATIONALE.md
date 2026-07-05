# Direction D — "Linear School, Dark"

## The trust thesis
**Seeing it work beats being told it works.** A 35–65 owner-operator has been pitched
"AI" a hundred times and trusts none of it. Abstract illustration reads as vapor. So every
major section is anchored by a **rendered product artifact** — a real SMS thread answering a
7:52am missed call, a same-hour quote that gets approved, a five-star review that arrived on
its own. The page doesn't describe the outcome; it shows the receipt. The emotional read we're
aiming for: *"this is what my nights and weekends look like with this thing running."* The hero
digest card — "$3,200 booked while you slept" — is the whole promise in one screenshot.

## Tokens
- **Canvas:** warm near-black `#0A0B0D` / `#0D0E11` / `#101216` (deliberately warmer than
  Linear's coldest grays — this buyer isn't a developer).
- **Type:** Inter for everything (450–600 display, tight `-0.03em` tracking); **JetBrains Mono**
  for timestamps, prices, labels, stat readouts — the "engineered" metadata voice. Body runs
  larger than Linear (16–18px) because the buyer is 35–65 and phone-first.
- **Glass:** 1px inside borders at `rgba(255,255,255,.055–.14)`, barely-there panel fills
  (`~2–4%` white), radial glows placed **only behind UI artifacts** (hero, final CTA) — light
  has a source.
- **Accent — one, disciplined:** lime `#C8F55E` = money / success / "booked." It appears only
  on outcomes (dollar amounts, checkmarks, live dots, the booked calendar slot, CTA). A single
  functional blue `#2F6BF0` is reserved for *the AI's outgoing messages* — realistic messaging
  UI, never brand spray. Red appears once, for a missed call.
- **Radii/shadow:** 8/12/18/24px; floated artifacts get a deep `-30px` drop shadow so they read
  as screenshots, not CSS boxes.

## The "Pick your business" switcher — answering *"where's the value for ME?"*
The client's core question: *how do we show different customers what this looks like for THEM,
approachably?* The hero carries a plain-word chip row — **HVAC · Dentist · Roofer · Tutoring** —
that swaps the whole artifact composition to that trade's scenario (minimal vanilla JS, a small
per-trade data model, cascade replays on each switch so the change demonstrates itself). Crucially,
**every scenario ends in a visible receipt of value, never a claim in prose:**
- **HVAC:** 7:04 PM no-heat missed call → SMS thread → *"Job booked — $189"* on tomorrow's 8 AM slot.
- **Dentist:** a 2 PM cancellation → waitlist text → *"Chair refilled — $220 · 2:00 PM today."*
- **Roofer:** storm photos received → line-item quote assembles → *"Quote sent — $4,850 · same hour."*
- **Tutoring:** after-hours parent inquiry → *"New student — trial booked · Sat 10:00 AM."*
The buyer picks their trade and immediately sees their own night/weekend, handled.

## How the switcher generalizes to 11 vertical pages
The switcher *is* the mechanism: **same artifact components** (SMS thread, calendar slot, quote
line-item, morning digest, review card, stat readout), **per-vertical data**, reused as the **hero
of each `/for/` page** — `/for/hvac`, `/for/dentists`, `/for/roofers` each boot straight into their
own scenario, no bespoke design work. The kit is fixed; only the copy and world change:
- **Law practice:** intake-qualification thread → *"Consult booked — Fri 3:00 PM"* on the calendar.
- **Landscaping:** recurring self-booking → *"Season locked in — 6 visits · $1,140."*
  (Plumbing → emergency dispatch; Electrician → quote-to-approval; Med-spa → waitlist refill —
  all the same six artifacts, different data.)

## Kept from Linear / rejected for this buyer
**Kept:** the dark engineered canvas; product-forward storytelling (artifacts over icons);
mono metadata; extreme accent discipline; motion that *demonstrates* (the hero thread cascades
in once, ease-out ~460ms, staggered, no loops) rather than decorates; glass panels with a
light source.
**Rejected/tuned:** Linear's ice-cold grays → warmer neutrals; Linear's small 13–14px body →
16–18px; Linear's dev-tool artifacts (PRs, issues, cycles) → *their* world (plumbing
emergencies, roof quotes, AC tune-ups); Linear's density → more breathing room and plain human
language, because the buyer is hype-averse and reading on a phone between jobs. On mobile the
overlapping hero stack un-stacks into three readable, full-width artifacts rather than shrinking
off-screen.

**CTA everywhere:** "Book your free 30-minute assessment."
