import IndustryPageLayout, { type IndustryPageData } from "@/components/IndustryPageLayout";
import { Scale, Clock, Laptop, Gavel } from "lucide-react";

const data: IndustryPageData = {
  slug: "aviation",
  seo: {
    title: "Aircraft Leasing & Aviation Finance Counsel | English Law · APAC Time Zone — Beyond Horizons",
    description:
      "Chambers-ranked aviation finance counsel for English-law governed leases, engines, portfolios and financings — APAC time-zone coverage, tech-enabled drafting, documents stress-tested with our disputes and arbitration team.",
  },
  hero: {
    title: "Aviation finance counsel — English-law documents, APAC time-zone coverage",
    subtitle:
      "Most aviation finance and leasing matters we see are governed by English law. Beyond Horizons (Bethel Chambers LLC) is built for that reality: dual English and Singapore law qualification on the team, Chambers-ranked aviation finance expertise, and confident coverage across APAC working hours so counterparties in Asia are not waiting on a London close-of-play for every turn of the mark-up.",
    badges: [
      "Chambers Global Band 3 — Aviation Finance",
      "Legal 500 Next Generation Partner",
      "ALB Law Firm to Watch 2026",
    ],
  },
  intro: {
    paragraphs: [
      "We use technology confidently in how we draft, version and track documents — and we stress-test key documents with our disputes and arbitration team before they have to survive a default, redelivery fight or enforcement path.",
      "Magic Circle and White Shoe collaboration is available when a matter needs that bench.",
    ],
    note:
      "Out of scope on this page: we are a law practice. We do not underwrite securities, lend as a bank or private-credit fund, broker aircraft, or act as a CAMO/MRO. We do not compare our fees with those of any other law practice.",
  },
  overview: {
    heading: "How we work",
    services: [
      {
        icon: Scale,
        title: "English law as the default document law",
        description:
          "Operating leases, finance leases, sale-and-purchase, facility and security packages in this sector are commonly English-law governed. We advise on those documents as English-qualified counsel on the team, and coordinate Singapore-law pieces (security, filings, opinions, parties, or regulatory interfaces) when the deal needs them — without pretending every aviation file is “Singapore-law only.”",
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
    cards: [
      {
        title: "1. Leasing (aircraft operating leases and finance leases)",
        description: "Parties: lessor, lessee airline/operator, or financier taking an interest in the lease.",
        bullets: [
          "English-law operating / finance lease drafting and negotiation",
          "Delivery and redelivery conditions; maintenance reserves / supplemental rent",
          "Events of default and remedies; quiet enjoyment; assignment and novation",
          "Insurance and indemnities",
          "Cape Town / International Registry / IDERA where the asset and parties require it",
          "Coordination of local counsel for non-English registration states",
        ],
      },
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
    ],
  },
  cta: {
    heading: "Next step",
    description:
      "Tell us which line items you need (for example: English-law operating lease + engine SPA + Cape Town filings + disputes stress-test on default clauses).",
    note:
      "Beyond Horizons is a specialist practice group of Bethel Chambers LLC, a Singapore law corporation. This page is general information only. It is not legal advice and does not create a solicitor–client relationship.",
  },
  relatedPages: [
    { title: "Fractional GC", slug: "fractional-gc" },
    { title: "Why specialist counsel", slug: "/why-specialist-counsel" },
  ],
  relatedExternal: [{ label: "insights.beyondhorizons.sg", href: "https://insights.beyondhorizons.sg" }],
};

const AviationPage = () => <IndustryPageLayout data={data} />;
export default AviationPage;
