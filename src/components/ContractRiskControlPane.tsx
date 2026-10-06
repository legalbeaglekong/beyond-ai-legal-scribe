const agreementColumns = [
  "Supplier A · MSA 2024",
  "Supplier B · MSA 2025",
  "Distributor C · DSA 2023",
  "Manufacturer D · OEM 2025",
];

const matrixRows = [
  {
    term: "Anti-bribery & corruption",
    cells: [
      ["Aligned", "0%", "aligned"],
      ["Minor", "12% · audit right shortened", "minor"],
      ["Material", "58% · no termination trigger", "material"],
      ["Aligned", "0%", "aligned"],
    ],
  },
  {
    term: "Sanctions & export controls",
    cells: [
      ["Aligned", "0%", "aligned"],
      ["Moderate", "34% · screening duty one-sided", "moderate"],
      ["Critical", "81% · clause absent", "critical"],
      ["Minor", "15% · list update cadence", "minor"],
    ],
  },
  {
    term: "Incoterms allocation",
    cells: [
      ["Minor", "10% · FCA vs playbook FOB", "minor"],
      ["Aligned", "0%", "aligned"],
      ["Moderate", "38% · risk passes early", "moderate"],
      ["Aligned", "0%", "aligned"],
    ],
  },
  {
    term: "Payment timelines",
    cells: [
      ["Aligned", "0%", "aligned"],
      ["Moderate", "41% · 90 days vs 45-day standard", "moderate"],
      ["Minor", "18% · late-interest cap removed", "minor"],
      ["Material", "55% · milestone triggers unclear", "material"],
    ],
  },
  {
    term: "Quality & warranties",
    cells: [
      ["Minor", "14% · remedy window shorter", "minor"],
      ["Aligned", "0%", "aligned"],
      ["Moderate", "36% · no batch-recall duty", "moderate"],
      ["Minor", "11% · wording drift only", "minor"],
    ],
  },
  {
    term: "Liability caps & indemnities",
    cells: [
      ["Moderate", "30% · cap below playbook floor", "moderate"],
      ["Minor", "16% · carve-out narrowed", "minor"],
      ["Material", "62% · indemnity one-way", "material"],
      ["Aligned", "0%", "aligned"],
    ],
  },
  {
    term: "Termination & exit",
    cells: [
      ["Aligned", "0%", "aligned"],
      ["Minor", "13% · notice period longer", "minor"],
      ["Moderate", "33% · no step-in right", "moderate"],
      ["Moderate", "29% · tooling ownership silent", "moderate"],
    ],
  },
];

const toneClasses: Record<string, string> = {
  aligned: "bg-accent/10 text-accent",
  minor: "bg-secondary text-secondary-foreground",
  moderate: "bg-gold/15 text-foreground",
  material: "bg-primary/10 text-primary",
  critical: "bg-primary text-primary-foreground",
};

const trend = [
  ["May", 12],
  ["Jun", 14],
  ["Jul", 11],
  ["Aug", 16],
  ["Sep", 13],
  ["Oct", 17],
] as const;

const dependencies = [
  {
    title: "Sanctions flag → three review points",
    body: "The missing example clause is traced to screening notices, termination rights and indemnity coverage, so counsel can assess the connected provisions together.",
    hot: true,
  },
  {
    title: "Incoterms → insurance and claims",
    body: "The delivery term sets the risk-transfer event. That event should align with insurance cover, inspection timing and the evidence needed for a claim.",
  },
  {
    title: "Payment → exposure and suspension",
    body: "Longer or unclear payment triggers change the exposure period and may affect liability-cap assumptions and any right to suspend supply.",
  },
  {
    title: "Quality → warranty, recall and exit",
    body: "Acceptance and warranty duties feed the recall-cost allocation and may activate repeat-failure, step-in or termination rights.",
  },
];

function DependencyMap() {
  return (
    <div className="overflow-x-auto border border-border bg-card p-3 md:p-5">
      <div className="mb-4 flex min-w-[760px] flex-wrap gap-5 text-[11px] text-muted-foreground">
        <span className="flex items-center gap-2"><i className="block w-6 border-t-2 border-primary" />Open flag and affected path</span>
        <span className="flex items-center gap-2"><i className="block w-6 border-t-2 border-muted-foreground" />Direct dependency</span>
        <span className="flex items-center gap-2"><i className="block w-6 border-t-2 border-dashed border-accent" />Monitoring link</span>
      </div>
      <svg className="h-auto min-w-[760px] w-full" viewBox="0 0 1040 540" role="img" aria-label="Illustrative contract dependency map connecting compliance controls, commercial terms, operational duties and remedies">
        <defs>
          <marker id="dependency-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5 0 10Z" className="fill-muted-foreground" /></marker>
          <marker id="dependency-arrow-hot" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5 0 10Z" className="fill-primary" /></marker>
          <marker id="dependency-arrow-accent" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5 0 10Z" className="fill-accent" /></marker>
        </defs>
        {[8, 270, 532, 794].map((x) => <rect key={x} x={x} y="32" width="238" height="490" rx="3" className="fill-background stroke-border" />)}
        {[
          [24, "01 · COMPLIANCE CONTROLS"], [286, "02 · COMMERCIAL MECHANICS"],
          [548, "03 · OPERATIONAL DUTIES"], [810, "04 · REMEDIES & EXIT"],
        ].map(([x, label]) => <text key={label} x={x} y="56" className="fill-muted-foreground text-[10px] font-bold">{label}</text>)}

        <g fill="none" strokeLinecap="round">
          <path d="M218 121C330 121 418 98 548 98" className="stroke-primary stroke-[2]" markerEnd="url(#dependency-arrow-hot)" />
          <path d="M218 121C430 145 650 206 810 236" className="stroke-primary stroke-[2]" markerEnd="url(#dependency-arrow-hot)" />
          <path d="M218 121C452 80 650 72 810 98" className="stroke-primary stroke-[2]" markerEnd="url(#dependency-arrow-hot)" />
          <path d="M218 226C338 226 436 226 548 226" className="stroke-muted-foreground/60 stroke-[1.3]" markerEnd="url(#dependency-arrow)" />
          <path d="M480 226C616 244 686 336 810 350" className="stroke-muted-foreground/60 stroke-[1.3]" markerEnd="url(#dependency-arrow)" />
          <path d="M480 226C560 250 560 348 548 382" className="stroke-accent stroke-[1.5] [stroke-dasharray:5_4]" markerEnd="url(#dependency-arrow-accent)" />
          <path d="M480 350C620 350 694 275 810 255" className="stroke-muted-foreground/60 stroke-[1.3]" markerEnd="url(#dependency-arrow)" />
          <path d="M480 350C620 390 700 452 810 455" className="stroke-muted-foreground/60 stroke-[1.3]" markerEnd="url(#dependency-arrow)" />
          <path d="M742 382C790 370 794 262 810 251" className="stroke-muted-foreground/60 stroke-[1.3]" markerEnd="url(#dependency-arrow)" />
          <path d="M742 382C780 404 786 446 810 455" className="stroke-accent stroke-[1.5] [stroke-dasharray:5_4]" markerEnd="url(#dependency-arrow-accent)" />
          <path d="M742 226C780 226 790 226 810 236" className="stroke-accent stroke-[1.5] [stroke-dasharray:5_4]" markerEnd="url(#dependency-arrow-accent)" />
        </g>

        {[
          ["Sanctions & export", "Clause absent · Critical 81%", 30, 88, "hot"],
          ["Anti-bribery", "Audit and termination controls", 30, 193, "base"],
          ["Incoterms & title/risk", "Who bears transit risk", 292, 193, "base"],
          ["Payment timelines", "Invoice and milestone triggers", 292, 317, "base"],
          ["Screening & notices", "Linked review required", 548, 65, "hot"],
          ["Insurance & logistics", "Cover follows risk transfer", 548, 193, "watch"],
          ["Quality & acceptance", "Warranty and recall duties", 548, 349, "watch"],
          ["Termination & exit", "Breach trigger may be unavailable", 810, 65, "hot"],
          ["Liability & indemnities", "Allocation may not cover exposure", 810, 203, "hot"],
          ["Claims & insurance", "Notice, evidence and recovery", 810, 317, "base"],
          ["Suspension / step-in", "Operational continuity", 810, 422, "base"],
        ].map(([title, subtitle, x, y, tone]) => {
          const nodeClass = tone === "hot" ? "fill-primary/10 stroke-primary stroke-[2]" : tone === "watch" ? "fill-accent/10 stroke-accent stroke-[1.5]" : "fill-card stroke-border";
          return <g key={title}><rect x={x} y={y} width={Number(x) > 500 ? 198 : 188} height="66" rx="3" className={nodeClass} /><text x={Number(x) + 15} y={Number(y) + 25} className="fill-foreground text-[12px] font-bold">{title}</text><text x={Number(x) + 15} y={Number(y) + 44} className="fill-muted-foreground text-[9px]">{subtitle}</text></g>;
        })}
      </svg>
    </div>
  );
}

export default function ContractRiskControlPane() {
  return (
    <section aria-labelledby="control-pane-title" className="border-y border-border bg-background py-14 md:py-20">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <header className="mb-8 flex flex-col justify-between gap-4 border-b border-border pb-6 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-xs font-bold uppercase text-primary">Illustrative control pane</p>
            <h2 id="control-pane-title" className="font-serif text-3xl text-foreground md:text-4xl">Deviation risk matrix</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">A sample view of how the add-on can compare live agreements against an agreed playbook, trace connected clauses and route consequential findings for counsel review.</p>
          </div>
          <p className="shrink-0 text-xs text-muted-foreground">Manufacturing & supply agreements · example portfolio</p>
        </header>

        <div className="mb-10 grid grid-cols-2 border-b border-border pb-8 md:grid-cols-4">
          {[["Agreements monitored", "24", "+2 this quarter"], ["Open deviations", "17", "+4 since last scan"], ["Critical flags", "1", "routed to counsel"], ["Renewals in 90 days", "3", "reviews scheduled"]].map(([label, value, note], index) => (
            <div key={label} className={`min-w-0 px-4 py-3 md:px-6 ${index === 0 || index === 2 ? "border-r border-border" : ""} ${index === 1 ? "md:border-r md:border-border" : ""}`}>
              <p className="text-xs text-muted-foreground">{label}</p>
              <p className={`my-2 font-serif text-4xl ${label === "Critical flags" ? "text-primary" : "text-foreground"}`}>{value}</p>
              <p className="text-xs text-muted-foreground">{note}</p>
            </div>
          ))}
        </div>

        <div className="mb-12 grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(260px,0.7fr)]">
          <div>
            <div className="mb-5 flex flex-wrap items-end justify-between gap-2"><div><h3 className="font-serif text-2xl">Deviations over time</h3><p className="mt-2 text-xs text-muted-foreground">May–October 2026 · illustrative monthly snapshots</p></div><span className="text-xs text-primary">17 currently open</span></div>
            <div className="flex h-52 items-end gap-3 border-b border-l border-border px-4 pt-4 md:gap-6">
              {trend.map(([month, value]) => <div key={month} className="flex h-full flex-1 flex-col justify-end gap-2 text-center"><span className="text-xs font-bold text-primary">{value}</span><div className="w-full bg-primary/15" style={{ height: `${value * 7}px` }}><div className="h-1 w-full bg-primary" /></div><span className="pb-2 text-[10px] text-muted-foreground">{month}</span></div>)}
            </div>
          </div>
          <div>
            <h3 className="font-serif text-2xl">October severity mix</h3>
            <p className="mt-2 text-xs text-muted-foreground">Outstanding illustrative findings</p>
            <div className="mt-7 flex items-center gap-6">
              <div className="grid size-36 shrink-0 place-items-center rounded-full bg-[conic-gradient(hsl(var(--gold))_0_29%,hsl(var(--accent))_29%_76%,hsl(var(--primary))_76%_94%,hsl(var(--foreground))_94%)]"><div className="grid size-24 place-items-center rounded-full bg-background text-center"><span className="font-serif text-3xl leading-none">17<small className="mt-1 block font-sans text-[9px] text-muted-foreground">open</small></span></div></div>
              <dl className="min-w-0 flex-1 space-y-2 text-xs">{[["Minor", "5"], ["Moderate", "8"], ["Material", "3"], ["Critical", "1"]].map(([label, value]) => <div key={label} className="flex justify-between border-b border-border pb-2"><dt>{label}</dt><dd className="font-bold">{value}</dd></div>)}</dl>
            </div>
          </div>
        </div>

        <div className="mb-12 grid gap-8 xl:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0">
            <h3 className="font-serif text-2xl">Key-term deviation heatmap</h3>
            <p className="mb-5 mt-2 max-w-4xl text-xs leading-relaxed text-muted-foreground">Selected findings from four example agreements. Scores show illustrative departure from an agreed playbook—not the probability of loss or a legal risk rating.</p>
            <div className="overflow-x-auto border border-border bg-card">
              <table className="w-full min-w-[820px] table-fixed border-collapse text-left text-[11px]">
                <thead><tr className="bg-secondary"><th className="w-[20%] border-b border-r border-border p-3">Key term</th>{agreementColumns.map((column) => <th key={column} className="border-b border-r border-border p-3 last:border-r-0">{column}</th>)}</tr></thead>
                <tbody>{matrixRows.map((row) => <tr key={row.term}><th scope="row" className="border-b border-r border-border bg-card p-3 align-top font-bold last:border-b-0">{row.term}</th>{row.cells.map(([status, detail, tone], index) => <td key={`${row.term}-${index}`} className={`border-b border-r border-border p-3 align-top last:border-r-0 ${toneClasses[tone]}`}><strong className="block">{status}</strong><span className="mt-1 block font-normal leading-relaxed">{detail}</span></td>)}</tr>)}</tbody>
              </table>
            </div>
          </div>
          <aside>
            <h3 className="font-serif text-2xl">Escalation queue</h3>
            <p className="mb-4 mt-2 text-xs text-muted-foreground">Example flags routed to counsel</p>
            <div className="space-y-5">{[
              ["Distributor C · sanctions clause absent", "No sanctions or export-control provision found."],
              ["Distributor C · indemnity one-way", "Indemnity runs to the counterparty only."],
              ["Manufacturer D · milestones unclear", "Payment trigger events are ambiguous."],
              ["Supplier B · 90-day payment terms", "Exceeds the 45-day example playbook."],
            ].map(([title, body], index) => <div key={title} className={`border-l-2 pl-4 ${index < 2 ? "border-primary" : "border-gold"}`}><h4 className="font-sans text-xs font-bold">{title}</h4><p className="mt-2 text-xs leading-relaxed text-muted-foreground">{body}</p></div>)}</div>
          </aside>
        </div>

        <div>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-2"><div><h3 className="font-serif text-2xl">Contract dependency map</h3><p className="mt-2 max-w-3xl text-xs leading-relaxed text-muted-foreground">How a change to one clause can alter related controls, commercial mechanics, operational duties and remedies.</p></div><span className="text-xs text-muted-foreground">Illustrative · connected review points</span></div>
          <DependencyMap />
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">{dependencies.map((item) => <article key={item.title} className={`border-l-2 pl-4 ${item.hot ? "border-primary" : "border-border"}`}><h4 className="font-sans text-sm font-bold text-foreground">{item.title}</h4><p className="mt-3 text-xs leading-relaxed text-muted-foreground">{item.body}</p></article>)}</div>
        </div>

        <p className="mt-10 border-t border-border pt-5 text-[11px] leading-relaxed text-muted-foreground">Illustrative demonstration only. Every supplier, agreement, date, trend, score, flag and finding shown here is fictitious. The tool highlights possible deviations for counsel review; it does not interpret contracts, give legal advice, predict loss or replace professional judgment.</p>
      </div>
    </section>
  );
}