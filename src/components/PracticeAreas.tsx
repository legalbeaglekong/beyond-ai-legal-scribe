import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import abstractGeometric from "@/assets/abstract-geometric.jpg";
import legalWorkspace from "@/assets/legal-workspace.jpg";

const PracticeAreas = () => {
  const practiceAreas = [
    {
      icon: Lightbulb,
      title: "Strategic Legal Consultation",
      description: "Comprehensive strategic advisory services for complex business challenges, helping organizations navigate critical decision-making with expert legal insight and forward-thinking solutions.",
      highlight: "Guided $500M+ strategic transactions across multiple jurisdictions",
      expertise: ["Business Strategy Legal Framework", "Risk Assessment & Mitigation", "Strategic Decision Support", "Legal Innovation Planning"],
    },
    {
      icon: Building,
      title: "Transaction Structuring",
      description: "Expert structuring of complex transactions including M&A, joint ventures, and strategic partnerships with innovative legal frameworks tailored to modern business needs.",
      highlight: "Structured first-of-its-kind cross-border technology acquisition",
      expertise: ["M&A Transaction Design", "Joint Venture Structuring", "Strategic Partnerships", "Cross-border Deal Architecture"],
    },
    {
      icon: Globe,
      title: "Regulatory Compliance",
      description: "Comprehensive compliance solutions across multiple jurisdictions, ensuring businesses meet evolving regulatory requirements while maintaining operational efficiency and competitive advantage.",
      highlight: "Led regulatory compliance for major fintech expansion across 12 jurisdictions",
      expertise: ["Multi-jurisdictional Compliance", "Regulatory Risk Management", "Policy Development", "Compliance Framework Design"],
    },
    {
      icon: Fuel,
      title: "ESG & Sustainability Advisory",
      description: "Forward-thinking ESG and sustainability legal strategies helping organizations integrate environmental, social, and governance principles into their business operations and strategic planning.",
      highlight: "Pioneered ESG framework for billion-dollar infrastructure project",
      expertise: ["ESG Strategy Development", "Sustainability Legal Framework", "Environmental Compliance", "Social Impact Assessment"],
    },
    {
      icon: DollarSign,
      title: "Cross-border Deal Support",
      description: "Specialized support for international transactions and cross-border business operations, navigating complex regulatory landscapes and cultural considerations with expert precision.",
      highlight: "Successfully executed $2.8B+ in cross-border transactions",
      expertise: ["International Transaction Support", "Cross-border Regulatory Navigation", "Multi-jurisdictional Coordination", "Global Deal Execution"],
    },
    {
      icon: Rocket,
      title: "Innovation Legal Framework",
      description: "Cutting-edge legal frameworks for emerging technologies and innovative business models, helping pioneers navigate uncharted legal territories with confidence and strategic advantage.",
      highlight: "Developed legal framework for first fintech platform in APAC",
      expertise: ["Technology Legal Framework", "Innovation Strategy", "Emerging Technology Compliance", "Digital Transformation Legal Support"],
    },
  ];

  return (
    <section id="practice-areas" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-24">
          <p className="text-muted-foreground font-light text-sm uppercase tracking-wide mb-8">
            Specialized Expertise
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
            Strategic Legal Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            We deliver comprehensive legal solutions across strategic business areas, helping visionary organizations 
            navigate complex challenges and achieve transformational growth through innovative legal frameworks.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground mb-2">$2.8B+</div>
            <div className="text-muted-foreground font-light">in Transformational Deals</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground mb-2">Global</div>
            <div className="text-muted-foreground font-light">Market Leadership</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground mb-2">First</div>
            <div className="text-muted-foreground font-light">of its Kind Deals</div>
          </div>
        </div>

        {/* Visual Break with Abstract Image */}
        <div className="relative my-24">
          <img
            src={abstractGeometric}
            alt="Professional Abstract Design"
            className="w-full h-64 object-cover rounded shadow-minimal opacity-80"
          />
        </div>

        {/* Practice Areas Grid */}
        <div className="space-y-20">
          {practiceAreas.map((area, index) => (
            <div key={index} className="space-y-16">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Content */}
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary rounded flex items-center justify-center">
                      <area.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {area.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed font-light">
                    {area.description}
                  </p>

                  {area.highlight && (
                    <div className="bg-secondary p-6 rounded">
                      <p className="text-foreground font-medium text-sm uppercase tracking-wide mb-2">
                        Notable Achievement
                      </p>
                      <p className="text-foreground">
                        {area.highlight}
                      </p>
                    </div>
                  )}

                  <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-smooth">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Expertise Areas */}
                <div className="space-y-8">
                  <h4 className="text-lg font-medium text-foreground">Key Expertise Areas</h4>
                  <div className="space-y-3">
                    {area.expertise.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className="text-muted-foreground font-light py-2 border-b border-border"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Add workspace image for every 3rd practice area */}
              {index % 3 === 2 && (
                <div className="relative mt-12">
                  <img
                    src={legalWorkspace}
                    alt="Professional Legal Workspace"
                    className="w-full h-48 object-cover rounded shadow-minimal"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-32">
          <hr className="minimal-divider max-w-xs mx-auto mb-16" />
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Ready to Pioneer Your Industry's Future?
          </h3>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Partner with the legal team that understands your vision and has the expertise 
            to turn innovation into reality while navigating complex regulatory landscapes.
          </p>
          <Button variant="default" size="lg" className="text-lg px-12 py-4" asChild>
            <a 
              href="https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Your Strategic Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;