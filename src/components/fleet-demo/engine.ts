import { airports, countries, DAY, HOUR, news, SIM_START, type Aircraft, type JurisdictionRow, type Level, type NewsItem } from './data';

export type Seg = { kind: 'ground'; ap: string; start: number; end: number } | { kind: 'air'; from: string; to: string; start: number; end: number };
export type Pos = { lat: number; lon: number; heading: number; onGround: boolean; ap?: string; country: string | null; dest?: string; dark: boolean; reportedAt: number };

export function km(a: { lat: number; lon: number }, b: { lat: number; lon: number }) {
  const r = Math.PI / 180; const x = Math.sin((b.lat - a.lat) * r / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin((b.lon - a.lon) * r / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
}
function bearing(a: { lat: number; lon: number }, b: { lat: number; lon: number }) {
  return (Math.atan2(b.lon - a.lon, b.lat - a.lat) * 180 / Math.PI + 360) % 360;
}

const cache = new Map<string, Seg[]>();
/** Deterministic schedule from day -90 to day +31. */
export function schedule(a: Aircraft): Seg[] {
  const hit = cache.get(a.reg); if (hit) return hit;
  const segs: Seg[] = []; let t = SIM_START - 90 * DAY; const end = SIM_START + 31 * DAY; let i = 0; let at = a.cycle[0]!.ap;
  const hold = a.holdFrom ? SIM_START + a.holdFrom.day * DAY : Infinity;
  const fly = (to: string) => { const d = km(airports[at]!, airports[to]!); const dur = Math.max(0.5, d / a.speedKmh + 0.4) * HOUR; segs.push({ kind: 'air', from: at, to, start: t, end: t + dur }); t += dur; at = to; };
  while (t < end) {
    const stop = a.cycle[i % a.cycle.length]!;
    if (t >= hold && a.holdFrom) { if (at !== a.holdFrom.ap) fly(a.holdFrom.ap); segs.push({ kind: 'ground', ap: at, start: t, end: end + DAY }); break; }
    if (stop.ap !== at) fly(stop.ap);
    segs.push({ kind: 'ground', ap: at, start: t, end: t + stop.hours * HOUR }); t += stop.hours * HOUR; i++;
  }
  cache.set(a.reg, segs); return segs;
}
function segAt(segs: Seg[], t: number) { let lo = 0, hi = segs.length - 1; while (lo < hi) { const m = (lo + hi + 1) >> 1; if (segs[m]!.start <= t) lo = m; else hi = m - 1; } return lo; }

export function countryAt(lat: number, lon: number) {
  // Smallest matching box wins (approximate, illustration only).
  let best: string | null = null, area = Infinity;
  for (const c of Object.values(countries)) { const [s, w, n, e] = c.box; if (lat >= s && lat <= n && lon >= w && lon <= e) { const ar = (n - s) * (e - w); if (ar < area) { area = ar; best = c.iso; } } }
  return best;
}

export function truePos(a: Aircraft, t: number): Pos {
  const segs = schedule(a); const s = segs[segAt(segs, t)]!;
  if (s.kind === 'ground') { const ap = airports[s.ap]!; const next = segs[segAt(segs, t) + 1]; return { lat: ap.lat, lon: ap.lon, heading: 0, onGround: true, ap: s.ap, country: ap.country, dest: next?.kind === 'air' ? next.to : undefined, dark: false, reportedAt: t } as Pos; }
  const f = airports[s.from]!, to = airports[s.to]!; const k = Math.min(1, Math.max(0, (t - s.start) / (s.end - s.start)));
  const lat = f.lat + (to.lat - f.lat) * k, lon = f.lon + (to.lon - f.lon) * k;
  return { lat, lon, heading: bearing(f, to), onGround: false, country: countryAt(lat, lon), dest: s.to, dark: false, reportedAt: t };
}
/** Reported position: frozen when the transponder goes dark. */
export function position(a: Aircraft, t: number): Pos {
  if (a.darkFromDay !== undefined) { const d = SIM_START + a.darkFromDay * DAY; if (t > d) return { ...truePos(a, d), dark: true, reportedAt: d }; }
  return truePos(a, t);
}

export function trail(a: Aircraft, t: number, days = 30): [number, number][] {
  const pts: [number, number][] = []; const from = t - days * DAY; const darkAt = a.darkFromDay !== undefined ? SIM_START + a.darkFromDay * DAY : Infinity;
  for (const s of schedule(a)) { if (s.end < from || s.start > Math.min(t, darkAt)) continue; if (s.kind === 'ground') { const ap = airports[s.ap]!; pts.push([ap.lat, ap.lon]); } }
  const p = position(a, t); pts.push([p.lat, p.lon]); return pts;
}

/** Hours on ground per country over a window. */
export function groundByCountry(a: Aircraft, t: number, days = 30) {
  const out: Record<string, number> = {}; const from = t - days * DAY;
  for (const s of schedule(a)) { if (s.kind !== 'ground' || s.end < from || s.start > t) continue; const c = airports[s.ap]!.country; out[c] = (out[c] ?? 0) + (Math.min(t, s.end) - Math.max(from, s.start)) / HOUR; }
  return out;
}
/** Continuous ground time (hours) at current airport. */
function groundHours(a: Aircraft, t: number) { const segs = schedule(a); const s = segs[segAt(segs, t)]!; return s.kind === 'ground' ? (t - s.start) / HOUR : 0; }
/** Continuous days outside habitual base country, ignoring transits under 24h at base. */
function daysOutsideBase(a: Aircraft, t: number) {
  const segs = schedule(a); let i = segAt(segs, t); let since = t;
  for (; i >= 0; i--) { const s = segs[i]!; if (s.kind === 'ground' && airports[s.ap]!.country === a.terms.lease.habitualBase) break; since = s.start; }
  return (t - since) / DAY;
}
function driftPct(a: Aircraft, t: number) {
  let out = 0, n = 0; for (let x = t - 90 * DAY; x <= t; x += 12 * HOUR) { const p = truePos(a, x); n++; if (p.country !== a.terms.lease.habitualBase) out++; } return Math.round(out / n * 100);
}
function enteredExcludedAt(a: Aircraft, t: number) {
  const segs = schedule(a); let i = segAt(segs, t); let at: number | null = null;
  for (; i >= 0; i--) { const s = segs[i]!; const c = s.kind === 'ground' ? airports[s.ap]!.country : airports[s.to]!.country; if (!a.terms.lease.excludedCountries.includes(c)) break; at = s.kind === 'ground' ? s.start : s.end; if (s.kind === 'air') break; }
  return at;
}

export type Flag = { key: string; check: string; level: 'amber' | 'red'; title: string; ref: string; consequence: string; detail: string; deadline?: number };
export type Factor = { label: string; value: number; why: string };
export type Risk = { overall: number; level: Level; factors: Record<FactorKey, Factor>; flags: Flag[]; pos: Pos; covenant: Level; insurance: Level };
export type FactorKey = 'attachment' | 'jurisdiction' | 'drift' | 'operator' | 'covenant';
export type Weights = Record<FactorKey, number>;
export const defaultWeights: Weights = { attachment: 25, jurisdiction: 20, drift: 15, operator: 20, covenant: 20 };
export const lvl = (s: number): Level => s >= 60 ? 'red' : s >= 30 ? 'amber' : 'green';

export function releasedNews(t: number) { return news.filter(x => x.at <= t); }

export function assess(a: Aircraft, t: number, juris: JurisdictionRow[], weights: Weights): Risk {
  const pos = position(a, t); const L = a.terms.lease, I = a.terms.insurance; const flags: Flag[] = [];
  const jr = (iso: string | null) => juris.find(j => j.iso === iso);
  const here = pos.onGround ? pos.country : null; const dest = pos.dest ? airports[pos.dest]!.country : null;
  const items = releasedNews(t).filter(x => x.aircraft.includes(a.reg));
  // Covenant checks — flags for review, never conclusions.
  if (here && L.excludedCountries.includes(here)) {
    const entered = enteredExcludedAt(a, t) ?? t; const deadline = entered + L.noticeHours * HOUR;
    flags.push({ key: 'excluded', check: 'Excluded Country', level: 'red', title: 'Lease breach risk: Excluded Country', ref: L.refs.excluded, consequence: 'May require lessor consent or notice under sample terms.', detail: `On ground in ${countries[here]?.name ?? here}, listed as an Excluded Country.`, deadline });
  } else if (dest && L.excludedCountries.includes(dest)) {
    flags.push({ key: 'excluded-plan', check: 'Excluded Country', level: 'red', title: 'Lease breach risk: route to Excluded Country', ref: L.refs.excluded, consequence: 'May require lessor consent before operation under sample terms.', detail: `Current routing ends in ${countries[dest]?.name ?? dest}.` });
  }
  const insC = here ?? dest;
  if (insC && (!I.geographicLimits.includes(insC) || I.warExcludedCountries.includes(insC))) {
    flags.push({ key: 'insurance-geo', check: 'Insurance', level: 'red', title: 'Insurance coverage gap', ref: I.policyRef, consequence: 'May fall outside sample hull & liability geographic limits; insurer position to be confirmed.', detail: `${countries[insC]?.name ?? insC} is outside the sample policy's geographic limits.` });
  }
  if (insC && I.priorNoticeCountries.includes(insC)) flags.push({ key: 'insurance-notice', check: 'Insurance', level: 'amber', title: 'Insurer prior notice territory', ref: I.policyRef, consequence: 'Sample policy may require prior notice to insurers.', detail: `${countries[insC]?.name ?? insC} needs prior insurer notice under sample terms.` });
  const out = daysOutsideBase(a, t);
  if (out > L.maxDaysOutsideBase) flags.push({ key: 'base', check: 'Habitual Base', level: 'red', title: 'Time outside Habitual Base exceeds limit', ref: L.refs.base, consequence: 'May require lessor consent under sample terms.', detail: `${out.toFixed(1)} days outside ${L.habitualBase} (limit ${L.maxDaysOutsideBase}).` });
  else if (out > L.maxDaysOutsideBase * 0.7) flags.push({ key: 'base', check: 'Habitual Base', level: 'amber', title: 'Approaching Habitual Base limit', ref: L.refs.base, consequence: 'Monitor; consent may be needed if the limit is passed.', detail: `${out.toFixed(1)} of ${L.maxDaysOutsideBase} days outside ${L.habitualBase}.` });
  const certDays = (Date.parse(I.certExpiry) - t) / DAY;
  if (certDays <= 7) flags.push({ key: 'cert', check: 'Insurance', level: 'red', title: certDays < 0 ? 'Insurance certificate expired' : 'Insurance certificate expires within 7 days', ref: I.policyRef, consequence: 'Renewal evidence may be required under sample terms.', detail: certDays < 0 ? `Expired ${Math.abs(Math.ceil(certDays))} days ago.` : `${Math.ceil(certDays)} days left.` });
  else if (certDays <= 30) flags.push({ key: 'cert', check: 'Insurance', level: 'amber', title: `Insurance certificate expires within ${certDays <= 14 ? 14 : 30} days`, ref: I.policyRef, consequence: 'Request renewal evidence from lessee.', detail: `${Math.ceil(certDays)} days left.` });
  const opChange = items.find(x => (x.kind === 'wetlease' && !L.wetleaseAllowed) || (x.kind === 'sublease' && !L.subleaseAllowed));
  if (opChange) flags.push({ key: 'sublease', check: 'Sub-lease / wet-lease', level: 'red', title: 'Possible unapproved sub-lease or wet-lease', ref: L.refs.sublease, consequence: 'May require lessor consent under sample terms.', detail: `Reported: “${opChange.title}”.` });
  if (items.some(x => x.kind === 'sanctions')) flags.push({ key: 'sanctions', check: 'Sanctions', level: 'red', title: 'Sanctions screening flag', ref: L.refs.sanctions, consequence: 'Screening review suggested under sample sanctions clause.', detail: 'News links a newly listed (fictional) entity to this operator.' });
  if (pos.dark) { const h = (t - pos.reportedAt) / HOUR; flags.push({ key: 'dark', check: 'Position', level: h > 48 ? 'red' : 'amber', title: 'Transponder dark — no position reports', ref: 'Sample Lease cl. 11.2 (information)', consequence: 'Request location confirmation from lessee.', detail: `Last report ${h.toFixed(0)}h ago.` }); }
  if (items.some(x => x.kind === 'detention')) flags.push({ key: 'detention', check: 'Detention', level: 'red', title: 'Reported detention of aircraft', ref: 'Sample Lease cl. 14 (liens)', consequence: 'May require lessee to discharge liens under sample terms.', detail: 'News reports the aircraft is held over unpaid charges.' });

  const gh = groundHours(a, t) / 24; const cl = jr(here)?.level ?? 'green';
  const attachment = Math.min(100, Math.round((cl === 'red' ? 30 + gh * 12 : cl === 'amber' ? 10 + gh * 6 : Math.min(25, gh * 3)) + (items.some(x => x.kind === 'detention') ? 40 : 0)));
  const jc = jr(pos.country) ?? jr(here); const jurisdiction = Math.min(100, (jc?.score ?? 30) + (jc?.sanctionsFlag ? 15 : 0));
  const drift = driftPct(a, t);
  const operator = Math.max(0, Math.min(100, 10 + items.reduce((s, x) => s + x.impact, 0)));
  const covenant = flags.some(f => f.level === 'red') ? 90 : flags.some(f => f.level === 'amber') ? 50 : 0;
  const factors: Risk['factors'] = {
    attachment: { label: 'Attachment / detention', value: attachment, why: here ? `${gh.toFixed(1)} days on ground in ${countries[here]?.name ?? here} (${cl}).` : 'Airborne.' },
    jurisdiction: { label: 'Jurisdiction', value: jurisdiction, why: `${countries[jc?.iso ?? '']?.name ?? 'Unknown'} illustrative score ${jc?.score ?? '—'}${jc?.sanctionsFlag ? ' + sanctions flag' : ''}.` },
    drift: { label: 'Habitual base drift', value: drift, why: `${drift}% of last 90 days outside ${L.habitualBase}.` },
    operator: { label: 'Operator health', value: operator, why: `${items.length} news item(s) affecting operator.` },
    covenant: { label: 'Contract covenants', value: covenant, why: `${flags.filter(f => f.level === 'red').length} red, ${flags.filter(f => f.level === 'amber').length} amber flag(s).` },
  };
  const wsum = Object.values(weights).reduce((s, w) => s + w, 0) || 1;
  const overall = Math.round((Object.keys(factors) as FactorKey[]).reduce((s, k) => s + factors[k].value * weights[k], 0) / wsum);
  const insFlags = flags.filter(f => f.check === 'Insurance'); const covFlags = flags.filter(f => f.check !== 'Insurance');
  const worst = (fs: Flag[]): Level => fs.some(f => f.level === 'red') ? 'red' : fs.length ? 'amber' : 'green';
  return { overall, level: covenant === 90 ? (lvl(overall) === 'green' ? 'amber' : lvl(overall)) : lvl(overall), factors, flags, pos, covenant: worst(covFlags), insurance: worst(insFlags) };
}

export const fmtSim = (t: number) => new Date(t).toISOString().slice(0, 16).replace('T', ' ') + 'Z';
export type { NewsItem };
