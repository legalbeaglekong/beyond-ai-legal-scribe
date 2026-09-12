import PillarPage from "@/components/PillarPage";
import { FileText, Users, Scale, Briefcase, Shield, Calendar } from "lucide-react";

export const employmentFaqs = [
  { question: "What laws govern employment in Singapore?", answer: "The Employment Act is the core statute, supplemented by the Employment of Foreign Manpower Act, Workplace Safety and Health Act, Industrial Relations Act, Retirement and Re-employment Act, and the Tripartite Guidelines issued by MOM, NTUC and SNEF." },
  { question: "Who is covered by the Singapore Employment Act?", answer: "Most employees under a contract of service are covered, including PMETs. Part IV (working hours, rest days, overtime) covers workmen earning up to S$4,500/month and non-workmen earning up to S$2,600/month. Domestic workers, seafarers and statutory board staff are excluded." },
  { question: "What are the rules on termination and notice in Singapore?", answer: "Either party may terminate with the contractual notice period (or payment in lieu). Without contractual notice, statutory minimums apply (1 day to 4 weeks depending on length of service). Wrongful dismissal claims go to the Tripartite Alliance for Dispute Management (TADM) and Employment Claims Tribunal." },
  { question: "How does retrenchment work under MOM guidelines?", answer: "Employers with 10+ employees must notify MOM of retrenchments within 5 working days. The Tripartite Advisory on Managing Excess Manpower recommends fair selection criteria, retrenchment benefits (typically 2 weeks to 1 month per year of service), and meaningful consultation." },
  { question: "What work passes does MOM issue?", answer: "The main categories are Employment Pass (EP), S Pass, Work Permit, Personalised Employment Pass (PEP), Tech.Pass, ONE Pass, EntrePass and Training EP. The Complementarity Assessment Framework (COMPASS) applies to EP applications from September 2023." },
  { question: "Are non-compete clauses enforceable in Singapore?", answer: "Restraint of trade clauses are presumptively unenforceable unless the employer can show a legitimate proprietary interest and that the restraint is reasonable in scope, duration and geography. The 2024 Tripartite Guidelines on Restrictive Covenants further tighten employer practice." },
  { question: "How is workplace harassment and discrimination handled?", answer: "The Protection from Harassment Act (POHA) provides civil and criminal remedies. The Workplace Fairness Legislation (passed 2024 / 2025) prohibits discrimination based on age, nationality, sex, marital status, pregnancy, race, religion, language, disability and mental health." },
  { question: "How does Beyond Horizons support cross-border employment matters?", answer: "We advise on Singapore employment contracts and disputes, plus cross-border issues — TUPE-style transfers, multi-jurisdiction restructurings, executive separations, investigations, work-pass strategy and people-side M&A — partnering with leading employment counsel in the relevant jurisdictions." },
  { question: "What is ONE Pass (AI and Tech), and how does it relate to Tech.Pass?", answer: "ONE Pass (AI and Tech) is a track under Singapore’s Overseas Networks & Expertise (ONE) Pass framework aimed at senior AI and tech talent. Under current MOM announcements, it is intended to replace Tech.Pass from January 2027, with more detail published on MOM’s channels as the launch approaches. Tech.Pass has been administered via EDB; EDB has said it will no longer accept new or renewal Tech.Pass applications from 28 January 2027. Existing Tech.Pass holders can typically stay on their pass until it expires, then consider ONE Pass (AI and Tech) or another suitable work pass. Always confirm dates and criteria on the official MOM and EDB pages before you file." },
  { question: "Can vested ESOP or ESOW count toward the ONE Pass (AI and Tech) salary criterion?", answer: "Under MOM’s March 2026 foreign-workforce factsheet framing, applicants on the ONE Pass (AI and Tech) track may meet the salary criterion through a combination of fixed cash salary and vested non-cash components such as ESOP/ESOW, subject to assessment — often described as a high overall monthly threshold with a minimum fixed cash component. Exact figures, valuation, and renewal rules can change; treat published MOM criteria as the source of truth and get counsel (and often mobility/tax input) before you rely on equity to qualify." },
  { question: "What should Singapore employers do before Tech.Pass sunsets?", answer: "Map who is on Tech.Pass or who you planned to hire on Tech.Pass. Diarise the January 2027 / late-January 2027 transition points. Compare ONE Pass (AI and Tech), Employment Pass (including COMPASS), and other options against role, salary mix, and family needs. Align offer letters and equity paperwork early if you expect non-cash components to matter. Employment counsel helps on contracts, pass strategy, and risk; pass filing is often handled with a MOM-licensed agency — the two roles are different." },
  { question: "When should we use employment counsel versus a MOM-licensed employment agency?", answer: "Agencies typically lead pass preparation and filing. Counsel is usually the better fit when you need privileged advice on structuring offers, equity and confidentiality, COMPASS or pass strategy trade-offs, Workplace Fairness and investigations, executive exits, or multi-country employment risk. Many growth companies use both: agency for filing mechanics, counsel for the legal framework around the hire." },
];

const SingaporeEmploymentLawPage = () => (
  <PillarPage
    slug="singapore-employment-law"
    eyebrow="Singapore-anchored · Cross-border Employment"
    h1="Singapore & Cross-border Employment Law — Counsel for Employers and Executives"
    intro="From MOM compliance and work-pass strategy to multi-jurisdiction restructurings, executive separations and workplace investigations — Singapore-anchored employment counsel for ambitious employers and senior leaders operating across borders."
    badges={["MOM Compliance", "AI Use Policy in HR decision making", "Executive Separations & Investigations"]}
    metaTitle="Singapore Employment Law Counsel | Work Passes, ONE Pass & MOM | Beyond Horizons"
    metaDescription="Singapore-anchored employment counsel for employers — MOM compliance, EP/COMPASS, ONE Pass (AI and Tech) transition from Tech.Pass, Workplace Fairness, and cross-border exits. Schedule a consultation."
    ogTitle="Employment Law — Singapore-anchored, Cross-border Counsel"
    ogDescription="MOM compliance, work passes, terminations, retrenchments, restrictive covenants, and cross-border workforce strategy from Singapore."
    breadcrumbName="Singapore Employment Law"
    serviceType="Employment Law"
    serviceDescription="Singapore-anchored cross-border employment counsel — MOM compliance, work passes, terminations, retrenchments, executive compensation, and workplace investigations."
    services={[
      { icon: FileText, title: "Employment Contracts & Policies", desc: "Bespoke employment agreements, executive service contracts, handbooks, IP and confidentiality, restrictive covenants aligned with the 2024 Tripartite Guidelines — designed for multi-jurisdiction roll-out." },
      { icon: Users, title: "Work Passes & Global Mobility", desc: "EP, S Pass, ONE Pass and EntrePass strategy — including COMPASS optimisation, dependant arrangements and senior-leader relocation. From 2027, plan for the ONE Pass (AI and Tech) track that replaces Tech.Pass for eligible AI and tech talent (see FAQs)." },
      { icon: Briefcase, title: "Terminations & Retrenchments", desc: "Performance exits, summary dismissals, mutual separations, mass retrenchments and MOM notifications under the Tripartite Advisory on Managing Excess Manpower — coordinated with overseas employment counsel." },
      { icon: Scale, title: "Disputes & Investigations", desc: "Wrongful dismissal, TADM mediation, Employment Claims Tribunal, workplace harassment investigations, and confidential cross-border probes for boards and audit committees." },
      { icon: Shield, title: "Workplace Fairness & Harassment", desc: "Workplace Fairness Act readiness, POHA-compliant grievance handling, anti-discrimination policy design and training for managers across regional offices." },
      { icon: Calendar, title: "M&A and Restructuring People Issues", desc: "Workforce transfers in M&A, harmonisation of terms, equity rollover, change-in-control treatment and post-deal integration — including cross-border carve-outs." },
    ]}
    updates={[
      { title: "Workplace Fairness Legislation", summary: "Singapore's new Workplace Fairness Act introduces statutory protections against discrimination across protected characteristics, plus mandatory grievance handling and tribunal access." },
      { title: "Platform Workers Act in force", summary: "Platform Workers Act extends CPF, work injury compensation and representation rights to ride-hail and delivery platform workers — reshaping the contractor / employee boundary." },
      { title: "COMPASS & EP framework refresh", summary: "MOM continues refining the Complementarity Assessment Framework, salary thresholds and Shortage Occupation List — material for any Singapore hiring plan." },
      { title: "ONE Pass (AI and Tech) replaces Tech.Pass", summary: "From January 2027, MOM’s ONE Pass (AI and Tech) track is intended to replace Tech.Pass for eligible AI and tech talent. EDB has stated it will stop accepting new and renewal Tech.Pass applications from 28 January 2027; existing Tech.Pass holders can usually remain until expiry. Employers should plan pass strategy early — criteria can be updated on MOM/EDB sites." },
    ]}
    faqs={employmentFaqs.map(({ question, answer }) => ({ q: question, a: answer }))}
    relatedKeywords={["employment", "mom", "workforce", "retrenchment", "work pass", "workplace", "labour", "labor", "hr"]}
    relatedHeading="Related Insights — Employment & Workforce"
    ctaHeading="Schedule an Employment Law Consultation"
    ctaBody="Whether you are restructuring a regional workforce, exiting a senior executive, or building a defensible employment framework, our team is ready to help. Book a complimentary strategic consultation."
    exploreLink={{ label: "Explore our Employment Practice", to: "/expertise/employment-labor" }}
    lastUpdatedISO="2026-09-12"
    lastUpdatedLabel="September 2026"
  />
);

export default SingaporeEmploymentLawPage;
