import { useState, type ReactNode } from 'react';
import { useNavigate, useRouter } from '@tanstack/react-router';
import { useQueryClient } from '@tanstack/react-query';
import { Check, Copy, Download, FileText, Search, LogOut, Moon, Sun } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { supabase } from '@/integrations/supabase/client';
import logo from '@/assets/bh-logo.svg';
import raw from '@/data/cpChecklist.json';
import { statuses, type ChecklistData, type CpItem, type CpStatus } from './types';
import { exportTracker } from './exports';

export const trackerData = raw as ChecklistData;
type Review = { ref: string; status: string; note: string; reviewer_name: string; reviewer_email: string; created_at: string };
export function Tracker({ reviews }: { reviews: Review[] }) {
  const data = trackerData;
  const [items, setItems] = useState<CpItem[]>(() => data.cps.map(item => {
    const review = reviews.find(r => r.ref === item.ref);
    return review ? { ...item, status: review.status as CpStatus, statusNote: review.note, reviewedBy: `${review.reviewer_name} · ${review.reviewer_email}`, reviewedAt: review.created_at } : item;
  }));
  const [filter, setFilter] = useState(''); const [gate, setGate] = useState(''); const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<CpItem | null>(null); const [busy, setBusy] = useState(false); const [exporting, setExporting] = useState(''); const [dark, setDark] = useState(false);
  const navigate = useNavigate(); const queryClient = useQueryClient(); const router = useRouter();
  const visible = items.filter(i => (!filter || i.status === filter) && (!gate || i.gate === gate) && `${i.ref} ${i.title} ${i.requirement}`.toLowerCase().includes(search.toLowerCase()));
  const counts = Object.fromEntries(Object.keys(statuses).map(s => [s, items.filter(i => i.status === s).length]));
  async function save(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); if (!selected) return;
    const form = new FormData(event.currentTarget);
    const status = String(form.get('decision')) as CpStatus;
    const name = String(form.get('name')).trim(); const email = String(form.get('email')).trim(); const note = String(form.get('note')).trim();
    if (!name || !email) return;
    setBusy(true);
    const { data: saved, error } = await supabase.from('cp_reviews').insert({ ref: selected.ref, status, note, reviewer_name: name, reviewer_email: email }).select().single();
    setBusy(false);
    if (error || !saved) { toast.error('Review was not saved. Please try again.'); return; }
    setItems(current => current.map(i => i.ref === selected.ref ? { ...i, status, statusNote: note, reviewedBy: `${name} · ${email}`, reviewedAt: saved.created_at } : i));
    setSelected(null); toast.success('Human review recorded');
  }
  async function download(format: 'excel' | 'word') {
    setExporting(format);
    try { await exportTracker(format, data, items); } catch { toast.error('Export could not be created. Please try again.'); } finally { setExporting(''); }
  }
  async function signOut() { await queryClient.cancelQueries(); queryClient.clear(); await supabase.auth.signOut(); await navigate({ to: '/auth', replace: true }); await router.invalidate(); }
  function jump(ref: string) { setFilter(''); setGate(''); setSearch(''); requestAnimationFrame(() => requestAnimationFrame(() => { const nodes = document.querySelectorAll(`[data-cp-ref="${ref}"]`); const element = Array.from(nodes).find(n => n.getBoundingClientRect().width > 0); element?.scrollIntoView({ behavior: 'smooth', block: 'center' }); })); }
  const statusBlock = (item: CpItem) => <div className="cp-status-block"><span className={`cp-chip cp-${item.status}`}>{['satisfied','waived','na'].includes(item.status) && <Check size={12}/>} {statuses[item.status]}</span>{item.reviewedBy && <><small>{item.reviewedBy}</small><small>{item.reviewedAt ? new Date(item.reviewedAt).toLocaleString('en-SG') : ''}</small><small>{item.statusNote}</small></>}<Button variant="outline" className="cp-button cp-review-button" size="sm" onClick={() => setSelected(item)}>Record review</Button></div>;
  return <main className={`cp-tracker ${dark ? 'cp-dark' : ''}`}><div className="cp-container">
    <header className="cp-header"><img src={logo} width="88" height="88" alt="Beyond Horizons"/><div className="cp-header-right"><span>PRIVATE &amp; CONFIDENTIAL</span><div><Button variant="outline" className="cp-button" size="icon" aria-label={dark ? 'Light mode' : 'Dark mode'} title={dark ? 'Light mode' : 'Dark mode'} onClick={() => setDark(!dark)}>{dark ? <Sun/> : <Moon/>}</Button><Button variant="outline" className="cp-button" size="icon" aria-label="Sign out" title="Sign out" onClick={signOut}><LogOut/></Button></div></div></header>
    <p className="cp-template">Template - no client data</p>
    <aside className="cp-notice"><p className="cp-eyebrow">NO RELIANCE</p><p>{data.notice}</p></aside>
    <section className="cp-title"><p className="cp-eyebrow">CONDITIONS PRECEDENT TRACKER</p><h1>{data.matter.title}</h1><p>{data.matter.basis}</p></section>
    <section className="cp-facts">{([['Lender (client)',data.matter.client],['Borrower',data.matter.borrower],['Guarantor',data.matter.guarantor],['Facility',data.matter.facility],['Purpose',data.matter.purpose],['Governing law',data.matter.governingLaw],['Jurisdiction',data.matter.jurisdiction],['Signing date',data.matter.signingDate],['Utilisation date',data.matter.utilisationDate],['Closing mailbox',data.matter.closingMailbox],['Last update',data.matter.lastUpdate]] as [string, string][]).map(([label,value]) => <div key={label}><span className="cp-label">{label}</span><p><Marked text={value}/></p></div>)}</section>
    <section className="cp-section"><h2>Human reviewer gates</h2><div className="cp-gates">{data.gates.map(g => <article className="cp-card" key={g.id}><div className="cp-gate-top"><span className="cp-gate-id">{g.id}</span><span>{countsFor(items,g.id)} items</span></div><h3>{g.gate}</h3><p><Marked text={g.name}/></p><p><Marked text={g.firm}/></p><small>{g.role}</small><div className="cp-email"><Marked text={g.email}/><Button variant="outline" size="icon" className="cp-button" title={`Copy ${g.id} email`} aria-label={`Copy ${g.id} email`} onClick={async () => { try { await navigator.clipboard.writeText(g.email); toast.success('Copied'); } catch { toast.error('Copy unavailable. Select the email text instead.'); } }}><Copy/></Button></div><p className="cp-scope">{g.scope}</p></article>)}</div></section>
    <section className="cp-rules">{[['System role','The system can only mark an item "Received by system pending human review".'],['Human role','Only the named human reviewer records Satisfied, Waived, Not applicable or Issue raised.'],['Old versions','Superseded documents go to "DO NOT USE". Nothing is deleted.']].map(([title,text]) => <div key={title}><h3>{title}</h3><p>{text}</p></div>)}</section>
    <section className="cp-section"><h2>Status summary</h2><div className="cp-summary">{Object.entries(statuses).map(([status,label]) => <div key={status}><strong>{counts[status]}</strong><span>{label}</span></div>)}</div><div className="cp-progress" aria-label="Checklist status distribution">{Object.keys(statuses).map(status => <div key={status} className={`cp-segment cp-segment-${status}`} style={{ flexGrow: counts[status] }} title={`${statuses[status as CpStatus]}: ${counts[status]}`}/>)}</div></section>
    <section className="cp-section"><div className="cp-section-heading"><h2>CP checklist</h2><span>{visible.length} of {items.length} items</span></div><div className="cp-filters"><label>Status<select value={filter} onChange={e => setFilter(e.target.value)}><option value="">All statuses</option>{Object.entries(statuses).map(([value,label]) => <option key={value} value={value}>{label}</option>)}</select></label><label>Reviewer gate<select value={gate} onChange={e => setGate(e.target.value)}><option value="">All reviewer gates</option>{data.gates.map(g => <option key={g.id} value={g.id}>{g.id} · {g.gate}</option>)}</select></label><label>Search<div className="cp-search"><Search size={16}/><input aria-label="Search checklist" placeholder="Ref, item or requirement" value={search} onChange={e => setSearch(e.target.value)}/></div></label></div>
    {visible.length === 0 && <p className="cp-empty">No checklist items match these filters.</p>}
    {data.sections.map(section => { const rows = visible.filter(i => i.section === section.id); if (!rows.length) return null; return <div className="cp-checklist-section" key={section.id}><h3><span>{section.id}</span>{section.title}</h3><div className="cp-table-wrap cp-desktop"><table className="cp-table"><thead><tr>{['Ref','Item','Requirement','Deliverer','Reviewer','Timing','Status'].map(h => <th key={h}>{h}</th>)}</tr></thead><tbody>{rows.map(i => <tr key={i.ref} data-cp-ref={i.ref}><td className="cp-ref">{i.ref}</td><td><strong><Marked text={i.title}/></strong><small>Clause: <Marked text={i.clause}/></small></td><td><Marked text={i.requirement} jump={jump}/></td><td>{i.deliverer}</td><td><span className="cp-gate-id">{i.gate}</span><small>{data.gates.find(g => g.id === i.gate)?.gate}</small></td><td><Marked text={i.timing}/></td><td>{statusBlock(i)}</td></tr>)}</tbody></table></div><div className="cp-mobile">{rows.map(i => <article className="cp-card" key={i.ref} data-cp-ref={i.ref}><span className="cp-ref">{i.ref}</span><h4><Marked text={i.title}/></h4><small>Clause: <Marked text={i.clause}/></small><p><Marked text={i.requirement} jump={jump}/></p><dl><dt>Deliverer</dt><dd>{i.deliverer}</dd><dt>Reviewer</dt><dd>{i.gate} · {data.gates.find(g => g.id === i.gate)?.gate}</dd><dt>Timing</dt><dd><Marked text={i.timing}/></dd></dl>{statusBlock(i)}</article>)}</div></div>; })}</section>
    <section className="cp-section"><h2>Document log</h2><div className="cp-table-wrap"><table className="cp-table cp-docs"><thead><tr>{['Date received','Ref','Document','From','File location','Signatures checked'].map(h => <th key={h}>{h}</th>)}</tr></thead><tbody><tr><td colSpan={6} className="cp-empty">No documents logged yet. Documents appear here when they arrive in the closing mailbox.</td></tr></tbody></table></div></section>
    <section className="cp-exports"><Button variant="outline" className="cp-button" disabled={!!exporting} onClick={() => download('excel')}><Download/>{exporting === 'excel' ? 'Exporting…' : 'Export Excel'}</Button><Button variant="outline" className="cp-button" disabled={!!exporting} onClick={() => download('word')}><FileText/>{exporting === 'word' ? 'Exporting…' : 'Export Word'}</Button></section>
    <footer className="cp-footer"><p>{data.disclaimer}</p><div><span>BEYOND HORIZONS - CRAFTED FOR VISIONARIES</span><span>WWW.BEYONDHORIZONS.SG</span></div></footer>
    <Dialog open={!!selected} onOpenChange={open => { if (!open && !busy) setSelected(null); }}><DialogContent className={`cp-tracker cp-dialog ${dark ? 'cp-dark' : ''}`}><DialogTitle>Record review · {selected?.ref}</DialogTitle><DialogDescription>{selected?.title}</DialogDescription><aside className="cp-notice"><p className="cp-eyebrow">NO RELIANCE</p><p>{data.notice}</p></aside><form onSubmit={save} className="cp-form"><label>Decision<select name="decision" required>{(['satisfied','waived','na','issue'] as const).map(s => <option key={s} value={s}>{statuses[s]}</option>)}</select></label><label>Confirmed-by name<input name="name" required maxLength={200}/></label><label>Confirmed-by email<input name="email" type="email" required maxLength={254}/></label><label>Note<textarea name="note" rows={3} maxLength={5000}/></label><p className="cp-muted">Only the named human reviewer records this decision.</p><Button type="submit" variant="outline" className="cp-button" disabled={busy}>{busy ? 'Saving…' : 'Save review'}</Button></form></DialogContent></Dialog>
  </div></main>;
}
function countsFor(items: CpItem[], gate: string) { return items.filter(i => i.gate === gate).length; }
function Marked({ text, jump }: { text: string; jump?: (ref: string) => void }) {
  const parts = text.split(/(\[[^\]]*\]|(?:TD-\d{2}|CP-[A-Z]\d{2}|G-\d{2}|CS-\d{2}))/g);
  return <>{parts.map((part,index): ReactNode => part.startsWith('[') ? <span key={index} className="cp-placeholder">{part}</span> : jump && /^(TD-\d{2}|CP-[A-Z]\d{2}|G-\d{2}|CS-\d{2})$/.test(part) ? <a key={index} href={`#${part}`} onClick={e => { e.preventDefault(); jump(part); }}>{part}</a> : part)}</>;
}