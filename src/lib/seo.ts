const SITE_URL = "https://beyondhorizons.sg";

type PageHeadOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  scripts?: Array<{ type: string; children: string }>;
};

export function createPageHead({
  title,
  description,
  path,
  type = "website",
  scripts,
}: PageHeadOptions) {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
    ...(scripts ? { scripts } : {}),
  };
}

type FaqItem = { question: string; answer: string };

export function createFaqScript(items: FaqItem[]) {
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
  "/about": ["About Beyond Horizons | Bethel Chambers LLC", "Meet the Singapore-based, cross-border legal team at Beyond Horizons, a specialist practice group of Bethel Chambers LLC."],
  "/ai-tools": ["AI Legal Tools | Beyond Horizons Singapore", "Explore purpose-built legal tools for regulatory monitoring, contract review, financial modelling and legal operations."],
  "/announcements": ["Announcements | Beyond Horizons Legal", "News, events and practice updates from Beyond Horizons by Bethel Chambers LLC in Singapore."],
  "/ascending-asia": ["Ascending Asia | Advanced Air Mobility Legal Guide", "Read Ascending Asia, a practical legal guide to Advanced Air Mobility market entry across Asia-Pacific."],
  "/courses": ["Free Legal Courses | Aviation Finance & Jet SPAs", "Free legal and business courses on jet sale agreements, aviation finance, Cape Town, AI contracts and cross-border transactions."],
  "/expertise": ["Legal Expertise | Beyond Horizons Singapore", "Explore cross-border corporate, finance, regulatory, employment, technology and dispute-resolution legal expertise."],
  "/industry/ai-code-counsel": ["AI Code Counsel Singapore | Beyond Horizons", "AI governance counsel for PDPC GenAI notifications, IMDA and FEAT alignment, EU AI Act readiness and practical AI policies."],
  "/industry/aviation": ["Aviation Finance Counsel Singapore | Beyond Horizons", "Aviation finance counsel for English-law leases, engines, portfolios and financings, with APAC time-zone coverage."],
  "/industry/blockchain-digital-assets": ["Blockchain & Digital Assets Counsel | Beyond Horizons", "Singapore-anchored counsel for digital assets, token projects, blockchain contracts and evolving regulatory requirements."],
  "/industry/cybersecurity-tech": ["Cybersecurity & Technology Counsel | Beyond Horizons", "Legal guidance on cybersecurity, data governance, technology contracts, incident readiness and cross-border compliance."],
  "/industry/energy-transition": ["Energy Transition Counsel Singapore | Beyond Horizons", "Sustainability-aware counsel for renewable energy, green finance, project contracts and energy-transition matters across APAC."],
  "/industry/fractional-gc": ["Fractional General Counsel Singapore | Beyond Horizons", "Compare ongoing legal support options and learn how a retained Singapore law practice can support contracts, boards and compliance."],
  "/industry/robotics": ["Robotics & Automation Counsel | Beyond Horizons", "Legal guidance for robotics and automation businesses on contracts, product risk, data, AI governance and market entry."],
  "/industry/space": ["Space Law Counsel Singapore | Beyond Horizons", "Singapore-anchored legal counsel for space businesses, satellite projects, commercial contracts and cross-border regulatory matters."],
  "/industry/trade-tariff": ["Trade & Tariff Counsel | UAS Section 232", "Trade and tariff counsel for APAC businesses, including contract restructuring, supply-chain risk and Section 232 UAS documentation."],
  "/industry/transportation": ["Transportation Counsel Singapore | Beyond Horizons", "Cross-border legal counsel for transportation businesses, commercial agreements, financing, regulation and operational risk."],
  "/industry/wellness-health": ["Wellness & Health Counsel Singapore | Beyond Horizons", "Legal guidance for wellness and health businesses on commercial contracts, regulation, data, employment and expansion."],
  "/join-us": ["Careers at Beyond Horizons Legal | Singapore", "Explore career opportunities with Beyond Horizons, a digital-first Singapore legal practice serving cross-border clients."],
  "/market-insights": ["Legal Market Insights | Beyond Horizons", "Market intelligence on APAC legal services, cross-border transactions, technology, sustainability and regulatory change."],
  "/our-clients": ["Our Clients | Beyond Horizons Legal", "See the businesses and organisations supported by Beyond Horizons across aviation, technology and cross-border matters."],
  "/singapore-ai-governance": ["Singapore AI Governance Counsel | Beyond Horizons", "Singapore AI governance counsel for AI Verify, FEAT, PDPC GenAI notifications and cross-border EU AI Act readiness."],
  "/singapore-alternative-energy-law": ["Singapore Renewable Energy Counsel | Beyond Horizons", "Counsel for electricity imports, solar, hydrogen, battery storage, carbon credits and green project finance in Singapore."],
  "/singapore-aviation-law": ["Singapore Aviation Law Counsel | Beyond Horizons", "English and Singapore law aviation counsel for leasing, finance, transactions, regulation and disputes across APAC."],
  "/singapore-employment-law": ["Singapore Employment & ONE Pass Counsel | Beyond Horizons", "Employment counsel for MOM compliance, EP and COMPASS, ONE Pass transition, workplace fairness and cross-border exits."],
  "/singapore-restructuring-insolvency": ["Singapore Restructuring Counsel | Beyond Horizons", "Counsel for restructurings, insolvency risk, workouts, creditor negotiations and cross-border recovery strategies."],
  "/singapore-robotics-law": ["Singapore Robotics Law Counsel | Beyond Horizons", "Singapore legal counsel for robotics, autonomous systems, AI governance, product risk and commercial deployment."],
  "/singapore-space-law": ["Singapore Space Law Counsel | Beyond Horizons", "Singapore-anchored counsel for satellite, launch, space technology and cross-border commercial and regulatory matters."],
  "/team": ["Our Legal Team | Beyond Horizons Singapore", "Meet the English and Singapore-qualified lawyers supporting Beyond Horizons clients across APAC and international markets."],
  "/topics": ["Legal Topics & Insights | Beyond Horizons", "Explore legal perspectives on aviation, AI, employment, transactions, energy, technology and cross-border business."],
  "/why-specialist-counsel": ["Why Specialist Counsel | Beyond Horizons", "Learn how focused, senior legal counsel supports complex cross-border, regulated and technology-driven matters."],
  "/work": ["Our Work | Beyond Horizons Legal", "Explore the work, industries and community initiatives of Beyond Horizons by Bethel Chambers LLC."],
  "/work/csr": ["Society & Impact | Beyond Horizons Legal", "Beyond Horizons supports sustainable aviation initiatives and community programmes in Singapore and across APAC."],
} as const;

export function createStaticPageHead(path: keyof typeof STATIC_PAGE_SEO) {
  const [title, description] = STATIC_PAGE_SEO[path];
  return createPageHead({ title, description, path });
}

const EXPERTISE_SEO: Record<string, readonly [string, string]> = {
  "ma-cross-border": ["Cross-Border M&A Counsel Singapore | Beyond Horizons", "Cross-border M&A counsel for due diligence, transaction documents, regulatory clearances and transactional tax structuring across APAC and major markets."],
  "tech-general-counsel": ["Technology General Counsel | Beyond Horizons", "Cross-border general counsel support for technology companies navigating contracts, data, intellectual property and regulation."],
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
  const page = EXPERTISE_SEO[id];
  if (!page) {
    return createPageHead({
      title: "Legal Expertise | Beyond Horizons",
      description: "Explore cross-border legal expertise from Beyond Horizons by Bethel Chambers LLC.",
      path: `/expertise/${id}`,
    });
  }
  return createPageHead({ title: page[0], description: page[1], path: `/expertise/${id}`, type: "article" });
}

const TEAM_SEO: Record<string, readonly [string, string]> = {
  "hui-ling-teo": ["Hui Ling Teo | Beyond Horizons", "Hui Ling Teo is the founder of Beyond Horizons and an English and Singapore-qualified lawyer advising on cross-border corporate and finance matters."],
  "sonia-motwani": ["Sonia Motwani | Beyond Horizons", "Sonia Motwani is Delivery Lead at Beyond Horizons and a solicitor qualified in England and Wales."],
};

export function createTeamHead(slug: string) {
  const page = TEAM_SEO[slug] ?? ["Legal Team | Beyond Horizons", "Meet the legal team at Beyond Horizons by Bethel Chambers LLC."];
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