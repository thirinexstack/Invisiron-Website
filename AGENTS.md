# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Keep design/reference evidence in `docs/`. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Prototype Design Decisions

- `/c3x-core-technology/` hero should use the Invisiron MP4 as a video background, with centered white C3X heading and paragraph spacing matching the source WordPress C3X hero.
- `/c3x-core-technology/` feature icons should use the live WordPress assets `invisiron-invisible-icon100x.png`, `invisiron-speed-icon100x.png`, and `invisiron-dpi-icon100x.png` with preserved proportions.
- `/partner/` should use the source-style black partner signup section with left copy, gold contact form, and a white "Why Invisiron?" five-icon section underneath.
- `/partner/` should show the white Why Invisiron section first, followed by the black Partner Support and Get Started content section, including the final "Be part of the Invisiron Partners Force..." text and JOIN NOW button.
- `/partner/` partner type field should use the same custom dropdown UI as `/contact-invisiron/`, including an "Other" option.
- `/case-studies/` should use the live Invisiron case-study archive content with full-resolution WordPress upload images copied locally, displayed as responsive cards for mobile.
- The first case-study detail page should match the source layout: dark "Case Studies" hero band, then a white two-column content section with the case image fixed at the top-left and text/PDF action flowing on the right.
- Case-study detail hero bands should use the About page background image `invisiron-about-background-scaled-1024x405-1.jpg` with the live case-study `left top` positioning and a very light separate `mk-video-color-mask` overlay.
- `/testimonials/` should match the source testimonial archive: centered gold intro heading, white card grid with source testimonial text, logos, names, and roles, collapsing to one column on mobile.
- `/blog/` should match the source blog archive: centered title, four resource category links with All highlighted on the archive, three-column cards with local full-resolution images, category label, title, excerpt, date, and local/static card behavior instead of outbound live-site links.
- `/category/articles/` should match the live WordPress Articles archive: no separate archive title/tabs, one-column modern article loop with full-width cropped images, left social/comment rail, byline/category/date metadata, excerpt, gold READ MORE buttons, local images, and local detail routes.
- `/category/events/` and `/category/news/` should match their live WordPress category archives using the same one-column modern archive UI, source post order, source author/category/date metadata, local images, and local detail routes.
- `/invisiron-pre-approved-digital-solution-grant/` should match the source blog detail page with a centered white article column, local full-resolution feature image, source article text, related article cards, and the whitepaper popup form interaction.
- Blog detail routes should share the source WordPress blog-detail UI: centered article column, label/title/date, local feature image, source article HTML rendered in-place, gold whitepaper popup button, and related cards. Do not hotlink source images; map WordPress uploads to local assets or omit unavailable legacy images.
- Blog detail related articles should show exactly these three cards in order: "Cybersecurity Tips to follow when working from home", "7 Most Prominent Cyberattacks in ASEAN Countries", and "Upgrade Your Company's Cyber Security Networks Today"; do not show carousel arrow buttons.
- The three blog-detail related article cards should route to their own local cloned detail pages, not the live Invisiron URLs.
- The "Cybersecurity Tips to follow when working from home" blog detail should include a gold star before "Most importantly" and make "HERE" a highlighted local link to `/invisiron-cyber-defence-systems/`.
- The "Upgrade Your Company's Cyber Security Networks Today" blog detail should make "HERE" a highlighted local link to `/invisiron-cyber-defence-systems/`, matching the live source CTA.
- The "Cyber Security Asia 2022" blog detail should make "Cyber Security Asia" and "Johan Olstenius (Ph.D.)" highlighted external links matching the live source LinkedIn targets.
- The "7 Most Prominent Cyberattacks in ASEAN Countries" blog detail should make "MORE" a highlighted download link for the INTERPOL ASEAN Cyberthreat Assessment PDF.
- The "Cyber Defence - It's time to act now..." legal-sector blog detail should convert the live highlighted reference phrases into gold clickable external links matching the live source targets.
- `/contact-invisiron/` should match the source contact page: no separate hero, a black full-width section below the header, left address/map column, right gold rounded-top "Contact Invisiron" form panel, and a one-column mobile layout.
- `/about-invisiron/` hero should keep the local hero height/layout while using the live WordPress background image `invisiron-about-background-scaled-1024x405-1.jpg` plus a separate `mk-video-color-mask` overlay layer.
- `/invisiron-cyber-defence-systems/` hero should keep the local hero height/layout while using the live WordPress background image `invisiron-products-background-scaled-1024x405-copy.jpg` plus a separate light `mk-video-color-mask` overlay layer.
- `/invisiron-key-features/` hero should keep the local hero height/layout while using the local background image `featurebg.jpg` plus a separate light `mk-video-color-mask` overlay layer.
- Contact and partner forms submit to `/api/contact`; email credentials must stay in ignored local/deployment environment variables, never tracked source.
- Footer "Sign Up For Updates" submits subscriber emails to `/api/contact` using the same email configuration.
- Footer LinkedIn icon should link to the public live-site URL `https://sg.linkedin.com/company/invisiron` so the company page is visible even when the user is not logged in.
- The Nginx server deployment uses `/opt/invisiron-contact-api/contact-api.mjs` as a systemd service named `invisiron-contact-api`, with SMTP secrets in `/etc/invisiron-contact-api.env` and Nginx proxying `location = /api/contact` to `127.0.0.1:4174`.
- Home "Download White Paper" opens the live-site style whitepaper popup: dim overlay, white form card, gold top strip, simple close icon, and five whitepaper lead fields.
- Home down-arrow and back-to-top navigation should use controlled smooth scrolling, with duration scaling by distance so long back-to-top jumps do not feel faster than one-section down-arrow jumps.
- Home and section down-arrow controls should use the animated two-chevron falling arrow style rather than a circular single-chevron button.
- Back-to-top controls should keep the original gray square single-chevron UI while using the controlled smooth scroll duration.
- Home C3X overview should keep the static C3X graphic while using a dark fixed parallax cyber background on desktop, with scroll fallback on touch/mobile.
- `/c3x-core-technology/` "Download Whitepaper" uses the same whitepaper popup flow as Home before opening the PDF.
- Contact enquiry and Partner Type custom dropdowns are required fields and must block submission until selected.
- `/privacy-and-gdpr-policy/` should locally clone the live Invisiron Privacy and GDPR Policy page, including the dark feature-background hero and white policy text section.
