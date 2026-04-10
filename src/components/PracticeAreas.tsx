import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Fuel, Building, Rocket, ArrowRight, DollarSign, Globe, Lightbulb } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import { STOCK_VIDEOS } from "@/lib/stock-videos";

const PracticeAreas = () => {
  const practiceAreas = [
    { icon: Lightbulb, title: "Strategic Legal Consultation", description: "Comprehensive strategic advisory services for complex business challenges.", highlight: "Guided $500M+ strategic transactions across multiple jurisdictions", expertise: ["Business Strategy Legal Framework", "Risk Assessment & Mitigation", "Strategic Decision Support", "Legal Innovation Planning"] },
    { icon: Building, title: "Transaction Structuring", description: "Expert structuring of complex transactions including M&A, joint ventures, and strategic partnerships.", highlight: "Structured first-of-its-kind cross-border technology acquisition", expertise: ["M&A Transaction Design", "Joint Venture Structuring", "Strategic Partnerships", "Cross-border Deal Architecture"] },
    { icon: Globe, title: "Regulatory Compliance", description: "Comprehensive compliance solutions across multiple jurisdictions.", highlight: "Led regulatory compliance for major fintech expansion across 12 jurisdictions", expertise: ["Multi-jurisdictional Compliance", "Regulatory Risk Management", "Policy Development", "Compliance Framework Design"] },
    { icon: Fuel, title: "ESG & Sustainability Advisory", description: "Forward-thinking ESG and sustainability legal strategies.", highlight: "Pioneered ESG framework for billion-dollar infrastructure project", expertise: ["ESG Strategy Development", "Sustainability Legal Framework", "Environmental Compliance", "Social Impact Assessment"] },
    { icon: DollarSign, title: "Cross-border Deal Support", description: "Specialized support for international transactions and cross-border operations.", highlight: "Successfully executed $8B+ in cross-border transactions in 2024 & 2025", expertise: ["International Transaction Support", "Cross-border Regulatory Navigation", "Multi-jurisdictional Coordination", "Global Deal Execution"] },
    { icon: Rocket, title: "Innovation Legal Framework", description: "Cutting-edge legal frameworks for emerging technologies and innovative business models.", highlight: "Developed legal framework for first fintech platform in APAC", expertise: ["Technology Legal Framework", "Innovation Strategy", "Emerging Technology Compliance", "Digital Transformation Legal Support"] },
  ];

  return (
    <section id="practice-areas" className="relative">
      {/* Video header */}
      <VideoBackground src={STOCK_VIDEOS.marble} className="h-[35vh]">
        <div className="h-[35vh] flex items-center justify-center">
          <div className="text-center">
            <div className="teal-line mx-auto mb-6" />
            <p className="text-sm uppercase tracking-[0.3em] text-foreground/60 mb-4 font-sans">Specialized Expertise</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Strategic Legal Excellence
            </h2>
          </div>
        </div>
      </VideoBackground>

      <div className="section-padding bg-background">
        <div className="max-w-6xl mx-auto container-padding">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-16 max-w-2xl mx-auto">
            {[
              { value: "$8B+", label: "Transformational Deals" },
              { value: "Global", label: "Market Leadership" },
              { value: "First", label: "of its Kind Deals" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-serif font-bold text-accent mb-1">{s.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Practice Areas */}
          <div className="space-y-12">
            {practiceAreas.map((area, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center">
                      <area.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-foreground">{area.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                  {area.highlight && (
                    <div className="border-l-2 border-accent/30 pl-4">
                      <p className="text-xs text-accent uppercase tracking-wider mb-1">Notable Achievement</p>
                      <p className="text-sm text-foreground">{area.highlight}</p>
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-accent mb-4 font-sans">Key Expertise Areas</h4>
                  <div className="space-y-2">
                    {area.expertise.map((skill, i) => (
                      <div key={i} className="text-sm text-muted-foreground py-2 border-b border-border/30 flex items-center">
                        <span className="w-1 h-1 rounded-full bg-accent/40 mr-3" />{skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <div className="teal-line mx-auto mb-8" />
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Ready to Pioneer Your Industry's Future?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Partner with the legal team that understands your vision.
            </p>
            <Button variant="default" size="lg" asChild>
              <a href="https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled" target="_blank" rel="noopener noreferrer">
                Schedule Your Strategic Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
