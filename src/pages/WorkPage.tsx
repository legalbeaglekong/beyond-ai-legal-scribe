import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ExternalLink, Globe, Bot, Scale, Briefcase, Plane } from "lucide-react";
import { Link } from "react-router-dom";
import VideoBackground from "@/components/VideoBackground";
import { STOCK_VIDEOS } from "@/lib/stock-videos";

const BOOKING_URL = "https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled";

const platforms = [
  {
    title: "Ascending Asia",
    subtitle: "Cross-Border Business Advisory",
    description: "Beyond Horizons Legal's dedicated cross-border business advisory platform, helping companies navigate market entry, regulatory compliance, and strategic growth across Asia-Pacific.",
    highlights: ["Market entry strategy & corporate structuring", "Cross-border regulatory navigation", "Strategic partnership facilitation across ASEAN", "Investment and joint venture advisory"],
    url: "https://ascendingasia.beyondhorizons.sg",
    icon: Globe,
  },
  {
    title: "Robot Law",
    subtitle: "Robotics & Autonomous Systems Legal",
    description: "Pioneering platform dedicated to the legal frameworks governing robotics, autonomous systems, and AI-powered machines. Sophisticated aircraft leasing structures adapted to robot leasing.",
    highlights: ["Robot leasing & financing frameworks", "Robotics-as-a-Service (SaaS) contracts", "Autonomous systems liability & insurance", "Regulatory compliance for cobots & drones"],
    url: "https://robotlaw.beyondhorizons.sg",
    icon: Bot,
  },
];

const industryPages = [
  { title: "Aviation", slug: "aviation", icon: Plane, description: "Aircraft finance, leasing & regulatory counsel" },
  { title: "Transportation", slug: "transportation", icon: Globe, description: "Infrastructure, logistics & cross-border trade" },
  { title: "Wellness & Health", slug: "wellness-health", icon: Briefcase, description: "Healthcare regulation, digital health & MedTech" },
  { title: "Blockchain & Digital Assets", slug: "blockchain-digital-assets", icon: Scale, description: "Token regulation, DeFi & Web3 counsel" },
  { title: "Energy Transition", slug: "energy-transition", icon: Globe, description: "Renewable energy, ESG & green finance" },
  { title: "Trade & Tariff", slug: "trade-tariff", icon: Scale, description: "Business repositioning & contractual restructuring" },
  { title: "Cybersecurity & Emerging Tech", slug: "cybersecurity-tech", icon: Briefcase, description: "Data protection, AI governance & cyber risk" },
];

const WorkPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>Our Work — Platforms & Industry Expertise | Beyond Horizons Legal</title>
        <meta name="description" content="Explore Beyond Horizons Legal's specialist platforms and deep industry expertise across 8 sectors." />
        <link rel="canonical" href="https://beyondhorizons.sg/work" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <VideoBackground src={STOCK_VIDEOS.maritime} className="min-h-[60vh] flex items-center" overlayClassName="absolute inset-0 bg-black/60">
          <div className="min-h-[60vh] flex items-center justify-center w-full pt-20">
            <div className="max-w-4xl mx-auto container-padding text-center">
              <div className="teal-line mx-auto mb-6" />
              <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-4 font-sans drop-shadow">Our Work</p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">
                Platforms & Industry Expertise
              </h1>
              <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed drop-shadow">
                Specialist platforms and deep industry expertise — combining global reach with focused legal innovation.
              </p>
            </div>
          </div>
        </VideoBackground>

        {/* Platforms */}
        <section className="section-padding bg-secondary/20">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-12">
              <div className="teal-line mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Specialist Platforms</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Purpose-built legal advisory platforms serving distinct markets.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {platforms.map((p, i) => (
                <Card key={i} className="border-border/30 bg-card card-lift">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center">
                        <p.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif font-bold text-foreground">{p.title}</h3>
                        <p className="text-xs text-muted-foreground">{p.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.description}</p>
                    <div className="space-y-2 mb-6">
                      {p.highlights.map((h, j) => (
                        <div key={j} className="text-xs text-muted-foreground flex items-center">
                          <span className="w-1 h-1 rounded-full bg-accent/40 mr-2" />{h}
                        </div>
                      ))}
                    </div>
                    <a href={p.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="default" size="default" className="w-full">
                        Visit {p.title} <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="section-padding bg-background">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-12">
              <div className="teal-line mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Industry Expertise</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Deep specialisation across key sectors.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryPages.map((page, i) => (
                <Link key={i} to={`/industry/${page.slug}`} className="block group">
                  <Card className="border-border/30 bg-card card-lift hover:border-accent/30 h-full">
                    <CardContent className="p-6">
                      <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center mb-4">
                        <page.icon className="h-4 w-4 text-accent" />
                      </div>
                      <h3 className="text-sm font-serif font-bold text-foreground mb-2 group-hover:text-accent transition-smooth">{page.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-3">{page.description}</p>
                      <span className="text-xs text-accent inline-flex items-center">Learn More <ArrowRight className="ml-1 h-3 w-3" /></span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            {/* Why Specialist Counsel link */}
            <div className="mt-10 text-center">
              <Link to="/why-specialist-counsel" className="inline-flex items-center text-sm text-accent hover:underline transition-smooth">
                Why choose specialist counsel? Compare service models <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <VideoBackground src={STOCK_VIDEOS.cityscape} className="py-20" overlayClassName="absolute inset-0 bg-black/60">
          <div className="max-w-3xl mx-auto container-padding text-center py-12">
            <div className="teal-line mx-auto mb-8" />
            <h2 className="text-3xl font-serif font-bold text-white mb-6 drop-shadow-lg">Let's discuss how we can help</h2>
            <Button variant="default" size="lg" className="bg-white text-black font-semibold shadow-lg hover:bg-white/90" asChild>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </VideoBackground>

        <Footer />
      </div>
    </>
  );
};

export default WorkPage;
