import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Brain, Shield, FileCheck, ScrollText, Building2, Globe, Newspaper, ArrowRight, Mail } from "lucide-react";

const BOOKING_URL = "https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled";
const CANONICAL = "https://beyondhorizonslegal.lovable.app/singapore-ai-governance";

const faqs = [
  { q: "Does Singapore have AI laws?", a: "Singapore does not yet have a single 'AI law', but AI deployment is shaped by the PDPA, the Model AI Governance Framework, AI Verify, the Generative AI Model Governance Framework, sector regulators (MAS FEAT/Veritas, MOH HealthAI) and adjacent statutes on cybersecurity, copyright and consumer protection." },
  { q: "What is the IMDA Model AI Governance Framework?", a: "Published by IMDA and PDPC, the Model AI Governance Framework is Singapore's voluntary, sector-agnostic guidance for responsible AI deployment, organised around internal governance, human-AI decision making, operations management and stakeholder communication. The Generative AI companion framework extends it to foundation models." },
  { q: "What is AI Verify?", a: "AI Verify is Singapore's open-source AI governance testing framework and software toolkit, developed by IMDA and the AI Verify Foundation. It lets organisations technically test and process-check AI systems against international AI principles." },
  { q: "How does MAS regulate AI in financial services?", a: "MAS issued the FEAT Principles (Fairness, Ethics, Accountability, Transparency) and, through the Veritas Initiative, published assessment methodologies. AI in regulated activities must also satisfy MAS Notice 655 on technology risk, outsourcing, and model risk expectations." },
  { q: "How should businesses approach AI risk mitigation in Singapore?", a: "Map AI use cases against risk tiers, deploy a written AI policy aligned to the Model Framework, run pre-deployment impact assessments, document datasets and prompts, embed human-in-the-loop controls, vendor-test against AI Verify, and align contracts to allocate liability and IP. Boards should receive periodic AI risk dashboards." },
  { q: "Does the EU AI Act apply to Singapore companies?", a: "The EU AI Act has extraterritorial reach: it applies to providers placing AI systems on the EU market and to deployers whose AI output is used in the EU. Many Singapore SaaS, fintech and platform companies fall in scope and need a parallel readiness track to their Singapore obligations." },
  { q: "What about generative AI, copyright and confidentiality?", a: "Singapore's Copyright Act 2021 introduced a computational data analysis exception. Generative AI use raises issues on training data lawfulness, output IP ownership, deepfakes, and confidentiality — typically addressed through acceptable use policies, vendor terms, and DLP controls." },
  { q: "How does Beyond Horizons Legal support AI governance?", a: "We design AI governance programmes aligned to the IMDA Model Framework and AI Verify, advise on MAS FEAT and Veritas, draft AI vendor and deployment contracts, run AI impact assessments, and bridge Singapore obligations with EU AI Act readiness." },
];

const updates = [
  { title: "Generative AI Model Governance Framework", summary: "IMDA and the AI Verify Foundation's framework for generative AI sets out nine dimensions — from accountability and data to incident reporting — that Singapore deployers and developers are expected to operationalise." },
  { title: "MAS Veritas updates", summary: "MAS continues to refine Veritas methodologies for fairness, ethics, accountability and transparency in financial services AI, with expanding industry consortium participation." },
  { title: "AI Verify Foundation expansion", summary: "AI Verify continues to add testing modules and international interoperability (including alignment with NIST AI RMF and ISO/IEC 42001), strengthening Singapore's position as a global AI assurance hub." },
];

const SingaporeAIGovernancePage = () => {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const serviceJsonLd = { "@context": "https://schema.org", "@type": "LegalService", name: "Singapore AI Governance — Beyond Horizons by Bethel Chambers LLC", areaServed: "Singapore", serviceType: "AI Governance & Regulation", url: CANONICAL, description: "Singapore AI governance counsel — IMDA Model AI Governance Framework, AI Verify, MAS FEAT/Veritas, AI risk mitigation and EU AI Act readiness for Singapore businesses." };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Singapore AI Governance — IMDA Model Framework, AI Verify & MAS FEAT | Beyond Horizons</title>
        <meta name="description" content="Singapore AI governance and AI risk counsel: IMDA Model AI Governance Framework, AI Verify, MAS FEAT/Veritas, Generative AI guidance, and EU AI Act readiness." />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="Singapore AI Governance & AI Risk Counsel" />
        <meta property="og:description" content="IMDA Model AI Governance Framework, AI Verify, MAS FEAT, and AI risk mitigation for Singapore businesses." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
      </Helmet>

      <Header />

      <main>
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-secondary/40 to-background">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Singapore · AI Governance & Risk</p>
            <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6 leading-tight">Singapore AI Governance — Counsel for Responsible AI Deployment</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">Practical Singapore AI governance and AI risk counsel — aligned to the IMDA Model AI Governance Framework, AI Verify, MAS FEAT and Veritas, and the EU AI Act for cross-border operators.</p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {["IMDA Model Framework-aligned", "AI Verify-ready", "MAS FEAT & EU AI Act bridging"].map((b) => (
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
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-10 text-center">How We Advise on Singapore AI Governance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: ScrollText, title: "AI Governance Programmes", desc: "Board-level AI policies, RACI, AI inventories and risk tiering aligned to the IMDA Model AI Governance Framework and ISO/IEC 42001." },
                { icon: FileCheck, title: "AI Impact Assessments", desc: "Pre-deployment AI impact assessments covering data, bias, explainability, human oversight, security and downstream user harm." },
                { icon: Shield, title: "AI Risk Mitigation", desc: "Operational controls, model documentation, red-teaming protocols, incident response playbooks, and AI risk dashboards for senior management." },
                { icon: Building2, title: "MAS FEAT & Veritas", desc: "Implementation of FEAT principles and Veritas methodologies for AI use cases in banking, asset management, insurance and payments." },
                { icon: Brain, title: "Generative AI & Foundation Models", desc: "Acceptable use policies, model and vendor due diligence, training-data lawfulness, output IP and confidentiality, and deepfake response plans." },
                { icon: Globe, title: "EU AI Act Bridging", desc: "Mapping Singapore programmes onto EU AI Act obligations — risk classification, conformity assessments, transparency, and post-market monitoring for SG companies in the EU market." },
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
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-10 flex items-center gap-3"><Newspaper className="h-7 w-7 text-primary" /> Singapore AI Governance — Recent Developments</h2>
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
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-10 text-center">Singapore AI Governance — Frequently Asked Questions</h2>
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

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Schedule a Singapore AI Governance Consultation</h2>
            <p className="text-primary-foreground/85 text-lg mb-8">From IMDA Model Framework adoption to MAS FEAT and EU AI Act readiness, our team helps you operationalise responsible AI. Book a complimentary strategic consultation.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary"><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a Consultation <ArrowRight className="ml-2 h-4 w-4" /></a></Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"><Link to="/industry/ai-code-counsel"><Mail className="mr-2 h-4 w-4" /> Explore AI Code Counsel</Link></Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SingaporeAIGovernancePage;
