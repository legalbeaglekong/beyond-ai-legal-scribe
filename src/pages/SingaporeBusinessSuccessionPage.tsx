import PillarPage from "@/components/PillarPage";
import {
  SUCCESSION_DESCRIPTION, SUCCESSION_DISCLAIMER, SUCCESSION_H1, SUCCESSION_TITLE, successionFaqs,
} from "@/content/singapore-business-succession-lawyer";

const p = "text-muted-foreground leading-relaxed";
const ul = "list-disc pl-6 space-y-3 text-muted-foreground leading-relaxed";
const h2 = "font-serif text-2xl md:text-3xl text-foreground mb-6";
const h3 = "font-serif text-xl text-foreground mt-6 mb-3";
const wrap = "container mx-auto px-6 max-w-4xl space-y-5";

const List = ({ items }: { items: string[] }) => <ul className={ul}>{items.map((i) => <li key={i}>{i}</li>)}</ul>;

export default function SingaporeBusinessSuccessionPage() {
  return <PillarPage
    slug="singapore-business-succession-lawyer"
    eyebrow=""
    breadcrumbName="Business Succession"
    serviceType="Business Succession"
    serviceDescription={SUCCESSION_DESCRIPTION}
    relatedHeading=""
    ctaHeading=""
    ctaBody={<>To discuss a succession, exit or reorganisation, email <a href="mailto:HL@beyondhorizons.sg" className="underline">HL@beyondhorizons.sg</a>.</>}
    lastUpdatedISO="2026-10-26"
    lastUpdatedLabel="October 2026"
    h1={SUCCESSION_H1} intro="" badges={[]} metaTitle={SUCCESSION_TITLE} metaDescription={SUCCESSION_DESCRIPTION} ogTitle={SUCCESSION_TITLE} ogDescription={SUCCESSION_DESCRIPTION}
    services={[]} updates={[]} relatedKeywords={[]}
    faqs={successionFaqs.map((f) => ({ q: f.question, a: f.answer }))}
    relatedPages={[
      { label: "Fractional general counsel for ongoing governance and board support", to: "/industry/fractional-gc" },
      { label: "Corporate transactions and shareholder matters", to: "/expertise/corporate-transactions" },
      { label: "Cross-border M&A, for a sale of the business", to: "/expertise/ma-cross-border" },
      { label: "Hui Ling Teo, Founder", to: "/team/hui-ling-teo" },
    ]}
    editorial={{
      entity: "",
      note: SUCCESSION_DISCLAIMER,
      intro: <>
        <p className={p}>Beyond Horizons by Bethel Chambers LLC advises founders and families on the Singapore-law side of business succession: who will own the company, who will run it, and what happens if a founder dies, loses capacity or wants to exit. We draft and review the documents that carry those decisions, from shareholders' agreements and family constitutions to holding-structure reorganisations, and trust deeds and family office set-up (legal documentation).</p>
        <p className={p}>Succession is not a single document. It works when the company constitution, shareholder arrangements and the founder's personal estate documents point the same way. Our role is to align the company side under Singapore law and to keep it current as the family and the business change.</p>
      </>,
      sections: <>
        <section className="py-12"><div className={wrap}>
          <h2 className={h2}>What we do</h2>
          <h3 className={h3}>Shareholder agreements and founder exits</h3>
          <List items={[
            "Shareholders' agreements for family and founder-owned companies, including pre-emption rights, transfer restrictions and deadlock procedures",
            "Buy-sell arrangements triggered by retirement, death, incapacity or departure, with valuation and payment mechanics",
            "Company share buy-backs within the limits of the Companies Act",
            "Founder exits, including sale of shares to family members, management or a third-party buyer",
          ]} />
          <h3 className={h3}>Family constitutions and governance</h3>
          <List items={[
            "Family constitutions and charters setting out how the family makes decisions about the business",
            "Carrying the binding parts into the shareholders' agreement, company constitution or other enforceable documents",
            "Family councils, board composition and rules for family members who work in the business",
            "Board and management transition from one generation to the next",
          ]} />
          <h3 className={h3}>Holding-structure reorganisations</h3>
          <List items={[
            "Holding-company structures under Singapore law, including share classes that separate voting control from economic interests",
            "Sequencing share transfers, board and shareholder approvals and filings in the right order",
            "Approvals and announcements for listed-company reorganisations, where they apply",
            "Coordination with your tax advisers before any step is taken",
          ]} />
          <h3 className={h3}>Trusts and family office set-up</h3>
          <List items={[
            "Trust deeds under Singapore law and advice to settlors on their terms",
            "Family office set-up (legal documentation) for the entities involved",
            "Working alongside the licensed trust company, tax adviser or other provider you choose",
          ]} />
          <p className={p}>Wills and estates are handled by Bethel Chambers LLC.</p>
        </div></section>
        <section className="py-12 bg-secondary/20"><div className={wrap}>
          <h2 className={h2}>Who we help</h2>
          <p className={p}>We act for founders and family-owned businesses with interests in aviation, wellness and healthcare, fintech and more.</p>
          <p className={p}>Typical starting points include a founder planning to step back, a family preparing the next generation to take over, shareholders who want clear exit terms, and owners who want their personal and company documents aligned.</p>
        </div></section>
        <section className="py-12"><div className={wrap}>
          <h2 className={h2}>How we work</h2>
          <List items={[
            "Hui Ling Teo, Founder, leads each matter. She is qualified as a solicitor in England and Wales and as an advocate and solicitor in Singapore.",
            "We start by mapping the existing documents: constitution, shareholders' agreements, share register and any trust or holding arrangements.",
            "We agree a written scope and a sequence of steps before work begins, set out in a signed engagement letter after conflict checks and client due diligence.",
            "Fees: fees are fixed and capped on defined scopes, hourly as quoted for each matter, or a fixed monthly retainer.",
            "We advise on Singapore law. Where a matter involves the law of another country, we work alongside qualified local counsel. We coordinate with your tax advisers.",
            "Advice can be given in English or Mandarin.",
          ]} />
        </div></section>
      </>,
    }}
  />;
}
