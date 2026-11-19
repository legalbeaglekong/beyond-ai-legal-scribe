import IndustryPageLayout, { type IndustryPageData } from "@/components/IndustryPageLayout";
import { FileText, Scale, Ship, Cable, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const data: IndustryPageData = {
  slug: "marine-offshore-renewables",
  seo: { title: "Offshore Wind Contracts and Cross-Border Risk | Beyond Horizons", description: "Notes on offshore wind and marine contracts: transboundary agreements, risk allocation, vessel charters, subsea cables, limitation of liability and forum." },
  consultHref: "https://wa.me/6597265330?text=Enquiry%20via%20beyondhorizons.sg%2Findustry%2Fmarine-offshore-renewables",
  hero: {
    entity: "Beyond Horizons by Bethel Chambers LLC",
    title: "Marine and offshore renewables: where cross-border contract risk sits",
    subtitle: "On 10 November 2026, at the 5th Marine & Offshore Renewables Forum in Singapore, a talk examined where risk sits when offshore wind contracts cross borders: often in the gaps between contracts. Beyond Horizons, part of Bethel Chambers LLC, advises developers, vessel owners and operators, contractors and lenders on those agreements under English and Singapore law.",
    emailCta: "HL@beyondhorizons.sg?subject=Enquiry%20via%20beyondhorizons.sg%2Findustry%2Fmarine-offshore-renewables",
    ctaLine: "Please don't send confidential details until we confirm we can act for you.",
    badges: ["Offshore wind", "Vessels and subsea cables", "English and Singapore law"],
  },
  intro: {
    paragraphs: [
      "On 10 November 2026, at the 5th Marine & Offshore Renewables Forum 2026 at Concorde Hotel Singapore, Hui Ling Teo, Founder of Beyond Horizons, gave a talk titled \"Transboundary Agreements: Navigating Risks and Liabilities\" in Session 1, Policy, Finance & Legal Challenges. The argument is that an offshore wind project can have twenty or more contracts that each work on their own terms and still leave the project company carrying a loss, because the risk sits in the gaps between those contracts, and those gaps often cross borders.",
      "The questions that follow are practical: who pays, under which law, in which forum, and what can actually be recovered. Beyond Horizons advises developers, vessel owners and operators, contractors and lenders on the agreements that carry that risk.",
    ],
    note: "Hui Ling Teo, Founder, Beyond Horizons by Bethel Chambers LLC. Qualified as a solicitor in England and Wales and as an advocate and solicitor in Singapore. This page addresses English and Singapore law; it does not cover the law of other jurisdictions.",
  },
  overview: {
    heading: "Which areas of advice does Beyond Horizons cover on marine and offshore renewables projects?",
    intro: <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Four areas: transboundary agreements read as one contract stack; risk allocation and liabilities; vessels, charters and casualties; and subsea cables and interconnectors. Each is summarised below. Advice covers English and Singapore law on a defined scope, and counsel in other jurisdictions are coordinated where local law applies.</p>,
    services: [
      { icon: FileText, title: "Transboundary agreements", description: "The contract stack is read as one system: offtake, grid connection, seabed lease and permits, the loan and security, turbine supply, transport and installation, export cable, port, and operations and maintenance.", bullets: ["One event, many clocks: approval delay, late vessel, cable outage", "Direct agreements between lenders and key counterparties", "Seat, governing law and where an award must be enforced"] },
      { icon: Scale, title: "Risk allocation and liabilities", description: "Indemnities, consequential loss, delay damages, caps, bonds and guarantees determine where a loss lands, including lost revenue that an industry form may leave where it falls.", bullets: ["Mutual consequential loss exclusions and lost revenue", "Bonds that are promised but not yet issued", "Anti-bribery clauses and payment suspension"] },
      { icon: Ship, title: "Vessels, charters and casualties", description: "Installation and service-vessel charters, limitation of liability under the 1976 Convention as amended by the 1996 Protocol, and the plan for evidence and security after a casualty all bear on what is recovered.", bullets: ["Charter-based and construction-based standard forms", "Flag, forum and limitation regime", "Evidence and security in the first 72 hours"] },
      { icon: Cable, title: "Subsea cables and interconnectors", description: "When a third-party ship damages a cable, recovery may depend on a contractual route to revenue, insurance of the owner's own loss, and agreement on who pursues the ship, at whose cost and for whose benefit.", bullets: ["Business interruption cover on the export cable", "Recovery plans that do not rely on breaking the limit", "Enforcement where the assets and insurers are"] },
    ],
  },
  beforeOverview: (
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto container-padding fade-in space-y-6">
        <figure>
          <img src="/images/marine/offshore-wind-turbines-pexels-27197661.webp" alt="A line of offshore wind turbines on the horizon over open sea, with waves in the foreground." width={1600} height={1067} loading="lazy" decoding="async" className="w-full h-auto rounded-md border border-border/40" />
          <figcaption className="text-xs text-muted-foreground mt-2 leading-relaxed">Illustrative photograph of an offshore wind farm. Photograph: Patrick, Pexels.</figcaption>
        </figure>
      </div>
    </section>
  ),
  afterOverview: (
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto container-padding fade-in space-y-6">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Event: transboundary agreements in offshore wind (conference, 10 November 2026)</h2>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">On 10 November 2026, at the 5th Marine & Offshore Renewables Forum 2026 at Concorde Hotel Singapore, organised by MediaComz, Hui Ling Teo, Founder of Beyond Horizons, gave a 15-minute talk titled &quot;Transboundary Agreements: Navigating Risks and Liabilities&quot; in Session 1, Policy, Finance & Legal Challenges. The talk was followed by the session panel.</p>
        <h3 className="text-lg md:text-xl font-serif font-bold text-foreground">Photographs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <figure>
            <img src="/images/marine/morf-2026-session-1-panel-title-slide.webp" alt="The Session 1 panel on stage at the 5th Marine & Offshore Renewables Forum 2026, Concorde Hotel Singapore, 10 November 2026, with the title slide of the talk Transboundary Agreements: Navigating Risks and Liabilities on the screen." width={1600} height={1066} loading="lazy" decoding="async" className="w-full h-auto rounded-md border border-border/40" />
            <figcaption className="text-xs text-muted-foreground mt-2 leading-relaxed">Session 1 panel, with the title slide of the talk on screen.</figcaption>
          </figure>
          <figure>
            <img src="/images/marine/morf-2026-session-1-panel-follow-the-money.webp" alt="The Session 1 panel at the 5th Marine & Offshore Renewables Forum 2026, with the slide Follow the money: one offshore wind project company on the screen." width={1600} height={1066} loading="lazy" decoding="async" className="w-full h-auto rounded-md border border-border/40" />
            <figcaption className="text-xs text-muted-foreground mt-2 leading-relaxed">Session 1 panel, with slide 3, Follow the money, on screen.</figcaption>
          </figure>
          <figure>
            <img src="/images/marine/morf-2026-session-1-speaking-notes.webp" alt="Hui Ling Teo, Founder of Beyond Horizons, speaking during Session 1 of the 5th Marine & Offshore Renewables Forum 2026, holding a microphone and her notes." width={1600} height={1066} loading="lazy" decoding="async" className="w-full h-auto rounded-md border border-border/40" />
            <figcaption className="text-xs text-muted-foreground mt-2 leading-relaxed">Hui Ling Teo speaking in Session 1.</figcaption>
          </figure>
          <figure>
            <img src="/images/marine/morf-2026-session-1-speaking-clicker.webp" alt="Hui Ling Teo speaking during Session 1 of the 5th Marine & Offshore Renewables Forum 2026, holding a microphone and a presentation clicker." width={1600} height={1066} loading="lazy" decoding="async" className="w-full h-auto rounded-md border border-border/40" />
            <figcaption className="text-xs text-muted-foreground mt-2 leading-relaxed">Hui Ling Teo speaking in Session 1.</figcaption>
          </figure>
        </div>
        <p className="text-xs text-muted-foreground">Event photographs by MediaComz.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <figure>
            <img src="/images/marine/morf-2026-speaker-badge-blurred.webp" alt="Hui Ling Teo's speaker badge for the 5th Marine & Offshore Renewables Forum 2026, showing her name and Beyond Horizons by Bethel Chambers LLC, with the event QR codes blurred." width={1050} height={1312} loading="lazy" decoding="async" className="w-full h-auto rounded-md border border-border/40" />
            <figcaption className="text-xs text-muted-foreground mt-2 leading-relaxed">Speaker badge, 10 November 2026. Photograph: Beyond Horizons.</figcaption>
          </figure>
        </div>
        <h3 className="text-lg md:text-xl font-serif font-bold text-foreground">Slides shown in the talk (excerpts)</h3>
        <figure>
          <img src="/images/marine/slide-03-follow-the-money.webp" alt="Diagram of cash flows in one offshore wind project company during construction and operation, showing sponsor equity and loan draws into a bank-controlled construction account, offtaker payments into a revenue account, and contingent money into a reserve or proceeds account. Labelled as an illustrative model." width={1601} height={900} loading="lazy" decoding="async" className="w-full h-auto rounded-md border border-border/40" />
          <figcaption className="text-xs text-muted-foreground mt-2 leading-relaxed">Slide 3. Follow the money: cash flows through one illustrative offshore wind project company.</figcaption>
        </figure>
        <figure>
          <img src="/images/marine/slide-05-contract-stack-and-borders.webp" alt="Diagram placing the project company at the centre of its contracts — revenue and public contracts, funding and security, supply, installation and service — with a side panel listing borders: manufacture and installation country, vessel flag, loan law, arbitration seat, coastal state and third-state measures." width={1601} height={900} loading="lazy" decoding="async" className="w-full h-auto rounded-md border border-border/40" />
          <figcaption className="text-xs text-muted-foreground mt-2 leading-relaxed">Slide 5. The contract stack laid over the money, and where the borders sit.</figcaption>
        </figure>
        <figure>
          <img src="/images/marine/slide-10-bribery-risk-by-segment.webp" alt="Three cards rating bribery risk by segment in a qualitative assessment: vessels high, construction high, financing medium and rising, each with drivers and controls, and a note on payment suspension under an industry form." width={1601} height={900} loading="lazy" decoding="async" className="w-full h-auto rounded-md border border-border/40" />
          <figcaption className="text-xs text-muted-foreground mt-2 leading-relaxed">Slide 10. Trend 2A: bribery and governance risk, priced by segment — a qualitative assessment from the talk.</figcaption>
        </figure>
        <figure>
          <img src="/images/marine/slide-15-plan-the-recovery-e1.webp" alt="Slide titled Trend 3, Plan the recovery before the casualty, with practical cards on insurance, contractual routes, evidence and forum, and a footer on running civil and criminal tracks in parallel." width={1601} height={900} loading="lazy" decoding="async" className="w-full h-auto rounded-md border border-border/40" />
          <figcaption className="text-xs text-muted-foreground mt-2 leading-relaxed">Slide 15. Trend 3: plan the recovery before the casualty — insurance, security, evidence and forum.</figcaption>
        </figure>
        <figure>
          <img src="/images/marine/slide-16-three-take-aways.webp" alt="Slide titled Three take-aways, listing three numbered points on cross-border governance risk, limitation and recovery planning, and drafting for notice and borders, with Hui Ling Teo's name, Beyond Horizons by Bethel Chambers LLC, email, website and the educational-only disclaimer." width={1601} height={900} loading="lazy" decoding="async" className="w-full h-auto rounded-md border border-border/40" />
          <figcaption className="text-xs text-muted-foreground mt-2 leading-relaxed">Slide 16. Three take-aways from the talk: price governance risk; plan recovery before the casualty; write for the notice and the border.</figcaption>
        </figure>
        <p className="text-xs text-muted-foreground">Excerpts only, shown as images. The slides shown in the room are published on Beyond Horizons Insights.</p>
        <h3 className="text-lg md:text-xl font-serif font-bold text-foreground">Published posts on the talk</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li>
            <a href="https://www.insights.beyondhorizons.sg/p/transboundary-agreements-offshore-wind-risk?utm_source=beyondhorizons.sg&utm_medium=referral&utm_campaign=morf-2026-11&utm_content=marine-page" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">Transboundary agreements in offshore wind: risk in the gaps between contracts (Beyond Horizons Insights, analysis, 10 November 2026)</a>
          </li>
          <li>
            <a href="https://www.insights.beyondhorizons.sg/p/transboundary-agreements-offshore-wind-conference-slides?utm_source=beyondhorizons.sg&utm_medium=referral&utm_campaign=morf-2026-11&utm_content=marine-page" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">Transboundary agreements in offshore wind: where cross-border risk sits (conference slides, 10 November 2026) (Beyond Horizons Insights, published 18 November 2026)</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7529010290580152320/" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">Session 1 panel summary (Beyond Horizons by Bethel Chambers LLC, LinkedIn Page, 19 November 2026)</a>
          </li>
        </ul>
      </div>
    </section>
  ),
  orgRef: true,
  pageSchema: [
    {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://beyondhorizons.sg/"}, {"@type": "ListItem", "position": 2, "name": "Marine & offshore renewables", "item": "https://beyondhorizons.sg/industry/marine-offshore-renewables"}]},
    {"@context": "https://schema.org", "@type": "Event", "name": "Transboundary Agreements: Navigating Risks and Liabilities", "description": "A 15-minute talk in Session 1, Policy, Finance & Legal Challenges, of the 5th Marine & Offshore Renewables Forum 2026, followed by the session panel.", "startDate": "2026-11-10", "eventStatus": "https://schema.org/EventScheduled", "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode", "location": {"@type": "Place", "name": "Concorde Hotel Singapore", "address": {"@type": "PostalAddress", "addressLocality": "Singapore", "addressCountry": "SG"}}, "superEvent": {"@type": "Event", "name": "5th Marine & Offshore Renewables Forum 2026", "startDate": "2026-11-10", "organizer": {"@type": "Organization", "name": "MediaComz"}, "location": {"@type": "Place", "name": "Concorde Hotel Singapore", "address": {"@type": "PostalAddress", "addressLocality": "Singapore", "addressCountry": "SG"}}}, "performer": {"@type": "Person", "name": "Hui Ling Teo", "jobTitle": "Founder", "worksFor": {"@id": "https://beyondhorizons.sg/#organization"}}, "image": ["https://beyondhorizons.sg/images/marine/slide-03-follow-the-money.webp"], "subjectOf": [{"@type": "Article", "headline": "Transboundary agreements in offshore wind: risk in the gaps between contracts (analysis, 10 November 2026)", "url": "https://www.insights.beyondhorizons.sg/p/transboundary-agreements-offshore-wind-risk"}]},
  ],
  contentSections: [
    {
      heading: "Where do offshore wind projects break between contracts?",
      paragraphs: [
        "Usually at the interfaces. On the analysis in the talk, the common failure is several sound contracts that do not talk to each other: a time extension, offtake relief or a promised bond under one contract does not automatically carry through to the loan, the charter or debt service. Direct agreements give lenders notice and a cure right, not control.",
        "On the analysis in the talk, the most common failure is not one bad contract but several good contracts that do not talk to each other. A time extension under the construction contract does not automatically extend the completion date under the loan. Relief from the offtaker under the power purchase agreement (PPA) does not suspend charter hire or debt service. A contractor's promise to procure a bond is not an issued bond that can be called.",
        "Lenders often take comfort from direct agreements with key counterparties. Those agreements usually give the lenders notice and a chance to cure a default. They do not, by themselves, transfer the owner's vessel charter to the lenders or bind a regulator.",
      ],
    },
    {
      heading: "How can geopolitics change an offshore contract by notice?",
      paragraphs: [
        "Insurers and governments can change war-risk cover, port charges and trade measures on notice, outside the contract. The forum, the insurance cover and the cost base can therefore shift mid-contract. The drafting point is to anticipate the notice: the arbitration seat and its security, the war-risk and sanctions clauses, and who pays for a change in law.",
        "Forum, insurance cover and cost base can each change because of a decision made outside the contract. War-risk insurance, port charges and trade measures can change on notice from insurers or governments. The drafting point is that the contract anticipates the notice. Parties may wish to check the arbitration seat and the security behind it, the war-risk and sanctions clauses, and who pays if a new port fee or a change in law arrives mid-contract.",
      ],
    },
    {
      heading: "Who bears the loss when a ship damages a subsea cable?",
      paragraphs: [
        "Often the cable owner or the project company, because the shipowner can usually cap its liability under the 1976 Convention on Limitation of Liability for Maritime Claims, as amended by the 1996 Protocol, which has the force of law in Singapore. The cap is rarely broken, so recovery is usually planned through insurance and a contractual route to revenue.",
        "For a wind farm, an interconnector or a pipeline, the subsea link is often the single point of failure. Under the 1976 Convention on Limitation of Liability for Maritime Claims, as amended by the 1996 Protocol, a shipowner can usually cap its liability. The Convention has the force of law in Singapore under section 136 of the Merchant Shipping Act 1995, with some exceptions. The owner loses the right to limit only if the loss resulted from its own personal act or omission, committed with intent to cause such loss, or recklessly and with knowledge that such loss would probably result. That bar is high.",
        "A recovery plan is therefore unlikely to succeed if it depends on breaking the shipowner's limit. Parties may wish to insure their own loss, including business interruption on the export cable, to build a contractual route to revenue, and to agree in advance who pursues a third-party ship, at whose cost and for whose benefit.",
      ],
    },
    {
      heading: "Which tests can a contract file be put through?",
      paragraphs: [
        "Five tests, set out below: trace one event through every contract; check whether relief travels between contracts; identify who funds the cash gap; match each remedy to where the counterparty's assets and insurers sit; and confirm that the casualty plan is written down. Each test can be run on an existing contract file.",
        "1. One event, every contract. For an approval delay, a late vessel and a cable outage, the notice period, the relief and the payment consequence can be traced through every contract in the stack.",
        "2. Whether relief travels. A time extension in the works contract may or may not extend the loan dates, and offtake relief may or may not suspend hire or debt service.",
        "3. Who funds the gap. Someone carries the cash shortfall while relief is argued, and insurance or bond proceeds may be restricted to repair or debt.",
        "4. Where the remedy works. For each key counterparty, the seat and governing law can be matched against where its assets and insurers actually are.",
        "5. Whether the casualty plan is written down. The limitation regime, business interruption cover, the contractual route to revenue, and responsibility for preserving evidence and obtaining security in the first 72 hours can be confirmed in advance.",
      ],
    },
    {
      heading: "Where is the longer analysis published?",
      paragraphs: [
        "On Beyond Horizons Insights. An article by Hui Ling Teo, Founder, sets out the longer analysis behind the talk: it follows the money in one offshore wind project company, marks where the borders sit in the contract stack, and discusses a May 2026 English judgment on a shipowner's right to limit liability. The conference slides are published separately.",
      ],
      links: [{ to: "https://www.insights.beyondhorizons.sg/p/transboundary-agreements-offshore-wind-risk?utm_source=beyondhorizons.sg&utm_medium=referral&utm_campaign=morf-2026-11&utm_content=marine-page", label: "Transboundary agreements in offshore wind: risk in the gaps between contracts" }, { to: "https://www.insights.beyondhorizons.sg/p/transboundary-agreements-offshore-wind-conference-slides?utm_source=beyondhorizons.sg&utm_medium=referral&utm_campaign=morf-2026-11&utm_content=marine-page", label: "Transboundary agreements in offshore wind: where cross-border risk sits (conference slides, 10 November 2026)" }, { to: "/announcements", label: "The talk at the 5th Marine & Offshore Renewables Forum 2026" }],
    },
    {
      heading: "Who is Beyond Horizons?",
      paragraphs: [
        "Beyond Horizons is part of Bethel Chambers LLC, a Singapore law practice. Its Founder is Hui Ling Teo, who is qualified as a solicitor in England and Wales and as an advocate and solicitor in Singapore. Marine and offshore renewables matters are advised on under English and Singapore law; other jurisdictions are outside scope.",
      ],
      links: [{ to: "/about", label: "About Beyond Horizons" }],
    },
  ],
  closing: {
    heading: "Implications",
    paragraphs: [
      "Developers, vessel owners and operators, contractors and lenders may wish to consider the following points.",
      "1. Whether notice periods, relief and payment consequences match across the contract stack for the same event, rather than only matching dates.",
      "2. Whether security and enforcement are planned where the counterparties' assets and insurers sit.",
      "3. Whether contingent cash, such as insurance and bond proceeds, is restricted to repair or debt, and who funds the gap meanwhile.",
      "4. Whether direct agreements are being relied on as if they gave control.",
      "5. Whether recovery plans assume that the shipowner's limit will be broken.",
      "6. Whether an industry standard form is being treated as ready to sign.",
    ],
  },
  faqs: {
    heading: "Frequently asked questions on marine and offshore renewables contracts",
    items: [
      { question: "Who bears the risk when an offshore wind project's contracts cross borders?", answer: "Often the project company, even when every contract works on its own terms, because the risk sits in the gaps between the contracts and those gaps often cross borders. A time extension under the construction contract does not automatically extend the completion date under the loan, and relief from the offtaker under the power purchase agreement does not suspend charter hire or debt service." },
      { question: "If a ship damages a subsea cable, who pays?", answer: "Recovery from the ship is often limited. A shipowner can usually cap its liability under the 1976 Convention on Limitation of Liability for Maritime Claims, as amended by the 1996 Protocol, which has the force of law in Singapore and in English law. Under English law, a party that suffers only financial loss because someone else's property was damaged also generally cannot recover that loss in negligence unless it owned, or had a possessory interest in, the damaged property at the time; the Singapore position should be checked on the facts. Insurance of the owner's own loss, including business interruption on the export cable, and a contractual route to revenue are therefore usually considered." },
      { question: "Can a shipowner limit liability for damaging a subsea cable?", answer: "Usually yes. Under Article 4 of the 1976 Convention, the owner loses the right to limit only if the loss resulted from its own personal act or omission, committed with intent to cause such loss, or recklessly and with knowledge that such loss would probably result. In the Solong collision judgment of 22 May 2026 ([2026] EWHC 1211 (Admlty)), the English Admiralty Court struck out an Article 4 defence even though the owners accepted that the master had been guilty of a gross failure of his watchkeeping and navigation duties." },
      { question: "Why do offshore wind projects break at the contract interfaces?", answer: "Because several good contracts may not talk to each other. A single event, such as an approval delay, a late vessel or a cable outage, starts a different clock under each contract, with different notice periods, different relief and different payment consequences. Direct agreements usually give lenders notice and a chance to cure a default, but they do not, by themselves, transfer the owner's vessel charter to the lenders or bind a regulator." },
      { question: "Which seat and governing law should an offshore contract use?", answer: "There is no single answer. Arbitration may be administered by the Singapore International Arbitration Centre (SIAC), conducted under the Terms of the London Maritime Arbitrators Association (LMAA), or administered by the International Chamber of Commerce (ICC). Those are arbitral institutions, not law firms, and naming them is not a recommendation. The seat is a place, not the institution. Wherever the award is made, it has to be enforced where the counterparty's assets are. For English-law contracts, the UK Supreme Court's decision in UniCredit Bank GmbH v RusChemAlliance LLC [2024] UKSC 30 shows that the governing law of the arbitration agreement can matter as much as the choice of seat." },
      { question: "Which parties does Beyond Horizons act for on marine and offshore renewables matters?", answer: "Developers, vessel owners and operators, contractors and lenders, subject to a conflict check. Beyond Horizons reviews English-law and Singapore-law cross-border offshore contracts on a defined scope, and coordinates with counsel in other jurisdictions where local law applies." },
      { question: "What was the 10 November 2026 talk at the Marine & Offshore Renewables Forum about?", answer: "The talk, \"Transboundary Agreements: Navigating Risks and Liabilities\", was given by Hui Ling Teo, Founder of Beyond Horizons, in Session 1 of the 5th Marine & Offshore Renewables Forum 2026 in Singapore. It argued that offshore wind risk often sits in the gaps between contracts that cross borders, and set out who pays, under which law and what can be recovered." },
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
            <a href="https://wa.me/6597265330?text=Enquiry%20via%20beyondhorizons.sg%2Findustry%2Fmarine-offshore-renewables" target="_blank" rel="noopener noreferrer">Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-2 border-white text-white font-semibold hover:bg-white hover:text-black shadow-lg">
            <a href="mailto:HL@beyondhorizons.sg?subject=Enquiry%20via%20beyondhorizons.sg%2Findustry%2Fmarine-offshore-renewables"><Mail className="mr-2 h-4 w-4" /> Email Us</a>
          </Button>
        </div>
        <p className="text-sm text-white/85 leading-relaxed mt-6">Please don&apos;t send confidential details until we confirm we can act for you.</p>
      </>
    ),
    note: "Beyond Horizons is part of Bethel Chambers LLC, a Singapore law practice. Educational only; not legal or financial advice, and no lawyer-client relationship is created.",
  },
  relatedPages: [{ title: "Transportation", slug: "transportation" }, { title: "Trade & Tariff", slug: "trade-tariff" }, { title: "Restructuring & Insolvency", slug: "/singapore-restructuring-insolvency" }, { title: "Fractional GC", slug: "fractional-gc" }],
};

const MarineOffshoreRenewablesPage = () => <IndustryPageLayout data={data} />;
export default MarineOffshoreRenewablesPage;
