import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Mail, Scale, Clock, Globe, Shield, Users, Lightbulb } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { useEffect, useRef } from "react";
import AccoladeBanner from "@/components/AccoladeBanner";

const BOOKING_URL = "https://wa.me/6597265330";


const faqs = [
  { question: "Can specialist counsel work alongside my existing legal team?", answer: "Absolutely — and this is often the most effective model. We regularly work alongside in-house legal teams and other external counsel, providing specialist input on specific aspects of a matter while your primary advisors handle the broader relationship. We are experienced in collaborative, multi-firm engagements and prioritise seamless coordination." },
  { question: "How does Beyond Horizons maintain specialist depth across so many sectors?", answer: "Our practice is deliberately structured around interconnected sectors — aviation, space, blockchain, AI governance, energy transition, and trade — where regulatory frameworks, commercial models, and risk profiles share common threads. This allows us to develop genuine depth rather than superficial breadth, with each engagement reinforcing expertise across related practice areas." },
  { question: "What is fractional general counsel and how does it differ from traditional outside counsel?", answer: "Fractional general counsel provides ongoing, embedded senior legal support on a part-time or retainer basis — functioning as an extension of your leadership team rather than a transactional outside advisor. This model is particularly effective for growth-stage companies and regional headquarters that need strategic legal guidance without the cost of a full-time general counsel appointment." },
  { question: "How does pricing work for specialist legal services?", answer: "We offer transparent pricing structures including fixed-fee packages for defined scope work, capped-fee arrangements for matters with variable scope, and monthly retainers for ongoing advisory relationships. We scope every engagement upfront and provide clear cost estimates before work begins — no surprise invoices, no scope creep." },
  { question: "What jurisdictions does Beyond Horizons cover?", answer: "We are based in Singapore. For cross-border matters, we coordinate with foreign counsel on laws other than Singapore and English law." },
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
            name: "Beyond Horizons by Bethel Chambers",
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
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              This page offers an honest comparison of different legal service models to help you make an informed decision about the right counsel for your needs.
            </p>
            <AccoladeBanner omitTitles={["ALB — Law Firm to Watch 2026"]} variant="inline" />
          </div>
        </section>

        {/* Value Propositions */}
        <section className="section-padding bg-background">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in">
              {[
                { icon: Scale, title: "Depth Over Breadth", desc: "Genuine expertise in defined practice areas — not surface-level coverage across everything." },
                { icon: Users, title: "Senior-Led Delivery", desc: "The partner who scopes your matter is the one who delivers it. No delegation to junior associates." },
                { icon: Globe, title: "Global Reach, Singapore Base", desc: "Cross-border matters coordinated with foreign counsel." },
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
