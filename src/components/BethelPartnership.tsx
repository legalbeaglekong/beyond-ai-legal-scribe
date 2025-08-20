import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Building } from "lucide-react";

const BethelPartnership = () => {
  return (
    <section id="bethel-partnership" aria-labelledby="bethel-partnership-title" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="bethel-partnership-title" className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            Comprehensive Legal Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            Beyond Horizons is a specialized service delivered by Bethel Chambers LLC, focusing on corporate and business matters. 
            Together, we provide comprehensive coverage for both the operational aspects of a business and the families and people behind them.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8">
            <div className="flex items-center mb-4">
              <Building className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Beyond Horizons</h3>
              <span className="text-xs text-muted-foreground ml-2">(by Bethel Chambers LLC)</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Specialized corporate and commercial legal services for enterprises and institutions.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Corporate & Commercial Law</li>
              <li>• Cross-Border Transactions</li>
              <li>• Regulatory Compliance</li>
              <li>• International Business Law</li>
            </ul>
          </Card>

          <Card className="p-8">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Bethel Chambers & Beyond Horizons</h3>
            </div>
            <h4 className="text-lg font-medium text-muted-foreground mb-3">Private Client and Family Office Services</h4>
            <p className="text-muted-foreground mb-4">
              Comprehensive services spanning both corporate and personal needs for high-net-worth individuals and families.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Private Client Services</li>
              <li>• Generation Transfer</li>
              <li>• Family Office Advisory</li>
              <li>• Wealth Structuring</li>
            </ul>
          </Card>

          <Card className="p-8">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Bethel Chambers LLC</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Traditional legal services for personal and family matters.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Family Law</li>
              <li>• Estate Planning</li>
              <li>• Probate</li>
              <li>• Personal Legal Matters</li>
            </ul>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">Family Business Landscape in APAC</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <p className="text-muted-foreground">
                of businesses in the APAC region are owned by a family group
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50%+</div>
              <p className="text-muted-foreground">
                of the region's largest companies and nearly all conglomerates are family-controlled
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            This unique positioning allows us to serve both the business entity and the family behind it, 
            providing seamless integration between corporate and personal legal needs.
          </p>
          <Button asChild className="inline-flex items-center">
            <a 
              href="https://bethelchambers.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="no-underline"
            >
              Visit Bethel Chambers
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BethelPartnership;