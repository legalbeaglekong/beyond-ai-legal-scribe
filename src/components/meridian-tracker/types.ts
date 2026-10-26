export type MeridianStatus = 'outstanding' | 'received' | 'issue' | 'satisfied' | 'waived';
export interface MeridianGate { order: number; gate: string; name: string; firm: string; role: string; email: string; scope: string }
export interface MeridianParty { name: string; role: string; counsel: string; email: string }
export interface MeridianPartyGroup { group: string; items: MeridianParty[] }
export interface MeridianDate { label: string; date: string; note: string }
export interface MeridianRow { sec: string; ref: string; jur: string; title: string; req: string; by: string; gate: string; status: MeridianStatus; note: string; due: string; recordedAt?: string }
export interface MeridianData { JUR: Record<string, string>; GATES: Record<string, MeridianGate>; PARTIES: MeridianPartyGroup[]; DATES: MeridianDate[]; ROWS: MeridianRow[] }
export const statusLabels: Record<MeridianStatus, string> = {
  outstanding: 'Outstanding',
  received: 'Received by system pending human review',
  issue: 'Issue raised by human reviewer',
  satisfied: 'Satisfied (confirmed by human reviewer)',
  waived: 'Waived / deferred to CS (confirmed by human reviewer)',
};
export const statusOrder: MeridianStatus[] = ['outstanding', 'received', 'issue', 'satisfied', 'waived'];
export const demoNote = 'Demonstration only. All companies, people, email addresses, amounts, dates and legal time limits on this page are fictional or assumed. Do not use them for a real transaction. Time limits for registration and stamping are examples only; check the law of each jurisdiction.';
export const noticeParagraphs = [
  'Beyond Horizons by Bethel Chambers LLC prepares this tracker for its client only (in this demo, the Mandated Lead Arrangers). We do not act for the Obligors, the Sponsors, the Existing Financier or any other party.',
  'Every other party and its advisers must not rely on this tracker and must make their own checks of each condition precedent and each document.',
  'We accept no responsibility or liability for any error, omission or inaccuracy in this tracker to any person, except to our client.',
  "'Received by system pending human review' means only that a document arrived. It does not mean that the document is correct, complete or satisfactory.",
];
export const keyFacts: [string, string][] = [
  ['Project', '120 MW hyperscale data centre campus, Johor, Malaysia (Phase 1: 48 MW)'],
  ['Borrower', 'Meridian DC (Johor) Sdn. Bhd.'],
  ['Facilities', 'US$700m term loan · US$100m capex facility · US$50m LC facility'],
  ['Documentation', 'LMA-based (APLMA form) senior facilities agreement and intercreditor agreement, English law'],
  ['Refinancing', 'US$300m existing bridge facility from Kestrel Bank Ltd, repaid from first utilisation'],
  ['Security', 'Malaysian debenture, land charge, share charges (Malaysia and Singapore), account and contract assignments, Cayman capital call security'],
  ['Debt : equity', '70 : 30'],
  ['Closing mailbox', 'closingtracker.meridian@example.com'],
];
export const disclaimer = 'Beyond Horizons is a practice group of Bethel Chambers LLC, a Singapore law corporation licensed and regulated by the Legal Services Regulatory Authority (LSRA), a department under the Singapore Ministry of Law. UEN: 202007868D. Content here is general information only and does not constitute legal advice. This page is a demonstration with fictional data.';
