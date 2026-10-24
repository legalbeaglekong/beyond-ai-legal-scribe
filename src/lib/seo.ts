const SITE_URL = "https://beyondhorizons.sg";

type PageHeadOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  canonicalUrl?: string;
  ogUrl?: string;
  scripts?: Array<{ type: string; children: string }>;
};

export function createPageHead({
  title,
  description,
  path,
  type = "website",
  canonicalUrl,
  ogUrl,
  scripts,
}: PageHeadOptions) {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  const resolvedCanonical = canonicalUrl ?? url;
  const resolvedOgUrl = ogUrl ?? resolvedCanonical;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: resolvedOgUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: resolvedCanonical }],
    ...(scripts ? { scripts } : {}),
  };
}

type FaqItem = { question: string; answer: string };

export function createFaqScript(items: readonly FaqItem[]) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    }),
  };
}

export const STATIC_PAGE_SEO = {
  "/about": ["About Beyond Horizons by Bethel Chambers LLC | Singapore", "Beyond Horizons is a Singapore-based cross-border practice group of Bethel Chambers LLC, led by Hui Ling Teo: aviation finance, AI and corporate counsel."],
  "/ai-tools": ["AI Legal Tools | Beyond Horizons Singapore", "Explore purpose-built legal tools for regulatory monitoring, contract review, financial modelling and legal operations."],
  "/announcements": ["Announcements | Beyond Horizons by Bethel Chambers", "News, events and practice updates from Beyond Horizons by Bethel Chambers LLC in Singapore."],
  "/ascending-asia": ["Ascending Asia | AAM Market Entry & Section 232 UAS Counsel | Beyond Horizons", "Advanced Air Mobility market-entry guide for APAC — plus Section 232 UAS tariff and content-origin certification issues for suppliers into US programmes. Register for the playbook or schedule a consultation."],
  "/courses": ["Free Legal Courses | Aviation Finance & Jet SPAs", "Free legal and business courses on jet sale agreements, aviation finance, Cape Town, AI contracts and cross-border transactions."],
  "/expertise": ["Legal Expertise | Beyond Horizons Singapore", "Explore cross-border corporate, finance, regulatory, employment, technology and dispute-resolution legal expertise."],
  "/privacy": ["Data Protection Notice | Bethel Chambers LLC", "How Bethel Chambers LLC collects, uses, discloses and protects personal data under Singapore's Personal Data Protection Act 2012."],
  "/beyond-precedent": ["Beyond Precedent | Beyond Horizons", "Beyond Precedent explores how law students draft with free AI tools and how Beyond Horizons designs legal services and talent development for a post-AI age — not a job guarantee."],
  "/industry/ai-code-counsel": ["AI Code Counsel Singapore | PDPC GenAI, AI Verify & EU AI Act — Beyond Horizons", "AI governance counsel for Singapore operators — PDPC GenAI notifications, IMDA/FEAT programmes, EU AI Act readiness, and AI×IP issues. Book a consultation."],
  "/industry/aviation": ["Aviation Finance & Leasing Lawyer Singapore | Beyond Horizons", "Aviation finance, aircraft finance and leasing counsel in Singapore for lessors, airlines and financiers: English-law leases, financings and recoveries."],
  "/industry/blockchain-digital-assets": ["Crypto & Blockchain Lawyer Singapore | Digital Assets", "Singapore counsel for digital asset businesses: token projects, tokenisation, blockchain contracts and MAS licensing questions."],
  "/industry/cybersecurity-tech": ["Cybersecurity & Technology Counsel | Beyond Horizons", "Legal guidance on cybersecurity, data governance, technology contracts, incident readiness and cross-border compliance."],
  "/industry/energy-transition": ["Energy Transition Counsel Singapore | Beyond Horizons", "Sustainability-aware counsel for renewable energy, green finance, project contracts and energy-transition matters across APAC."],
  "/industry/fractional-gc": ["Fractional General Counsel Singapore | Beyond Horizons", "Fractional general counsel and fractional legal counsel in Singapore: scoped retainer support from Beyond Horizons by Bethel Chambers LLC."],
  "/industry/robotics": ["Robot Leasing & RaaS Counsel Singapore | Liability & Autonomous Systems — Beyond Horizons", "Robot leasing and Robotics-as-a-Service counsel in Singapore — RaaS contracts, liability, RLSS co-funding checks, and path/road AV hooks. Book a consultation."],
  "/industry/space": ["Space Law Counsel Singapore | Beyond Horizons", "Singapore-anchored legal counsel for space businesses, satellite projects, commercial contracts and cross-border regulatory matters."],
  "/industry/trade-tariff": ["Trade & Tariff Counsel Singapore | Contract Restructuring & UAS 232 | Beyond Horizons", "Trade and tariff counsel for APAC businesses — contractual restructuring, JV repositioning, and Section 232 UAS content-origin issues for suppliers into US programmes. Schedule a consultation."],
  "/industry/transportation": ["Transportation Counsel Singapore | Beyond Horizons", "Cross-border legal counsel for transportation businesses, commercial agreements, financing, regulation and operational risk."],
  "/industry/wellness-health": ["Wellness & Health Counsel Singapore | Beyond Horizons", "Legal guidance for wellness and health businesses on commercial contracts, regulation, data, employment and expansion."],
  "/join-us": ["Careers at Beyond Horizons by Bethel Chambers | Singapore", "Explore career opportunities with Beyond Horizons, a digital-first Singapore legal practice serving cross-border clients."],
  "/market-insights": ["Legal Market Insights | Beyond Horizons", "Market intelligence on APAC legal services, cross-border transactions, technology, sustainability and regulatory change."],
  "/our-clients": ["Our Clients | Beyond Horizons by Bethel Chambers", "See the businesses and organisations supported by Beyond Horizons across aviation, technology and cross-border matters."],
  "/singapore-ai-governance": ["AI Governance Lawyer Singapore | Policies & Evaluations", "AI governance lawyer in Singapore: we write AI governance policies and evaluate how your company uses AI, against IMDA, PDPC and MAS guidance."],
  "/singapore-alternative-energy-law": ["Singapore Renewable Energy Counsel | Beyond Horizons", "Counsel for electricity imports, solar, hydrogen, battery storage, carbon credits and green project finance in Singapore."],
  "/singapore-aviation-law": ["Singapore Aviation Law & Regulation | CAAS, Private Aviation", "Singapore aviation regulatory guide: CAAS approvals, AOC and foreign operator permit checks, private aviation compliance, charter KYC and Cape Town."],
  "/singapore-employment-law": ["Singapore Employment Law & Workplace Fairness Act Guide", "Singapore employment law for employers: the Workplace Fairness Act is not yet in force (MOM aims for end-2027) — contracts, exits and investigations."],
  "/singapore-restructuring-insolvency": ["Restructuring Lawyer Singapore | Insolvency & Workouts", "Singapore restructuring and insolvency counsel: workouts, schemes, creditor negotiations, lender and borrower positions and cross-border recoveries."],
  "/singapore-robotics-law": ["Robot Leasing & Robotics Financing Lawyer Singapore | RaaS", "Robot leasing and RaaS contracts, robotics equipment financing and cross-border import/export checks, led from Singapore by asset-finance counsel."],
  "/singapore-space-law": ["Singapore Space Law Counsel | Beyond Horizons", "Singapore-anchored counsel for satellite, launch, space technology and cross-border commercial and regulatory matters."],
  "/team": ["Our Lawyers | Hui Ling Teo & Team | Beyond Horizons", "Meet Hui Ling Teo and the English- and Singapore-qualified team at Beyond Horizons by Bethel Chambers LLC: aviation finance, cross-border and AI counsel."],
  "/topics": ["Legal Topics & Insights | Beyond Horizons", "Explore legal perspectives on aviation, AI, employment, transactions, energy, technology and cross-border business."],
  "/why-specialist-counsel": ["Why Specialist Counsel | Beyond Horizons", "Learn how focused, senior legal counsel supports complex cross-border, regulated and technology-driven matters."],
  "/work": ["Our Work | Beyond Horizons by Bethel Chambers", "Explore the work, industries and community initiatives of Beyond Horizons by Bethel Chambers LLC."],
  "/work/csr": ["Society & Impact | Beyond Horizons by Bethel Chambers", "Beyond Horizons supports sustainable aviation initiatives and community programmes in Singapore and across APAC."],
} as const;

export function createStaticPageHead(path: keyof typeof STATIC_PAGE_SEO) {
  const [title, description] = STATIC_PAGE_SEO[path];
  return createPageHead({ title, description, path });
}

const EXPERTISE_SEO: Record<string, readonly [string, string]> = {
  "ma-cross-border": ["Cross-Border M&A Lawyer Singapore | Beyond Horizons", "Cross-border M&A lawyer in Singapore: due diligence, purchase agreements, regulatory clearances and deal structuring, with foreign counsel coordinated."],
  "tech-general-counsel": ["Legal Counsel for Tech Companies Singapore | Beyond Horizons", "Singapore-anchored counsel for SaaS, platform, data and AI product companies: product counsel, terms and privacy, IP and licensing, technology contracts."],
  "commercial-contracts": ["Commercial Contracts Counsel | Beyond Horizons", "Commercial contract drafting and negotiation for businesses operating across Singapore, APAC and international markets."],
  "corporate-transactions": ["Cross-Border Corporate Counsel | Beyond Horizons", "Corporate legal counsel for cross-border investments, joint ventures, governance and transactions across APAC."],
  "regulatory-compliance": ["Regulatory Compliance Counsel | Beyond Horizons", "Practical legal guidance on licensing, governance, investigations and regulatory compliance across regulated industries."],
  "ip-data-privacy": ["IP & Data Privacy Counsel | Beyond Horizons", "Cross-border counsel for intellectual property, data privacy, technology contracts and incident readiness."],
  "startup-funding": ["Startup Funding Counsel | Beyond Horizons", "Legal counsel for startup funding rounds, term sheets, investment documents, governance and closing processes."],
  "employment-labor": ["Cross-Border Employment Counsel | Beyond Horizons", "Employment counsel for contracts, workforce changes, investigations and cross-border people matters."],
  "arbitration-disputes": ["International Arbitration Counsel | Beyond Horizons", "Counsel for cross-border commercial disputes, arbitration agreements and proceedings under major institutional rules."],
  "financial-services": ["Financial Services Regulation | Beyond Horizons", "Legal guidance for financial services businesses on licensing, governance, transactions and regulatory compliance."],
  "business-legacies-apac": ["Building Business Legacies in APAC | Beyond Horizons", "Legal structuring considerations for founders and family businesses building durable enterprises across Asia-Pacific."],
  "family-business-governance": ["Family Business Governance in APAC | Beyond Horizons", "Governance frameworks for APAC family businesses, including ownership, decision-making and succession considerations."],
  "cross-border-wealth-planning": ["Cross-Border Wealth Planning in APAC | Beyond Horizons", "Legal considerations for APAC entrepreneurs coordinating business ownership, succession and cross-border wealth planning."],
  "singapore-legacy-hub": ["Singapore as an APAC Legacy Hub | Beyond Horizons", "Why Singapore is used for regional holding, governance and succession structures across Asia-Pacific."],
  "succession-planning-founders": ["Succession Planning for APAC Founders | Beyond Horizons", "Legal planning for founder succession, leadership transition and continuity across APAC businesses."],
  "ip-business-legacy": ["IP Protection for Business Legacies | Beyond Horizons", "Legal considerations for protecting and transferring intellectual property as part of a long-term business legacy."],
  "trusts-foundations-wealth": ["Trusts, Foundations & Multigenerational Wealth", "An educational overview of trusts and foundations in cross-border succession and multigenerational wealth planning."],
  "crisis-proofing-legacy": ["Business Legacy Risk Management in APAC", "Legal risk-management considerations for continuity, governance and succession planning in APAC businesses."],
  "tech-legacy-planning": ["Legacy Planning for APAC Tech Founders", "Legal planning for technology founders covering ownership, intellectual property, governance and succession across APAC."],
  "esg-legacy-business": ["Responsible Business & Legacy Planning in APAC", "How sustainability and responsible-business considerations can inform governance and long-term legacy planning in APAC."],
};

export function createExpertiseHead(id: string) {
  const page = PUBLIC_EXPERTISE_IDS.includes(id) ? EXPERTISE_SEO[id] : undefined;
  if (!page) {
    return createMissingPageHead();
  }
  return createPageHead({ title: page[0], description: page[1], path: `/expertise/${id}`, type: "article" });
}

const TEAM_SEO: Record<string, readonly [string, string]> = {
  "hui-ling-teo": ["Hui Ling Teo | Aviation Finance Lawyer | Beyond Horizons", "Hui Ling Teo (Teo Hui Ling) leads Beyond Horizons by Bethel Chambers LLC. Qualified as a solicitor in England and Wales and as an advocate and solicitor in Singapore. Chambers Band 3, Aviation: Finance."],
  "sonia-motwani": ["Sonia Motwani | Beyond Horizons", "Sonia Motwani is Delivery Lead at Beyond Horizons and a solicitor qualified in England and Wales."],
};

export function createTeamHead(slug: string) {
  const page = TEAM_SEO[slug];
  if (!page) return createMissingPageHead();
  return createPageHead({ title: page[0], description: page[1], path: `/team/${slug}`, type: "article" });
}

const WHY_SEO: Record<string, readonly [string, string]> = {
  "digital-first": ["Digital-First Legal Services | Beyond Horizons", "How Beyond Horizons uses modern workflows to support efficient, secure and responsive cross-border legal services."],
  "cost-efficiency": ["Efficient Legal Support | Beyond Horizons", "How Beyond Horizons combines focused staffing, modern workflows and clear scoping for efficient legal support."],
  "global-expertise": ["Cross-Border Legal Network | Beyond Horizons", "How Beyond Horizons coordinates a global network of counsel for multi-jurisdictional legal matters."],
  confidentiality: ["Confidentiality & Legal Privilege | Beyond Horizons", "How Beyond Horizons protects client confidentiality and legal privilege within its digital-first legal practice."],
};

export function createWhyHead(id: string) {
  const page = WHY_SEO[id] ?? ["Why Beyond Horizons", "Learn about Beyond Horizons by Bethel Chambers LLC."];
  return createPageHead({ title: page[0], description: page[1], path: `/why-choose-us/${id}`, type: "article" });
}
export const PUBLIC_EXPERTISE_IDS = ["ma-cross-border", "tech-general-counsel", "commercial-contracts", "corporate-transactions", "regulatory-compliance", "ip-data-privacy", "startup-funding", "employment-labor", "arbitration-disputes", "financial-services"];

export function createMissingPageHead() {
  return { meta: [{ title: "Page not found | Beyond Horizons" }, { name: "robots", content: "noindex" }], links: [] };
}
