import PillarPage from "@/components/PillarPage";
import { Brain, Shield, FileCheck, ScrollText, Building2, Globe } from "lucide-react";

const SingaporeAIGovernancePage = () => (
  <PillarPage
    slug="singapore-ai-governance"
    eyebrow="Singapore-anchored · Cross-border AI Governance"
    h1="AI Governance & Risk — Singapore-anchored, Cross-border Counsel"
    intro="Practical AI governance and AI risk counsel — aligned to the IMDA Model AI Governance Framework, AI Verify, MAS FEAT/Veritas, and bridging to the EU AI Act, US NIST AI RMF and ISO/IEC 42001 for cross-border operators."
    badges={["IMDA Model Framework-aligned", "AI Verify-ready", "MAS FEAT & EU AI Act bridging"]}
    metaTitle="AI Governance Lawyer — Singapore, EU AI Act, MAS | Beyond Horizons"
    metaDescription="Singapore-anchored AI governance counsel: IMDA Model AI Framework, AI Verify, MAS FEAT/Veritas, Generative AI guidance, EU AI Act and ISO/IEC 42001 cross-border."
    ogTitle="AI Governance — Singapore-anchored, Cross-border Counsel"
    ogDescription="IMDA Model AI Framework, AI Verify, MAS FEAT, EU AI Act and ISO/IEC 42001 — operationalised for cross-border businesses."
    breadcrumbName="Singapore AI Governance"
    serviceType="AI Governance & Regulation"
    serviceDescription="Singapore-anchored cross-border AI governance counsel — IMDA Model AI Governance Framework, AI Verify, MAS FEAT/Veritas, AI risk mitigation, EU AI Act readiness."
    services={[
      { icon: ScrollText, title: "AI Governance Programmes", desc: "Board-level AI policies, RACI, AI inventories and risk tiering aligned to the IMDA Model AI Governance Framework and ISO/IEC 42001 — deployable across global operations." },
      { icon: FileCheck, title: "AI Impact Assessments", desc: "Pre-deployment AI impact assessments covering data, bias, explainability, human oversight, security and downstream user harm — mapped to Singapore, EU and US frameworks." },
      { icon: Shield, title: "AI Risk Mitigation", desc: "Operational controls, model documentation, red-teaming protocols, incident response playbooks, and AI risk dashboards for senior management and audit committees." },
      { icon: Building2, title: "MAS FEAT & Veritas", desc: "Implementation of FEAT principles and Veritas methodologies for AI use cases in banking, asset management, insurance and payments — coordinated with home-jurisdiction regulators." },
      { icon: Brain, title: "Generative AI & Foundation Models", desc: "Acceptable use policies, model and vendor due diligence, training-data lawfulness, output IP and confidentiality, and deepfake response plans." },
      { icon: Globe, title: "EU AI Act & Global Bridging", desc: "Mapping Singapore programmes onto EU AI Act obligations, US NIST AI RMF and emerging Asia-Pacific frameworks — risk classification, conformity assessments, transparency and post-market monitoring." },
    ]}
    updates={[
      { title: "Generative AI Model Governance Framework", summary: "IMDA and the AI Verify Foundation's framework for generative AI sets out nine dimensions — from accountability and data to incident reporting — that Singapore deployers and developers are expected to operationalise." },
      { title: "MAS Veritas updates", summary: "MAS continues to refine Veritas methodologies for fairness, ethics, accountability and transparency in financial services AI, with expanding industry consortium participation." },
      { title: "AI Verify Foundation expansion", summary: "AI Verify continues to add testing modules and international interoperability (including alignment with NIST AI RMF and ISO/IEC 42001), strengthening Singapore's position as a global AI assurance hub." },
    ]}
    faqs={[
      { q: "Does Singapore have AI laws?", a: "Singapore does not yet have a single 'AI law', but AI deployment is shaped by the PDPA, the Model AI Governance Framework, AI Verify, the Generative AI Model Governance Framework, sector regulators (MAS FEAT/Veritas, MOH HealthAI) and adjacent statutes on cybersecurity, copyright and consumer protection." },
      { q: "What is the IMDA Model AI Governance Framework?", a: "Published by IMDA and PDPC, the Model AI Governance Framework is Singapore's voluntary, sector-agnostic guidance for responsible AI deployment, organised around internal governance, human-AI decision making, operations management and stakeholder communication. The Generative AI companion framework extends it to foundation models." },
      { q: "What is AI Verify?", a: "AI Verify is Singapore's open-source AI governance testing framework and software toolkit, developed by IMDA and the AI Verify Foundation. It lets organisations technically test and process-check AI systems against international AI principles." },
      { q: "How does MAS regulate AI in financial services?", a: "MAS issued the FEAT Principles (Fairness, Ethics, Accountability, Transparency) and, through the Veritas Initiative, published assessment methodologies. AI in regulated activities must also satisfy MAS Notice 655 on technology risk, outsourcing, and model risk expectations." },
      { q: "How should businesses approach AI risk mitigation?", a: "Map AI use cases against risk tiers, deploy a written AI policy aligned to the Model Framework, run pre-deployment impact assessments, document datasets and prompts, embed human-in-the-loop controls, vendor-test against AI Verify, and align contracts to allocate liability and IP. Boards should receive periodic AI risk dashboards." },
      { q: "Does the EU AI Act apply to Singapore companies?", a: "The EU AI Act has extraterritorial reach: it applies to providers placing AI systems on the EU market and to deployers whose AI output is used in the EU. Many Singapore SaaS, fintech and platform companies fall in scope and need a parallel readiness track to their Singapore obligations." },
      { q: "What about generative AI, copyright and confidentiality?", a: "Singapore's Copyright Act 2021 introduced a computational data analysis exception. Generative AI use raises issues on training data lawfulness, output IP ownership, deepfakes, and confidentiality — typically addressed through acceptable use policies, vendor terms, and DLP controls." },
      { q: "How does Beyond Horizons support cross-border AI governance?", a: "We design AI governance programmes aligned to the IMDA Model Framework and AI Verify, advise on MAS FEAT and Veritas, draft AI vendor and deployment contracts, run AI impact assessments, and bridge Singapore obligations with EU AI Act, NIST AI RMF and ISO/IEC 42001 readiness." },
    ]}
    relatedKeywords={["ai", "artificial intelligence", "imda", "mas", "feat", "veritas", "model ai", "ai governance", "generative", "llm"]}
    relatedHeading="Related Insights — AI Governance & Risk"
    ctaHeading="Schedule an AI Governance Consultation"
    ctaBody="From IMDA Model Framework adoption to MAS FEAT and EU AI Act readiness, our team helps you operationalise responsible AI across borders. Book a complimentary strategic consultation."
    exploreLink={{ label: "Explore AI Code Counsel", to: "/industry/ai-code-counsel" }}
    lastUpdatedISO="2026-06-09"
    lastUpdatedLabel="June 2026"
  />
);

export default SingaporeAIGovernancePage;
