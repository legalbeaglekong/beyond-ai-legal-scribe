# Architecture rules

- Render archived Word documents client-side through a dynamically imported DOCX reader inside a shadow root; this preserves document markup without leaking document styles into the site or loading browser-only code during SSR.
- Store original archived documents as Lovable asset pointers rather than repository binaries; this keeps downloads unchanged and available to the document reader.