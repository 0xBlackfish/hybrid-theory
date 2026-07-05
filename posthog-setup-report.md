# PostHog post-wizard report

The wizard completed a full client-side PostHog integration for the Hybrid Theory marketing site. PostHog is initialized via `instrumentation-client.ts` (Next.js 15.3+ pattern), routed through a `/ingest` reverse proxy configured in `next.config.mjs`. Twelve events are tracked across eight files covering the primary conversion path (Calendly booking CTA), lead capture (contact form, newsletter), content engagement (articles, workflow theater, FAQ), and navigation intent signals (industry tiles, mobile menu, "Who we help" dropdown). User identification fires on newsletter subscribe using the email as the distinct ID.

| Event Name | Description | File |
|---|---|---|
| `assessment_cta_clicked` | Any 'Book a free assessment' Calendly CTA click anywhere on site | `components/Calendly.tsx` |
| `hero_industry_chip_switched` | User clicks a trade industry chip in the hero switcher | `components/home-v2/sections/Hero.tsx` |
| `contact_form_submitted` | User submits the contact form on /contact | `components/ContactForm.tsx` |
| `newsletter_subscribed` | User submits the newsletter subscribe form on /insights | `components/SubscribeForm.tsx` |
| `industry_tile_clicked` | User clicks a "Who it's for" industry tile on the homepage | `components/home-v2/sections/WhoFor.tsx` |
| `nav_who_we_help_opened` | User opens the "Who we help" desktop dropdown | `components/SiteNav.tsx` |
| `nav_mobile_menu_opened` | User taps the hamburger button to open mobile nav | `components/SiteNav.tsx` |
| `workflow_theater_scene_changed` | User manually selects a workflow tab in the WorkflowTheater | `components/home-v2/WorkflowTheater/WorkflowTheater.tsx` |
| `insights_filter_changed` | User clicks a filter pill on the insights listing page | `components/InsightsList.tsx` |
| `vertical_faq_item_opened` | User opens a FAQ accordion on a vertical industry page | `components/vertical/VerticalFaq.tsx` |
| `insights_article_clicked` | User clicks "Read more" to navigate to an insights article | `components/StripeRow.tsx` |

## Next steps

We've built a dashboard and five insights to track user behavior based on the events just instrumented:

- **Dashboard**: [Analytics basics (wizard)](https://us.posthog.com/project/498155/dashboard/1800732)
- **Assessment CTA Clicks**: [EIZEr0Nj](https://us.posthog.com/project/498155/insights/EIZEr0Nj) — Daily trend of all Calendly booking CTA clicks
- **Site Visit → Booking Funnel**: [lrSn3VPM](https://us.posthog.com/project/498155/insights/lrSn3VPM) — Conversion funnel from pageview to CTA click (7-day window)
- **Industry Interest**: [QlyPYXZU](https://us.posthog.com/project/498155/insights/QlyPYXZU) — Who-For tile clicks and hero chip switches over time
- **Contact & Newsletter Conversions**: [DAZ1pZ1U](https://us.posthog.com/project/498155/insights/DAZ1pZ1U) — Daily bar chart of contact form and newsletter submissions
- **Content Engagement**: [Nnt2bNHj](https://us.posthog.com/project/498155/insights/Nnt2bNHj) — Article clicks, workflow theater interactions, and FAQ opens

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to `.env.example` and any bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.
- [ ] Confirm the newsletter subscribe path also calls `posthog.identify()` correctly end-to-end — currently only fires when the form's email input has a value at submit time.

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
