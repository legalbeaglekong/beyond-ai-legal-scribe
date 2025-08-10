import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  ArrowRight, 
  Globe,
  Clock,
  MessageCircle 
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Singapore Office",
      details: ["16 Collyer Quay, #10-00", "Income at Raffles", "Singapore 049318"],
      color: "text-accent",
    },
    {
      icon: Phone,
      title: "Direct Line",
      details: ["+65 6223 1910", "Available 9 AM - 6 PM SGT"],
      color: "text-primary",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hlteo@bethelchambers.com", "Response within 24 hours"],
      color: "text-gold",
    },
    {
      icon: Globe,
      title: "Global Reach",
      details: ["Cross-border expertise", "Dual English & Singapore Law"],
      color: "text-accent",
    },
  ];

  const services = [
    "Strategic Legal Consultation",
    "Transaction Structuring",
    "Regulatory Compliance",
    "ESG & Sustainability Advisory",
    "Cross-border Deal Support",
    "Innovation Legal Framework",
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            Get Started Today
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif-heading font-bold text-foreground mb-6">
            Schedule Your <span className="text-gradient accent-dot">Strategic Consultation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-sans-light leading-relaxed">
            Ready to transform your legal strategy and pioneer the future of your industry? 
            Let's discuss how our expertise can accelerate your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Our Team</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                As a globally recognized legal strategist specializing in transportation and space innovation, 
                Hui Ling Teo brings unparalleled expertise to your most complex challenges. Our bespoke 
                approach ensures every solution is tailored to your unique business needs.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="gradient-card border-0 shadow-elegant hover:shadow-hover transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <info.icon className={`h-6 w-6 ${info.color}`} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {info.title}
                        </h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Consultation Services */}
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <MessageCircle className="h-5 w-5 text-accent mr-2" />
                Consultation Services
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {services.map((service, index) => (
                  <Badge key={index} variant="secondary" className="justify-start p-2 text-sm">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            {/* Primary CTA */}
            <Card className="gradient-hero border-0 shadow-glow">
              <CardContent className="p-8 text-center text-primary-foreground">
                <Calendar className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  Schedule Your Strategic Consultation
                </h3>
                <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                  Book a personalized consultation to discuss your specific needs and discover 
                  how our innovative legal strategies can accelerate your business objectives.
                </p>
                <div className="space-y-4">
                  <Button variant="premium" size="lg" className="w-full text-lg">
                    Book Consultation Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <div className="flex items-center justify-center text-primary-foreground/70 text-sm">
                    <Clock className="h-4 w-4 mr-2" />
                    Typically responds within 24 hours
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Secondary Options */}
            <div className="space-y-4">
              <Button variant="outline" size="lg" className="w-full">
                Request Information Package
              </Button>
              <Button variant="ghost" size="lg" className="w-full">
                Download Our Insights
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="bg-accent/5 rounded-2xl p-6 text-center border border-accent/10">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Why Choose Beyond Horizons?
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <p>✓ Chambers & Partners Band 3 Global Ranking</p>
                <p>✓ $2.8B+ in Transformational Deals</p>
                <p>✓ Legal 500 Next Generation Partner</p>
                <p>✓ Dual English & Singapore Law Expertise</p>
              </div>
            </div>

            {/* Global Presence */}
            <div className="text-center p-6 gradient-card rounded-2xl shadow-elegant">
              <Globe className="h-8 w-8 text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Global Presence</h4>
              <p className="text-muted-foreground text-sm">
                Serving clients across Asia-Pacific, Europe, and the Americas with 
                expertise in cross-border transactions and international compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;