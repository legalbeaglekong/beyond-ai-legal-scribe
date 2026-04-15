import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, Plane, Shield, FileText, BarChart3, Leaf, Brain, Scale, Globe, Bot, Search, ExternalLink } from "lucide-react";

const BOOKING_URL = "https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled";

const tools = [
  {
    icon: Plane,
    title: "Aviation Regulatory Scanner",
    sector: "Aviation",
    description: "Real-time monitoring of aviation regulatory developments across DGCA India, CAAS Singapore, EASA, and ICAO. Built for an Indian airport operator to track safety directives, airworthiness requirements, and operational compliance obligations — with severity classification and deadline tracking.",
    capabilities: ["Multi-authority regulatory feed", "Impact severity classification", "Deadline and compliance tracking", "AI-powered regulatory summaries"],
    status: "Deployed",
  },
  {
    icon: FileText,
    title: "NDA Review & Risk Analyser",
    sector: "Corporate & Commercial",
    description: "AI-assisted NDA review tool that analyses confidentiality agreements for risk exposure, non-standard clauses, and missing protections. Flags issues across key dimensions — scope of confidential information, permitted disclosures, term and survival, remedies, and jurisdiction.",
    capabilities: ["Clause-by-clause risk scoring", "Non-standard term detection", "Benchmark against market standards", "Suggested redline commentary"],
    status: "In Development",
  },
  {
    icon: Scale,
    title: "Negotiation Preparation Tool",
    sector: "Dispute Resolution & Transactions",
    description: "Structured negotiation preparation framework that helps legal teams organise positions, identify BATNA and ZOPA, anticipate counterparty arguments, and develop concession strategies. Combines legal analysis with commercial negotiation methodology.",
    capabilities: ["BATNA / ZOPA analysis framework", "Counterparty position mapping", "Concession strategy builder", "Outcome scenario modelling"],
    status: "In Development",
  },
  {
    icon: Leaf,
    title: "Green Compliance Tracker",
    sector: "Aviation & ESG",
    description: "Sustainability compliance dashboard tracking obligations across CORSIA, EU-ETS, Sustainable Aviation Fuel mandates, CSRD reporting, SGX sustainability requirements, and carbon tax frameworks — with deadline monitoring and compliance status visualisation.",
    capabilities: ["Multi-framework obligation mapping", "Deadline and compliance timeline", "Regulatory link health monitoring", "Cross-framework gap analysis"],
    status: "Deployed",
  },
  {
    icon: BarChart3,
    title: "Aircraft Leasing Financial Model",
    sector: "Aviation Finance",
    description: "Institutional-grade financial modelling engine for A320neo leasing transactions. Supports base, moderate, and severe stress scenarios with cashflow projections, investor economics, founder dilution analysis, and sensitivity testing across key variables.",
    capabilities: ["Multi-scenario stress testing", "Investor economics & IRR modelling", "Cashflow waterfall projections", "Sensitivity analysis dashboards"],
    status: "Deployed",
  },
  {
    icon: Brain,
    title: "Lexhy — AI Legal Orchestrator",
    sector: "Legal Operations",
    description: "Multi-agent AI legal operations platform providing smart contract drafting, clause analysis, compliance heatmapping, and matter management. Designed for in-house legal teams and fractional GC clients who need scalable, AI-augmented legal support.",
    capabilities: ["AI-powered contract drafting", "Clause risk analysis", "Compliance gap visualisation", "Matter and billing management"],
    status: "Beta",
  },
  {
    icon: Bot,
    title: "Contract Buddy",
    sector: "Access to Justice",
    description: "Consumer-friendly AI contract maker designed for non-legally trained users. Guides individuals and small businesses through creating basic legal agreements using plain language prompts — making foundational legal protection more accessible.",
    capabilities: ["Plain language contract generation", "Guided questionnaire flows", "Template library for common agreements", "Jurisdiction-aware drafting"],
    status: "Beta",
  },
  {
    icon: Shield,
    title: "Aviation OpsRisk-X",
    sector: "Aviation Risk",
    description: "Aviation operational-risk and financial-risk intelligence platform providing real-time risk monitoring, incident tracking, and regulatory compliance scoring for airlines, lessors, and airport operators across Asia-Pacific.",
    capabilities: ["Operational risk dashboards", "Financial risk scoring models", "Incident trend analysis", "Regulatory compliance tracking"],
    status: "In Development",
  },
];

const AIToolsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const elements = container.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const statusColor = (status: string) => {
    switch (status) {
      case "Deployed": return "bg-green-100 text-green-800 border-green-200";
      case "Beta": return "bg-blue-100 text-blue-800 border-blue-200";
      case "In Development": return "bg-amber-100 text-amber-800 border-amber-200";
      default: return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Legal Tools — Purpose-Built Technology for Legal & Regulatory Challenges | Beyond Horizons Legal</title>
        <meta name="description" content="Explore AI-powered legal tools built by Beyond Horizons Legal — from regulatory scanners and NDA review to financial modelling and compliance tracking. Purpose-built technology for complex legal challenges." />
        <meta property="og:title" content="AI Legal Tools — Beyond Horizons Legal Singapore" />
        <meta property="og:description" content="Purpose-built AI legal tools for regulatory compliance, contract review, and financial modelling." />
        <meta property="og:url" content="https://beyondhorizons.sg/ai-tools" />
        <link rel="canonical" href="https://beyondhorizons.sg/ai-tools" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org", "@type": "LegalService",
            name: "Beyond Horizons Legal — AI Tools",
            provider: { "@type": "Organization", name: "Bethel Chambers LLC", url: "https://www.bethelchambers.com" },
            description: "Purpose-built AI legal tools for regulatory compliance, contract review, financial modelling, and legal operations.",
            areaServed: "Asia-Pacific",
            url: "https://beyondhorizons.sg/ai-tools",
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background" ref={containerRef}>
        <Header />

        {/* Hero */}
        <section className="pt-32 pb-20 bg-secondary/20">
          <div className="max-w-4xl mx-auto container-padding text-center fade-in">
            <div className="teal-line mx-auto mb-8" />
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 font-sans">Technology × Legal Expertise</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight tracking-tight">
              AI Tools Built for Clients
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
              We don't just advise on technology — we build it. Our team designs and deploys purpose-built AI tools that solve specific legal, regulatory, and commercial challenges for our clients.
            </p>
            <p className="text-sm text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Each tool is developed in-house, grounded in practitioner expertise, and tailored to the regulatory and commercial context of the sector it serves.
            </p>
          </div>
        </section>

        {/* Approach */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto container-padding fade-in">
            <div className="text-center mb-12">
              <div className="teal-line mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                Our Approach to Legal Technology
              </h2>
              <p className="text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Every tool we build starts with a real client problem — not a technology looking for a use case. We combine deep sector knowledge with modern AI capabilities to create solutions that are practical, proportionate, and immediately useful.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Search, title: "Problem-First Design", desc: "We identify specific pain points in legal workflows and regulatory compliance — then build targeted solutions rather than generic platforms." },
                { icon: Shield, title: "Practitioner-Built", desc: "Every tool is designed by lawyers who understand the domain. AI augments legal expertise — it doesn't replace the judgment that complex matters require." },
                { icon: Globe, title: "Client-Deployed", desc: "Our tools are built for real-world deployment — used by airport operators, financial institutions, and in-house legal teams across Asia-Pacific." },
              ].map((item, i) => (
                <Card key={i} className="border border-border bg-card shadow-md card-lift fade-in" style={{ transitionDelay: `${i * 80}ms` }}>
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center mb-4">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-sm font-serif font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="section-padding bg-secondary/20">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-12 fade-in">
              <div className="teal-line mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                Our Tool Suite
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                A selection of AI-powered tools we have built or are developing for clients and internal use.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools.map((tool, i) => (
                <Card key={i} className="border border-border bg-card shadow-md card-lift fade-in" style={{ transitionDelay: `${i * 80}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center">
                        <tool.icon className="h-5 w-5 text-accent" />
                      </div>
                      <span className={`text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full border ${statusColor(tool.status)}`}>
                        {tool.status}
                      </span>
                    </div>
                    <p className="text-[10px] uppercase tracking-wider text-accent mb-1.5 font-sans">{tool.sector}</p>
                    <h3 className="text-sm font-serif font-bold text-foreground mb-3">{tool.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4 text-justify">{tool.description}</p>
                    <div className="space-y-1.5">
                      {tool.capabilities.map((cap, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 bg-background">
          <div className="max-w-3xl mx-auto container-padding text-center fade-in">
            <p className="text-xs text-muted-foreground/70 leading-relaxed">
              These tools are developed to augment — not replace — qualified legal advice. AI-generated outputs are reviewed by qualified lawyers before client delivery. Tool availability and features may vary. Some tools shown are in active development and may not yet be generally available.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-accent/5">
          <div className="max-w-3xl mx-auto container-padding text-center fade-in">
            <div className="teal-line mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Need a bespoke legal technology solution?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 text-base">
              Whether you need a regulatory monitoring tool, a contract review system, or a custom compliance dashboard — we can build it. Talk to us about your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="bg-accent text-accent-foreground font-semibold shadow-lg hover:bg-accent/90" asChild>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                <a href="mailto:HL@beyondhorizons.sg">
                  <Mail className="mr-2 h-4 w-4" /> Email Us
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIToolsPage;
