# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Keep design/reference evidence in `docs/`. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Prototype Design Decisions

- `/c3x-core-technology/` hero should use the Invisiron MP4 as a video background, with centered white C3X heading and paragraph spacing matching the source WordPress C3X hero.
- `/partner/` should use the source-style black partner signup section with left copy, gold contact form, and a white "Why Invisiron?" five-icon section underneath.
- `/case-studies/` should use the live Invisiron case-study archive content with full-resolution WordPress upload images copied locally, displayed as responsive cards for mobile.
- The first case-study detail page should match the source layout: dark "Case Studies" hero band, then a white two-column content section with the case image fixed at the top-left and text/PDF action flowing on the right.
- `/testimonials/` should match the source testimonial archive: centered gold intro heading, white card grid with source testimonial text, logos, names, and roles, collapsing to one column on mobile.
- `/blog/` should match the source blog archive: centered title, four resource category links with All highlighted on the archive, three-column cards with local full-resolution images, category label, title, excerpt, date, and local/static card behavior instead of outbound live-site links.
- `/category/articles/` should match the live WordPress Articles archive: no separate archive title/tabs, one-column modern article loop with full-width cropped images, left social/comment rail, byline/category/date metadata, excerpt, gold READ MORE buttons, local images, and local detail routes.
- `/category/events/` and `/category/news/` should match their live WordPress category archives using the same one-column modern archive UI, source post order, source author/category/date metadata, local images, and local detail routes.
- `/invisiron-pre-approved-digital-solution-grant/` should match the source blog detail page with a centered white article column, local full-resolution feature image, source article text, related article cards, and the whitepaper popup form interaction.
- Blog detail routes should share the source WordPress blog-detail UI: centered article column, label/title/date, local feature image, source article HTML rendered in-place, gold whitepaper popup button, and related cards. Do not hotlink source images; map WordPress uploads to local assets or omit unavailable legacy images.
- Blog detail related articles should show exactly these three cards in order: "Cybersecurity Tips to follow when working from home", "7 Most Prominent Cyberattacks in ASEAN Countries", and "Upgrade Your Company's Cyber Security Networks Today"; do not show carousel arrow buttons.
- The three blog-detail related article cards should route to their own local cloned detail pages, not the live Invisiron URLs.
- `/contact-invisiron/` should match the source contact page: no separate hero, a black full-width section below the header, left address/map column, right gold rounded-top "Contact Invisiron" form panel, and a one-column mobile layout.
