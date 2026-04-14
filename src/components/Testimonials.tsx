import { Card, CardContent } from "@/components/ui/card";
import { Quote, ExternalLink, Brain, Lightbulb, Globe, TrendingUp } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import { STOCK_VIDEOS } from "@/lib/stock-videos";
import { useLanguage } from "@/i18n/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();

  const chambersTestimonials = [
    { quote: t("testimonials.quote1"), source: t("testimonials.source1"), location: t("testimonials.location1") },
    { quote: t("testimonials.quote2"), source: t("testimonials.source2"), location: t("testimonials.location2") },
    { quote: t("testimonials.quote3"), source: t("testimonials.source3"), location: t("testimonials.location3") },
  ];

  const recognition = [
    { title: t("testimonials.rec1Title"), description: t("testimonials.rec1Desc"), years: t("testimonials.rec1Years") },
    { title: t("testimonials.rec2Title"), description: t("testimonials.rec2Desc"), years: t("testimonials.rec2Years") },
    { title: t("testimonials.rec3Title"), description: t("testimonials.rec3Desc"), years: t("testimonials.rec3Years") },
  ];

  const attributes = [
    { title: t("testimonials.attr1Title"), desc: t("testimonials.attr1Desc"), icon: Brain },
    { title: t("testimonials.attr2Title"), desc: t("testimonials.attr2Desc"), icon: Lightbulb },
    { title: t("testimonials.attr3Title"), desc: t("testimonials.attr3Desc"), icon: Globe },
    { title: t("testimonials.attr4Title"), desc: t("testimonials.attr4Desc"), icon: TrendingUp },
  ];

  return (
    <section className="relative">
      <VideoBackground src={STOCK_VIDEOS.elegant} className="h-[35vh]">
        <div className="h-[35vh] flex items-center justify-center">
          <div className="text-center">
            <div className="teal-line mx-auto mb-6" />
            <p className="text-sm uppercase tracking-[0.3em] text-foreground/60 mb-4 font-sans">{t("testimonials.sectionLabel")}</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">{t("testimonials.sectionTitle")}</h2>
          </div>
        </div>
      </VideoBackground>

      <div className="section-padding bg-background">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="text-center mb-16">
            <a href="https://chambers.com/lawyer/hui-ling-teo-global-2:25705527" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 px-6 py-3 rounded-full text-accent text-sm hover:bg-accent/10 transition-smooth">
              {t("testimonials.chambersApproved")} <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {chambersTestimonials.map((te, i) => (
              <Card key={i} className="border-border/50 bg-card card-lift">
                <CardContent className="p-8">
                  <Quote className="h-6 w-6 text-accent/40 mb-4" />
                  <blockquote className="text-foreground text-lg leading-relaxed mb-6 font-serif italic">"{te.quote}"</blockquote>
                  <div className="text-right">
                    <div className="text-xs text-accent font-sans uppercase tracking-wider">{te.source}</div>
                    <div className="text-xs text-muted-foreground mt-1">{te.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {recognition.map((item, i) => (
              <div key={i} className="text-center p-6 border border-border/30 rounded">
                <h3 className="text-base font-serif font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                <span className="text-xs text-accent uppercase tracking-wider">{item.years}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {attributes.map((attr, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <attr.icon className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-serif font-bold text-foreground mb-2 text-sm">{attr.title}</h4>
                <p className="text-xs text-muted-foreground">{attr.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
