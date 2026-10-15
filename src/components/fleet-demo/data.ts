// All data in this file is SIMULATED / FICTIONAL for the Fleet Risk Monitor demo.
// Airports and countries are real places; aircraft, operators, lessors, lenders,
// contract terms and news are invented. Country indicators are illustrative only.

export const DAY = 86_400_000;
export const HOUR = 3_600_000;
/** Simulation day 0 (fixed so the demo is deterministic). */
export const SIM_START = Date.UTC(2026, 9, 1, 0, 0, 0);
export const SIM_DAYS = 30;

export type Airport = { code: string; name: string; country: string; lat: number; lon: number };
export const airports: Record<string, Airport> = {
  SIN: { code: 'SIN', name: 'Singapore Changi', country: 'SG', lat: 1.364, lon: 103.991 },
  XSP: { code: 'XSP', name: 'Seletar, Singapore', country: 'SG', lat: 1.417, lon: 103.868 },
  KUL: { code: 'KUL', name: 'Kuala Lumpur Intl', country: 'MY', lat: 2.746, lon: 101.71 },
  JHB: { code: 'JHB', name: 'Senai, Johor', country: 'MY', lat: 1.641, lon: 103.67 },
  BKK: { code: 'BKK', name: 'Suvarnabhumi, Bangkok', country: 'TH', lat: 13.69, lon: 100.75 },
  HKT: { code: 'HKT', name: 'Phuket Intl', country: 'TH', lat: 8.113, lon: 98.317 },
  SYD: { code: 'SYD', name: 'Sydney Kingsford Smith', country: 'AU', lat: -33.946, lon: 151.177 },
  MEL: { code: 'MEL', name: 'Melbourne Tullamarine', country: 'AU', lat: -37.669, lon: 144.841 },
  DPS: { code: 'DPS', name: 'Bali Ngurah Rai', country: 'ID', lat: -8.748, lon: 115.167 },
  CGK: { code: 'CGK', name: 'Jakarta Soekarno-Hatta', country: 'ID', lat: -6.126, lon: 106.656 },
  SUB: { code: 'SUB', name: 'Surabaya Juanda', country: 'ID', lat: -7.38, lon: 112.787 },
  RGN: { code: 'RGN', name: 'Yangon Intl', country: 'MM', lat: 16.907, lon: 96.133 },
  DEL: { code: 'DEL', name: 'Delhi Indira Gandhi', country: 'IN', lat: 28.556, lon: 77.1 },
  BOM: { code: 'BOM', name: 'Mumbai CSMI', country: 'IN', lat: 19.089, lon: 72.866 },
  CMB: { code: 'CMB', name: 'Colombo Bandaranaike', country: 'LK', lat: 7.18, lon: 79.884 },
  DXB: { code: 'DXB', name: 'Dubai Intl', country: 'AE', lat: 25.253, lon: 55.366 },
  DOH: { code: 'DOH', name: 'Doha Hamad', country: 'QA', lat: 25.273, lon: 51.608 },
  IST: { code: 'IST', name: 'Istanbul Airport', country: 'TR', lat: 41.275, lon: 28.752 },
  LTN: { code: 'LTN', name: 'London Luton', country: 'GB', lat: 51.875, lon: -0.368 },
  NCE: { code: 'NCE', name: 'Nice Côte d’Azur', country: 'FR', lat: 43.658, lon: 7.216 },
  SGN: { code: 'SGN', name: 'Ho Chi Minh City Tan Son Nhat', country: 'VN', lat: 10.819, lon: 106.652 },
  PNH: { code: 'PNH', name: 'Phnom Penh Techo', country: 'KH', lat: 11.547, lon: 104.844 },
  REP: { code: 'REP', name: 'Siem Reap-Angkor', country: 'KH', lat: 13.41, lon: 103.81 },
};

/** Approximate bounding boxes, for illustration only: [south, west, north, east]. */
export type Country = { iso: string; name: string; box: [number, number, number, number] };
export const countries: Record<string, Country> = {
  SG: { iso: 'SG', name: 'Singapore', box: [1.15, 103.6, 1.48, 104.1] },
  MY: { iso: 'MY', name: 'Malaysia', box: [0.85, 99.6, 7.4, 119.3] },
  TH: { iso: 'TH', name: 'Thailand', box: [5.6, 97.3, 20.5, 105.6] },
  AU: { iso: 'AU', name: 'Australia', box: [-43.7, 113.1, -10.6, 153.7] },
  ID: { iso: 'ID', name: 'Indonesia', box: [-11, 95, 5.9, 141] },
  MM: { iso: 'MM', name: 'Myanmar', box: [9.8, 92.2, 28.5, 101.2] },
  IN: { iso: 'IN', name: 'India', box: [6.7, 68.1, 35.5, 97.4] },
  LK: { iso: 'LK', name: 'Sri Lanka', box: [5.9, 79.6, 9.9, 81.9] },
  AE: { iso: 'AE', name: 'United Arab Emirates', box: [22.6, 51.5, 26.1, 56.4] },
  QA: { iso: 'QA', name: 'Qatar', box: [24.5, 50.7, 26.2, 51.7] },
  TR: { iso: 'TR', name: 'Türkiye', box: [35.8, 26, 42.1, 44.8] },
  GB: { iso: 'GB', name: 'United Kingdom', box: [49.9, -8.2, 58.7, 1.8] },
  FR: { iso: 'FR', name: 'France', box: [42.3, -4.8, 51.1, 8.2] },
  VN: { iso: 'VN', name: 'Vietnam', box: [8.5, 102.1, 23.4, 109.5] },
  KH: { iso: 'KH', name: 'Cambodia', box: [10.4, 102.3, 14.7, 107.6] },
};

export type Level = 'green' | 'amber' | 'red';
export type JurisdictionRow = {
  iso: string; level: Level; score: number; ctc: string; sanctionsFlag: boolean;
  source: string; reviewed: string;
};
const UNIDROIT = 'https://www.unidroit.org/instruments/security-interests/cape-town-convention/';
/** Illustrative indicators only — not a statement about any country's law. */
export const defaultJurisdictions: JurisdictionRow[] = [
  { iso: 'SG', level: 'green', score: 10, ctc: 'Illustrative: yes', sanctionsFlag: false, source: UNIDROIT, reviewed: '2026-09-30' },
  { iso: 'MY', level: 'green', score: 18, ctc: 'Illustrative: yes', sanctionsFlag: false, source: UNIDROIT, reviewed: '2026-09-30' },
  { iso: 'TH', level: 'green', score: 22, ctc: 'Illustrative: verify', sanctionsFlag: false, source: UNIDROIT, reviewed: '2026-09-30' },
  { iso: 'AU', level: 'green', score: 8, ctc: 'Illustrative: yes', sanctionsFlag: false, source: UNIDROIT, reviewed: '2026-09-30' },
  { iso: 'ID', level: 'amber', score: 45, ctc: 'Illustrative: yes', sanctionsFlag: false, source: UNIDROIT, reviewed: '2026-09-30' },
  { iso: 'MM', level: 'red', score: 80, ctc: 'Illustrative: verify', sanctionsFlag: true, source: UNIDROIT, reviewed: '2026-09-30' },
  { iso: 'IN', level: 'amber', score: 40, ctc: 'Illustrative: yes', sanctionsFlag: false, source: UNIDROIT, reviewed: '2026-09-30' },
  { iso: 'LK', level: 'amber', score: 48, ctc: 'Illustrative: verify', sanctionsFlag: false, source: UNIDROIT, reviewed: '2026-09-30' },
  { iso: 'AE', level: 'green', score: 20, ctc: 'Illustrative: yes', sanctionsFlag: false, source: UNIDROIT, reviewed: '2026-09-30' },
  { iso: 'QA', level: 'green', score: 22, ctc: 'Illustrative: verify', sanctionsFlag: false, source: UNIDROIT, reviewed: '2026-09-30' },
  { iso: 'TR', level: 'amber', score: 38, ctc: 'Illustrative: yes', sanctionsFlag: false, source: UNIDROIT, reviewed: '2026-09-30' },
  { iso: 'GB', level: 'green', score: 8, ctc: 'Illustrative: yes', sanctionsFlag: false, source: UNIDROIT, reviewed: '2026-09-30' },
  { iso: 'FR', level: 'green', score: 10, ctc: 'Illustrative: verify', sanctionsFlag: false, source: UNIDROIT, reviewed: '2026-09-30' },
  { iso: 'VN', level: 'amber', score: 35, ctc: 'Illustrative: verify', sanctionsFlag: false, source: UNIDROIT, reviewed: '2026-09-30' },
  { iso: 'KH', level: 'amber', score: 50, ctc: 'Illustrative: verify', sanctionsFlag: false, source: UNIDROIT, reviewed: '2026-09-30' },
];

export type Terms = {
  lease: {
    excludedCountries: string[]; permittedArea: string; habitualBase: string; maxDaysOutsideBase: number;
    subleaseAllowed: boolean; wetleaseAllowed: boolean; sanctionsClause: string; noticeHours: number;
    returnLocation: string; refs: { excluded: string; base: string; sublease: string; sanctions: string; notice: string; returnLoc: string };
  };
  insurance: {
    warRisks: string; geographicLimits: string[]; warExcludedCountries: string[]; priorNoticeCountries: string[];
    minLiabilityUsdM: number; additionalInsureds: string[]; certExpiry: string; policyRef: string;
  };
};

export type Aircraft = {
  reg: string; msn: string; type: string; category: 'Airliner' | 'Turboprop' | 'Business jet' | 'Helicopter';
  operator: string; lessor: string; lender: string; spv: string; leaseExpiry: string; speedKmh: number;
  cycle: { ap: string; hours: number }[];
  holdFrom?: { day: number; ap: string };
  darkFromDay?: number;
  terms: Terms;
};

const APAC = ['SG', 'MY', 'TH', 'AU', 'ID', 'IN', 'LK', 'VN', 'KH', 'MM'];
const ME = ['AE', 'QA'];
const EU = ['GB', 'FR', 'TR'];

function terms(p: Partial<Terms['lease']> & { base: string; excluded: string[]; limits: string[]; certExpiry: string; ref: string; warExcl?: string[]; notice?: string[] }): Terms {
  return {
    lease: {
      excludedCountries: p.excluded, permittedArea: p.permittedArea ?? 'Asia-Pacific', habitualBase: p.base,
      maxDaysOutsideBase: p.maxDaysOutsideBase ?? 21, subleaseAllowed: p.subleaseAllowed ?? false, wetleaseAllowed: p.wetleaseAllowed ?? false,
      sanctionsClause: 'Lessee shall not operate the Aircraft in breach of Sanctions (sample definition).', noticeHours: p.noticeHours ?? 48,
      returnLocation: p.returnLocation ?? 'Lessee’s habitual base airport',
      refs: { excluded: 'Sample Lease cl. 8.2', base: 'Sample Lease cl. 8.4', sublease: 'Sample Lease cl. 9.1', sanctions: 'Sample Lease cl. 8.6', notice: 'Sample Lease cl. 8.3', returnLoc: 'Sample Lease cl. 18.1' },
    },
    insurance: {
      warRisks: 'AVN 48B war exclusion with AVN 52E write-back (sample)', geographicLimits: p.limits,
      warExcludedCountries: p.warExcl ?? [], priorNoticeCountries: p.notice ?? [], minLiabilityUsdM: 750,
      additionalInsureds: ['Lessor', 'Security Trustee'], certExpiry: p.certExpiry, policyRef: p.ref,
    },
  };
}

export const fleet: Aircraft[] = [
  { reg: '9V-DMA', msn: '10411', type: 'A320neo', category: 'Airliner', operator: 'Southsea Air', lessor: 'Equator Leasing', lender: 'Meridian Bank', spv: 'Equator 7 Ltd (Ireland)', leaseExpiry: '2033-03-31', speedKmh: 780,
    cycle: [{ ap: 'SIN', hours: 10 }, { ap: 'KUL', hours: 2 }, { ap: 'SIN', hours: 3 }, { ap: 'BKK', hours: 2 }],
    terms: terms({ base: 'SG', excluded: ['MM'], limits: [...APAC, ...ME], certExpiry: '2027-03-31', ref: 'Sample Policy HUL-0411' }) },
  { reg: 'VH-DMB', msn: '66120', type: '737-8', category: 'Airliner', operator: 'Coralline Airways', lessor: 'Equator Leasing', lender: 'Harbourline Capital', spv: 'Equator 9 Ltd (Ireland)', leaseExpiry: '2032-11-30', speedKmh: 790,
    cycle: [{ ap: 'SYD', hours: 8 }, { ap: 'DPS', hours: 3 }, { ap: 'SYD', hours: 6 }, { ap: 'MEL', hours: 2 }],
    terms: terms({ base: 'AU', excluded: ['MM'], limits: APAC, certExpiry: '2027-01-15', ref: 'Sample Policy HUL-6612' }) },
  { reg: 'PK-DMC', msn: '1588', type: 'ATR 72-600', category: 'Turboprop', operator: 'Nusantara Link', lessor: 'Kestrel Turboprop Leasing', lender: 'Meridian Bank', spv: 'Kestrel TP 3 Pte Ltd (Singapore)', leaseExpiry: '2030-06-30', speedKmh: 500,
    cycle: [{ ap: 'CGK', hours: 6 }, { ap: 'SUB', hours: 2 }, { ap: 'DPS', hours: 3 }, { ap: 'SUB', hours: 2 }],
    holdFrom: { day: 14, ap: 'DPS' },
    terms: terms({ base: 'ID', excluded: ['MM'], limits: APAC, certExpiry: '2026-12-31', ref: 'Sample Policy HUL-1588', maxDaysOutsideBase: 30 }) },
  { reg: '9M-DMD', msn: '10672', type: 'A320neo', category: 'Airliner', operator: 'Tanjung Air', lessor: 'Equator Leasing', lender: 'Meridian Bank', spv: 'Equator 11 Ltd (Ireland)', leaseExpiry: '2034-01-31', speedKmh: 780,
    cycle: [{ ap: 'KUL', hours: 9 }, { ap: 'BKK', hours: 2 }, { ap: 'KUL', hours: 4 }, { ap: 'SIN', hours: 2 }],
    holdFrom: { day: 9, ap: 'RGN' },
    terms: terms({ base: 'MY', excluded: ['MM'], limits: [...APAC, ...ME], certExpiry: '2027-05-31', ref: 'Sample Policy HUL-1067' }) },
  { reg: 'HS-DME', msn: '66455', type: '737-8', category: 'Airliner', operator: 'Siam Horizon', lessor: 'Lotus Aircraft Finance', lender: 'Harbourline Capital', spv: 'Lotus AF 2 Ltd (Cayman)', leaseExpiry: '2031-08-31', speedKmh: 790,
    cycle: [{ ap: 'BKK', hours: 10 }, { ap: 'DEL', hours: 3 }, { ap: 'BKK', hours: 8 }, { ap: 'HKT', hours: 2 }],
    holdFrom: { day: 18, ap: 'IST' },
    terms: terms({ base: 'TH', excluded: ['MM'], limits: [...APAC, ...ME], certExpiry: '2027-02-28', ref: 'Sample Policy HUL-6645', notice: ['TR'] }) },
  { reg: 'A6-DMF', msn: '6512', type: 'G650', category: 'Business jet', operator: 'Falcon Crest Aviation', lessor: 'Meridian Bank (finance lease)', lender: 'Meridian Bank', spv: 'Falcon Crest One Ltd (BVI)', leaseExpiry: '2029-12-31', speedKmh: 900,
    cycle: [{ ap: 'DXB', hours: 40 }, { ap: 'NCE', hours: 30 }, { ap: 'LTN', hours: 36 }, { ap: 'DOH', hours: 12 }],
    terms: terms({ base: 'AE', excluded: ['MM'], limits: [...ME, ...EU, ...APAC], certExpiry: '2026-10-12', ref: 'Sample Policy BJ-6512', permittedArea: 'Worldwide except Excluded Countries', maxDaysOutsideBase: 45 }) },
  { reg: 'VT-DMG', msn: '10890', type: 'A320neo', category: 'Airliner', operator: 'Indus Skyways', lessor: 'Kestrel Aircraft Leasing', lender: 'Harbourline Capital', spv: 'Kestrel AL 5 Ltd (Ireland)', leaseExpiry: '2033-09-30', speedKmh: 780,
    cycle: [{ ap: 'DEL', hours: 7 }, { ap: 'BOM', hours: 2 }, { ap: 'DEL', hours: 5 }, { ap: 'CMB', hours: 2 }],
    darkFromDay: 12,
    terms: terms({ base: 'IN', excluded: ['MM'], limits: [...APAC, ...ME], certExpiry: '2027-04-30', ref: 'Sample Policy HUL-1089' }) },
  { reg: '9V-DMH', msn: '525C-0388', type: 'CJ4', category: 'Business jet', operator: 'Lion City Jets', lessor: 'Equator Leasing', lender: 'Meridian Bank', spv: 'Equator BJ 1 Pte Ltd (Singapore)', leaseExpiry: '2028-07-31', speedKmh: 700,
    cycle: [{ ap: 'XSP', hours: 30 }, { ap: 'KUL', hours: 8 }, { ap: 'XSP', hours: 20 }, { ap: 'HKT', hours: 26 }],
    terms: terms({ base: 'SG', excluded: ['MM'], limits: APAC, certExpiry: '2026-10-27', ref: 'Sample Policy BJ-0388' }) },
  { reg: '9V-DMJ', msn: '31877', type: 'AW139', category: 'Helicopter', operator: 'Straits Offshore Services', lessor: 'Rotorline Leasing', lender: 'Meridian Bank', spv: 'Rotorline 4 Pte Ltd (Singapore)', leaseExpiry: '2030-02-28', speedKmh: 280,
    cycle: [{ ap: 'XSP', hours: 14 }, { ap: 'JHB', hours: 3 }, { ap: 'XSP', hours: 20 }, { ap: 'KUL', hours: 5 }],
    terms: terms({ base: 'SG', excluded: ['MM'], limits: ['SG', 'MY', 'ID'], certExpiry: '2027-06-30', ref: 'Sample Policy RW-3187' }) },
  { reg: 'VN-DMK', msn: '1602', type: 'ATR 72-600', category: 'Turboprop', operator: 'Mekong Regional', lessor: 'Kestrel Turboprop Leasing', lender: 'Harbourline Capital', spv: 'Kestrel TP 4 Pte Ltd (Singapore)', leaseExpiry: '2031-04-30', speedKmh: 500,
    cycle: [{ ap: 'SGN', hours: 3 }, { ap: 'PNH', hours: 30 }, { ap: 'REP', hours: 20 }, { ap: 'PNH', hours: 40 }],
    terms: terms({ base: 'VN', excluded: ['MM'], limits: APAC, certExpiry: '2027-01-31', ref: 'Sample Policy HUL-1602', maxDaysOutsideBase: 14 }) },
];

export type NewsKind = 'administration' | 'detention' | 'aoc' | 'sanctions' | 'wetlease' | 'sublease' | 'general';
export type NewsItem = { id: string; at: number; title: string; summary: string; tag: string; kind: NewsKind; operator?: string; aircraft: string[]; impact: number };
const n = (id: string, day: number, hour: number, title: string, summary: string, tag: string, kind: NewsKind, aircraft: string[], impact: number, operator?: string): NewsItem =>
  ({ id, at: SIM_START + day * DAY + hour * HOUR, title, summary, tag, kind, aircraft, impact, ...(operator ? { operator } : {}) });

export const news: NewsItem[] = [
  n('N01', 0, 9, 'Southsea Air reports steady September load factors', 'Fictional carrier says regional demand held firm.', 'Operator', 'general', ['9V-DMA'], -5, 'Southsea Air'),
  n('N02', 1, 14, 'Nusantara Link delays quarterly lessor payments', 'Fictional report says some rent payments slipped by two weeks.', 'Credit', 'general', ['PK-DMC'], 15, 'Nusantara Link'),
  n('N03', 2, 8, 'Tanjung Air announces charter programme to Yangon', 'Fictional charter series planned for the coming fortnight.', 'Routes', 'general', ['9M-DMD'], 10, 'Tanjung Air'),
  n('N04', 3, 11, 'Coralline Airways in talks to wet-lease capacity to Pacific Breeze', 'Fictional carrier seeks to place a 737-8 with a third-party operator.', 'Operator change', 'general', ['VH-DMB'], 10, 'Coralline Airways'),
  n('N05', 4, 16, 'Indus Skyways pilots announce work-to-rule', 'Fictional industrial action may disrupt schedules.', 'Operations', 'general', ['VT-DMG'], 12, 'Indus Skyways'),
  n('N06', 5, 10, 'Falcon Crest Aviation insurance renewal under negotiation', 'Fictional broker note says renewal terms not yet agreed.', 'Insurance', 'general', ['A6-DMF'], 8, 'Falcon Crest Aviation'),
  n('N07', 6, 9, 'Siam Horizon adds seasonal Europe charters', 'Fictional programme includes Istanbul rotations.', 'Routes', 'general', ['HS-DME'], 6, 'Siam Horizon'),
  n('N08', 7, 13, 'Coralline 737-8 seen in Pacific Breeze livery', 'Fictional spotter report suggests wet-lease has started.', 'Operator change', 'wetlease', ['VH-DMB'], 15, 'Coralline Airways'),
  n('N09', 8, 7, 'Mekong Regional bases more flying in Cambodia', 'Fictional schedule shows most rotations from Phnom Penh.', 'Routes', 'general', ['VN-DMK'], 6, 'Mekong Regional'),
  n('N10', 9, 6, 'Tanjung Air A320neo parked in Yangon after charter', 'Fictional report says aircraft remains on ground pending crew rotation.', 'Location', 'general', ['9M-DMD'], 12, 'Tanjung Air'),
  n('N11', 10, 15, 'Nusantara Link misses fuel supplier payment', 'Fictional supplier puts carrier on cash-in-advance terms.', 'Credit', 'general', ['PK-DMC'], 15, 'Nusantara Link'),
  n('N12', 11, 12, 'New sanctions listing names Orchid Freight Holdings', 'Fictional listing of an entity reported as a charter customer of several carriers.', 'Sanctions', 'sanctions', ['9M-DMD'], 15, 'Tanjung Air'),
  n('N13', 12, 3, 'Indus Skyways A320neo stops broadcasting position', 'Fictional tracker community notes no reports since early morning.', 'Location', 'general', ['VT-DMG'], 8, 'Indus Skyways'),
  n('N14', 13, 10, 'Regulator reviews Nusantara Link maintenance records', 'Fictional audit after missed payments to MRO provider.', 'Regulatory', 'general', ['PK-DMC'], 10, 'Nusantara Link'),
  n('N15', 14, 17, 'Nusantara Link ATR detained at Bali over unpaid airport charges', 'Fictional report says airport authority has held the aircraft.', 'Detention', 'detention', ['PK-DMC'], 20, 'Nusantara Link'),
  n('N16', 15, 9, 'Lion City Jets renews charter certificate', 'Fictional operator confirms routine renewal.', 'Operator', 'general', ['9V-DMH'], -5, 'Lion City Jets'),
  n('N17', 16, 11, 'Nusantara Link AOC suspended pending audit', 'Fictional regulator suspends air operator certificate.', 'Regulatory', 'aoc', ['PK-DMC'], 25, 'Nusantara Link'),
  n('N18', 17, 14, 'Siam Horizon 737-8 departs on Istanbul charter', 'Fictional schedule shows a multi-week rotation in Türkiye.', 'Routes', 'general', ['HS-DME'], 5, 'Siam Horizon'),
  n('N19', 19, 8, 'Mekong Regional seeks rent deferral', 'Fictional carrier asks lessors for three-month deferral.', 'Credit', 'general', ['VN-DMK'], 15, 'Mekong Regional'),
  n('N20', 20, 10, 'Nusantara Link enters administration', 'Fictional court appoints administrators.', 'Insolvency', 'administration', ['PK-DMC'], 30, 'Nusantara Link'),
  n('N21', 21, 13, 'Straits Offshore wins new rig support contract', 'Fictional contract adds helicopter flying in Johor.', 'Operator', 'general', ['9V-DMJ'], -5, 'Straits Offshore Services'),
  n('N22', 23, 9, 'Coralline Airways confirms Pacific Breeze sub-lease extension', 'Fictional statement extends the arrangement by six months.', 'Operator change', 'sublease', ['VH-DMB'], 10, 'Coralline Airways'),
  n('N23', 25, 15, 'Indus Skyways aircraft reported at unnamed MRO', 'Fictional unverified report; location not confirmed.', 'Location', 'general', ['VT-DMG'], 6, 'Indus Skyways'),
  n('N24', 27, 11, 'Tanjung Air crew dispute delays repositioning from Yangon', 'Fictional report says return flight postponed.', 'Location', 'general', ['9M-DMD'], 10, 'Tanjung Air'),
];
