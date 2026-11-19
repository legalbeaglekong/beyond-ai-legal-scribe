import IndustryPageLayout, { type IndustryPageData } from "@/components/IndustryPageLayout";
import { Heart, Cpu, Shield, Smartphone, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const data: IndustryPageData = {
  slug: "wellness-health",
  seo: { title: "Singapore Clinics: Licensing, Advertising, Sales | Beyond Horizons", description: "Notes for Singapore clinic owners and groups on HCSA licensing, MOH advertising rules, leases, doctor contracts, patient data and clinic sales." },
  consultHref: "https://wa.me/6597265330?text=Enquiry%20via%20beyondhorizons.sg%2Findustry%2Fwellness-health",
  hero: {
    entity: "Beyond Horizons by Bethel Chambers LLC",
    title: "Singapore clinics: licensing, advertising, contracts and transactions",
    subtitle: "From 1 November 2026, the Health Sciences Authority administers clinic licensing under the Healthcare Services Act 2020. A Singapore clinic usually needs the right licence, compliant advertising, lawful handling of patient data and contracts that hold when circumstances change. Beyond Horizons, part of Bethel Chambers LLC, advises clinic owners and groups on these matters.",
    emailCta: "HL@beyondhorizons.sg?subject=Enquiry%20via%20beyondhorizons.sg%2Findustry%2Fwellness-health",
    ctaLine: "Please don't send confidential details until we confirm we can act for you.",
    badges: ["Healthcare Services Act 2020", "Patient data protection", "Clinic sales and partnerships"],
  },
  intro: {
    paragraphs: [
      "From 1 November 2026, the Health Sciences Authority (HSA) is the agency responsible for administration, licensing, inspections, audits and enforcement functions related to the licensing and approval of healthcare services under the Healthcare Services Act 2020 (HCSA), according to the official HCSA licensing website (updated 5 November 2026). Licensing of clinics therefore now runs through HSA, while the licensing, advertising and governance requirements of the HCSA and its regulations continue to apply.",
      "A clinic in Singapore usually needs the right licence under the HCSA, advertising that complies with the rules made under it, patient data handling that meets the Personal Data Protection Act 2012 (PDPA), and leases, doctor contracts and shareholder agreements that continue to work when circumstances change. Beyond Horizons advises clinic owners, doctor-founders, investors and clinic groups on these matters under Singapore law. It does not advise on the law of other jurisdictions, and it does not give medical or clinical advice.",
    ],
    note: "This page addresses Singapore law as at 18 November 2026. It does not cover the rules of other jurisdictions, and the current position should be checked for each matter.",
  },
  overview: {
    heading: "Which legal questions arise most often for Singapore clinic owners?",
    intro: <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Four areas account for most questions: licensing under the HCSA, advertising and websites, contracts with doctors, staff and locums, and patient data under the PDPA. Each is summarised below. Leases, clinic sales and ongoing support for clinic groups follow in the sections after that, with a Next steps list and frequently asked questions at the end.</p>,
    services: [
      { icon: Shield, title: "Licensing under the HCSA", description: "The licence and mode of service delivery depend on the services offered. Key appointment holders and the Clinical Governance Officer must meet the HCSA requirements, and changes to premises, services or people usually require notice to the regulator.", bullets: ["Outpatient medical and dental service licences, including teleconsultation and house calls", "Clinical Governance Officer approval and changes in key appointment holders", "New premises, added services and the notice periods that apply"] },
      { icon: Smartphone, title: "Advertising and websites", description: "Websites, social media posts and campaigns are subject to the Healthcare Services (Advertisement) Regulations 2021, which apply to advertisements that people in Singapore can access.", bullets: ["Before-and-after photographs, testimonials and superlatives", "Aesthetic and wellness claims and their substantiation", "Agency and influencer arrangements"] },
      { icon: Heart, title: "Doctors, staff and locums", description: "Employment contracts, locum and sessional agreements and fee arrangements need to sit with the Singapore Medical Council's ethical rules on fee-sharing (2016 edition, as at 18 November 2026).", bullets: ["Doctor, locum and sessional agreements", "Restraint of trade and non-solicitation of patients and staff", "Misconduct, retrenchment and exits"] },
      { icon: Cpu, title: "Patient data and systems", description: "Patient records, clinic software, outsourced IT and marketing lists all engage the PDPA, including its data breach notification obligation.", bullets: ["Notification, consent and access requests", "Software, cloud and outsourcing contracts", "Data breach assessment and notification"] },
    ],
  },
  orgRef: true,
  pageSchema: [
    {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://beyondhorizons.sg/"}, {"@type": "ListItem", "position": 2, "name": "Health & wellness clinics", "item": "https://beyondhorizons.sg/industry/wellness-health"}]},
  ],
  contentSections: [
    {
      heading: "What should a clinic check before signing a lease?",
      paragraphs: [
        "A clinic should check that the premises qualify for clinic use and that the lease timetable fits the licence timetable. A lease signed too early may commit the clinic to rent for space it cannot yet use, so the rent start date, fit-out, permitted use and assignment rights are usually aligned with the licensing steps.",
        "Before an HCSA licence is applied for in respect of a clinic in commercial space, the Ministry of Health (MOH) asks providers to confirm that the proposal qualifies under the medical use quantum guidelines, which limit how much of a commercial building may be used for clinics. The official HCSA website also asks providers to apply at least two months before the service starts.",
        "A lease signed before these steps are complete may commit the clinic to rent for space that cannot yet be used. The rent start date, fit-out obligations, permitted use, and the right to assign or sublet are therefore usually aligned with the licence timetable.",
      ],
    },
    {
      heading: "What changes when a clinic is bought, sold or takes in partners?",
      paragraphs: [
        "The licensing route changes with the deal structure. An HCSA licence cannot be transferred without a licence condition and the written consent of the Director-General of Health, so a share sale and a business sale lead to different steps, timetables and warranties. New partners and investors also engage shareholder agreements and key appointment holder notices.",
        "An HCSA licence cannot be transferred or assigned unless the licence contains a condition allowing it and the Director-General of Health consents in writing (section 16 of the HCSA). The structure of a clinic sale therefore matters: a sale of shares in the company that holds the licence and a sale of the business to a buyer that needs its own licence lead to different licensing steps, timetables and warranties.",
        "Beyond Horizons acts on share and business purchases, shareholder and partnership agreements between doctors and investors, and exits, including the notices that must be given when key appointment holders change.",
      ],
    },
    {
      heading: "How can a clinic group obtain ongoing legal support?",
      paragraphs: [
        "A clinic group without a full-time in-house lawyer can obtain regular legal input through fractional general counsel on a scoped monthly retainer. That arrangement usually covers contract reviews, regulatory questions, staff matters and board papers across several clinics, with the scope and the fee agreed in writing before work begins.",
      ],
      links: [{ to: "/industry/fractional-gc", label: "Fractional general counsel" }, { to: "/singapore-employment-law", label: "Singapore employment law" }],
    },
    {
      heading: "How is a clinic matter scoped and handled?",
      paragraphs: [
        "Each matter starts with a short call and a conflict check. The call covers the clinic, the question and the timing. The scope and the fee are then confirmed in writing before any advice or work begins, so that what is covered, and what is not, is settled at the outset.",
      ],
    },
    {
      heading: "Who is Beyond Horizons?",
      paragraphs: [
        "Beyond Horizons is part of Bethel Chambers LLC, a Singapore law practice. Its Founder is Hui Ling Teo, who is qualified as a solicitor in England and Wales and as an advocate and solicitor in Singapore. Clinic matters are advised on under Singapore law only; medical, clinical and foreign-law questions are outside scope.",
      ],
      links: [{ to: "/about", label: "About Beyond Horizons" }],
    },
  ],
  closing: {
    heading: "Next steps",
    paragraphs: [
      "Clinic owners and groups may wish to consider the following points.",
      "1. Whether each licence, mode of service delivery and Clinical Governance Officer approval matches the services the clinic actually offers, including any teleconsultation.",
      "2. Whether the website, social media accounts and agency arrangements comply with the Healthcare Services (Advertisement) Regulations 2021.",
      "3. Whether leases and fit-out commitments are aligned with the licence timetable and the medical use quantum clearance.",
      "4. Whether doctor, locum, partnership and investor agreements are consistent with the Singapore Medical Council's rules on fee-sharing (2016 edition, as at 18 November 2026).",
      "5. Whether patient data handling, vendor contracts and the data breach response plan meet the PDPA.",
      "6. For a sale or investment, whether the structure has been settled before the price and timetable are agreed.",
    ],
  },
  faqs: {
    heading: "Frequently asked questions from clinic owners",
    items: [
      { question: "Is an HCSA licence needed to open a medical clinic in Singapore?", answer: "In most cases, yes. A provider that examines, assesses, diagnoses or treats outpatients, including a clinic that performs aesthetic procedures, needs an Outpatient Medical Service licence under the Healthcare Services Act 2020 before it offers the service. The official HCSA website asks providers to apply at least two months in advance and, for a clinic in commercial space, to obtain MOH clearance under the medical use quantum guidelines first." },
      { question: "What may a clinic say in its advertisements and on its website?", answer: "Under the Healthcare Services (Advertisement) Regulations 2021, the information must be factually accurate, capable of being substantiated, and not exaggerated, false or misleading. An advertisement must not use laudatory statements or superlatives, compare the clinic with other providers, show before-and-after or after-only treatment photographs, or include reviews, testimonials or endorsements, subject to limited exceptions. The rules apply to advertisements that people in Singapore can access, including websites and social media." },
      { question: "May a doctor at an aesthetic clinic perform any aesthetic procedure?", answer: "No. The Singapore Medical Council's Guidelines on Aesthetic Practices for Doctors (2016 Edition) list the aesthetic procedures that doctors may perform. Some require prior experience or a Certificate of Competence, and others may be performed only by doctors in particular fields, such as dermatologists and plastic surgeons. Clinic owners should consider checking that each treatment offered matches the approvals of the doctor who performs it." },
      { question: "What happens to the licence when a clinic is sold?", answer: "The licence does not move with the business automatically. Under section 16 of the HCSA, a licence cannot be transferred or assigned unless the licence contains a condition allowing it and the Director-General consents in writing. If a buyer acquires the shares of the company that holds the licence, that company remains the licensee, but changes in key appointment holders must be notified within 10 calendar days, and a new Clinical Governance Officer needs approval before the appointment. If the buyer acquires the business instead, it is likely to need its own licence." },
      { question: "How does the PDPA apply to patient records?", answer: "A clinic must notify patients of the purposes for which it collects, uses and discloses their personal data and obtain their consent unless an exception applies, protect the data with reasonable security arrangements, keep it only as long as it is needed for legal or business purposes, and respond to access and correction requests. The Personal Data Protection Commission (PDPC) applies these rules to clinic situations in its Advisory Guidelines for the Healthcare Sector, revised on 20 September 2023. A data breach that is likely to result in significant harm must be notified to the PDPC and to the affected individuals. A breach of a significant scale must be notified to the PDPC even if significant harm is not likely; notification of the affected individuals is not required on the ground of scale alone." },
      { question: "May doctors in a clinic share fees or pay for referrals?", answer: "The Singapore Medical Council's Ethical Code and Ethical Guidelines (2016 edition, in force as at 18 November 2026) prohibit fee-splitting and payments for patient referrals, and require doctors to disclose material financial interests when they refer patients to an organisation in which they have an interest. A revised edition, published on 1 November 2026, comes into force on 1 January 2027. Partnership, profit-sharing and management agreements between doctors and investors are therefore usually drafted with these rules in mind." },
      { question: "Does Beyond Horizons advise wellness businesses that are not clinics?", answer: "Yes. Wellness centres, health technology companies and medical device suppliers raise related questions: whether a service or product falls within the Healthcare Services Act or the Health Products Act, how claims can be substantiated, and how health data is handled. Beyond Horizons advises on these questions and on the commercial contracts around them." },
      { question: "Can a clinic group retain Beyond Horizons on an ongoing basis?", answer: "Yes. Clinic groups can retain Beyond Horizons as fractional general counsel on a scoped monthly retainer for contracts, regulatory questions, staff matters and board support. The terms are set out on the fractional general counsel page." },
    ],
  },
  cta: {
    heading: "Contact",
    description: "Your first consultation is free. To discuss your matter, contact us.",
    hideButtons: true,
    afterDescription: (
      <>
        <p className="text-white/85 leading-relaxed mb-10 text-lg drop-shadow-md">The free consultation is a one-time initial discussion for each new matter of up to 30 minutes, subject to a conflict check, to understand your matter and explain how we can help and what it would cost. It is not legal advice on your matter, and you are under no obligation to instruct us. Any advice or work after that is charged as agreed in writing.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="default" size="lg" className="bg-white text-black font-semibold shadow-lg hover:bg-white/90">
            <a href="https://wa.me/6597265330?text=Enquiry%20via%20beyondhorizons.sg%2Findustry%2Fwellness-health" target="_blank" rel="noopener noreferrer">Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-2 border-white text-white font-semibold hover:bg-white hover:text-black shadow-lg">
            <a href="mailto:HL@beyondhorizons.sg?subject=Enquiry%20via%20beyondhorizons.sg%2Findustry%2Fwellness-health"><Mail className="mr-2 h-4 w-4" /> Email Us</a>
          </Button>
        </div>
        <p className="text-sm text-white/85 leading-relaxed mt-6">Please don&apos;t send confidential details until we confirm we can act for you.</p>
      </>
    ),
    note: "Beyond Horizons is part of Bethel Chambers LLC, a Singapore law practice. Educational only; not legal or financial advice, and no lawyer-client relationship is created.",
  },
  relatedPages: [{ title: "Fractional GC", slug: "fractional-gc" }, { title: "Singapore Employment Law", slug: "/singapore-employment-law" }, { title: "Business Succession", slug: "/singapore-business-succession-lawyer" }, { title: "Cybersecurity & Emerging Technology", slug: "cybersecurity-tech" }],
};

const WellnessHealthPage = () => <IndustryPageLayout data={data} />;
export default WellnessHealthPage;
