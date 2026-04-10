import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Users, Building, Scale } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import { STOCK_VIDEOS } from "@/lib/stock-videos";

const GlobalPartners = () => {
  const stats = [
    { icon: Building, label: "Partner Firms", value: "10+" },
    { icon: Globe, label: "Global Regions", value: "4" },
    { icon: Users, label: "Years of Partnership", value: "10+" },
    { icon: Scale, label: "Cross-Border Deals", value: "$8B+" },
  ];

  const regions = [
    { name: "Europe", description: "Magic Circle partnerships in London, Frankfurt, and key European financial centers" },
    { name: "North America", description: "White Shoe firm collaborations across major US and Canadian markets" },
    { name: "Asia-Pacific", description: "Leading partnerships across Singapore, Hong Kong, Tokyo, and Sydney" },
    { name: "Middle East", description: "Strategic partnerships in key Middle Eastern financial hubs" },
  ];

  return (
    <section className="relative">
      <VideoBackground src={STOCK_VIDEOS.maritime} className="h-[30vh]">
        <div className="h-[30vh] flex items-center justify-center">
          <div className="text-center">
            <div className="teal-line mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Global Partners Network
            </h2>
          </div>
        </div>
      </VideoBackground>

      <div className="section-padding bg-background">
        <div className="max-w-6xl mx-auto container-padding">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 border border-border/30 rounded">
                <stat.icon className="w-6 h-6 mx-auto mb-3 text-accent" />
                <div className="text-2xl font-serif font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Regions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {regions.map((region) => (
              <Card key={region.name} className="border-border/30 bg-card card-lift hover:border-accent/30">
                <CardContent className="p-6">
                  <h3 className="text-base font-serif font-bold text-foreground mb-3">{region.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{region.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="mr-4" asChild>
              <a href="https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled" target="_blank" rel="noopener noreferrer">
                Schedule Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPartners;
