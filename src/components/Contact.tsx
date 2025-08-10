import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    },
    {
      icon: Phone,
      title: "Direct Line",
      details: ["+65 6223 1910", "Available 9 AM - 6 PM SGT"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hlteo@bethelchambers.com", "Response within 24 hours"],
    },
    {
      icon: Globe,
      title: "Global Reach",
      details: ["Cross-border expertise", "Dual English & Singapore Law"],
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
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-24">
          <p className="text-muted-foreground font-light text-sm uppercase tracking-wide mb-8">
            Get Started Today
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
            Schedule Your Strategic Consultation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Ready to transform your legal strategy and pioneer the future of your industry? 
            Let's discuss how our expertise can accelerate your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Our Team</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-light">
                As a globally recognized legal strategist specializing in transportation and space innovation, 
                Hui Ling Teo brings unparalleled expertise to your most complex challenges. Our bespoke 
                approach ensures every solution is tailored to your unique business needs.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-foreground mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground font-light">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Consultation Services */}
            <div className="bg-secondary rounded p-8">
              <h4 className="text-lg font-medium text-foreground mb-6 flex items-center">
                <MessageCircle className="h-5 w-5 text-foreground mr-3" />
                Consultation Services
              </h4>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="text-muted-foreground font-light py-2 border-b border-border">
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-12">
            {/* Primary CTA */}
            <Card className="border-border shadow-minimal">
              <CardContent className="p-12 text-center">
                <Calendar className="h-12 w-12 text-foreground mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Schedule Your Strategic Consultation
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed font-light">
                  Book a personalized consultation to discuss your specific needs and discover 
                  how our innovative legal strategies can accelerate your business objectives.
                </p>
                <div className="space-y-6">
                  <Button variant="default" size="lg" className="w-full text-lg" asChild>
                    <a 
                      href="https://outlook.office.com/bookwithme/user/c79273fd7b174b88a10e537f3ae6e251@huilinglawoffice.com/meetingtype/gilpmYHK-EawFiSPKhEVhQ2?anonymous&ep=mlink&ismsaljsauthenabled=true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Consultation Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <div className="flex items-center justify-center text-muted-foreground text-sm font-light">
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
            <div className="bg-secondary rounded p-8 text-center">
              <h4 className="text-lg font-medium text-foreground mb-6">
                Why Choose Beyond Horizons?
              </h4>
              <div className="space-y-3 text-muted-foreground font-light">
                <p>Chambers & Partners Band 3 Global Ranking</p>
                <p>$2.8B+ in Transformational Deals</p>
                <p>Legal 500 Next Generation Partner</p>
                <p>Dual English & Singapore Law Expertise</p>
              </div>
            </div>

            {/* Global Presence */}
            <div className="text-center p-8 border border-border rounded">
              <Globe className="h-8 w-8 text-foreground mx-auto mb-4" />
              <h4 className="font-medium text-foreground mb-2">Global Partners</h4>
              <p className="text-muted-foreground text-sm font-light">
                Working with trusted global partners for over a decade on world-leading matters 
                across Asia-Pacific, Europe, and the Americas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;