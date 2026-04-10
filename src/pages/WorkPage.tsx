import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ExternalLink, Globe, Plane, Bot, Scale, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const BOOKING_URL = "https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled";

const platforms = [
  {
    title: "Ascending Asia",
    subtitle: "Cross-Border Business Advisory",
    description: "Ascending Asia is Beyond Horizons Legal's dedicated cross-border business advisory platform, helping companies navigate market entry, regulatory compliance, and strategic growth across Asia-Pacific. From corporate structuring to partnership facilitation, Ascending Asia bridges the gap between ambition and execution in the world's fastest-growing economies.",
    highlights: [
      "Market entry strategy & corporate structuring",
      "Cross-border regulatory navigation",
      "Strategic partnership facilitation across ASEAN",
      "Investment and joint venture advisory",
    ],
    url: "https://ascendingasia.beyondhorizons.sg",
    icon: Globe,
  },
  {
    title: "Robot Law",
    subtitle: "Robotics & Autonomous Systems Legal",
    description: "Robot Law is Beyond Horizons Legal's pioneering platform dedicated to the legal frameworks governing robotics, autonomous systems, and AI-powered machines. Drawing on our Chambers-ranked asset finance expertise, we've adapted sophisticated aircraft leasing structures to the emerging world of robot leasing, RaaS, and autonomous liability.",
    highlights: [
      "Robot leasing & financing frameworks",
      "Robotics-as-a-Service (RaaS) contracts",
      "Autonomous systems liability & insurance",
      "Regulatory compliance for cobots & drones",
    ],
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
  { title: "Trade & Tariff", slug: "trade-tariff", icon: Scale, description: "International trade, customs & sanctions" },
  { title: "Cybersecurity & Emerging Tech", slug: "cybersecurity-tech", icon: Briefcase, description: "Data protection, AI governance & cyber risk" },
];

const WorkPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Work — Platforms & Industry Expertise | Beyond Horizons Legal</title>
        <meta name="description" content="Explore Beyond Horizons Legal's specialist platforms — Ascending Asia for cross-border business advisory and Robot Law for robotics legal frameworks — plus deep industry expertise across 8 sectors." />
        <link rel="canonical" href="https://beyondhorizons.sg/work" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="pt-32 pb-20 section-padding bg-gradient-hero relative">
          <div className="max-w-5xl mx-auto container-padding text-center hero-content fade-in">
            <p className="text-muted-foreground font-light text-sm uppercase tracking-wide mb-8">
              Our Work
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Platforms & Industry Expertise
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Beyond Horizons Legal operates specialist platforms and delivers deep industry expertise across key sectors — 
              combining global reach with focused legal innovation.
            </p>
          </div>
        </section>

        {/* Platforms */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Specialist Platforms
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
                Purpose-built legal advisory platforms serving distinct markets with dedicated expertise and tailored service models.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {platforms.map((platform, i) => (
                <Card key={i} className="border-border bg-card hover:shadow-lg transition-all duration-300 fade-in" style={{ transitionDelay: `${i * 150}ms` }}>
                  <CardContent className="p-8 md:p-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-secondary rounded flex items-center justify-center flex-shrink-0">
                        <platform.icon className="h-6 w-6 text-foreground" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{platform.title}</h3>
                        <p className="text-sm text-muted-foreground font-light">{platform.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground font-light leading-relaxed mb-6">
                      {platform.description}
                    </p>

                    <div className="space-y-2 mb-8">
                      <h4 className="text-sm font-medium text-foreground">Key Focus Areas:</h4>
                      {platform.highlights.map((h, j) => (
                        <div key={j} className="text-sm text-muted-foreground font-light py-2 border-b border-border/50">
                          {h}
                        </div>
                      ))}
                    </div>

                    <a href={platform.url} target="_blank" rel="noopener noreferrer" className="block">
                      <Button variant="default" size="lg" className="w-full">
                        Visit {platform.title}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Expertise */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Industry Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
                Deep specialisation across key sectors, delivering targeted legal solutions that address unique industry challenges and regulatory requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryPages.map((page, i) => (
                <Link key={i} to={`/industry/${page.slug}`} className="block group">
                  <Card className="border-border bg-card hover:shadow-lg transition-all duration-300 h-full fade-in" style={{ transitionDelay: `${i * 75}ms` }}>
                    <CardContent className="p-6">
                      <page.icon className="h-6 w-6 text-foreground mb-4" />
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-muted-foreground transition-smooth">
                        {page.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                        {page.description}
                      </p>
                      <span className="text-sm text-foreground inline-flex items-center group-hover:text-muted-foreground transition-smooth">
                        Learn More <ArrowRight className="ml-1 h-3 w-3" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-3xl mx-auto container-padding text-center fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let's discuss how we can help
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-10 text-lg">
              Whether you need specialist platform advisory or deep industry expertise, our team is ready to deliver.
            </p>
            <Button variant="default" size="lg" asChild>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default WorkPage;
