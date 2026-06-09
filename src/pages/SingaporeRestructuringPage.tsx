import PillarPage from "@/components/PillarPage";
import { FileText, Scale, Shield, Briefcase, Users, Calendar } from "lucide-react";

const SingaporeRestructuringPage = () => (
  <PillarPage
    slug="singapore-restructuring-insolvency"
    eyebrow="Singapore-anchored · Cross-border Restructuring"
    h1="Restructuring & Insolvency — Singapore-anchored, Cross-border Counsel"
    intro="Schemes of arrangement, judicial management, cross-border recognition under the UNCITRAL Model Law, and pre-insolvency planning. Singapore is Asia's pre-eminent restructuring hub — we anchor matters here and coordinate cross-border with US, UK, Hong Kong and offshore counsel for boards, sponsors and creditors."
    badges={["Scheme of Arrangement", "Judicial Management", "Cross-border (Model Law)"]}
    metaTitle="Singapore Restructuring & Insolvency Lawyer | Beyond Horizons"
    metaDescription="Singapore restructuring & insolvency counsel: schemes of arrangement, judicial management, IRDA, cross-border recognition, distressed M&A and director duties."
    ogTitle="Singapore Restructuring & Insolvency — Schemes, JM, Cross-border"
    ogDescription="Pragmatic Singapore restructuring counsel under the Insolvency, Restructuring and Dissolution Act for boards, sponsors and creditors."
    breadcrumbName="Singapore Restructuring & Insolvency"
    serviceType="Restructuring and Insolvency Law"
    serviceDescription="Singapore restructuring and insolvency counsel under IRDA 2018 — schemes of arrangement, judicial management, cross-border recognition, distressed M&A, director-duty advisory."
    services={[
      { icon: FileText, title: "Schemes of Arrangement", desc: "Pre-pack and standalone schemes under IRDA Part 5 — class composition, moratoria, super-priority rescue financing, and cram-down strategy." },
      { icon: Shield, title: "Judicial Management", desc: "JM applications and exits, interim JM, creditor engagement and statutory moratorium strategy for distressed corporates and groups." },
      { icon: Scale, title: "Cross-border Insolvency", desc: "Recognition of foreign proceedings under Singapore's UNCITRAL Model Law adoption (IRDA Third Schedule), COMI strategy and parallel proceedings coordination." },
      { icon: Briefcase, title: "Distressed M&A & Special Situations", desc: "Loan-to-own, credit bidding, S363-equivalent sales out of JM, NPL portfolio acquisitions and distressed financing." },
      { icon: Users, title: "Director Duties & Wrongful Trading", desc: "Real-time advice to boards on solvency thresholds, wrongful trading, fraudulent trading and safe-harbour conduct as solvency deteriorates." },
      { icon: Calendar, title: "Creditor Strategy & Enforcement", desc: "Senior, mezzanine and bond-holder representation in workouts, intercreditor disputes, security enforcement and contentious insolvency." },
    ]}
    updates={[
      { title: "Singapore as Asia's restructuring hub", summary: "Singapore continues to attract complex regional restructurings — including airline, real-estate, energy and commodities mandates — anchored by IRDA's Chapter-11-inspired toolkit." },
      { title: "Super-priority financing maturing", summary: "Section 67 IRDA super-priority rescue financing is now a routine feature of large schemes, with creditor and court practice rapidly aligning to global DIP norms." },
      { title: "Cross-border recognition active", summary: "Model Law recognition orders out of Singapore are being used in coordinated parallel proceedings with the US, UK, Hong Kong and offshore jurisdictions." },
    ]}
    faqs={[
      { q: "What is a scheme of arrangement in Singapore?", a: "A scheme is a court-supervised compromise between a company and its creditors (or members), governed by Sections 71–73 IRDA. It binds dissenting creditors within a class once approved by a majority in number representing 75% in value and sanctioned by the court. Singapore's regime offers world-class features including automatic moratorium, super-priority rescue financing and cross-class cram-down." },
      { q: "How does judicial management work?", a: "JM is a court-driven rescue process under IRDA Part 7. A judicial manager (an independent insolvency practitioner) takes over management to rehabilitate the company or achieve a better realisation than winding-up. Interim JM is available for urgent protection." },
      { q: "What is the IRDA?", a: "The Insolvency, Restructuring and Dissolution Act 2018 (in force from 30 July 2020) consolidates Singapore's personal and corporate insolvency regimes, modernises rescue tools and adopts the UNCITRAL Model Law on Cross-Border Insolvency." },
      { q: "Can foreign insolvency proceedings be recognised in Singapore?", a: "Yes. Singapore has adopted the UNCITRAL Model Law via IRDA's Third Schedule. Foreign representatives can apply for recognition of foreign main and non-main proceedings, with corresponding relief including stays and asset protection." },
      { q: "What are directors' duties when a company is in financial distress?", a: "As solvency deteriorates, directors' fiduciary duties shift to take creditor interests into account. Directors may face personal liability for wrongful trading (Section 239 IRDA) and fraudulent trading (Section 238 IRDA). Early, documented advice is critical." },
      { q: "How do super-priority rescue financings work in Singapore?", a: "Under Section 67 IRDA, courts can grant priority — including ahead of existing secured creditors in some cases — to new rescue financing extended during scheme proceedings, modelled on US Chapter 11 DIP financing. This is a key tool for distressed sponsors and credit funds." },
      { q: "What is the typical timeline for a Singapore scheme?", a: "A pre-packaged scheme can complete in as little as 4–8 weeks if creditor support is already in place. A contested scheme typically runs 4–9 months from moratorium application through court sanction." },
      { q: "How does Beyond Horizons support restructuring matters?", a: "We advise companies, boards, lenders, bondholders and sponsors on Singapore restructurings — from early solvency analysis and lender negotiations to scheme/JM execution, cross-border recognition and post-restructuring operating model design." },
    ]}
    relatedKeywords={["restructuring", "insolvency", "scheme", "judicial management", "irda", "distressed", "workout", "creditor", "default"]}
    relatedHeading="Related Insights — Restructuring & Insolvency"
    ctaHeading="Schedule a Singapore Restructuring Consultation"
    ctaBody="If you are facing covenant pressure, contemplating a scheme, or evaluating a distressed opportunity, we can help you move quickly and decisively. Book a complimentary strategic consultation."
    exploreLink={{ label: "Explore our Practice", to: "/expertise" }}
    lastUpdatedISO="2026-06-09"
    lastUpdatedLabel="June 2026"
  />
);

export default SingaporeRestructuringPage;
