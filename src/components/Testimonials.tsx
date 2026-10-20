import { Card, CardContent } from "@/components/ui/card";
import { Brain, Lightbulb, Globe, TrendingUp } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import { useLanguage } from "@/i18n/LanguageContext";
import testimonialsVideo from "@/assets/testimonials-vessel-bg.mp4.asset.json";

const Testimonials = () => {
  const { t } = useLanguage();

  const recognition = [
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
      <VideoBackground src={testimonialsVideo.url} className="h-[35vh]" overlayClassName="absolute inset-0 bg-black/60">
        <div className="h-[35vh] flex items-center justify-center">
          <div className="text-center">
            <div className="teal-line mx-auto mb-6" />
            <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-4 font-sans drop-shadow">{t("testimonials.sectionLabel")}</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-lg">{t("testimonials.sectionTitle")}</h2>
          </div>
        </div>
      </VideoBackground>

      <div className="section-padding bg-background">
        <div className="max-w-6xl mx-auto container-padding">
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
