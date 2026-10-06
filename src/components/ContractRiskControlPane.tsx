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
  const paths = [
    { source: "Sanctions & export", note: "Clause absent · Critical 81%", tone: "hot", targets: ["Screening & notices", "Termination & exit", "Liability & indemnities"] },
    { source: "Anti-bribery", note: "Audit and termination controls", tone: "base", targets: ["Termination & exit"] },
    { source: "Incoterms & title/risk", note: "Who bears transit risk", tone: "base", targets: ["Insurance & logistics", "Claims & insurance", "Quality & acceptance"], monitoring: [2] },
    { source: "Payment timelines", note: "Invoice and milestone triggers", tone: "base", targets: ["Liability & indemnities", "Suspension / step-in"] },
    { source: "Quality & acceptance", note: "Warranty and recall duties", tone: "watch", targets: ["Liability & indemnities", "Suspension / step-in"], monitoring: [1] },
    { source: "Insurance & logistics", note: "Cover follows risk transfer", tone: "watch", targets: ["Liability & indemnities"], monitoring: [0] },
  ];
  return (
    <div className="overflow-x-auto border border-border bg-card p-3 md:p-5">
      <div className="mb-4 flex min-w-[760px] flex-wrap gap-5 text-[11px] text-muted-foreground">
        <span className="flex items-center gap-2"><i className="block w-6 border-t-2 border-primary" />Open flag and affected path</span>
        <span className="flex items-center gap-2"><i className="block w-6 border-t-2 border-muted-foreground" />Direct dependency</span>
        <span className="flex items-center gap-2"><i className="block w-6 border-t-2 border-dashed border-accent" />Monitoring link</span>
      </div>
      <svg className="h-auto min-w-[760px] w-full" viewBox="0 0 1040 730" role="img" aria-label="Illustrative contract dependency map connecting compliance controls, commercial terms, operational duties and remedies">
        <title>Contract dependencies, grouped by originating clause</title>
        <desc>Each row connects one originating clause to its related review points. Connections remain within their row and never cross a text box.</desc>
        <defs>
          <marker id="dependency-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5 0 10Z" className="fill-muted-foreground" /></marker>
          <marker id="dependency-arrow-hot" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5 0 10Z" className="fill-primary" /></marker>
          <marker id="dependency-arrow-accent" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5 0 10Z" className="fill-accent" /></marker>
        </defs>
        <text x="28" y="24" className="fill-muted-foreground text-[10px] font-bold">ORIGINATING CLAUSE</text>
        <text x="536" y="24" className="fill-muted-foreground text-[10px] font-bold">CONNECTED REVIEW POINTS</text>
        {paths.map((row, index) => {
          const top = 42 + index * 114;
          const centre = top + 49;
          const hot = row.tone === "hot";
          const sourceClass = hot ? "fill-primary/10 stroke-primary" : row.tone === "watch" ? "fill-accent/10 stroke-accent/40" : "fill-background stroke-border";
          const targetYs = row.targets.map((_, targetIndex) => centre + (targetIndex - (row.targets.length - 1) / 2) * 32);
          return (
            <g key={row.source}>
              {index > 0 && <path d={`M16 ${top - 8}H1024`} className="stroke-border" />}
              <rect x="28" y={centre - 30} width="310" height="60" rx="4" className={sourceClass} />
              <text x="46" y={centre - 5} className="fill-foreground text-[13px] font-bold">{row.source}</text>
              <text x="46" y={centre + 15} className="fill-muted-foreground text-[10px]">{row.note}</text>
              <g fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d={`M338 ${centre}H420`} className={hot ? "stroke-primary stroke-[1.5]" : "stroke-muted-foreground/40 stroke-[1.3]"} />
                {targetYs.length > 1 && <path d={`M420 ${targetYs[0]}V${targetYs[targetYs.length - 1]}`} className={hot ? "stroke-primary stroke-[1.5]" : "stroke-muted-foreground/40 stroke-[1.3]"} />}
                {targetYs.map((y, targetIndex) => {
                  const monitoring = row.monitoring?.includes(targetIndex);
                  return <path key={y} d={`M420 ${y}H520`} className={hot ? "stroke-primary stroke-[1.5]" : monitoring ? "stroke-accent stroke-[1.3] [stroke-dasharray:4_4]" : "stroke-muted-foreground/50 stroke-[1.3]"} markerEnd={`url(#dependency-arrow${hot ? "-hot" : monitoring ? "-accent" : ""})`} />;
                })}
              </g>
              {row.targets.map((target, targetIndex) => {
                const y = targetYs[targetIndex] ?? centre;
                return <g key={target}><rect x="536" y={y - 13} width="476" height="26" rx="3" className={hot ? "fill-primary/5 stroke-primary/20" : "fill-background stroke-border"} /><text x="552" y={y + 4} className="fill-foreground text-[11px]">{target}</text></g>;
              })}
            </g>
          );
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
                <tbody>{matrixRows.map((row) => <tr key={row.term}><th scope="row" className="border-b border-r border-border bg-card p-3 align-top font-bold last:border-b-0">{row.term}</th>{row.cells.map(([status, detail, tone], index) => <td key={`${row.term}-${index}`} className={`border-b border-r border-border p-3 align-top last:border-r-0 ${toneClasses[tone ?? "aligned"]}`}><strong className="block">{status}</strong><span className="mt-1 block font-normal leading-relaxed">{detail}</span></td>)}</tr>)}</tbody>
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