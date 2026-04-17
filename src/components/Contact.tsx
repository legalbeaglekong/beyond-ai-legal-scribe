import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Calendar, ArrowRight, Globe, Clock, MessageCircle } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import { useLanguage } from "@/i18n/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import contactBanner from "@/assets/contact-banner.jpg";
import contactVideo from "@/assets/contact-neutral-bg.mp4.asset.json";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    { icon: MapPin, title: t("contact.singaporeOffice"), details: ["39B Neil Rd (Level 3)", "Singapore 088823"] },
    { icon: Mail, title: t("contact.email"), details: ["HL@beyondhorizons.sg", t("contact.emailResponse")] },
    { icon: MessageCircle, title: t("contact.whatsapp"), details: [t("contact.whatsappChat"), t("contact.whatsappDesc")] },
    { icon: Globe, title: t("contact.globalPartnersLabel"), details: [t("contact.globalPartnersDesc1"), t("contact.globalPartnersDesc2")] },
  ];

  return (
    <section id="contact" className="relative">
      <VideoBackground src={contactVideo.url} poster={contactBanner} className="h-[35vh]" overlayClassName="absolute inset-0 z-[1] bg-background/60 backdrop-blur-[1px]">
        <div className="h-[35vh] flex items-center justify-center">
          <div className="text-center drop-shadow-md">
            <div className="teal-line mx-auto mb-6" />
            <p className="text-sm uppercase tracking-[0.3em] text-foreground/80 mb-4 font-sans">{t("contact.sectionLabel")}</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">{t("contact.sectionTitle")}</h2>
          </div>
        </div>
      </VideoBackground>

      <div className="section-padding bg-background">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{t("contact.connectTitle")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("contact.connectDesc")}</p>
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
                          {info.title === t("contact.email") && di === 0 ? (
                            <a href={`mailto:${detail}`} className="hover:text-accent transition-smooth">{detail}</a>
                          ) : info.title === t("contact.whatsapp") && di === 0 ? (
                            <a href="https://wa.me/6597265330" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-smooth">{detail}</a>
                          ) : detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <Card className="border-accent/20 bg-card">
                <CardContent className="p-10 text-center">
                  <Calendar className="h-10 w-10 text-accent mx-auto mb-6" />
                  <h3 className="text-xl font-serif font-bold mb-4 text-foreground">{t("contact.bookTitle")}</h3>
                  <p className="text-sm text-muted-foreground mb-8 leading-relaxed text-justify">{t("contact.bookDesc")}</p>
                  <Button variant="default" size="lg" className="w-full" asChild>
                    <a href="https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled" target="_blank" rel="noopener noreferrer">
                      {t("contact.bookButton")} <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <div className="flex items-center justify-center text-muted-foreground text-xs mt-4">
                    <Clock className="h-3.5 w-3.5 mr-2" />{t("contact.responseTime")}
                  </div>
                </CardContent>
              </Card>

              <div className="p-6 border border-border/30 rounded text-center">
                <h4 className="text-sm font-sans uppercase tracking-wider text-accent mb-4">{t("contact.whyChoose")}</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>{t("contact.trust1")}</p>
                  <p>{t("contact.trust2")}</p>
                  <p>{t("contact.trust3")}</p>
                  <p>{t("contact.trust4")}</p>
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
