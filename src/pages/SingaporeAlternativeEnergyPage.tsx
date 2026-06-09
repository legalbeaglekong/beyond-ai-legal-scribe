import PillarPage from "@/components/PillarPage";
import { Zap, FileText, Scale, Briefcase, Shield, Calendar } from "lucide-react";

const SingaporeAlternativeEnergyPage = () => (
  <PillarPage
    slug="singapore-alternative-energy-law"
    eyebrow="Singapore · Alternative & Renewable Energy"
    h1="Singapore Alternative Energy Law — Solar, Hydrogen, Imports and Storage"
    intro="Singapore's energy transition is import-led, hydrogen-curious and grid-constrained. We advise developers, financiers, offtakers and corporates on EMA-regulated electricity imports, solar PV, low-carbon hydrogen and ammonia, BESS, and Article 6 carbon credits."
    badges={["Electricity Imports", "Hydrogen & Ammonia", "BESS & Solar"]}
    metaTitle="Singapore Renewable Energy Lawyer — Imports, Hydrogen | Beyond Horizons"
    metaDescription="Singapore alternative energy counsel: cross-border electricity imports (EMA), solar PV, hydrogen/ammonia, BESS, Article 6 carbon credits and green project finance."
    ogTitle="Singapore Alternative Energy Law — Transition Infrastructure & Finance"
    ogDescription="Specialist Singapore energy-transition counsel for developers, financiers, offtakers and corporates."
    breadcrumbName="Singapore Alternative Energy Law"
    serviceType="Energy and Infrastructure Law"
    serviceDescription="Singapore alternative and renewable energy legal counsel — electricity imports, solar PV, hydrogen and ammonia, BESS, REC frameworks and Article 6 carbon."
    services={[
      { icon: Zap, title: "Cross-border Electricity Imports", desc: "EMA's regional electricity import programme, conditional approvals, transmission and interconnection arrangements, PPAs and risk allocation for Lao/Indonesia/Malaysia/Cambodia/Vietnam pathways." },
      { icon: FileText, title: "Solar PV & Distributed Energy", desc: "Rooftop and floating solar PPAs, SolarNova-style tenders, embedded generation, REC/I-REC origination and corporate offtake structuring." },
      { icon: Scale, title: "Hydrogen, Ammonia & Low-carbon Fuels", desc: "Hydrogen import frameworks, ammonia bunkering and co-firing, offtake structuring and Singapore's National Hydrogen Strategy implementation." },
      { icon: Briefcase, title: "Battery Energy Storage (BESS)", desc: "BESS deployment under EMA's frameworks, ancillary services participation, safety standards (e.g. UL 9540A), insurance, and grid services agreements." },
      { icon: Shield, title: "Carbon, RECs & Article 6", desc: "Singapore's carbon tax regime, eligible international carbon credits (Article 6), corresponding adjustments, host-country MoUs and REC/I-REC instruments." },
      { icon: Calendar, title: "Green & Transition Finance", desc: "Green/transition bonds and loans, Singapore-Asia Taxonomy alignment, sustainability-linked structures and MAS green-finance programmes." },
    ]}
    updates={[]}
    faqs={[
      { q: "Who regulates energy in Singapore?", a: "The Energy Market Authority (EMA) is the primary regulator of electricity and gas markets and the electricity import programme. The National Climate Change Secretariat (NCCS) leads climate policy, and MAS leads green-finance taxonomy and supervision." },
      { q: "What is Singapore's electricity import target?", a: "Singapore aims to import up to 6 GW of low-carbon electricity by 2035, equivalent to roughly one-third of its projected supply. EMA has issued conditional approvals to multiple projects spanning Cambodia, Indonesia, Vietnam, Lao PDR and Australia (Sun Cable)." },
      { q: "How is hydrogen treated under Singapore law?", a: "Singapore's National Hydrogen Strategy (2022) targets hydrogen for up to half of Singapore's power needs by 2050. Existing frameworks rely on adapted gas, fuel, port and safety regulation; bespoke hydrogen-specific licensing is evolving through EMA and MPA." },
      { q: "What is Singapore's carbon tax?", a: "Singapore's carbon tax applies to facilities emitting 25,000 tCO2e or more annually. The headline rate is S$25/tCO2e for 2024–2025, rising to S$45/tCO2e in 2026–2027 and S$50–80/tCO2e by 2030. Up to 5% of taxable emissions may be offset using eligible international carbon credits." },
      { q: "Can companies in Singapore buy renewable energy?", a: "Yes — through corporate PPAs (physical or virtual), REC/I-REC purchases, embedded solar PPAs and Open Electricity Market retailer green plans. Larger corporates are increasingly anchoring physical PPAs with floating-solar and import projects." },
      { q: "What are eligible Article 6 carbon credits?", a: "Singapore has signed Article 6.2 Implementation Agreements with multiple host countries (Papua New Guinea, Ghana, Bhutan, Paraguay, etc.). Eligible credits must come from authorised projects with corresponding adjustments and meet Singapore's Eligibility Criteria." },
      { q: "How does Beyond Horizons support energy-transition clients?", a: "We advise developers, financiers, offtakers and corporates on Singapore-anchored renewables, imports, hydrogen, BESS, carbon and green finance — including cross-border structuring, regulatory engagement and contracting." },
    ]}
    relatedKeywords={["energy", "renewable", "solar", "hydrogen", "ammonia", "ema", "bess", "battery", "carbon", "article 6", "transition"]}
    relatedHeading="Related Insights — Alternative & Renewable Energy"
    ctaHeading="Schedule a Singapore Energy Transition Consultation"
    ctaBody="Whether you are bidding for an import allocation, structuring an offtake, or anchoring a hydrogen project, we can help. Book a complimentary strategic consultation."
    exploreLink={{ label: "Explore our Energy Practice", to: "/industry/energy-transition" }}
    lastUpdatedISO="2026-06-09"
    lastUpdatedLabel="June 2026"
  />
);

export default SingaporeAlternativeEnergyPage;
