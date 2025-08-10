import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Plane, 
  Ship, 
  Fuel, 
  Building, 
  Rocket, 
  ArrowRight,
  DollarSign,
  Globe,
  Lightbulb 
} from "lucide-react";

const PracticeAreas = () => {
  const practiceAreas = [
    {
      icon: Plane,
      title: "Aviation & Aircraft Engines",
      description: "Pioneering legal solutions for hybrid-electric and hydrogen-powered flight technologies, including complex aircraft leasing and financing structures.",
      highlight: "Lease of the first A350-900 for a Flag Carrier Airline in North Asia",
      expertise: ["Aircraft Leasing", "Engine Financing", "Hybrid-Electric Technology", "Regulatory Compliance"],
    },
    {
      icon: Ship,
      title: "Maritime Innovations & Novel Ship Designs",
      description: "Expert guidance for autonomous vessels, electric harbor-craft, and next-generation maritime technologies transforming global shipping.",
      highlight: "Bespoke financing for electric harbour-craft",
      expertise: ["Autonomous Vessels", "Electric Ships", "Maritime Finance", "Port Technology"],
    },
    {
      icon: Fuel,
      title: "Low Carbon & Alternative Fuels",
      description: "Specialized legal advisory for Sustainable Aviation Fuel (SAF), green hydrogen, biofuels, and breakthrough energy technologies.",
      expertise: ["Sustainable Aviation Fuel", "Green Hydrogen", "Biofuel Projects", "Carbon Credits"],
    },
    {
      icon: Building,
      title: "Complex Transaction Structuring",
      description: "Innovative financing structures and market entry strategies for transformational deals that consistently win 'innovative deal of the year' recognition.",
      highlight: "Leading first-of-its-kind large ticket deals in excess of USD 2.8 billion",
      expertise: ["Cross-Border Transactions", "Structured Finance", "Market Entry", "Risk Management"],
    },
    {
      icon: Rocket,
      title: "Space Exploration & Commercialization",
      description: "Cutting-edge legal pathways for satellite deployment, space mining, orbital logistics, and the emerging commercial space economy.",
      expertise: ["Satellite Law", "Space Mining Rights", "Orbital Logistics", "Commercial Space"],
    },
  ];

  return (
    <section id="practice-areas" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-24">
          <p className="text-muted-foreground font-light text-sm uppercase tracking-wide mb-8">
            Specialized Expertise
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
            Leading-Edge Practice Areas
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            We provide bespoke legal solutions across the most innovative sectors of transportation 
            and space technology, where no two solutions are alike and every deal sets new precedents.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground mb-2">$2.8B+</div>
            <div className="text-muted-foreground font-light">in Transformational Deals</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground mb-2">Global</div>
            <div className="text-muted-foreground font-light">Market Leadership</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground mb-2">First</div>
            <div className="text-muted-foreground font-light">of its Kind Deals</div>
          </div>
        </div>

        {/* Practice Areas Grid */}
        <div className="space-y-20">
          {practiceAreas.map((area, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Content */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded flex items-center justify-center">
                    <area.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {area.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed font-light">
                  {area.description}
                </p>

                {area.highlight && (
                  <div className="bg-secondary p-6 rounded">
                    <p className="text-foreground font-medium text-sm uppercase tracking-wide mb-2">
                      Notable Achievement
                    </p>
                    <p className="text-foreground">
                      {area.highlight}
                    </p>
                  </div>
                )}

                <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-smooth">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Expertise Areas */}
              <div className="space-y-8">
                <h4 className="text-lg font-medium text-foreground">Key Expertise Areas</h4>
                <div className="space-y-3">
                  {area.expertise.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="text-muted-foreground font-light py-2 border-b border-border"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-32">
          <hr className="minimal-divider max-w-xs mx-auto mb-16" />
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Ready to Pioneer Your Industry's Future?
          </h3>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Partner with the legal team that understands your vision and has the expertise 
            to turn innovation into reality while navigating complex regulatory landscapes.
          </p>
          <Button variant="default" size="lg" className="text-lg px-12 py-4">
            Schedule Your Strategic Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;