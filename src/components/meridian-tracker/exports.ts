import { disclaimer, noticeParagraphs, statusLabels, type MeridianData, type MeridianRow } from './types';

export async function exportTracker(format: 'excel' | 'word', data: MeridianData, rows: MeridianRow[]) {
  const date = new Date().toISOString().slice(0, 10);
  const filename = `DEMO_Project-Meridian_CP Checklist_${date}`;
  const gates = Object.entries(data.GATES).sort((a, b) => a[1].order - b[1].order);
  const reviewers = gates.map(([, g]) => ({ Gate: g.gate, Name: g.name, Firm: g.firm, Role: g.role, Email: g.email, Scope: g.scope }));
  const sections = [...new Set(data.ROWS.map(r => r.sec))];
  const checklist = rows.map(r => ({ Ref: r.ref, Part: r.sec, Law: r.jur === 'XX' ? '—' : r.jur, 'CP / CS': r.title, Requirement: r.req, 'Delivered by': r.by, 'Human reviewer': data.GATES[r.gate]?.name ?? '', 'Reviewer firm': data.GATES[r.gate]?.firm ?? '', 'Reviewer email': data.GATES[r.gate]?.email ?? '', Due: r.due, Status: statusLabels[r.status], Note: r.note }));
  const parties = data.PARTIES.flatMap(g => g.items.map(i => ({ Group: g.group, Name: i.name, Role: i.role, Counsel: i.counsel, Email: i.email })));
  if (format === 'excel') {
    const XLSX = await import('xlsx');
    const workbook = XLSX.utils.book_new();
    const notice = [{ Notice: 'IMPORTANT NOTICE - NO RELIANCE (DEMO WITH FICTIONAL DATA)' }, ...noticeParagraphs.map(text => ({ Notice: text }))];
    for (const [name, sheetRows] of [['Notice - No reliance', notice], ['Human reviewers', reviewers], ['CP checklist', checklist], ['Parties', parties]] as const) {
      const sheet = XLSX.utils.json_to_sheet(sheetRows);
      sheet['!cols'] = Object.keys(sheetRows[0] ?? {}).map(key => ({ wch: key === 'Requirement' || key === 'Notice' || key === 'Scope' ? 85 : 28 }));
      if (name === 'CP checklist') sheet['!autofilter'] = { ref: XLSX.utils.encode_range({ s: { r: 0, c: 0 }, e: { r: sheetRows.length, c: Object.keys(sheetRows[0] ?? {}).length - 1 } }) };
      XLSX.utils.book_append_sheet(workbook, sheet, name);
    }
    XLSX.writeFile(workbook, `${filename}.xlsx`);
    return;
  }
  const { Document, Packer, Paragraph, Table, TableRow, TableCell, PageOrientation, HeadingLevel, WidthType, TextRun, ShadingType } = await import('docx');
  const runs = (text: string, opts?: { bold?: boolean; color?: string; font?: string; size?: number }) => text.split('\n').flatMap((line, index) => index === 0 ? [new TextRun({ text: line, ...opts })] : [new TextRun({ break: 1, ...opts }), new TextRun({ text: line, ...opts })]);
  const cell = (text: string, opts?: { bold?: boolean; fill?: string; color?: string }) => new TableCell({ shading: opts?.fill ? { type: ShadingType.CLEAR, fill: opts.fill } : undefined, children: [new Paragraph({ children: runs(text, { bold: opts?.bold, color: opts?.color, font: 'Calibri', size: 18 }) })] });
  const table = (header: string[], body: string[][]) => new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows: [new TableRow({ children: header.map(h => cell(h, { bold: true, fill: 'F4F3F0', color: '80302C' })) }), ...body.map(row => new TableRow({ children: row.map(text => cell(text)) }))] });
  const heading = (text: string) => new Paragraph({ heading: HeadingLevel.HEADING_1, children: runs(text, { font: 'Georgia', bold: true, color: '1F1F1F' }), spacing: { before: 240, after: 120 } });
  const maroonBorder = { style: 'single' as const, size: 12, color: '80302C' };
  const noticeBox = new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, borders: { top: maroonBorder, bottom: maroonBorder, left: maroonBorder, right: maroonBorder, insideHorizontal: maroonBorder, insideVertical: maroonBorder }, rows: [new TableRow({ children: [new TableCell({ shading: { type: ShadingType.CLEAR, fill: 'F4F3F0' }, children: [new Paragraph({ children: runs('IMPORTANT NOTICE - NO RELIANCE (DEMO WITH FICTIONAL DATA)', { font: 'Calibri', size: 18, bold: true, color: '80302C' }), spacing: { after: 120 } }), ...noticeParagraphs.map(text => new Paragraph({ children: runs(text, { font: 'Calibri', size: 18 }), spacing: { after: 120 } }))] })] })] });
  const document = new Document({ sections: [{ properties: { page: { size: { width: 16838, height: 11906, orientation: PageOrientation.LANDSCAPE }, margin: { top: 720, right: 720, bottom: 720, left: 720 } } }, children: [
    new Paragraph({ children: runs('BEYOND HORIZONS by Bethel Chambers LLC', { font: 'Georgia', bold: true, size: 28 }), spacing: { after: 60 } }),
    new Paragraph({ children: runs('DEMO - DUMMY DATA · PRIVATE & CONFIDENTIAL', { font: 'Georgia', bold: true, color: '80302C', size: 20 }), spacing: { after: 160 } }),
    new Paragraph({ heading: HeadingLevel.TITLE, children: runs('US$850m senior secured facilities for a 120 MW data centre campus', { font: 'Georgia' }), spacing: { after: 240 } }),
    noticeBox,
    heading('Human reviewers'),
    table(['Gate', 'Name', 'Firm', 'Role', 'Email', 'Scope'], reviewers.map(r => [r.Gate, r.Name, r.Firm, r.Role, r.Email, r.Scope])),
    ...sections.flatMap(sec => [heading(sec), table(['Ref', 'CP / CS and requirement', 'Law', 'Delivered by', 'Human reviewer', 'Status and note'], rows.filter(r => r.sec === sec).map(r => [r.ref, `${r.title}\n${r.req}`, r.jur === 'XX' ? '—' : r.jur, r.by, data.GATES[r.gate]?.name ?? '', [statusLabels[r.status], r.note, r.recordedAt ? `Recorded ${r.recordedAt} SGT (demo)` : ''].filter(Boolean).join('\n')]))]),
    new Paragraph({ children: runs(disclaimer, { font: 'Calibri', size: 16, color: '7A7A7A' }), spacing: { before: 240 } }),
  ] }] });
  const blob = await Packer.toBlob(document);
  const url = URL.createObjectURL(blob);
  const anchor = window.document.createElement('a');
  anchor.href = url; anchor.download = `${filename}.docx`;
  window.document.body.appendChild(anchor);
  anchor.click(); anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
