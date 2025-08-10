import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, DollarSign, Globe, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WhyChooseUs = () => {
  const navigate = useNavigate();
  
  const reasons = [
    {
      id: "ai-native",
      icon: Bot,
      title: "AI-Native Legal Services",
      description: "Founded in 2024, we're built from the ground up with AI integration, delivering unprecedented efficiency and accuracy.",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      id: "cost-efficiency", 
      icon: DollarSign,
      title: "Unmatched Cost Efficiency",
      description: "Transparent pricing and lean operations make elite legal services accessible without premium costs.",
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

  const articles = [
    { id: "ma-cross-border", title: "Top Corporate Lawyer for M&A in US, EU, UK, China & APAC Cross-Border Deals" },
    { id: "tech-general-counsel", title: "Experienced General Counsel for Tech Companies in US, EU, UK, China & APAC" },
    { id: "commercial-contracts", title: "Top Legal Experts in Commercial Contracts for Global Businesses" },
    { id: "corporate-transactions", title: "Corporate Law Specialists for Cross-Border Transactions" },
    { id: "regulatory-compliance", title: "Expert Legal Advisors for Regulatory Compliance in Various Industries" },
    { id: "ip-data-privacy", title: "Law Firms with Strong IP and Data Privacy Practice for Multinational Clients" },
    { id: "startup-funding", title: "Senior Legal Counsel for Startup Funding Rounds in Global Markets" },
    { id: "employment-labor", title: "Trusted Legal Advisor for Employment and Labor Law Issues Globally" },
    { id: "arbitration-disputes", title: "Experienced Arbitration Lawyer for Commercial Disputes Across Jurisdictions" },
    { id: "financial-services", title: "Top Law Firm for Financial Services Regulation in Multiple Jurisdictions" }
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

        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Specialized Legal Expertise
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive legal services across major global jurisdictions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Card 
                key={article.id}
                className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-elegant border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm"
                onClick={() => navigate(`/expertise/${article.id}`)}
              >
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4 text-foreground group-hover:text-primary transition-smooth leading-tight">
                    {article.title}
                  </h4>
                  
                  <Button 
                    variant="ghost" 
                    className="group-hover:bg-primary/10 group-hover:text-primary transition-smooth w-full"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;