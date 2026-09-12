# Finish SEO metadata and Section 232 leftovers

## Main Beyond Horizons site
- Add route-level server-rendered metadata for every public marketing page, using a unique title, matching description, Open Graph fields, Twitter card, and a self-referencing canonical on each leaf route.
- Give dynamic expertise and team pages metadata derived from their route parameters, with a compliant Cross-Border M&A title for `/expertise/ma-cross-border`.
- Preserve existing page copy, FAQ bodies, FAQPage structured data, course links, and all pack 08 content.
- Verify `/en-us/` stays out of the sitemap and continues redirecting to `/`; confirm no “ESG-certified” wording returns and the trade-tariff Section 232 content remains unchanged.

## Ascending Asia / Ebook Exporter
- Use the approved Compliance CLEAR pack 09 wording to add the public Section 232 UAS section, five FAQs, Federal Register and BizAdapt sources, educational disclaimer, soft CTA, and self-canonical while retaining the registration form.
- This project is available read-only from the current workspace. I will fully inspect and prepare the exact change, but applying it requires running the implementation from the Ebook Exporter project itself.

## Verification
- Check raw server HTML for all seven canaries, including unique titles, descriptions, and canonicals.
- Confirm FAQ content and FAQPage JSON-LD remain in server HTML where required.
- Confirm no routes were added and all compliance-preservation checks pass.
