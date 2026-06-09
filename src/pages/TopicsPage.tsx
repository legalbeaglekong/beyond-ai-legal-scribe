import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import LatestInsightsFeed from "@/components/LatestInsightsFeed";

const SITE = "https://beyondhorizonslegal.lovable.app";
const CANONICAL = `${SITE}/topics`;

const clusters = [
  {
    heading: "Space, Satellites & Aerospace",
    items: [
      { to: "/singapore-space-law", title: "Singapore Space Law", desc: "OSTIn licensing, satellite operations, launch and downstream services." },
      { to: "/singapore-aviation-law", title: "Singapore Aviation Law", desc: "CAAS, Cape Town leasing, SAF and advanced air mobility." },
      { to: "/industry/space", title: "Space Industry Practice", desc: "Cinematic overview of our space and satellite work." },
      { to: "/industry/aviation", title: "Aviation Industry Practice", desc: "Aircraft, MRO and aerospace innovation." },
    ],
  },
  {
    heading: "AI, Robotics & Emerging Tech",
    items: [
      { to: "/singapore-ai-governance", title: "Singapore AI Governance", desc: "IMDA Model AI Framework, AI Verify, MAS FEAT, EU AI Act readiness." },
      { to: "/singapore-robotics-law", title: "Singapore Robotics Law", desc: "Autonomous vehicles, service & industrial robots, AI risk overlay." },
      { to: "/industry/ai-code-counsel", title: "AI Code Counsel", desc: "MAS MindForge regulatory guidance and AI risk governance." },
      { to: "/industry/cybersecurity-tech", title: "Cybersecurity & Tech", desc: "Cyber, data and technology counsel." },
    ],
  },
  {
    heading: "Workforce & Employment",
    items: [
      { to: "/singapore-employment-law", title: "Singapore Employment Law", desc: "MOM compliance, work passes (COMPASS), retrenchments and executive separations." },
    ],
  },
  {
    heading: "Restructuring & Distressed",
    items: [
      { to: "/singapore-restructuring-insolvency", title: "Singapore Restructuring & Insolvency", desc: "Schemes, JM, IRDA, cross-border recognition and distressed M&A." },
    ],
  },
  {
    heading: "Energy Transition, Nuclear & Climate",
    items: [
      { to: "/singapore-alternative-energy-law", title: "Singapore Alternative Energy Law", desc: "Electricity imports, hydrogen, BESS, Article 6 carbon." },
      { to: "/singapore-nuclear-law", title: "Singapore Nuclear Law", desc: "SMRs, nuclear financing, liability conventions, ASEAN deployment." },
      { to: "/industry/energy-transition", title: "Energy Transition Practice", desc: "Renewables, grids and decarbonisation." },
    ],
  },
  {
    heading: "Cross-border, Trade & Industry",
    items: [
      { to: "/industry/trade-tariff", title: "Trade & Tariff", desc: "Tariff strategy, sanctions, export controls and trade remedies." },
      { to: "/industry/transportation", title: "Transportation", desc: "Maritime, logistics and mobility." },
      { to: "/industry/blockchain-digital-assets", title: "Blockchain & Digital Assets", desc: "MAS DPT licensing, tokenisation and digital-asset structuring." },
      { to: "/industry/wellness-health", title: "Wellness & Health", desc: "Healthtech, life sciences and wellness regulation." },
      { to: "/industry/fractional-gc", title: "Fractional General Counsel", desc: "Outsourced senior-level legal support." },
    ],
  },
];

const TopicsPage = () => {
  const allPillars = clusters.flatMap((c) => c.items);
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: allPillars.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE}${p.to}`,
      name: p.title,
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Singapore Legal Topics & Practice Areas | Beyond Horizons</title>
        <meta
          name="description"
          content="Browse every Singapore legal topic and industry practice at Beyond Horizons — space, AI, employment, restructuring, energy, nuclear, aviation, robotics and more."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="Singapore Legal Topics — Beyond Horizons" />
        <meta property="og:description" content="A single index of every Beyond Horizons practice and industry topic." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(itemListJsonLd)}</script>
      </Helmet>

      <Header />

      <main>
        <section className="pt-32 pb-12 bg-gradient-to-b from-secondary/40 to-background">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Singapore-anchored · Cross-border</p>
            <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6 leading-tight">
              Practice Areas &amp; Topics
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A single index of every Beyond Horizons pillar — Singapore-anchored, built for boards, founders and senior executives navigating cross-border matters across APAC, EU, UK and the Americas.
            </p>
          </div>
        </section>

        {clusters.map((cluster) => (
          <section key={cluster.heading} className="py-12">
            <div className="container mx-auto px-6 max-w-6xl">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">{cluster.heading}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {cluster.items.map((item) => (
                  <Link key={item.to} to={item.to} className="group">
                    <Card className="h-full border-border transition hover:border-primary/40 hover:shadow-md">
                      <CardContent className="p-6">
                        <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                        <span className="text-xs uppercase tracking-wider text-primary inline-flex items-center">
                          Explore <ArrowRight className="ml-1 h-3 w-3" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}

        <LatestInsightsFeed />
      </main>

      <Footer />
    </div>
  );
};

export default TopicsPage;
