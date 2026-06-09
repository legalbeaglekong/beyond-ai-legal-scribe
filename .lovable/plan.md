## Goal
Move from individual landing pages to **topical authority clusters** so Google sees Beyond Horizons as *the* Singapore source for each niche (Space, AI Governance, Employment, Aviation, Robotics, Restructuring, Alt Energy, Nuclear). Topical authority is the single biggest ranking lever for small/medium sites competing against BigLaw.

---

## Strategy: Hub-and-Spoke Topic Clusters

Each vertical gets:

```text
        [Pillar page = service hub]
         /        |         \
    [Spoke]   [Spoke]    [Spoke]   <- supporting articles on insights.beyondhorizons.sg
         \        |         /
          all link UP to pillar
          pillar links DOWN to each
```

Google reads dense bi-directional linking inside one topic as expertise.

---

## Phase 1 — Strengthen existing pillar pages (main site)

For `/singapore-space-law`, `/singapore-ai-governance`, `/singapore-employment-law`:

1. **Add a "Key topics in [vertical]" sub-nav** — anchor links to 6–8 H2 sections (table of contents). Boosts dwell time + sitelinks eligibility.
2. **Expand each pillar to 2,500–3,500 words** with: regulator list, statute citations, common scenarios, cost/timeline expectations, downloadable checklist.
3. **Add `BreadcrumbList` + `Article` JSON-LD** (we have FAQ + LegalService already).
4. **Internal link block** — "Related insights" already done; add reverse links from `/team`, `/expertise`, homepage hero.
5. **"Last updated" visible date** + matching `dateModified` in schema. Freshness signal.

## Phase 2 — Build out the remaining 5 pillar pages

Same template as Space/AI/Employment for:

- `/singapore-aviation-law`
- `/singapore-robotics-law`
- `/singapore-restructuring-insolvency`
- `/singapore-alternative-energy-law`
- `/singapore-nuclear-law` (very low competition — easy win)

Each: hero + 6 H2 sections + FAQ + Related Insights + JSON-LD + sitemap entry.

## Phase 3 — Insights subdomain topic mapping

Give you a **content calendar** that maps weekly Substack posts to pillar clusters. Each post must:

- Target a long-tail question (e.g. *"Does OSTIn licensing apply to a satellite ground station in Singapore?"*)
- Link UP to its pillar with exact-match anchor text once
- Link laterally to 2 sibling posts in the same cluster
- Include `FAQPage` JSON-LD on at least one Q

Rough cadence: 4 weeks per cluster, then rotate.

## Phase 4 — Technical SEO reinforcement

1. **`Organization` schema** sitewide with `knowsAbout` listing all 8 verticals.
2. **HTML sitemap page** at `/topics` linking every pillar + recent insights — gives crawlers a single dense entry point.
3. **Canonical + hreflang audit** for the 11 languages already supported (currently the alt-language pages may be diluting authority if canonicals are wrong).
4. **Run the built-in SEO scanner** to catch missing meta/OG/canonical issues before they compound.

## Phase 5 — Measurement

Use the existing Google Search Console connector to track:

- Impressions per pillar URL (weekly)
- Average position for the 5 target keywords per cluster
- Top queries — surface new long-tail terms to feed back into the Substack calendar

---

## What I'd build first (proposed order)

1. **Run Semrush + SERP analysis** on the 8 verticals → confirm volume / difficulty / current ranking competitors. **(research only, no code)**
2. **Build the 5 remaining pillar pages** using the proven template.
3. **Add `BreadcrumbList` schema + visible "Last updated"** to all 8 pillars.
4. **Create `/topics` HTML sitemap page** as the cluster index.
5. **Audit hreflang/canonicals** on multilingual pages.
6. **Deliver the 16-week Substack content calendar** (4 weeks × 4 clusters).

---

## What I need from you to start

- **Approve the order above** (or reshuffle).
- For Phase 1 research: OK to spend Semrush calls on the 8 verticals? (~8 keyword + 8 SERP lookups)
- Any verticals to drop or add? (e.g. you mentioned Nuclear earlier — confirm keep)
- Do you want a downloadable checklist asset per pillar (PDF), or skip for now?

I will not write any code until you confirm.