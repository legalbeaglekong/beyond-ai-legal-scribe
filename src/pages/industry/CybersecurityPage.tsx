import IndustryPageLayout, { type IndustryPageData } from "@/components/IndustryPageLayout";
import { Shield, Lock, Brain, Server } from "lucide-react";

const data: IndustryPageData = {
  slug: "cybersecurity-tech",
  seo: {
    title: "Cybersecurity & Emerging Technology Law Singapore — Data Protection, AI & Cyber Risk | Beyond Horizons Legal",
    description: "Specialist cybersecurity and AI governance lawyers in Singapore. PDPA, Cybersecurity Act, AI regulation, data protection. Beyond Horizons Legal by Bethel Chambers LLC.",
  },
  hero: {
    title: "Cybersecurity & Emerging Technology Law — Data Protection, AI Governance & Cyber Risk Counsel",
    subtitle: "Advising on data protection, cybersecurity governance, AI regulation, and emerging technology risks — from Singapore's Cybersecurity Act compliance to cross-border data transfer frameworks and AI liability.",
    badges: ["Blockchain Technology Certified", "AI Governance & Regulation", "Cross-Border Data Protection"],
  },
  overview: {
    heading: "What We Do in Cybersecurity & Emerging Technology Law",
    services: [
      { icon: Shield, title: "Cybersecurity Governance & Compliance", description: "Singapore Cybersecurity Act compliance, critical information infrastructure (CII) designation advisory, incident response planning, and cybersecurity governance frameworks." },
      { icon: Lock, title: "Data Protection & Privacy Law", description: "PDPA compliance, cross-border data transfer mechanisms (ASEAN MCCs, SCCs, BCRs), data breach notification, and privacy-by-design implementation." },
      { icon: Brain, title: "AI Regulation & Liability", description: "Singapore's Model AI Governance Framework implementation, AI ethics advisory, algorithmic accountability, and AI-related liability structuring." },
      { icon: Server, title: "Critical Infrastructure Defence", description: "Legal frameworks for critical infrastructure protection, OT/IT convergence governance, supply chain cybersecurity requirements, and government security clearance processes." },
    ],
    stats: ["PDPA & cross-border data protection expertise", "AI governance framework advisory", "Cybersecurity Act compliance", "Blockchain Technology Certified"],
  },
  comparison: {
    heading: "Specialist Cyber & Tech Counsel vs. General IT Law",
    otherLabel: "General IT/IP Law Firms",
    rows: [
      { feature: "Cybersecurity Depth", other: "Broad IT law practice — cyber is one area", bh: "Deep cybersecurity governance expertise — Cybersecurity Act, CII frameworks, incident response" },
      { feature: "AI Understanding", other: "Apply existing IP/contract templates to AI", bh: "Genuine AI governance expertise — Model Framework implementation, algorithmic accountability" },
      { feature: "Data Protection Scope", other: "PDPA compliance as checklist exercise", bh: "Strategic privacy advisory — cross-border data transfers, privacy-by-design, health data, and sector-specific data rules" },
      { feature: "Incident Response", other: "Provide legal opinion after breach", bh: "Pre-breach planning and post-breach rapid response — integrated legal and governance approach" },
      { feature: "Emerging Tech Vision", other: "Cautious, precedent-dependent", bh: "Forward-looking — published on AI threats, blockchain governance, quantum risk" },
      { feature: "Pricing", other: "Premium hourly for specialist cyber work", bh: "Transparent pricing — compliance programme packages and incident response retainers" },
    ],
  },
  spotlight: {
    heading: "When AI Pushes Back — Legal Reflections",
    cards: [
      { title: "Your AI Just Threatened You. Now What?", description: "Beyond Horizons Legal has published original analysis on AI shutdown resistance, blackmail scenarios, and the future of AI governance — questions most law firms aren't yet asking.", link: "https://beyondhorizons.substack.com/p/your-ai-just-threatened-you-now-what", linkText: "Read the Full Analysis" },
      { title: "Cybersecurity Act 2018", description: "Mandatory CII compliance with rising enforcement. Singapore's cybersecurity regulatory landscape requires proactive governance frameworks." },
      { title: "PDPA Enforcement Trends", description: "PDPC financial penalties increasing year-on-year. Mandatory breach notification since 2021 creates new compliance obligations for all organisations." },
    ],
  },
  faqs: {
    heading: "Frequently Asked Questions — Cybersecurity & Emerging Technology Law",
    items: [
      { question: "What is the Singapore Cybersecurity Act?", answer: "The Cybersecurity Act 2018 establishes a framework for the oversight and maintenance of national cybersecurity, including mandatory compliance requirements for critical information infrastructure (CII) owners and incident reporting obligations." },
      { question: "What are the PDPA requirements for data breach notification?", answer: "Since 2021, organisations must notify the PDPC of data breaches that are of significant scale or result in significant harm. Notification must be made within 3 calendar days of assessing that the breach is notifiable." },
      { question: "How is AI regulated in Singapore?", answer: "Singapore takes a governance-based approach through the Model AI Governance Framework, which provides voluntary but influential guidance on AI ethics, accountability, and transparency. Sector-specific AI regulations are emerging in healthcare, finance, and other areas." },
      { question: "What is critical information infrastructure (CII) and does it apply to my business?", answer: "CII refers to computer systems necessary for the continuous delivery of essential services in 11 designated sectors. Owners of CII have mandatory obligations under the Cybersecurity Act including compliance audits, risk assessments, and incident reporting." },
      { question: "How do cross-border data transfer rules work under the PDPA?", answer: "The PDPA restricts transfers of personal data outside Singapore unless the recipient provides a comparable standard of protection. Mechanisms include contractual arrangements, binding corporate rules, and ASEAN Model Contractual Clauses." },
      { question: "What should my company's cybersecurity incident response plan include?", answer: "An effective plan includes incident detection and escalation procedures, containment strategies, forensic investigation protocols, regulatory notification workflows, communication plans, and post-incident review processes." },
    ],
  },
  cta: {
    heading: "Secure your technology — and your legal position",
    description: "From cybersecurity governance to AI regulation, our specialist team is ready to help. Book a free strategic consultation.",
  },
  relatedPages: [
    { title: "Blockchain & Digital Assets", slug: "blockchain-digital-assets" },
    { title: "Wellness & Health", slug: "wellness-health" },
    { title: "Robot Leasing & Robotics", slug: "robotics" },
  ],
};

const CybersecurityPage = () => <IndustryPageLayout data={data} />;
export default CybersecurityPage;
