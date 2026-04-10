import IndustryPageLayout, { type IndustryPageData } from "@/components/IndustryPageLayout";
import { Plane, Shield, Globe, Building } from "lucide-react";

const data: IndustryPageData = {
  slug: "aviation",
  seo: {
    title: "Aviation Law Singapore — Aircraft Finance, Leasing & Regulatory Counsel | Beyond Horizons Legal",
    description: "Chambers-ranked aviation finance lawyers in Singapore. Aircraft financing, leasing, Cape Town Convention, regulatory compliance. Beyond Horizons Legal by Bethel Chambers LLC.",
  },
  hero: {
    title: "Aviation Law — Aircraft Finance, Leasing & Regulatory Counsel",
    subtitle: "Chambers-ranked aviation finance lawyers advising airlines, lessors, financiers, and MRO providers across Asia-Pacific, Europe, and the Middle East on complex cross-border transactions.",
    badges: ["Chambers Global Band 3 — Aviation Finance", "Legal 500 Next Generation Partner", "$8B+ in Deals Closed in 2024 & 2025"],
  },
  overview: {
    heading: "What We Do in Aviation Law",
    services: [
      { icon: Plane, title: "Aircraft Financing & Leasing", description: "Structuring secured loans, operating leases, sale-and-leasebacks, and portfolio financings for commercial and business aviation fleets." },
      { icon: Shield, title: "Aviation Regulatory Compliance", description: "Advising on CAAS, EASA, and FAA regulatory frameworks, air operator certificates, and bilateral air service agreements." },
      { icon: Globe, title: "Cross-Border Aircraft Transactions", description: "Cape Town Convention registrations, export credit agency financing, tax-efficient structures across multiple jurisdictions." },
      { icon: Building, title: "Airport & MRO Infrastructure", description: "Project finance, PPP structures, and regulatory approvals for airport development and MRO facility investments." },
    ],
    stats: ["150+ aircraft transactions advised", "30+ airline and lessor clients", "15+ jurisdictions covered", "$8B+ in transaction value in 2024 & 2025"],
  },
  comparison: {
    heading: "A Different Model for Aviation Legal Work",
    otherLabel: "Traditional Big Law",
    rows: [
      { feature: "Sector Expertise", other: "Generalist teams rotate across industries", bh: "Dedicated aviation finance specialists with Chambers ranking" },
      { feature: "Pricing Model", other: "Hourly billing at premium CBD rates", bh: "Transparent, value-aligned pricing — fixed fees and capped engagements available" },
      { feature: "Cross-Border Capability", other: "Rely on single-firm global network, potential conflicts", bh: "Independent firm partnering with Magic Circle and White Shoe firms — conflict-free collaboration" },
      { feature: "Technology & Efficiency", other: "Legacy processes, manual document management", bh: "Digital-first workflows, automated contract tracking, 24/7 virtual operations" },
      { feature: "Client Responsiveness", other: "Associate-led day-to-day, partner for pitches", bh: "Direct senior partner involvement from engagement to close" },
      { feature: "ESG & Sustainability", other: "Offered as add-on service", bh: "Integrated ESG advisory — certified in Green Finance and ESG Investing" },
    ],
  },
  spotlight: {
    heading: "Representative Aviation Matters",
    cards: [
      { title: "Cross-Border Aircraft Portfolio Financing", description: "Advised a major Asian lessor on a $400M+ portfolio financing involving aircraft registered across 5 jurisdictions, with Cape Town Convention and IDERA registrations." },
      { title: "Airline Restructuring & Fleet Rationalisation", description: "Guided an APAC carrier through fleet restructuring, negotiating lease amendments, redelivery conditions, and maintenance reserve settlements with 8 lessors." },
      { title: "Green Aviation Finance", description: "Structured sustainability-linked loan facility for acquisition of fuel-efficient narrowbody aircraft with ESG reporting covenants." },
    ],
  },
  faqs: {
    heading: "Frequently Asked Questions — Aviation Law",
    items: [
      { question: "What is aviation finance law?", answer: "Aviation finance law covers the legal frameworks governing the financing, leasing, and acquisition of aircraft. It includes structuring secured loans, operating and finance leases, and ensuring compliance with international conventions such as the Cape Town Convention." },
      { question: "How does the Cape Town Convention affect aircraft financing in Singapore?", answer: "The Cape Town Convention provides an international framework for registering security interests in aircraft, creating certainty for financiers and lessors. Singapore's accession enhances the enforceability of creditor rights and facilitates cross-border aircraft transactions." },
      { question: "What legal issues arise in aircraft operating leases?", answer: "Key issues include redelivery conditions, maintenance reserve structures, insurance requirements, default and termination provisions, and cross-border enforcement of lessors' rights including IDERA registrations." },
      { question: "Do I need a Singapore-qualified lawyer for cross-border aircraft transactions?", answer: "For transactions involving Singapore-registered aircraft or Singapore-based parties, a Singapore-qualified lawyer ensures compliance with local aviation regulations and provides opinions recognised by international financiers." },
      { question: "What is an IDERA and why does it matter?", answer: "An Irrevocable De-registration and Export Request Authorisation (IDERA) allows a creditor to de-register and export an aircraft without the operator's consent upon default, providing critical security for financiers and lessors." },
      { question: "How does Beyond Horizons Legal price aviation finance work?", answer: "We offer transparent, value-aligned pricing including fixed-fee and capped-fee arrangements for defined scope work, providing cost certainty for clients on complex aviation transactions." },
    ],
  },
  cta: {
    heading: "Ready to discuss your aviation legal needs?",
    description: "From fleet financing to regulatory approvals, our Chambers-ranked team is ready to help. Book a free strategic consultation.",
  },
  relatedPages: [
    { title: "Transportation", slug: "transportation" },
    { title: "Energy Transition", slug: "energy-transition" },
    { title: "Robot Leasing & Robotics", slug: "robotics" },
  ],
};

const AviationPage = () => <IndustryPageLayout data={data} />;
export default AviationPage;
