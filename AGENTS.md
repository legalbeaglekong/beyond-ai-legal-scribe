# Architecture rules

- Use the existing PillarPage template for editorial topic pages; route heads own their supplied schema and shared FAQ data drives both visible answers and structured data to prevent copy drift.

- Render archived Word documents client-side through a dynamically imported DOCX reader inside a shadow root; this preserves document markup without leaking document styles into the site or loading browser-only code during SSR.
- Store original archived documents as Lovable asset pointers rather than repository binaries; this keeps downloads unchanged and available to the document reader.
- Pre-optimize dynamically imported document readers in Vite; first-opening an archive must not trigger dependency discovery and reload the preview.