export type CpStatus = 'outstanding' | 'received' | 'issue' | 'satisfied' | 'waived' | 'na';
export interface Matter { title: string; prefix: string; client: string; borrower: string; guarantor: string; facility: string; purpose: string; governingLaw: string; jurisdiction: string; basis: string; signingDate: string; utilisationDate: string; closingMailbox: string; lastUpdate: string }
export interface Gate { id: string; gate: string; name: string; firm: string; role: string; email: string; scope: string }
export interface Section { id: string; title: string }
export interface CpItem { ref: string; order: number; section: string; clause: string; title: string; requirement: string; deliverer: string; gate: string; timing: string; status: CpStatus; statusNote?: string; reviewedBy?: string; reviewedAt?: string }
export interface DocRow { dateReceived: string; ref: string; document: string; from: string; fileLocation: string; signaturesChecked: string }
export interface ChecklistData { matter: Matter; notice: string; gates: Gate[]; sections: Section[]; cps: CpItem[]; docs: DocRow[]; disclaimer: string }
export const statuses: Record<CpStatus, string> = {
  outstanding: 'Outstanding', received: 'Received by system pending human review', issue: 'Issue raised by human reviewer',
  satisfied: 'Satisfied (confirmed by human reviewer)', waived: 'Waived (confirmed by human reviewer)', na: 'Not applicable (confirmed by human reviewer)',
};