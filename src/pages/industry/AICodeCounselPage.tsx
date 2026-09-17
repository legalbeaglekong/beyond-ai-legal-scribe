import IndustryPageLayout, { type IndustryPageData } from "@/components/IndustryPageLayout";
import { Brain, Shield, Scale, FileCheck } from "lucide-react";

export const data: IndustryPageData = {
  slug: "ai-code-counsel",
  seo: {
    title: "AI Code Counsel Singapore | PDPC GenAI, AI Verify & EU AI Act — Beyond Horizons",
    description: "AI governance counsel for Singapore operators — PDPC GenAI notifications, IMDA/FEAT programmes, EU AI Act readiness, and AI×IP issues. Book a consultation.",
  },
  hero: {
    title: "AI Code Counsel Singapore — Governance, PDPC GenAI & EU AI Act Readiness",
    subtitle: "AI Code Counsel turns regulatory expectations into operational frameworks for GC, DPO, product, CTO and board teams — policies, inventories, notifications, contracts, controls and reporting rather than abstract memos. Schedule a consultation when you need privileged support to put the programme into practice.",
    badges: ["AI Governance Frameworks", "Singapore Regulatory Aligned", "EU AI Act Readiness"],
  },
  intro: {
    paragraphs: ["Appoint counsel when GenAI or other AI systems touch personal data, customer decisions, regulated products, or EU users — and you need privileged help to design policies, AI-Specific Notifications, inventories, and board reporting, not only a vendor checklist. Beyond Horizons’ AI Code Counsel work typically sits with GC, DPO, and product teams to operationalise Singapore expectations and bridge to frameworks such as the EU AI Act."],
  },
  overview: {
    heading: "What We Do in AI Governance & Risk",
    services: [
      { icon: Brain, title: "AI Governance Framework Design", description: "Appoint us to design and operationalise enterprise AI governance structures — board oversight, AI risk committees, inventories and three-lines-of-defence models aligned with current regulatory expectations." },
      { icon: Shield, title: "AI Risk Management & Taxonomy", description: "Appoint us to build AI risk taxonomies covering model risk, data quality, bias, explainability, cybersecurity, third-party risk and concentration risk — with materiality methods and control libraries." },
      { icon: Scale, title: "Regulatory Compliance & AI Policy", description: "Appoint us to draft AI policies, acceptable-use standards and governance programmes aligned with Singapore guidance, the EU AI Act, FEAT principles and sector expectations. This includes PDPC GenAI AI-Specific Notification and consent redesign in plain English." },
      { icon: FileCheck, title: "AI Lifecycle Legal Oversight", description: "Appoint us for legal oversight from use-case design and data acquisition through validation, deployment and monitoring — including inventories, disclosure requirements, vendor terms and change management." },
    ],
    stats: ["Singapore governance frameworks", "GC, DPO & product alignment", "Cross-sector operational programmes", "EU AI Act readiness assessments"],
  },
  contentSections: [
    { heading: "PDPC GenAI AI-Specific Notifications", paragraphs: ["Where consent supports the use of personal data for GenAI training or fine-tuning, organisations may need to redesign notices and related vendor contracts around PDPC’s AI-Specific Notification guidance. The existing FAQs below explain the current advisory framing; confirm the current PDPC text before implementation."] },
    { heading: "MinLaw / IPOS AI × IP consultation", paragraphs: ["MinLaw and IPOS are consulting on AI and intellectual property through 22 October 2026, including the computational data analysis exception for training, lawful-access and contractual limits, AI-assisted inventorship, and AI-generated prior art. Law and practice may change after feedback; do not assume the consultation’s outcome. Counsel can help scale-ups map training-data and inventorship risk now against current statutes and published consultation papers."] },
    { heading: "EU AI Act / IMDA / FEAT bridge", paragraphs: ["A readiness programme can map use cases once, then bridge controls and evidence across Singapore’s IMDA Model Framework, AI Verify, MAS FEAT where relevant, and the EU AI Act. Applicability is fact-specific and rules evolve; confirm current official guidance before relying on a classification."], links: [{ label: "Read the Singapore AI Governance playbook", to: "/singapore-ai-governance" }] },
  ],
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
      { question: "When should a Singapore organisation appoint AI governance counsel?", answer: "Appoint counsel when GenAI or other AI systems touch personal data, customer decisions, regulated products, or EU users — and you need privileged help to design policies, AI-Specific Notifications, inventories, and board reporting, not only a vendor checklist. Soft next step: schedule a consultation with Beyond Horizons’ AI Code Counsel team." },
      { question: "Does the EU AI Act apply to Singapore companies?", answer: "It can, depending on how your systems are placed on the EU market or affect people in the EU — even if you are incorporated in Singapore. Many operators need a bridging programme: map use cases, classify risk under the Act’s framing, and align contracts and documentation with Singapore expectations (IMDA Model Framework, AI Verify, MAS FEAT where relevant). This is fact-specific; confirm current EU and Singapore guidance and get counsel before you treat “Singapore-only” as enough." },
      { question: "What is AI Verify, and do we need counsel to operationalise it with IMDA / MAS FEAT?", answer: "AI Verify is Singapore’s testing toolkit/framework ecosystem for evaluating AI systems against governance principles. Counsel is useful when you need privileged help to turn framework outputs into policies, board reporting, vendor clauses, and regulated-sector alignment (for example MAS FEAT for FinServ) — not only a checklist download. We work alongside your risk and product teams; we do not replace engineering ownership." },
      { question: "What is Singapore’s computational data analysis (CDA) exception for AI training?", answer: "Singapore’s copyright framework includes a computational data analysis exception that can support some AI training uses of lawfully accessible materials. Lawful-access limits and contracts may still block reliance on the exception even when the statutory gateway looks relevant. The MinLaw/IPOS public consultation on AI and intellectual property (open through 22 October 2026) may refine how these issues are understood — treat published consultation papers and current statutes as the source of truth, and get counsel before locking training-data strategy. Do not assume the consultation’s outcome." },
      { question: "Can only a natural person be named as inventor of an AI-assisted invention in Singapore?", answer: "Under current Singapore framing, inventorship of AI-assisted inventions is generally discussed around natural persons. AI-generated prior art and documentation of human contribution also matter for filing strategy. MinLaw/IPOS is consulting on AI × IP issues through 22 October 2026 — do not predict the outcome. Confirm current Patents Act practice and get counsel before you file or publish." },
    ],
  },
  cta: {
    heading: "Ready to operationalise AI governance?",
    description: "From Singapore regulatory alignment to EU AI Act readiness, we help GC, DPO and product teams operationalise AI governance. Schedule a consultation or email HL@beyondhorizons.sg.",
  },
  relatedPages: [
    { title: "Fractional GC", slug: "fractional-gc" },
    { title: "Cybersecurity & Tech", slug: "cybersecurity-tech" },
    { title: "Blockchain & Digital Assets", slug: "blockchain-digital-assets" },
    { title: "Singapore AI Governance", slug: "/singapore-ai-governance" },
    { title: "Singapore Employment Law", slug: "/singapore-employment-law" },
    { title: "Robotics", slug: "robotics" },
    { title: "Why Specialist Counsel", slug: "/why-specialist-counsel" },
  ],
};

const AICodeCounselPage = () => <IndustryPageLayout data={data} />;
export default AICodeCounselPage;
