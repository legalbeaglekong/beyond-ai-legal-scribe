import FinanceCounselLayout, { Bullets, H2, P, SimpleTable, CtaRow, ENTITY_FULL, linkCls } from "@/components/FinanceCounselLayout";
import { Link } from "@/lib/router-compat";
import { EMAIL } from "@/config/business";

export const LENDER_TITLE = "English Law & Singapore Lender Finance Counsel | Facilities, Security & Recovery — Beyond Horizons";
export const LENDER_DESCRIPTION = "English law and Singapore law counsel for banks, private banks and credit funds as lenders — English-law facilities with Singapore obligors, security, demands and recovery. Hui Ling Teo is qualified in England and Wales. Beyond Horizons by Bethel Chambers LLC. HL@beyondhorizons.sg.";

export const lenderFaqs = [
  { question: "When does a lender still need Singapore counsel if the facility is governed by English law?", answer: "Often. An English law facility agreement sets the commercial terms, but it does not replace Singapore rules on taking and registering security over Singapore assets, serving notices on a Singapore obligor, or enforcing in Singapore. Where the borrower, a guarantor, a share charge, or the collateral sits in Singapore, the Singapore law position needs its own check. Beyond Horizons by Bethel Chambers LLC advises on both Singapore law and English law. English law advice is given by Hui Ling Teo, who is qualified in England and Wales. We do not advise on the law of any other country. Email HL@beyondhorizons.sg." },
  { question: "What should a lender document on a securities-backed facility before a shortfall happens?", answer: "The time to get this right is at signing. The documents should state clearly which assets are eligible and at what lending value, how margin is calculated and called, how and where notices are given, how long the borrower has to top up, what the lender may sell and in what order, how sale prices are determined, and which law governs the facility and the security over the portfolio. Clear drafting on these points reduces the room for a later dispute about notice, valuation, or close-out. This is general information, not a review of your documents." },
  { question: "How is sponsor acquisition finance different from a private-bank portfolio facility?", answer: "Sponsor acquisition finance funds a bid or a holding company, typically with security over shares and assets in the acquisition group and guarantees from group companies. A private-bank portfolio facility is credit extended against assets held in custody, with margin and close-out mechanics. Both can be lender instructions on this page. If you are the borrowing sponsor or individual, see our Singapore borrower finance counsel page. Schemes of arrangement and judicial management sit on our Singapore restructuring and insolvency page, and aircraft finance sits on our aviation pages." },
  { question: "What should a lender check before calling an event of default?", answer: "Start with the documents rather than the account position. Confirm which clause has been breached, whether any grace or cure period applies, whether notice is required and in what form, whether earlier conduct could be argued as a waiver, and how the security and guarantee documents tie back to the facility. An acceleration or demand that does not follow the contract can hand the borrower a defence or a delay argument. We can review the position before the step is taken. Email HL@beyondhorizons.sg." },
  { question: "What does good demand hygiene look like for banks and creditors?", answer: "A demand should name the right obligor and guarantor, state the amount due and how it is made up, cite the operative clause, be sent by the method and to the address the documents require, and reserve the lender's rights. Keep a clear record of service. Mixed messages, such as continuing to accept part payments without a reservation of rights, can complicate later enforcement. This is general information, not a review of your documents." },
  { question: "What are the statutory demand timings in Singapore?", answer: "For an individual debtor, Singapore court guidance states that a creditor may file a bankruptcy application if the debtor does not pay, secure, or compound within 21 days after service of a statutory demand and does not apply to set the demand aside within 14 days after service (or 21 days if the demand was served outside Singapore). For a company, the IRDA deeming provision is a written demand neglected for three weeks before the company may be treated as unable to pay its debts for a winding-up pathway. These are Singapore timings only, not English law timings, and not a timetable for your matter." },
  { question: "What happens to enforcement if the borrower enters a scheme of arrangement or judicial management?", answer: "In Singapore, moratoria connected with schemes of arrangement and judicial management may restrict or pause enforcement steps, and the scope of any moratorium is matter-specific. Lenders should check early whether an application has been filed or is likely, and plan how to engage with the process. Our Singapore restructuring and insolvency page covers the formal toolkit in more depth. Email HL@beyondhorizons.sg to discuss a live matter." },
  { question: "Do you also act for borrowers?", answer: "Yes, in separate matters. Beyond Horizons also advises sponsors and individuals as borrowers, on our Singapore borrower finance counsel page. Conflicts are screened before any instruction. We do not act for both the lender and the borrower on the same matter, and we will not take an instruction that conflicts with an existing client's matters. Tell us the borrower and guarantor names early so the conflict check can be completed before you share details." },
] as const;

export const lenderLegalService = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Beyond Horizons by Bethel Chambers LLC — English law and Singapore lender finance counsel",
  url: "https://beyondhorizons.sg/singapore-lender-finance-counsel",
  description: "English law and Singapore law counsel for banks, private banks and credit funds as lenders: English-law facilities, Singapore security, demands and recovery. Beyond Horizons by Bethel Chambers LLC. HL@beyondhorizons.sg.",
  email: "HL@beyondhorizons.sg",
  knowsAbout: ["English law facility agreements", "Singapore law security and enforcement", "lender finance counsel", "England and Wales"],
  areaServed: "Singapore",
  parentOrganization: { "@type": "Organization", name: "Bethel Chambers LLC" },
};

const RESTRUCTURING = "Singapore restructuring and insolvency: schemes, judicial management and Model Law";
const BORROWER = "Singapore borrower finance counsel for sponsors and individuals";

const LenderFinanceCounselPage = () => (
  <FinanceCounselLayout
    h1="English law and Singapore lender finance counsel — facilities, security, demands and recovery"
    lead={<>{ENTITY_FULL} acts for <strong>banks, private banks, credit funds, and other lenders</strong> — including lenders advancing to sponsors — on facility documents, security, demands, and recovery. We advise on <strong>Singapore law and English law</strong>, on <strong>local and cross-border</strong> facilities. English law advice is given by Hui Ling Teo, who is qualified in England and Wales.</>}
    second="Many facilities booked or managed out of Singapore are documented under English law but rely on a Singapore obligor, Singapore security, or Singapore enforcement. We focus on that join: making sure the English law commercial terms and the Singapore law steps work together, from signing through to recovery. We do not advise on the law of any other country; where a document, asset, or proceeding is governed by some other law, we coordinate with foreign counsel."
    heroNote="This page is general information, not advice on your documents or a prediction of any recovery."
    faqs={lenderFaqs}
    related={[
      { label: BORROWER, to: "/singapore-borrower-finance-counsel" },
      { label: RESTRUCTURING, to: "/singapore-restructuring-insolvency" },
      { label: "Financial services regulatory counsel", to: "/expertise/financial-services" },
      { label: "Meet Hui Ling Teo", to: "/team/hui-ling-teo" },
      { label: "Beyond Horizons home", to: "/" },
    ]}
    ctaHeading="Talk to lender-side counsel"
    ctaBody="Send a short confidential outline of the facility, the obligors, and where the security sits. We will come back with a scoped next step where appropriate."
  >
    <section className="space-y-4">
      <H2>English-law facilities from a Singapore seat</H2>
      <P>If your facility agreement is governed by <strong>English law</strong>, and the borrower, a guarantor, or the collateral sits in Singapore, you still need counsel who can read both sides of that join. Beyond Horizons advises on <strong>English law facility documents</strong> and on the <strong>Singapore law</strong> steps that sit beside them — security over Singapore assets, service on Singapore obligors, and enforcement in Singapore. English law advice is given by Hui Ling Teo, who is qualified in England and Wales. We are not an English law firm; we do not advise on the law of any other country.</P>
      <P>Email {EMAIL} with a short outline (parties, governing-law clause, what has happened). Conversations are confidential. Sending an email does not create a solicitor–client relationship until terms are agreed.</P>
    </section>

    <section className="space-y-4">
      <H2>Who this page is for</H2>
      <Bullets items={[
        "Banks and private banks extending credit to companies, sponsors, or individuals",
        "Credit funds and other private lenders, including lenders advancing to sponsors and sponsor holding companies",
        "Creditors holding guarantees or security who need to protect or enforce their position",
      ]} />
    </section>

    <section className="space-y-4">
      <H2>What we handle for lenders</H2>
      <Bullets items={[
        "Lender-side review and negotiation of facility agreements, security, and guarantees",
        "Singapore law security over shares, accounts, receivables, and other Singapore assets, alongside English law facility documents",
        "Securities-backed and portfolio facilities: eligibility, margin, notice, and close-out mechanics",
        "Sponsor and acquisition facilities: holding-company and group security packages, guarantees, and intercreditor points, from the lender's seat",
        "Fund-level facilities (for example subscription lines), limited to the Singapore law security and notice points",
        "Events of default, reservation of rights, and demand hygiene",
        "Statutory demands and Singapore court routes as part of a recovery strategy",
        "Enforcement of security and judgments in Singapore, and English law advice on English law documents",
        "Cross-border recovery coordination with foreign counsel",
      ]} />
    </section>

    <section className="space-y-4">
      <H2>English law facility + Singapore obligor: where counsel still matters</H2>
      <P>An English law facility agreement fixes the commercial bargain. It does not replace the Singapore rules that apply when the borrower, a guarantor, or the collateral is in Singapore. Those include how security over Singapore assets is taken, perfected, and registered; how notices are served on a Singapore company or individual; and how enforcement works in Singapore.</P>
      <SimpleTable
        head={["Document or step", "Typical governing law", "What the lender should check"]}
        rows={[
          ["Facility agreement", "Often English law", "Events of default, notice clauses, acceleration, cure periods"],
          ["Share charge over a Singapore company", "Often Singapore law", "Perfection and registration steps, enforcement and transfer mechanics"],
          ["Account or receivables security in Singapore", "Often Singapore law", "Notices, acknowledgements, priority"],
          ["Guarantee from a Singapore company or individual", "English or Singapore law", "Scope, demand mechanics, service on the guarantor"],
          ["Enforcement against Singapore assets", "Singapore law", "Court routes, any moratorium, sequencing"],
        ]}
      />
    </section>

    <section className="space-y-4">
      <H2>Securities-backed and private-bank facilities</H2>
      <P>Portfolio and securities-backed facilities are credit against assets in custody. Disputes in this area tend to turn on a small number of clauses, so the time to get them right is at signing. The facility and security documents should be clear on:</P>
      <Bullets items={[
        "which assets are eligible and at what lending value;",
        "how margin is calculated and when a call can be made;",
        "how and where notices are given, and how long the borrower has to respond;",
        "what the lender may sell, in what order, and how sale prices are determined;",
        "which law governs the facility and which governs the security over the portfolio.",
      ]} />
      <P>We advise lenders on drafting these terms, on acting when a shortfall arises, and on recovery of any balance after close-out. We do not advise on investment products or on financial-services licensing; for regulatory questions see our <Link to="/expertise/financial-services" className={linkCls}>financial services regulatory page</Link>.</P>
    </section>

    <section className="space-y-4">
      <H2>Sponsor and acquisition facilities — the lender's seat</H2>
      <P>Sponsor acquisition finance funds a bid or a holding company, usually with security over shares and assets in the acquisition group and guarantees from group companies. On the lender side, the questions are whether the security package actually reaches the Singapore entities and assets it is meant to reach, whether guarantees are enforceable against Singapore obligors, and whether intercreditor and subordination terms protect the lender's ranking.</P>
      <P>This is a different instruction from a private-bank portfolio facility, though both can sit on this page. If you are the <strong>borrowing sponsor</strong>, see <Link to="/singapore-borrower-finance-counsel" className={linkCls}>{BORROWER}</Link>.</P>
    </section>

    <section className="space-y-4">
      <H2>Defaults, demands, and recovery</H2>
      <P>Before calling a default, check the documents: the clause breached, any grace or cure period, notice requirements, and whether earlier conduct could be argued as a waiver. A demand should name the right obligor and guarantor, state the amount and its make-up, cite the operative clause, and be served as the documents require, with the lender's rights reserved.</P>
      <P>Whether a lender can sell charged assets, appoint a receiver, or act on a share or account charge without a court order depends on the security document, the type of asset, the governing law, and any notice requirements. Getting the sequence wrong can expose the lender to a challenge.</P>
      <P>Where the borrower is heading into a formal process, Singapore moratoria connected with schemes of arrangement and judicial management may restrict enforcement. For that toolkit — schemes, judicial management, and cross-border recognition — see <Link to="/singapore-restructuring-insolvency" className={linkCls}>{RESTRUCTURING}</Link>.</P>
    </section>

    <section className="space-y-4">
      <H2>How an instruction works</H2>
      <P>Start with a short outline: the lender, the obligors and guarantors, the documents and their governing law, where the assets are, and what has happened. We screen conflicts first. We do not act for both the lender and the borrower on the same matter, and we will not take an instruction that conflicts with an existing client's matters. Engagement is proposal-based. This page does not publish fees. Sending an email or booking a consultation does not create a solicitor–client relationship until terms are agreed.</P>
      <CtaRow />
    </section>
  </FinanceCounselLayout>
);

export default LenderFinanceCounselPage;
