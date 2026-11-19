import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Calendar, ArrowRight, Globe, MessageCircle } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import { useLanguage } from "@/i18n/LanguageContext";
import contactBanner from "@/assets/contact-banner.jpg";
import contactVideo from "@/assets/contact-neutral-bg.mp4.asset.json";
import { ADDRESS_PARTS } from "@/config/business";
import Legal500Text from "@/components/Legal500Text";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    { icon: MapPin, title: t("contact.singaporeOffice"), details: [ADDRESS_PARTS.streetAddress, `${ADDRESS_PARTS.addressLocality} ${ADDRESS_PARTS.postalCode}`] },
    { icon: Mail, title: t("contact.email"), details: ["HL@beyondhorizons.sg"] },
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
                            <a href={`mailto:${detail}?subject=Enquiry%20via%20beyondhorizons.sg%2F`} className="hover:text-accent transition-smooth">{detail}</a>
                          ) : info.title === t("contact.whatsapp") && di === 0 ? (
                            <a href="https://wa.me/6597265330?text=Enquiry%20via%20beyondhorizons.sg%2F" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-smooth">{detail}</a>
                          ) : detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="text-sm font-sans font-bold text-foreground mb-1 uppercase tracking-wider">Follow Beyond Horizons</h4>
                <ul className="space-y-1.5">
                  <li><a href="https://www.linkedin.com/in/huilingt" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-smooth">LinkedIn · Hui Ling Teo</a></li>
                  <li><a href="https://www.linkedin.com/company/beyondhorizonslegal" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-smooth">LinkedIn · Beyond Horizons</a></li>
                  <li><a href="https://www.instagram.com/beyondhorizonslegal/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-smooth">Instagram · @beyondhorizonslegal</a></li>
                  <li><a href="https://x.com/BYDHRZSGLAWYRUP" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-smooth">X · @BYDHRZSGLAWYRUP</a></li>
                  <li><a href="https://www.youtube.com/@BeyondHorizonsHuiLing" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-smooth">YouTube · Beyond Horizons</a></li>
                  <li><a href="https://www.insights.beyondhorizons.sg/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-smooth">Insights · Beyond Horizons on Substack</a></li>
                  {/* FACEBOOK: OMIT-UNTIL-CONFIRMED. Candidate Page URL (Social Content: the URL used for the firm; provisional until HL confirms): https://www.facebook.com/people/Beyond-Horizons-Legal-Official/61569657579677/ . Un-hide as a link with text "Facebook · Beyond Horizons Legal - Official" only after HL confirms it in her own words. Do not add any other Facebook URL. */}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-sans font-bold text-foreground mb-1 uppercase tracking-wider">Latest from Beyond Horizons</h4>
                <ul className="space-y-1.5">
                  <li><a href="https://www.linkedin.com/feed/update/urn:li:activity:7520725502081335296/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-smooth">LinkedIn, Hui Ling Teo: Beyond Precedent, Episode 1</a></li>
                  <li><a href="https://www.linkedin.com/feed/update/urn:li:activity:7521036874321195008/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-smooth">LinkedIn, Beyond Horizons: When AI writes the first draft</a></li>
                  <li><a href="https://www.instagram.com/beyondhorizonslegal/reel/DeagT-pMrkh/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-smooth">Instagram: the Beyond Precedent trailer</a></li>
                  <li><a href="https://x.com/BYDHRZSGLAWYRUP/status/2115256083858292816" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-smooth">X: JOLCOs and where an airline default lands</a></li>
                  <li><a href="https://www.youtube.com/watch?v=Zwwc-e5A6cY" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-smooth">YouTube: who looks after your pet when you are gone?</a></li>
                  <li><a href="https://www.insights.beyondhorizons.sg/p/asset-finance-and-alternatives-in-b8d" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-smooth">Insights: Asset Finance & Alternatives in APAC &amp; Beyond</a></li>
                  {/* FACEBOOK LATEST: none. No Facebook post is on record; add one here only when its exact URL is confirmed. Do not guess a URL. */}
                  {/* LATEST-LIST: hand-curated, one item per channel, refreshed at each paste (last refreshed 18 Nov 2026). Replace the LinkedIn Beyond Horizons item with the Pack A Page post only after that post is live. No embeds or third-party scripts. */}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="border-accent/20 bg-card">
                <CardContent className="p-10 text-center">
                  <Calendar className="h-10 w-10 text-accent mx-auto mb-6" />
                  <h3 className="text-xl font-serif font-bold mb-4 text-foreground">{t("contact.bookTitle")}</h3>
                  <p className="text-sm text-muted-foreground mb-8 leading-relaxed text-justify">{t("contact.bookDesc")}</p>
                  <Button variant="default" size="lg" className="w-full animate-blink-glow" asChild>
                    <a href="https://wa.me/6597265330?text=Enquiry%20via%20beyondhorizons.sg%2F" target="_blank" rel="noopener noreferrer">
                      {t("contact.bookButton")} <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <div className="p-6 border border-border/30 rounded text-center">
                <h4 className="text-sm font-sans uppercase tracking-wider text-accent mb-4">{t("contact.whyChoose")}</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>{t("contact.trust1")}</p>
                  <p>{t("contact.trust2")}</p>
                  <p><Legal500Text text={t("contact.trust3")} /></p>
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
