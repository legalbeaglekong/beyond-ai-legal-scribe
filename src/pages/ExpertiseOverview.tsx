import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ExpertiseOverview = () => {
  const navigate = useNavigate();
  
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
    { id: "financial-services", title: "Top Law Firm for Financial Services Regulation in Multiple Jurisdictions" },
    { id: "business-legacies-apac", title: "Building Business Legacies in APAC: Why Legal Structuring Matters" },
    { id: "family-business-governance", title: "Protecting Family Businesses in APAC Through Smart Governance" },
    { id: "cross-border-wealth-planning", title: "Cross-Border Wealth Planning for APAC Entrepreneurs" },
    { id: "singapore-legacy-hub", title: "Why Singapore Is the Hub for Legacy Planning in APAC" },
    { id: "succession-planning-founders", title: "Succession Planning for APAC Founders" },
    { id: "ip-business-legacy", title: "Protecting Intellectual Property as Part of Your Business Legacy" },
    { id: "trusts-foundations-wealth", title: "Using Trusts and Foundations to Build Multigenerational Wealth" },
    { id: "crisis-proofing-legacy", title: "Crisis-Proofing Your Legacy: Risk Management for APAC Businesses" },
    { id: "tech-legacy-planning", title: "Legacy Planning for APAC Tech Entrepreneurs" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary/5 to-primary-glow/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Button 
                variant="ghost" 
                onClick={() => navigate("/")}
                className="mb-8 text-muted-foreground hover:text-primary"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Specialized Legal Expertise
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our comprehensive legal services across major global jurisdictions including US, EU, UK, China & APAC
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {articles.map((article) => (
                <Card 
                  key={article.id}
                  className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-elegant border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm"
                  onClick={() => navigate(`/expertise/${article.id}`)}
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-foreground group-hover:text-primary transition-smooth leading-tight">
                      {article.title}
                    </h3>
                    
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
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ExpertiseOverview;