import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Ship,
      title: "Maritime Innovations & Novel Ship Designs",
      description: "Expert guidance for autonomous vessels, electric harbor-craft, and next-generation maritime technologies transforming global shipping.",
      highlight: "Bespoke financing for electric harbour-craft",
      expertise: ["Autonomous Vessels", "Electric Ships", "Maritime Finance", "Port Technology"],
      color: "text-teal-600",
      bgColor: "bg-teal-50",
    },
    {
      icon: Fuel,
      title: "Low Carbon & Alternative Fuels",
      description: "Specialized legal advisory for Sustainable Aviation Fuel (SAF), green hydrogen, biofuels, and breakthrough energy technologies.",
      expertise: ["Sustainable Aviation Fuel", "Green Hydrogen", "Biofuel Projects", "Carbon Credits"],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Building,
      title: "Complex Transaction Structuring",
      description: "Innovative financing structures and market entry strategies for transformational deals that consistently win 'innovative deal of the year' recognition.",
      highlight: "Leading first-of-its-kind large ticket deals in excess of USD 2.8 billion",
      expertise: ["Cross-Border Transactions", "Structured Finance", "Market Entry", "Risk Management"],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Rocket,
      title: "Space Exploration & Commercialization",
      description: "Cutting-edge legal pathways for satellite deployment, space mining, orbital logistics, and the emerging commercial space economy.",
      expertise: ["Satellite Law", "Space Mining Rights", "Orbital Logistics", "Commercial Space"],
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
  ];

  return (
    <section id="practice-areas" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            Specialized Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Leading-Edge <span className="text-gradient">Practice Areas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We provide bespoke legal solutions across the most innovative sectors of transportation 
            and space technology, where no two solutions are alike and every deal sets new precedents.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 gradient-card rounded-2xl shadow-elegant">
            <div className="flex items-center justify-center mb-4">
              <DollarSign className="h-8 w-8 text-gold" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">$2.8B+</div>
            <div className="text-muted-foreground">in Transformational Deals</div>
          </div>
          <div className="text-center p-6 gradient-card rounded-2xl shadow-elegant">
            <div className="flex items-center justify-center mb-4">
              <Globe className="h-8 w-8 text-accent" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">Global</div>
            <div className="text-muted-foreground">Market Leadership</div>
          </div>
          <div className="text-center p-6 gradient-card rounded-2xl shadow-elegant">
            <div className="flex items-center justify-center mb-4">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">First</div>
            <div className="text-muted-foreground">of its Kind Deals</div>
          </div>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid gap-8">
          {practiceAreas.map((area, index) => (
            <Card key={index} className="gradient-card border-0 shadow-elegant hover:shadow-hover transition-smooth group">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Content */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 rounded-2xl ${area.bgColor}`}>
                        <area.icon className={`h-8 w-8 ${area.color}`} />
                      </div>
                      <CardTitle className="text-2xl font-bold text-foreground">
                        {area.title}
                      </CardTitle>
                    </div>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {area.description}
                    </p>

                    {area.highlight && (
                      <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
                        <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-1">
                          Notable Achievement
                        </p>
                        <p className="text-foreground font-medium">
                          {area.highlight}
                        </p>
                      </div>
                    )}

                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Expertise Areas */}
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold text-foreground">Key Expertise Areas</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {area.expertise.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="justify-start p-3 hover:bg-accent hover:text-accent-foreground transition-smooth"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="gradient-hero rounded-3xl p-12 shadow-glow">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Pioneer Your Industry's Future?
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Partner with the legal team that understands your vision and has the expertise 
              to turn innovation into reality while navigating complex regulatory landscapes.
            </p>
            <Button variant="premium" size="lg" className="text-lg px-10 py-4">
              Schedule Your Strategic Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;