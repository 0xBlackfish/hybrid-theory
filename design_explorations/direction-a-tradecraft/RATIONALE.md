# Direction A — Trade Craft / Editorial

*A trade journal did a feature on running a calmer business.*

## The trust thesis

The buyer is an owner-operator, 35–65, phone-first, burned before by software that
overpromised. They do not trust "AI." They trust **people who understand their trade**,
and their instinct for who's real is tuned by specificity, calm, and craft. So the design
argues its case the way a good field manual or a Monocle feature does: it looks *made*, not
*deployed*. Every signal says "a careful human is behind this business" — which is the exact
promise the product makes (one real person on your account, built around how you already work).

The anti-signals we deliberately avoid — neon, gradient glow, autonomous motion, jargon —
are the tells of the software that burned them. Removing those *is* the pitch. The page has
**zero autonomous motion**; nothing blinks for attention because a calm business doesn't.

## What we kept vs. rejected from the current "cyber lime" identity

**Kept**
- **The copy** — it's genuinely good: concrete, plain-spoken, outcome-first. Reused verbatim.
- **The lock-screen notification idea** — a business's results *arriving as news*. Too strong to
  drop, so it's **reinterpreted**: the phone becomes *The Morning Brief*, a printed dispatch with
  hairline rules and monospace figures. Same "$3,200 booked while you slept" gut-punch, told in
  print, not in a device mock. It survives the translation because the idea was never about the phone.
- **The three levers and the six everyday moments** — the real spine of the argument.

**Rejected**
- **Dark canvas + `#B9FF35` lime + aurora glows** — reads as a crypto/SaaS launch page, the precise
  aesthetic that has burned this buyer. It performs "tech," and performing tech is a trust *cost* here.
- **Flipping/auto-rotating tiles** — motion competes with the "calm" promise. Our tiles are static
  field-manual entries; the only movement is a hover rule-tick.
- **Neon multi-accent palette** (7 rotating accents) — replaced by a single warm spot color used
  the way a printer rations one ink.

## Type system

| Role | Face | Notes |
|---|---|---|
| Display / headlines | **Fraunces** (opsz, 500) | A true editorial serif with optical sizing — set large it does the "expensive print" work; italics carry emphasis (`grow your business`). |
| Reading / body | **Newsreader** (opsz) | Screen-tuned serif; warm, high-legibility on a phone. Italic used for the human "signature" voice. |
| Meta / labels / figures | **IBM Plex Mono** | The printer's spec-sheet voice: eyebrows, small-caps rules, `№ 01` indices, dollar figures. A monospace makes numbers feel *ledgered* and trustworthy. |

Type is set with real editorial care: measure capped at ~44–62ch for reading, `-0.02em` tracking on
large display, 1.5–1.62 leading, headlines optically sized. Emphasis is italic, never bold-neon.

## Color

```
--paper     #F1EBDC   warm cream stock (the page)
--paper-hi  #F7F2E6   lighter inset / card face
--ink       #20241E   near-black warm ink (text)
--forest    #223D33   deep forest — the one dark "feature spread"
--spot      #B15A1C   burnt amber — the single spot color
--spot-deep #8C4614   pressed state / figures
--rule      rgba(32,36,30,.20)   hairline ledger rules
```

One warm accent, rationed like spot ink: a registration tick before each eyebrow, the CTA, the
index numbers, the hover rule-tick, and the lever numerals on the dark spread. That discipline is
the point — restraint reads as confidence. The lone dark section (the three levers) proves the
identity has a "dark mode" that is *warm forest*, not cyber — range without betraying the thesis.

## Spacing & structure tokens

```
--edge   clamp(1.25rem, 5vw, 5.5rem)   generous page margins
--maxw   1240px                        content frame
--measure 62ch                         reading measure
```

Layout is built on **hairline ledger rules and borders**, not cards-with-shadows: the Opportunity
grid is a single ruled table of six entries; sections open with a rule + a monospace index caption.
Photography is present as a first-class part of the identity via clearly-labeled duotone stand-ins
(`Photo — owner on a job site, morning light`) with printer's crop-mark corners — the direction
*shows* that real, warm human imagery belongs here, not stock-gloss or 3D renders.

## How it scales to 11 vertical pages

The system is built from a small kit of parts that recombine, so a roofer's page and a dental
practice's page share DNA but never feel templated:

1. **Swap the spot ink per trade** (amber → clay, slate-blue, olive) while paper + ink stay fixed —
   instant vertical identity, one variable.
2. **The Morning Brief is data-driven** — same dispatch component, trade-specific figures
   ("$3,200 in new work" → "3 new patients booked overnight").
3. **Opportunity entries are a ruled list** — show the 6 that matter to *that* trade from the 22 in
   the real `OPP_IDEAS` set; the grid never breaks.
4. **Photo slots are labeled placeholders** — each vertical drops in its own real imagery
   (attic, chairside, job site) with zero layout change.
5. **The dark lever spread is universal** — the three levers are trade-agnostic and anchor every page.

One page, eleven honest variations — the way a magazine runs a recurring feature.
