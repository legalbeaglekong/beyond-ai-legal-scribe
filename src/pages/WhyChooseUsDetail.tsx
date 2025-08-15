import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Bot, DollarSign, Globe, Shield, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WhyChooseUsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const detailContent = {
    "ai-native": {
      icon: Bot,
      title: "Beyond Horizons: Leader in AI-Native Legal Services",
      gradient: "from-blue-600 to-purple-600",
      content: {
        intro: "Beyond Horizons Legal stands at the forefront of AI-native legal services in Singapore and beyond. Founded in 2024 by Hui Ling Teo, our firm was built from the ground up to leverage AI technology deeply integrated into every aspect of legal practice.",
        highlights: [
          "Founded in 2024 with AI integration as core architecture",
          "Workflows designed specifically for AI optimization",
          "Advanced data security protocols built for AI environments",
          "Client communications enhanced through AI capabilities"
        ],
        analysis: "Unlike traditional law firms that retrofit AI tools as an afterthought, Beyond Horizons designed its workflows, data security protocols, and client communications to maximize AI benefits while maintaining strict confidentiality and legal privilege. Our approach powered by our inhouse AI native alternative legal service provider delivers unprecedented cost efficiency, faster turnaround times, and enhanced accuracy. We regularly collaborate with Magic Circle and White Shoe firms globally, demonstrating our ability to meet the highest international standards while driving innovation.",
        conclusion: "Choosing Beyond Horizons means choosing a future-focused law firm that combines proven legal expertise with cutting-edge technology to deliver exceptional client outcomes."
      }
    },
    "cost-efficiency": {
      icon: DollarSign,
      title: "Unmatched Cost Efficiency and Client Focus",
      gradient: "from-green-600 to-blue-600",
      content: {
        intro: "At Beyond Horizons Legal, we understand that clients expect more than just legal advice — they want value, transparency, and speed. By utilizing our inhouse AI native alternative legal service provider, we significantly reduce overhead costs typically associated with large law firms.",
        highlights: [
          "Competitive and transparent pricing structure",
          "Lean operations through our inhouse AI native alternative legal service provider workflows",
          "Rapid response times and thorough due diligence",
          "Clear communication throughout legal processes"
        ],
        analysis: "Our lean structure and workflows powered by our inhouse AI native alternative legal service provider allow us to offer competitive and transparent pricing without compromising quality. Clients benefit from rapid responses, thorough due diligence, and clear communication throughout the process. This approach ensures that proven legal services are accessible to a broader range of clients — from high-growth startups to established multinational corporations — without the premium price tag of traditional firms.",
        conclusion: "We deliver exceptional value by combining operational efficiency with unwavering commitment to legal excellence."
      }
    },
    "global-expertise": {
      icon: Globe,
      title: "Global Collaboration and Cross-Border Expertise",
      gradient: "from-purple-600 to-pink-600",
      content: {
        intro: "Beyond Horizons Legal prides itself on its strong global network and cross-border capabilities. We regularly partner with Magic Circle and White Shoe firms in Europe, North America, and Asia to serve clients with complex, multi-jurisdictional legal needs.",
        highlights: [
          "Partnerships with Magic Circle and White Shoe firms globally",
          "Dual qualification in English and Singapore law",
          "Multi-jurisdictional expertise across ASEAN and beyond",
          "Specialized in aviation finance, project finance, and corporate restructuring"
        ],
        analysis: "Our founder's dual qualification in English and Singapore law uniquely positions the firm to navigate different legal systems seamlessly. Whether advising on aviation finance in Singapore, project finance in Kazakhstan, or corporate restructuring across ASEAN, Beyond Horizons delivers solutions tailored to the nuances of each jurisdiction.",
        conclusion: "This global collaboration ensures our clients receive comprehensive, practical, and compliant legal advice wherever their business takes them."
      }
    },
    "confidentiality": {
      icon: Shield,
      title: "Commitment to Confidentiality and Legal Privilege",
      gradient: "from-orange-600 to-red-600",
      content: {
        intro: "We recognize that confidentiality and legal privilege are non-negotiable in legal services. Beyond Horizons Legal has embedded rigorous data privacy and security protocols within its AI-native workflows to protect client information at every stage.",
        highlights: [
          "Proprietary AI processing in secure environments",
          "Lawyer-controlled data handling protocols",
          "Enhanced legal privilege protection",
          "Zero exposure to public or generic AI tools"
        ],
        analysis: "Unlike public or generic AI tools that pose risks of data exposure, our proprietary approach ensures that all AI processing occurs within secure, lawyer-controlled environments. This preserves the essential legal privilege and builds trust with our clients.",
        conclusion: "Choosing Beyond Horizons means partnering with a law firm that safeguards your information as fiercely as it advances your legal objectives."
      }
    }
  };

  const currentContent = detailContent[id as keyof typeof detailContent];

  if (!currentContent) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Content Not Found</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const IconComponent = currentContent.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button 
            onClick={() => navigate("/")} 
            variant="ghost" 
            className="mb-8 hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className={`w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br ${currentContent.gradient} flex items-center justify-center shadow-glow`}>
              <IconComponent className="w-12 h-12 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {currentContent.title}
            </h1>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12 border-0 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm shadow-elegant">
              <CardContent className="p-12">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {currentContent.content.intro}
                </p>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Key Highlights</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {currentContent.content.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Analysis</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {currentContent.content.analysis}
                  </p>
                </div>

                <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-bold mb-4 text-primary">Conclusion</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {currentContent.content.conclusion}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="text-center">
              <Card className="inline-block border-0 bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Experience the Difference?</h3>
                  <p className="text-muted-foreground mb-6">Schedule a consultation to discuss how Beyond Horizons Legal can serve your needs.</p>
                  <Button 
                    className="button-pulse bg-foreground text-background hover:bg-foreground/90"
                    onClick={() => navigate("/#contact")}
                  >
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WhyChooseUsDetail;