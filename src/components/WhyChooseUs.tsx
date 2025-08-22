import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, DollarSign, Globe, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import professionalHandshake from "@/assets/professional-handshake.jpg";

const WhyChooseUs = () => {
  const navigate = useNavigate();
  
  const reasons = [
    {
      id: "digital-first",
      icon: Bot,
      title: "Digital-First Legal Services",
      description: "Founded in 2024, we're built from the ground up with modern technology integration, delivering unprecedented efficiency and accuracy.",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      id: "cost-efficiency", 
      icon: DollarSign,
      title: "Unmatched Cost Efficiency",
      description: "Transparent pricing and lean operations make proven legal services accessible without premium costs.",
      gradient: "from-green-600 to-blue-600"
    },
    {
      id: "global-expertise",
      icon: Globe,
      title: "Global Collaboration",
      description: "Strong partnerships with Magic Circle and White Shoe firms across Europe, North America, and Asia.",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: "confidentiality",
      icon: Shield,
      title: "Confidentiality & Legal Privilege",
      description: "Rigorous data privacy protocols ensure client information protection within secure, lawyer-controlled environments.",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Why Choose Beyond Horizons Legal
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover what sets us apart in the evolving landscape of legal services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => {
            const IconComponent = reason.icon;
            return (
              <Card 
                key={reason.id}
                className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-elegant border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm"
                onClick={() => navigate(`/why-choose-us/${reason.id}`)}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${reason.gradient} flex items-center justify-center shadow-glow`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-smooth">
                    {reason.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {reason.description}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="group-hover:bg-primary/10 group-hover:text-primary transition-smooth w-full"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Professional Image Section */}
        <div className="mt-20 mb-16 text-center">
          <img
            src={professionalHandshake}
            alt="Professional Partnership"
            className="w-80 h-80 object-cover rounded-full mx-auto shadow-minimal"
          />
        </div>

        <div className="mt-16 text-center space-y-4">
          <Button 
            onClick={() => navigate("/expertise")}
            variant="ghost"
            size="sm"
            className="group text-muted-foreground"
          >
            View Our Specialized Legal Expertise
            <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-smooth" />
          </Button>
          
          <div>
            <Button 
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              variant="outline"
              size="lg"
              className="group"
            >
              Contact Us Today
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;