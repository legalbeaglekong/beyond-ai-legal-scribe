import IndustryPageLayout, { type IndustryPageData } from "@/components/IndustryPageLayout";
import { Brain, Shield, Scale, FileCheck } from "lucide-react";

const data: IndustryPageData = {
  slug: "ai-code-counsel",
  seo: {
    title: "AI Code Counsel Singapore | AI Governance, PDPC GenAI & EU AI Act | Beyond Horizons",
    description: "AI governance and risk counsel for Singapore operators — PDPC generative AI notifications, IMDA/FEAT alignment, EU AI Act readiness, and practical AI policies. Schedule a consultation.",
  },
  hero: {
    title: "AI Code Counsel — Governance, Risk & Responsible AI Legal Advisory",
    subtitle: "Navigating the rapidly evolving landscape of AI regulation and governance. We help organisations design, implement, and operationalise AI risk management frameworks aligned with global standards — from Singapore's regulatory expectations to the EU AI Act.",
    badges: ["AI Governance Frameworks", "Singapore Regulatory Aligned", "EU AI Act Readiness"],
  },
  overview: {
    heading: "What We Do in AI Governance & Risk",
    services: [
      { icon: Brain, title: "AI Governance Framework Design", description: "Designing and operationalising enterprise AI governance structures — defining board oversight responsibilities, AI risk committees, and three-lines-of-defence models aligned with regulatory expectations and global best practices." },
      { icon: Shield, title: "AI Risk Management & Taxonomy", description: "Building comprehensive AI risk taxonomies covering model risk, data quality, bias and fairness, explainability, cybersecurity, third-party AI risks, and concentration risk — with materiality assessment methodologies and control libraries." },
      { icon: Scale, title: "Regulatory Compliance & AI Policy", description: "Drafting AI-specific policies, acceptable use standards, and compliance frameworks aligned with Singapore guidelines, the EU AI Act, FEAT principles, and sector-specific regulations across financial services, healthcare, and technology. This includes PDPC GenAI notification and consent design in plain English." },
      { icon: FileCheck, title: "AI Lifecycle Legal Oversight", description: "Legal advisory across the full AI lifecycle — from use case design and data acquisition through model validation, deployment, and ongoing monitoring — including AI inventory management, disclosure requirements, and change management protocols." },
    ],
    stats: ["30+ AI governance engagements", "Aligned with Singapore regulatory frameworks", "Cross-sector: FinServ, HealthTech, Enterprise", "EU AI Act readiness assessments"],
  },
  comparison: {
    heading: "A Different Approach to AI Legal Advisory",
    otherLabel: "Traditional Tech Law Firms",
    rows: [
      { feature: "AI-Specific Expertise", other: "General technology lawyers advising on AI as a side practice", bh: "Dedicated AI governance practitioners with deep knowledge of FEAT, Singapore regulatory frameworks, and global AI governance standards" },
      { feature: "Operational Focus", other: "Abstract legal opinions disconnected from implementation", bh: "Practical, operationalisable frameworks — we help you build the policies, controls, and processes, not just advise on them" },
      { feature: "Risk Taxonomy Depth", other: "High-level risk categories without granular controls", bh: "Comprehensive AI risk taxonomies with materiality assessments, control libraries, and metrics — covering all key governance considerations" },
      { feature: "Third-Party AI Risk", other: "Standard vendor due diligence templates", bh: "Specialised third-party AI risk management — model cards, open-source deployment risk, SaaS AI concentration risk, and supply chain governance" },
      { feature: "Cross-Regulatory Alignment", other: "Jurisdiction-by-jurisdiction advice in silos", bh: "Harmonised compliance strategies across Singapore, EU AI Act, and APAC frameworks — avoiding duplicative governance" },
      { feature: "Lifecycle Coverage", other: "Point-in-time compliance reviews", bh: "Continuous legal oversight across the AI lifecycle — from design through deployment and ongoing monitoring, including change management" },
    ],
  },
  spotlight: {
    heading: "Representative AI Governance Matters",
    cards: [
      { title: "Comprehensive AI Governance for a Major Bank", description: "Designed and implemented a comprehensive AI governance framework for a Singapore bank — including AI risk taxonomy, materiality assessment methodology, AI inventory system, and board reporting structure. The framework covered AI oversight responsibilities, three-lines-of-defence model, and use-case-level risk management." },
      { title: "EU AI Act Readiness Programme", description: "Conducted an AI Act readiness assessment for an APAC financial institution expanding into Europe — classifying AI systems by risk tier, mapping compliance gaps, building conformity assessment processes, and designing human oversight mechanisms for high-risk AI systems." },
      { title: "Third-Party AI Risk Framework", description: "Built a comprehensive third-party AI risk management framework addressing model cards and documentation requirements, open-source AI deployment risks, SaaS AI vendor concentration risk, and pre- and post-procurement AI risk mitigations — aligned with best practices on managing third-party AI risks." },
    ],
  },
  faqs: {
    heading: "Frequently Asked Questions — AI Governance & Risk",
    items: [
      { question: "What is AI governance and why does my organisation need it?", answer: "AI governance encompasses the policies, procedures, oversight structures, and controls that ensure AI systems are developed and deployed responsibly. As regulators worldwide establish expectations for AI risk management, organisations deploying AI need robust governance to manage risks including bias, model degradation, data quality issues, and regulatory non-compliance." },
      { question: "What regulatory frameworks apply to AI in Singapore?", answer: "Singapore has developed comprehensive AI governance guidance including the FEAT principles (Fairness, Ethics, Accountability, Transparency) and various sector-specific guidelines. These frameworks establish detailed considerations covering AI oversight, risk management, lifecycle management, and enablers — setting the benchmark for AI governance in financial services and beyond." },
      { question: "How does AI risk differ from traditional technology risk?", answer: "AI introduces unique risks beyond traditional technology — including model bias and fairness concerns, explainability challenges, hallucination and confabulation risks in generative AI, data poisoning vulnerabilities, and the emerging risks of agentic AI systems operating with greater autonomy. These require specialised risk taxonomies and controls distinct from standard IT risk frameworks." },
      { question: "What are the key components of an AI risk management framework?", answer: "A comprehensive framework includes: AI risk taxonomy and classification, materiality assessment methodology (inherent and residual risk), AI control library with specific mitigations, AI inventory and model registry, use-case-level risk assessments, third-party AI risk management, ongoing monitoring and change management, and board-level reporting and oversight structures." },
      { question: "Do I need to comply with the EU AI Act if I'm based in Singapore?", answer: "If your AI systems are used within the EU or affect EU residents, the EU AI Act likely applies regardless of where you are headquartered. Many APAC organisations serving global markets need dual compliance strategies covering both Singapore expectations and EU AI Act requirements. We help harmonise these to avoid duplicative governance burdens." },
      { question: "How does Beyond Horizons approach AI governance engagements?", answer: "We take a practical, operationalisable approach — not just delivering legal opinions but helping you build and implement the actual governance structures, policies, controls, and processes. We work embedded with your teams to design frameworks that are proportionate to your AI risk profile and aligned with your existing enterprise risk management." },
      { question: "What are PDPC AI-Specific Notifications for generative AI?", answer: "In July 2026, Singapore’s Personal Data Protection Commission (PDPC) issued Advisory Guidelines on the use of personal data in generative AI. Where an organisation needs consent to use personal data to train or fine-tune a generative AI model, PDPC expects an AI-Specific Notification — an explicit notice that processing includes AI / GenAI model development — not only a vague “product improvement” line. The guidelines are advisory but explain how PDPA obligations apply; confirm the current PDPC text before you redesign notices." },
      { question: "When must we use an AI-Specific Notification?", answer: "Typically when you rely on consent to use personal data for large-scale GenAI training or fine-tuning. If a PDPA exception or deemed consent properly applies, a separate AI-Specific Notification is often not required for that pathway — but you still need a sound legal basis analysis. Downstream product use may still benefit from clearer AI notices for transparency even when not strictly required. This is fact-specific; do not assume one template fits every stack." },
      { question: "What should an AI-Specific Notification usually cover?", answer: "PDPC encourages clarity on the GenAI model’s functions, the types of personal data involved, how data will be used to develop or fine-tune the model, and how individuals can decline or withdraw consent where consent is the basis. There is no single mandatory template — privacy policy language, in-product notices, or layered pages can work if the consent is meaningful. Anonymised data and some call-centre or narrowly scoped uses may be treated differently under the guidelines; check the official examples." },
      { question: "How does Beyond Horizons help with GenAI and PDPC expectations?", answer: "As AI Code Counsel we help organisations map GenAI use cases, review notification and consent wording against PDPA / PDPC guidance, align policies with Singapore AI governance expectations, and bridge to frameworks such as the EU AI Act where relevant. We do not replace your privacy programme ownership or product engineering — we work with GC, DPO, and product teams on the legal design. Soft next step: schedule a consultation." },
    ],
  },
  cta: {
    heading: "Ready to build your AI governance framework?",
    description: "From Singapore regulatory alignment to EU AI Act readiness, our team helps you operationalise AI governance. Book a free strategic consultation.",
  },
  relatedPages: [
    { title: "Fractional GC", slug: "fractional-gc" },
    { title: "Cybersecurity & Tech", slug: "cybersecurity-tech" },
    { title: "Blockchain & Digital Assets", slug: "blockchain-digital-assets" },
  ],
};

const AICodeCounselPage = () => <IndustryPageLayout data={data} />;
export default AICodeCounselPage;
