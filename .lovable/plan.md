text
## Goal
Add a central, on-brand courses listing page for the 6 Thinkific courses in the collection at https://hui-ling-s-site-be86.thinkific.com/collections, and surface it consistently across the site navigation.

## Courses to include (from the collection)
1. Cap Table Cleanup 101
2. Negotiating Business Jet Sale & Purchase Agreements 101
3. AI & Work Contracts 101
4. Cape Town Convention & Aircraft Repossession 101
5. Robot & Embodied AI Law 101
6. Tariff Contract Amendments 101

Each course card will show the Thinkific cover image, title, short description, a "Free" badge, and an external link to the Thinkific course page. The existing "Aviation Finance 101" card on the homepage will be retired (it is not in the collection).

## Page structure (/courses)
- Standard hero section matching the site's visual identity (cream background, burgundy accent, Playfair Display heading, concise subtitle).
- Intro paragraph framing the courses as practical, Singapore-anchored legal and business primers.
- Responsive grid of 6 course cards (2 columns on desktop, 1 on mobile) using the existing Card/CardContent components.
- Each card opens the Thinkific course in a new tab.
- A closing CTA block linking to the WhatsApp consultation number and the full Thinkific collection.
- SEO metadata in index.html for the /courses route is not feasible on this static SPA, but the page will have a self-referencing canonical and OG tags via Helmet for JS crawlers, and the page title will update client-side.

## Navigation & linking changes
- Add "Courses" to the Work dropdown under the Firm column (links to /courses).
- Replace the single "Aviation Finance 101" card in the homepage Insights section with a "Courses & Training" card that links to /courses and teases the 6 free primers.
- Add "Courses" to the Footer resources column (links to /courses).

## Files to create / edit
- Create `src/pages/CoursesPage.tsx`
- Add `/courses` route in `src/App.tsx`
- Edit `src/components/Header.tsx` (Work dropdown)
- Edit `src/components/Insights.tsx` (new courses card)
- Edit `src/components/Footer.tsx` (resources link)
- Update `src/i18n/translations/*.json` with the new courses copy keys

## Verification
- Run `bun run build` to confirm no type or import errors.
- Check the new route in the browser: header dropdown, footer, homepage card, and /courses page all render correctly and external links open Thinkific.
- Confirm only the 6 collection courses are listed and the old Aviation Finance 101 card is removed.