import PillarPage from "@/components/PillarPage";
import { Plane, FileText, Scale, Briefcase, Shield, Calendar } from "lucide-react";

const SingaporeAviationLawPage = () => (
  <PillarPage
    slug="singapore-aviation-law"
    eyebrow="Singapore · Aviation & Aerospace"
    h1="Singapore Aviation Law — Aircraft, Leasing and Regulatory Counsel"
    intro="Singapore is one of Asia's leading aircraft leasing, MRO and aerospace hubs. We advise airlines, lessors, financiers, MROs and aerospace innovators on CAAS regulation, Cape Town, leasing structures, sustainable aviation fuel (SAF) and advanced air mobility."
    badges={["CAAS Regulatory", "Cape Town & Leasing", "SAF & Advanced Air Mobility"]}
    metaTitle="Singapore Aviation Lawyer — CAAS, Leasing, SAF | Beyond Horizons"
    metaDescription="Singapore aviation counsel: CAAS regulation, aircraft leasing (Cape Town), aircraft finance, SAF, advanced air mobility, MRO and aerospace M&A."
    ogTitle="Singapore Aviation Law — Leasing, Finance & Aerospace Innovation"
    ogDescription="Sophisticated Singapore aviation counsel for airlines, lessors, financiers, MROs and aerospace innovators."
    breadcrumbName="Singapore Aviation Law"
    serviceType="Aviation and Aerospace Law"
    serviceDescription="Singapore aviation and aerospace legal counsel — CAAS regulation, aircraft leasing under Cape Town, aircraft finance, SAF, advanced air mobility and aerospace M&A."
    services={[
      { icon: Plane, title: "Aircraft Leasing & Finance", desc: "Operating and finance leases, sale-and-leaseback, JOLCO, ABS, pre-delivery payment financing, novations and Cape Town registrations through Singapore." },
      { icon: FileText, title: "CAAS Regulation & Approvals", desc: "Air Operator Certification, foreign operator permits, aircraft registration, airworthiness, drone (UAS) operator permits and OB-1 unmanned aircraft frameworks." },
      { icon: Scale, title: "Cape Town Convention", desc: "International registry filings, IDERA, priority strategy and enforcement of international interests in aircraft objects via Singapore's Cape Town implementation." },
      { icon: Briefcase, title: "MRO, Aerospace M&A & JVs", desc: "Aerospace manufacturing JVs, MRO acquisitions and disposals, technology licensing, and Seletar Aerospace Park structuring." },
      { icon: Shield, title: "Sustainable Aviation Fuel (SAF)", desc: "SAF offtake and supply, Singapore's SAF levy framework (from 2026), CORSIA, book-and-claim systems, and green financing for sustainable aviation." },
      { icon: Calendar, title: "Advanced Air Mobility & eVTOL", desc: "Vertiport development, eVTOL operator licensing, drone delivery commercialisation, airspace integration and product-liability allocation." },
    ]}
    updates={[]}
    faqs={[
      { q: "Who regulates aviation in Singapore?", a: "The Civil Aviation Authority of Singapore (CAAS) is the primary regulator, covering aerodromes (Changi, Seletar), airspace, airworthiness, operator certification, drones (UAS) and SAF. The Ministry of Transport sets policy and Singapore is a contracting state to ICAO." },
      { q: "Has Singapore ratified the Cape Town Convention?", a: "Yes. Singapore acceded to the Cape Town Convention and Aircraft Protocol with effect from 1 September 2009. Singapore-registered aircraft objects benefit from international interest priority, IDERA and the Alternative A insolvency regime — making it a leading jurisdiction for aircraft leasing and finance in Asia." },
      { q: "What is Singapore's SAF mandate?", a: "Singapore announced a SAF target of 1% of jet fuel uplift by 2026, supported by a SAF levy on departing passengers. The framework will progressively scale, and CAAS is consulting on operational and book-and-claim mechanisms." },
      { q: "How are drones regulated in Singapore?", a: "Drones (Unmanned Aircraft) are regulated under the Air Navigation Act and CAAS's UAS framework. Operators need Operator Permits, Activity Permits and Pilot Licences depending on weight class and operating context. Beyond Visual Line of Sight (BVLOS) operations require additional approvals." },
      { q: "Is Singapore a good base for aircraft leasing?", a: "Yes. Singapore offers a Cape Town-compliant regime, the Aircraft Leasing Scheme (concessionary 8% tax rate, GST/withholding tax exemptions), a deep aviation finance ecosystem and English-language common-law contracting." },
      { q: "What licensing applies to eVTOLs and advanced air mobility?", a: "CAAS has been engaged on type certification reciprocity and operator frameworks for eVTOL platforms. Vertiport development implicates urban planning, BCA, USS, and airspace coordination. Singapore is positioning to be an early commercial AAM market." },
      { q: "How does Beyond Horizons support aviation clients?", a: "We advise airlines, lessors, financiers, MROs and aerospace innovators on regulatory strategy, leasing and finance, M&A and JV formation, SAF commercial frameworks, and advanced air mobility commercialisation in Singapore and across ASEAN." },
    ]}
    relatedKeywords={["aviation", "aircraft", "lessor", "caas", "saf", "cape town", "evtol", "drone", "uas", "aerospace"]}
    relatedHeading="Related Insights — Aviation & Aerospace"
    ctaHeading="Schedule a Singapore Aviation Consultation"
    ctaBody="Whether you are placing a Singapore lease, building a SAF offtake, or launching an advanced air mobility venture, we can help you structure and execute. Book a complimentary strategic consultation."
    exploreLink={{ label: "Explore our Aviation Practice", to: "/industry/aviation" }}
    lastUpdatedISO="2026-06-09"
    lastUpdatedLabel="June 2026"
  />
);

export default SingaporeAviationLawPage;
