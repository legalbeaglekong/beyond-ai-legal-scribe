# SEO, Structured Data & Trust Footer Overhaul

Three workstreams. No visual/copy changes — head tags, JSON-LD, prerender, address constant, footer compliance block.

---

## Workstream 1 — Crawlability + Structured Data

### 1a. Per-route head metadata (react-helmet-async)
`react-helmet-async` and `HelmetProvider` are already installed/wired in `src/App.tsx`. Today only `index.html` carries head tags; most routes ship with the homepage title.

- Create `src/seo/SEO.tsx` — a `<Helmet>` wrapper accepting `title`, `description`, `path`, optional `ogImage`, optional `jsonLd`. It emits `<title>`, `<meta name=description>`, canonical = `https://beyondhorizons.sg{path}`, `og:url`, `og:title`, `og:description`, `og:type`, `og:image`, `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`, and any passed JSON-LD blocks.
- Create `src/seo/routeMeta.ts` — one entry per route with a unique title + description. Routes covered (all `<Route>`s in `App.tsx`):
  - `/` Home, `/about`, `/work`, `/work/csr`, `/team`, `/team/:slug` (dynamic from team data), `/our-clients`, `/announcements`, `/market-insights`, `/topics`, `/contact` (anchor — skip), `/terms`, `/join-us`, `/ai-tools`, `/why-specialist-counsel`, `/expertise`, `/expertise/:id`, `/why-choose-us/:id`
  - 8 Singapore practice pages (`/singapore-space-law`, …, `/singapore-alternative-energy-law`)
  - 11 industry pages (`/industry/aviation`, …, `/industry/ai-code-counsel`)
- Drop `<SEO …/>` into every page component. Dynamic routes derive title/description from the loaded record.
- Remove the static `<title>`, description, OG/Twitter, and canonical from `index.html` so per-route tags don't ship alongside duplicates. Keep sitewide JSON-LD (Organization/WebSite) in `index.html`.
- `/en-us/` route renders `<Index>` but its `SEO` sets canonical to `https://beyondhorizons.sg/` (root self-reference).
- Canonical/og:url always use `https://beyondhorizons.sg<path>` — never the `.lovable.app` or `/en-us/` form.

### 1b. robots.txt + sitemap.xml
- `public/robots.txt` already exists and is correct — leave it (already references `https://beyondhorizons.sg/sitemap.xml`).
- Replace `public/sitemap.xml` with a generator: `scripts/generate-sitemap.ts`, wired via `predev` + `prebuild` in `package.json`. Entries list every public route above using `https://beyondhorizons.sg/` as the base. Team slugs and dynamic insight slugs included where source data is local.

### 1c. Prerendering
- Add `vite-plugin-prerender-spa` (or `vite-plugin-prerender`) in `vite.config.ts`, configured for the marketing routes list (home, about, team, each Singapore practice + industry page, work, market-insights, terms, join-us, ai-tools, why-specialist-counsel). Build emits a fully-rendered `index.html` per route so non-JS crawlers (incl. AI bots) get the body text + JSON-LD in source.
- If the prerender plugin fails inside the Lovable build sandbox (it spawns headless Chromium and may not be permitted), fall back to a tiny static prerender script using `react-dom/server` + `StaticRouter` that runs at build time and writes `dist/<route>/index.html` snapshots — same output shape, no headless browser dependency. Will confirm which path works during implementation.

### 1d. JSON-LD
- **Organization / LegalService** (sitewide, in `index.html`): replaces current LegalService block. Adds `parentOrganization` Bethel Chambers LLC w/ UEN, broader `sameAs` (LinkedIn company, Chambers firm profile, Law Society listing, Insights subdomain), reads address from the shared constant baked at build time.
- **Person** schemas: emitted via `SEO` on `/team/:slug` for Hui Ling Teo and Sonia Motwani with the exact fields specified (jobTitle, qualifications in `description`, `worksFor`, `sameAs`, `award`).
- **Review** schemas: on the homepage Testimonials section. Only mark up quotes already shown; each `Review` gets `reviewBody`, `author` = Organization (e.g. "Chambers and Partners"), `itemReviewed` = the Beyond Horizons Organization, and the publication year as `datePublished`. No fabricated ratings.
- **Article** schemas: on each Insights/blog article page (`headline`, `author` Person, `datePublished`, `publisher` Organization, `mainEntityOfPage`). Insights live on the Substack subdomain — Article JSON-LD added only for in-app article routes that actually exist; if none, skip with a note.
- Validate each schema by pasting into Google Rich Results test post-build; report any warnings.

---

## Workstream 2 — Address constant (NAP)

- New `src/config/business.ts` exporting:
  - `CANONICAL_ADDRESS = "39B Neil Road, #03-01, Singapore 088823"`
  - `ADDRESS_PARTS = { streetAddress: "39B Neil Road, #03-01", addressLocality: "Singapore", postalCode: "088823", addressCountry: "SG" }`
  - `UEN = "202007868D"`, `LEGAL_ENTITY = "Bethel Chambers LLC"`, `WHATSAPP_URL`, `EMAIL`, `LINKEDIN_URL`.
- Replace hardcoded address strings in: `src/components/Footer.tsx`, `src/components/Contact.tsx`, `src/pages/AboutPage.tsx`, anywhere else `rg "088823|Neil Road"` finds. The `index.html` JSON-LD is static — it already matches; if it drifts, a build-time replacement script will substitute placeholders from the same constant.

---

## Workstream 3 — Regulatory Footer

Edit `src/components/Footer.tsx` only — no new pages.

- New compliance block (above or beside existing copyright row):
  - "Beyond Horizons is a specialist practice group of Bethel Chambers LLC, a Singapore law corporation regulated by the Law Society of Singapore."
  - `UEN: 202007868D`
  - `CANONICAL_ADDRESS`
  - Short disclaimer: "Content on this site is general information only and does not constitute legal advice. Use of this site does not create a solicitor-client relationship."
  - `© {new Date().getFullYear()} Bethel Chambers LLC. All rights reserved.`
- Policy links row:
  - "Privacy Policy" → `https://bethelchambers.com/privacy-policy/` (already present — verify)
  - "Terms of Service" → `https://bethelchambers.com/terms-of-service/` (replace current internal `/terms` link)
  - Both `target="_blank" rel="noopener noreferrer"`.
- Remove the `/terms` route and `TermsPage.tsx` since policies now point to Bethel Chambers (confirm with you before deleting — see Open Question).

---

## Technical notes

- No new runtime deps beyond `vite-plugin-prerender-spa` (or a 30-line `react-dom/server` script if the plugin can't run in sandbox). `react-helmet-async` already installed.
- No backend / schema / RLS changes.
- `og:image` continues to use existing `/og-image.jpg`. Per-page `og:image` only when a page has a clearly better hero image already in assets.
- `/en-us/` self-canonicals to `/`, so Google treats them as one URL.

## Deliverables I'll return after build

1. Table: every route → final title + description.
2. Rich-Results validation result per schema type.
3. `rg "CANONICAL_ADDRESS"` file list.
4. Curl/HEAD result for both Bethel policy URLs.

## Open question

You wrote "do NOT create new Privacy/Terms pages" — the current site has an internal `/terms` page (`src/pages/TermsPage.tsx`) created in an earlier turn. Should I **delete it** and route the footer link directly to `https://bethelchambers.com/terms-of-service/`, or leave the page in place and only swap the footer link? I'll default to **delete** unless you say otherwise.
