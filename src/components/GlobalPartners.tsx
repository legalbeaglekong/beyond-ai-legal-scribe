import { Button } from "@/components/ui/button";
import { Scale } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import { STOCK_VIDEOS } from "@/lib/stock-videos";
import { useLanguage } from "@/i18n/LanguageContext";

const GlobalPartners = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Scale, label: "Cross-border matters", value: "APAC" },
  ];

  return (
    <section className="relative">
      <VideoBackground src={STOCK_VIDEOS.maritime} className="h-[35vh]" overlayClassName="absolute inset-0 bg-black/60">
        <div className="h-[35vh] flex items-center justify-center">
          <div className="text-center px-4">
            <div className="teal-line mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white drop-shadow-lg">{t("globalPartners.title")}</h2>
            <p className="text-base md:text-lg text-white/80 mt-4 max-w-2xl mx-auto leading-relaxed drop-shadow">Together with foreign counsel instructed where needed</p>
          </div>
        </div>
      </VideoBackground>

      <div className="section-padding bg-background">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 border border-border/30 rounded">
                <stat.icon className="w-6 h-6 mx-auto mb-3 text-accent" />
                <div className="text-2xl font-serif font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>


          <div className="text-center">
            <Button size="lg" className="mr-4 animate-blink-glow" asChild>
              <a href="https://wa.me/6597265330?text=Enquiry%20via%20beyondhorizons.sg%2F" target="_blank" rel="noopener noreferrer">
                {t("globalPartners.scheduleConsultation")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPartners;
