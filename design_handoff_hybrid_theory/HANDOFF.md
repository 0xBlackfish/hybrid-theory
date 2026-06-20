# Hybrid Theory — Handoff for Engineering

This is a hi-fi wireframe of the Hybrid Theory marketing site. The intent is for an engineer (you, Claude Code, or another human) to take this as a fully-designed reference and rebuild it on a real stack (likely Next.js + MDX). Everything in this repo is *design-truth* — pixel-accurate, copy-finalized, structurally complete — but the implementation is a hand-rolled React-via-Babel prototype meant to be replaced.

This document explains what's in the repo, how it's organized, the design conventions, and what to do with each piece.

---

## What's here

| File | Role |
|---|---|
| `index.html` (and `Home v2.html`) | Home page |
| `services.html` | Services page (Automation & Tools, Strategy, Training) |
| `about.html` | About page (Why we exist, principles, words we don't use, where we've been) |
| `insights.html` | Blog landing (newsletter-led hero + Stripe-style article list) |
| `archive.html` | Paginated full archive of blog posts |
| `article.html` | Individual blog post template — **essay** body example |
| `article-case.html` | Individual blog post template — **case study** body example |
| `contact.html` | Contact page — Calendly inline embed + message form |
| `calendly.js` | Calendly popup wiring — single URL constant, delegated click handler |
| `styles.css` | All styles — design tokens (CSS variables), components, page-specific styles |
| `*.jsx` files | React components, written in browser-compiled JSX (Babel standalone) |
| `assets/logos/` | Real SVG logos for the home page "Works with" marquee |
| `assets/hybrid-theory-logo.svg` | Authored brand mark + wordmark |
| `Design System.html` | Foundations canvas — palette, typography, logo, components, voice |
| Various `*Variants*.html` files | Design exploration / multi-option comparisons. **Not part of the production site.** |

---

## Architecture

### Pages
Each top-level page is an `.html` file that loads React + Babel via CDN and renders a single root component. The root components live in `*-page.jsx` files:

- `home-v2.jsx` → `<HomeApp />` (index.html)
- `services-page.jsx` → `<ServicesPageApp />`
- `about-page.jsx` → `<AboutPageApp />`
- `insights-page.jsx` → `<InsightsPageApp />`
- `archive-page.jsx` → `<ArchivePageApp />`
- `article-page.jsx` → `<ArticlePageApp />` (essay body)
- `article-case-page.jsx` → `<ArticleCasePageApp />` (case-study body)
- `contact-page.jsx` → `<ContactPageApp />`

### Booking / Calendly
`calendly.js` is loaded on every page. It holds the scheduling URL in ONE constant (`CALENDLY_URL`, currently `https://calendly.com/hybridtheory/30min`) and a single delegated click handler: **any `<a>`/`<button>` whose text contains "Book a call" — or carries `data-calendly` — opens the Calendly scheduler as a modal popup.** No per-button wiring.

- **Popup** (nav + every "Book a call" CTA) → `Calendly.initPopupWidget`, fired by the delegated handler.
- **Inline embed** (contact page only) → `Calendly.initInlineWidget`, mounted in `contact-page.jsx` with the site's dark theme params.
- The Calendly assets (`widget.css` + `widget.js`) are loaded in each page `<head>`.

To change the booking link in production: edit `CALENDLY_URL` in `calendly.js` **and** `CALENDLY_URL_INLINE` in `contact-page.jsx` (kept separate so the inline embed can carry its own theme query params).

### Shared chrome
`shared-chrome.jsx` exports:

- `<SiteNav active="..." />` — top nav, sticky, transparent-over-hero, gets a dark blur background once you scroll past 24px
- `<SiteFooter />` — bottom footer with logo + service / firm / contact columns
- `<PageHero pretitle title lead />` — generic subpage hero (used by services & about; insights and article have custom hero treatments)
- `<PageCTA title sub />` — the closing CTA block used at the bottom of every page
- `<SiteTweaks />` — wraps `useTweaks` from `tweaks-panel.jsx` to expose a toggleable side panel for switching palette / type / etc. Every page mounts this so the runtime data-* attributes get applied.

### Tweaks panel (design-iteration tool)
`tweaks-panel.jsx` is part of the design tooling, not the production app. It provides `useTweaks`, `<TweaksPanel>`, and form controls. When you ship to production, **delete this file** and inline the chosen palette / type into `:root` directly. (Production is locked to `palette: lime`, `type: grotesque` — every page's `<html>` already carries `data-type="grotesque"`.)

---

## Design system

### Tokens (`styles.css` `:root`)
The full token system lives at the top of `styles.css`. Key tokens:

```css
:root {
  /* Dark canvas system (Cyber Lime + Amber) */
  --paper: #0E0F12;     /* page background */
  --paper-2: #16181D;   /* surfaces, cards */
  --paper-3: #1E2027;   /* surface alt */
  --ink: #F4F2EA;       /* primary text (bone) */
  --ink-soft: #B0ACA0;
  --ink-mute: #7C7A72;
  --rule: #23252A;      /* hairlines */

  /* Brand accents */
  --lime: #B9FF35;      /* primary accent */
  --amber: #F5A623;     /* secondary accent (human warmth) */
  --magenta: #FF3DA5;   /* supporting (sparing) */
  --cyan: #5BE3FF;      /* data, links */

  --brand: var(--lime);
  --accent: var(--lime);
  --on-brand: #0A0A08;  /* text on lime/amber buttons */
}
```

### Type
Three font families, swapped via `data-type`:

```css
:root {
  --serif: "Instrument Serif", serif;  /* default */
  --sans: "Geist", sans-serif;
  --mono: "JetBrains Mono", monospace;
}
[data-type="grotesque"] { --serif: "Geist", sans-serif; }
[data-type="mono"]      { --serif: "JetBrains Mono", monospace; }
```

**Convention:** every `<html>` tag in production should be `<html data-type="grotesque">`. The site was designed at Grotesque (no italic serif headlines). If `data-type` is missing, headlines render in Instrument Serif — that's wrong on every page except the design-system explorations.

Same pattern for palette (`data-palette="lime|amber|magenta|sky"`), but the production palette is locked to `lime`.

### Color usage rules
- **Lime** — system actions (primary CTA, status pills, headline italic accent, hero atmosphere)
- **Amber** — human warmth (author avatars, "human" CTAs, big stat numbers)
- **Magenta** — sparing pop (one or two places per viewport; used on Hiring kicker in insights cards)
- **Cyan** — data, links, technical highlights (used on Craft kicker)

The ratio across a typical page: ~62% neutrals, ~18% surface, ~10% lime, ~7% amber, ~2% magenta, ~1% cyan.

---

## Voice & copy

### Thesis (north star)

> **"Engineering for the businesses that run the economy."**

Articulated in full in About > Why we exist. Unpacked:

1. **SMBs run the economy.** Not metaphorically — literally. The auto shop, the dental group, the regional manufacturer, the 12-person agency. That's where most work happens and most money moves.

2. **The same engineering that built Stripe, Google, and Anthropic applies here.** Not a watered-down version. The full thing. AI made the leverage of one engineer go up by an order of magnitude — and that leverage should land where the work actually serves people, not just trillion-dollar platforms.

3. **We chose to do this.** Not because SMBs are "behind." Because the work is good, the leverage is real, and the customers are right there.

The orientation is **"choosing a side"** (SMBs are where the real work is) — not **"closing a gap"** (SMBs lack something). Every line of copy should pass that test.

### Tone

**Pro-SMB, never anti-tech.** SMBs are sophisticated operators choosing what to outsource — not people who "can't afford engineers" or "don't know about AI yet." Treat business owners as the experts on their own businesses. We bring complementary craft.

**Honor the work people got into.** People started their auto shop because they care about cars. They didn't start it to send voicemails or chase invoices. Our copy honors that distinction — we route AI-friendly work to AI so owners can stay focused on the parts only people can do.

**Don't mock or position against big tech.** AI changed what's possible. Big tech got the leverage first, fairly. Our job is to deliver that leverage to the next set of businesses — not to disparage the first set.

### Voice test

For every line of copy, ask:

> *Does this center the SMB owner, or does it center the consultancy / the tech industry?*

If it centers anything but the SMB owner, rewrite.

### Words to avoid (and what we say instead)

The canonical reference is the **"Words we don't use"** section on `about.html` — a jargon → plain-English translation table. Copy throughout the site should track that vocabulary. A few examples:

| Don't write | Write |
|---|---|
| "Agentic AI" | "Software that does the work for you" |
| "AI transformation" | "Tools we build together" |
| "AI Center of Excellence" | "Two engineers and a clear scope" |
| "Leverage AI capabilities" | "Use AI to save you time" |
| "Holistic solution" | "Looking at the whole business, not just a slice" |
| "Stakeholder alignment" | "Getting your team on board" |
| "Best-in-class" | "Good" |

Use **"builders"** as a broader term for engineers / designers / data scientists when it lands more naturally than "engineers" alone — it's more all-encompassing and reflects the actual mix of the team.

### Four operating principles

These are how we work — also surfaced on About > How we work:

1. **Problem-first, not solution-first.** We don't sell AI. We diagnose where AI helps. If it doesn't help, we say so — even when that costs us a project.

2. **Ship something real.** Decks are easy. Working systems aren't. Every engagement ends with something deployed, documented, and yours to keep.

3. **Speak human.** We write the way a friend who knows the field would talk to you. No jargon, no transformation theatre, no enterprise-y mush.

4. **Stay close to the work.** When you hire us, you work directly with the senior builders doing the building. Same people in your kickoffs, same people in your inbox, same people in the code. Tight engagements, real relationships.

---

## Blog post rendering (planned MDX path)

There are **two** hand-written sample articles, deliberately chosen to exercise different body shapes:

- `article-page.jsx` — an **essay** (prose + pull quote + ordered list + a product mock)
- `article-case-page.jsx` — a **case study** (client snapshot card + results stat-band + product mock)

Both share the exact same shell (header → body-left / sticky-sidecard-right → related → CTA). Production should be **MDX** — markdown for prose, with a small set of custom React components for the editorial flourishes that already exist in the design:

| MDX component | What it renders | Currently in JSX as |
|---|---|---|
| `<PullQuote>` | Full-bleed pull quote with top/bottom hairline | `<figure className="article-pullquote">` |
| `<ProductMock title app>` | Cream-card mock UI with title bar | `<div className="article-mock">` + bar + body |
| `<OrderedList>` (or `<ol>`) | Numbered list with leading-zero mono numerals | `<ol className="article-ol">` |
| `<ClientCard>` | 4-cell client snapshot (Client / Where / Size / Built in) | `<div className="article-clientcard">` |
| `<Results>` | 3-column stat band, serif accent numbers | `<div className="article-results">` |

Copy in both sample articles is partly **placeholder** — the real launch articles are being written separately. The structural template is the deliverable, not the prose.

**Frontmatter schema:**

```yaml
---
slug: ai-strategy-12-person-business
kicker: Field note          # Strategy | Build | Craft | Hiring | Field note | Case study | Essay
date: 2026-05-14
author: Mara Chen
authorTitle: Senior Engineer · Hybrid Theory
title: What "AI strategy" should mean for a 12-person business.
lead: Strategy decks for SMBs are mostly theatre…
---
```

(Note: "minutes to read" was intentionally removed from the design — don't reintroduce a `read` field.)

The article shell — header (paper-2 bg + lime glow), sticky sidecard right, body left, related posts, CTA — should be a `<ArticleLayout>` component that wraps the MDX body. The sidecard auto-builds its TOC from `<h2>` headings with `id` attributes.

When you start the MDX migration, **convert `article-page.jsx` (essay) and `article-case-page.jsx` (case study) first as the two canonical examples.** Between them they cover every body component. Match their visuals exactly; iterate on the rest of the archive from there.

---

## Active patterns / gotchas

1. **Light-mode scope for product mocks.** The site is dark canvas globally. But several embedded "product mock" surfaces (the article roadmap mock, the strip-services demo card, the hero-marquee) re-declare CSS variables to light values so the cream/white card contents render correctly. Look for `.article-mock`, `.svc-stage-body`, `.spy-stage-body`, `.frame` — they all do this pattern. **Preserve it when refactoring.**

2. **Inline SVG icons.** Share icons in the article sidecard and various small chevrons are hand-rolled SVG inside the JSX. Production should extract to an icon library (Lucide or similar) — the inline SVGs are placeholders.

3. **Tools marquee logos.** `assets/logos/*.svg` are real wordmarks. They're rendered with `filter: brightness(0) invert(1)` so they appear as bone-white silhouettes on the dark canvas. If you keep the dark theme, keep the filter.

4. **Vanta WAVES.** The hero atmosphere on `index.html` is `vanta.waves` (three.js shader). It's heavy — ~150KB of three.js + the vanta shader. Worth keeping if the hero motion matters; worth replacing with a CSS-only animated gradient if performance matters more. See `home-v2.jsx` `<Hero>` for the init code.

5. **`tweaks-panel.jsx` is a design-mode tool.** It mounts a side panel for switching palette/type/wave tint. **Strip from production.** Lock the chosen tokens (`palette: lime`, `type: grotesque`) in CSS directly and delete the file.

6. **The `*Variants*.html` files are NOT production.** They're side-by-side design explorations on a pan/zoom canvas (`design-canvas.jsx`). Use them as design reference if you need to understand the alternatives that were considered — but don't ship them.

---

## Recommended migration path

1. **Stand up a Next.js (or Astro / Remix) project.**
2. **Port `styles.css` to a global stylesheet (or PostCSS).** Token values, semantic CSS classes, and component styles can all carry over wholesale. Delete the `[data-palette]` / `[data-type]` switches — production locks to lime + grotesque.
3. **Build page components** matching the JSX in this repo. Start with `<SiteNav>`, `<SiteFooter>`, `<PageHero>`, `<PageCTA>` since they're used everywhere.
4. **Wire up MDX for the blog.** Convert `article-page.jsx` first as the canonical example. Then convert the other articles in `archive-page.jsx`'s data to MDX files.
5. **Replace the home hero atmosphere.** Either keep Vanta WAVES (and load it lazily) or build a CSS-only equivalent.
6. **Delete `tweaks-panel.jsx`, the `*Variants*.jsx` / `.html` files, and `design-canvas.jsx`.** They're design tooling.

---

## Open questions / known incompletes

- **Real article content.** The two sample articles (`article.html` essay, `article-case.html` case study) are partly placeholder. The real launch articles are being written separately. Every *other* listed article is title + excerpt only.
- **Real client logos** for "Where we've been" on About — currently rendered as text. Need real logos as SVG.
- **Forms aren't wired.** The subscribe form on Insights and the message form on `/contact` submit nowhere. Hook up to a real form handler (Mailchimp / Loops / plain SMTP) in production. (Calendly *is* wired — see Booking / Calendly above.)
- **Calendly URL** lives in two places (`calendly.js` → `CALENDLY_URL`, `contact-page.jsx` → `CALENDLY_URL_INLINE`). Consolidate if you prefer a single source of truth.
- **Auto-advance on Services Section.** The strip auto-advances every 8 seconds. The timing should align to *actual demo animation length* in production (right now it's an arbitrary cadence).
- **No 404 page yet.** Worth a small branded one before launch.
- **Mobile.** Designed desktop-first with scattered breakpoints; not yet deliberately reviewed at mobile width across every page.

---

## File index — TLDR

```
index.html           → home page
home-v2.jsx          → home page React app

services.html        → /services
services-page.jsx

about.html           → /about
about-page.jsx

insights.html        → /insights (blog landing, newsletter-led hero)
insights-page.jsx

archive.html         → /insights/archive (paginated)
archive-page.jsx

article.html         → /insights/[slug] — ESSAY body example
article-page.jsx
article-case.html    → /insights/[slug] — CASE STUDY body example
article-case-page.jsx

contact.html         → /contact (Calendly inline embed + message form)
contact-page.jsx

calendly.js          → Calendly popup wiring (URL constant + delegated handler)
shared-chrome.jsx    → SiteNav, SiteFooter, PageHero, PageCTA, SiteTweaks
logo.jsx             → brand mark / wordmark / lockup
styles.css           → all styles + tokens
tweaks-panel.jsx     → DESIGN TOOL — delete in production
design-canvas.jsx    → DESIGN TOOL — delete in production
*Variants*.{html,jsx}→ DESIGN EXPLORATION — delete in production
Design System.html   → reference foundations canvas — keep for reference, delete from production
```

