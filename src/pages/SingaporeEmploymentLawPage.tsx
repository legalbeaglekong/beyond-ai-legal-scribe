import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Users, FileText, Scale, Briefcase, Shield, Calendar, Newspaper, ArrowRight, Mail } from "lucide-react";
import RelatedInsights from "@/components/RelatedInsights";

const BOOKING_URL = "https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled";
const CANONICAL = "https://beyondhorizonslegal.lovable.app/singapore-employment-law";

const faqs = [
  { q: "What laws govern employment in Singapore?", a: "The Employment Act is the core statute, supplemented by the Employment of Foreign Manpower Act, Workplace Safety and Health Act, Industrial Relations Act, Retirement and Re-employment Act, and the Tripartite Guidelines issued by MOM, NTUC and SNEF." },
  { q: "Who is covered by the Singapore Employment Act?", a: "Most employees under a contract of service are covered, including PMETs. Part IV (working hours, rest days, overtime) covers workmen earning up to S$4,500/month and non-workmen earning up to S$2,600/month. Domestic workers, seafarers and statutory board staff are excluded." },
  { q: "What are the rules on termination and notice in Singapore?", a: "Either party may terminate with the contractual notice period (or payment in lieu). Without contractual notice, statutory minimums apply (1 day to 4 weeks depending on length of service). Wrongful dismissal claims go to the Tripartite Alliance for Dispute Management (TADM) and Employment Claims Tribunal." },
  { q: "How does retrenchment work under MOM guidelines?", a: "Employers with 10+ employees must notify MOM of retrenchments within 5 working days. The Tripartite Advisory on Managing Excess Manpower recommends fair selection criteria, retrenchment benefits (typically 2 weeks to 1 month per year of service), and meaningful consultation." },
  { q: "What work passes does MOM issue?", a: "The main categories are Employment Pass (EP), S Pass, Work Permit, Personalised Employment Pass (PEP), Tech.Pass, ONE Pass, EntrePass and Training EP. The Complementarity Assessment Framework (COMPASS) applies to EP applications from September 2023." },
  { q: "Are non-compete clauses enforceable in Singapore?", a: "Restraint of trade clauses are presumptively unenforceable unless the employer can show a legitimate proprietary interest and that the restraint is reasonable in scope, duration and geography. The 2024 Tripartite Guidelines on Restrictive Covenants further tighten employer practice." },
  { q: "How is workplace harassment and discrimination handled?", a: "The Protection from Harassment Act (POHA) provides civil and criminal remedies. The Workplace Fairness Legislation (passed 2024 / 2025) prohibits discrimination based on age, nationality, sex, marital status, pregnancy, race, religion, language, disability and mental health." },
  { q: "How does Beyond Horizons Legal support employers and senior executives?", a: "We advise on employment contracts, executive compensation and equity, M&A people issues (TUPE-style transfers, harmonisation), restructurings and retrenchments, investigations, work-pass strategy, and disputes — for both Singapore-headquartered and inbound multinational employers." },
];

const updates = [
  { title: "Workplace Fairness Legislation", summary: "Singapore's new Workplace Fairness Act introduces statutory protections against discrimination across protected characteristics, plus mandatory grievance handling and tribunal access." },
  { title: "Platform Workers Act in force", summary: "Platform Workers Act extends CPF, work injury compensation and representation rights to ride-hail and delivery platform workers — reshaping the contractor / employee boundary." },
  { title: "COMPASS & EP framework refresh", summary: "MOM continues refining the Complementarity Assessment Framework, salary thresholds and Shortage Occupation List — material for any Singapore hiring plan." },
];

const SingaporeEmploymentLawPage = () => {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const serviceJsonLd = { "@context": "https://schema.org", "@type": "LegalService", name: "Singapore Employment Law — Beyond Horizons by Bethel Chambers LLC", areaServed: "Singapore", serviceType: "Employment Law", url: CANONICAL, description: "Singapore employment law counsel for employers and senior executives — MOM compliance, work passes, terminations, retrenchments, executive compensation, and workplace investigations." };
  const breadcrumbJsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://beyondhorizonslegal.lovable.app/" },
    { "@type": "ListItem", position: 2, name: "Topics", item: "https://beyondhorizonslegal.lovable.app/topics" },
    { "@type": "ListItem", position: 3, name: "Singapore Employment Law", item: CANONICAL },
  ] };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Singapore Employment Law — MOM, Work Passes & Terminations | Beyond Horizons</title>
        <meta name="description" content="Singapore employment law counsel: Employment Act, MOM compliance, work passes (EP/COMPASS), retrenchments, restrictive covenants, workplace fairness and executive disputes." />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="Singapore Employment Law — Counsel for Employers & Executives" />
        <meta property="og:description" content="MOM compliance, work passes, terminations, retrenchments, restrictive covenants, and workplace fairness in Singapore." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <Header />


      <main>
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-secondary/40 to-background">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Singapore · Employment Law</p>
            <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6 leading-tight">Singapore Employment Law — Counsel for Employers and Executives</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">From MOM compliance and work-pass strategy to retrenchments, restrictive covenants, executive separations and workplace investigations — pragmatic Singapore employment counsel for ambitious employers and senior leaders.</p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {["MOM & Tripartite-aligned", "Work-pass & COMPASS strategy", "Executive & restructuring counsel"].map((b) => (
                <span key={b} className="px-4 py-2 rounded-full bg-background/60 border border-border text-sm text-foreground">{b}</span>
              ))}
            </div>
            <Button asChild size="lg" className="bg-primary text-primary-foreground">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-10 text-center">How We Advise on Singapore Employment Law</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: FileText, title: "Employment Contracts & Policies", desc: "Bespoke employment agreements, executive service contracts, handbooks, IP and confidentiality, restrictive covenants aligned with the 2024 Tripartite Guidelines." },
                { icon: Users, title: "Work Passes & Mobility", desc: "EP, S Pass, Tech.Pass, ONE Pass and EntrePass strategy — including COMPASS optimisation, dependant arrangements and senior-leader relocation." },
                { icon: Briefcase, title: "Terminations & Retrenchments", desc: "Performance exits, summary dismissals, mutual separations, mass retrenchments and MOM notifications under the Tripartite Advisory on Managing Excess Manpower." },
                { icon: Scale, title: "Disputes & Investigations", desc: "Wrongful dismissal, TADM mediation, Employment Claims Tribunal, workplace harassment investigations, and confidential internal probes for boards and audit committees." },
                { icon: Shield, title: "Workplace Fairness & Harassment", desc: "Workplace Fairness Act readiness, POHA-compliant grievance handling, anti-discrimination policy design and training for managers." },
                { icon: Calendar, title: "M&A and Restructuring People Issues", desc: "Workforce transfers in M&A, harmonisation of terms, equity rollover, change-in-control treatment and post-deal integration." },
              ].map((s) => (
                <Card key={s.title} className="border-border">
                  <CardContent className="p-6">
                    <s.icon className="h-6 w-6 text-primary mb-3" />
                    <h3 className="font-serif text-xl text-foreground mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-10 flex items-center gap-3"><Newspaper className="h-7 w-7 text-primary" /> Singapore Employment Law — Recent Developments</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {updates.map((n) => (
                <Card key={n.title} className="border-border h-full"><CardContent className="p-6">
                  <h3 className="font-serif text-lg text-foreground mb-3">{n.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{n.summary}</p>
                </CardContent></Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-10 text-center">Singapore Employment Law — Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-serif text-lg">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <RelatedInsights keywords={["employment", "mom", "workforce", "retrenchment", "work pass", "workplace", "labour", "labor", "hr"]} heading="Related Insights — Employment & Workforce" />

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Schedule a Singapore Employment Law Consultation</h2>
            <p className="text-primary-foreground/85 text-lg mb-8">Whether you are restructuring a workforce, exiting a senior executive, or building a defensible employment framework, our team is ready to help. Book a complimentary strategic consultation.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary"><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a Consultation <ArrowRight className="ml-2 h-4 w-4" /></a></Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"><Link to="/expertise/employment-labor"><Mail className="mr-2 h-4 w-4" /> Explore our Employment Practice</Link></Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SingaporeEmploymentLawPage;
