import IndustryPageLayout, { type IndustryPageData } from "@/components/IndustryPageLayout";
import { Sun, Leaf, BarChart3, Building } from "lucide-react";

const data: IndustryPageData = {
  slug: "energy-transition",
  seo: {
    title: "Energy Transition Law Singapore — Renewable Energy, ESG & Green Finance Counsel | Beyond Horizons Legal",
    description: "ESG-certified energy transition lawyers in Singapore. Renewable energy projects, green bonds, sustainability-linked loans, ESG compliance. Beyond Horizons Legal by Bethel Chambers LLC.",
  },
  hero: {
    title: "Energy Transition Law — Renewable Energy, Clean Tech & ESG Infrastructure Counsel",
    subtitle: "Forward-thinking legal strategies for renewable energy developers, clean technology ventures, green finance institutions, and sustainability-focused infrastructure projects across Asia-Pacific.",
    badges: ["ESG Investing Certified", "Green & Sustainable Finance Certified", "Cross-Border Project Finance"],
  },
  overview: {
    heading: "What We Do in Energy Transition Law",
    services: [
      { icon: Sun, title: "Renewable Energy Projects", description: "Solar, wind, and hydrogen project development — PPA structuring, EPC contracts, grid connection agreements, and regulatory approvals across ASEAN." },
      { icon: Leaf, title: "Clean Technology Ventures", description: "VC and PE investment structuring for cleantech, carbon capture technology licensing, and green tech JV agreements." },
      { icon: BarChart3, title: "ESG Compliance & Reporting", description: "Sustainability-linked loan covenants, ESG disclosure advisory (SGX, ISSB, EU CSRD), greenwashing risk management, and carbon credit frameworks." },
      { icon: Building, title: "Sustainable Infrastructure Finance", description: "Green bonds, sustainability-linked loans, blended finance structures, and multilateral development bank co-financing for infrastructure." },
    ],
    stats: ["ESG Investing + Green Finance dual certification", "Sustainability-linked loan structuring", "ASEAN renewable energy project experience", "Published thought leader on aviation ESG & greenwashing"],
  },
  comparison: {
    heading: "Integrated ESG Legal Counsel vs. Bolt-On Advisory",
    otherLabel: "Traditional Firms with ESG Add-On",
    rows: [
      { feature: "ESG Integration", other: "Separate ESG team, brought in late in deals", bh: "ESG embedded from deal inception — certified expertise in ESG Investing and Green Finance" },
      { feature: "Greenwashing Risk", other: "Generic compliance review", bh: "Proactive greenwashing risk management — published analysis on APAC aviation greenwashing enforcement" },
      { feature: "Green Finance Structuring", other: "Outsource to specialist advisors", bh: "In-house green bond, SLL, and sustainability-linked facility structuring" },
      { feature: "Regulatory Navigation", other: "Reactive to new ESG regulations", bh: "Proactive — tracking SGX sustainability reporting, ISSB standards, EU CSRD cross-border impact" },
      { feature: "Pricing", other: "Premium rates for specialist ESG overlay", bh: "Integrated pricing — ESG advisory built into transaction fees, not billed as a separate workstream" },
      { feature: "Cross-Sector Knowledge", other: "ESG siloed from industry expertise", bh: "ESG expertise combined with deep aviation, transport, and infrastructure sector knowledge" },
    ],
  },
  spotlight: {
    heading: "The APAC Energy Transition — By the Numbers",
    cards: [
      { title: "Renewable Energy Targets", description: "ASEAN targeting 23% renewable energy share by 2025, with Singapore targeting net zero by 2050." },
      { title: "Green Finance Opportunity", description: "$1.5T+ green finance opportunity in Asia-Pacific, driving demand for specialist legal structuring." },
      { title: "Anti-Greenwashing Compliance", description: "Rising greenwashing enforcement across APAC regulators, requiring proactive compliance strategies." },
    ],
    analysis: "The energy transition creates both enormous opportunity and significant legal complexity. Beyond Horizons Legal helps clients navigate this landscape with ESG-certified expertise integrated into every transaction.",
  },
  faqs: {
    heading: "Frequently Asked Questions — Energy Transition Law",
    items: [
      { question: "What is energy transition law?", answer: "Energy transition law covers the legal frameworks governing the shift from fossil fuels to renewable energy, including project development, green finance, ESG compliance, and carbon markets regulation." },
      { question: "How are green bonds regulated in Singapore?", answer: "Green bonds in Singapore must comply with MAS guidelines and international standards such as the Green Bond Principles. SGX-listed green bonds require disclosure of use of proceeds and ongoing impact reporting." },
      { question: "What are sustainability-linked loans and how are covenants structured?", answer: "Sustainability-linked loans tie loan terms to borrower ESG performance through sustainability performance targets (SPTs). Covenants typically include margin adjustments based on achievement of pre-agreed environmental or social metrics." },
      { question: "What ESG disclosure requirements apply to Singapore-listed companies?", answer: "SGX requires listed companies to publish sustainability reports aligned with TCFD recommendations. From 2025, climate-related disclosures aligned with ISSB standards become mandatory for certain issuers." },
      { question: "What is greenwashing and what are the legal risks?", answer: "Greenwashing is making misleading environmental claims about products, services, or investments. Legal risks include regulatory enforcement, securities fraud claims, consumer protection violations, and reputational damage." },
      { question: "How does Beyond Horizons integrate ESG into transaction structuring?", answer: "We embed ESG considerations from deal inception — structuring sustainability-linked covenants, ESG disclosure frameworks, and greenwashing risk mitigation into the core transaction documentation rather than treating ESG as an add-on." },
    ],
  },
  cta: {
    heading: "Powering the transition with legal clarity",
    description: "From renewable energy projects to green finance structuring, our ESG-certified team is ready to help. Book a free strategic consultation.",
  },
  relatedPages: [
    { title: "Aviation", slug: "aviation" },
    { title: "Transportation", slug: "transportation" },
    { title: "Trade & Tariff", slug: "trade-tariff" },
  ],
};

const EnergyTransitionPage = () => <IndustryPageLayout data={data} />;
export default EnergyTransitionPage;
