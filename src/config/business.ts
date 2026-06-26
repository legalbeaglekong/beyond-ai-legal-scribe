// Single source of truth for Beyond Horizons NAP + entity data.
// Used by Footer, Contact, About, JSON-LD blocks.
// Do not hard-code these strings anywhere else — import from here.

export const LEGAL_ENTITY = "Bethel Chambers LLC";
export const BRAND = "Beyond Horizons";
export const BRAND_FULL = "Beyond Horizons by Bethel Chambers LLC";

export const UEN = "202007868D";

export const CANONICAL_ADDRESS = "39B Neil Road, #03-01, Singapore 088823";
export const ADDRESS_PARTS = {
  streetAddress: "39B Neil Road, #03-01",
  addressLocality: "Singapore",
  postalCode: "088823",
  addressCountry: "SG",
} as const;

export const EMAIL = "HL@beyondhorizons.sg";
export const WHATSAPP_URL = "https://wa.me/6597265330";

export const SITE_URL = "https://beyondhorizons.sg";

export const LINKEDIN_URL = "https://www.linkedin.com/company/beyondhorizonslegal";
export const PARENT_PRIVACY_URL = "https://bethelchambers.com/privacy-policy/";
export const PARENT_TERMS_URL = "https://bethelchambers.com/terms-of-service/";

export const REGULATORY_BLURB =
  "Beyond Horizons is a specialist practice group of Bethel Chambers LLC, a Singapore law corporation regulated by the Law Society of Singapore.";

export const LEGAL_DISCLAIMER =
  "Content on this site is general information only and does not constitute legal advice. Use of this site does not create a solicitor-client relationship.";
