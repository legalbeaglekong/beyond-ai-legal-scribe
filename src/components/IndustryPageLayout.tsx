import { useEffect, useRef } from "react";
import spaceVideo from "@/assets/space-hero-bg.mp4.asset.json";
import spaceCtaVideo from "@/assets/space-cta-bg.mp4.asset.json";
import fracGcHeroVideo from "@/assets/fractional-gc-hero-bg.mp4.asset.json";
import fracGcCtaVideo from "@/assets/fractional-gc-cta-bg.mp4.asset.json";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import { STOCK_VIDEOS } from "@/lib/stock-videos";

const BOOKING_URL = "https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled";

export interface IndustryPageData {
  slug: string;
  seo: { title: string; description: string };
  hero: { title: string; subtitle: string; badges: string[] };
  overview: {
    heading: string;
    services: { icon: LucideIcon; title: string; description: string }[];
    stats: string[];
  };
  comparison: {
    heading: string;
    otherLabel: string;
    rows: { feature: string; other: string; bh: string }[];
  };
  spotlight: {
    heading: string;
    cards: { title: string; description: string; link?: string; linkText?: string; icon?: LucideIcon }[];
    analysis?: string;
  };
  faqs: {
    heading: string;
    items: { question: string; answer: string }[];
  };
  cta: { heading: string; description?: string };
  relatedPages: { title: string; slug: string }[];
}

// Pick a video based on slug
const getVideoForSlug = (slug: string): string => {
  const map: Record<string, string> = {
    aviation: STOCK_VIDEOS.aviation,
    transportation: STOCK_VIDEOS.transportation,
    "energy-transition": STOCK_VIDEOS.energy,
    "cybersecurity-tech": STOCK_VIDEOS.technology,
    "blockchain-digital-assets": STOCK_VIDEOS.blockchain,
    "trade-tariff": STOCK_VIDEOS.maritime,
    "wellness-health": STOCK_VIDEOS.wellness,
    robotics: STOCK_VIDEOS.robotics,
    space: spaceVideo.url,
    "fractional-gc": fracGcHeroVideo.url,
  };
  return map[slug] || STOCK_VIDEOS.business;
};

// Separate CTA video per slug (falls back to hero video)
const getCtaVideoForSlug = (slug: string): string => {
  const ctaMap: Record<string, string> = {
    space: spaceCtaVideo.url,
    "fractional-gc": fracGcCtaVideo.url,
  };
  return ctaMap[slug] || getVideoForSlug(slug);
};

const IndustryPageLayout = ({ data }: { data: IndustryPageData }) => {
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
        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.description} />
        <meta property="og:title" content={data.seo.title} />
        <meta property="og:description" content={data.seo.description} />
        <meta property="og:url" content={`https://beyondhorizons.sg/${data.slug}`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://beyondhorizons.sg/${data.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org", "@type": "LegalService",
            name: "Beyond Horizons Legal",
            provider: { "@type": "Organization", name: "Bethel Chambers LLC", url: "https://beyondhorizons.sg" },
            description: data.seo.description, areaServed: "Asia-Pacific",
            url: `https://beyondhorizons.sg/${data.slug}`,
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org", "@type": "FAQPage",
            mainEntity: data.faqs.items.map((faq) => ({
              "@type": "Question", name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background" ref={containerRef}>
        <Header />

        {/* Hero with Video */}
        <VideoBackground src={getVideoForSlug(data.slug)} className="min-h-[70vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/85" />
          <div className="min-h-[70vh] flex items-center justify-center w-full pt-20 relative z-10">
            <div className="max-w-4xl mx-auto container-padding text-center fade-in">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-8" />
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-tight" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.9)' }}>
                {data.hero.title}
              </h1>
              <p className="text-base md:text-lg text-white max-w-3xl mx-auto leading-relaxed mb-10" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.8)' }}>
                {data.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Button variant="default" size="lg" className="bg-white text-black font-semibold shadow-lg hover:bg-white/90" asChild>
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border border-white/40 text-white font-semibold hover:bg-white/10 shadow-lg backdrop-blur-sm" asChild>
                  <a href="#overview">
                    View Expertise <ChevronDown className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {data.hero.badges.map((badge, i) => (
                  <span key={i} className="text-xs text-white/90 font-medium border border-white/20 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md tracking-wide uppercase">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </VideoBackground>

        {/* Overview */}
        <section id="overview" className="section-padding bg-secondary/20">
          <div className="max-w-6xl mx-auto container-padding fade-in">
            <div className="text-center mb-12">
              <div className="teal-line mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                {data.overview.heading}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {data.overview.services.map((service, i) => (
                <Card key={i} className="border border-border bg-card shadow-md card-lift fade-in" style={{ transitionDelay: `${i * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center mb-4">
                      <service.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-sm font-serif font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.overview.stats.map((stat, i) => (
                <div key={i} className="text-center p-4 border border-border rounded shadow-sm bg-card fade-in" style={{ transitionDelay: `${i * 75}ms` }}>
                  <p className="text-sm text-foreground font-medium">{stat}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto container-padding fade-in">
            <div className="text-center mb-12">
              <div className="teal-line mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                {data.comparison.heading}
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="py-4 px-4 text-xs text-muted-foreground font-sans uppercase tracking-wider w-1/4">Feature</th>
                    <th className="py-4 px-4 text-xs text-muted-foreground font-sans uppercase tracking-wider w-[37.5%]">{data.comparison.otherLabel}</th>
                    <th className="py-4 px-4 text-xs text-accent font-sans uppercase tracking-wider w-[37.5%]">Beyond Horizons</th>
                  </tr>
                </thead>
                <tbody>
                  {data.comparison.rows.map((row, i) => (
                    <tr key={i} className="border-b border-border/20">
                      <td className="py-4 px-4 text-sm text-foreground font-sans">{row.feature}</td>
                      <td className="py-4 px-4 text-xs text-muted-foreground">{row.other}</td>
                      <td className="py-4 px-4 text-xs text-foreground">{row.bh}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-6 text-center">
              Comparison reflects general industry models. Every engagement is unique.
            </p>
          </div>
        </section>

        {/* Spotlight */}
        <section className="section-padding bg-secondary/20">
          <div className="max-w-6xl mx-auto container-padding fade-in">
            <div className="text-center mb-12">
              <div className="teal-line mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                {data.spotlight.heading}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {data.spotlight.cards.map((card, i) => (
                <Card key={i} className="border border-border bg-card shadow-md card-lift fade-in" style={{ transitionDelay: `${i * 100}ms` }}>
                  <CardContent className="p-6">
                    {card.icon ? (
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <card.icon className="w-5 h-5 text-accent" />
                      </div>
                    ) : (
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mb-4" />
                    )}
                    <h3 className="text-sm font-serif font-bold text-foreground mb-3">{card.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">{card.description}</p>
                    {card.link && (
                      <a href={card.link} target="_blank" rel="noopener noreferrer" className="text-xs text-accent inline-flex items-center hover:underline">
                        {card.linkText || "Read More"} <ArrowRight className="ml-1 h-3 w-3" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            {data.spotlight.analysis && (
              <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center">{data.spotlight.analysis}</p>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-background">
          <div className="max-w-3xl mx-auto container-padding fade-in">
            <div className="text-center mb-12">
              <div className="teal-line mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                {data.faqs.heading}
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {data.faqs.items.map((faq, i) => (
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
        <VideoBackground src={getCtaVideoForSlug(data.slug)} className="py-24">
          <div className="max-w-3xl mx-auto container-padding text-center fade-in py-16">
            <div className="teal-line mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              {data.cta.heading}
            </h2>
            {data.cta.description && (
              <p className="text-foreground/70 leading-relaxed mb-10 text-lg">{data.cta.description}</p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="bg-white text-black font-semibold shadow-lg hover:bg-white/90" asChild>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white font-semibold hover:bg-white hover:text-black shadow-lg" asChild>
                <a href="mailto:HL@beyondhorizons.sg">
                  <Mail className="mr-2 h-4 w-4" /> Email Us
                </a>
              </Button>
            </div>
          </div>
        </VideoBackground>

        {/* Related */}
        {data.relatedPages.length > 0 && (
          <section className="py-16 bg-background">
            <div className="max-w-4xl mx-auto container-padding text-center">
              <h3 className="text-lg font-serif font-bold text-foreground mb-6">Related Practice Areas</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {data.relatedPages.map((page, i) => (
                  <Link key={i} to={`/industry/${page.slug}`} className="text-xs text-muted-foreground border border-border/30 px-4 py-2 rounded-full hover:text-accent hover:border-accent/30 transition-smooth">
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
