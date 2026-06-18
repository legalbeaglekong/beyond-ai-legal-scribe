import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Rocket, Satellite, Globe, Shield, Calendar, Newspaper, Building2, ArrowRight, Mail } from "lucide-react";
import RelatedInsights from "@/components/RelatedInsights";

const BOOKING_URL = "https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled";
const CANONICAL = "https://beyondhorizons.sg/singapore-space-law";

const faqs = [
  {
    q: "What is Singapore space law?",
    a: "Singapore space law is the combination of international treaties (the Outer Space Treaty, Liability Convention, Registration Convention) and Singapore's national framework — administered by the Office for Space Technology and Industry (OSTIn) under the Economic Development Board — governing satellite operations, launch activities, spectrum use, and commercial space ventures connected to Singapore.",
  },
  {
    q: "Does Singapore have a national space agency?",
    a: "Singapore's national space office is the Office for Space Technology and Industry (OSTIn), established in 2013 and sitting under the Economic Development Board. OSTIn coordinates national space policy, the Space Technology Development Programme (STDP), and Singapore's positioning as a commercial space hub.",
  },
  {
    q: "Do I need a licence to operate a satellite from Singapore?",
    a: "Yes. Satellite operators connected to Singapore typically require spectrum and orbital coordination through the IMDA and ITU filings, plus compliance with national space activity rules administered by OSTIn. Export-controlled components (ITAR/EAR) and dual-use technology controls under Strategic Goods (Control) Act may also apply.",
  },
  {
    q: "How is liability allocated for launches involving Singapore parties?",
    a: "Under the 1972 Liability Convention, launching states bear international liability for damage caused by their space objects. Commercially, liability is allocated through launch services agreements, cross-waivers, third-party liability insurance, and indemnities — structured to fit Singapore's regulatory expectations and the operator's risk appetite.",
  },
  {
    q: "What are the key Singapore space conferences and events?",
    a: "The flagship event is the Global Space and Technology Convention (GSTC) held annually in Singapore by the Singapore Space and Technology Ltd (SSTL). Additional gatherings include the Asia Tech x Singapore (ATxSG) satellite and connectivity tracks, IMDA spectrum forums, and APAC-focused space sustainability roundtables.",
  },
  {
    q: "What recent space developments have happened in Singapore?",
    a: "Singapore has expanded OSTIn's mandate and funding under the Space Technology Development Programme, supported new satellite startups (including Earth observation and IoT constellation operators), and hosted growing GSTC editions. Singapore continues to develop national space legislation and regulatory frameworks for commercial space activity.",
  },
  {
    q: "How does Beyond Horizons Legal price Singapore space law engagements?",
    a: "We offer transparent, value-aligned pricing — fixed fees for regulatory filings and licensing, milestone-based pricing for satellite and launch transactions, and retainer arrangements for ongoing advisory tailored to the pace of the new space economy.",
  },
];

const newsItems = [
  {
    title: "OSTIn expands Space Technology Development Programme",
    summary: "Singapore's Office for Space Technology and Industry continues to grow funding and grant calls under the STDP, supporting satellite communications, Earth observation, and in-orbit servicing capabilities developed locally.",
  },
  {
    title: "Singapore satellite startups attract regional capital",
    summary: "A new wave of Singapore-headquartered satellite and Earth-observation companies has raised follow-on rounds, deepening Singapore's role as the commercial space hub for Southeast Asia.",
  },
  {
    title: "Spectrum coordination and orbital filings via IMDA",
    summary: "IMDA continues to administer spectrum coordination and Singapore-administered ITU filings for non-geostationary satellite systems, an increasingly critical pathway for global LEO constellations.",
  },
];

const events = [
  {
    title: "Global Space and Technology Convention (GSTC)",
    when: "Annual — Singapore",
    host: "Singapore Space and Technology Ltd (SSTL)",
    detail: "Asia's longest-running space industry conference, gathering operators, agencies, investors and regulators across the APAC space ecosystem.",
  },
  {
    title: "Asia Tech x Singapore (ATxSG) — Satellite & Connectivity",
    when: "Annual — Singapore",
    host: "IMDA",
    detail: "Tracks covering satellite connectivity, spectrum policy, and digital infrastructure intersecting with the space and telecoms stack.",
  },
  {
    title: "APAC Space Sustainability Roundtables",
    when: "Recurring",
    host: "Industry & government partners",
    detail: "Closed-door sessions on orbital debris mitigation, space traffic management, and responsible operations from the APAC perspective.",
  },
];

const SingaporeSpaceLawPage = () => {
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
    name: "Singapore Space Law — Beyond Horizons by Bethel Chambers LLC",
    areaServed: "Singapore",
    serviceType: "Space Law",
    url: CANONICAL,
    description:
      "Singapore space law counsel for satellite operators, launch providers, and commercial space ventures — OSTIn coordination, IMDA spectrum, launch agreements, and cross-border space transactions.",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beyondhorizons.sg/" },
      { "@type": "ListItem", position: 2, name: "Topics", item: "https://beyondhorizons.sg/topics" },
      { "@type": "ListItem", position: 3, name: "Singapore Space Law", item: CANONICAL },
    ],
  };


  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Singapore Space Law & Launch Counsel | Beyond Horizons</title>
        <meta
          name="description"
          content="Singapore space law counsel: OSTIn coordination, IMDA spectrum, satellite & launch agreements, GSTC, and the APAC commercial space ecosystem."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="Singapore Space Law — Satellite & Launch Counsel" />
        <meta
          property="og:description"
          content="Singapore space law counsel for satellite operators, launch providers, and commercial space ventures across APAC."
        />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>


      <Header />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-secondary/40 to-background">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Singapore-anchored · Cross-border Space Law</p>
            <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6 leading-tight">
              Space Law — Singapore-anchored, Cross-border Counsel for the New Space Economy
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Singapore-anchored space law advisory for satellite operators, launch providers and commercial space ventures — OSTIn coordination and IMDA spectrum in Singapore, partnered with leading space counsel for US, UK, EU, Japan, India and Australia cross-border matters.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {["OSTIn-aligned advisory", "IMDA spectrum & ITU filings", "Cross-border launch & satellite deals"].map((b) => (
                <span key={b} className="px-4 py-2 rounded-full bg-background/60 border border-border text-sm text-foreground">
                  {b}
                </span>
              ))}
            </div>
            <Button asChild size="lg" className="bg-primary text-primary-foreground">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-10 text-center">
              How We Advise on Singapore Space Law
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Satellite, title: "Satellite Licensing & Spectrum", desc: "IMDA spectrum coordination, ITU filings via Singapore administration, orbital slot strategy, and earth-station authorisations for LEO/MEO/GEO operators." },
                { icon: Rocket, title: "Launch Agreements & Liability", desc: "Launch services agreements, cross-waivers, third-party liability insurance structures, and indemnities aligned with the Outer Space and Liability Conventions." },
                { icon: Building2, title: "OSTIn & Government Engagement", desc: "Engagement with OSTIn, EDB, and IMDA on Singapore space activity approvals, STDP grant participation, and emerging national space legislation." },
                { icon: Globe, title: "Cross-Border Space Ventures", desc: "Joint ventures, foreign investment structuring, and APAC-wide commercial space transactions — partnering with leading global space counsel where needed." },
                { icon: Shield, title: "Export Controls & Dual-Use", desc: "Strategic Goods (Control) Act, ITAR/EAR awareness, and technology transfer guardrails for satellite components, ground systems, and launch payloads." },
                { icon: Calendar, title: "Space Sustainability & ESG", desc: "Orbital debris mitigation, space traffic management readiness, and ESG-aligned operational frameworks for long-term Singapore-licensed missions." },
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

        {/* OSTIn / Agency */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Singapore's Space Agency — OSTIn
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Singapore's national space office is the <strong>Office for Space Technology and Industry (OSTIn)</strong>, established under the Economic Development Board. OSTIn coordinates national space policy, runs the <strong>Space Technology Development Programme (STDP)</strong>, supports Singapore-based space startups, and engages internationally on Singapore's behalf in space matters.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our team advises clients on OSTIn-aligned project structuring, STDP grant participation, and the regulatory pathways that link OSTIn, IMDA (for spectrum), and EDB (for industry development) when launching or operating satellites with a Singapore nexus.
            </p>
          </div>
        </section>

        {/* News */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-10 flex items-center gap-3">
              <Newspaper className="h-7 w-7 text-primary" /> Singapore Space News & Developments
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {newsItems.map((n) => (
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

        {/* Events */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-10 flex items-center gap-3">
              <Calendar className="h-7 w-7 text-primary" /> Singapore Space & Satellite Conferences and Events
            </h2>
            <div className="space-y-5">
              {events.map((e) => (
                <Card key={e.title} className="border-border">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                      <h3 className="font-serif text-xl text-foreground">{e.title}</h3>
                      <span className="text-sm text-primary">{e.when}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Host: {e.host}</p>
                    <p className="text-muted-foreground leading-relaxed">{e.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-10 text-center">
              Singapore Space Law — Frequently Asked Questions
            </h2>
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

        <RelatedInsights keywords={["space", "satellite", "ostin", "launch", "aerospace", "aviation"]} heading="Related Insights — Space & Satellite" />

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Schedule a Singapore Space Law Consultation</h2>
            <p className="text-primary-foreground/85 text-lg mb-8">
              From OSTIn engagement to satellite licensing and launch agreements, our team is ready to support your mission. Book a complimentary strategic consultation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/industry/space">
                  <Mail className="mr-2 h-4 w-4" /> Explore our Space Practice
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SingaporeSpaceLawPage;
