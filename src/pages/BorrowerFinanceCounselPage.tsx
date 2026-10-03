import FinanceCounselLayout, { Bullets, H2, P, SimpleTable, CtaRow, ENTITY_FULL, linkCls } from "@/components/FinanceCounselLayout";
import { Link } from "@/lib/router-compat";
import { EMAIL } from "@/config/business";

export const BORROWER_TITLE = "English Law & Singapore Borrower Finance Counsel | Sponsor & Private-Bank Facilities — Beyond Horizons";
export const BORROWER_DESCRIPTION = "English law and Singapore law counsel for sponsors and individuals as borrowers — English-law facility review, Singapore guarantees and security, margin calls and waivers. Hui Ling Teo is qualified in England and Wales. Beyond Horizons by Bethel Chambers LLC. HL@beyondhorizons.sg.";

export const borrowerFaqs = [
  { question: "What should a borrowing sponsor have Singapore counsel check before signing a facility?", answer: "Even where the facility agreement is governed by English law, a sponsor should have the Singapore side checked: the scope of any guarantee and security given by Singapore companies or over Singapore assets, what a lender could enforce against a Singapore obligor and how, and how the documents interact with the group's existing arrangements. It also helps to separate the commercial points that are open to negotiation, such as covenant headroom, cure rights, and permitted payments, from the points that are fixed by law. Beyond Horizons by Bethel Chambers LLC advises borrowers on Singapore law and English law. English law advice is given by Hui Ling Teo, who is qualified in England and Wales. We do not advise on the law of any other country. Email HL@beyondhorizons.sg." },
  { question: "What should I understand before giving a personal guarantee or security for a facility?", answer: "Read what you are actually giving: the amount or cap, whether it covers future facilities, whether it is payable on demand, whether the lender must pursue the borrower first, which assets are charged, and how the guarantee or security can be released. A personal guarantee can leave your own assets exposed if the borrower does not pay. Ask questions before you sign, not after a demand arrives. This is general information; we can review the specific document on instruction." },
  { question: "I have received a margin call or a forced-sale notice on a private-bank facility. What is counsel actually for?", answer: "Counsel reads the facility and security documents against what has happened: whether notice was given as the documents require, how much time you have, what the bank is entitled to sell and in what order, and how prices are determined. That tells you whether the facts support a challenge, whether there is room to engage the bank on timing or alternatives, or whether the better use of time is an orderly top-up or sale. Timeframes in these facilities can be short, so act quickly. We advise on the legal position under Singapore law and English law, not on investment decisions, and we cannot promise that a close-out can be stopped." },
  { question: "Can I ask my lender for a waiver or forbearance?", answer: "Often you can, and lenders frequently prefer a realistic plan to enforcement. A credible request usually explains what has happened, includes current financial information, sets out a cure or repayment path, and is clear about the existing security and guarantees. Any waiver, amendment, or standstill should be documented so both sides know what is waived or paused and what is not. Whether a lender agrees is its decision, and outcomes are never guaranteed. Schedule a consultation or email HL@beyondhorizons.sg." },
  { question: "When is a waiver still a facility matter, and when does it become a restructuring matter?", answer: "A covenant breach, a missed test, or a short forbearance while you refinance or sell an asset is usually still a facility conversation, and this page is the right place to start. Once the issue is a company-wide restructuring, such as a scheme of arrangement, judicial management, or cross-border recognition of a foreign proceeding, our Singapore restructuring and insolvency page covers that formal toolkit. If you are unsure which it is, email HL@beyondhorizons.sg." },
  { question: "Can you advise on a facility governed by English law?", answer: "Yes. Beyond Horizons advises on Singapore law and English law, on local and cross-border facilities. English law advice is given by Hui Ling Teo, who is qualified in England and Wales. We do not advise on the law of any other country. Where the governing law or a proceeding sits outside Singapore and outside England and Wales, we coordinate with foreign counsel." },
  { question: "Do you also act for lenders?", answer: "Yes, in separate matters, on our Singapore lender finance counsel page. Conflicts are screened before any instruction. We do not act for both the borrower and the lender on the same matter, and we will not take an instruction that conflicts with an existing client's matters. Tell us the lender's name early so the conflict check can be completed before you share details." },
  { question: "What should I bring to a first conversation?", answer: "A short outline is enough to start: the type of facility, any security or guarantees, the governing law clause, any notice or demand you have received and when, and what you can realistically offer or need. Conversations are confidential. Sending an email or booking a consultation does not create a solicitor-client relationship until terms are agreed. Email HL@beyondhorizons.sg." },
] as const;

export const borrowerLegalService = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Beyond Horizons by Bethel Chambers LLC — English law and Singapore borrower finance counsel",
  url: "https://beyondhorizons.sg/singapore-borrower-finance-counsel",
  description: "English law and Singapore law counsel for sponsors and individuals as borrowers: English-law facility review, Singapore guarantees and security, margin calls and waivers. Beyond Horizons by Bethel Chambers LLC. HL@beyondhorizons.sg.",
  email: "HL@beyondhorizons.sg",
  knowsAbout: ["English law facility agreements", "Singapore law guarantees and security", "borrower finance counsel", "England and Wales"],
  areaServed: "Singapore",
  parentOrganization: { "@type": "Organization", name: "Bethel Chambers LLC" },
};

const RESTRUCTURING = "Singapore restructuring and insolvency";
const restructuringLink = <Link to="/singapore-restructuring-insolvency" className={linkCls}>{RESTRUCTURING}</Link>;

const BorrowerFinanceCounselPage = () => (
  <FinanceCounselLayout
    h1="English law and Singapore borrower finance counsel — sponsor facilities and private-bank credit"
    lead={<>{ENTITY_FULL} advises <strong>sponsors and individuals as borrowers</strong> — on acquisition and holding-company facilities, and on private-bank and securities-backed credit. We help you sign facilities you understand, and we stay practical if things get tight. We advise on <strong>Singapore law and English law</strong>, on <strong>local and cross-border</strong> facilities. English law advice is given by Hui Ling Teo, who is qualified in England and Wales.</>}
    second="Good borrowing starts before signature: knowing what you are guaranteeing, what can be enforced against you, and which terms are genuinely open to negotiation. If a covenant is missed, a margin call lands, or a lender sends a forced-sale notice, the same understanding of the documents is what keeps your options open. We do not advise on the law of any other country; where the governing law or a proceeding sits outside Singapore and outside England and Wales, we coordinate with foreign counsel."
    heroNote="This page is general information, not advice on your documents or a promise of any outcome with your lender."
    faqs={borrowerFaqs}
    related={[
      { label: "Singapore lender finance counsel for banks, private banks and credit funds", to: "/singapore-lender-finance-counsel" },
      { label: "Singapore restructuring and insolvency: schemes, judicial management and Model Law", to: "/singapore-restructuring-insolvency" },
      { label: "Cross-border M&A counsel", to: "/expertise/ma-cross-border" },
      { label: "Meet Hui Ling Teo", to: "/team/hui-ling-teo" },
      { label: "Beyond Horizons home", to: "/" },
    ]}
    ctaHeading="Talk through your facility"
    ctaBody="Whether you are about to sign or have just received a notice, send a short confidential outline. We will come back with a practical next step where appropriate."
  >
    <section className="space-y-4">
      <H2>English-law facilities when you are the borrower</H2>
      <P>Many sponsor and private-bank facilities in the region are documented under <strong>English law</strong>, while the guarantees, share charges, and account security bite on Singapore companies and Singapore assets. Beyond Horizons advises borrowers on <strong>English law facility documents</strong> and on the <strong>Singapore law</strong> side of that package. English law advice is given by Hui Ling Teo, who is qualified in England and Wales. We are not an English law firm; where the governing law or a proceeding sits outside Singapore and outside England and Wales, we coordinate with foreign counsel.</P>
      <P>Email {EMAIL} with a short outline (facility type, governing-law clause, any notice received). Conversations are confidential. Sending an email does not create a solicitor–client relationship until terms are agreed.</P>
    </section>

    <section className="space-y-4">
      <H2>Who this page is for</H2>
      <Bullets items={[
        <><strong>Sponsors and sponsor holding companies</strong> borrowing to fund an acquisition, a holding structure, or a portfolio company</>,
        <><strong>Individuals</strong> with private-bank, portfolio, or securities-backed credit facilities</>,
        <>Directors and principals asked to give <strong>personal guarantees or security</strong> for a facility</>,
      ]} />
    </section>

    <section className="space-y-4">
      <H2>How we help borrowers</H2>
      <Bullets items={[
        "Borrower-side review and mark-up of facility agreements, security, and guarantees",
        "The Singapore law side of English law facilities: guarantees and security given by Singapore companies or over Singapore assets",
        "Separating negotiable commercial points from fixed legal ones before you sign",
        "Personal guarantees and third-party security: scope, caps, release",
        "Private-bank and securities-backed facilities: understanding margin, notice, and close-out terms before you need them",
        "Margin calls and forced-sale notices: reading the documents quickly and mapping options",
        "Covenant breaches, waivers, amendments, and short forbearance or standstill arrangements",
        "Cross-border facilities, with foreign counsel for any law other than Singapore or English law",
      ]} />
    </section>

    <section className="space-y-4">
      <H2>Before you sign an English-law facility: what a sponsor should have checked</H2>
      <P>Many sponsor facilities in the region are documented under English law, but the guarantees, share charges, and account security often bite on Singapore companies and Singapore assets. Before signing, have counsel check:</P>
      <Bullets items={[
        <><strong>Guarantee and security scope</strong> — which group companies give guarantees, what assets are charged, and whether the package goes further than the deal needs;</>,
        <><strong>Singapore enforcement</strong> — what a lender could actually do against a Singapore obligor or Singapore assets, and on what notice;</>,
        <><strong>Commercial headroom</strong> — covenant levels and testing, equity cure rights, permitted payments and distributions, and change-of-control triggers;</>,
        <><strong>Fit with what already exists</strong> — existing shareholder loans, other lenders' security, and constitutional documents of the Singapore entities.</>,
      ]} />
      <P>Some of these points are fixed by law; many are commercial and negotiable. Knowing which is which is most of the value of a borrower-side review.</P>
    </section>

    <section className="space-y-4">
      <H2>Private-bank and securities-backed credit for individuals</H2>
      <P>A portfolio or securities-backed facility lets you borrow against assets held in custody. The terms usually give the bank wide rights when values fall. Before you need them, understand:</P>
      <Bullets items={[
        "which assets count, and at what lending value;",
        "how a margin call is made, how you will be notified, and how long you have to respond;",
        "what the bank may sell, in what order, and how prices are set;",
        "which law governs the facility, and which governs the security.",
      ]} />
      <P>We advise on the legal position under Singapore law and English law. We do not give investment advice or advise on which products to hold.</P>
    </section>

    <section className="space-y-4">
      <H2>If a margin call or forced-sale notice arrives</H2>
      <P>Act quickly — timeframes in these facilities can be short. Counsel's job at this point is practical:</P>
      <ol className="list-decimal pl-6 space-y-2 text-muted-foreground leading-relaxed">
        <li><strong>Read the documents against the facts</strong> — was notice given as required, how much time is there, what is the bank entitled to sell, and how will prices be determined?</li>
        <li><strong>Assess whether there is a real dispute</strong> — for example about notice, timing, or valuation — or whether the facts do not support one.</li>
        <li><strong>Map the options</strong> — an orderly top-up or sale, a request for more time, alternative collateral, or a documented standstill.</li>
        <li><strong>Keep the record clean</strong> — respond in writing, keep copies, and avoid statements that could be read as accepting a position you dispute.</li>
      </ol>
      <P>We cannot promise that a close-out can be stopped or reversed. What early advice usually does is make sure you are acting on what the documents actually say.</P>
    </section>

    <section className="space-y-4">
      <H2>Waivers, forbearance, and when it becomes a restructuring</H2>
      <P>A missed covenant test or a temporary cash shortfall does not have to mean enforcement. Lenders often prefer a realistic plan. A credible request usually explains what happened, includes current financial information, sets out a cure or repayment path, and is clear about existing security and guarantees. Any waiver, amendment, or standstill should be documented so both sides know what is waived or paused and what is not. Whether a lender agrees is its decision.</P>
      <SimpleTable
        head={["Situation", "Where to start"]}
        rows={[
          ["Covenant breach, missed test, waiver or amendment request", "This page"],
          ["Short forbearance or standstill while you refinance or sell an asset", "This page"],
          ["Margin call or forced-sale notice on a private-bank facility", "This page"],
          ["Company-wide restructuring, scheme of arrangement, judicial management", restructuringLink],
          ["Recognition of a foreign insolvency proceeding in Singapore", restructuringLink],
        ]}
      />
    </section>

    <section className="space-y-4">
      <H2>How a first conversation works</H2>
      <P>A short, confidential outline is enough: the type of facility, any security or guarantees, the governing law clause, any notice or demand received and when, and what you can realistically offer or need. We screen conflicts first. We do not act for both the borrower and the lender on the same matter, and we will not take an instruction that conflicts with an existing client's matters. Engagement is proposal-based. This page does not publish fees. Sending an email or booking a consultation does not create a solicitor–client relationship until terms are agreed.</P>
      <CtaRow />
    </section>
  </FinanceCounselLayout>
);

export default BorrowerFinanceCounselPage;
