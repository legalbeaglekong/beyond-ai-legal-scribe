import IndustryPageLayout, { type IndustryPageData } from "@/components/IndustryPageLayout";
import { FileText, Shield, Scale, AlertTriangle } from "lucide-react";

const data: IndustryPageData = {
  slug: "trade-tariff",
  seo: {
    title: "Trade & Tariff Law Singapore — International Trade, Customs & Sanctions Counsel | Beyond Horizons Legal",
    description: "Specialist trade and tariff lawyers in Singapore. Customs compliance, sanctions, RCEP, tariff classification, export controls. Beyond Horizons Legal by Bethel Chambers LLC.",
  },
  hero: {
    title: "Trade & Tariff Law — International Trade, Customs & Sanctions Counsel",
    subtitle: "Strategic legal counsel on international trade regulations, tariff classifications, customs compliance, sanctions navigation, and trade remedies — helping businesses maintain competitive advantage in an era of shifting global trade policies.",
    badges: ["Cross-Border Trade Expertise", "ASEAN & Global Sanctions Navigation", "Customs & Tariff Classification"],
  },
  overview: {
    heading: "What We Do in Trade & Tariff Law",
    services: [
      { icon: FileText, title: "Tariff Classification & Strategy", description: "HS code classification, tariff engineering, preferential trade agreement utilisation (RCEP, CPTPP, ASEAN FTAs), and duty minimisation strategies." },
      { icon: Shield, title: "Customs Compliance", description: "Customs valuation, rules of origin, bonded warehouse structuring, and trade compliance programme design for multinational supply chains." },
      { icon: Scale, title: "Trade Remedies & Disputes", description: "Anti-dumping, countervailing duty, and safeguard proceedings — advisory on filings, defences, and WTO dispute resolution frameworks." },
      { icon: AlertTriangle, title: "Sanctions & Export Controls", description: "OFAC, EU, UN, and Singapore sanctions screening, export control classification (dual-use goods), and sanctions compliance programme implementation." },
    ],
    stats: ["Multi-jurisdictional sanctions expertise", "RCEP, CPTPP, ASEAN FTA advisory", "Customs compliance programme design", "Trade remedy proceedings experience"],
  },
  comparison: {
    heading: "Specialist Trade Counsel in a Shifting Global Landscape",
    otherLabel: "General Commercial Firms",
    rows: [
      { feature: "Trade Policy Understanding", other: "Reactive to tariff changes", bh: "Proactive monitoring of US, EU, and ASEAN trade policy shifts — strategic advisory before changes hit" },
      { feature: "Sanctions Expertise", other: "Outsource to specialist sanctions counsel", bh: "In-house multi-jurisdictional sanctions navigation — OFAC, EU, UN, and Singapore frameworks" },
      { feature: "FTA Utilisation", other: "Generic advice on trade agreements", bh: "Deep RCEP, CPTPP, and ASEAN FTA expertise — practical tariff savings strategies" },
      { feature: "Supply Chain Integration", other: "Trade advice disconnected from logistics", bh: "Combined trade, transport, and supply chain legal advisory — holistic solutions" },
      { feature: "Pricing", other: "Hourly billing for complex classifications", bh: "Transparent pricing — fixed-fee tariff opinions and compliance programme packages" },
      { feature: "Digital-First", other: "Paper-heavy customs processes", bh: "Digital compliance tools, automated sanctions screening advisory" },
    ],
  },
  spotlight: {
    heading: "Navigating the New Trade Order",
    cards: [
      { title: "US-China Trade Dynamics", description: "US-China tariff escalation reshaping APAC supply chains, creating urgency for strategic tariff planning and supply chain restructuring." },
      { title: "RCEP Opportunities", description: "RCEP creating new preferential trade corridors across Asia-Pacific, enabling duty savings through strategic rules of origin management." },
      { title: "Sanctions Complexity", description: "Singapore as neutral trade hub — strategic advantage for tariff planning, but multi-regime sanctions compliance essential for cross-border operations." },
    ],
    analysis: "In an era of trade policy uncertainty, Singapore-based specialist trade counsel provides strategic value — combining deep regulatory knowledge with practical commercial understanding to help businesses navigate complexity.",
  },
  faqs: {
    heading: "Frequently Asked Questions — Trade & Tariff Law",
    items: [
      { question: "How do tariff classifications affect import costs?", answer: "Tariff classifications determine the duty rate applied to imported goods. Accurate HS code classification can significantly impact costs, and strategic use of preferential trade agreements can reduce or eliminate duties." },
      { question: "What is RCEP and how can my business benefit from it?", answer: "The Regional Comprehensive Economic Partnership is a free trade agreement among 15 Asia-Pacific nations. Businesses can benefit through preferential tariff rates, cumulative rules of origin, and simplified customs procedures across member countries." },
      { question: "How do US sanctions affect Singapore-based businesses?", answer: "US sanctions have extraterritorial reach and can affect Singapore businesses that deal with US persons, use US financial systems, or handle US-origin goods. Compliance requires screening counterparties and transactions against OFAC lists." },
      { question: "What is tariff engineering and is it legal?", answer: "Tariff engineering involves structuring products or import processes to qualify for lower tariff classifications. When done through legitimate product design or sourcing changes, it is a lawful duty optimisation strategy used widely by multinational companies." },
      { question: "What trade remedies are available against dumped imports?", answer: "Trade remedies include anti-dumping duties, countervailing duties against subsidised imports, and safeguard measures. These require filing petitions with relevant authorities and demonstrating injury to domestic industry." },
      { question: "How can I build a compliant export control programme?", answer: "An effective export control programme includes classification of goods, screening of end-users and destinations, licence management, record-keeping, training, and internal audit procedures aligned with Singapore and international requirements." },
    ],
  },
  cta: {
    heading: "Trade with confidence — get specialist counsel",
    description: "From tariff strategy to sanctions compliance, our specialist trade team is ready to help. Book a free strategic consultation.",
  },
  relatedPages: [
    { title: "Transportation", slug: "transportation" },
    { title: "Aviation", slug: "aviation" },
    { title: "Blockchain & Digital Assets", slug: "blockchain-digital-assets" },
  ],
};

const TradeTariffPage = () => <IndustryPageLayout data={data} />;
export default TradeTariffPage;
