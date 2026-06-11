import PillarPage from "@/components/PillarPage";
import { FileText, Users, Scale, Briefcase, Shield, Calendar } from "lucide-react";

const SingaporeEmploymentLawPage = () => (
  <PillarPage
    slug="singapore-employment-law"
    eyebrow="Singapore-anchored · Cross-border Employment"
    h1="Singapore & Cross-border Employment Law — Counsel for Employers and Executives"
    intro="From MOM compliance and work-pass strategy to multi-jurisdiction restructurings, executive separations and workplace investigations — Singapore-anchored employment counsel for ambitious employers and senior leaders operating across borders."
    badges={["MOM Compliance", "AI Use Policy in HR decision making", "Executive Separations & Investigations"]}
    metaTitle="Singapore & Cross-border Employment Lawyer | Beyond Horizons"
    metaDescription="Singapore-anchored, cross-border employment counsel: Employment Act, MOM, work passes (EP/COMPASS), retrenchments, restrictive covenants, workplace fairness and executive disputes."
    ogTitle="Employment Law — Singapore-anchored, Cross-border Counsel"
    ogDescription="MOM compliance, work passes, terminations, retrenchments, restrictive covenants, and cross-border workforce strategy from Singapore."
    breadcrumbName="Singapore Employment Law"
    serviceType="Employment Law"
    serviceDescription="Singapore-anchored cross-border employment counsel — MOM compliance, work passes, terminations, retrenchments, executive compensation, and workplace investigations."
    services={[
      { icon: FileText, title: "Employment Contracts & Policies", desc: "Bespoke employment agreements, executive service contracts, handbooks, IP and confidentiality, restrictive covenants aligned with the 2024 Tripartite Guidelines — designed for multi-jurisdiction roll-out." },
      { icon: Users, title: "Work Passes & Global Mobility", desc: "EP, S Pass, Tech.Pass, ONE Pass and EntrePass strategy — including COMPASS optimisation, dependant arrangements and senior-leader relocation across the region." },
      { icon: Briefcase, title: "Terminations & Retrenchments", desc: "Performance exits, summary dismissals, mutual separations, mass retrenchments and MOM notifications under the Tripartite Advisory on Managing Excess Manpower — coordinated with overseas employment counsel." },
      { icon: Scale, title: "Disputes & Investigations", desc: "Wrongful dismissal, TADM mediation, Employment Claims Tribunal, workplace harassment investigations, and confidential cross-border probes for boards and audit committees." },
      { icon: Shield, title: "Workplace Fairness & Harassment", desc: "Workplace Fairness Act readiness, POHA-compliant grievance handling, anti-discrimination policy design and training for managers across regional offices." },
      { icon: Calendar, title: "M&A and Restructuring People Issues", desc: "Workforce transfers in M&A, harmonisation of terms, equity rollover, change-in-control treatment and post-deal integration — including cross-border carve-outs." },
    ]}
    updates={[
      { title: "Workplace Fairness Legislation", summary: "Singapore's new Workplace Fairness Act introduces statutory protections against discrimination across protected characteristics, plus mandatory grievance handling and tribunal access." },
      { title: "Platform Workers Act in force", summary: "Platform Workers Act extends CPF, work injury compensation and representation rights to ride-hail and delivery platform workers — reshaping the contractor / employee boundary." },
      { title: "COMPASS & EP framework refresh", summary: "MOM continues refining the Complementarity Assessment Framework, salary thresholds and Shortage Occupation List — material for any Singapore hiring plan." },
    ]}
    faqs={[
      { q: "What laws govern employment in Singapore?", a: "The Employment Act is the core statute, supplemented by the Employment of Foreign Manpower Act, Workplace Safety and Health Act, Industrial Relations Act, Retirement and Re-employment Act, and the Tripartite Guidelines issued by MOM, NTUC and SNEF." },
      { q: "Who is covered by the Singapore Employment Act?", a: "Most employees under a contract of service are covered, including PMETs. Part IV (working hours, rest days, overtime) covers workmen earning up to S$4,500/month and non-workmen earning up to S$2,600/month. Domestic workers, seafarers and statutory board staff are excluded." },
      { q: "What are the rules on termination and notice in Singapore?", a: "Either party may terminate with the contractual notice period (or payment in lieu). Without contractual notice, statutory minimums apply (1 day to 4 weeks depending on length of service). Wrongful dismissal claims go to the Tripartite Alliance for Dispute Management (TADM) and Employment Claims Tribunal." },
      { q: "How does retrenchment work under MOM guidelines?", a: "Employers with 10+ employees must notify MOM of retrenchments within 5 working days. The Tripartite Advisory on Managing Excess Manpower recommends fair selection criteria, retrenchment benefits (typically 2 weeks to 1 month per year of service), and meaningful consultation." },
      { q: "What work passes does MOM issue?", a: "The main categories are Employment Pass (EP), S Pass, Work Permit, Personalised Employment Pass (PEP), Tech.Pass, ONE Pass, EntrePass and Training EP. The Complementarity Assessment Framework (COMPASS) applies to EP applications from September 2023." },
      { q: "Are non-compete clauses enforceable in Singapore?", a: "Restraint of trade clauses are presumptively unenforceable unless the employer can show a legitimate proprietary interest and that the restraint is reasonable in scope, duration and geography. The 2024 Tripartite Guidelines on Restrictive Covenants further tighten employer practice." },
      { q: "How is workplace harassment and discrimination handled?", a: "The Protection from Harassment Act (POHA) provides civil and criminal remedies. The Workplace Fairness Legislation (passed 2024 / 2025) prohibits discrimination based on age, nationality, sex, marital status, pregnancy, race, religion, language, disability and mental health." },
      { q: "How does Beyond Horizons support cross-border employment matters?", a: "We advise on Singapore employment contracts and disputes, plus cross-border issues — TUPE-style transfers, multi-jurisdiction restructurings, executive separations, investigations, work-pass strategy and people-side M&A — partnering with leading employment counsel in the relevant jurisdictions." },
    ]}
    relatedKeywords={["employment", "mom", "workforce", "retrenchment", "work pass", "workplace", "labour", "labor", "hr"]}
    relatedHeading="Related Insights — Employment & Workforce"
    ctaHeading="Schedule an Employment Law Consultation"
    ctaBody="Whether you are restructuring a regional workforce, exiting a senior executive, or building a defensible employment framework, our team is ready to help. Book a complimentary strategic consultation."
    exploreLink={{ label: "Explore our Employment Practice", to: "/expertise/employment-labor" }}
    lastUpdatedISO="2026-06-09"
    lastUpdatedLabel="June 2026"
  />
);

export default SingaporeEmploymentLawPage;
