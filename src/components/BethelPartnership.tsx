import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Building } from "lucide-react";

const BethelPartnership = () => {
  return (
    <section id="bethel-partnership" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-12">
          <div className="teal-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Comprehensive Legal Solutions
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Beyond Horizons is a specialized service delivered by Bethel Chambers LLC, focusing on corporate and business matters. 
            Together, we provide comprehensive coverage for both the operational aspects of a business and the families behind them.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Building,
              title: "Beyond Horizons",
              subtitle: "(by Bethel Chambers LLC)",
              desc: "Specialized corporate and commercial legal services for enterprises and institutions.",
              items: ["Corporate & Commercial Law", "Cross-Border Transactions", "Regulatory Compliance", "International Business Law"],
            },
            {
              icon: Users,
              title: "Private Client & Family Office",
              subtitle: "",
              desc: "Comprehensive services spanning both corporate and personal needs for high-net-worth individuals.",
              items: ["Private Client Services", "Generation Transfer", "Family Office Advisory", "Wealth Structuring"],
            },
            {
              icon: Users,
              title: "Bethel Chambers LLC",
              subtitle: "",
              desc: "Traditional legal services for personal and family matters.",
              items: ["Family Law", "Estate Planning", "Probate", "Personal Legal Matters"],
            },
          ].map((section, i) => (
            <Card key={i} className="p-6 border-border/30 bg-card card-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center">
                  <section.icon className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h3 className="text-base font-serif font-bold text-foreground">{section.title}</h3>
                  {section.subtitle && <span className="text-xs text-muted-foreground">{section.subtitle}</span>}
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-4">{section.desc}</p>
              <ul className="space-y-2">
                {section.items.map((item, j) => (
                  <li key={j} className="text-xs text-muted-foreground flex items-center">
                    <span className="w-1 h-1 rounded-full bg-accent/40 mr-2" />{item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="border border-border/30 rounded p-8 mb-8">
          <h3 className="text-lg font-serif font-bold text-foreground mb-6 text-center">Family Business Landscape in APAC</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-accent mb-2">85%</div>
              <p className="text-sm text-muted-foreground">of businesses in APAC are family-owned</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-accent mb-2">50%+</div>
              <p className="text-sm text-muted-foreground">of the region's largest companies are family-controlled</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" variant="outline">
            <a href="https://bethelchambers.com/" target="_blank" rel="noopener noreferrer">
              Visit Bethel Chambers <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BethelPartnership;
