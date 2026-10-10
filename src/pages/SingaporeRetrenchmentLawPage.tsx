import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { retrenchmentFaqs } from "@/content/singapore-retrenchment-law";

const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-14 mb-5">{children}</h2>
);
const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="font-serif text-xl text-foreground mt-8 mb-3">{children}</h3>
);
const P = ({ children }: { children: ReactNode }) => (
  <p className="text-muted-foreground leading-relaxed mb-4">{children}</p>
);
const B = ({ children }: { children: ReactNode }) => (
  <strong className="font-semibold text-foreground">{children}</strong>
);
const A = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} className="text-primary underline-offset-2 hover:underline">{children}</a>
);
const UL = ({ children }: { children: ReactNode }) => (
  <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-4">{children}</ul>
);
const Figure = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} loading="lazy" width={1080} height={1350} className="block w-full max-w-[540px] h-auto mx-auto my-6 rounded-sm border border-border" />
);

const sources: [string, string][] = [
  ["Ministry of Manpower, Labour Market Report, Second Quarter 2026 (press release 21 September 2026)", "https://www.mom.gov.sg/newsroom/press-releases/2026/0921-labour-market-report---second-quarter-2026"],
  ["MOM Labour Market Report 2Q 2026, full report (Table 3.1 and narrative)", "https://stats.mom.gov.sg/iMAS_PdfLibrary/mrsd-Labour-Market-Report-2Q-2026.pdf"],
  ["MOM, Labour Market Report Fourth Quarter 2025 (annual 2025 figures)", "https://www.mom.gov.sg/newsroom/press-releases/2026/0320-labour-market-4q-2025"],
  ["MOM, Labour Market Advance Release 4Q 2024 (non-recession average footnote)", "https://www.mom.gov.sg/newsroom/press-releases/2025/0127-labour-market-advance-release---4q-2024"],
  ["MOM, Mandatory retrenchment notifications", "https://www.mom.gov.sg/employment-practices/retrenchment/mandatory-retrenchment-notifications"],
  ["MOM, written answer to a Parliamentary question on MRN enforcement and penalties, 7 April 2026", "https://www.mom.gov.sg/newsroom/parliament-questions-and-replies/2026/0407-written-answer-to-pq-on-mrn-enforcement-and-penalties"],
  ["MOM, Termination with notice", "https://www.mom.gov.sg/employment-practices/termination-of-employment/termination-with-notice"],
  ["MOM, Responsible retrenchment", "https://www.mom.gov.sg/employment-practices/retrenchment/responsible-retrenchment"],
  ["Tripartite Advisory on Managing Excess Manpower and Responsible Retrenchment", "https://www.mom.gov.sg/-/media/mom/documents/employment-practices/guidelines/tripartite-advisory-on-managing-excess-manpower-and-responsible-retrenchment.pdf"],
  ["MOM press release on the Workplace Fairness (Dispute Resolution) Bill (4 November 2025)", "https://www.mom.gov.sg/newsroom/press-releases/2025/workplace-fairness--dispute-resolution----bill-press-release"],
  ["TAFEP, Workplace Fairness", "https://www.tal.sg/tafep/workplace-fairness"],
  ["MOM, Fair Consideration Framework (work-pass consequences where fair employment guidelines are not followed)", "https://www.mom.gov.sg/employment-practices/fair-consideration-framework"],
  ["MOM, oral answer to Parliamentary questions on retrenchment, 6 October 2026", "https://www.mom.gov.sg/newsroom/parliament-questions-and-replies/2026/1006-oral-answer-to-pq-on-retrenchment"],
  ["The Straits Times, \u201cMOM weighs \u2018action\u2019 against firms that can afford retrenchment benefits but refuse to pay: Jasmin Lau\u201d", "https://www.straitstimes.com/singapore/politics/mom-weighs-action-against-firms-that-can-afford-retrenchment-benefits-but-refuse-to-pay-jasmin-lau"],
  ["MOM, Second Reading speech on the Workplace Fairness Legislation Bill, 7 January 2025 (para 47)", "https://www.mom.gov.sg/newsroom/speeches/2025/0107-second-reading-speech-for-workplace-fairness-legislation-bill"],
  ["Workplace Fairness Act 2025 (Singapore Statutes Online), section 4", "https://sso.agc.gov.sg/Acts-Supp/8-2025/"],
  ["Workplace Fairness (Dispute Resolution) Act 2025 (Singapore Statutes Online)", "https://sso.agc.gov.sg/Acts-Supp/22-2025"],
  ["TAFEP, Responsible retrenchment practices", "https://www.tal.sg/tafep/employment-practices/retrenchment/responsible-retrenchment-practices"],
];

const checklist: [string, string, string][] = [
  ["Notify MOM", "Statute", "Date each employee was told; proof the MRN was filed within five working days"],
  ["Notice", "Statute and contract", "The contract clause or Employment Act minimum used"],
  ["Fair selection", "Tripartite guidelines", "Written, objective criteria applied consistently"],
  ["Retrenchment benefit", "Contract, collective agreement, norm", "Basis for the amount and comparison with the norm"],
  ["Workplace Fairness Act", "Not yet in force (target end-2027)", "A selection memo you would be comfortable defending once it is"],
];

export default function SingaporeRetrenchmentLawPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <article className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-serif text-3xl md:text-5xl text-foreground leading-tight mb-5">
            Retrenchment law in Singapore (2026): what employers must do, and what is only good practice
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            By Hui Ling Teo, Beyond Horizons by Bethel Chambers LLC (a specialist practice group of Bethel Chambers LLC) · Updated <time dateTime="2026-10-10">10 October 2026</time>
          </p>

          <P><B>In short.</B> In Singapore, only a few retrenchment duties are hard law today. An employer with at least 10 employees must notify the Ministry of Manpower (MOM) within five working days after telling an employee, and must give contractual or Employment Act notice. Singapore law does not set a general retrenchment benefit. The amount depends on the employment contract or collective agreement, or on negotiation if neither provides for it, and MOM describes a prevailing norm of two weeks' to one month's salary per year of service. Fair selection is expected now under tripartite guidelines. The Workplace Fairness Act, passed in January 2025, is not yet in force; it is slated to take effect at the end of 2027. For context, MOM reported 4,620 retrenchments in April to June 2026, up from 3,830 in January to March, while employment kept growing.</P>

          <div className="border-l-4 border-primary bg-secondary/30 p-5 my-6">
            <p className="font-semibold text-foreground mb-2">Key takeaways</p>
            <UL>
              <li>Retrenchments rose to 4,620 in the second quarter of 2026 (2.0 per 1,000 employees). They were mainly attributed to reorganisation or restructuring, while employment grew by 11,400.</li>
              <li>Hard law today: notify MOM within 5 working days (employers with 10 or more employees) and give contractual or Employment Act notice.</li>
              <li>There is no general statutory retrenchment benefit. MOM describes a prevailing norm of 2 weeks' to 1 month's salary per year of service, usually for employees with at least 2 years' service.</li>
              <li>Fair selection is expected now under tripartite guidelines. The Workplace Fairness Act is slated for the end of 2027.</li>
            </UL>
          </div>

          <P>Who this is for: founders, general counsel and HR leads at Singapore companies, including aviation and finance businesses, who may be planning headcount changes. It is general information, not legal advice.</P>
          <P><B>A note on terms.</B> <em>Retrenchment</em> means dismissal because of redundancy or reorganisation, which is how MOM counts it. It is not the same as resignation or dismissal for misconduct, which follow different rules.</P>

          <H2>What do the latest retrenchment numbers show?</H2>
          <Figure src="/images/retrenchment/01-national-kpi-keyed.png" alt="Singapore retrenchments, second quarter 2026: 4,620 (2.0 per 1,000 employees), up from 3,830 (1.6) in the first quarter, with 11,400 jobs added and annual totals for 2023 to 2025." />
          <UL>
            <li><B>April to June 2026:</B> 4,620 retrenchments (2.0 per 1,000 employees), up from 3,830 (1.6) in January to March.</li>
            <li><B>Context:</B> MOM's commonly cited non-recession quarterly average was about 1.7 per 1,000 employees (2015 to 2019). The second quarter was above that, but employment still grew by 11,400 (the 19th consecutive quarter of growth, excluding migrant domestic workers), and overall unemployment in June 2026 was 1.9%.</li>
            <li><B>Annual totals:</B> 14,590 in 2023, 13,020 in 2024 and 14,490 in 2025.</li>
            <li><B>Early indicator:</B> employees on short work-weeks or temporary layoff fell to 700 in the second quarter, from 1,230 in the first.</li>
          </UL>
          <P>These are MOM survey figures, rounded to the nearest 10. The survey does not cover every employer, so do not read its figures against the legal threshold for notifying MOM.</P>
          <P>Plain reading: the rise is real, but it is not a broad collapse. "Rose" and "restructuring-driven" fit the data.</P>

          <H2>Which sectors saw the biggest rises in retrenchments?</H2>
          <P>The largest rises from the first quarter (January to March 2026) were in manufacturing, information and communications, and financial services. By number in the second quarter, manufacturing (870) retrenched the most, followed by wholesale and retail trade (830), information and communications (720) and financial services excluding insurance (710) (MOM Labour Market Report, second quarter 2026, Table 3.1).</P>
          <Figure src="/images/retrenchment/02-sector-bars-keyed.png" alt="Bar chart of the biggest second-quarter 2026 rises in retrenchments from the first quarter: manufacturing 670 to 870, information and communications 530 to 720, financial services 560 to 710; 72.1% mainly due to reorganisation or restructuring." />
          <UL>
            <li><B>Manufacturing:</B> 870, up from 670.</li>
            <li><B>Information and communications:</B> 720, up from 530.</li>
            <li><B>Financial services (excluding insurance):</B> 710, up from 560. Financial and insurance services together came to 760.</li>
            <li><B>Main reason:</B> reorganisation or restructuring, for 72.1% of retrenchments (employers may give more than one reason).</li>
            <li><B>Back in work:</B> 54.9% of retrenched residents were re-employed within six months, down from 60.7%. The 12-month rate, 69.8%, was broadly stable.</li>
          </UL>
          <P>For aviation readers: MOM's tables show 520 retrenchments in air transport and supporting services across 2025, and 20 in the second quarter of 2026. We draw no wider conclusion from that. (See our <A href="https://beyondhorizons.sg/industry/aviation">aviation practice</A>.)</P>

          <H2>What must a Singapore employer do by law when retrenching?</H2>
          <Figure src="/images/retrenchment/03-rules-matrix-keyed.png" alt="Table of employer duties when retrenching in Singapore: which are statute, which are tripartite guidance or norm, and that the Workplace Fairness Act is not yet in force." />
          <H3>Do I have to notify MOM?</H3>
          <P>Yes, if your business is registered in Singapore and has at least 10 employees. You must file a Mandatory Retrenchment Notification (MRN) within five working days after notifying an affected employee. MOM's written answer to a Parliamentary question on 7 April 2026 described administrative penalties of $1,000 for a first breach and $2,000 for later breaches. On-time filing improved to 81% in 2025, from 67% in 2024.</P>
          <H3>How much notice must I give?</H3>
          <P>The contract's notice period applies first. If the contract is silent, the Employment Act sets minimum notice by length of service, from one day up to four weeks for employees with five years or more.</P>
          <H3>How should employees be selected?</H3>
          <P>The Tripartite Guidelines on Fair Employment Practices (TGFEP) expect selection on objective factors, such as ability to contribute to future business needs, and not on discriminatory grounds. The guidelines are not a criminal statute, but MOM says it will take action against breaches of them; under its Fair Consideration Framework, this can include debarring an employer from hiring foreign employees on work passes.</P>
          <H3>Is a retrenchment benefit mandatory in Singapore?</H3>
          <P>Generally, no. There is no general statutory requirement or amount. MOM's guidance points to the employment contract or collective agreement, or to negotiation where neither provides for it. The Tripartite Advisory on Managing Excess Manpower and Responsible Retrenchment (TAMEM) describes a prevailing norm of two weeks' to one month's salary per year of service, usually for employees with at least two years' service. TAFEP notes that the norm depends on the company's financial position and industry, and that in unionised companies where the amount is stipulated in the collective agreement, the norm is one month's salary per year of service.</P>
          <H3>When does the Workplace Fairness Act take effect?</H3>
          <P>Parliament passed the Workplace Fairness Bill on 8 January 2025 (now the Workplace Fairness Act 2025). On 4 November 2025 it passed the Workplace Fairness (Dispute Resolution) Act 2025, a separate Act that amends the Workplace Fairness Act 2025 to provide for mediation of workplace fairness disputes and civil claims for discrimination. Neither is in force yet; MOM and TAFEP say the Workplace Fairness Act is slated to take effect at the end of 2027. Once in force, it will protect against discrimination on characteristics including age; nationality; sex, marital status, pregnancy status and caregiving responsibilities; race, religion and language ability; and disability and mental health conditions. It will also require grievance-handling processes and prohibit retaliation. As passed, the Act does not apply to employers with 25 or fewer employees, except for Section 26 — a number the Minister can change. MOM has said these small firms will be given more time before the requirements apply to them, that it will review this five years after the law is implemented, and that the tripartite guidelines continue to apply to them. Until the Act starts, the tripartite fair-selection expectations are the working standard.</P>
          <H3>What did MOM say in Parliament on 6 October 2026?</H3>
          <P>In its reply to Parliamentary questions, MOM said that, based on notification data, around 88% of employers paid retrenchment benefits in 2025. It said MOM and the tripartite partners are considering, as part of the ongoing Employment Act review, whether stronger obligations on employers are warranted, and are exploring bringing the notification period forward. Separately, The Straits Times (6 October 2026) reported that the Acting Minister for Manpower told Parliament MOM is considering possible administrative action against employers who can pay retrenchment benefits but do not, after repeated engagement. None of these measures is law yet.</P>

          <H2>Retrenchment checklist: law, norm and records to keep</H2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-border">
              <thead className="bg-secondary/40">
                <tr>
                  <th className="text-left p-3 font-semibold text-foreground">Duty</th>
                  <th className="text-left p-3 font-semibold text-foreground">Source today</th>
                  <th className="text-left p-3 font-semibold text-foreground">Keep on file</th>
                </tr>
              </thead>
              <tbody>
                {checklist.map(([d, s, k]) => (
                  <tr key={d} className="border-t border-border align-top">
                    <td className="p-3 text-foreground">{d}</td>
                    <td className="p-3 text-muted-foreground">{s}</td>
                    <td className="p-3 text-muted-foreground">{k}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H2>What should an employer check before announcing retrenchments?</H2>
          <Figure src="/images/retrenchment/04-pressure-test-keyed.png" alt="Five-question checklist before a retrenchment announcement in Singapore." />
          <ol className="list-decimal pl-6 space-y-2 text-muted-foreground leading-relaxed mb-4">
            <li><B>Is this a retrenchment in MOM's sense</B> (redundancy or reorganisation), rather than a resignation or dismissal for cause?</li>
            <li><B>When did the five-working-day clock start?</B> It runs from when the employee is told.</li>
            <li><B>Is the selection memo objective and consistent</B> across the affected group?</li>
            <li><B>Is the benefit basis written down</B> (contract, collective agreement or tripartite norm), with the reasoning on file?</li>
            <li><B>Is support for affected staff lined up?</B> For example, early alerts and job-matching through Workforce Singapore (WSG) and the Employment and Employability Institute (e2i).</li>
          </ol>

          <H2>How does this look from the employer's and the employee's side?</H2>
          <P><B>Employer.</B> The law asks for notification, notice and a defensible process; it does not set a benefit amount. A clean paper trail is usually the cheapest protection against later disputes, and good preparation for the Workplace Fairness Act. For a planned exercise, see our <A href="https://beyondhorizons.sg/expertise/employment-labor">employment and labour advice</A> and <A href="https://beyondhorizons.sg/singapore-employment-law">Singapore employment law counsel</A> pages. Companies without in-house counsel may also consider <A href="https://beyondhorizons.sg/industry/fractional-gc">fractional general counsel</A> for ongoing coverage.</P>
          <P><B>Employee.</B> Retrenched staff have contractual and, where applicable, collective-agreement rights to a benefit, and can raise disputes through the tripartite dispute channels. Six-month re-entry rates have softened, which is a reason for employers to take outplacement support seriously, not only the payment.</P>

          <H2>Frequently asked questions</H2>
          <div className="space-y-6">
            {retrenchmentFaqs.map((f) => (
              <div key={f.question}>
                <p className="font-semibold text-foreground mb-1">{f.question}</p>
                <p className="text-muted-foreground leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>

          <H2>Talk to us</H2>
          <P>If useful, a short note to <a href="mailto:HL@beyondhorizons.sg" className="font-semibold text-primary hover:underline">HL@beyondhorizons.sg</a> is enough to compare how a planned exercise reads from either side.</P>

          <p className="text-sm italic text-muted-foreground leading-relaxed mt-8 border-t border-border pt-6">Beyond Horizons is a specialist practice group of Bethel Chambers LLC, a Singapore law corporation regulated by the Law Society of Singapore. This page is general information on Singapore law as at October 2026, drawn from Ministry of Manpower, tripartite, statutory and Parliamentary sources (checked 10 October 2026). It does not constitute legal advice, and reading it or contacting us does not create a solicitor–client relationship. Any actual exercise turns on its contracts, collective agreements, facts and the law in force at the time.</p>

          <p className="font-semibold text-foreground mt-8 mb-2">Sources:</p>
          <ol className="list-decimal pl-6 space-y-1 text-sm text-muted-foreground break-words">
            {sources.map(([label, url]) => (
              <li key={url}>{label}: <A href={url}>{url}</A></li>
            ))}
          </ol>
        </article>
      </main>
      <Footer />
    </div>
  );
}
