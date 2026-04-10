import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, DollarSign, Globe, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WhyChooseUs = () => {
  const navigate = useNavigate();
  
  const reasons = [
    { id: "digital-first", icon: Bot, title: "Digital-First Legal", description: "Founded in 2024, built from the ground up with modern technology integration." },
    { id: "cost-efficiency", icon: DollarSign, title: "Cost Efficiency", description: "Transparent pricing and lean operations make proven legal services accessible." },
    { id: "global-expertise", icon: Globe, title: "Global Collaboration", description: "Strong partnerships with Magic Circle and White Shoe firms worldwide." },
    { id: "confidentiality", icon: Shield, title: "Confidentiality", description: "Rigorous data privacy protocols ensure client information protection." },
  ];

  return (
    <section className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-12">
          <div className="teal-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Why Choose Beyond Horizons
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover what sets us apart in the evolving landscape of legal services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reasons.map((reason) => (
            <Card
              key={reason.id}
              className="group cursor-pointer border-border/30 bg-card card-lift hover:border-accent/30"
              onClick={() => navigate(`/why-choose-us/${reason.id}`)}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded bg-accent/10 flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-sm font-serif font-bold mb-3 text-foreground group-hover:text-accent transition-smooth">
                  {reason.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{reason.description}</p>
                <span className="text-xs text-accent inline-flex items-center">
                  Learn More <ArrowRight className="w-3 h-3 ml-1" />
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <Button onClick={() => navigate("/expertise")} variant="ghost" size="sm" className="text-accent hover:bg-accent/10 text-xs uppercase tracking-wider">
            View Our Specialized Legal Expertise <ArrowRight className="w-3 h-3 ml-2" />
          </Button>
          <div>
            <Button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Contact Us Today <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
