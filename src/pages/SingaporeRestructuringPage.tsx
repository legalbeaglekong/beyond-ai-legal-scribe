import { Link } from "@/lib/router-compat";
import PillarPage from "@/components/PillarPage";
import type { ReactNode } from "react";
import { FileText, Scale, Shield, Briefcase, Users, Calendar } from "lucide-react";

const h3 = "font-serif text-xl text-foreground mt-8 mb-3";
const pc = "text-muted-foreground leading-relaxed";
const ac = "text-primary underline underline-offset-2";
const Ext = ({ href, children }: { href: string; children: ReactNode }) => <a href={href} target="_blank" rel="noopener" className={ac}>{children}</a>;

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
    afterUpdates={<>
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-muted-foreground leading-relaxed">Facility issues often come before a restructuring. For lender-side facilities, security, demands and recovery, see our <Link to="/singapore-lender-finance-counsel" className="text-primary hover:underline">Lender finance counsel</Link> page. If you are a sponsor or individual borrower dealing with facility terms, guarantees, margin calls or waivers, see our <Link to="/singapore-borrower-finance-counsel" className="text-primary hover:underline">Borrower finance counsel</Link> page.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl space-y-4">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">What can aircraft lessors do when a foreign airline files Chapter 11?</h2>
          <p className={pc}><strong className="text-foreground">In short.</strong> When a non-US airline files for Chapter 11 in the United States, lessors and aircraft financiers should check, rather than assume, whether the US "60-day rule" for aircraft is available. That rule, in <Ext href="https://www.law.cornell.edu/uscode/text/11/1110">section 1110</Ext> of the US Bankruptcy Code, is limited by its own wording to equipment of a debtor that held a particular US air carrier operating certificate when the transaction was entered into. Where it is not available, lessors generally work through the general Chapter 11 tools (the automatic stay, adequate protection and the rules on assuming or rejecting leases) and, case by case, the <Link to="/industry/aviation" className={ac}>Cape Town Convention</Link>.</p>
          <h3 className={h3}>Does section 1110 protect lessors of a foreign airline?</h3>
          <p className={pc}>It depends on the statute's scope. Section 1110 covers an aircraft, aircraft engine, propeller, appliance or spare part that is leased to, conditionally sold to, or subject to a security interest granted by a debtor that, "at the time such transaction is entered into, holds an air carrier operating certificate issued pursuant to chapter 447 of title 49" of the US Code, "for aircraft capable of carrying 10 or more individuals or 6,000 pounds or more of cargo". Where it applies, the stay stops limiting the lessor's rights unless, within 60 days after the order for relief (in a voluntary case, the filing date), the airline agrees, with court approval, to perform its obligations and cures defaults as the section requires. Whether a particular airline meets that test is a question for US counsel.</p>
          <h3 className={h3}>What tools do lessors have instead?</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
            <li><strong className="text-foreground">The automatic stay and stay relief.</strong> Filing stops most enforcement. A lessor can ask the court to lift or condition the stay, for example for lack of <strong className="text-foreground">adequate protection</strong> of its interest (section 362(d)).</li>
            <li><strong className="text-foreground">Adequate protection.</strong> Payments or other terms that protect the lessor against loss of value while the aircraft stays in use.</li>
            <li><strong className="text-foreground">Performance from day 60.</strong> For unexpired leases of personal property, which include aircraft leases, the debtor must generally perform obligations first arising from 60 days after the order for relief until it assumes or rejects the lease (section 365(d)(5)), unless the court orders otherwise.</li>
            <li><strong className="text-foreground">Assume or reject.</strong> In Chapter 11, the debtor can generally decide whether to assume or reject such a lease at any time before a plan is confirmed, although a lessor can ask the court to set an earlier deadline (section 365(d)(2)).</li>
            <li><strong className="text-foreground">Committees.</strong> The official committee of unsecured creditors, appointed by the US Trustee (the US Department of Justice official who oversees Chapter 11 cases), acts for all unsecured creditors. Lessors may also coordinate with each other. Each lessor still negotiates its own aircraft.</li>
          </ul>
          <h3 className={h3}>Does the Cape Town Convention help in a US case?</h3>
          <p className={pc}>Possibly, but it is not straightforward. The Convention's insolvency remedy, Alternative A of Article XI of the Protocol to the Cape Town Convention on aircraft equipment, applies where the Contracting State that is the "primary insolvency jurisdiction" (broadly, where the airline's centre of main interests is) has declared that it will apply. Under Alternative A, the airline or its insolvency administrator must, by the end of a waiting period that the declaring state sets, either give possession of the aircraft to the creditor or cure defaults and agree to perform. The United States has not made an Alternative A declaration and relies on section 1110 instead. How a US court treats Cape Town rights in a foreign airline's case is a question for US counsel, aircraft by aircraft.</p>
          <h3 className={h3}>A current example: airBaltic</h3>
          <p className={pc}>According to court records, Air Baltic Corporation AS (airBaltic), the Latvian airline, filed a voluntary Chapter 11 petition in the US Bankruptcy Court for the Southern District of New York on 14 September 2026 (<em>In re Air Baltic Corporation AS</em>, Case No. 26-12188 (LGB)). Cases like this raise the questions above. We express no view on airBaltic's prospects, on any party's conduct or claims, or on how these rules apply in that case.</p>
          <p className={pc}><strong className="text-foreground">If you have exposure to a non-US airline in a US process and would like to discuss the <Link to="/singapore-lender-finance-counsel" className={ac}>lease and security documents</Link>, you are welcome to write to <a href="mailto:HL@beyondhorizons.sg" className={ac}>HL@beyondhorizons.sg</a>.</strong></p>
          <p className={pc + " text-sm"}><em>General information as at October 2026, not legal advice; US law points are described as stated in the US Bankruptcy Code and are not US legal advice. Beyond Horizons by Bethel Chambers LLC is a Singapore law practice group, not an English law firm; English law input is given through Hui Ling Teo, who is qualified as a solicitor in England and Wales, and advice on other laws (including US law) is obtained through foreign counsel. We do not give US legal advice.</em></p>
        </div>
      </section>
    </>}
    faqs={[
      { q: "What is a scheme of arrangement in Singapore?", a: "A scheme is a court-supervised compromise between a company and its creditors (or members), governed by Sections 71–73 IRDA. It binds dissenting creditors within a class once approved by a majority in number representing 75% in value and sanctioned by the court. Singapore's regime offers world-class features including automatic moratorium, super-priority rescue financing and cross-class cram-down." },
      { q: "How does judicial management work?", a: "JM is a court-driven rescue process under IRDA Part 7. A judicial manager (an independent insolvency practitioner) takes over management to rehabilitate the company or achieve a better realisation than winding-up. Interim JM is available for urgent protection." },
      { q: "What is the IRDA?", a: "The Insolvency, Restructuring and Dissolution Act 2018 (in force from 30 July 2020) consolidates Singapore's personal and corporate insolvency regimes, modernises rescue tools and adopts the UNCITRAL Model Law on Cross-Border Insolvency." },
      { q: "Can foreign insolvency proceedings be recognised in Singapore?", a: "Yes. Singapore has adopted the UNCITRAL Model Law via IRDA's Third Schedule. Foreign representatives can apply for recognition of foreign main and non-main proceedings, with corresponding relief including stays and asset protection." },
      { q: "What are directors' duties when a company is in financial distress?", a: "As solvency deteriorates, directors' fiduciary duties shift to take creditor interests into account. Directors may face personal liability for wrongful trading (Section 239 IRDA) and fraudulent trading (Section 238 IRDA). Early, documented advice is critical." },
      { q: "How do super-priority rescue financings work in Singapore?", a: "Under Section 67 IRDA, courts can grant priority — including ahead of existing secured creditors in some cases — to new rescue financing extended during scheme proceedings, modelled on US Chapter 11 DIP financing. This is a key tool for distressed sponsors and credit funds." },
      { q: "What is the typical timeline for a Singapore scheme?", a: "A pre-packaged scheme can complete in as little as 4–8 weeks if creditor support is already in place. A contested scheme typically runs 4–9 months from moratorium application through court sanction." },
      { q: "How does Beyond Horizons support restructuring matters?", a: "We advise companies, boards, lenders, bondholders and sponsors on Singapore restructurings — from early solvency analysis and lender negotiations to scheme/JM execution, cross-border recognition and post-restructuring operating model design." },
      { q: "Does section 1110 apply when a foreign airline files Chapter 11?", a: "It depends on the statute's scope. Section 1110 applies to aircraft equipment of a debtor that, when the transaction was entered into, held an air carrier operating certificate issued under chapter 447 of title 49 of the US Code, for aircraft that can carry 10 or more individuals or 6,000 pounds or more of cargo. US counsel should confirm whether a particular airline meets that test." },
      { q: "What can an aircraft lessor ask for in a Chapter 11 case?", a: "Typically relief from the automatic stay or adequate protection of its interest, performance of lease obligations first arising from 60 days after the order for relief, and, where needed, a court-set deadline for the airline to assume or reject the lease. US counsel should advise on any particular case." },
      { q: "When must a Chapter 11 debtor decide whether to keep an aircraft lease?", a: "Generally at any time before a plan is confirmed, unless the court sets an earlier deadline at the request of a party such as the lessor (section 365(d)(2) of the US Bankruptcy Code)." },
      { q: "Does the Cape Town Convention apply in a US Chapter 11 case?", a: "It may be relevant, but its insolvency remedy (Alternative A) applies where the state of the airline's primary insolvency jurisdiction has declared it will apply, with a waiting period that state sets. The United States has not made that declaration and relies on section 1110 instead. How a US court treats Cape Town rights is a question for US counsel." },
    ]}
    relatedKeywords={["restructuring", "insolvency", "scheme", "judicial management", "irda", "distressed", "workout", "creditor", "default"]}
    relatedHeading="Related Insights — Restructuring & Insolvency"
    ctaHeading="Schedule a Singapore Restructuring Consultation"
    ctaBody="If you are facing covenant pressure, contemplating a scheme, or evaluating a distressed opportunity, we can help you move quickly and decisively. Book a complimentary strategic consultation."
    exploreLink={{ label: "Explore our Practice", to: "/expertise" }}
    lastUpdatedISO="2026-10-12"
    lastUpdatedLabel="June 2026"
  />
);

export default SingaporeRestructuringPage;
