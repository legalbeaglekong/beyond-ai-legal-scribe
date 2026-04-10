import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import aviationIndustry from "@/assets/aviation-industry.jpg";
import transportationIndustry from "@/assets/transportation-industry.jpg";
import wellnessHealthIndustry from "@/assets/wellness-health-industry.jpg";
import blockchainIndustry from "@/assets/blockchain-digital-assets-industry.jpg";
import energyTransitionIndustry from "@/assets/energy-transition-industry.jpg";
import tradeTariffIndustry from "@/assets/trade-tariff-industry.jpg";
import robotLeasingIndustry from "@/assets/robot-leasing-robotics-industry.jpg";
import cybersecurityTechIndustry from "@/assets/cybersecurity-tech-industry.jpg";

const Industries = () => {
  const industries = [
    {
      title: "Aviation",
      description: "Comprehensive legal solutions for airlines, aircraft manufacturers, and aviation infrastructure projects, including regulatory compliance and international aviation law.",
      image: aviationIndustry,
      highlights: ["Aircraft Financing & Leasing", "Aviation Regulatory Compliance", "International Aviation Agreements", "Airport Development Projects"]
    },
    {
      title: "Transportation",
      description: "Strategic legal guidance for transportation companies, logistics providers, and infrastructure developers across all modes of transport.",
      image: transportationIndustry,
      highlights: ["Transportation Infrastructure", "Logistics & Supply Chain", "Regulatory Compliance", "Cross-border Transportation"]
    },
    {
      title: "Wellness & Health",
      description: "Specialized expertise in healthcare regulations, wellness technology, and medical innovation projects within complex regulatory frameworks.",
      image: wellnessHealthIndustry,
      highlights: ["Healthcare Compliance", "Medical Device Regulation", "Digital Health Solutions", "Wellness Technology Frameworks"]
    },
    {
      title: "Blockchain & Digital Assets",
      description: "Cutting-edge legal frameworks for blockchain technology, cryptocurrency ventures, and digital asset management in evolving regulatory landscapes.",
      image: blockchainIndustry,
      highlights: ["Digital Asset Compliance", "Blockchain Technology Law", "Cryptocurrency Regulations", "DeFi Legal Frameworks"]
    },
    {
      title: "Energy Transition Infrastructure",
      description: "Forward-thinking legal strategies for renewable energy projects, clean technology ventures, and sustainable infrastructure development.",
      image: energyTransitionIndustry,
      highlights: ["Renewable Energy Projects", "Clean Technology Ventures", "ESG Compliance", "Sustainable Infrastructure"]
    },
    {
      title: "Trade & Tariff",
      description: "Strategic legal counsel on international trade regulations, tariff classifications, customs compliance, and cross-border trade disputes in an evolving global landscape.",
      image: tradeTariffIndustry,
      highlights: ["Tariff Classification & Strategy", "Customs Compliance", "Trade Remedies & Disputes", "Sanctions & Export Controls"]
    },
    {
      title: "Robot Leasing & Robotics Integration",
      description: "Pioneering legal frameworks for robot leasing structures, robotics-as-a-service agreements, and regulatory compliance for autonomous systems deployment.",
      image: robotLeasingIndustry,
      highlights: ["Robot Leasing Agreements", "Robotics-as-a-Service (RaaS)", "Liability & Insurance Frameworks", "Regulatory Compliance for Autonomous Systems"],
      link: "https://robotlaw.beyondhorizons.sg"
    },
    {
      title: "Cybersecurity & Emerging Technology",
      description: "Advising on data protection, cybersecurity governance, and emerging technology risks — from AI regulation and deepfake liability to critical infrastructure defence and incident response.",
      image: cybersecurityTechIndustry,
      highlights: ["Cybersecurity Governance & Compliance", "Data Protection & Privacy Law", "AI Regulation & Liability", "Critical Infrastructure Defence"]
    }
  ];

  return (
    <section id="industries" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-24">
          <p className="text-muted-foreground font-light text-sm uppercase tracking-wide mb-8">
            Industry Expertise
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
            Niche Industry Focus
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Our deep understanding of specialized industries allows us to provide targeted legal solutions 
            that address unique challenges and regulatory requirements across key sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <Card key={index} className="group overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={industry.image}
                  alt={`${industry.title} industry expertise`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {industry.title}
                  </h3>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {industry.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-medium text-foreground">Key Focus Areas:</h4>
                  <div className="space-y-1">
                    {industry.highlights.map((highlight, highlightIndex) => (
                      <div 
                        key={highlightIndex} 
                        className="text-xs text-muted-foreground py-1 border-b border-border/50"
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {industry.link ? (
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                    <a href={industry.link} target="_blank" rel="noopener noreferrer">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <hr className="minimal-divider max-w-xs mx-auto mb-16" />
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Industry-Specific Legal Excellence
          </h3>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Partner with legal experts who understand your industry's unique challenges and opportunities. 
            Let's discuss how our specialized expertise can drive your business forward.
          </p>
          <Button variant="default" size="lg" className="text-lg px-12 py-4" asChild>
            <a 
              href="https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discuss Your Industry Needs
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Industries;