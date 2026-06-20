# Handoff: Hybrid Theory AI — Marketing Site

## Overview
A complete marketing site for **Hybrid Theory**, an AI consulting studio for small and mid-sized businesses ("AI consulting for regular businesses"). The bundle covers Home, Services, About, Insights (blog landing + paginated archive + two article templates), Contact, and a 404. The design is dark-canvas, editorial, confident, with a lime + amber accent system.

**Read `HANDOFF.md` first** — it is the authoritative engineering document. This README is the quick orientation; `HANDOFF.md` has the full token system, voice/copy thesis, MDX migration plan, per-file map, and known gotchas.

## About the Design Files
The files in this bundle are **design references created in HTML/JSX** — high-fidelity prototypes showing intended look and behavior, **not production code to copy directly**. They run via React + Babel-in-the-browser, which is a prototyping convenience, not a target architecture.

**Your task:** recreate these designs in a real codebase. The recommended stack is **Next.js (App Router) + MDX** for the blog, but use whatever the target repo already establishes. The `hybrid-theory/` repo is currently empty, so you're choosing the framework — Next.js + MDX + a global stylesheet ported from `styles.css` is the intended path (see HANDOFF.md → "Recommended migration path").

Recreate the layouts, tokens, and copy faithfully; write fresh, idiomatic components in the target framework. Do **not** ship the Babel-in-browser setup, the `tweaks-panel.jsx` design tool, or any `*Variants*` files.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, copy, and interactions. Recreate pixel-faithfully using the target stack's patterns. Exact tokens are in `styles.css` `:root` and documented in HANDOFF.md.

## Screens / Views

1. **Home** (`index.html` → `home-v2.jsx`)
   - Hero (Vanta WAVES animated atmosphere) — *"Every company is a tech company now. / We help you make the leap."* + tools marquee ("Works with" — bone-white logo silhouettes).
   - §01 Services — auto-advancing strip of 5 case demos (Stripe-style tabs underneath, popout modal per case).
   - §02 Approach — document metaphor (paper brief + Slack-style channel).
   - §03 Team — "Engineers, designers, and data scientists" + credential logo row.
   - §04 Insights — newsletter-led "From the studio" featured + list.
   - §05 Toolkit — "We build with the tools you already pay for" — 3×8 logo grid.
   - CTA + footer.

2. **Services** (`services.html` → `services-page.jsx`) — hero + three deep service sections (Automation & Custom Tools / AI Strategy / Team Training), each with color-accented title (lime/amber/cyan), bullets, and a "What an engagement looks like" sidecard.

3. **About** (`about.html` → `about-page.jsx`) — Why we exist (thesis), four principles, "Words we don't use" jargon→plain table, "Where we've been" credentials. Section headers color-coded (lime/amber/cyan/magenta).

4. **Insights** (`insights.html` → `insights-page.jsx`) — newsletter-led hero (subscribe + mock email preview), sticky category filter pills, Stripe-style article rows in a 4-column dashed grid, "View all posts" → archive.

5. **Archive** (`archive.html` → `archive-page.jsx`) — same article rows, no hero, numbered pagination.

6. **Article** — two body templates sharing one shell:
   - `article.html` → `article-page.jsx` — **essay** (prose, pull quote, ordered list, product mock).
   - `article-case.html` → `article-case-page.jsx` — **case study** (client snapshot card, results stat-band, product mock).
   - Shell: paper-2 header with lime glow, body left + sticky sidecard right (author / TOC scroll-spy / share / CTA), related posts, CTA.

7. **Contact** (`contact.html` → `contact-page.jsx`) — calendar-first: framed Calendly inline embed (left) + underline-style message form (right), email fallback.

8. **404** (`404.html` → `notfound-page.jsx`) — *"This one's still manual."* + wayfinding card grid.

## Interactions & Behavior
- **Nav** — sticky, transparent over hero, gains dark blur after 24px scroll. Collapses to a hamburger + dropdown panel below 820px.
- **Booking (Calendly)** — `calendly.js` holds the URL (`https://calendly.com/hybridtheory/30min`). A delegated click handler opens a Calendly **popup** for any element whose text contains "Book a call" or that has `data-calendly`. Contact page uses an **inline** embed instead.
- **Services strip** — auto-advances every 8s; click a tab to lock; pause control; smooth crossfade between demos.
- **Article TOC** — scroll-spy highlights the active section.
- **Insights/Archive** — category filter pills; archive paginates 4 per page.
- **Responsive** — single-column collapse across grids at ≤1000px; hamburger nav ≤820px.

## State Management
Minimal, all local React state in the prototype: nav `open`, services `active`/`playing`, insights/archive `filter`/`page`, article `activeAnchor` (scroll-spy), contact form fields. In production these map to component state; no global store needed for the marketing site.

## Design Tokens
Full set in `styles.css` `:root` and HANDOFF.md → Design System. Headlines:
- **Canvas** `#0E0F12` · **Surface** `#16181D` · **Surface-alt** `#1E2027` · **Rule** `#23252A`
- **Ink (bone)** `#F4F2EA` · **Ink-soft** `#B0ACA0` · **Ink-mute** `#7C7A72`
- **Lime** `#B9FF35` (primary) · **Amber** `#F5A623` (secondary/warmth) · **Magenta** `#FF3DA5` · **Cyan** `#5BE3FF`
- **On-brand text** `#0A0A08`
- Type: Instrument Serif (display, but production locks to **Geist** via `data-type="grotesque"`) · Geist (sans) · JetBrains Mono (mono)
- Radius: 10–18px cards, 999px pills. Color usage ratios + rules in HANDOFF.md.

## Assets
- `assets/logos/*.svg` — real tool wordmarks (Stripe, Shopify, Gmail, Slack, Notion, Square, Calendly, Google Calendar, Zoom) for the "Works with" marquee. Rendered bone-white via `filter: brightness(0) invert(1)`.
- `assets/hybrid-theory-logo.svg` — authored brand mark + wordmark (also reproduced as paths in `logo.jsx`).
- Vanta WAVES (three.js) loaded from CDN for the home hero — optional; can be swapped for a CSS gradient (see HANDOFF.md gotcha #4).

## Files
See HANDOFF.md → "File index — TLDR" for the complete map. Production page files: `index.html`, `services.html`, `about.html`, `insights.html`, `archive.html`, `article.html`, `article-case.html`, `contact.html`, `404.html` + their `*-page.jsx`. Shared: `shared-chrome.jsx`, `logo.jsx`, `calendly.js`, `styles.css`. **Delete in production:** `tweaks-panel.jsx` (design tool) and anything `*Variants*` (not included in this bundle).
