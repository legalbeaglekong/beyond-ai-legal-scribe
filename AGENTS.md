# Architecture rules

- Keep the fleet monitor under the existing authenticated gate with separate user-owned workspace, role and append-only review/audit tables; every user administers only their own demo workspace, never another user's records.
- Fetch fleet feeds through authenticated server functions with at most six concurrent requests; no paid-provider credentials or private watch lists reach browser requests.
- Load fleet maps and exports client-side and pre-optimize their packages; unknown data and unverified reports never become fabricated positions or verified scores.

- Use the existing PillarPage template for editorial topic pages; route heads own their supplied schema and shared FAQ data drives both visible answers and structured data to prevent copy drift.
- Keep the private CP tracker in its own scoped interface with client-only protected routing and append-only, user-owned review records; this isolates demo state and prevents review-history deletion or cross-user access.
- Build CP exports from the same checklist and notice as the screen using client-side imports; this keeps exports consistent without bundling document libraries into server handlers.
- Pre-optimize the tracker export libraries alongside the archived document reader; first-use downloads must not trigger dependency discovery and reload the preview.

- Render archived Word documents client-side through a dynamically imported DOCX reader inside a shadow root; this preserves document markup without leaking document styles into the site or loading browser-only code during SSR.
- Store original archived documents as Lovable asset pointers rather than repository binaries; this keeps downloads unchanged and available to the document reader.
- Pre-optimize dynamically imported document readers in Vite; first-opening an archive must not trigger dependency discovery and reload the preview.
- Keep the manufacturing contract control pane in a dedicated presentational component; this isolates its dense illustrative data and SVG dependency map from the editorial page template.