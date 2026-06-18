import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Mail,
  Newspaper,
  type LucideIcon,
} from "lucide-react";
import RelatedInsights from "@/components/RelatedInsights";

const BOOKING_URL =
  "https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled";
const SITE = "https://beyondhorizons.sg";

export interface PillarService {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface PillarUpdate {
  title: string;
  summary: string;
}

export interface PillarFaq {
  q: string;
  a: string;
}

export interface PillarGuideStep {
  title: string;
  body: string;
}

export interface PillarGuide {
  id: string;                   // anchor id, e.g. "ai-verify-guide"
  eyebrow?: string;
  heading: string;
  intro: string;
  steps: PillarGuideStep[];
  closing?: string;
}

export interface PillarPageProps {
  slug: string;                 // e.g. "singapore-restructuring-insolvency"
  eyebrow: string;              // e.g. "Singapore · Restructuring & Insolvency"
  h1: string;
  intro: string;
  badges: string[];
  metaTitle: string;            // <60 chars ideal
  metaDescription: string;      // <160 chars
  ogTitle: string;
  ogDescription: string;
  breadcrumbName: string;       // visible label in breadcrumb crumbs
  serviceType: string;          // schema.org LegalService.serviceType
  serviceDescription: string;
  services: PillarService[];
  updates: PillarUpdate[];
  faqs: PillarFaq[];
  guide?: PillarGuide;
  relatedKeywords: string[];
  relatedHeading: string;
  ctaHeading: string;
  ctaBody: string;
  exploreLink?: { label: string; to: string };
  lastUpdatedISO: string;       // e.g. "2026-06-09"
  lastUpdatedLabel: string;     // e.g. "June 2026"
}


const PillarPage = ({
  slug,
  eyebrow,
  h1,
  intro,
  badges,
  metaTitle,
  metaDescription,
  ogTitle,
  ogDescription,
  breadcrumbName,
  serviceType,
  serviceDescription,
  services,
  updates,
  faqs,
  guide,
  relatedKeywords,
  relatedHeading,
  ctaHeading,
  ctaBody,
  exploreLink,
  lastUpdatedISO,
  lastUpdatedLabel,
}: PillarPageProps) => {
  const canonical = `${SITE}/${slug}`;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${breadcrumbName} — Beyond Horizons by Bethel Chambers LLC`,
    areaServed: "Singapore",
    serviceType,
    url: canonical,
    description: serviceDescription,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
      { "@type": "ListItem", position: 2, name: "Topics", item: SITE + "/topics" },
      { "@type": "ListItem", position: 3, name: breadcrumbName, item: canonical },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: metaTitle,
    description: metaDescription,
    dateModified: lastUpdatedISO,
    author: {
      "@type": "Organization",
      name: "Beyond Horizons by Bethel Chambers LLC",
      url: SITE,
    },
    publisher: {
      "@type": "Organization",
      name: "Beyond Horizons by Bethel Chambers LLC",
    },
    mainEntityOfPage: canonical,
  };

  const howToJsonLd = guide
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: guide.heading,
        description: guide.intro,
        step: guide.steps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.title,
          text: s.body,
        })),
      }
    : null;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
        {howToJsonLd && (
          <script type="application/ld+json">{JSON.stringify(howToJsonLd)}</script>
        )}
      </Helmet>


      <Header />

      <main>
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-secondary/40 to-background">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/topics" className="hover:text-primary">Topics</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{breadcrumbName}</span>
            </nav>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">{eyebrow}</p>
            <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6 leading-tight">{h1}</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">{intro}</p>
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              {badges.map((b) => (
                <span key={b} className="px-4 py-2 rounded-full bg-background/60 border border-border text-sm text-foreground">{b}</span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mb-6">
              Last updated <time dateTime={lastUpdatedISO}>{lastUpdatedLabel}</time>
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-10 text-center">How We Advise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((s) => (
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

        {updates.length > 0 && (
          <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6 max-w-5xl">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-10 flex items-center gap-3">
                <Newspaper className="h-7 w-7 text-primary" /> Recent Developments
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {updates.map((n) => (
                  <Card key={n.title} className="border-border h-full">
                    <CardContent className="p-6">
                      <h3 className="font-serif text-lg text-foreground mb-3">{n.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{n.summary}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-10 text-center">Frequently Asked Questions</h2>
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

        <RelatedInsights keywords={relatedKeywords} heading={relatedHeading} />

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">{ctaHeading}</h2>
            <p className="text-primary-foreground/85 text-lg mb-8">{ctaBody}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              {exploreLink && (
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to={exploreLink.to}>
                    <Mail className="mr-2 h-4 w-4" /> {exploreLink.label}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PillarPage;
