# Architecture rules

- Render Legal 500 links through the shared text helper while keeping schema answers plain; this preserves visible/schema wording and prevents nested links in team cards.

- Reject missing expertise/team resources in route beforeLoad and emit noindex without a canonical; missing resources must return HTTP 404 rather than indexable fallback content.
- Keep route-specific linked FAQ rendering separate from plain schema answer strings; both derive from the same answer data without HTML in JSON-LD.
- Scope shared recognition omissions and LegalService overrides through optional page data; this preserves protected pages while allowing explicitly approved route changes.
- Use the root match's not-found flag for generic 404 head metadata; component-level titles otherwise duplicate the inherited SSR title.

- Authorize private demos through a shared server-managed exact-email/domain eligibility function and verified mailbox ownership, with restrictive access policies in addition to owner RLS; UI redirects alone never grant data access.
- Send demo magic links only after server-side allowlist checks, return the same result for unapproved addresses, and keep destinations on approved app origins.
- Preserve a sanitized demo destination across email sign-in and recover provider homepage callbacks through the public auth page; verify access before navigating to a demo.

- Serve CP and fleet demos as public read-only routes using only supplied example data; preserve owner-scoped database policies and never read saved workspaces, reviews or audit records in public views.
- Run the Fleet Risk Monitor demo entirely client-side from a deterministic simulator and fictional local data; no live feeds or keys, so the demo is reproducible and never presents real aircraft facts.
- Load fleet maps and exports client-side and pre-optimize their packages; covenant outputs are flags for review, never legal conclusions.

- Use the existing PillarPage template for editorial topic pages; route heads own their supplied schema and shared FAQ data drives both visible answers and structured data to prevent copy drift.
- Keep FAQ answers mounted in initial HTML on employment, Singapore aviation law, restructuring and transportation pages; accordion state controls visibility without removing search-readable answer text.
- Keep the CP tracker in its own scoped interface with append-only, user-owned review records protected separately from public example viewing; this prevents review-history deletion or cross-user access.
- Build CP exports from the same checklist and notice as the screen using client-side imports; this keeps exports consistent without bundling document libraries into server handlers.
- Pre-optimize the tracker export libraries alongside the archived document reader; first-use downloads must not trigger dependency discovery and reload the preview.

- Render archived Word documents client-side through a dynamically imported DOCX reader inside a shadow root; this preserves document markup without leaking document styles into the site or loading browser-only code during SSR.
- Store original archived documents as Lovable asset pointers rather than repository binaries; this keeps downloads unchanged and available to the document reader.
- Pre-optimize dynamically imported document readers in Vite; first-opening an archive must not trigger dependency discovery and reload the preview.
- Keep the manufacturing contract control pane in a dedicated presentational component; this isolates its dense illustrative data and SVG dependency map from the editorial page template.