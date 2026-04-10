import IndustryPageLayout, { type IndustryPageData } from "@/components/IndustryPageLayout";
import { FileText, Shield, Scale, AlertTriangle } from "lucide-react";

const data: IndustryPageData = {
  slug: "trade-tariff",
  seo: {
    title: "Trade & Tariff Law Singapore — Business Restructuring, JVs & Contractual Advisory | Beyond Horizons Legal",
    description: "Strategic trade and tariff lawyers in Singapore. Business repositioning, contractual restructuring, joint ventures, shareholder agreements amid shifting trade policies. Beyond Horizons Legal by Bethel Chambers LLC.",
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
    heading: "Repositioning for the New Trade Order",
    cards: [
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
};

const TradeTariffPage = () => <IndustryPageLayout data={data} />;
export default TradeTariffPage;
