import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "@/lib/router-compat";
import { EMAIL, WHATSAPP_URL } from "@/config/business";
import WordDocumentPreview from "@/components/WordDocumentPreview";
import zhengDocument from "@/assets/beyond-precedent-episode-1-zheng-bo-yuan.docx.asset.json";
import harishDocument from "@/assets/beyond-precedent-episode-1-harish.docx.asset.json";

const INSIGHTS_URL = "https://www.insights.beyondhorizons.sg/";
const REUTERS_URL = "https://www.reuters.com/legal/transactional/these-law-students-got-use-ai-final-exams-howd-they-do-2023-08-29/";
const SSRN_URL = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6525800";

export const beyondPrecedentFaqs = [
  { question: "What is Beyond Precedent?", answer: "Beyond Precedent is Beyond Horizons’ educational drafting challenge — best understood as a non-contentious moot court for the AI era. It was initially envisioned in 2023 as vibe drafting — drafting with AI the way vibe coding uses AI for code. In each session, two law students from any country draft an agreement or legal document using ten prompts on free AI tools, then revise with a short edit log. Like mooting, it is supervised and scored; instead of advocacy, it tests judgment over AI-assisted drafting. The firm uses the programme to explore how talent develops and how legal services should be designed when generative AI is in the first draft." },
  { question: "Who can take part?", answer: "Law students from any nation may be invited into a session. Participation is by selection for each cohort; this page describes the concept — it is not an open application portal unless a live apply form is added later." },
  { question: "What do the ten prompts and free AI tools mean in practice?", answer: "Each pair works from a fixed set of ten drafting prompts and may use publicly available free AI writing tools. The point is not a vendor bake-off. The point is to watch how students prompt, what the model returns, and what human editing must still do." },
  { question: "What are “post-editing work products”?", answer: "After the AI-assisted first pass, students revise the draft and record a short edit log. When cleared for public view, the session archive may show selected revised excerpts or artefacts — illustrative only, not client deliverables and not legal advice." },
  { question: "How does research on AI and legal writing relate to this programme?", answer: "Public research often finds that generative AI can change drafting speed and can help some writers more than others, while quality and later reasoning still depend on human judgment. Beyond Precedent is grounded in that conversation, including widely reported AI-and-legal-writing studies and related academic work such as SSRN papers on AI and human legal reasoning. The firm uses the challenge to explore talent development and post-AI service design — it does not claim the studies endorse Beyond Horizons." },
  { question: "Is this a hiring pipeline or a job offer?", answer: "No. Beyond Precedent explores how future lawyers learn to supervise AI drafts. It is not a promise of employment, internship placement, pupillage, or a retainer." },
  { question: "Does Beyond Horizons use these session drafts for client matters?", answer: "No. Session materials are for teaching, demonstration, and talent-exploration only. Client work stays under separate engagement and professional obligations." },
  { question: "How do I follow sessions or ask about the next cohort?", answer: "Use the consultation or contact path on beyondhorizons.sg, or watch Insights for related writing." },
] as const;

const PROGRAMME_DISCLAIMER = "Beyond Precedent is an educational drafting challenge run by Beyond Horizons. It is not legal advice, not a client engagement, and not a guarantee of internship, employment, or any other opportunity with Beyond Horizons or any related entity. Student drafts and edit logs are teaching materials only and must not be used with real counterparties.";
const RESEARCH_DISCLAIMER = "Figures and findings are summarised from published research as reported in the cited sources. They describe those studies’ settings and do not predict outcomes for any particular student, lawyer, or matter.";

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-display text-2xl md:text-3xl text-foreground">{children}</h2>
);
const ext = "text-accent underline underline-offset-4 hover:opacity-80";

const CtaRow = () => (
  <div className="flex flex-wrap gap-3">
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">Ask about the next session</a>
    <a href={`mailto:${EMAIL}`} className="inline-flex items-center rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-muted">Contact Us</a>
    <a href={INSIGHTS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-muted">Read Insights</a>
  </div>
);

const steps = [
  "Invite two law students (any nation) into a supervised session.",
  "Issue a fixed set of ten drafting prompts (fictional / teaching fact patterns only).",
  "Each student drafts with any free public AI tool and names the tool (and model if known).",
];

const related = [
  { label: "Our work", to: "/work" },
  { label: "About the firm", to: "/about" },
  { label: "Team", to: "/team" },
  { label: "Courses & training", to: "/courses" },
  { label: "AI Code Counsel", to: "/industry/ai-code-counsel" },
  { label: "Fractional GC", to: "/industry/fractional-gc" },
];

const participants = [
  {
    id: "zheng-work-product",
    name: "Zheng Bo Yuan",
    detail: "National University of Singapore · Rising second-year law student",
    document: zhengDocument,
  },
  {
    id: "harish-work-product",
    name: "Harish",
    detail: "National University of Singapore · First-year law student",
    document: harishDocument,
  },
];

const BeyondPrecedentPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-[72px] md:pt-[88px]">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 space-y-16">
        <header className="space-y-6 border-b border-border pb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Educational drafting challenge</p>
          <h1 className="font-display text-4xl md:text-6xl text-foreground">Beyond Precedent</h1>
          <p className="font-display text-xl md:text-2xl text-accent">A non-contentious moot court for the AI era.</p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Beyond Precedent is Beyond Horizons’ educational drafting challenge: two law students from any country draft an agreement or legal document using ten prompts and free public AI tools, then revise with a short edit log. Like a moot court, it is supervised and scored — but instead of advocacy, students are tested on judgment over AI-assisted drafting. The page centres the academic research that grounds the work and how our team — which started independently in 2023 — is designing legal services for a post-AI age, including how talent learns when generative AI sits in the first draft.
          </p>
          <CtaRow />
          <p className="text-sm text-muted-foreground italic">{PROGRAMME_DISCLAIMER}</p>
        </header>

        <section className="space-y-4">
          <H2>Why we started this</H2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Beyond Horizons’ team began independently in 2023.</p>
            <p>Beyond Precedent was initially envisioned as vibe drafting — drafting with AI the way “vibe coding” uses AI for code.</p>
            <p>As a practice we took on a further challenge: design legal services for a post-AI age, including how to develop legal talent when models produce the first draft.</p>
          </div>
        </section>

        <section className="space-y-4">
          <H2>How it works</H2>
          <ol className="list-decimal pl-6 space-y-2 text-muted-foreground leading-relaxed">
            {steps.map((s) => <li key={s}>{s}</li>)}
          </ol>
        </section>

        <section className="space-y-6">
          <H2>Research premise</H2>
          <p className="text-muted-foreground leading-relaxed">
            Firms and schools are testing how generative AI changes junior drafting speed, quality, and later judgment. Beyond Horizons runs Beyond Precedent to explore talent development and service design in that setting. The studies do not endorse Beyond Horizons.
          </p>
          <div className="space-y-3">
            <h3 className="font-display text-xl text-foreground">University of Minnesota exam study (Choi &amp; Schwarcz), as reported by Reuters, 29 August 2023</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
              <li>Students sat exams without AI, then with GPT-4 after prompting training.</li>
              <li>As reported, multiple-choice scores rose sharply with GPT-4 (about +29 points overall; about +45 for lower-performing students).</li>
              <li>As reported, essay performance did not improve on average; top performers scored about 20 points lower with GPT-4.</li>
              <li>The authors discussed a possible equalizing effect across skill levels, and cautioned that heavy AI framing can blunt independent issue-spotting.</li>
            </ul>
            <a href={REUTERS_URL} target="_blank" rel="noopener noreferrer" className={ext}>Read the Reuters report</a>
          </div>
          <div className="space-y-3">
            <h3 className="font-display text-xl text-foreground">Bednar, Cleveland, Erbsen &amp; Schwarcz — Artificial Intelligence and Human Legal Reasoning</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
              <li>As reported, a randomised controlled trial of roughly 100 upper-level Minnesota law students across synthesis, comprehension, application and revision tasks.</li>
              <li>In that study, AI on early synthesis produced stronger, faster memos.</li>
              <li>Early AI use did not impair later comprehension; the AI-exposed group outperformed on a later application task without AI.</li>
              <li>When everyone used AI to revise, weaker memos improved and stronger memos often regressed.</li>
              <li>The authors’ takeaway: AI does not inevitably erode or promote independent legal reasoning — effects depend on when and how it is used.</li>
            </ul>
            <a href={SSRN_URL} target="_blank" rel="noopener noreferrer" className={ext}>Read the SSRN abstract</a>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Beyond Precedent therefore trains the skill the research keeps circling — judgment about when to trust, rewrite, or reject a model draft — not “faster paste.”
          </p>
          <p className="text-sm text-muted-foreground italic border-l-2 border-accent pl-4">{RESEARCH_DISCLAIMER}</p>
        </section>
      </div>

      <section className="px-6 pb-16 md:pb-24" aria-labelledby="session-archive">
        <div className="mx-auto max-w-4xl space-y-4">
          <h2 id="session-archive" className="font-display text-2xl md:text-3xl text-foreground">Session archive</h2>
          <p className="max-w-3xl text-muted-foreground leading-relaxed">
            A post-editing work product is what a student produces after the AI-assisted first pass: a revised draft plus a short edit log recording what the model got wrong, invented, or needed rewriting. Archive items, when cleared, are illustrative only — not legal advice and not client deliverables.
          </p>
          <article className="space-y-8 border-t border-border pt-6" aria-labelledby="episode-one">
            <div className="max-w-3xl space-y-4">
              <p className="text-xs uppercase tracking-widest text-accent">Episode 1 · Student work products</p>
              <h3 id="episode-one" className="font-display text-2xl text-foreground">Sponsorship agreements</h3>
              <dl className="grid gap-4 text-sm sm:grid-cols-2">
                <div><dt className="font-semibold text-foreground">Guest judges</dt><dd className="text-muted-foreground">Shen Yang, Hanyi Zeng and Hui Ling Teo</dd></div>
                <div><dt className="font-semibold text-foreground">Hosted by</dt><dd className="text-muted-foreground">Sonia Motwani</dd></div>
              </dl>
              <p className="border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted-foreground">Each participant drafted their document in only 15 minutes, using free AI tools under limits on font size and page count. The uploaded work products include redlines and comments. Read them in that context: educational content only, not legal advice, and not for use with real counterparties.</p>
            </div>
            <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-8">
              {participants.map((p) => (
                <section key={p.id} className="min-w-0 space-y-3" aria-labelledby={p.id}>
                  <h4 id={p.id} className="font-display text-xl text-foreground">{p.name}</h4>
                  <p className="text-sm text-muted-foreground">{p.detail}</p>
                  <WordDocumentPreview url={p.document.url} name={p.name} />
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 pb-16 md:pb-24 space-y-16">
        <section className="space-y-4">
          <H2>Why a law firm runs this</H2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
            <li>Designing legal services for a post-AI age.</li>
            <li>Talent development when generative AI sits in the first draft.</li>
            <li>Supervising AI drafts as a professional skill for juniors.</li>
            <li>Separating “first draft from a model” from “counsel-ready paper.”</li>
          </ul>
          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2 text-sm">
            {related.map((r) => <Link key={r.to} to={r.to} className={ext}>{r.label}</Link>)}
            <a href={INSIGHTS_URL} target="_blank" rel="noopener noreferrer" className={ext}>Beyond Horizons Insights</a>
          </div>
        </section>

        <section className="space-y-6">
          <H2>Frequently asked questions</H2>
          <div className="divide-y divide-border border-y border-border">
            {beyondPrecedentFaqs.map((f) => (
              <details key={f.question} className="group py-4">
                <summary className="cursor-pointer list-none font-display text-lg text-foreground">{f.question}</summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="space-y-5 rounded-lg border border-border bg-card p-8">
          <H2>Ask about the next cohort</H2>
          <p className="text-muted-foreground leading-relaxed">
            If you advise juniors, run a legal team, or would like to guest-judge a session, ask about the next cohort. Schedule a consultation, contact us at {EMAIL}, or chat on WhatsApp.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">Schedule Consultation</a>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-muted">Contact Us</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-muted">Chat on WhatsApp</a>
          </div>
          <p className="text-sm text-muted-foreground italic">{PROGRAMME_DISCLAIMER}</p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default BeyondPrecedentPage;
