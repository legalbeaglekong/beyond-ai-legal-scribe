import IndustryPageLayout, { type IndustryPageData } from "@/components/IndustryPageLayout";
import { Building2, ShieldCheck, Scale, CalendarClock, Bot } from "lucide-react";

const data: IndustryPageData = {
  slug: "fractional-gc",
  seo: {
    title: "Fractional General Counsel Singapore | Legal Support Options — Beyond Horizons",
    description:
      "Need ongoing legal support? Compare employing counsel, an agency placement, or retaining Beyond Horizons (Bethel Chambers LLC). Schedule a consultation.",
  },
  hero: {
    title: "Fractional General Counsel Singapore — legal support options",
    subtitle:
      "If your organisation needs ongoing legal support — contracts, employment, board, privacy, AI vendors, restructuring, regulator-facing work — you generally choose among three models: employ a lawyer, take a placement from an agency, or retain a law practice.",
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
      "Retain Beyond Horizons (Bethel Chambers LLC)",
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
        "EU Commission competition investigations",
        "Independent external lawyers are the protected category under Akzo Nobel",
        "In-house advice not protected under Akzo Nobel",
        "No better",
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
  },
  overview: {
    heading: "What a Beyond Horizons retainer covers",
    intro:
      "Fees and scope are fixed in the engagement letter before work begins. There is no published monthly fee cap on this page — requirements vary, including complex multi-workstream retainers.",
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
          "If a matter goes to proceedings, Bethel Chambers’ disputes team can take it through",
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
    ],
    note:
      "We do not charge by the hour for retained work, and we do not bill for the first conversation. We give no guarantee of outcome. We commit to a named lead counsel, a named deputy, and a response time stated in the engagement letter.",
  },
  closing: {
    heading: "How we differ (in one paragraph)",
    paragraphs: [
      "You retain a regulated Singapore law corporation: compulsory professional indemnity, practising certificates, PCR conflict checks, a Law Society complaints route, and privilege under Evidence Act s128 for solicitor–client communications. You get a named lead and a named deputy — not a single employed seat and not an agency placement that may expressly not offer legal advice. Scope and fees sit in the engagement letter; we do not publish a fee card or compare our fees with other law practices on this site.",
    ],
  },
  faqs: {
    heading: "FAQ",
    items: [
      {
        question: "What is Fractional GC here?",
        answer:
          "A scoped retainer with Beyond Horizons / Bethel Chambers LLC for ongoing legal judgment — named lead and deputy — not a full-time employment contract and not an agency placement of hands.",
      },
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
        question: "Do you publish monthly fees?",
        answer: "No. Fees depend on volume and complexity and are set in the engagement letter.",
      },
      {
        question: "Do you compare your fees with other law firms?",
        answer: "No. We do not compare our fees with those of any other law practice.",
      },
      {
        question: "Do you guarantee outcomes?",
        answer: "No. We commit to named counsel, a deputy, and a stated response time.",
      },
    ],
  },
  cta: {
    heading: "Next step",
    description: "Schedule a consultation, or email HL@beyondhorizons.sg.",
    note:
      "Related tools (optional): employers building Workplace Fairness Act readiness or reviewing the first published Employment Claims Tribunals decision can use workplacefairness.beyondhorizons.sg — a separate microsite, not a substitute for this page. Beyond Horizons is the practice of Bethel Chambers LLC, a Singapore law corporation regulated by the Law Society of Singapore. This page is general information only. It is not legal advice and does not create a solicitor–client relationship.",
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
