import IndustryPageLayout, { type IndustryPageData } from "@/components/IndustryPageLayout";
import { Building, Truck, Shield, Globe } from "lucide-react";

const data: IndustryPageData = {
  slug: "transportation",
  seo: {
    title: "Transportation Law Singapore — Infrastructure, Logistics & Cross-Border Counsel | Beyond Horizons by Bethel Chambers",
    description: "Transportation lawyers in Singapore. Infrastructure PPPs, logistics contracts, maritime law, cross-border freight. Beyond Horizons by Bethel Chambers LLC.",
  },
  hero: {
    title: "Transportation Law — Infrastructure, Logistics & Cross-Border Trade Counsel",
    subtitle: "Strategic legal guidance for transportation companies, logistics providers, port operators, and infrastructure developers navigating complex regulatory landscapes across Asia-Pacific and beyond.",
    badges: ["10+ Jurisdictions"],
  },
  overview: {
    heading: "What We Do in Transportation Law",
    services: [
      { icon: Building, title: "Transportation Infrastructure", description: "PPP advisory, project finance, and regulatory approvals for ports, rail, roads, and intermodal facilities." },
      { icon: Truck, title: "Logistics & Supply Chain", description: "Structuring logistics JVs, warehousing agreements, last-mile delivery frameworks, and technology-enabled supply chain contracts." },
      { icon: Shield, title: "Regulatory Compliance", description: "Navigating maritime, road, and rail regulations across ASEAN, EU, and international frameworks including IMO conventions." },
      { icon: Globe, title: "Cross-Border Transportation", description: "Multi-jurisdictional freight agreements, customs facilitation, cabotage rules, and international transport conventions." },
    ],
    stats: ["50+ transportation infrastructure matters", "20+ logistics and supply chain clients", "10+ ASEAN jurisdictions"],
  },
  spotlight: {
    heading: "Transport Sectors We Serve",
    cards: [
      { title: "Maritime & Ports", description: "Port concession agreements, vessel financing, ship management contracts, maritime arbitration, and IMO regulatory compliance." },
      { title: "Rail & Road Infrastructure", description: "Rail PPPs, toll road concessions, EPC contract review, land acquisition advisory, and cross-border corridor projects." },
      { title: "Advanced Mobility", description: "Legal frameworks for autonomous vehicles, urban air mobility, drone logistics, and mobility-as-a-service platforms." },
    ],
  },
  faqs: {
    heading: "Frequently Asked Questions — Transportation Law",
    items: [
      { question: "What legal issues are common in transportation infrastructure projects?", answer: "Common issues include PPP structuring, regulatory approvals, land acquisition, environmental compliance, construction contract disputes, and multi-jurisdictional financing arrangements." },
      { question: "How does Singapore regulate cross-border logistics operations?", answer: "Singapore regulates logistics through customs, trade facilitation agreements, and sector-specific licensing. Cross-border operations must comply with ASEAN framework agreements and bilateral arrangements." },
      { question: "What is a PPP in transportation law?", answer: "A Public-Private Partnership (PPP) is a contractual arrangement between government and private sector for infrastructure development, including build-operate-transfer, concession, and availability payment models." },
      { question: "Do I need transport lawyers for supply chain contracts?", answer: "Transport lawyers understand the unique risks in logistics — cargo liability, warehousing regulations, customs compliance, and technology integration — that generalist commercial lawyers may overlook." },
      { question: "What international conventions apply to cross-border freight?", answer: "Key conventions include the CMR (road), CIM-COTIF (rail), Hague-Visby Rules and Rotterdam Rules (maritime), and Montreal Convention (air), each governing liability and documentation requirements." },
      { question: "How does Beyond Horizons price transportation legal work?", answer: "Scope and fees are agreed in writing before work begins." },
    ],
  },
  cta: {
    heading: "Let's move your transport project forward",
    description: "From infrastructure PPPs to cross-border logistics, our team is ready to help. Your first consultation is free. To discuss your matter, contact us.",
    afterDescription: <p className="text-white/85 leading-relaxed mb-10 text-lg drop-shadow-md">The free consultation is a one-time initial discussion for each new matter of up to 30 minutes, subject to a conflict check, to understand your matter and explain how we can help and what it would cost. It is not legal advice on your matter, and you are under no obligation to instruct us. Any advice or work after that is charged as agreed in writing.</p>,
  },
  relatedPages: [
    { title: "aviation finance and leasing", slug: "aviation" },
    { title: "Trade & Tariff", slug: "trade-tariff" },
    { title: "Energy Transition", slug: "energy-transition" },
  ],
};

const TransportationPage = () => <IndustryPageLayout data={data} />;
export default TransportationPage;
