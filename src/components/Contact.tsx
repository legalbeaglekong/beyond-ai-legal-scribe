import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Calendar, ArrowRight, Globe, Clock, MessageCircle } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import { STOCK_VIDEOS } from "@/lib/stock-videos";

const Contact = () => {
  const contactInfo = [
    { icon: MapPin, title: "Singapore Office", details: ["39B Neil Rd (Level 3)", "Singapore 088823"] },
    { icon: Mail, title: "Email", details: ["hl@huilinglawoffice.com", "Response within 24 hours"] },
    { icon: MessageCircle, title: "WhatsApp", details: ["Chat with us on WhatsApp", "Quick consultation inquiries"] },
    { icon: Globe, title: "Global Partners", details: ["Cross-border expertise", "Dual English & Singapore Law"] },
  ];

  return (
    <section id="contact" className="relative">
      {/* Video header */}
      <VideoBackground src={STOCK_VIDEOS.sunrise} className="h-[35vh]">
        <div className="h-[35vh] flex items-center justify-center">
          <div className="text-center">
            <div className="teal-line mx-auto mb-6" />
            <p className="text-sm uppercase tracking-[0.3em] text-foreground/60 mb-4 font-sans">Get Started</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Schedule Your Consultation
            </h2>
          </div>
        </div>
      </VideoBackground>

      <div className="section-padding bg-background">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left — Contact Info */}
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Connect With Our Team</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As a globally recognized legal strategist specializing in strategic business advisory, 
                  Hui Ling Teo brings unparalleled expertise to your most complex challenges.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-sans font-bold text-foreground mb-1 uppercase tracking-wider">{info.title}</h4>
                      {info.details.map((detail, di) => (
                        <p key={di} className="text-sm text-muted-foreground">
                          {info.title === "Email" && di === 0 ? (
                            <a href={`mailto:${detail}`} className="hover:text-accent transition-smooth">{detail}</a>
                          ) : info.title === "WhatsApp" && di === 0 ? (
                            <a href="https://wa.me/6597265330" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-smooth">{detail}</a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — CTA Card */}
            <div className="space-y-8">
              <Card className="border-accent/20 bg-card">
                <CardContent className="p-10 text-center">
                  <Calendar className="h-10 w-10 text-accent mx-auto mb-6" />
                  <h3 className="text-xl font-serif font-bold mb-4 text-foreground">
                    Book a Strategic Consultation
                  </h3>
                  <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                    Book a personalized consultation to discuss your specific needs and discover 
                    how our innovative legal strategies can accelerate your business.
                  </p>
                  <Button variant="default" size="lg" className="w-full" asChild>
                    <a href="https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled" target="_blank" rel="noopener noreferrer">
                      Book Consultation Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <div className="flex items-center justify-center text-muted-foreground text-xs mt-4">
                    <Clock className="h-3.5 w-3.5 mr-2" />
                    Typically responds within 24 hours
                  </div>
                </CardContent>
              </Card>

              {/* Trust indicators */}
              <div className="p-6 border border-border/30 rounded text-center">
                <h4 className="text-sm font-sans uppercase tracking-wider text-accent mb-4">Why Choose Beyond Horizons?</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Chambers & Partners Band 3 Asia Pacific Ranking</p>
                  <p>$8B+ in Transformational Deals in 2024 & 2025</p>
                  <p>Legal 500 Next Generation Partner</p>
                  <p>Dual English & Singapore Law Expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
