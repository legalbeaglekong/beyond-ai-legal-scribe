import IndustryPageLayout, { type IndustryPageData } from "@/components/IndustryPageLayout";
import type { ReactNode } from "react";
import { Building2, ShieldCheck, Scale, CalendarClock, Bot, Briefcase } from "lucide-react";

const ac = "text-primary underline underline-offset-2";
const Ext = ({ href, children }: { href: string; children: ReactNode }) => <a href={href} target="_blank" rel="noopener" className={ac}>{children}</a>;
const st = "text-foreground";


export const data: IndustryPageData = {
  slug: "fractional-gc",
  serviceSchema: true,
  beforeOverview: (<section className="section-padding bg-background"><div className="max-w-3xl mx-auto container-padding space-y-4"><h2 className="text-2xl md:text-3xl font-serif font-bold">Who fractional general counsel is for in Singapore</h2><p>Fractional general counsel suits a Singapore organisation that needs senior legal judgment regularly, but does not need — or does not yet need — a lawyer employed full-time. On this page that typically means a scale-up or an established company whose contracts, employment questions, board and privacy matters, <a className={"text-primary underline"} href="/industry/ai-code-counsel">AI vendor terms</a> or regulator-facing work keep reaching the founders or the finance team. If legal volume truly fills a full-time seat, or you need someone physically in your meetings most days, employ in-house counsel instead; the comparison below says so plainly. If the work is already scoped and you only need hands to execute it, an agency placement may be enough.</p><h3 className="text-xl md:text-2xl font-serif font-bold pt-4">Who it suits: growth-stage companies across sectors</h3><p>Fractional general counsel is often chosen by growth-stage companies, usually with 10 employees or more. We have supported businesses under this arrangement in sectors from energy and sustainability to consumer-facing <a className={ac} href="/industry/wellness-health">physiotherapy and therapeutics</a>, <a className={ac} href="/industry/blockchain-digital-assets">blockchain</a> and <a className={ac} href="/expertise/financial-services">financial services</a>.</p><p>One sector example, for illustration only: a Singapore waste-to-energy, alternative fuels or <a className={ac} href="/singapore-alternative-energy-law">solar energy</a> business with 20 or more employees, with power purchase agreements (PPAs), virtual PPAs and hedging arrangements to negotiate, a <a className={ac} href="/expertise/corporate-transactions">joint venture</a> or an acquisition in view, and an <a className={ac} href="/expertise/startup-funding">equity round</a> or a <a className={ac} href="/singapore-borrower-finance-counsel">debt raise</a> to fund its growth. Each workstream brings its own documents, counterparties and advisers. A fractional general counsel holds the company's side across them — keeping positions consistent between the PPA and hedging terms, the joint venture terms, the investment documents and the facility, preparing board decisions, and bringing in specialist or foreign counsel where a matter needs it. Beyond Horizons by Bethel Chambers LLC acts for waste-to-energy, alternative fuels and solar energy businesses, including on PPAs, virtual PPAs, hedging and related funding. This example describes a type of organisation the model suits; it is not a description of any client.</p></div></section>),
  afterOverview: (<><section className="section-padding bg-background"><div className="max-w-3xl mx-auto container-padding space-y-4"><p>Day-to-day commercial contract work is covered in more detail under <a className={"text-primary underline"} href="/expertise/commercial-contracts">commercial contracts counsel</a>.</p><p>Technology companies can also read about <a className={"text-primary underline"} href="/expertise/tech-general-counsel">general counsel support for tech companies</a>.</p></div></section><section className="section-padding bg-background"><div className="max-w-3xl mx-auto container-padding space-y-4"><h2 className="text-2xl md:text-3xl font-serif font-bold">How a fractional GC engagement works</h2><ol className="list-decimal pl-6"><li>Write to <a className={"text-primary underline"} href="mailto:HL@beyondhorizons.sg">HL@beyondhorizons.sg</a>. We do not bill for the first conversation, and we do not charge by the hour for retained work.</li><li>We scope the work with you — the matters, the volume and the continuity you need — and put a proposal to you.</li><li>Scope and fees are fixed in the engagement letter before work begins. We work to a typical 3 to 5 business day substantive response timeline. We do not compare our fees with those of any other law practice.</li><li>You work with a named lead counsel and a named deputy, both holding your matters, so continuity does not depend on one employed seat.</li></ol><h3 className="text-xl md:text-2xl font-serif font-bold pt-4">What the retainer includes, and what it does not</h3><ul className="list-disc pl-6 space-y-2"><li><strong className={st}>Base scope:</strong> continuing legal judgment on the matters listed in your engagement letter — for example commercial contracts, board matters, employment questions and regulatory correspondence.</li><li><strong className={st}>Transactions:</strong> deal workstreams such as equity rounds, joint ventures, acquisitions and debt raises can sit within the retainer. Where a transaction is complex and high value, it is scoped as a separate matter with its own engagement terms.</li><li><strong className={st}>Not included unless agreed:</strong> court and arbitration proceedings, which are scoped separately; advice on the laws of other countries, which we obtain from and coordinate with local counsel; and tax return preparation.</li><li>Where a matter needs a specialist team, we will say so.</li></ul><p>For the ACRA changes that took effect on 20 October 2026, see our <a href="/expertise/regulatory-compliance" className={ac}>regulatory compliance page</a>.</p><h3 className="text-xl md:text-2xl font-serif font-bold pt-4">Fractional legal counsel, outsourced general counsel or a part-time in-house lawyer?</h3><p>These are different names for the same need: senior legal judgment on a regular, scoped basis, without a full-time hire. With Beyond Horizons by Bethel Chambers LLC it is a retainer with a regulated Singapore law practice, with a named lead counsel and a named deputy, and scope and fees set out in an engagement letter. If your legal work would fill a full-time seat, employing in-house counsel may suit you better, and we will tell you so.</p><h3 className="text-xl md:text-2xl font-serif font-bold pt-4">What to send for a first conversation</h3><p>The first conversation is not billed. It helps to send, in a short email to <a className={ac} href="mailto:HL@beyondhorizons.sg">HL@beyondhorizons.sg</a>:</p><ol className="list-decimal pl-6 space-y-1"><li>your current stage and headcount;</li><li>transactions expected in the next 12 months, such as a funding round, debt facility, joint venture or acquisition;</li><li>the contracts and regulatory matters that take up most of your team's time.</li></ol></div></section></>),
  seo: {
    title: "Fractional General Counsel Singapore | Beyond Horizons",
    description:
      "Fractional general counsel and fractional legal counsel in Singapore: scoped retainer support from Beyond Horizons by Bethel Chambers LLC.",
  },
  consultHref: "mailto:HL@beyondhorizons.sg",
  hero: {
    title: "Fractional General Counsel Singapore",
    subtitle:
      "A fractional general counsel is a senior lawyer retained by your organisation on a scoped, part-time basis, instead of employed full-time. At Beyond Horizons by Bethel Chambers LLC, fractional general counsel support means ongoing legal judgment under a retainer with a named lead counsel and a named deputy — covering, as scoped, contracts, employment, board, privacy, AI vendors, restructuring and regulator-facing work. It is not a full-time employment contract and it is not an agency placement. Organisations generally choose among three models: employ a lawyer, take a placement from an agency, or retain a law practice. This page explains each model and how a retainer with us is structured.",
    badges: ["Bethel Chambers LLC — Singapore law corporation", "Named lead counsel and named deputy", "Scope and fees in the engagement letter"],
  },
  intro: {
    paragraphs: [
      "Beyond Horizons is the practice of Bethel Chambers LLC, a Singapore law corporation. This page explains those options and how a retainer with us differs in structure — not by comparing our fees with other law practices.",
    ],
  },
  comparison: {
    heading: "If you need legal support: three options",
    columns: [
      "",
      "Retain Beyond Horizons by Bethel Chambers LLC",
      "Employ in-house counsel",
      "Lawyer placed by an agency",
    ],
    matrix: [
      [
        "What you are buying",
        "Judgment on what needs doing",
        "Employed hours inside your organisation",
        "Capacity for work you have already scoped",
      ],
      [
        "Professional indemnity behind the advice",
        "Compulsory for a Singapore law corporation (cover must be proved before a practising certificate is issued)",
        "Not compulsory in the same way — the company carries employee error risk under its own policies",
        "Often none on “advice” where the supplier states it does not offer legal advice",
      ],
      [
        "Practising certificate / continuing education",
        "Held and renewed by the practice",
        "Often not required to advise your own employer",
        "Depends on the individual placed — ask",
      ],
      [
        "Privilege (Singapore Evidence Act)",
        "s128 — advocate or solicitor acting for a client",
        "s128A — “legal counsel” defined as your employee",
        "Unclear for a contractor who is not your employee",
      ],
      [
        "Conflicts check before acting",
        "Professional Conduct Rules 20–22 — the check can stop us taking the work",
        "One employer, one client",
        "An employment agency is not a law practice; those PCR conflict rules do not bind the agency",
      ],
      [
        "If something goes wrong",
        "You are a client — Law Society complaints / disciplinary route",
        "Internal employment matter",
        "Commercial contract with a staffing supplier",
      ],
      [
        "Continuity",
        "Named lead counsel and named deputy, both holding your matters",
        "One person is one point of failure through leave and illness",
        "Depends on the supplier’s bench and your contract",
      ],
      [
        "How the relationship ends",
        "Engagement letter",
        "Employment notice, possible re-hire cost",
        "Placement contracts are built to end",
      ],
    ],
    notes: [
      "This table is about structure and professional duties, not price. We do not compare our fees with those of any other law practice.",
      "Agency placements. Some placement businesses are registered employment agencies. They may state that they do not offer legal advice and are not a registered law firm. That can be a good fit when you need hands for scoped work. It is not the same as retaining a law practice for judgment.",
      "Daily presence. If you need someone physically in your meetings most days, employ them. A retainer cannot honestly replace that.",
    ],
    hideDefaultCaption: true,
    accoladesOverride: [
      "Hui Ling Teo is ranked Band 3 for Aviation: Finance in Singapore by Chambers Asia-Pacific 2026.",
      "Hui Ling Teo — Legal 500 Next Generation Partner, 2023",
    ],
  },
  overview: {
    heading: "What a Beyond Horizons retainer covers",
    intro: (<>
      <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground">Plans, scope and turnaround</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong className={st}>Plans:</strong> Fractional GC plans start from SGD 4,000 per month to access Chambers (2026) and Legal 500 (2023) ranked counsel, Hui Ling Teo, with more than a decade of experience, including at international law firms.</li>
        <li><strong className={st}>Day-to-day documentation:</strong> unlimited review of day-to-day documentation, one at a time, within the scope of your engagement letter, with a typical 3 to 5 business day substantive response timeline.</li>
        <li><strong className={st}>Faster or larger work:</strong> Faster responses, or larger, more complex or high-stakes work, can be accessed at surge or upsize pricing. Because we already hold the context and understanding of your business, you do not need to pay twice for that understanding.</li>
        <li><strong className={st}>Deal work:</strong> equity rounds, joint ventures, acquisitions and debt raises can sit within the plan; where a transaction is complex and high value, it is scoped as a separate matter with its own engagement terms.</li>
      </ul>
      <p>Fees and scope for your plan are fixed in the engagement letter before work begins.</p>
    </>),
    services: [
      {
        icon: Building2,
        title: "1. Corporate restructuring",
        bullets: [
          "Group reorganisations, holding structures and intra-group transfers",
          "Sequencing steps so filings, board authorities and share movements happen in the right order",
          "Records that show what was done and when",
        ],
      },
      {
        icon: ShieldCheck,
        title: "2. Regulator audits and reviews",
        bullets: [
          "Preparing for and responding to MOM and MAS reviews",
          "Building the record before a notice arrives — inspections test what you already hold",
        ],
      },
      {
        icon: Scale,
        title: "3. Disagreements with customers and employees — before proceedings",
        bullets: [
          "Complaints, terminations and grievances while they can still be settled",
          "If a matter goes to proceedings, the disputes team at Bethel Chambers LLC can take it through",
          "Documents written properly the first time",
        ],
      },
      {
        icon: CalendarClock,
        title: "4. Forward-looking compliance",
        bullets: [
          "Rules signalled or passed but not yet commenced",
          "Licensing changes and regulator guidance not yet final",
          "Processes built once, rather than retrofitted under deadline",
        ],
      },
      {
        icon: Bot,
        title: "5. Negotiating with AI vendors — on your side of the table",
        bullets: [
          "Model and service terms",
          "Rights over your data, and whether it trains anything",
          "Indemnities for automated output",
          "Liability caps, audit and exit rights",
          "What happens when the vendor silently changes the model",
          "These contracts are usually drafted by the vendor, for the vendor, and presented as “standard.”",
        ],
      },
      {
        icon: Briefcase,
        title: "6. Transactions and capital raising — the company's side, across workstreams",
        bullets: [
          <><a className={ac} href="/expertise/startup-funding">Equity rounds</a>: term sheets, subscription and shareholder agreements, equity incentive plans, and the board and shareholder approvals a round needs</>,
          <><a className={ac} href="/singapore-borrower-finance-counsel">Debt and green finance as borrower</a>: facility, guarantee and security review before signing, sustainability-linked loan terms, and waivers</>,
          <><a className={ac} href="/expertise/corporate-transactions">Joint ventures</a>: joint venture and shareholder agreements, governance terms and negotiation with co-venturers</>,
          <><a className={ac} href="/expertise/ma-cross-border">Acquisitions</a>: due diligence coordination, purchase agreements and post-closing integration from a compliance perspective</>,
          <><a className={ac} href="/industry/energy-transition">Project and commercial contracts</a>: power purchase agreements (PPAs), virtual PPAs, hedging, EPC and supply terms, reviewed for consistency with your financing documents</>,
          "Equity rounds, joint ventures, acquisitions and debt raises can sit within the retainer; where a transaction is complex and high value, it is scoped as a separate matter with its own engagement terms.",
        ],
      },
    ],
    note:
      "We do not charge by the hour for retained work, and we do not bill for the first conversation. We give no guarantee of outcome. We commit to a named lead counsel, a named deputy, and a typical 3 to 5 business day substantive response timeline.",
  },
  closing: {
    heading: "How we differ (in one paragraph)",
    paragraphs: [
      <>You retain a regulated Singapore law corporation: compulsory professional indemnity, practising certificates, PCR conflict checks, a Law Society complaints route, and privilege under Evidence Act s128 for solicitor–client communications. You get a named lead and a named deputy — not a single employed seat and not an agency placement that may expressly not offer legal advice. Scope and fees sit in the engagement letter; we do not compare our fees with those of other law practices. Your lead counsel is <a className={ac} href="/team/hui-ling-teo">Hui Ling Teo</a>, Founder of Beyond Horizons by Bethel Chambers LLC, who is qualified as a solicitor in England and Wales and as an advocate and solicitor in Singapore. Meet <a className={ac} href="/team">the team</a> behind your retainer, including <a className={ac} href="/team/sonia-motwani">Sonia Motwani</a>.</>,
    ],
  },
  faqs: {
    heading: "FAQ",
    items: [
      {
        question: "When should we employ someone?",
        answer: "When you need daily physical presence in the business, or when legal volume truly fills a full-time seat.",
      },
      {
        question: "When is an agency placement enough?",
        answer:
          "When the work is already scoped and you need capacity to execute — and you accept that the agency model is not a law practice offering legal advice with the duties in the table above.",
      },
      {
        question: "How much does a fractional general counsel cost in Singapore?",
        answer: "At Beyond Horizons by Bethel Chambers LLC, fractional GC plans start from SGD 4,000 per month to access Chambers (2026) and Legal 500 (2023) ranked counsel, Hui Ling Teo, with more than a decade of experience, including at international law firms. Plans include unlimited review of day-to-day documentation, one at a time, within the scope of your engagement letter, with a typical 3 to 5 business day substantive response timeline. Faster responses, or larger, more complex or high-stakes work, can be accessed at surge or upsize pricing. Because we already hold the context and understanding of your business, you do not need to pay twice for that understanding. Your lead counsel is Hui Ling Teo, Founder of Beyond Horizons by Bethel Chambers LLC. The scope and fees for your plan are set in the engagement letter before work begins.",
      },
      {
        question: "Do you compare your fees with other law firms?",
        answer: "No. We do not compare our fees with those of any other law practice.",
      },
      {
        question: "Do you guarantee outcomes?",
        answer: "No. We commit to named counsel, a deputy, and a typical 3 to 5 business day substantive response timeline.",
      },
      { question: "When does fractional GC fit better than hiring in-house counsel in Singapore?", answer: "Hire in-house when you need daily physical presence or legal volume that truly fills a full-time seat. Choose a fractional GC when a Singapore scale-up needs senior legal judgment and continuity without a permanent headcount — commercial contracts, employment coordination, and vendor/AI policies as scoped. Beyond Horizons by Bethel Chambers LLC scopes ongoing support in a proposal-based engagement letter." },
      { question: "How does fractional GC differ from a full-service law firm retainer for day-to-day work?", answer: "Fractional GC emphasises named senior continuity for day-to-day legal judgment. Full-service firms remain appropriate when a large bench is required for specialised or multi-office matters. Beyond Horizons by Bethel Chambers LLC collaborates rather than claiming superiority or publishing fee comparisons." },
      { question: "What does a scoped fractional GC engagement with Beyond Horizons typically cover?", answer: "Typically ongoing legal judgment with a named lead (and deputy where scoped): commercial contracts, employment coordination, vendor and AI policy support, and matter triage — not a full-time employment contract and not an agency placement of hands. Coverage is proposal-based, with plans starting from SGD 4,000 per month; we do not guarantee outcomes." },
      {"question": "What is a fractional general counsel in Singapore?", "answer": "A fractional general counsel is a senior lawyer retained on a scoped, part-time basis instead of employed full-time. At Beyond Horizons by Bethel Chambers LLC it is a retainer for ongoing legal judgment, with a named lead counsel and a named deputy — not a full-time employment contract and not an agency placement of hands."},
      {"question": "Who is fractional legal counsel for in Singapore?", "answer": "Fractional legal counsel is often chosen by growth-stage companies in Singapore, usually with 10 employees or more, that need senior legal judgment regularly across matters such as commercial contracts, employment, board, privacy and AI vendor terms, but whose legal volume does not fill a full-time seat. We have supported businesses under this arrangement in sectors from energy and sustainability to consumer-facing physiotherapy and therapeutics, blockchain and financial services. If you need daily physical presence, employ in-house counsel; that option is compared on this page."},
      {"question": "How does a fractional GC engagement with Beyond Horizons start?", "answer": "Write to HL@beyondhorizons.sg. We do not bill for the first conversation. We scope the work with you, then fix scope and fees in an engagement letter before work begins; we work to a typical 3 to 5 business day substantive response timeline. You work with a named lead counsel and a named deputy."},
      {"question": "Is fractional general counsel the same as part-time or outsourced general counsel?", "answer": "The terms are often used for the same idea: senior general counsel support obtained part-time, from outside the company, rather than through a full-time hire. At Beyond Horizons by Bethel Chambers LLC the model is a scoped retainer with a regulated Singapore law practice — a named lead and deputy, conflicts checks, and scope and fees in an engagement letter. It is not an employment-agency placement."},
      {"question": "How is a fractional GC different from interim general counsel cover?", "answer": "Interim cover usually fills a defined vacancy, leave or transition for a fixed period, often through a recruitment or placement business. A fractional general counsel retainer is ongoing, part-time senior support for an organisation that has no full-time general counsel seat to fill. If you need someone in the seat daily for a defined period, employ or take an interim placement; if you need continuing judgment without a permanent headcount, a fractional retainer is the model described on this page."},
      { question: "What is fractional in-house legal counsel?", answer: "Fractional in-house legal counsel is another name for the same model: a senior lawyer who works as your in-house legal function on a scoped, part-time basis, without being employed full-time. At Beyond Horizons by Bethel Chambers LLC it is a retainer with a regulated Singapore law practice, with a named lead counsel and a named deputy, and scope and fees fixed in an engagement letter." },
      { question: "Can a fractional general counsel support fundraising, debt, joint ventures and acquisitions in the same year?", answer: "Yes, as scoped. A fractional general counsel can hold the company's side across equity rounds, debt facilities, joint venture and shareholder agreements and acquisitions, keep positions consistent between them, and prepare board decisions. Equity rounds, joint ventures, acquisitions and debt raises can sit within the retainer; where a transaction is complex and high value, it is scoped as a separate matter with its own engagement terms. Where a matter needs specialist or foreign-law input, we say so and coordinate it." },
      { question: "Is fractional general counsel suitable for an energy company in Singapore?", answer: "It can be, where the company needs senior legal judgment regularly but not a full-time general counsel. Beyond Horizons by Bethel Chambers LLC acts for waste-to-energy, alternative fuels and solar energy businesses, including on power purchase agreements (PPAs), virtual PPAs, hedging and related funding. A growing energy company may run that work alongside joint ventures, equity raises and debt facilities — the kind of multi-workstream load a fractional retainer is designed for." },
      { question: "Do you advise on the laws of the countries where our projects are located?", answer: "We advise on Singapore law. English law input is given through Hui Ling Teo, who is qualified as a solicitor in England and Wales and as an advocate and solicitor in Singapore. Advice on other laws is obtained from and coordinated with local counsel, so you keep one point of contact." },
      { question: "Does a fractional general counsel replace deal counsel on a large transaction?", answer: "Not necessarily. On a large or multi-jurisdiction transaction, a fractional general counsel can act as the company's lead legal contact: scoping the work, instructing and coordinating specialist or foreign counsel, and keeping the board informed. Which work we do ourselves and which is coordinated is agreed in the engagement letter." },
      { question: "Are communications with a fractional general counsel privileged?", answer: "When you retain Beyond Horizons by Bethel Chambers LLC, you retain a regulated Singapore law corporation, and solicitor–client communications fall within the privilege framework under section 128 of the Evidence Act 1893. Whether privilege applies to a particular communication depends on its facts." },
      {"question": "Can a fractional general counsel review our AI policies and AI vendor contracts?", "answer": "Yes, within the agreed scope. A retainer can include reviewing AI vendor terms. Writing a company's AI governance policies, or evaluating how the company already uses AI and the controls around it, can be scoped as separate pieces of work. See our AI governance page.", content: <>Yes, within the agreed scope. A retainer can include reviewing AI vendor terms. Writing a company's AI governance policies, or evaluating how the company already uses AI and the controls around it, can be scoped as separate pieces of work. See our <a href="/singapore-ai-governance" className={ac}>AI governance page</a>.</>},
      {"question": "Can a fractional general counsel support an aviation or robotics company?", "answer": "Yes. A retainer can cover the day-to-day contracts, employment and board work of an aviation or robotics business. Asset-specific work, such as an aircraft lease, a robot fleet financing or a cross-border equipment transfer, is scoped separately in the engagement letter.", content: <>Yes. A retainer can cover the day-to-day contracts, employment and board work of an aviation or robotics business. Asset-specific work, such as an <a href="/industry/aviation" className={ac}>aircraft lease</a>, a <a href="/singapore-robotics-law" className={ac}>robot fleet financing</a> or a cross-border equipment transfer, is scoped separately in the engagement letter.</>},
    ],
  },
  cta: {
    heading: "Next step",
    description: "Schedule a consultation, or email HL@beyondhorizons.sg.",
    note:
      "Related tools (optional): employers building Workplace Fairness Act readiness or reviewing the first published Employment Claims Tribunals decision can use workplacefairness.beyondhorizons.sg — a separate microsite, not a substitute for this page. Beyond Horizons is the practice of Bethel Chambers LLC, which is licensed and regulated by the Legal Services Regulatory Authority (LSRA), a department under the Singapore Ministry of Law. This page is general information only. It is not legal advice and does not create a solicitor–client relationship.",
  },
  relatedPages: [
    { title: "Singapore Employment Law", slug: "/singapore-employment-law" },
    { title: "AI Code Counsel", slug: "ai-code-counsel" },
    { title: "Why specialist counsel", slug: "/why-specialist-counsel" },
  ],
  relatedExternal: [{ label: "workplacefairness.beyondhorizons.sg", href: "https://workplacefairness.beyondhorizons.sg" }],
};

const FractionalGCPage = () => <IndustryPageLayout data={data} />;
export default FractionalGCPage;
