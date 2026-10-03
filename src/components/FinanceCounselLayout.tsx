import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "@/lib/router-compat";
import { EMAIL, WHATSAPP_URL } from "@/config/business";

export const ENTITY_FULL =
  "Beyond Horizons by Bethel Chambers LLC (a specialist practice group of Bethel Chambers LLC)";

export const linkCls = "text-accent underline underline-offset-4 hover:opacity-80";

export const H2 = ({ children, id }: { children: ReactNode; id?: string }) => (
  <h2 id={id} className="font-display text-2xl md:text-3xl text-foreground">{children}</h2>
);

export const P = ({ children }: { children: ReactNode }) => (
  <p className="text-muted-foreground leading-relaxed">{children}</p>
);

export const Bullets = ({ items }: { items: ReactNode[] }) => (
  <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
    {items.map((it, i) => <li key={i}>{it}</li>)}
  </ul>
);

export const SimpleTable = ({ head, rows }: { head: string[]; rows: ReactNode[][] }) => (
  <div className="overflow-x-auto rounded-lg border border-border">
    <table className="w-full text-sm text-left">
      <thead className="bg-secondary/40">
        <tr>{head.map((h) => <th key={h} className="px-4 py-3 font-semibold text-foreground">{h}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="border-t border-border align-top">
            {r.map((c, j) => <td key={j} className={`px-4 py-3 ${j === 0 ? "text-foreground font-medium" : "text-muted-foreground"}`}>{c}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const CtaRow = () => (
  <div className="flex flex-wrap gap-3">
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">Schedule a consultation</a>
    <a href={`mailto:${EMAIL}`} className="inline-flex items-center rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-muted">Email {EMAIL}</a>
  </div>
);

type Faq = { readonly question: string; readonly answer: string };
type Related = { label: string; to: string };

interface Props {
  h1: string;
  lead: ReactNode;
  second: ReactNode;
  heroNote: string;
  children: ReactNode;
  faqs: readonly Faq[];
  related: Related[];
  ctaHeading: string;
  ctaBody: string;
}

const FinanceCounselLayout = ({ h1, lead, second, heroNote, children, faqs, related, ctaHeading, ctaBody }: Props) => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-[72px] md:pt-[88px]">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 space-y-14">
        <header className="space-y-6 border-b border-border pb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-medium">{ENTITY_FULL}</p>
          <h1 className="font-display text-3xl md:text-5xl leading-tight text-foreground">{h1}</h1>
          <P>{lead}</P>
          <P>{second}</P>
          <p className="text-sm text-muted-foreground italic">{heroNote}</p>
          <CtaRow />
        </header>

        {children}

        <section className="space-y-6">
          <H2>Frequently asked questions</H2>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.question} className="group py-4">
                <summary className="cursor-pointer list-none font-display text-lg text-foreground">{f.question}</summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <H2>Related pages</H2>
          <ul className="space-y-2">
            {related.map((r) => (
              <li key={r.to}><Link to={r.to} className={linkCls}>{r.label}</Link></li>
            ))}
            <li className="pt-2 text-xs"><Link to="/industry/aviation" className="text-muted-foreground hover:underline">Aviation finance and leasing counsel</Link></li>
          </ul>
        </section>

        <section className="space-y-5 rounded-lg border border-border bg-card p-8">
          <H2>{ctaHeading}</H2>
          <P>{ctaBody}</P>
          <CtaRow />
          <p className="text-xs text-muted-foreground">
            Beyond Horizons is a specialist practice group of Bethel Chambers LLC. Content is general information only and does not create a solicitor–client relationship.
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default FinanceCounselLayout;
