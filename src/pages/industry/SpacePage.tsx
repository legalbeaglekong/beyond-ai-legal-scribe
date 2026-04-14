import IndustryPageLayout, { type IndustryPageData } from "@/components/IndustryPageLayout";
import { Rocket, Satellite, Globe, Shield } from "lucide-react";

const data: IndustryPageData = {
  slug: "space",
  seo: {
    title: "Space Law Singapore — Satellite, Launch & Commercial Space Counsel | Beyond Horizons Legal",
    description: "Space law specialists in Singapore advising on satellite transactions, launch agreements, orbital debris liability, and commercial space ventures across Asia-Pacific and globally.",
  },
  hero: {
    title: "Space Law — Satellite, Launch & Commercial Space Counsel",
    subtitle: "Advising governments, satellite operators, launch providers, and commercial space ventures on the legal frameworks shaping the new space economy across Asia-Pacific and beyond.",
    badges: ["Commercial Space Advisory", "Satellite & Launch Transactions", "Cross-Border Space Regulation"],
  },
  overview: {
    heading: "What We Do in Space Law",
    services: [
      { icon: Satellite, title: "Satellite Transactions & Licensing", description: "Structuring satellite procurement, capacity agreements, orbital slot filings, and spectrum licensing with national and international regulatory bodies." },
      { icon: Rocket, title: "Launch Agreements & Liability", description: "Drafting and negotiating launch service agreements, liability allocation, insurance requirements, and indemnification frameworks under the Outer Space Treaty regime." },
      { icon: Globe, title: "Cross-Border Space Ventures", description: "Advising on joint ventures, public-private partnerships, and foreign investment in space infrastructure projects across multiple jurisdictions." },
      { icon: Shield, title: "Space Regulatory Compliance", description: "Navigating national space legislation, export controls (ITAR/EAR), orbital debris mitigation guidelines, and emerging space traffic management regulations." },
    ],
    stats: ["20+ satellite and launch transactions", "10+ jurisdiction coverage", "Advisory to sovereign space agencies", "Emerging space economy focus"],
  },
  comparison: {
    heading: "A Different Model for Space Legal Work",
    otherLabel: "Traditional Big Law",
    rows: [
      { feature: "Sector Knowledge", other: "Generalist teams unfamiliar with space-specific treaties and regulations", bh: "Dedicated space law practitioners versed in the Outer Space Treaty, Liability Convention, and national space acts" },
      { feature: "Regulatory Navigation", other: "Limited experience with ITAR, spectrum licensing, and orbital filings", bh: "Hands-on experience navigating ITU filings, export controls, and multi-jurisdictional space licensing" },
      { feature: "Commercial Agility", other: "Slow to adapt to the pace of the new space economy", bh: "Built for the speed of commercial space — startup-friendly, venture-ready, and mission-aligned" },
      { feature: "Cross-Border Reach", other: "Single-firm network with potential conflicts", bh: "Independent firm partnering with leading space law practices globally — conflict-free collaboration" },
      { feature: "Pricing", other: "Premium hourly rates regardless of scope", bh: "Transparent, value-aligned pricing with fixed-fee and milestone-based options" },
      { feature: "ESG & Sustainability", other: "Space sustainability as an afterthought", bh: "Integrated advisory on orbital debris mitigation, space sustainability guidelines, and responsible space operations" },
    ],
  },
  spotlight: {
    heading: "Representative Space Matters",
    cards: [
      { title: "Satellite Constellation Financing", description: "Advised a regional satellite operator on a $200M+ constellation deployment financing, including orbital slot rights, ground segment procurement, and launch insurance structuring." },
      { title: "Commercial Launch Agreement", description: "Negotiated launch service agreements for multiple payload missions, addressing liability caps, schedule risk allocation, and post-separation insurance handover." },
      { title: "Space Venture Joint Venture", description: "Structured a cross-border JV between an APAC sovereign wealth fund and a European space technology company for in-orbit servicing capabilities." },
    ],
  },
  faqs: {
    heading: "Frequently Asked Questions — Space Law",
    items: [
      { question: "What is space law?", answer: "Space law encompasses the international treaties, national legislation, and regulatory frameworks governing activities in outer space, including satellite operations, launch activities, space exploration, and the use of space resources." },
      { question: "What international treaties govern space activities?", answer: "The primary treaties include the 1967 Outer Space Treaty, the 1972 Liability Convention, the Registration Convention, and the Moon Agreement. These establish principles of non-appropriation, state responsibility, liability for damage, and registration of space objects." },
      { question: "Do I need regulatory approval to launch a satellite from or operate in Singapore?", answer: "Yes. Most jurisdictions, including Singapore, require licensing for space activities. This may involve spectrum coordination through the ITU, compliance with national space legislation, and adherence to export control regulations such as ITAR or EAR for US-origin components." },
      { question: "What are the key legal risks in commercial space ventures?", answer: "Key risks include launch failure liability, orbital debris obligations, spectrum interference disputes, regulatory non-compliance, insurance coverage gaps, and cross-border intellectual property challenges." },
      { question: "How is liability allocated in space activities?", answer: "Under the Liability Convention, launching states bear international liability for damage caused by their space objects. Commercially, liability is allocated through launch agreements, insurance policies, and cross-waivers of liability between participating parties." },
      { question: "How does Beyond Horizons Legal price space law work?", answer: "We offer transparent, value-aligned pricing including fixed-fee engagements for regulatory filings, milestone-based pricing for transactions, and retainer arrangements for ongoing advisory — tailored to the pace of the new space economy." },
    ],
  },
  cta: {
    heading: "Ready to discuss your space law needs?",
    description: "From satellite licensing to launch agreements, our team is ready to guide your mission. Book a free strategic consultation.",
  },
  relatedPages: [
    { title: "Aviation", slug: "aviation" },
    { title: "Cybersecurity & Tech", slug: "cybersecurity-tech" },
    { title: "Energy Transition", slug: "energy-transition" },
  ],
};

const SpacePage = () => <IndustryPageLayout data={data} />;
export default SpacePage;
