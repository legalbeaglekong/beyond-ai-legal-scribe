import IndustryPageLayout, { type IndustryPageData } from "@/components/IndustryPageLayout";
import { Users, Clock, Shield, Globe, FileText, Handshake, Brain, Search, AlertTriangle, GraduationCap, Bot, Briefcase } from "lucide-react";

const data: IndustryPageData = {
  slug: "fractional-gc",
  seo: {
    title: "Fractional General Counsel Singapore — On-Demand Legal Leadership | Beyond Horizons Legal",
    description: "Fractional General Counsel services in Singapore. Senior legal leadership on-demand for startups, scale-ups, and mid-market companies. Beyond Horizons Legal by Bethel Chambers LLC.",
  },
  hero: {
    title: "Fractional General Counsel — Senior Legal Leadership, On Demand",
    subtitle: "Access experienced General Counsel expertise without the overhead of a full-time hire. We embed senior legal leadership into your business on a flexible, fractional basis — from board-level governance to day-to-day commercial operations.",
    badges: ["Flexible Engagement Models", "Board-Level Legal Counsel", "Cross-Border Capability"],
  },
  overview: {
    heading: "What a Fractional GC Does for Your Business",
    services: [
      { icon: Users, title: "Strategic Legal Leadership", description: "Board and C-suite advisory, corporate governance, stakeholder management, and strategic legal risk oversight — delivered by a senior practitioner who understands your business." },
      { icon: Shield, title: "Regulatory & Compliance Oversight", description: "Ongoing compliance management across jurisdictions, regulatory horizon scanning, and policy development — including AI governance, data privacy, and ESG frameworks." },
      { icon: Clock, title: "Commercial Operations Support", description: "Contract lifecycle management, vendor negotiations, employment matters, IP protection, and dispute avoidance — keeping your commercial engine running smoothly." },
      { icon: Globe, title: "Cross-Border Legal Coordination", description: "Managing external counsel across jurisdictions, coordinating multi-market transactions, and ensuring consistent legal standards across your global operations." },
      { icon: FileText, title: "Non-Disclosure Agreements", description: "Drafting, reviewing, and negotiating NDAs tailored to your industry — protecting trade secrets, proprietary data, and confidential business relationships across all stages of deal-making." },
      { icon: Handshake, title: "Joint Venture Agreements", description: "Structuring and negotiating JV agreements that align partner interests, define governance frameworks, allocate risk and reward, and establish clear exit mechanisms for cross-border collaborations." },
      { icon: Brain, title: "Negotiation Strategies", description: "Providing senior-level negotiation support and strategy for high-stakes commercial deals, M&A transactions, and partnership agreements — ensuring your interests are protected at every turn." },
      { icon: AlertTriangle, title: "Risk Profiling & Assessment", description: "Conducting comprehensive legal risk assessments across your operations — identifying exposure areas, quantifying potential impact, and building mitigation strategies aligned with your risk appetite." },
      { icon: GraduationCap, title: "Legal Training & Awareness", description: "Delivering tailored legal training programmes for your leadership and teams — covering contract essentials, regulatory obligations, compliance best practices, and emerging legal risks in your sector." },
      { icon: Search, title: "Regulatory Scanner", description: "Proactive regulatory monitoring and horizon scanning across your operating jurisdictions — tracking legislative changes, enforcement trends, and policy developments so you stay ahead of compliance obligations." },
      { icon: Bot, title: "AI-Powered Legal Assistance", description: "Deploying AI chatbot tools for first-line legal queries, contract review triage, and compliance checklists — augmenting your legal function with 24/7 intelligent support backed by senior counsel oversight." },
      { icon: Briefcase, title: "Employment & HR Matters", description: "End-to-end employment law support including hiring contracts, termination protocols, workplace policies, equity incentive plans, and cross-border employment compliance for distributed teams." },
    ],
    stats: ["50+ companies supported as Fractional GC", "15+ jurisdictions coordinated", "70% cost savings vs full-time GC", "24/7 availability for critical matters"],
  },
  comparison: {
    heading: "Why Fractional GC Over Traditional Models",
    otherLabel: "Full-Time GC / Ad-Hoc Law Firms",
    rows: [
      { feature: "Cost Structure", other: "Full-time GC: $300K-600K+ total comp; Ad-hoc firms: unpredictable hourly bills", bh: "Predictable monthly retainer at a fraction of the cost — scale up or down as needed" },
      { feature: "Seniority of Counsel", other: "Full-time: one person's experience; Ad-hoc: often associate-led", bh: "Direct access to a senior partner with 20+ years and cross-industry experience" },
      { feature: "Business Integration", other: "Law firms remain external; limited context on your business", bh: "Embedded in your team — attends board meetings, knows your strategy, anticipates risks" },
      { feature: "Flexibility", other: "Full-time: fixed overhead; Firms: engagement-by-engagement", bh: "Fractional model scales with your growth — from 2 days/month to near full-time" },
      { feature: "Cross-Border Reach", other: "Limited to one jurisdiction or one firm's network", bh: "Independent counsel partnering with Magic Circle and White Shoe firms globally" },
      { feature: "AI & Technology", other: "Traditional processes, limited tech adoption", bh: "AI-augmented legal operations — contract analysis, regulatory monitoring, and compliance automation" },
    ],
  },
  spotlight: {
    heading: "Fractional GC in Action",
    cards: [
      { title: "Series B Scale-Up — Full Legal Function Build", description: "Served as Fractional GC for a Singapore-based fintech through its Series B, building the legal function from scratch — policies, vendor contracts, employment framework, and board governance — saving over $400K annually versus a full-time hire." },
      { title: "Cross-Border M&A Integration", description: "Acted as interim GC during a $150M cross-border acquisition, coordinating 6 external counsel teams across APAC and Europe, managing due diligence, and leading post-merger legal integration." },
      { title: "AI Governance Framework Implementation", description: "Embedded as Fractional GC for a financial institution to design and implement an AI governance framework aligned with MAS guidelines, including risk taxonomy, model validation policies, and board reporting structures." },
    ],
  },
  faqs: {
    heading: "Frequently Asked Questions — Fractional GC",
    items: [
      { question: "What is a Fractional General Counsel?", answer: "A Fractional General Counsel is a senior lawyer who serves as your company's chief legal officer on a part-time, flexible basis. You get the strategic leadership, governance oversight, and commercial judgment of an experienced GC without the full-time salary and benefits cost." },
      { question: "What size companies benefit from a Fractional GC?", answer: "Startups post-seed through mid-market companies with up to $500M in revenue typically benefit most. Companies that have outgrown ad-hoc law firm advice but aren't ready for a full-time GC find the fractional model ideal." },
      { question: "How is this different from hiring a law firm?", answer: "A law firm handles specific matters reactively. A Fractional GC is proactively embedded in your business — attending leadership meetings, understanding strategy, anticipating legal risks, and coordinating all legal needs including managing external counsel." },
      { question: "How much time does a Fractional GC typically dedicate?", answer: "Engagements range from 2-4 days per month for early-stage companies to 2-3 days per week for more complex operations. The model is designed to flex with your needs and can scale as your company grows." },
      { question: "Can a Fractional GC handle cross-border matters?", answer: "Absolutely. Our Fractional GC service includes coordinating with our global network of Magic Circle and White Shoe law firms, ensuring you have jurisdictional coverage wherever you operate without managing multiple law firm relationships yourself." },
      { question: "How does pricing work?", answer: "We offer transparent monthly retainer arrangements based on the scope and complexity of your needs. This provides cost certainty and is typically 60-70% less expensive than a full-time General Counsel." },
    ],
  },
  cta: {
    heading: "Ready to add senior legal leadership to your team?",
    description: "From governance to growth, our Fractional GC service gives you experienced legal counsel exactly when you need it. Book a free strategic consultation.",
  },
  relatedPages: [
    { title: "AI Code Counsel", slug: "ai-code-counsel" },
    { title: "Cybersecurity & Tech", slug: "cybersecurity-tech" },
    { title: "Blockchain & Digital Assets", slug: "blockchain-digital-assets" },
  ],
};

const FractionalGCPage = () => <IndustryPageLayout data={data} />;
export default FractionalGCPage;
