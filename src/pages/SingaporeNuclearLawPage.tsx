import PillarPage from "@/components/PillarPage";
import { Shield, FileText, Scale, Briefcase, Users, Calendar } from "lucide-react";

const SingaporeNuclearLawPage = () => (
  <PillarPage
    slug="singapore-nuclear-law"
    eyebrow="Singapore-anchored · Cross-border Nuclear & SMR"
    h1="Nuclear & SMR Advisory — Singapore-anchored, Cross-border Counsel"
    intro="Singapore does not (yet) operate civil nuclear power, but as ASEAN evaluates small modular reactors (SMRs), advanced reactors, nuclear-adjacent financing and Article 6 carbon-credit pathways, we provide Singapore-anchored counsel coordinated with leading nuclear specialists in the US, UK, Canada, France, Japan, Korea and the host jurisdictions."
    badges={["SMR & Advanced Reactors", "Nuclear Financing", "Article 6 / Carbon"]}
    metaTitle="Singapore Nuclear Law & SMR Advisory | Beyond Horizons"
    metaDescription="Singapore-based nuclear & SMR legal advisory: cross-border project structuring, financing, liability conventions, ASEAN deployment, fuel cycle, Article 6 pathways."
    ogTitle="Singapore Nuclear Law — SMRs, Financing & Cross-border Advisory"
    ogDescription="Sophisticated Singapore-based nuclear counsel for SMR investors, financiers, offtakers and ASEAN deployment partners."
    breadcrumbName="Singapore Nuclear Law"
    serviceType="Nuclear and Energy Law"
    serviceDescription="Singapore-based nuclear and SMR legal advisory across project structuring, financing, regulatory liaison, third-party liability and ASEAN deployment pathways."
    services={[
      { icon: Shield, title: "Regulatory & Licensing Strategy", desc: "Liaison-level advisory on host-country licensing (US NRC, UK ONR, Canada CNSC) and ASEAN regulators considering SMR deployment frameworks." },
      { icon: FileText, title: "Third-party Liability & Conventions", desc: "Advisory on Paris/Brussels, Vienna and CSC nuclear liability conventions, channelling, indemnity structures and insurance pool engagement." },
      { icon: Scale, title: "Project Structuring & Contracts", desc: "EPC, BOP, fuel supply, O&M, and PPA structuring for SMR and advanced reactor projects with Singapore-incorporated SPVs and offtake vehicles." },
      { icon: Briefcase, title: "Nuclear Financing & ECA Support", desc: "Limited-recourse project finance, ECA coverage, multilateral support, green/transition bond structuring and Singapore-based fund formation." },
      { icon: Users, title: "JV, M&A and Technology Licensing", desc: "Vendor JVs, technology licensing, IP and export-control compliance, FDI screening, and consortium formation for ASEAN SMR bids." },
      { icon: Calendar, title: "Article 6 & Clean-energy Credits", desc: "Structuring ITMOs and carbon-credit offtake from nuclear baseload, host-country authorisation, and corresponding adjustments under Paris Article 6." },
    ]}
    updates={[]}
    faqs={[
      { q: "Does Singapore have nuclear power?", a: "No. Singapore does not currently operate civil nuclear power. A 2012 pre-feasibility study concluded that then-available technologies were not suitable for Singapore. However, Singapore has stated it is studying advanced reactor and SMR technology as part of its long-term energy mix and net-zero pathway." },
      { q: "What is Singapore's role in regional nuclear development?", a: "Singapore is a key financing, structuring, fuel-trading and offtake hub for nuclear projects deployed elsewhere in ASEAN. Indonesia, the Philippines and Vietnam are advancing SMR programmes, and many vendors, financiers and offtakers will route capital, contracts and dispute resolution through Singapore." },
      { q: "What are SMRs?", a: "Small Modular Reactors are advanced nuclear reactors typically below 300 MWe, designed for factory fabrication, modular deployment, enhanced passive safety and shorter build cycles. Leading designs include light-water SMRs, high-temperature gas reactors and molten-salt reactors." },
      { q: "What international nuclear conventions are relevant?", a: "The principal civil-liability instruments are the Paris Convention (+ Brussels Supplementary), the Vienna Convention, and the Convention on Supplementary Compensation (CSC). Most ASEAN states are not yet party, which creates bespoke contractual-channelling and insurance challenges." },
      { q: "Can nuclear projects access green finance and Article 6?", a: "Yes — increasingly. The EU Taxonomy admits nuclear under conditions; multilateral development banks are revisiting nuclear exclusions; and Article 6.2 of the Paris Agreement allows nuclear-derived ITMOs subject to host-country authorisation and corresponding adjustments." },
      { q: "How does export control affect nuclear technology?", a: "Nuclear, dual-use and Part 810 (US) / Trigger List (NSG) controls govern technology transfer, training and software. Cross-border SMR projects require careful authorisation strategy, end-use certificates and ongoing compliance." },
      { q: "What advisory does Beyond Horizons provide?", a: "We act for Singapore-based and Singapore-routed clients — vendors, sponsors, ECAs, lenders, offtakers and ministries — on regulatory strategy, project structuring, nuclear financing, liability allocation, JV/M&A, and Article 6 carbon pathways. We coordinate with leading nuclear specialists in host jurisdictions." },
    ]}
    relatedKeywords={["nuclear", "smr", "reactor", "energy", "asean", "article 6", "carbon"]}
    relatedHeading="Related Insights — Nuclear, SMR & Energy"
    ctaHeading="Schedule a Nuclear & SMR Consultation"
    ctaBody="Whether you are evaluating an ASEAN SMR opportunity, structuring nuclear financing, or designing Article 6 offtake from baseload nuclear, we can help. Book a complimentary strategic consultation."
    exploreLink={{ label: "Explore our Practice", to: "/expertise" }}
    lastUpdatedISO="2026-06-09"
    lastUpdatedLabel="June 2026"
  />
);

export default SingaporeNuclearLawPage;
