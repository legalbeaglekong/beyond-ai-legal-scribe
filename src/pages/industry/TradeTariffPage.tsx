import IndustryPageLayout, { type IndustryPageData } from "@/components/IndustryPageLayout";
import { FileText, Shield, Scale, AlertTriangle } from "lucide-react";

export const data: IndustryPageData = {
  slug: "trade-tariff",
  seo: {
    title: "Trade & Tariff Counsel Singapore | Contract Restructuring & UAS 232 | Beyond Horizons",
    description: "Trade and tariff counsel for APAC businesses — contractual restructuring, JV repositioning, and Section 232 UAS content-origin issues for suppliers into US programmes. Schedule a consultation.",
  },
  hero: {
    title: "Trade & Tariff Law — Business Repositioning & Contractual Restructuring",
    subtitle: "Strategic legal counsel helping businesses restructure relationships, renegotiate contracts, and reposition operations in response to shifting global trade policies, tariff escalations, and evolving geopolitical dynamics.",
    badges: ["Business Repositioning", "Contractual Restructuring", "Joint Ventures & Shareholder Agreements"],
  },
  overview: {
    heading: "What We Do in Trade & Tariff Law",
    services: [
      { icon: FileText, title: "Contractual Review & Restructuring", description: "Review and restructuring of existing supply, distribution, and procurement agreements to address tariff impacts — including force majeure, price adjustment, and termination provisions." },
      { icon: Shield, title: "Joint Venture & Shareholder Agreements", description: "Structuring, negotiating, and restructuring joint ventures and shareholder agreements to reposition business relationships across new trade corridors and shifting supply chains." },
      { icon: Scale, title: "Business Repositioning Strategy", description: "Legal advisory on repositioning business operations — including entity restructuring, supply chain realignment, and market entry strategies in response to tariff and trade policy shifts." },
      { icon: AlertTriangle, title: "Risk Assessment & Mitigation", description: "Identifying and mitigating legal risks arising from trade disruptions — contract exposure analysis, counterparty risk assessment, and dispute avoidance strategies." },
    ],
    stats: ["Cross-border contractual restructuring", "JV & shareholder agreement advisory", "Supply chain realignment support", "Trade dispute risk mitigation"],
  },
  comparison: {
    heading: "Strategic Trade Counsel — Beyond Compliance",
    otherLabel: "General Commercial Firms",
    rows: [
      { feature: "Trade Policy Response", other: "Reactive advice after tariff changes hit", bh: "Proactive contractual and structural advisory — repositioning businesses before disruption" },
      { feature: "Contractual Expertise", other: "Standard contract review", bh: "Deep restructuring of commercial agreements to address tariff impacts, force majeure, and pricing mechanisms" },
      { feature: "JV & Partnerships", other: "Generic joint venture templates", bh: "Bespoke JV and shareholder agreements designed for shifting trade landscapes and cross-border partnerships" },
      { feature: "Business Strategy Integration", other: "Legal advice disconnected from commercial reality", bh: "Combined legal, commercial, and strategic advisory — holistic repositioning solutions" },
      { feature: "Pricing", other: "Hourly billing for complex restructuring", bh: "Transparent pricing — fixed-fee contractual reviews and restructuring packages" },
      { feature: "Speed of Response", other: "Lengthy turnaround on restructuring advice", bh: "Rapid-response advisory for urgent trade disruption scenarios" },
    ],
  },
  spotlight: {
    heading: "Recent Developments",
    cards: [
      { title: "Section 232 UAS tariffs (described as live from 3 Sep 2026)", description: "US Proclamation 11055 is described as putting UAS and certain component tariffs in force. For APAC suppliers, content-origin certification and contract allocation of the CBP file often matter more than the headline rate. See our Ascending Asia AAM page for a plain-English counsel sketch.", link: "https://ascendingasia.beyondhorizons.sg/", linkText: "Ascending Asia — Section 232 UAS sketch" },
      { title: "Tariff-Driven Restructuring", description: "Escalating tariffs are forcing businesses to fundamentally rethink supplier relationships, distribution arrangements, and partnership structures across Asia-Pacific." },
      { title: "JV & Partnership Realignment", description: "Shifting trade corridors creating new opportunities for joint ventures and strategic partnerships — but existing agreements need restructuring to capture value." },
      { title: "Contractual Risk Exposure", description: "Legacy contracts drafted without tariff escalation provisions leave businesses exposed — proactive review and restructuring is essential to manage risk." },
    ],
    analysis: "In an era of trade policy uncertainty, businesses need more than compliance advice — they need strategic legal counsel to restructure relationships, renegotiate agreements, and reposition operations for competitive advantage.",
  },
  faqs: {
    heading: "Frequently Asked Questions — Trade & Tariff Law",
    items: [
      { question: "How do tariff changes affect existing contracts?", answer: "Tariff changes can fundamentally alter the economics of supply, distribution, and procurement contracts. We review existing agreements for force majeure triggers, price adjustment mechanisms, and termination rights — and restructure where needed." },
      { question: "When should I restructure a joint venture due to trade policy shifts?", answer: "When tariff changes or trade restrictions materially affect the commercial rationale of a JV — whether through increased costs, restricted market access, or changed competitive dynamics — it's time to review governance, profit-sharing, and exit provisions." },
      { question: "Can existing contracts be renegotiated due to tariff impacts?", answer: "Yes. Depending on contract terms, governing law, and the nature of the tariff change, renegotiation may be available through hardship clauses, price review mechanisms, or mutual agreement. We advise on leverage points and negotiation strategy." },
      { question: "How do I reposition my supply chain in response to tariffs?", answer: "Repositioning involves legal structuring across multiple dimensions — new supplier agreements, entity restructuring, FTA utilisation, and potentially new JV or partnership arrangements in alternative jurisdictions." },
      { question: "What should a shareholder agreement include to address trade risks?", answer: "Key provisions include deadlock resolution for trade-related disputes, material adverse change definitions that capture tariff impacts, exit mechanisms, and governance structures that allow rapid response to policy shifts." },
      { question: "How quickly can contractual restructuring be completed?", answer: "Timelines depend on complexity, but we offer rapid-response advisory for urgent trade disruption scenarios. Simple contract amendments can be turned around in days; comprehensive restructuring programmes are scoped on a project basis." },
      { question: "Do you advise on Section 232 UAS tariffs?", answer: "We advise APAC clients on the contractual and supply-chain documentation side of selling UAS / components into US programmes under the current Section 232 UAS measures — including who owns origin certification risk. We are not a substitute for a US customs broker or HTS specialist of record. Longer plain-English sketch: Ascending Asia AAM page." },
      { question: "Should I use the Trade & Tariff page or Ascending Asia?", answer: "Use Ascending Asia for AAM / UAS market-entry context plus the Section 232 UAS sketch. Use this Trade & Tariff page for broader contractual restructuring and tariff-shock commercial work. Some matters need both pages." },
      { question: "How do I start?", answer: "Schedule a consultation or contact us via the site (including WhatsApp). Bring a short note on product type (UAS vs component), buyer geography, and whether you already have US customs counsel. General website information is not legal advice." },
    ],
  },
  closing: {
    heading: "Sources and scope",
    paragraphs: [
      "Beyond Horizons (Bethel Chambers LLC) is an EnterpriseSG BizAdapt pre-approved vendor for Legal & Contractual Matters. This is not an EnterpriseSG endorsement or government partnership.",
      "General information only — not legal advice and not tariff advice. It is not a prediction of CBP treatment. Outcomes turn on documents and facts; check the Federal Register for the latest text and coordinate with US customs counsel where needed.",
    ],
  },
  cta: {
    heading: "Reposition with confidence — get strategic counsel",
    description: "From contractual restructuring to JV realignment, our specialist trade team is ready to help. Book a free strategic consultation.",
  },
  relatedPages: [
    { title: "Transportation", slug: "transportation" },
    { title: "Aviation", slug: "aviation" },
    { title: "Blockchain & Digital Assets", slug: "blockchain-digital-assets" },
  ],
  relatedExternal: [
    { label: "Federal Register — Proclamation 11055 / 2026-16979", href: "https://www.federalregister.gov/documents/2026/08/19/2026-16979/adjusting-imports-of-unmanned-aircraft-systems-and-unmanned-aircraft-systems-components-into-the" },
    { label: "EnterpriseSG BizAdapt", href: "https://www.enterprisesg.gov.sg/financial-support/business-adaptation-grant" },
  ],
};

const TradeTariffPage = () => <IndustryPageLayout data={data} />;
export default TradeTariffPage;
