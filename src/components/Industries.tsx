import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import industryAviation from "@/assets/industry-aviation.jpg";
import industryTransportation from "@/assets/industry-transportation.jpg";
import industryRobotics from "@/assets/industry-robotics.jpg";
import industryEnergy from "@/assets/industry-energy.jpg";
import businessMeeting from "@/assets/business-meeting.jpg";

const Industries = () => {
  const industries = [
    { title: "Aviation", description: "Comprehensive legal solutions for airlines, aircraft manufacturers, and aviation infrastructure projects.", highlights: ["Aircraft Financing & Leasing", "Aviation Regulatory Compliance", "International Aviation Agreements"], route: "/industry/aviation", image: industryAviation },
    { title: "Transportation", description: "Strategic legal guidance for transportation companies, logistics providers, and infrastructure developers.", highlights: ["Transportation Infrastructure", "Logistics & Supply Chain", "Cross-border Transportation"], route: "/industry/transportation", image: industryTransportation },
    { title: "Wellness & Health", description: "Specialized expertise in healthcare regulations, wellness technology, and medical innovation.", highlights: ["Healthcare Compliance", "Digital Health Solutions", "Wellness Technology"], route: "/industry/wellness-health" },
    { title: "Blockchain & Digital Assets", description: "Cutting-edge legal frameworks for blockchain technology and digital asset management.", highlights: ["Digital Asset Compliance", "Cryptocurrency Regulations", "DeFi Legal Frameworks"], route: "/industry/blockchain-digital-assets" },
    { title: "Energy Transition", description: "Forward-thinking legal strategies for renewable energy projects and sustainable infrastructure.", highlights: ["Renewable Energy Projects", "ESG Compliance", "Sustainable Infrastructure"], route: "/industry/energy-transition", image: industryEnergy },
    { title: "Trade & Tariff", description: "Strategic counsel helping businesses restructure relationships and reposition operations.", highlights: ["Contractual Restructuring", "Joint Venture Agreements", "Business Repositioning"], route: "/industry/trade-tariff" },
    { title: "Robot Leasing & Robotics", description: "Pioneering legal frameworks for robot leasing structures and robotics-as-a-service.", highlights: ["Robot Leasing Agreements", "RaaS Contracts", "Liability Frameworks"], link: "https://robotlaw.beyondhorizons.sg", image: industryRobotics },
    { title: "Cybersecurity & Emerging Tech", description: "Advising on data protection, cybersecurity governance, and emerging technology risks.", highlights: ["Cybersecurity Governance", "AI Regulation & Liability", "Critical Infrastructure"], route: "/industry/cybersecurity-tech" },
  ];

  return (
    <section id="industries" className="bg-background">
      {/* Full-width industry image banner */}
      <div className="px-4 md:px-8">
        <img src={businessMeeting} alt="Corporate boardroom meeting" className="w-full h-[35vh] object-cover rounded-sm" loading="lazy" />
      </div>

      <div className="section-padding">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="mb-16">
            <div className="accent-line mb-6" />
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">
              Niche Industry Focus
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Our deep understanding of specialized industries allows us to provide targeted legal solutions 
              that address unique challenges across key sectors.
            </p>
          </div>

          {/* Industries Grid — with images where available */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {industries.map((industry, index) => (
              <div key={index} className="group">
                {industry.image && (
                  <div className="overflow-hidden rounded-sm mb-4">
                    <img
                      src={industry.image}
                      alt={`${industry.title} industry`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                )}
                <h3 className="text-lg font-serif font-bold text-foreground mb-2 group-hover:text-accent transition-smooth">
                  {industry.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {industry.description}
                </p>
                <div className="space-y-1 mb-4">
                  {industry.highlights.map((h, i) => (
                    <div key={i} className="text-xs text-muted-foreground flex items-center">
                      <span className="w-1 h-1 rounded-full bg-accent/60 mr-2" />{h}
                    </div>
                  ))}
                </div>
                {industry.link ? (
                  <a href={industry.link} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground link-underline inline-flex items-center">
                    Learn More <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                ) : industry.route ? (
                  <Link to={industry.route} className="text-sm text-foreground link-underline inline-flex items-center">
                    Learn More <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                ) : null}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="border-t border-border pt-12 text-center">
            <h3 className="text-2xl font-serif text-foreground mb-4">
              Industry-Specific Legal Excellence
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Partner with legal experts who understand your industry's unique challenges.
            </p>
            <Button variant="default" size="lg" asChild>
              <a href="https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled" target="_blank" rel="noopener noreferrer">
                Discuss Your Industry Needs <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
