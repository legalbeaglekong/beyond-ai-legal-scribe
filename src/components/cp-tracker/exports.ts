import type { ChecklistData, CpItem } from './types';
import { statuses } from './types';

export async function exportTracker(format: 'excel' | 'word', data: ChecklistData, items: CpItem[]) {
  const date = new Date().toISOString().slice(0, 10);
  const filename = `${data.matter.prefix}_CP Checklist_${date}`;
  const reviewers = data.gates.map(g => ({ Gate: g.id, Reviewer: g.gate, Name: g.name, Firm: g.firm, Role: g.role, Email: g.email, Scope: g.scope }));
  const checklist = items.map(i => ({ Ref: i.ref, Section: i.section, Clause: i.clause, Item: i.title, Requirement: i.requirement, Deliverer: i.deliverer, Reviewer: i.gate, Timing: i.timing, Status: statuses[i.status], 'Review note': i.statusNote ?? '', 'Reviewed by': i.reviewedBy ?? '', 'Reviewed at': i.reviewedAt ?? '' }));
  if (format === 'excel') {
    const XLSX = await import('xlsx');
    const workbook = XLSX.utils.book_new();
    const notice = [{ Notice: data.notice }, { Notice: data.disclaimer }, ...Object.entries(data.matter).map(([key,value]) => ({ Notice: `${key}: ${value}` }))];
    for (const [name, rows] of [['Notice - No reliance', notice], ['Human reviewers', reviewers], ['CP checklist', checklist], ['Document log', data.docs.length ? data.docs : [{ Message: 'No documents logged yet. Documents appear here when they arrive in the closing mailbox.' }]]] as const) {
      const sheet = XLSX.utils.json_to_sheet(rows);
      sheet['!cols'] = Object.keys(rows[0] ?? {}).map(key => ({ wch: key === 'Requirement' || key === 'Notice' || key === 'Scope' ? 85 : 28 }));
      XLSX.utils.book_append_sheet(workbook, sheet, name);
    }
    XLSX.writeFile(workbook, `${filename}.xlsx`);
    return;
  }
  const { Document, Packer, Paragraph, Table, TableRow, TableCell, PageOrientation, HeadingLevel, WidthType, TextRun } = await import('docx');
  const p = (text: string) => new Paragraph({ children: [new TextRun(text)], spacing: { after: 100 } });
  const table = (rows: string[][]) => new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows: rows.map(row => new TableRow({ children: row.map(text => new TableCell({ children: [p(text)] })) })) });
  const document = new Document({ sections: [{ properties: { page: { size: { width: 16838, height: 11906, orientation: PageOrientation.LANDSCAPE }, margin: { top: 720, right: 720, bottom: 720, left: 720 } } }, children: [
    new Paragraph({ text: data.matter.title, heading: HeadingLevel.TITLE }), p(data.notice), p(data.matter.basis),
    table(Object.entries(data.matter).map(([k,v]) => [k,v])),
    new Paragraph({ text: 'Human reviewers', heading: HeadingLevel.HEADING_1 }), table([Object.keys(reviewers[0] ?? {}), ...reviewers.map(row => Object.values(row))]),
    ...data.sections.flatMap(section => [new Paragraph({ text: `${section.id}. ${section.title}`, heading: HeadingLevel.HEADING_1 }), table([['Ref','Item','Requirement','Deliverer','Reviewer','Timing','Status / review'], ...items.filter(i => i.section === section.id).map(i => [i.ref,i.title,i.requirement,i.deliverer,i.gate,i.timing,[statuses[i.status],i.statusNote,i.reviewedBy,i.reviewedAt].filter(Boolean).join('\n')])])]),
    new Paragraph({ text: 'Document log', heading: HeadingLevel.HEADING_1 }),
    data.docs.length ? table([['Date received','Ref','Document','From','File location','Signatures checked'],...data.docs.map(d => Object.values(d))]) : p('No documents logged yet. Documents appear here when they arrive in the closing mailbox.'), p(data.disclaimer),
  ] }] });
  const blob = await Packer.toBlob(document);
  const url = URL.createObjectURL(blob);
  const anchor = documentDownload(url, `${filename}.docx`);
  anchor.click(); anchor.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function documentDownload(url: string, filename: string) { const a = window.document.createElement('a'); a.href = url; a.download = filename; window.document.body.appendChild(a); return a; }