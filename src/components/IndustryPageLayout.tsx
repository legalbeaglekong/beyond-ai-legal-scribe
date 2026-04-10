import { useEffect, useRef, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

const BOOKING_URL = "https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled";

export interface IndustryPageData {
  slug: string;
  seo: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
    badges: string[];
  };
  overview: {
    heading: string;
    services: {
      icon: LucideIcon;
      title: string;
      description: string;
    }[];
    stats: string[];
  };
  comparison: {
    heading: string;
    otherLabel: string;
    rows: {
      feature: string;
      other: string;
      bh: string;
    }[];
  };
  spotlight: {
    heading: string;
    cards: {
      title: string;
      description: string;
      link?: string;
      linkText?: string;
    }[];
    analysis?: string;
  };
  faqs: {
    heading: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  cta: {
    heading: string;
    description?: string;
  };
  relatedPages: {
    title: string;
    slug: string;
  }[];
}

const IndustryPageLayout = ({ data }: { data: IndustryPageData }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.description} />
        <meta property="og:title" content={data.seo.title} />
        <meta property="og:description" content={data.seo.description} />
        <meta property="og:url" content={`https://beyondhorizons.sg/${data.slug}`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://beyondhorizons.sg/${data.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Beyond Horizons Legal",
            provider: {
              "@type": "Organization",
              name: "Bethel Chambers LLC",
              url: "https://beyondhorizons.sg",
            },
            description: data.seo.description,
            areaServed: "Asia-Pacific",
            url: `https://beyondhorizons.sg/${data.slug}`,
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: data.faqs.items.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background" ref={containerRef}>
        <Header />

        {/* Hero */}
        <section className="pt-32 pb-20 section-padding bg-gradient-hero relative">
          <div className="max-w-5xl mx-auto container-padding text-center hero-content fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {data.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed mb-10">
              {data.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="default" size="lg" asChild>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#overview">
                  View Expertise
                  <ChevronDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {data.hero.badges.map((badge, i) => (
                <span key={i} className="text-xs md:text-sm text-muted-foreground border border-border px-4 py-2 rounded-full">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Practice Overview */}
        <section id="overview" className="section-padding bg-muted/30">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                {data.overview.heading}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {data.overview.services.map((service, i) => (
                <Card key={i} className="bg-card border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <service.icon className="h-8 w-8 text-foreground mb-4" />
                    <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.overview.stats.map((stat, i) => (
                <div key={i} className="text-center p-4 border border-border rounded-lg">
                  <p className="text-sm text-muted-foreground font-light">{stat}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="section-padding">
          <div className="max-w-5xl mx-auto container-padding">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12 text-center">
              {data.comparison.heading}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-4 px-4 text-sm text-muted-foreground font-medium w-1/4">Feature</th>
                    <th className="py-4 px-4 text-sm text-muted-foreground font-medium w-[37.5%]">{data.comparison.otherLabel}</th>
                    <th className="py-4 px-4 text-sm text-foreground font-medium w-[37.5%]">Beyond Horizons Legal</th>
                  </tr>
                </thead>
                <tbody>
                  {data.comparison.rows.map((row, i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className="py-4 px-4 text-sm text-foreground font-medium">{row.feature}</td>
                      <td className="py-4 px-4 text-sm text-muted-foreground font-light">{row.other}</td>
                      <td className="py-4 px-4 text-sm text-foreground font-light">{row.bh}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-6 text-center font-light">
              Comparison reflects general industry models. Every engagement is unique.
            </p>
          </div>
        </section>

        {/* Spotlight */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-6xl mx-auto container-padding">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12 text-center">
              {data.spotlight.heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {data.spotlight.cards.map((card, i) => (
                <Card key={i} className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-3">{card.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">{card.description}</p>
                    {card.link && (
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground hover:text-muted-foreground transition-smooth inline-flex items-center"
                      >
                        {card.linkText || "Read More"} <ArrowRight className="ml-1 h-3 w-3" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            {data.spotlight.analysis && (
              <p className="text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto text-center">
                {data.spotlight.analysis}
              </p>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding">
          <div className="max-w-3xl mx-auto container-padding">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12 text-center">
              {data.faqs.heading}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {data.faqs.items.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                  <AccordionTrigger className="text-left text-foreground font-medium text-sm hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-light text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-3xl mx-auto container-padding text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {data.cta.heading}
            </h2>
            {data.cta.description && (
              <p className="text-muted-foreground font-light leading-relaxed mb-10 text-lg">
                {data.cta.description}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" asChild>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:hl@huilinglawoffice.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        {data.relatedPages.length > 0 && (
          <section className="py-16">
            <div className="max-w-4xl mx-auto container-padding">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Related Practice Areas</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {data.relatedPages.map((page, i) => (
                  <Link
                    key={i}
                    to={`/industry/${page.slug}`}
                    className="text-sm text-muted-foreground border border-border px-4 py-2 rounded-full hover:text-foreground hover:border-foreground transition-smooth"
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  );
};

export default IndustryPageLayout;
