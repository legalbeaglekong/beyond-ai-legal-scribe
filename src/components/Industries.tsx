import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import VideoBackground from "@/components/VideoBackground";
import { STOCK_VIDEOS } from "@/lib/stock-videos";

const Industries = () => {
  const industries = [
    {
      title: "Aviation",
      description: "Comprehensive legal solutions for airlines, aircraft manufacturers, and aviation infrastructure projects.",
      highlights: ["Aircraft Financing & Leasing", "Aviation Regulatory Compliance", "International Aviation Agreements", "Airport Development Projects"],
      route: "/industry/aviation"
    },
    {
      title: "Transportation",
      description: "Strategic legal guidance for transportation companies, logistics providers, and infrastructure developers.",
      highlights: ["Transportation Infrastructure", "Logistics & Supply Chain", "Regulatory Compliance", "Cross-border Transportation"],
      route: "/industry/transportation"
    },
    {
      title: "Wellness & Health",
      description: "Specialized expertise in healthcare regulations, wellness technology, and medical innovation.",
      highlights: ["Healthcare Compliance", "Medical Device Regulation", "Digital Health Solutions", "Wellness Technology"],
      route: "/industry/wellness-health"
    },
    {
      title: "Blockchain & Digital Assets",
      description: "Cutting-edge legal frameworks for blockchain technology and digital asset management.",
      highlights: ["Digital Asset Compliance", "Blockchain Technology Law", "Cryptocurrency Regulations", "DeFi Legal Frameworks"],
      route: "/industry/blockchain-digital-assets"
    },
    {
      title: "Energy Transition",
      description: "Forward-thinking legal strategies for renewable energy projects and sustainable infrastructure.",
      highlights: ["Renewable Energy Projects", "Clean Technology Ventures", "ESG Compliance", "Sustainable Infrastructure"],
      route: "/industry/energy-transition"
    },
    {
      title: "Trade & Tariff",
      description: "Strategic counsel helping businesses restructure relationships and reposition operations in response to shifting trade policies.",
      highlights: ["Contractual Review & Restructuring", "Joint Venture & Shareholder Agreements", "Business Repositioning Strategy", "Risk Assessment & Mitigation"],
      route: "/industry/trade-tariff"
    },
    {
      title: "Robot Leasing & Robotics",
      description: "Pioneering legal frameworks for robot leasing structures and robotics-as-a-service agreements.",
      highlights: ["Robot Leasing Agreements", "Robotics-as-a-Service (RaaS)", "Liability & Insurance Frameworks", "Regulatory Compliance"],
      link: "https://robotlaw.beyondhorizons.sg"
    },
    {
      title: "Cybersecurity & Emerging Tech",
      description: "Advising on data protection, cybersecurity governance, and emerging technology risks.",
      highlights: ["Cybersecurity Governance", "Data Protection & Privacy", "AI Regulation & Liability", "Critical Infrastructure Defence"],
      route: "/industry/cybersecurity-tech"
    }
  ];

  return (
    <section id="industries" className="relative">
      {/* Video divider */}
      <VideoBackground src={STOCK_VIDEOS.glass} className="h-[35vh]">
        <div className="h-[35vh] flex items-center justify-center">
          <div className="text-center">
            <div className="teal-line mx-auto mb-6" />
            <p className="text-sm uppercase tracking-[0.3em] text-foreground/60 mb-4 font-sans">Industry Expertise</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Niche Industry Focus
            </h2>
          </div>
        </div>
      </VideoBackground>

      <div className="section-padding bg-background">
        <div className="max-w-6xl mx-auto container-padding">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-16 leading-relaxed">
            Our deep understanding of specialized industries allows us to provide targeted legal solutions 
            that address unique challenges and regulatory requirements across key sectors.
          </p>

          {/* Industries Grid — P&B style cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {industries.map((industry, index) => (
              <Card key={index} className="group border-border/30 bg-card hover:border-accent/30 card-lift">
                <CardContent className="p-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mb-4" />
                  <h3 className="text-base font-serif font-bold text-foreground mb-3 group-hover:text-accent transition-smooth">
                    {industry.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {industry.description}
                  </p>
                  <div className="space-y-1.5 mb-5">
                    {industry.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="text-xs text-muted-foreground/70 flex items-center">
                        <span className="w-1 h-1 rounded-full bg-accent/40 mr-2" />
                        {h}
                      </div>
                    ))}
                  </div>
                  {industry.link ? (
                    <a href={industry.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm" className="w-full text-accent hover:bg-accent/10 text-xs">
                        Learn More <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </a>
                  ) : industry.route ? (
                    <Link to={industry.route}>
                      <Button variant="ghost" size="sm" className="w-full text-accent hover:bg-accent/10 text-xs">
                        Learn More <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="teal-line mx-auto mb-8" />
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Industry-Specific Legal Excellence
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              Partner with legal experts who understand your industry's unique challenges.
            </p>
            <Button variant="default" size="lg" asChild>
              <a href="https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled" target="_blank" rel="noopener noreferrer">
                Discuss Your Industry Needs
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
