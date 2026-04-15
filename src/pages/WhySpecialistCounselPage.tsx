import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Mail, Scale, Clock, Globe, Shield, Users, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import AccoladeBanner from "@/components/AccoladeBanner";

const BOOKING_URL = "https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled";

const comparisonSections = [
  {
    heading: "Specialist Practice vs Full-Service Firm",
    otherLabel: "Full-Service Commercial Firms",
    description: "Large full-service firms offer breadth — but specialist counsel offers depth. When your matter sits at the intersection of technology, regulation, and cross-border complexity, generalist coverage may not be enough.",
    rows: [
      { feature: "Sector Knowledge", other: "Lawyers learn your industry during the engagement, relying on general commercial principles", bh: "Pre-existing deep expertise in your sector — aviation, space, blockchain, AI governance, energy transition — from day one" },
      { feature: "Regulatory Fluency", other: "Specialist regulatory questions often outsourced or referred to niche partners", bh: "In-house fluency across sector-specific regulations: MAS guidelines, EU AI Act, ICAO conventions, carbon market frameworks" },
      { feature: "Commercial Acumen", other: "Strong on legal drafting, may lack operational and commercial context", bh: "Lawyers with industry backgrounds who understand both the legal and commercial dimensions of your decisions" },
      { feature: "Team Continuity", other: "Work often delegated to junior associates; partner involvement can be limited", bh: "Senior-led engagement throughout — the lawyer who pitches is the lawyer who delivers" },
      { feature: "Cross-Border Coordination", other: "Referrals to local firms on an ad-hoc, relationship-dependent basis", bh: "Established global alliance network including Magic Circle and White Shoe firm partnerships, coordinated from Singapore" },
      { feature: "Pricing Transparency", other: "Hourly billing with limited cost visibility; scope creep common", bh: "Fixed-fee and capped-fee structures as standard, with transparent scoping from the outset" },
    ],
  },
  {
    heading: "Specialist Counsel vs Big Four Advisory",
    otherLabel: "Big Four Advisory Practices",
    description: "Advisory firms bring scale and process — but legal privilege, courtroom credibility, and regulatory representation require qualified legal counsel. The distinction matters when stakes are high.",
    rows: [
      { feature: "Legal Privilege", other: "Advisory work generally not protected by legal professional privilege", bh: "All advice protected by legal professional privilege — critical for sensitive regulatory and compliance matters" },
      { feature: "Regulatory Representation", other: "Cannot represent clients before regulators or in legal proceedings", bh: "Full rights of audience and regulatory representation across multiple jurisdictions" },
      { feature: "Independence", other: "Potential conflicts from concurrent audit, tax, and consulting relationships with counterparties", bh: "Independent legal practice with rigorous conflict management and no competing service lines" },
      { feature: "Implementation Focus", other: "Strong on frameworks, process design, and slide decks; may lack legal enforceability analysis", bh: "Frameworks designed to be legally enforceable, operationally practical, and regulatory-compliant simultaneously" },
      { feature: "Cost Structure", other: "Large engagement teams with significant junior staffing; costs can escalate", bh: "Lean, senior-led teams delivering focused outcomes without unnecessary overhead" },
      { feature: "Sector Depth", other: "Broad industry coverage but legal analysis often surface-level", bh: "Deep legal analysis grounded in sector-specific knowledge and regulatory precedent" },
    ],
  },
  {
    heading: "Specialist Counsel vs Building In-House",
    otherLabel: "Expanding Your In-House Team",
    description: "In-house counsel are essential — but building specialist capabilities internally for every emerging area can be slow, expensive, and difficult to sustain. A hybrid model often delivers the best results.",
    rows: [
      { feature: "Speed to Capability", other: "Recruitment cycles of 3–6 months; onboarding and ramp-up time on top", bh: "Immediate access to specialist capability — operational from engagement day one" },
      { feature: "Cost Efficiency", other: "Full-time salary, benefits, training, and retention costs — even for intermittent needs", bh: "Fractional and project-based engagement models that match cost to actual demand" },
      { feature: "Breadth of Expertise", other: "Each hire covers one specialism; building a full specialist bench requires multiple hires", bh: "Access to a multi-disciplinary team spanning AI, aviation, blockchain, space, trade, and more — through a single relationship" },
      { feature: "External Perspective", other: "In-house teams can develop blind spots from organisational proximity", bh: "Independent external perspective informed by cross-sector and cross-jurisdictional experience" },
      { feature: "Scalability", other: "Headcount fixed; difficult to scale up for transactions or scale down in quiet periods", bh: "Flexible resourcing that scales with your needs — from a few hours a month to full transaction support" },
      { feature: "Knowledge Currency", other: "Continuing education budgets often limited; hard to stay current across all emerging areas", bh: "Practitioners who work across multiple clients and jurisdictions, continuously exposed to the latest regulatory and market developments" },
    ],
  },
];

const faqs = [
  { question: "When should I use specialist counsel instead of my regular law firm?", answer: "Specialist counsel adds the most value when your matter involves sector-specific regulation, cross-border complexity, or emerging technology areas where general commercial lawyers may lack the depth of experience to anticipate risks. Common triggers include entering regulated industries, deploying AI systems, structuring complex cross-border transactions, or navigating new regulatory frameworks." },
  { question: "Can specialist counsel work alongside my existing legal team?", answer: "Absolutely — and this is often the most effective model. We regularly work alongside in-house legal teams and other external counsel, providing specialist input on specific aspects of a matter while your primary advisors handle the broader relationship. We are experienced in collaborative, multi-firm engagements and prioritise seamless coordination." },
  { question: "How does Beyond Horizons maintain specialist depth across so many sectors?", answer: "Our practice is deliberately structured around interconnected sectors — aviation, space, blockchain, AI governance, energy transition, and trade — where regulatory frameworks, commercial models, and risk profiles share common threads. This allows us to develop genuine depth rather than superficial breadth, with each engagement reinforcing expertise across related practice areas." },
  { question: "What is fractional general counsel and how does it differ from traditional outside counsel?", answer: "Fractional general counsel provides ongoing, embedded senior legal support on a part-time or retainer basis — functioning as an extension of your leadership team rather than a transactional outside advisor. This model is particularly effective for growth-stage companies and regional headquarters that need strategic legal guidance without the cost of a full-time general counsel appointment." },
  { question: "How does pricing work for specialist legal services?", answer: "We offer transparent pricing structures including fixed-fee packages for defined scope work, capped-fee arrangements for matters with variable scope, and monthly retainers for ongoing advisory relationships. We scope every engagement upfront and provide clear cost estimates before work begins — no surprise invoices, no scope creep." },
  { question: "What jurisdictions does Beyond Horizons cover?", answer: "We are based in Singapore and advise across the Asia-Pacific region, with established alliance partnerships with leading firms in all major jurisdictions. For cross-border matters, we coordinate seamlessly with our global network — including Magic Circle and leading US and European firms — providing clients with a single point of contact for multi-jurisdictional engagements." },
];

const WhySpecialistCounselPage = () => {
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

  return (
    <>
      <Helmet>
        <title>Why Specialist Counsel — Choosing the Right Legal Partner | Beyond Horizons Legal Singapore</title>
        <meta name="description" content="Compare specialist legal counsel vs full-service firms, Big Four advisory, and in-house teams. Understand when specialist expertise delivers better outcomes for complex, cross-border, and regulated matters." />
        <meta property="og:title" content="Why Specialist Counsel — Beyond Horizons Legal Singapore" />
        <meta property="og:description" content="Compare specialist legal counsel vs full-service firms, Big Four advisory, and in-house teams for complex, cross-border matters." />
        <meta property="og:url" content="https://beyondhorizons.sg/why-specialist-counsel" />
        <link rel="canonical" href="https://beyondhorizons.sg/why-specialist-counsel" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org", "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question", name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org", "@type": "LegalService",
            name: "Beyond Horizons Legal",
            provider: { "@type": "Organization", name: "Bethel Chambers LLC", url: "https://www.bethelchambers.com" },
            description: "Specialist legal counsel for complex, cross-border, and regulated matters across Asia-Pacific.",
            areaServed: "Asia-Pacific",
            url: "https://beyondhorizons.sg/why-specialist-counsel",
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background" ref={containerRef}>
        <Header />

        {/* Hero */}
        <section className="pt-32 pb-20 bg-secondary/20">
          <div className="max-w-4xl mx-auto container-padding text-center fade-in">
            <div className="teal-line mx-auto mb-8" />
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight tracking-tight">
              Why Specialist Counsel
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Not every legal matter requires a specialist. But when it does — when the stakes involve complex regulation, emerging technology, or cross-border structures — the difference between generalist and specialist counsel can be material.
            </p>
            <p className="text-sm text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed mb-8">
              This page offers an honest comparison of different legal service models to help you make an informed decision about the right counsel for your needs.
            </p>
            <AccoladeBanner variant="inline" />
          </div>
        </section>

        {/* Value Propositions */}
        <section className="section-padding bg-background">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in">
              {[
                { icon: Scale, title: "Depth Over Breadth", desc: "Genuine expertise in defined practice areas — not surface-level coverage across everything." },
                { icon: Users, title: "Senior-Led Delivery", desc: "The partner who scopes your matter is the one who delivers it. No delegation to junior associates." },
                { icon: Globe, title: "Global Reach, Singapore Base", desc: "Coordinated cross-border advice through established alliances with leading international firms." },
                { icon: Shield, title: "Privileged & Independent", desc: "Full legal professional privilege and independence — no competing audit, tax, or consulting interests." },
                { icon: Clock, title: "Cost Certainty", desc: "Fixed-fee and capped-fee structures as standard. Transparent scoping before work begins." },
                { icon: Lightbulb, title: "Commercial Pragmatism", desc: "Legal advice grounded in commercial reality — we understand how businesses make decisions." },
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

        {/* Comparison Sections */}
        {comparisonSections.map((section, sIdx) => (
          <section key={sIdx} className={`section-padding ${sIdx % 2 === 0 ? "bg-secondary/20" : "bg-background"}`}>
            <div className="max-w-5xl mx-auto container-padding fade-in">
              <div className="text-center mb-8">
                <div className="teal-line mx-auto mb-6" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                  {section.heading}
                </h2>
                <p className="text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  {section.description}
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="py-4 px-4 text-xs text-muted-foreground font-sans uppercase tracking-wider w-1/4">Consideration</th>
                      <th className="py-4 px-4 text-xs text-muted-foreground font-sans uppercase tracking-wider w-[37.5%]">{section.otherLabel}</th>
                      <th className="py-4 px-4 text-xs text-accent font-sans uppercase tracking-wider w-[37.5%]">Beyond Horizons</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows.map((row, i) => (
                      <tr key={i} className="border-b border-border/20">
                        <td className="py-4 px-4 text-sm text-foreground font-sans">{row.feature}</td>
                        <td className="py-4 px-4 text-xs text-muted-foreground">{row.other}</td>
                        <td className="py-4 px-4 text-xs text-foreground">{row.bh}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-6 text-center italic">
                Comparison reflects general service model characteristics. Individual firms and teams vary. Every engagement is unique.
              </p>
            </div>
          </section>
        ))}

        {/* Practice Areas */}
        <section className="section-padding bg-background">
          <div className="max-w-4xl mx-auto container-padding text-center fade-in">
            <div className="teal-line mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8">
              Our Specialist Practice Areas
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { title: "Aviation", slug: "aviation" },
                { title: "Transportation", slug: "transportation" },
                { title: "Space", slug: "space" },
                { title: "AI Governance", slug: "ai-code-counsel" },
                { title: "Blockchain & Digital Assets", slug: "blockchain-digital-assets" },
                { title: "Cybersecurity & Tech", slug: "cybersecurity-tech" },
                { title: "Energy Transition", slug: "energy-transition" },
                { title: "Trade & Tariff", slug: "trade-tariff" },
                { title: "Robotics", slug: "robotics" },
                { title: "Wellness & Health", slug: "wellness-health" },
                { title: "Fractional GC", slug: "fractional-gc" },
              ].map((area, i) => (
                <Link
                  key={i}
                  to={`/industry/${area.slug}`}
                  className="text-xs text-muted-foreground border border-border/30 px-4 py-2 rounded-full hover:text-accent hover:border-accent/30 transition-smooth"
                >
                  {area.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-secondary/20">
          <div className="max-w-3xl mx-auto container-padding fade-in">
            <div className="text-center mb-12">
              <div className="teal-line mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Frequently Asked Questions
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border/30">
                  <AccordionTrigger className="text-left text-foreground text-sm hover:no-underline hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-accent/5">
          <div className="max-w-3xl mx-auto container-padding text-center fade-in">
            <div className="teal-line mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Ready to discuss your needs?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 text-base">
              Whether you need specialist counsel for a specific matter or ongoing strategic legal support, we are happy to explore how we can help. Book a complimentary consultation.
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

export default WhySpecialistCounselPage;
