import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { toast } from 'sonner';
import { ArrowLeft, Download, Pause, Play, X } from 'lucide-react';
import logo from '@/assets/beyond-horizons-logo.png';
import { airports, countries, DAY, defaultJurisdictions, fleet as baseFleet, HOUR, news, SIM_DAYS, SIM_START, type Aircraft, type JurisdictionRow, type Level, type Terms } from './data';
import { assess, defaultWeights, fmtSim, groundByCountry, releasedNews, schedule, trail, type FactorKey, type Flag, type Risk, type Weights } from './engine';
import { exportCsv, exportPdf } from './report';

const DemoMap = lazy(() => import('./DemoMap'));
const STORE = 'bh-fleet-demo-terms-v1';
const SPEEDS = [{ v: 1, l: '1x' }, { v: 60, l: '60x' }, { v: 3600, l: '1 hr/s' }, { v: 86400, l: '1 day/s' }];
const END = SIM_START + SIM_DAYS * DAY;
const CTA = 'Want this for your real fleet and leases? Talk to an aviation finance lawyer';

type AlertMeta = { ack?: boolean; snoozeUntil?: number; assignee?: string };
type AlertRow = { id: string; reg: string; at: number; level: Level; title: string; detail: string; ref: string; consequence: string; news?: boolean };

const Chip = ({ level, children }: { level: Level; children: React.ReactNode }) => <span className={`fd-chip fd-chip-${level}`}>{children}</span>;
const cname = (iso: string | null | undefined) => (iso && countries[iso]?.name) || 'Airborne';

export function FleetDemo() {
  const [t, setT] = useState(SIM_START + 12 * HOUR);
  const [playing, setPlaying] = useState(true);
  const [speed, setSpeed] = useState(3600);
  const [weights, setWeights] = useState<Weights>(defaultWeights);
  const [juris, setJuris] = useState<JurisdictionRow[]>(defaultJurisdictions);
  const [overrides, setOverrides] = useState<Record<string, Terms>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [drawerTab, setDrawerTab] = useState<'overview' | 'risk' | 'contract' | 'news' | 'timeline'>('overview');
  const [view, setView] = useState<'alerts' | 'table' | 'exposure' | 'jurisdictions' | 'weights'>('alerts');
  const [zones, setZones] = useState(true);
  const [meta, setMeta] = useState<Record<string, AlertMeta>>({});
  const [contact, setContact] = useState<string | null>(null);

  useEffect(() => { try { const s = localStorage.getItem(STORE); if (s) setOverrides(JSON.parse(s)); } catch { /* ignore */ } }, []);
  const saveOverrides = (o: Record<string, Terms>) => { setOverrides(o); try { localStorage.setItem(STORE, JSON.stringify(o)); } catch { /* ignore */ } };

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setT(x => { const n = x + speed * 1000; if (n >= END) { setPlaying(false); return END; } return n; }), 1000);
    return () => clearInterval(id);
  }, [playing, speed]);

  const fleet: Aircraft[] = useMemo(() => baseFleet.map(a => overrides[a.reg] ? { ...a, terms: overrides[a.reg]! } : a), [overrides]);
  const risks = useMemo(() => Object.fromEntries(fleet.map(a => [a.reg, assess(a, t, juris, weights)])) as Record<string, Risk>, [fleet, t, juris, weights]);

  // Alert centre: first-seen time per flag / news item; reset when replay goes backwards.
  const seen = useRef<Map<string, number>>(new Map()); const lastT = useRef(t);
  const alerts: AlertRow[] = useMemo(() => {
    if (t < lastT.current) seen.current = new Map(); lastT.current = t;
    const rows: AlertRow[] = []; const fresh: AlertRow[] = [];
    for (const a of fleet) for (const f of risks[a.reg]!.flags) {
      const id = `${a.reg}:${f.key}:${f.level}`; if (!seen.current.has(id)) { seen.current.set(id, t); }
      const row = { id, reg: a.reg, at: seen.current.get(id)!, level: f.level, title: f.title, detail: f.detail, ref: f.ref, consequence: f.consequence };
      rows.push(row); if (seen.current.get(id) === t) fresh.push(row);
    }
    for (const n of releasedNews(t)) for (const reg of n.aircraft) {
      if (n.impact < 10) continue; const id = `${reg}:news:${n.id}`; if (!seen.current.has(id)) seen.current.set(id, t);
      const row: AlertRow = { id, reg, at: n.at, level: n.impact >= 20 ? 'red' : 'amber', title: `News: ${n.title}`, detail: n.summary + ' (fictional)', ref: n.tag, consequence: 'May be relevant to lessee covenants under sample terms.', news: true };
      rows.push(row); if (seen.current.get(id) === t) fresh.push(row);
    }
    if (playing && fresh.length && fresh.length < 6) fresh.filter(r => r.level === 'red').slice(0, 2).forEach(r => toast.error(`${r.reg} · ${r.title}`, { description: `${r.ref} — flag for review` }));
    return rows.sort((x, y) => y.at - x.at);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [risks]);

  const sel = fleet.find(a => a.reg === selected) ?? null;
  const selTrail = useMemo(() => sel ? trail(sel, t) : [], [sel, Math.floor(t / (6 * HOUR))]); // eslint-disable-line react-hooks/exhaustive-deps
  const onSelect = useCallback((reg: string) => { setSelected(reg); setDrawerTab('overview'); }, []);
  const counts = { red: fleet.filter(a => risks[a.reg]!.level === 'red').length, amber: fleet.filter(a => risks[a.reg]!.level === 'amber').length };
  const openAlerts = alerts.filter(a => !meta[a.id]?.ack && !((meta[a.id]?.snoozeUntil ?? 0) > t));

  return (
    <div className="fd">
      <div className="fd-banner" role="note">Demo with simulated data. Aircraft, operators, positions, news and contract terms are fictional and for illustration only.</div>
      <header className="fd-header">
        <div className="fd-brand"><Link to="/demos" className="fd-back" aria-label="Back to demos"><ArrowLeft size={16} /></Link><img src={logo} alt="Beyond Horizons" /><div><h1>Fleet Risk Monitor</h1><span>Interactive demo · lessor &amp; lender view</span></div></div>
        <div className="fd-kpis">
          <div><span>Aircraft</span><b>{fleet.length}</b></div>
          <div><span>Red</span><b className="fd-t-red">{counts.red}</b></div>
          <div><span>Amber</span><b className="fd-t-amber">{counts.amber}</b></div>
          <div><span>Open alerts</span><b>{openAlerts.length}</b></div>
        </div>
      </header>

      <section className="fd-controls" aria-label="Simulation controls">
        <button className="fd-btn" onClick={() => { if (t >= END) setT(SIM_START); setPlaying(p => !p); }} aria-label={playing ? 'Pause' : 'Play'}>{playing ? <Pause size={14} /> : <Play size={14} />}</button>
        <div className="fd-seg" role="group" aria-label="Speed">{SPEEDS.map(s => <button key={s.v} className={speed === s.v ? 'on' : ''} onClick={() => setSpeed(s.v)}>{s.l}</button>)}</div>
        <label className="fd-scrub"><span className="fd-mono">Day {((t - SIM_START) / DAY).toFixed(1)}</span>
          <input type="range" min={SIM_START} max={END} step={HOUR} value={t} onChange={e => setT(Number(e.target.value))} aria-label="30-day replay" /></label>
        <span className="fd-mono fd-clock">{fmtSim(t)}</span>
        <label className="fd-toggle"><input type="checkbox" checked={zones} onChange={e => setZones(e.target.checked)} /> Restricted zones</label>
      </section>

      <div className="fd-stage">
        <Suspense fallback={<div className="fd-map fd-loading">Loading map…</div>}>
          <DemoMap fleet={fleet} risks={risks} selected={selected} trail={selTrail} showZones={zones} onSelect={onSelect} />
        </Suspense>
        <div className="fd-legend"><span><i className="fd-dot fd-green" />Low</span><span><i className="fd-dot fd-amber" />Watch</span><span><i className="fd-dot fd-red" />Flag</span><span><i className="fd-dot fd-darkdot" />Dark</span>{sel && zones && <><span><i className="fd-sw fd-sw-red" />Excluded</span><span><i className="fd-sw fd-sw-amber" />Insurance limits</span></>}</div>
        {sel && <Drawer a={sel} r={risks[sel.reg]!} t={t} tab={drawerTab} setTab={setDrawerTab} onClose={() => setSelected(null)} onContact={() => setContact(`Fleet Risk Monitor demo — ${sel.reg}`)}
          onTerms={(terms) => saveOverrides({ ...overrides, [sel.reg]: terms })} onReset={() => { const o = { ...overrides }; delete o[sel.reg]; saveOverrides(o); }} />}
      </div>

      <nav className="fd-tabs" aria-label="Views">{([['alerts', `Alert centre (${openAlerts.length})`], ['table', 'Fleet table'], ['exposure', 'Country exposure'], ['jurisdictions', 'Jurisdictions'], ['weights', 'Risk weights']] as const).map(([k, l]) => <button key={k} className={view === k ? 'on' : ''} onClick={() => setView(k)}>{l}</button>)}
        <span className="fd-grow" /><button className="fd-btn" onClick={() => exportPdf(fleet, risks, t)}><Download size={14} /> Sample report PDF</button><button className="fd-btn" onClick={() => exportCsv(fleet, risks, t)}><Download size={14} /> CSV</button></nav>

      <section className="fd-panel">
        {view === 'alerts' && <Alerts rows={alerts} meta={meta} t={t} setMeta={setMeta} onSelect={onSelect} onContact={r => setContact(`Fleet Risk Monitor demo — ${r.reg}: ${r.title}`)} />}
        {view === 'table' && <FleetTable fleet={fleet} risks={risks} onSelect={onSelect} />}
        {view === 'exposure' && <Exposure fleet={fleet} risks={risks} juris={juris} />}
        {view === 'jurisdictions' && <Jurisdictions rows={juris} setRows={setJuris} />}
        {view === 'weights' && <WeightsPanel w={weights} setW={setWeights} />}
      </section>

      <footer className="fd-footer">Illustrative demo only, using simulated data and fictional sample terms. Not legal advice on any jurisdiction&apos;s law. Beyond Horizons by Bethel Chambers LLC.</footer>
      {contact && <Contact subject={contact} onClose={() => setContact(null)} />}
    </div>
  );
}

function Drawer({ a, r, t, tab, setTab, onClose, onContact, onTerms, onReset }: { a: Aircraft; r: Risk; t: number; tab: string; setTab: (x: 'overview' | 'risk' | 'contract' | 'news' | 'timeline') => void; onClose: () => void; onContact: () => void; onTerms: (t: Terms) => void; onReset: () => void }) {
  const gbc = groundByCountry(a, t); const p = r.pos;
  const last = [...schedule(a)].reverse().find(s => s.kind === 'ground' && s.start <= Math.min(t, p.reportedAt));
  const items = news.filter(n => n.at <= t && n.aircraft.includes(a.reg)).reverse();
  return (
    <aside className="fd-drawer" aria-label={`${a.reg} details`}>
      <div className="fd-drawer-head"><div><h2 className="fd-mono">{a.reg}</h2><span>{a.type} · {a.operator}</span></div><Chip level={r.level}>Risk {r.overall}</Chip><button className="fd-icon" onClick={onClose} aria-label="Close"><X size={16} /></button></div>
      <div className="fd-dtabs">{(['overview', 'risk', 'contract', 'news', 'timeline'] as const).map(k => <button key={k} className={tab === k ? 'on' : ''} onClick={() => setTab(k)}>{k[0]!.toUpperCase() + k.slice(1)}</button>)}</div>
      <div className="fd-dbody">
        {tab === 'overview' && <>
          <dl className="fd-dl">
            <dt>MSN</dt><dd className="fd-mono">{a.msn}</dd><dt>Category</dt><dd>{a.category}</dd><dt>Lessor</dt><dd>{a.lessor}</dd><dt>Lender</dt><dd>{a.lender}</dd><dt>Owner SPV</dt><dd>{a.spv}</dd><dt>Lease expiry</dt><dd className="fd-mono">{a.leaseExpiry}</dd>
            <dt>Status</dt><dd>{p.dark ? 'Transponder dark — last known position' : p.onGround ? `On ground · ${airports[p.ap!]!.name}` : `Airborne → ${p.dest ? airports[p.dest]!.code : '—'}`}</dd>
            <dt>Last airport</dt><dd>{last && last.kind === 'ground' ? `${airports[last.ap]!.code} · ${cname(airports[last.ap]!.country)}` : '—'}</dd>
          </dl>
          <h3>Time on ground by country (30 days)</h3>
          {Object.entries(gbc).sort((x, y) => y[1] - x[1]).map(([c, h]) => <div className="fd-bar" key={c}><span>{cname(c)}</span><div><i style={{ width: `${Math.min(100, h / 7.2)}%` }} /></div><b className="fd-mono">{(h / 24).toFixed(1)}d</b></div>)}
          <p className="fd-note">The 30-day route line is shown on the map.</p>
        </>}
        {tab === 'risk' && <>
          {(Object.keys(r.factors) as FactorKey[]).map(k => <div className="fd-factor" key={k}><div><span>{r.factors[k].label}</span><b className="fd-mono">{r.factors[k].value}</b></div><div className="fd-meter"><i className={`fd-${r.factors[k].value >= 60 ? 'red' : r.factors[k].value >= 30 ? 'amber' : 'green'}`} style={{ width: `${r.factors[k].value}%` }} /></div><small>{r.factors[k].why}</small></div>)}
          <h3>Covenant checks</h3>
          {r.flags.length ? r.flags.map(f => <FlagCard key={f.key} f={f} t={t} onContact={onContact} />) : <p className="fd-note">No flags at this simulated time.</p>}
        </>}
        {tab === 'contract' && <ContractEditor terms={a.terms} onSave={onTerms} onReset={onReset} />}
        {tab === 'news' && (items.length ? items.map(n => <div className="fd-news" key={n.id}><span className="fd-mono">{fmtSim(n.at)}</span><Chip level={n.impact >= 20 ? 'red' : n.impact >= 10 ? 'amber' : 'green'}>{n.tag}</Chip><b>{n.title}</b><p>{n.summary} <em>Fictional.</em></p></div>) : <p className="fd-note">No news released yet for this aircraft.</p>)}
        {tab === 'timeline' && <Timeline a={a} t={t} />}
        <button className="fd-cta" onClick={onContact}>{CTA}</button>
      </div>
    </aside>
  );
}

function FlagCard({ f, t, onContact }: { f: Flag; t: number; onContact?: () => void }) {
  const left = f.deadline ? (f.deadline - t) / HOUR : null;
  return <div className={`fd-flag fd-flag-${f.level}`}><b>{f.title}</b><span className="fd-mono">{f.ref}</span><p>{f.detail} {f.consequence} <strong>Next step: review with counsel.</strong></p>
    {left !== null && <p className="fd-mono fd-countdown">Lessee must notify within {f.noticeHours}h — {left > 0 ? `${Math.floor(left)}h left` : `deadline passed ${Math.floor(-left)}h ago`}</p>}
    {f.level === 'red' && onContact && <button className="fd-link" onClick={onContact}>{CTA}</button>}</div>;
}

function Timeline({ a, t }: { a: Aircraft; t: number }) {
  const from = t - SIM_DAYS * DAY;
  const ev = [
    ...schedule(a).filter(s => s.kind === 'ground' && s.start >= Math.max(from, SIM_START) && s.start <= t && (s.end - s.start) > 2 * HOUR).map(s => ({ at: s.start, txt: s.kind === 'ground' ? `On ground ${airports[s.ap]!.code} (${cname(airports[s.ap]!.country)})` : '', k: 'move' })),
    ...news.filter(n => n.at <= t && n.aircraft.includes(a.reg)).map(n => ({ at: n.at, txt: `News: ${n.title}`, k: 'news' })),
    ...(a.darkFromDay !== undefined && SIM_START + a.darkFromDay * DAY <= t ? [{ at: SIM_START + a.darkFromDay * DAY, txt: 'Position reports stop (transponder dark)', k: 'flag' }] : []),
  ].sort((x, y) => y.at - x.at).slice(0, 40);
  return <ol className="fd-timeline">{ev.map((e, i) => <li key={i} className={`fd-tl-${e.k}`}><span className="fd-mono">{fmtSim(e.at)}</span>{e.txt}</li>)}</ol>;
}

function ContractEditor({ terms, onSave, onReset }: { terms: Terms; onSave: (t: Terms) => void; onReset: () => void }) {
  const [d, setD] = useState(terms); useEffect(() => setD(terms), [terms]);
  const L = d.lease, I = d.insurance; const list = (s: string) => s.split(',').map(x => x.trim().toUpperCase()).filter(Boolean);
  const setL = (p: Partial<Terms['lease']>) => setD({ ...d, lease: { ...L, ...p } }); const setI = (p: Partial<Terms['insurance']>) => setD({ ...d, insurance: { ...I, ...p } });
  const upload = async (file: File) => {
    const txt = await file.text();
    try {
      if (file.name.endsWith('.json')) { const j = JSON.parse(txt); setD({ lease: { ...L, ...(j.lease ?? {}) }, insurance: { ...I, ...(j.insurance ?? {}) } }); }
      else { const nd = structuredClone(d) as Terms; for (const line of txt.split(/\r?\n/).slice(1)) { const [field, ...rest] = line.split(','); const value = rest.join(',').trim(); if (!field) continue; const [grp, key] = field.trim().split('.'); const g = (grp === 'insurance' ? nd.insurance : nd.lease) as Record<string, unknown>; if (!key || !(key in g)) continue; const cur = g[key]; g[key] = Array.isArray(cur) ? value.split(/[;|]/).map(x => x.trim().toUpperCase()).filter(Boolean) : typeof cur === 'number' ? Number(value) : typeof cur === 'boolean' ? value.toLowerCase() === 'true' : value; } setD(nd); }
      toast.success('Sample terms loaded — press Save to apply');
    } catch { toast.error('Could not read that file'); }
  };
  return <div className="fd-form">
    <h3>Lease (sample terms)</h3>
    <label>Excluded Countries <small>{L.refs.excluded}</small><input value={L.excludedCountries.join(', ')} onChange={e => setL({ excludedCountries: list(e.target.value) })} /></label>
    <label>Permitted Operating Area<input value={L.permittedArea} onChange={e => setL({ permittedArea: e.target.value })} /></label>
    <div className="fd-2"><label>Habitual Base <small>{L.refs.base}</small><input value={L.habitualBase} onChange={e => setL({ habitualBase: e.target.value.toUpperCase() })} /></label>
      <label>Max days outside base<input type="number" value={L.maxDaysOutsideBase} onChange={e => setL({ maxDaysOutsideBase: Number(e.target.value) })} /></label></div>
    <div className="fd-2"><label className="fd-check"><input type="checkbox" checked={L.subleaseAllowed} onChange={e => setL({ subleaseAllowed: e.target.checked })} /> Sub-lease permitted <small>{L.refs.sublease}</small></label>
      <label className="fd-check"><input type="checkbox" checked={L.wetleaseAllowed} onChange={e => setL({ wetleaseAllowed: e.target.checked })} /> Wet-lease permitted</label></div>
    <label>Notice deadline (hours) <small>{L.refs.notice}</small><input type="number" value={L.noticeHours} onChange={e => setL({ noticeHours: Number(e.target.value) })} /></label>
    <label>Sanctions clause <small>{L.refs.sanctions}</small><textarea rows={2} value={L.sanctionsClause} onChange={e => setL({ sanctionsClause: e.target.value })} /></label>
    <label>Return location <small>{L.refs.returnLoc}</small><input value={L.returnLocation} onChange={e => setL({ returnLocation: e.target.value })} /></label>
    <h3>Insurance (sample terms)</h3>
    <label>War risks<input value={I.warRisks} onChange={e => setI({ warRisks: e.target.value })} /></label>
    <label>Hull &amp; liability geographic limits (country codes)<input value={I.geographicLimits.join(', ')} onChange={e => setI({ geographicLimits: list(e.target.value) })} /></label>
    <label>War-risk excluded territories<input value={I.warExcludedCountries.join(', ')} onChange={e => setI({ warExcludedCountries: list(e.target.value) })} /></label>
    <label>Prior insurer notice territories<input value={I.priorNoticeCountries.join(', ')} onChange={e => setI({ priorNoticeCountries: list(e.target.value) })} /></label>
    <div className="fd-2"><label>Min. liability (USD m)<input type="number" value={I.minLiabilityUsdM} onChange={e => setI({ minLiabilityUsdM: Number(e.target.value) })} /></label>
      <label>Certificate expiry<input type="date" value={I.certExpiry} onChange={e => setI({ certExpiry: e.target.value })} /></label></div>
    <label>Additional insureds<input value={I.additionalInsureds.join(', ')} onChange={e => setI({ additionalInsureds: e.target.value.split(',').map(x => x.trim()).filter(Boolean) })} /></label>
    <label className="fd-upload">Replace terms from CSV (field,value e.g. lease.noticeHours,24) or JSON<input type="file" accept=".csv,.json" onChange={e => { const f = e.target.files?.[0]; if (f) void upload(f); }} /></label>
    <div className="fd-row"><button className="fd-btn fd-primary" onClick={() => { onSave(d); toast.success('Sample terms saved in this browser'); }}>Save</button><button className="fd-btn" onClick={onReset}>Reset to sample</button></div>
  </div>;
}

function Alerts({ rows, meta, t, setMeta, onSelect, onContact }: { rows: AlertRow[]; meta: Record<string, AlertMeta>; t: number; setMeta: React.Dispatch<React.SetStateAction<Record<string, AlertMeta>>>; onSelect: (r: string) => void; onContact: (r: AlertRow) => void }) {
  const [show, setShow] = useState<'open' | 'all'>('open');
  const list = rows.filter(r => show === 'all' || (!meta[r.id]?.ack && !((meta[r.id]?.snoozeUntil ?? 0) > t)));
  const up = (id: string, p: AlertMeta) => setMeta(m => ({ ...m, [id]: { ...m[id], ...p } }));
  return <>
    <div className="fd-row"><div className="fd-seg"><button className={show === 'open' ? 'on' : ''} onClick={() => setShow('open')}>Open</button><button className={show === 'all' ? 'on' : ''} onClick={() => setShow('all')}>All</button></div><span className="fd-note">Every alert is a flag for review, not a conclusion.</span></div>
    {!list.length && <p className="fd-note">No alerts yet. Let the simulation run or drag the replay slider.</p>}
    <div className="fd-alerts">{list.map(r => <article key={r.id} className={`fd-alert fd-flag-${r.level}`}>
      <header><Chip level={r.level}>{r.level === 'red' ? 'Flag' : 'Watch'}</Chip><button className="fd-link fd-mono" onClick={() => onSelect(r.reg)}>{r.reg}</button><span className="fd-mono">{fmtSim(r.at)}</span>{meta[r.id]?.ack && <span className="fd-note">Acknowledged</span>}</header>
      <dl><dt>What happened</dt><dd><b>{r.title}</b> — {r.detail}</dd><dt>{r.news ? 'Topic' : 'Term touched'}</dt><dd className="fd-mono">{r.ref}</dd><dt>Consequence</dt><dd>{r.consequence}</dd><dt>Next step</dt><dd>Review with counsel.</dd></dl>
      <div className="fd-row"><button className="fd-btn" onClick={() => up(r.id, { ack: true })}>Acknowledge</button><button className="fd-btn" onClick={() => up(r.id, { snoozeUntil: t + DAY })}>Snooze 1 day</button>
        <select aria-label="Assign" value={meta[r.id]?.assignee ?? ''} onChange={e => up(r.id, { assignee: e.target.value })}><option value="">Assign…</option><option>Portfolio manager</option><option>Credit risk</option><option>Insurance desk</option><option>Counsel</option></select></div>
      {r.level === 'red' && <button className="fd-link" onClick={() => onContact(r)}>{CTA}</button>}
    </article>)}</div>
  </>;
}

function FleetTable({ fleet, risks, onSelect }: { fleet: Aircraft[]; risks: Record<string, Risk>; onSelect: (r: string) => void }) {
  const [sort, setSort] = useState<'risk' | 'reg' | 'operator' | 'country' | 'lender'>('risk'); const [q, setQ] = useState(''); const [lv, setLv] = useState('');
  const key = (a: Aircraft) => sort === 'risk' ? -risks[a.reg]!.overall : sort === 'country' ? cname(risks[a.reg]!.pos.country) : a[sort];
  const rows = fleet.filter(a => (!lv || risks[a.reg]!.level === lv) && `${a.reg} ${a.operator} ${a.lender} ${a.type} ${cname(risks[a.reg]!.pos.country)}`.toLowerCase().includes(q.toLowerCase()))
    .sort((x, y) => { const a = key(x), b = key(y); return a < b ? -1 : a > b ? 1 : 0; });
  const H = ({ k, l }: { k: typeof sort; l: string }) => <th><button onClick={() => setSort(k)} className={sort === k ? 'on' : ''}>{l}</button></th>;
  return <>
    <div className="fd-row"><input className="fd-input" placeholder="Filter by reg, operator, lender, country" value={q} onChange={e => setQ(e.target.value)} aria-label="Filter fleet" />
      <select className="fd-input" value={lv} onChange={e => setLv(e.target.value)} aria-label="Risk level"><option value="">All risk levels</option><option value="red">Red</option><option value="amber">Amber</option><option value="green">Green</option></select></div>
    <div className="fd-scroll"><table className="fd-table"><thead><tr><H k="reg" l="Reg" /><th>Type</th><H k="operator" l="Operator" /><H k="lender" l="Lender" /><H k="country" l="Country" /><H k="risk" l="Risk" /><th>Covenants</th><th>Insurance</th></tr></thead>
      <tbody>{rows.map(a => { const r = risks[a.reg]!; return <tr key={a.reg} onClick={() => onSelect(a.reg)} tabIndex={0} onKeyDown={e => e.key === 'Enter' && onSelect(a.reg)}>
        <td className="fd-mono">{a.reg}</td><td>{a.type}</td><td>{a.operator}</td><td>{a.lender}</td><td>{r.pos.dark ? 'Unknown (dark)' : cname(r.pos.country)}</td><td><Chip level={r.level}><span className="fd-mono">{r.overall}</span></Chip></td><td><Chip level={r.covenant}>{r.covenant === 'green' ? 'OK' : r.covenant === 'amber' ? 'Watch' : 'Flag'}</Chip></td><td><Chip level={r.insurance}>{r.insurance === 'green' ? 'OK' : r.insurance === 'amber' ? 'Watch' : 'Gap?'}</Chip></td></tr>; })}</tbody></table></div>
  </>;
}

function Exposure({ fleet, risks, juris }: { fleet: Aircraft[]; risks: Record<string, Risk>; juris: JurisdictionRow[] }) {
  const c: Record<string, string[]> = {}; for (const a of fleet) { const r = risks[a.reg]!; const k = r.pos.dark ? '??' : r.pos.country ?? 'AIR'; (c[k] ??= []).push(a.reg); }
  const max = Math.max(...Object.values(c).map(v => v.length));
  return <div className="fd-heat">{Object.entries(c).sort((x, y) => y[1].length - x[1].length).map(([k, regs]) => { const j = juris.find(x => x.iso === k);
    return <div key={k} className="fd-cell" style={{ '--h': regs.length / max } as React.CSSProperties}><span>{k === '??' ? 'Unknown (dark)' : k === 'AIR' ? 'Airborne / oceanic' : cname(k)}</span><b className="fd-mono">{regs.length}</b><small className="fd-mono">{regs.join(' · ')}</small>{j && <Chip level={j.level}>{j.level}</Chip>}</div>; })}</div>;
}

function Jurisdictions({ rows, setRows }: { rows: JurisdictionRow[]; setRows: (r: JurisdictionRow[]) => void }) {
  const up = (i: number, p: Partial<JurisdictionRow>) => setRows(rows.map((r, k) => k === i ? { ...r, ...p } : r));
  return <><p className="fd-note">Illustrative indicators for the demo only — not a statement about any country&apos;s law. Edit to see scores change.</p>
    <div className="fd-scroll"><table className="fd-table"><thead><tr><th>Country</th><th>Level</th><th>Score</th><th>Cape Town Convention</th><th>Sanctions flag</th><th>Source</th><th>Last reviewed</th></tr></thead>
      <tbody>{rows.map((r, i) => <tr key={r.iso}><td>{cname(r.iso)}</td><td><select value={r.level} onChange={e => up(i, { level: e.target.value as Level })}><option value="green">green</option><option value="amber">amber</option><option value="red">red</option></select></td>
        <td><input className="fd-num" type="number" min={0} max={100} value={r.score} onChange={e => up(i, { score: Number(e.target.value) })} /></td><td>{r.ctc}</td>
        <td><input type="checkbox" checked={r.sanctionsFlag} onChange={e => up(i, { sanctionsFlag: e.target.checked })} aria-label={`Sanctions flag ${r.iso}`} /></td><td><a href={r.source} target="_blank" rel="noopener noreferrer">Source</a></td><td className="fd-mono">{r.reviewed}</td></tr>)}</tbody></table></div></>;
}

function WeightsPanel({ w, setW }: { w: Weights; setW: (w: Weights) => void }) {
  const labels: Record<FactorKey, string> = { attachment: 'Attachment / detention', jurisdiction: 'Jurisdiction', drift: 'Habitual base drift', operator: 'Operator health', covenant: 'Contract covenants' };
  const sum = Object.values(w).reduce((s, x) => s + x, 0) || 1;
  return <div className="fd-weights">{(Object.keys(labels) as FactorKey[]).map(k => <label key={k}><span>{labels[k]}</span><input type="range" min={0} max={50} value={w[k]} onChange={e => setW({ ...w, [k]: Number(e.target.value) })} /><b className="fd-mono">{Math.round(w[k] / sum * 100)}%</b></label>)}
    <button className="fd-btn" onClick={() => setW(defaultWeights)}>Reset weights</button><p className="fd-note">Overall score = weighted average of the five factors. Any red covenant flag also colours the aircraft red.</p></div>;
}

function Contact({ subject, onClose }: { subject: string; onClose: () => void }) {
  const [f, setF] = useState({ name: '', email: '', company: '', message: '' });
  const send = (e: React.FormEvent) => { e.preventDefault(); const body = `Name: ${f.name}\nEmail: ${f.email}\nCompany: ${f.company}\n\n${f.message}`; window.location.href = `mailto:HL@beyondhorizons.sg?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; onClose(); };
  return <div className="fd-modal" role="dialog" aria-modal="true" aria-labelledby="fd-contact-title" onClick={onClose}><form className="fd-modal-card" onClick={e => e.stopPropagation()} onSubmit={send}>
    <div className="fd-row"><h2 id="fd-contact-title">Talk to an aviation finance lawyer</h2><button type="button" className="fd-icon" onClick={onClose} aria-label="Close"><X size={16} /></button></div>
    <p className="fd-note">Tell us about your fleet and leases. This opens an email to HL@beyondhorizons.sg.</p>
    <label>Name<input required value={f.name} onChange={e => setF({ ...f, name: e.target.value })} maxLength={100} /></label>
    <label>Work email<input required type="email" value={f.email} onChange={e => setF({ ...f, email: e.target.value })} maxLength={200} /></label>
    <label>Company<input value={f.company} onChange={e => setF({ ...f, company: e.target.value })} maxLength={150} /></label>
    <label>Message<textarea rows={4} value={f.message} onChange={e => setF({ ...f, message: e.target.value })} maxLength={2000} /></label>
    <button className="fd-btn fd-primary" type="submit">Send to HL@beyondhorizons.sg</button>
  </form></div>;
}
