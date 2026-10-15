import type { Aircraft } from './data';
import { fmtSim, type Risk } from './engine';

const DISCLAIMER = 'Illustrative demo only, using simulated data and fictional sample terms. Not legal advice on any jurisdiction\'s law. Beyond Horizons by Bethel Chambers LLC.';

function download(name: string, blob: Blob) { const u = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = u; a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(u), 1000); }

export function exportCsv(fleet: Aircraft[], risks: Record<string, Risk>, t: number) {
  const q = (v: unknown) => `"${String(v).replace(/"/g, '""')}"`;
  const rows = [['DEMO — SIMULATED DATA', fmtSim(t)], ['Registration', 'Type', 'Operator', 'Lender', 'Country', 'Risk score', 'Covenant status', 'Insurance status', 'Flags']];
  for (const a of fleet) { const r = risks[a.reg]!; rows.push([a.reg, a.type, a.operator, a.lender, r.pos.country ?? 'Airborne', String(r.overall), r.covenant, r.insurance, r.flags.map(f => `${f.title} (${f.ref})`).join('; ')]); }
  rows.push([]); rows.push(['Covenant exceptions']); rows.push(['Registration', 'Flag', 'Level', 'Clause / policy', 'Consequence (sample terms)']);
  for (const a of fleet) for (const f of risks[a.reg]!.flags) rows.push([a.reg, f.title, f.level, f.ref, f.consequence]);
  rows.push([]); rows.push([DISCLAIMER]);
  download('fleet-risk-report-DEMO.csv', new Blob([rows.map(r => r.map(q).join(',')).join('\n')], { type: 'text/csv' }));
}

export async function exportPdf(fleet: Aircraft[], risks: Record<string, Risk>, t: number) {
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF({ unit: 'pt', format: 'a4' }); const W = doc.internal.pageSize.getWidth(); let y = 56;
  const stamp = () => { doc.setTextColor(200, 40, 40); doc.setFontSize(54); doc.text('DEMO', W / 2, 430, { align: 'center', angle: 30 }); doc.setTextColor(20); };
  const line = (txt: string, size = 9, bold = false) => { if (y > 780) { doc.addPage(); stamp(); y = 56; } doc.setFont('helvetica', bold ? 'bold' : 'normal'); doc.setFontSize(size); const parts = doc.splitTextToSize(txt, W - 96); doc.text(parts, 48, y); y += parts.length * (size + 4); };
  stamp();
  line('Sample Fleet Risk Report — DEMO', 18, true); line(`Simulated as at ${fmtSim(t)} · All aircraft, parties, terms and news are fictional.`, 9); y += 8;
  line('Fleet summary', 12, true);
  for (const a of fleet) { const r = risks[a.reg]!; line(`${a.reg}  ${a.type}  ${a.operator}  ·  risk ${r.overall} (${r.level})  ·  covenants ${r.covenant}  ·  insurance ${r.insurance}  ·  ${r.pos.country ?? 'airborne'}`); }
  y += 10; line('Covenant exceptions (flags for review)', 12, true);
  let any = false;
  for (const a of fleet) for (const f of risks[a.reg]!.flags) { any = true; line(`${a.reg} — ${f.title} [${f.level.toUpperCase()}] · ${f.ref}`, 9, true); line(`${f.detail} ${f.consequence} Next step: review with counsel.`); }
  if (!any) line('No flags at this simulated time.');
  y += 12; line(DISCLAIMER, 8);
  doc.save('fleet-risk-report-DEMO.pdf');
}
