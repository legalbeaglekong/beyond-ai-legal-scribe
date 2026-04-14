import IndustryPageLayout, { type IndustryPageData } from "@/components/IndustryPageLayout";
import { Brain, Shield, Scale, FileCheck } from "lucide-react";

const data: IndustryPageData = {
  slug: "ai-code-counsel",
  seo: {
    title: "AI Code Counsel Singapore — AI Governance, Risk & Compliance Legal Advisory | Beyond Horizons Legal",
    description: "AI governance and risk management legal counsel in Singapore. Advising on AI regulation, MAS MindForge compliance, model risk, and responsible AI deployment. Beyond Horizons Legal.",
  },
  hero: {
    title: "AI Code Counsel — Governance, Risk & Responsible AI Legal Advisory",
    subtitle: "Navigating the rapidly evolving landscape of AI regulation and governance. We help organisations design, implement, and operationalise AI risk management frameworks aligned with global standards — from MAS MindForge to the EU AI Act.",
    badges: ["AI Governance Frameworks", "MAS MindForge Aligned", "EU AI Act Readiness"],
  },
  overview: {
    heading: "What We Do in AI Governance & Risk",
    services: [
      { icon: Brain, title: "AI Governance Framework Design", description: "Designing and operationalising enterprise AI governance structures — defining board oversight responsibilities, AI risk committees, and three-lines-of-defence models aligned with the MAS MindForge Handbook and global regulatory expectations." },
      { icon: Shield, title: "AI Risk Management & Taxonomy", description: "Building comprehensive AI risk taxonomies covering model risk, data quality, bias and fairness, explainability, cybersecurity, third-party AI risks, and concentration risk — with materiality assessment methodologies and control libraries." },
      { icon: Scale, title: "Regulatory Compliance & AI Policy", description: "Drafting AI-specific policies, acceptable use standards, and compliance frameworks aligned with MAS guidelines, the EU AI Act, Singapore's FEAT principles, and sector-specific regulations across financial services, healthcare, and technology." },
      { icon: FileCheck, title: "AI Lifecycle Legal Oversight", description: "Legal advisory across the full AI lifecycle — from use case design and data acquisition through model validation, deployment, and ongoing monitoring — including AI inventory management, disclosure requirements, and change management protocols." },
    ],
    stats: ["30+ AI governance engagements", "Aligned with MAS MindForge framework", "Cross-sector: FinServ, HealthTech, Enterprise", "EU AI Act readiness assessments"],
  },
  comparison: {
    heading: "A Different Approach to AI Legal Advisory",
    otherLabel: "Traditional Tech Law Firms",
    rows: [
      { feature: "AI-Specific Expertise", other: "General technology lawyers advising on AI as a side practice", bh: "Dedicated AI governance practitioners with deep knowledge of MAS MindForge, FEAT, and global AI regulatory frameworks" },
      { feature: "Operational Focus", other: "Abstract legal opinions disconnected from implementation", bh: "Practical, operationalisable frameworks — we help you build the policies, controls, and processes, not just advise on them" },
      { feature: "Risk Taxonomy Depth", other: "High-level risk categories without granular controls", bh: "Comprehensive AI risk taxonomies with materiality assessments, control libraries, and metrics — aligned with MindForge's 17 Considerations" },
      { feature: "Third-Party AI Risk", other: "Standard vendor due diligence templates", bh: "Specialised third-party AI risk management — model cards, open-source deployment risk, SaaS AI concentration risk, and supply chain governance" },
      { feature: "Cross-Regulatory Alignment", other: "Jurisdiction-by-jurisdiction advice in silos", bh: "Harmonised compliance strategies across MAS, EU AI Act, and APAC frameworks — avoiding duplicative governance" },
      { feature: "Lifecycle Coverage", other: "Point-in-time compliance reviews", bh: "Continuous legal oversight across the AI lifecycle — from design through deployment and ongoing monitoring, including change management" },
    ],
  },
  spotlight: {
    heading: "Representative AI Governance Matters",
    cards: [
      { title: "MindForge-Aligned AI Governance for a Major Bank", description: "Designed and implemented a comprehensive AI governance framework for a Singapore bank aligned with MAS MindForge's 17 Considerations — including AI risk taxonomy, materiality assessment methodology, AI inventory system, and board reporting structure. The framework covered AI oversight responsibilities, three-lines-of-defence model, and use-case-level risk management." },
      { title: "EU AI Act Readiness Programme", description: "Conducted an AI Act readiness assessment for an APAC financial institution expanding into Europe — classifying AI systems by risk tier, mapping compliance gaps, building conformity assessment processes, and designing human oversight mechanisms for high-risk AI systems." },
      { title: "Third-Party AI Risk Framework", description: "Built a comprehensive third-party AI risk management framework addressing model cards and documentation requirements, open-source AI deployment risks, SaaS AI vendor concentration risk, and pre- and post-procurement AI risk mitigations — aligned with MindForge Consideration 4 on managing third-party AI risks." },
    ],
  },
  faqs: {
    heading: "Frequently Asked Questions — AI Governance & Risk",
    items: [
      { question: "What is AI governance and why does my organisation need it?", answer: "AI governance encompasses the policies, procedures, oversight structures, and controls that ensure AI systems are developed and deployed responsibly. As regulators worldwide — including MAS in Singapore — establish expectations for AI risk management, organisations deploying AI need robust governance to manage risks including bias, model degradation, data quality issues, and regulatory non-compliance." },
      { question: "What is the MAS MindForge framework?", answer: "MindForge is a comprehensive AI Risk Management and Governance Framework developed by the Monetary Authority of Singapore in consortium with major financial institutions including DBS, OCBC, UOB, HSBC, and others. It provides 17 detailed Considerations covering AI oversight, risk management, lifecycle management, and enablers — establishing the benchmark for AI governance in financial services." },
      { question: "How does AI risk differ from traditional technology risk?", answer: "AI introduces unique risks beyond traditional technology — including model bias and fairness concerns, explainability challenges, hallucination and confabulation risks in generative AI, data poisoning vulnerabilities, and the emerging risks of agentic AI systems operating with greater autonomy. These require specialised risk taxonomies and controls distinct from standard IT risk frameworks." },
      { question: "What are the key components of an AI risk management framework?", answer: "A comprehensive framework includes: AI risk taxonomy and classification, materiality assessment methodology (inherent and residual risk), AI control library with specific mitigations, AI inventory and model registry, use-case-level risk assessments, third-party AI risk management, ongoing monitoring and change management, and board-level reporting and oversight structures." },
      { question: "Do I need to comply with the EU AI Act if I'm based in Singapore?", answer: "If your AI systems are used within the EU or affect EU residents, the EU AI Act likely applies regardless of where you are headquartered. Many APAC organisations serving global markets need dual compliance strategies covering both MAS expectations and EU AI Act requirements. We help harmonise these to avoid duplicative governance burdens." },
      { question: "How does Beyond Horizons approach AI governance engagements?", answer: "We take a practical, operationalisable approach — not just delivering legal opinions but helping you build and implement the actual governance structures, policies, controls, and processes. We work embedded with your teams to design frameworks that are proportionate to your AI risk profile and aligned with your existing enterprise risk management." },
    ],
  },
  cta: {
    heading: "Ready to build your AI governance framework?",
    description: "From MAS MindForge alignment to EU AI Act readiness, our team helps you operationalise AI governance. Book a free strategic consultation.",
  },
  relatedPages: [
    { title: "Fractional GC", slug: "fractional-gc" },
    { title: "Cybersecurity & Tech", slug: "cybersecurity-tech" },
    { title: "Blockchain & Digital Assets", slug: "blockchain-digital-assets" },
  ],
};

const AICodeCounselPage = () => <IndustryPageLayout data={data} />;
export default AICodeCounselPage;
