import { Fragment, useEffect, useMemo, useState } from 'react';
import { Check, Download, FileText, RotateCcw, Search } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import logo from '@/assets/bh-logo.svg';
import seed from '@/data/meridianSeed.json';
import { exportTracker } from './exports';
import { demoNote, disclaimer, keyFacts, noticeParagraphs, statusLabels, statusOrder, type MeridianData, type MeridianRow, type MeridianStatus } from './types';

export const meridianData = seed as MeridianData;
const STORAGE_KEY = 'meridian-cp-demo';
type SavedDecision = { status: MeridianStatus; note: string; recordedAt: string };

function dueInfo(due: string) {
  const dueDate = new Date(`${due}T00:00:00+08:00`);
  const days = Math.ceil((dueDate.getTime() - Date.now()) / 86400000);
  const label = dueDate.toLocaleDateString('en-SG', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Singapore' });
  return { label, days };
}

export function MeridianTracker() {
  const data = meridianData;
  const gates = useMemo(() => Object.entries(data.GATES).sort((a, b) => a[1].order - b[1].order), [data]);
  const sections = useMemo(() => [...new Set(data.ROWS.map(r => r.sec))], [data]);
  const [saved, setSaved] = useState<Record<string, SavedDecision>>({});
  const [status, setStatus] = useState('');
  const [jur, setJur] = useState('');
  const [gate, setGate] = useState('');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<MeridianRow | null>(null);
  const [exporting, setExporting] = useState('');

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setSaved(JSON.parse(raw) as Record<string, SavedDecision>);
    } catch { /* demo storage unavailable */ }
  }, []);

  const rows = useMemo(() => data.ROWS.map(r => ({ ...r, ...(saved[r.ref] ?? {}) })), [data, saved]);
  const visible = rows.filter(r => (!status || r.status === status) && (!jur || r.jur === jur) && (!gate || r.gate === gate) && `${r.ref} ${r.title} ${r.req} ${r.by} ${r.note}`.toLowerCase().includes(search.toLowerCase()));
  const counts = Object.fromEntries(statusOrder.map(s => [s, rows.filter(r => r.status === s).length])) as Record<MeridianStatus, number>;
  const confirmed = counts.satisfied + counts.waived;

  function persist(next: Record<string, SavedDecision>) {
    setSaved(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* demo storage unavailable */ }
  }
  function saveReview(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selected) return;
    const form = new FormData(event.currentTarget);
    const decision = String(form.get('decision')) as MeridianStatus;
    const note = String(form.get('note')).trim();
    const recordedAt = new Date().toLocaleString('en-SG', { timeZone: 'Asia/Singapore', dateStyle: 'medium', timeStyle: 'short' });
    persist({ ...saved, [selected.ref]: { status: decision, note, recordedAt } });
    setSelected(null);
    toast.success('Review recorded (demo)');
  }
  function resetDemo() {
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* demo storage unavailable */ }
    setSaved({});
    toast.success('Demo data reset');
  }
  async function download(format: 'excel' | 'word') {
    setExporting(format);
    try { await exportTracker(format, data, rows); } catch { toast.error('Export could not be created. Please try again.'); } finally { setExporting(''); }
  }

  const stats: [string, number][] = [['Total items', rows.length], ['Outstanding', counts.outstanding], ['Received, pending human review', counts.received], ['Issue raised by reviewer', counts.issue], ['Confirmed by human reviewer', confirmed]];

  return <main className="md-tracker"><div className="md-container">
    <header className="md-header">
      <img src={logo} width="88" height="88" alt="Beyond Horizons" />
      <div className="md-header-right">
        <span className="md-badge">DEMO · DUMMY DATA</span>
        <span className="md-badge md-badge-outline">Powered by Lexhy</span>
        <span className="md-confidential">PRIVATE & CONFIDENTIAL</span>
        <Button variant="outline" className="md-button" size="sm" onClick={resetDemo}><RotateCcw />Reset demo data</Button>
      </div>
    </header>

    <section className="md-title">
      <p className="md-eyebrow">CP Closing Tracker · Project Meridian · LMA-based senior facilities</p>
      <h1>US$850m senior secured facilities for a 120 MW data centre campus</h1>
      <p>This demo shows how the BH CP Closing Tracker works on a multi-party, multi-jurisdiction loan. Each condition precedent has one named human reviewer from lenders' counsel in the relevant jurisdiction. The Facility Agent gives the final CP satisfaction notice under the facilities agreement.</p>
    </section>

    <aside className="md-demo-note"><p>{demoNote}</p></aside>

    <aside className="md-notice">
      <p className="md-eyebrow">Important notice · No reliance</p>
      <h2>Do not rely on this tracker</h2>
      {noticeParagraphs.map(text => <p key={text}>{text}</p>)}
    </aside>

    <section className="md-facts">
      {keyFacts.map(([label, value]) => <div key={label}><span className="md-label">{label}</span><p>{value}</p></div>)}
    </section>

    <section className="md-dates">
      {data.DATES.map(d => <article className="md-card md-date" key={d.label}><p className="md-eyebrow">{d.label}</p><p className="md-date-value">{d.date}</p><small>{d.note}</small></article>)}
    </section>

    <section className="md-section">
      <h2>Status</h2>
      <div className="md-stats">{stats.map(([label, value]) => <div className="md-card md-stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
      <div className="md-progress" aria-label="Checklist status distribution">{statusOrder.map(s => <div key={s} className={`md-segment md-segment-${s}`} style={{ flexGrow: counts[s] }} title={`${statusLabels[s]}: ${counts[s]}`} />)}</div>
      <div className="md-jurs">
        {Object.entries(data.JUR).map(([code, name]) => {
          const jRows = rows.filter(r => r.jur === code);
          const jConfirmed = jRows.filter(r => r.status === 'satisfied' || r.status === 'waived').length;
          const jIssues = jRows.filter(r => r.status === 'issue').length;
          return <article className="md-card" key={code}>
            <p className="md-eyebrow">{name}</p>
            <p className="md-jur-count">{jConfirmed} of {jRows.length} confirmed</p>
            <p className={`md-jur-issues${jIssues > 0 ? ' md-has-issues' : ''}`}>{jIssues > 0 ? `${jIssues} ${jIssues === 1 ? 'issue' : 'issues'}` : 'No issues'}</p>
            <div className="md-progress md-progress-sm">{statusOrder.map(s => <div key={s} className={`md-segment md-segment-${s}`} style={{ flexGrow: jRows.filter(r => r.status === s).length }} />)}</div>
          </article>;
        })}
      </div>
    </section>

    <section className="md-section">
      <h2>Each CP has one gate. Only that person confirms it.</h2>
      <div className="md-gates">
        {gates.map(([key, g]) => {
          const gRows = rows.filter(r => r.gate === key);
          const open = gRows.filter(r => r.status !== 'satisfied' && r.status !== 'waived').length;
          return <article className="md-card" key={key}>
            <p className="md-eyebrow">{g.gate} · {gRows.length} items · {open} open</p>
            <h3>{g.name}</h3>
            <p className="md-role">{g.role} · {g.firm}</p>
            <p className="md-email">{g.email}</p>
            <p className="md-scope">{g.scope}</p>
          </article>;
        })}
      </div>
      <div className="md-rules">
        {([['System role', "The system reads the closing mailbox each day. It files each new document under the naming convention and marks the CP 'Received by system pending human review'."], ['Human role', 'The named gate examines the document. The BH team records the decision here. The Facility Agent then issues the CP satisfaction notice.'], ['Old versions', "The system never deletes a document. It moves each superseded version to 'DO NOT USE'."]] as [string, string][]).map(([title, text]) => <div key={title}><h3>{title}</h3><p>{text}</p></div>)}
      </div>
    </section>

    <section className="md-section">
      <h2>Parties and counsel</h2>
      <div className="md-parties">
        {data.PARTIES.map(group => <article className="md-card" key={group.group}>
          <p className="md-eyebrow">{group.group}</p>
          <ul>{group.items.map(item => <li key={item.name}><strong>{item.name}</strong><span>{item.role}</span>{item.counsel && <span>{item.counsel}</span>}{item.email && <span className="md-email">{item.email}</span>}</li>)}</ul>
        </article>)}
      </div>
    </section>

    <section className="md-section">
      <div className="md-section-heading">
        <h2>Conditions precedent and conditions subsequent</h2>
        <div className="md-exports">
          <Button variant="outline" className="md-button" disabled={!!exporting} onClick={() => download('word')}><FileText />{exporting === 'word' ? 'Exporting…' : 'Export Word'}</Button>
          <Button variant="outline" className="md-button" disabled={!!exporting} onClick={() => download('excel')}><Download />{exporting === 'excel' ? 'Exporting…' : 'Export Excel'}</Button>
        </div>
      </div>
      <div className="md-filters">
        <label>Status<select value={status} onChange={e => setStatus(e.target.value)}><option value="">All statuses</option>{statusOrder.map(s => <option key={s} value={s}>{statusLabels[s]}</option>)}</select></label>
        <label>Jurisdiction<select value={jur} onChange={e => setJur(e.target.value)}><option value="">All jurisdictions</option>{Object.entries(data.JUR).map(([code, name]) => <option key={code} value={code}>{name}</option>)}</select></label>
        <label>Human reviewer<select value={gate} onChange={e => setGate(e.target.value)}><option value="">All reviewers</option>{gates.map(([key, g]) => <option key={key} value={key}>{g.name} · {g.gate}</option>)}</select></label>
        <label>Search<div className="md-search"><Search size={16} /><input aria-label="Search checklist" placeholder="Ref, item, requirement, deliverer or note" value={search} onChange={e => setSearch(e.target.value)} /></div></label>
      </div>
      {visible.length === 0 && <p className="md-empty">No checklist items match these filters.</p>}
      <div className="md-table-wrap"><table className="md-table">
        <thead><tr>{['Ref', 'CP and requirement', 'Law', 'Delivered by', 'Human reviewer', 'Status'].map(h => <th key={h}>{h}</th>)}</tr></thead>
        <tbody>
          {sections.map(sec => {
            const secRows = visible.filter(r => r.sec === sec);
            if (!secRows.length) return null;
            return <Fragment key={sec}>
              <tr className="md-section-row"><td colSpan={6}>{sec}</td></tr>
              {secRows.map(r => {
                const g = data.GATES[r.gate];
                const due = r.due ? dueInfo(r.due) : null;
                const done = r.status === 'satisfied' || r.status === 'waived';
                return <tr key={r.ref}>
                  <td className="md-ref">{r.ref}</td>
                  <td className="md-cp"><strong>{r.title}</strong><small>{r.req}</small>{due && <small className="md-due">Due {due.label} · {due.days < 0 && !done ? <strong className="md-overdue">{Math.abs(due.days)} days overdue</strong> : done ? 'closed' : `${due.days} days left`}</small>}</td>
                  <td><span className="md-law">{r.jur === 'XX' ? '—' : r.jur}</span></td>
                  <td>{r.by}</td>
                  <td>{g && <><span className="md-reviewer">{g.name}</span><small className="md-email">{g.email}</small></>}</td>
                  <td><div className="md-status-block">
                    <span className={`md-pill md-pill-${r.status}`}>{(r.status === 'satisfied' || r.status === 'waived') && <Check size={12} />}{statusLabels[r.status]}</span>
                    {r.note && <small>{r.note}</small>}
                    {r.recordedAt && <small>Recorded {r.recordedAt} SGT (demo)</small>}
                    <Button variant="outline" className="md-button md-review-button" size="sm" onClick={() => setSelected(r)}>Record review</Button>
                  </div></td>
                </tr>;
              })}
            </Fragment>;
          })}
        </tbody>
      </table></div>
    </section>

    <footer className="md-footer">
      <p>{disclaimer}</p>
      <div><span>BEYOND HORIZONS · CRAFTED FOR VISIONARIES</span><span>WWW.BEYONDHORIZONS.SG</span></div>
    </footer>

    <Dialog open={!!selected} onOpenChange={open => { if (!open) setSelected(null); }}>
      <DialogContent className="md-tracker md-dialog">
        <DialogTitle>Record review · {selected?.ref}</DialogTitle>
        <DialogDescription>{selected ? `${data.GATES[selected.gate]?.gate} — ${selected.title}` : ''}</DialogDescription>
        <form onSubmit={saveReview} className="md-form">
          <label>Decision<select name="decision" defaultValue={selected?.status} required>{statusOrder.map(s => <option key={s} value={s}>{statusLabels[s]}</option>)}</select></label>
          <label>Note<textarea name="note" rows={3} maxLength={5000} defaultValue={selected?.note} /></label>
          <p className="md-muted">Only the named human reviewer records this decision. Demo decisions are saved in this browser only.</p>
          <div className="md-dialog-actions">
            <Button type="button" variant="outline" className="md-button" onClick={() => setSelected(null)}>Cancel</Button>
            <Button type="submit" variant="outline" className="md-button">Save</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  </div></main>;
}
