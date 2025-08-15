import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Users, Building, Scale } from "lucide-react";

const GlobalPartners = () => {
  const stats = [
    { icon: Building, label: "Partner Firms", value: "10+" },
    { icon: Globe, label: "Global Regions", value: "4" },
    { icon: Users, label: "Years of Partnership", value: "10+" },
    { icon: Scale, label: "Cross-Border Deals", value: "$2.8B+" }
  ];

  const regions = [
    {
      name: "Europe",
      description: "Magic Circle partnerships in London, Frankfurt, and key European financial centers",
      firms: ["London Magic Circle Firm", "Frankfurt Proven Practice"]
    },
    {
      name: "North America", 
      description: "White Shoe firm collaborations across major US and Canadian markets",
      firms: ["New York White Shoe Firm", "Los Angeles Premier Practice", "Toronto Top Firm"]
    },
    {
      name: "Asia-Pacific",
      description: "Leading partnerships across Singapore, Hong Kong, Tokyo, and Sydney",
      firms: ["Singapore Leading Firm", "Hong Kong Top Tier", "Tokyo Premier Firm", "Sydney Proven Practice"]
    },
    {
      name: "Middle East",
      description: "Strategic partnerships in key Middle Eastern financial hubs",
      firms: ["Dubai Leading Firm"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Global Partners Network
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strong partnerships with Magic Circle and White Shoe firms across Europe, North America, and Asia-Pacific
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <Card key={stat.label} className="text-center bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-0 shadow-elegant">
                <CardContent className="p-6">
                  <IconComponent className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>


        {/* Regions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {regions.map((region) => (
            <Card key={region.name} className="group hover:shadow-elegant transition-all duration-300 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-smooth">
                  {region.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {region.description}
                </p>
                <div className="space-y-2">
                  {region.firms.slice(0, 2).map((firm, index) => (
                    <div key={index} className="text-xs text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                      {firm}
                    </div>
                  ))}
                  {region.firms.length > 2 && (
                    <div className="text-xs text-primary font-medium">
                      +{region.firms.length - 2} more
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary-glow/10 border-0">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Leverage Our Global Network
              </h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Whether your deal spans multiple jurisdictions or requires specialized local expertise, 
                our trusted global partnerships ensure seamless execution and compliance.
              </p>
              <Button size="lg" className="mr-4">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GlobalPartners;