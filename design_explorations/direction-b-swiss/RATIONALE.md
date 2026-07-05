# Direction B — Swiss Clarity / Premium Print

## The trust thesis

The buyer is an owner-operator, 35–65, phone-first, burned before by software that
overpromised. They don't trust enthusiasm; they trust evidence. So the page is built
to *look like it keeps books* — precise, quiet, accountable. Whitespace is the luxury
signal; a disciplined grid is the competence signal; tabular numbers that add up are
the honesty signal. The design says one thing over and over: **this company is precise,
and precision is exactly what you're buying.** No autonomous motion, because motion reads
as a sales pitch. State changes only — the page behaves like a tool, not an ad.

The hero's strongest asset — concreteness — is expressed as **information design, not a
phone mockup**. The "$3,200 booked while you slept" and the "7:52am missed call → dispatched
job" become a *ledger of the night*: timestamped rows, right-aligned tabular amounts, a
running total in a committed forest footer. A ledger is the native document of a business
owner's trust. It out-argues a glossy phone: numbers that foot are more persuasive than a
render. (I rejected the phone deliberately — see below.)

## The system (tokens)

**Type — one grotesque, Archivo (Google Fonts).** Everything is weight and scale.
Archivo has a Swiss-neutral-but-editorial character and genuine tabular figures (`tnum`),
which the whole design leans on for ledgers, indices, and lever numerals.
- Display / hero: 700, tracking −0.035em, leading 1.005, optical measure ~24ch on the headline.
- Section H2: clamp(28→44px), 700, −0.03em.
- Body: 17px, 400, leading 1.55, measure capped at 46–54ch.
- Eyebrow / labels: 11–12px, 600–700, uppercase, tracking 0.15–0.19em.
- All data: `font-variant-numeric: tabular-nums`.

**Color — paper + one committed accent.**
```
--paper   #F3F1EA   canvas (warm near-white / paper stock)
--paper-2 #FBFAF6   raised surfaces (ledger, cards)
--ink     #14201B   text (near-black, faintly forest)
--ink-2   #566159   secondary / body
--ink-3   #8B928A   faint labels
--forest  #0E3B2E   THE accent — footer, CTA, indices, rules
--lime    #B9FF35   survives ONLY as a tiny mark (never a surface)
--rule    #D7D4C8   hairline
```
Forest green is the one deep, serious accent — it carries buttons, the ledger total, the
final panel, and the lever rules. Lime #B9FF35 appears only as an 8px square before each
eyebrow and on the two "total" ticks: a wink to the old identity, never a surface.

**Spacing — 8px base, one grid.** Container 1180px, fluid gutter `clamp(20→64px)`,
section rhythm `--sec-y: clamp(72→148px)`. Sections, catalog, and levers all share visible
hairline grids so the underlying structure is *seen*, Vignelli-style.

## Kept vs. rejected from the dark "cyber lime" identity

**Kept:** the concreteness (real dollar amounts, real moments, the overnight framing); the
lime, demoted to a 1% accent mark; the real copy verbatim (levers, tile titles/bodies, the
"no slides, no commitment" line, "the one change that would pay for itself the fastest").

**Rejected & why:** (1) The near-black canvas and neon glows — they read "crypto landing
page," the buyer's exact anti-signal; flipped to paper. (2) The phone mockup — a render is a
promise; a footing ledger is proof. (3) All autonomous motion — the auto-flipping tiles and
drifting auroras undercut the "precise and calm" claim; the catalog is now static, revealed
only on hover. (4) The seven rotating rainbow accents — replaced by one committed forest, so
color *means* something instead of decorating.

## How this scales to 11 vertical pages

The system is a kit, not a composition. A vertical page (Roofing, Dental, HVAC…) reuses the
same tokens and swaps only *content*: the hero ledger becomes that trade's night (a roofer's
storm-driven missed calls; a dental practice's after-hours booking requests), the eyebrow
reads "AI for roofers," and the numbered catalog re-curates 6 of the 20+ tiles most relevant
to that trade — the grid, type, and rules never change. Because the identity lives in
structure (hairline grid, tabular ledger, one accent) rather than imagery, 11 pages stay
unmistakably one brand while each proves it knows *that* trade — which is the whole trust play
for a buyer who only buys from people who understand their work.
