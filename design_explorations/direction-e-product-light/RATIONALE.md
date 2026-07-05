# Direction E — Product-Forward, Light

**The bet:** Linear's magic isn't the dark glass — it's *showing the product working* instead of describing it. This direction keeps that visual-first storytelling and moves it onto a warm daylight canvas, because our buyer isn't a developer scrolling a dev-tool site at 11pm. He's a 47-year-old roofing owner checking his phone between jobs.

## Trust thesis
The owner-operator is hype-averse and has been sold "AI" before. Abstract claims raise his guard; *artifacts lower it.* Every section is anchored by a rendered piece of the AI's actual work — an SMS thread answering a 7:52am missed call, a quote with real line items, a calendar slot filling in. The read is not "we do automation," it's "**this is what my nights and weekends look like with this thing running.**" Light + warm neutrals signal a small, trustworthy local partner, not a venture-funded platform. Dark can read as slick/salesy to this buyer; daylight reads as honest.

## Tokens
- **Canvas** `#FAF8F1` warm off-white · recessed `#F3F0E7`
- **Ink** `#171D18` · secondary `#3B443C` · muted `#6B746C`
- **Accent (one, disciplined):** lime `#B9FF35` as *fills-with-dark-text only* (buttons, highlights, "just added" pills); deep green `#3E7B27` for accent *text*. Never lime text on light.
- **Surfaces:** pure white cards, hairline borders (`#ECEAE3`), four layered soft-shadow tiers (`--sh-1`→`--sh-4`) so artifacts sit as crisp elevated "product shots."
- **Type:** Inter only, no serif — tight display tracking (`-.033em`) on the hero, larger body (17px vs Linear's 14) for a 35–65 phone-first reader.
- **Motion:** one restrained cascade — hero SMS messages rise in, ease-out, once on load (and re-played when you switch industries, since fresh nodes re-trigger the keyframes). No loops.

## The industry switcher — "I run a…"
Attached to the hero composition is a plain-language chip row — "I run a…" Roofing company · HVAC company · Dental practice · Tutoring company. Clicking one swaps all three hero artifacts to that trade's scenario: the SMS thread, the morning digest, and the value card re-render from a per-vertical data object, the SMS cascade replays, and the digest + value card fade in so the swap feels effortless. Approachable words with a trade icon, not tech tabs; the active chip goes ink-dark with a lime mark to tie back to brand.

**Every scenario ends in a visible receipt of value**, shown as an outcome and never claimed in prose. The value card is one of two variants depending on the trade's money moment — a **calendar** (a filled slot + lime receipt) or a **quote** (an itemized estimate + lime receipt):
- **Roofing company** — photos received → line-item quote assembling → sent same hour → *"Sent · $6,450 · 2:31 PM · same hour."*
- **HVAC company** — 7pm no-heat missed call → SMS thread → *"Booked · $289 · Wed 8:00 AM."*
- **Dental practice** — 2pm cancellation → waitlist text → *"Filled · $1,800 · Today 2:00 PM."*
- **Tutoring company** — after-hours parent inquiry → SMS → *"Booked · Sat 10:00 AM · assessment."*

**How it generalizes:** the switcher is a tiny set of artifact renderers (`renderSMS` / `renderDigest` / `renderValue`, where `renderValue` dispatches to `renderCal` or `renderQuote`) fed different data — exactly the mechanism each `/for/[trade]` page needs. A vertical page reuses this composition as its hero with that trade's data object pre-selected; the switcher can stay (cross-sell: "not your trade? see another") or be dropped for a fixed hero. One engine, one data file per vertical, eleven heroes. Adding a fifth trade is a data object, not a redesign.

## How the artifacts scale to 11 vertical pages
The system is a **kit of light product cards + a dark focal card**, re-skinned per trade — same components, different copy/timestamps. Two examples:

1. **Dentist page.** Hero SMS becomes the front desk: "Sorry we missed you — is this a toothache or a cleaning?" → digest card reads "$1,800 in new patients booked overnight, 3 recalls filled." Quote artifact becomes a treatment-plan estimate (crown, x-rays); calendar fills a hygiene slot. Zero new components.
2. **HVAC page.** SMS answers a no-heat emergency at 6am; quote artifact itemizes a capacitor + service call; the win-back card becomes a seasonal tune-up nudge ("furnace check before winter"). Reviews and levers stat-readouts stay identical, numbers swapped.

Because each artifact is HTML/CSS (not an image), a vertical page is a content edit, not a redesign — the shadow/border/type system guarantees they all look like the same product.

## The honest case: light vs. dark for THIS buyer
Dark Linear-school looks premium *to people who admire Linear* — engineers and designers. Our buyer isn't that person. On a phone in daylight, light UI is what he already trusts (his messages, his calendar, his invoices are all light). Dark can tip into "expensive tech vendor" — exactly the vibe that makes him brace for a pitch. **Light keeps the visual-first storytelling that impressed the client while speaking his native visual language.** The sibling dark direction proves the aesthetic; this one tests whether the *storytelling* — not the darkness — is the real lever. If artifacts convert here, we know it was never about the glass.
