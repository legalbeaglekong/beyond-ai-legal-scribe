import IndustryPageLayout, { type IndustryPageData } from "@/components/IndustryPageLayout";
import { AVIATION_RANKINGS, AVIATION_RANKINGS_NOTES, IFFW_URL, FUEL_VIDEO_URL } from "@/config/business";
import { Scale, Clock, Laptop, Gavel } from "lucide-react";

const CHAMBERS_APAC_PROFILE_URL = "https://chambers.com/lawyer/hui-ling-teo-asia-pacific-8:25705527";

const AVIATION_PUBLICATIONS = (
  <div className="mt-5">
    <h3 className="text-sm font-serif font-bold text-foreground mb-2">Publications</h3>
    <ul className="space-y-1 text-xs text-muted-foreground">
      <li>Hui Ling Teo wrote <a href="https://www.reedsmith.com/articles/esg-issues-for-aerospace-defense-companies/" target="_blank" rel="noopener" className="text-accent hover:underline">“ESG Issues for Aerospace &amp; Defense Companies”</a>, an overview and checklist for Bloomberg Law’s ESG Toolkits, published in July 2023 while she was at Reed Smith.</li>
    </ul>
  </div>
);

export const data: IndustryPageData = {
  slug: "aviation",
  legalService: {"description": "Aviation finance, aircraft finance and leasing counsel in Singapore for lessors, airlines and financiers — English-law leases and financings, Cape Town and IDERA coordination with local counsel, aircraft recoveries and incomplete documentary packages. Beyond Horizons by Bethel Chambers LLC.", "serviceType": "Aviation finance and leasing counsel", "employee": {"@type": "Person", "name": "Hui Ling Teo", "jobTitle": "Founder", "description": "Founder of Beyond Horizons by Bethel Chambers LLC; qualified as a solicitor in England and Wales and as an advocate and solicitor in Singapore."}},
  heroSubhead: "Counsel for lessors, airlines and financiers on aviation finance, aircraft finance and leasing — English-law leases and financings negotiated in APAC hours, with recoveries and incomplete-document support when files turn hard.",
  updated: "Last updated: October 2026",
  seo: {
    title: "Aviation Lawyer & Finance Counsel Singapore | Repossession, Leasing & Docs — Beyond Horizons",
    description:
      "Aviation finance lawyer Singapore — English-law leases, aircraft recoveries, insolvency coordination, incomplete aircraft/engine docs, MRO, business jet & helicopter S&P. Beyond Horizons by Bethel Chambers LLC. Soft path to talk.",
  },
  hero: {
    entity: "Beyond Horizons by Bethel Chambers LLC",
    title: "Aviation finance and leasing counsel in Singapore",
    emailCta: "HL@beyondhorizons.sg",
    ctaLine: (<>Instruct aviation finance counsel: email <a href="mailto:HL@beyondhorizons.sg" className="underline">HL@beyondhorizons.sg</a> with the asset type, each party's role and your target closing date, or schedule a consultation.</>),
    jumpLinks: [
      { label: "View work menu", href: "#work-menu" },
      { label: "Leasing", href: "#work-menu" },
      { label: "Recoveries", href: "#work-menu" },
      { label: "Docs", href: "#work-menu" },
      { label: "Engines", href: "#work-menu" },
      { label: "Financings", href: "#work-menu" },
      { label: "Bizjet", href: "#work-menu" },
    ],
    subtitle:
      "Most aviation finance and leasing matters we see are governed by English law. Beyond Horizons by Bethel Chambers LLC is a cross-border aviation finance desk with a physical presence in Singapore, a Founder qualified as a solicitor in England and Wales and as an advocate and solicitor in Singapore, Chambers-ranked aviation finance expertise, and coverage across time zones so counterparties are not waiting on a single close-of-play for every turn of the mark-up. We are comfortable across global matters, with specific expertise in developing markets. The same desk sits with lessors, airlines, financiers and private capital when files turn hard — distressed scenarios, aircraft recoveries / asset recovery, incomplete aircraft, engine or documentary packages, and insolvency-adjacent coordination — experience spanning aviation finance, leasing, restructuring and asset recovery.",
    badges: [
      "Hui Ling Teo is ranked Band 3 for Aviation: Finance in Singapore by Chambers Asia-Pacific 2026.",
      "Hui Ling Teo \u2014 Legal 500 Next Generation Partner, 2023",
    ],
  },
  intro: {
    paragraphs: [
      "We use technology confidently in how we draft, version and track documents — and we stress-test key documents with our disputes and arbitration team before they have to survive a default, redelivery fight or enforcement path.",
      "Where a matter needs advice on other laws, we coordinate with foreign counsel.",
    ],
    note:
      "Out of scope on this page: we are a law practice. We do not underwrite securities, lend as a bank or private-credit fund, broker aircraft, or act as a CAMO/MRO. We do not compare our fees with those of any other law practice.",
  },
  beforeOverview: (<><section className="section-padding bg-background"><div className="max-w-3xl mx-auto container-padding space-y-4"><h2 className="text-2xl md:text-3xl font-serif font-bold">What does an aviation finance lawyer in Singapore do?</h2><p>An aviation finance lawyer documents and negotiates the contracts that move aircraft and engines between owners, operators and financiers: operating and finance leases, sale-and-leasebacks, loan and security documents, transfers and novations, and the Cape Town Convention filings that sit alongside them. At Beyond Horizons by Bethel Chambers LLC, that work is led from Singapore by Hui Ling Teo, Founder, who is qualified as a solicitor in England and Wales and as an advocate and solicitor in Singapore. Most of the leases and financings we see are governed by English law; where another country's law applies, we coordinate with local counsel. Hui Ling Teo is ranked Band 3 for Aviation: Finance in Singapore by Chambers Asia-Pacific 2026.</p><h3 className="text-xl md:text-2xl font-serif font-bold">Who instructs us</h3><ul className="list-disc pl-6 space-y-2"><li>Lessors and lessor platforms placing, transferring or recovering aircraft and engines</li><li>Airlines and operators taking aircraft on lease, refinancing or returning them</li><li>Banks, funds and other lenders financing aircraft, engines and portfolios</li><li>Buyers and owners of business jets and helicopters</li></ul><p>To scope a lease, financing or recovery, email <a href="mailto:HL@beyondhorizons.sg" className="text-primary underline underline-offset-2">HL@beyondhorizons.sg</a>.</p><h2 className="text-2xl md:text-3xl font-serif font-bold">When should you instruct aviation finance counsel?</h2><ul className="list-disc pl-6 space-y-2"><li>You are a lessor, a lessee airline or operator, or a financier, and an English-law operating lease, finance lease or sale-and-leaseback is being negotiated.</li><li>A facility, security package or private credit document against aircraft, engines or lease receivables needs review before signing.</li><li>A portfolio purchase, engine trade or lease novation needs consents, conditions precedent and a closing agenda across several jurisdictions.</li><li>Cape Town, International Registry or IDERA steps sit on the closing checklist and need coordinating with local registration counsel.</li><li>A lessee is in default or distress, or aircraft, engine or records packages are incomplete.</li></ul><h2 className="text-2xl md:text-3xl font-serif font-bold">What to expect when you instruct us</h2><p>We do the traditional work of aviation finance counsel: we redline the documents, negotiate them and coordinate signing and closing. Alongside that, we share general updates on legal and market developments relevant to your documents; where a development turns on another country's law, we coordinate with local counsel. Your lead counsel is Hui Ling Teo, Founder of Beyond Horizons by Bethel Chambers LLC, who is qualified as a solicitor in England and Wales and as an advocate and solicitor in Singapore. Hui Ling Teo is ranked Band 3 for Aviation: Finance in Singapore by Chambers Asia-Pacific 2026. To scope a lease, financing or recovery, email <a href="mailto:HL@beyondhorizons.sg" className="text-primary underline">HL@beyondhorizons.sg</a>.</p><h2 className="text-2xl md:text-3xl font-serif font-bold">Aviation finance and leasing in Singapore</h2><p>Beyond Horizons by Bethel Chambers LLC acts for lessors, lessee airlines and operators, and financiers taking an interest in a lease, from Singapore. Most aviation finance and leasing matters we see are governed by English law, and operating leases, finance leases, sale-and-purchase, facility and security packages in this sector are commonly English-law governed. We advise on those documents through Hui Ling Teo, who is qualified as a solicitor in England and Wales and as an advocate and solicitor in Singapore, and we coordinate Singapore-law pieces — security, filings, opinions, parties, or regulatory interfaces — when the deal needs them, without pretending every aviation file is Singapore-law only. Counterparties, lessors, airlines and financiers running APAC processes need turns in Asian working hours, and the desk works in those hours. The lease work itself covers English-law operating and finance lease drafting and negotiation, delivery and redelivery conditions, maintenance reserves and supplemental rent, events of default and remedies, quiet enjoyment, assignment and novation, and insurance and indemnities. Where the asset and parties require it, Cape Town, International Registry and IDERA steps sit inside the deal, coordinated with local counsel for non-English registration states. That leasing core sits next to the desk's recoveries and incomplete-document work: the same desk works with the parties when files turn hard, including distressed scenarios, aircraft recoveries, and incomplete aircraft, engine or documentary packages. We are a law practice: we do not underwrite securities, lend as a bank or private-credit fund, broker aircraft, or act as a CAMO or MRO. For the Singapore regulatory map that can sit beside a transaction, see <a className={"text-primary underline"} href="/singapore-aviation-law">Singapore aviation regulation (CAAS)</a>.</p></div></section><section className="section-padding bg-background"><div className="max-w-3xl mx-auto container-padding space-y-4"><h2 className="text-2xl md:text-3xl font-serif font-bold">Operating leases and finance leases</h2><p>The parties are the lessor, the lessee airline or operator, or a financier taking an interest in the lease. The work covers English-law operating and finance lease drafting and negotiation, delivery and redelivery conditions, maintenance reserves and supplemental rent, events of default and remedies, quiet enjoyment, assignment and novation, insurance and indemnities, and Cape Town, International Registry and IDERA steps where the asset and parties require them.</p><p>Parties: lessor, lessee airline/operator, or financier taking an interest in the lease.</p><ul><li>English-law operating / finance lease drafting and negotiation</li><li>Delivery and redelivery conditions; maintenance reserves / supplemental rent</li><li>Events of default and remedies; quiet enjoyment; assignment and novation</li><li>Insurance and indemnities</li><li>Cape Town / International Registry / IDERA where the asset and parties require it</li><li>Coordination of local counsel for non-English registration states</li></ul></div></section></>),
  overview: {
    heading: "How we work",
    services: [
      {
        icon: Scale,
        title: "English law as the default document law",
        description:
          "Operating leases, finance leases, sale-and-purchase, facility and security packages in this sector are commonly English-law governed. We advise on those documents through Hui Ling Teo, who is qualified as a solicitor in England and Wales and as an advocate and solicitor in Singapore, and coordinate Singapore-law pieces (security, filings, opinions, parties, or regulatory interfaces) when the deal needs them — without pretending every aviation file is “Singapore-law only.”",
      },
      {
        icon: Clock,
        title: "Time-zone coverage",
        description:
          "Counterparties, lessors, airlines and financiers running APAC processes need turns in Asian working hours. We staff for that coverage with Chambers-ranked aviation finance expertise — so negotiation does not stall overnight waiting for a European desk.",
      },
      {
        icon: Laptop,
        title: "Technology",
        description:
          "We use digital workflows for drafting, commentary, version control and closing checklists so multi-asset and multi-party mark-ups stay controlled.",
      },
      {
        icon: Gavel,
        title: "Disputes and arbitration stress-test",
        description:
          "Before a lease, SPA, facility or security package is treated as “done,” we can run it past our disputes and arbitration colleagues: default and termination paths, redelivery and condition disputes, notice mechanics, governing law / forum clauses, and enforcement assumptions. The point is not to litigate the deal at signing — it is to reduce the chance the paper fails when it is tested.",
      },
    ],
  },
  spotlight: {
    heading: "Work menu",
    id: "work-menu",
    cards: [
      {
        title: "2. Subleasing",
        description: "Parties: head lessor, sublessor, sublessee.",
        bullets: [
          "Sublease consistent with head-lease consents",
          "Consent packages to head lessor and financiers",
          "Alignment of return conditions, maintenance and insurance across layers",
          "Termination cascade if the head lease ends",
          "Novation/assignment on fleet moves or restructuring",
        ],
      },
      {
        title: "3. Engine trading",
        description: "Parties: engine lessor/trader, airline, financiers taking security over engines.",
        bullets: [
          "Engine sale and purchase agreements; engine lease / interchange terms where used",
          "Title transfer and life-limited-part risk allocation in the documents",
          "Security over engines; Cape Town treatment of engines as aircraft objects where applicable",
          "Lien/release mechanics in the paper",
          "Cross-border documentary conditions with local counsel as needed",
        ],
      },
      {
        title: "4. Portfolio purchase",
        description: "Parties: buyer, seller, existing lessees, existing financiers.",
        bullets: [
          "Portfolio SPA (aircraft and/or engines); lease novation/assignment packages per asset",
          "Due diligence issue lists on lease files, consents, defaults and return exposure",
          "Conditions precedent by asset and for the portfolio",
          "Transition / POA mechanics for registrations; Cape Town discharges and new registrations",
          "Multi-jurisdiction closing agenda with foreign counsel",
        ],
      },
      {
        title: "5. Bank financing",
        description: "Parties: borrower, arranging/agent bank, security trustee, export credit where present.",
        bullets: [
          "Facility agreements and side letters",
          "Security packages (mortgages/charges, lease and insurance assignments, account charges)",
          "CP and drawdown mechanics; intercreditor / priority arrangements",
          "Amendments, waivers and consents",
          "Enforcement pathway language coordinated with Cape Town and local registration counsel",
          "Limit: we advise on documents and security — we do not provide the loan.",
        ],
      },
      {
        title: "6. Private credit",
        description: "Parties: private credit lender/fund, borrower, servicer where relevant.",
        bullets: [
          "Bilateral or club facility documents against aviation assets or lease cashflows",
          "Security and assignments over aircraft, engines, leases and receivables",
          "Reserve / covenant packages as negotiated",
          "Workout amendments (deferrals, substitution)",
          "Intercreditor issues beside bank debt or lessor equity",
          "Limit: we are counsel on the documents — we are not the credit provider.",
        ],
      },
      {
        title: "7. Listed securities (aviation capital markets documentation)",
        description: "Parties: issuer, arrangers, trustees, investors’ counsel (we act for one side only).",
        bullets: [
          "Counsel on transaction documents for aviation-related listed or offered instruments (for example ABS / note structures involving aircraft or lease receivables) — document negotiation and opinions coordination",
          "Review of disclosure sections describing assets, leases and security",
          "Trust / security trustee interface documents where English- or Singapore-law packages are used",
          "Limits: we do not underwrite, place or sell securities; we do not act as listing sponsor, arranger or trustee.",
        ],
      },
      {
        title: "8. Aircraft recoveries, repossession-adjacent counsel & aviation insolvency",
        description: "Parties: lessor, financier/security trustee, airline/operator in distress, insolvency office-holder (as applicable).",
        bullets: [
          "Documentary and coordination counsel around default, termination, possession and recovery pathways",
          "Cape Town / IDERA interface with local registration counsel",
          "Notices and condition/redelivery disputes",
          "Workout amendments, deferrals and substitution; insolvency-adjacent structuring of claims and security",
          "Complex financings and distressed scenarios, including aircraft recoveries — developing markets and other challenging cross-border markets as relevant to the facts",
          "Limits: we do not guarantee possession outcomes; enforcement steps and local court/registry process sit with instructed local counsel and the facts of the case.",
        ],
      },
      {
        title: "9. Incomplete aircraft, engines & documentary packages",
        description: "Parties: buyer/seller, lessor/lessee, MRO/CAMO counterparties (as commercial parties — we are not the MRO), financiers.",
        bullets: [
          "Issue lists on missing/incomplete technical and title documents",
          "Conditions precedent and escrow mechanics",
          "Ferry / delivery risk allocation",
          "Life-limited-part and records risk in SPAs and leases",
          "Coordination when records, export CofA, or engine traceability are incomplete",
        ],
      },
      {
        title: "10. MRO, hangar construction & aerospace infrastructure",
        description: "Parties: MRO buyers/sellers, aerospace JV partners, landlords/developers, financiers.",
        bullets: [
          "MRO acquisition / disposal documentation",
          "Aerospace manufacturing JV / technology licensing interfaces",
          "Hangar construction and leasehold packages",
          "Airport-adjacent / Seletar-style structuring coordinated with Singapore regulatory pieces as needed",
          "Limits: counsel only — not the CAMO/MRO operator.",
        ],
      },
      {
        title: "11. Landing gear / equipment finance & leasing",
        description: "Parties: lessors/traders, airlines, equipment financiers.",
        bullets: [
          "Equipment and landing-gear lease / SPA documentation",
          "Security and priority language",
          "Interaction with airframe/engine packages",
          "Cross-border documentary conditions",
        ],
      },
      {
        title: "12. Airports, vertiports & advanced air mobility interfaces",
        description: "Parties: developers, operators, investors.",
        bullets: [
          "Documentary and commercial interfaces for airport/vertiport development and AAM commercialisation",
          "Deeper AAM/UAS content sits on Ascending Asia — the core of this page remains finance, leasing and recoveries",
        ],
        link: "/ascending-asia",
        linkText: "Ascending Asia",
      },
      {
        title: "13. Business jet & helicopter sale-and-purchase; co-ownership",
        description: "Parties: buyers, sellers, managers, co-owners, financiers.",
        bullets: [
          "Pre-owned business-jet SPA path (LOI → deposit → as-is/where-is delivery → manager transition — see the FAQ)",
          "Helicopter S&P documentation",
          "Co-ownership / fractional ownership document sets and exit mechanics",
        ],
      },
      {
        title: "14. Compliance structuring; SAF & future fuels",
        description: "Cross-border party and sanctions-screening interfaces in documents; Singapore regulatory coordination when the deal needs it.",
        bullets: [
          "SAF / future fuels: we advise on SAF offtake/supply and green-financing documents when they sit next to leasing and finance files",
          "International Future Fuels Week (IFFW) — iffw.sg",
          "Past role: Hui Ling Teo was Founder & Director of Governance, Asia Sustainable Aviation Fuel Association (ASAFA), Aug 2024–Apr 2025",
        ],
        link: "https://iffw.sg",
        linkText: "International Future Fuels Week (IFFW)",
      },
    ],
  },
  faqs: {
    heading: "FAQ",
    items: [
      {
        question: "Most of our leases are English law — can you act?",
        answer:
          "Yes. That is the usual pattern in this sector. We staff English-law document work and add Singapore-law or local counsel where the closing requires it.",
      },
{
        question: "How is aircraft leasing different from an aircraft loan?",
        answer:
          "At a high level (from our Aviation Finance 101 educational series): a lease is a right to use the aircraft for rent under a lease contract; a loan is debt secured against the aircraft or related cashflows. Risk, residual value, default remedies and documentation packs differ. The course uses simple analogies before moving into leasing and loan lessons — educational only, not legal or credit advice. We do not lend. For English-law lease or facility documents, Talk to us on this page.",
      },
{
        question: "What are portfolio trading, warehouse financing and PDP financing in aviation?",
        answer:
          "Educational labels only: portfolio trading is buying or selling a pool of aircraft and/or leases rather than a single asset; warehouse financing is short-term funding while assets are aggregated before a take-out; PDP (pre-delivery payment) financing supports manufacturer progress payments before delivery. Aviation Finance 101 introduces these themes for orientation. Structuring a live portfolio, warehouse or PDP deal is counsel work — Schedule consultation; we document and negotiate, we do not provide the capital.",
      },
{
        question: "Can you help if aircraft, engine or records packages are incomplete?",
        answer: "Yes — issue lists, CP/escrow mechanics and risk allocation in the paper. Scope starts with a short conversation.",
      },
{"question": "What is aviation finance leasing, and how is an operating lease different from a finance lease?", "answer": "Aviation finance leasing on this page covers aircraft operating leases and finance leases. In both, the parties are the lessor, the lessee airline or operator, or a financier taking an interest in the lease. The documents deal with delivery and redelivery conditions, maintenance reserves or supplemental rent, events of default and remedies, quiet enjoyment, assignment and novation, and insurance and indemnities. Which lease form is used, and how its terms are set, is in the signed documents for the deal."},
{"question": "What does a sale-and-leaseback involve for an airline and a lessor?", "answer": "In outline, an airline sells an aircraft and leases it back, so the sale documents and the lease documents have to be read together. On this desk that work sits with lease drafting and negotiation, delivery and redelivery conditions, assignment and novation, and, where the asset and parties require it, Cape Town, International Registry and IDERA steps. The signed documents set the terms for the particular aircraft."},
{"question": "What should delivery and redelivery conditions cover in an aircraft lease?", "answer": "The lease itself should set the delivery and redelivery conditions, maintenance reserves or supplemental rent, insurance and indemnities, and what happens on an event of default. Cape Town, International Registry and IDERA steps also sit in the documents where the asset and parties require them. Those points are in the signed lease for the aircraft, not in a standard form that fits every deal."},
{"question": "When do Cape Town, the International Registry and an IDERA matter in a lease?", "answer": "Where the asset and parties require it, Cape Town, International Registry and IDERA steps sit inside the lease deal, coordinated with local counsel for non-English registration states. The detail for a particular aircraft depends on the documents and the registration position, so it is scoped on the file. The Singapore regulatory side of Cape Town is covered on our Singapore aviation law page."},
      {
        question: "What do you mean by time-zone coverage?",
        answer:
          "APAC-facing negotiation and turnaround with Chambers-ranked aviation finance counsel available in Asian working hours — not a model that only moves when a European office opens.",
      },
      {
        question: "How do disputes and arbitration get involved on a financing or lease?",
        answer:
          "On request (and where scoped), key documents are reviewed with our disputes and arbitration team for default, termination, redelivery, notice and enforcement resilience — before the paper is locked.",
      },
      {
        question: "Do you lend or underwrite?",
        answer: "No. We are counsel. Banks, funds and arrangers provide capital; we document and negotiate.",
      },
      {
        question: "Do you compare fees with other law firms?",
        answer:
          "No. Fees are set in the engagement letter. We do not compare our fees with those of any other law practice.",
      },
      {
        question: "How are matters priced?",
        answer: "Scoped proposals — fixed or capped fees where the work allows. Contact us for a proposal.",
      },
      {
        question: "What stages does a pre-owned business jet sale usually follow?",
        answer:
          "In educational terms, a pre-owned business-jet purchase often moves from a letter of intent, through deposit and pre-purchase inspection / technical acceptance, into the sale and purchase agreement, then title and escrow closing, and finally the third-party manager transition and registry / tax delivery steps. The exact sequence depends on the parties and the aircraft. This is a general framework from our Business Jet SPA 101 primer — not legal advice on your deal. If an LOI or SPA is live, Schedule consultation or talk to us on this page.",
      },
      {
        question: "What should I watch in a business jet letter of intent?",
        answer:
          "Educationally, an LOI is often described as largely non-binding — except for the pieces the parties intentionally make binding (commonly exclusivity, confidentiality, deposit handling, or governing-law stubs). Those “except where it counts” lines are where negotiation discipline matters early. Our Jet SPA 101 course walks through that map in plain English. For a live LOI, schedule consultation — we do not treat a course as a substitute for counsel on your document.",
      },
      {
        question: "When does a jet purchase deposit typically “go hard”?",
        answer:
          "In many SPA structures taught in our educational primer, the deposit starts refundable (or held on stated conditions) and later becomes non-refundable — “goes hard” — once defined milestones are met (for example after technical acceptance or at a stated date). The trigger is whatever the signed paper says; there is no single universal rule. This page and the free course are educational only. If your deposit clause is under negotiation, Talk to us / Schedule consultation.",
      },
      {
        question: "Why does “as-is / where-is” delivery matter on a business jet SPA?",
        answer:
          "Educational framing: as-is / where-is language shifts condition risk toward the buyer after the agreed inspection window, often with an English-law overlay on how representations, warranties and remedies interact with that shift. Engine and APU programmes, back-to-birth records and technical acceptance sit beside that clause in a typical diligence pack. None of this is advice on your aircraft. For a live PPI or delivery schedule, Schedule consultation with Beyond Horizons by Bethel Chambers LLC.",
      },
      {
        question: "What is the third-party manager transition in a jet purchase?",
        answer:
          "Business jets are often run under a management agreement. On sale, the educational playbook distinguishes novating the existing manager arrangement versus terminating and putting a new manager in place — with knock-on effects for insurance, ops manuals, and who holds the keys at closing. Jet SPA 101 covers that transition as a learning module. If your purchase needs a manager novation or termination package, schedule consultation on this aviation page.",
      },
      
      
      {
        question: "What problem does the Cape Town Convention solve for aircraft financiers?",
        answer:
          "In plain educational terms, Cape Town creates a clearer international framework for interests in aircraft objects, registration of those interests, priority, and a menu of default remedies — so financiers and lessors are not left only to uneven national repossession rules. Our Cape Town & Aircraft Repossession 101 primer expands on international interests, the International Registry and priority. This answer is not legal advice on filings for your asset. Schedule consultation when Cape Town / IR steps sit on your closing checklist.",
      },
      {
        question: "What is an IDERA under the Cape Town Convention?",
        answer:
          "An IDERA (Irrevocable De-Registration and Export Request Authorisation) is an educational shorthand for an authorisation that can support deregistration and export of an aircraft as part of enforcement or remedy planning under the Cape Town framework, where the state declarations and facts allow it. Detail and edge cases belong in a matter-specific engagement — not in a website FAQ. Free course for orientation; for a live repossession, deregistration or export path, Talk to us / Schedule consultation.",
      },
      {
        question: "Do you handle aircraft repossession?",
        answer: "We advise on the documentary, Cape Town/IDERA and coordination path around aircraft recoveries / asset recovery and distressed scenarios. Local enforcement steps depend on jurisdiction and facts; we coordinate rather than promise possession.",
      },
      
      {
        question: "Business jet and helicopter deals?",
        answer: "Yes — business-jet S&P path is covered in the FAQ and work menu; helicopter S&P and co-ownership documentation are in the work menu. Schedule a consultation to scope.",
      },
      {
        question: "Still deciding between a course and counsel?",
        answer:
          "Free educational primers are on /courses. For a live lease, SPA, financing or Cape Town step: Schedule consultation · HL@beyondhorizons.sg",
      },
      {"question": "What does aviation finance counsel do on a lease or financing?", "answer": "The core work is the traditional work: we redline the documents, negotiate them with the other side and coordinate signing and closing. Alongside that, we share general updates on legal and market developments relevant to the documents; where a development turns on another country's law, we coordinate with local counsel. Beyond Horizons by Bethel Chambers LLC is a law practice: we document and negotiate; we do not lend, underwrite or broker aircraft."},
      {"question": "What is attachment risk for an aircraft engine?", "answer": "Attachment risk is the risk that an engine, or another object owned separately from the airframe, is treated as part of the aircraft it is installed on, or is caught up when that aircraft is detained or seized, even though it has a separate owner. The applicable law can change as the aircraft moves between jurisdictions. Engine owners, lessors and financiers address this in their documents, with local counsel where a particular jurisdiction matters."},
      {"question": "Who works on our file?", "answer": "Your file is handled by a small team led by Hui Ling Teo, Founder of Beyond Horizons by Bethel Chambers LLC, who is qualified as a solicitor in England and Wales and as an advocate and solicitor in Singapore. We aim to keep the same people on your file from start to finish."},
      {"question": "Can you act on aviation deals outside Singapore and across time zones?", "answer": "Yes. We are cross-border counsel with a physical presence in Singapore, working across multiple time zones on global matters, including in developing markets. Where a matter needs advice on other laws, we coordinate with foreign counsel."},
      {"question": "How is the practice set up for aviation work?", "answer": "Beyond Horizons by Bethel Chambers LLC is a lean practice that uses AI-assisted digital workflows for drafting, version control and closing checklists, with all work reviewed by counsel. Fees are agreed directly with you in the engagement letter."},
      {"question": "How do I choose an aviation finance lawyer in Singapore?", "answer": "Check three things: whether the lawyer works on the law that governs your documents (for most aircraft leases and financings, English law), whether they can coordinate Singapore and other local-law steps such as Cape Town Convention filings, and who will actually work on your file. At Beyond Horizons by Bethel Chambers LLC, files are led by Hui Ling Teo, Founder, who is qualified as a solicitor in England and Wales and as an advocate and solicitor in Singapore. Hui Ling Teo is ranked Band 3 for Aviation: Finance in Singapore by Chambers Asia-Pacific 2026."},
      {"question": "Do you act for lessors, airlines and lenders?", "answer": "Yes. We act for lessors, airlines and operators, and banks, funds and other lenders on leases, financings, transfers and recoveries, subject to conflict checks. We are a law practice: we do not lend, underwrite or broker aircraft."},
      {"question": "What does a lessor need from counsel when an airline lessee defaults?", "answer": "Usually three things: a reading of the lease's events of default, notice and remedy provisions; a plan for the aircraft, engines and records, including where they are and which registries and authorities are involved; and coordination with local counsel in the state of registration and wherever the aircraft is located, because enforcement steps depend on that country's law and the facts. Where the Cape Town Convention applies, an Irrevocable De-registration and Export Request Authorisation (IDERA) and International Registry filings may shape the options. Beyond Horizons by Bethel Chambers LLC advises lessors on the English-law lease documents and coordinates the cross-border work with local counsel; we do not promise repossession or any particular outcome. To discuss a default, email HL@beyondhorizons.sg with the names of the lessee and the other parties, the asset details and your timing, so that we can run a conflict check before you send the lease or any notices.", content: <>Usually three things: a reading of the lease's events of default, notice and remedy provisions; a plan for the aircraft, engines and records, including where they are and which registries and authorities are involved; and coordination with local counsel in the state of registration and wherever the aircraft is located, because enforcement steps depend on that country's law and the facts. Where the Cape Town Convention applies, an Irrevocable De-registration and Export Request Authorisation (IDERA) and International Registry filings may shape the options. Beyond Horizons by Bethel Chambers LLC advises lessors on the English-law lease documents and coordinates the cross-border work with local counsel; we do not promise repossession or any particular outcome. To discuss a default, email <a href="mailto:HL@beyondhorizons.sg" className="text-primary underline">HL@beyondhorizons.sg</a> with the names of the lessee and the other parties, the asset details and your timing, so that we can run a conflict check before you send the lease or any notices.</>},
      {"question": "What does a lender's counsel review in an aircraft or engine financing?", "answer": "Typically the facility agreement; the security package, such as a mortgage or security assignment over the aircraft or engines and an assignment of lease rights and insurances; the lessee's acknowledgement and quiet enjoyment terms where the asset is on lease; the conditions precedent; and the registration steps, including Cape Town Convention filings where they apply. Many of these documents are governed by English law; security over an asset registered in another country also needs advice on that country's law, which we coordinate with local counsel. Beyond Horizons by Bethel Chambers LLC can act for banks, funds and other lenders, subject to conflict checks; we do not lend. To scope a financing, email HL@beyondhorizons.sg with the names of the parties and the asset type, so that we can run a conflict check first.", content: <>Typically the facility agreement; the security package, such as a mortgage or security assignment over the aircraft or engines and an assignment of lease rights and insurances; the lessee's acknowledgement and quiet enjoyment terms where the asset is on lease; the conditions precedent; and the registration steps, including Cape Town Convention filings where they apply. Many of these documents are governed by English law; security over an asset registered in another country also needs advice on that country's law, which we coordinate with local counsel. Beyond Horizons by Bethel Chambers LLC can act for banks, funds and other lenders, subject to conflict checks; we do not lend. To scope a financing, email <a href="mailto:HL@beyondhorizons.sg" className="text-primary underline">HL@beyondhorizons.sg</a> with the names of the parties and the asset type, so that we can run a conflict check first.</>},
      {"question": "Does the same approach apply to robots and other high-value equipment?", "answer": "Yes. Robot leasing and robotics financing raise the same questions as aircraft: who owns the asset, who maintains it, what happens on default or at return, and how it moves across borders. We apply the same asset-finance and leasing approach to robots. The Chambers ranking mentioned on this page relates to Aviation: Finance only."},
    ],
  },
  cta: {
    beforeHeading: <div className="space-y-4 mb-10"><h3 className="text-xl font-serif text-primary-foreground">Singapore regulatory questions?</h3><p className="text-primary-foreground">For CAAS approvals, private aviation regulatory compliance and charter operator KYC in Singapore, see our <a href="/singapore-aviation-law" className="underline">Singapore aviation law and regulation guide</a>.</p><p className="text-primary-foreground">The same asset-finance and leasing approach applies to robots and other high-value equipment that moves across borders. See <a href="/singapore-robotics-law" className="text-primary underline underline-offset-2">robot leasing, financing and import/export counsel</a>.</p></div>,
    heading: "Next step",
    description:
      <>Tell us which line items you need (for example: English-law operating lease + engine SPA + Cape Town filings + disputes stress-test on default clauses + recovery pathway review). Email <a href="mailto:HL@beyondhorizons.sg" className="underline">HL@beyondhorizons.sg</a> with the asset type, each party's role and your target closing date.</>,
    note:
      "Beyond Horizons is a specialist practice group of Bethel Chambers LLC, a Singapore law corporation. This page is general information only. It is not legal advice and does not create a solicitor–client relationship.",
  },
  relatedPages: [
    { title: "Fractional GC", slug: "fractional-gc" },
    { title: "Why specialist counsel", slug: "/why-specialist-counsel" },
    { title: "Ascending Asia", slug: "/ascending-asia" },
    { title: "Hui Ling Teo", slug: "/team/hui-ling-teo" },
    { title: "Singapore aviation law counsel", slug: "/singapore-aviation-law" },
  ],
  relatedExternal: [
    { label: "Insights", href: "https://www.insights.beyondhorizons.sg/" },
    { label: "Section 232 UAS — Ascending Asia", href: "https://ascendingasia.beyondhorizons.sg/" },
    { label: "International Future Fuels Week (IFFW)", href: IFFW_URL },
    { label: "Jet fuel hedges & lease residual risk (LinkedIn video)", href: FUEL_VIDEO_URL },
  ],
  rankings: { items: AVIATION_RANKINGS.filter((item) => !["Chambers Asia-Pacific 2026 — Band 4, Aviation: Finance — Asia-Pacific Region", "Chambers Global 2026 — Global Market Leaders, Band 3, Asset Finance", "Global Market Leader Asset Finance Lawyer (Chambers)", "ALB Law Firm to Watch 2026", "$8B+ deal value (2024 & 2025)"].includes(item)).map((item) => item === "Chambers Asia-Pacific 2026 — Band 3, Aviation: Finance — Singapore" ? "Hui Ling Teo is ranked Band 3 for Aviation: Finance in Singapore by Chambers Asia-Pacific 2026." : item === "Legal 500 Next Generation Partner" ? "Hui Ling Teo — Legal 500 Next Generation Partner, 2023" : item), notes: AVIATION_RANKINGS_NOTES, chambersUrl: CHAMBERS_APAC_PROFILE_URL, publications: AVIATION_PUBLICATIONS },
};

const AviationPage = () => <IndustryPageLayout data={data} />;
export default AviationPage;
