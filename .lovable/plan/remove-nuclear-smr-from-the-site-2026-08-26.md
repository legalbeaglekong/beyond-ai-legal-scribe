# Remove Nuclear & SMR from the site

You don't offer nuclear/SMR advisory, so the dedicated page and every link, menu entry and schema mention get removed.

## What changes

1. **Delete the page** — remove `src/pages/SingaporeNuclearLawPage.tsx` and its `/singapore-nuclear-law` route in `src/App.tsx`.
2. **Navigation** — remove "Nuclear & SMR" from the header dropdown (`src/components/Header.tsx`) and "Nuclear & SMR Advisory" from the footer links (`src/components/Footer.tsx`).
3. **Topics page** — remove the Singapore Nuclear Law card, rename the section heading from "Energy Transition, Nuclear & Climate" to "Energy Transition & Climate", and drop "nuclear" from the page meta description.
4. **Structured data / homepage schema** — remove "Nuclear Law", "Small Modular Reactors" from the knowsAbout list and the "Nuclear & SMR Advisory" service Offer in `index.html`.
5. **Crawl files** — remove the nuclear entries from `public/sitemap.xml` and `public/llms.txt`.

## SEO note

The removed URL will 404 for crawlers. It has no rankings or traffic, so no redirect is strictly needed; if you prefer, I can point `/singapore-nuclear-law` to `/singapore-alternative-energy-law` instead of removing it outright — say the word and I'll add that redirect.

## Technical details

- Files edited: `src/App.tsx`, `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/pages/TopicsPage.tsx`, `index.html`, `public/sitemap.xml`, `public/llms.txt`.
- File deleted: `src/pages/SingaporeNuclearLawPage.tsx`.
- Verify with a repo-wide search for "nuclear" and "SMR" returning no hits, plus a passing build.
