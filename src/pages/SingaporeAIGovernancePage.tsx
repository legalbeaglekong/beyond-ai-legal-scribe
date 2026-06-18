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
    guide={{
      id: "ai-verify-guide",
      eyebrow: "How-to · Compliance Leaders & CTOs",
      heading: "Singapore AI Governance: A Practical Guide to AI Verify, the IMDA Model Framework & MAS FEAT",
      intro: "A step-by-step compliance playbook for boards, CTOs, CISOs and General Counsel deploying AI in or from Singapore — aligning the IMDA Model AI Governance Framework, AI Verify testing toolkit, and MAS FEAT principles into a single, audit-ready programme.",
      steps: [
        {
          title: "1. Build an AI inventory and tier each use case by risk",
          body: "Catalogue every model in production and procurement — including third-party APIs, embedded vendor features and shadow GenAI tools. For each, capture purpose, data inputs, decision impact, human-oversight model and target users. Tier use cases (low / medium / high / unacceptable) using the IMDA Model AI Governance Framework's risk-impact matrix, factoring severity, probability and reversibility. High-tier and customer-facing models drive your AI Verify and MAS FEAT testing scope.",
        },
        {
          title: "2. Stand up board-level governance aligned to the IMDA Model Framework",
          body: "Adopt a written AI policy, RACI and escalation pathway covering internal governance, human-AI decision-making, operations management and stakeholder communication — the four pillars of the IMDA Model AI Governance Framework. Designate an AI governance owner reporting to the board or risk committee, and align documentation to ISO/IEC 42001 so the same evidence supports cross-border audits.",
        },
        {
          title: "3. Run pre-deployment AI impact assessments",
          body: "Before any high-tier model goes live, complete a documented AI impact assessment covering lawful basis, dataset provenance, bias and fairness, explainability, robustness, security, human oversight and downstream user harm. Map findings to controls, residual-risk acceptance, and the specific AI Verify testing modules you will run.",
        },
        {
          title: "4. Test models with the AI Verify toolkit",
          body: "Use the AI Verify open-source testing framework and software toolkit to technically test and process-check AI systems against the eleven internationally recognised AI ethics principles. Run the technical tests (fairness, explainability, robustness, security) for classification and regression models, capture the AI Verify report, and address gaps before launch. Re-run on material model updates and on a defined cadence.",
        },
        {
          title: "5. Layer the Generative AI Model Governance Framework for LLM and foundation-model use",
          body: "For generative AI, extend governance with the nine dimensions of the IMDA / AI Verify Foundation generative AI framework — accountability, data, trusted development, incident reporting, testing and assurance, security, content provenance, safety and alignment, and AI for public good. Embed acceptable-use policies, prompt and output logging, deepfake response playbooks, and vendor due diligence on foundation-model providers.",
        },
        {
          title: "6. Apply MAS FEAT and Veritas for financial-services use cases",
          body: "Regulated FIs must overlay the MAS FEAT Principles — Fairness, Ethics, Accountability and Transparency — and use the Veritas Initiative methodologies to evidence them, in addition to MAS Notice 655 expectations on technology risk, outsourcing and model risk. Ensure model risk management, vendor governance and customer-impact assessments are documented to MAS supervisory standards.",
        },
        {
          title: "7. Operationalise monitoring, incident response and board reporting",
          body: "Deploy ongoing monitoring for model drift, performance, bias and abuse. Define AI incident categories, escalation thresholds and notification timelines (including any cross-border regulator obligations). Equip the board and audit committee with a recurring AI risk dashboard covering inventory, tier mix, AI Verify status, open issues and incidents.",
        },
        {
          title: "8. Bridge to the EU AI Act, NIST AI RMF and ISO/IEC 42001",
          body: "For Singapore companies placing AI on the EU market or whose AI output is used in the EU, map your Model Framework and AI Verify evidence onto EU AI Act risk classes, conformity assessments, transparency obligations and post-market monitoring. Use the same control set to satisfy the US NIST AI RMF and ISO/IEC 42001 — one programme, multiple jurisdictions.",
        },
      ],
      closing: "Beyond Horizons works with boards, CTOs and General Counsel to operationalise this playbook end-to-end — from AI inventory and AI Verify testing through to MAS FEAT, EU AI Act and ISO/IEC 42001 readiness.",
    }}

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
