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
      "$8B+ deal value (2024 & 2025)",
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
      {
        question: "What stages does a pre-owned business jet sale usually follow?",
        answer:
          "In educational terms, a pre-owned business-jet purchase often moves from a letter of intent, through deposit and pre-purchase inspection / technical acceptance, into the sale and purchase agreement, then title and escrow closing, and finally the third-party manager transition and registry / tax delivery steps. The exact sequence depends on the parties and the aircraft. This is a general framework from our Business Jet SPA 101 primer — not legal advice on your deal. If an LOI or SPA is live, Schedule consultation or talk to us on this page.",
      },
      {
        question: "What should I watch in a business jet letter of intent?",
        answer:
          "Educationally, an LOI is often described as largely non-binding — except for the pieces the parties intentionally make binding (commonly exclusivity, confidentiality, deposit handling, or governing-law stubs). Those “except where it counts” lines are where negotiation discipline matters early. Our Jet SPA 101 course walks through that map in plain English. For a live LOI, soft path: Schedule consultation — we do not treat a course as a substitute for counsel on your document.",
      },
      {
        question: "When does a jet purchase deposit typically “go hard”?",
        answer:
          "In many SPA structures taught in our educational primer, the deposit starts refundable (or held on stated conditions) and later becomes non-refundable — “goes hard” — once defined milestones are met (for example after technical acceptance or at a stated date). The trigger is whatever the signed paper says; there is no single universal rule. This page and the free course are educational only. If your deposit clause is under negotiation, Talk to us / Schedule consultation.",
      },
      {
        question: "Why does “as-is / where-is” delivery matter on a business jet SPA?",
        answer:
          "Educational framing: as-is / where-is language shifts condition risk toward the buyer after the agreed inspection window, often with an English-law overlay on how representations, warranties and remedies interact with that shift. Engine and APU programmes, back-to-birth records and technical acceptance sit beside that clause in a typical diligence pack. None of this is advice on your aircraft. For a live PPI or delivery schedule, Schedule consultation with Beyond Horizons (Bethel Chambers LLC).",
      },
      {
        question: "What is the third-party manager transition in a jet purchase?",
        answer:
          "Business jets are often run under a management agreement. On sale, the educational playbook distinguishes novating the existing manager arrangement versus terminating and putting a new manager in place — with knock-on effects for insurance, ops manuals, and who holds the keys at closing. Jet SPA 101 covers that transition as a learning module. If your purchase needs a manager novation or termination package, soft CTA: Schedule consultation on this aviation page.",
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
        question: "What problem does the Cape Town Convention solve for aircraft financiers?",
        answer:
          "In plain educational terms, Cape Town creates a clearer international framework for interests in aircraft objects, registration of those interests, priority, and a menu of default remedies — so financiers and lessors are not left only to uneven national repossession rules. Our Cape Town & Aircraft Repossession 101 primer expands on international interests, the International Registry and priority. This answer is not legal advice on filings for your asset. Soft path: Schedule consultation when Cape Town / IR steps sit on your closing checklist.",
      },
      {
        question: "What is an IDERA under the Cape Town Convention?",
        answer:
          "An IDERA (Irrevocable De-Registration and Export Request Authorisation) is an educational shorthand for an authorisation that can support deregistration and export of an aircraft as part of enforcement or remedy planning under the Cape Town framework, where the state declarations and facts allow it. Detail and edge cases belong in a matter-specific engagement — not in a website FAQ. Free course for orientation; for a live repossession, deregistration or export path, Talk to us / Schedule consultation.",
      },
      {
        question: "Still deciding between a course and counsel?",
        answer:
          "Free educational primers are on /courses. For a live lease, SPA, financing or Cape Town step: Schedule consultation · HL@beyondhorizons.sg",
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
