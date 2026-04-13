import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Users, Building, Scale } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import { STOCK_VIDEOS } from "@/lib/stock-videos";
import { useLanguage } from "@/i18n/LanguageContext";

const GlobalPartners = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Building, label: t("globalPartners.partnerFirms"), value: "10+" },
    { icon: Globe, label: t("globalPartners.globalRegions"), value: "4" },
    { icon: Users, label: t("globalPartners.yearsPartnership"), value: "10+" },
    { icon: Scale, label: t("globalPartners.crossBorderDeals"), value: "$8B+" },
  ];

  const regions = [
    { name: t("globalPartners.europe"), description: t("globalPartners.europeDesc") },
    { name: t("globalPartners.northAmerica"), description: t("globalPartners.northAmericaDesc") },
    { name: t("globalPartners.asiaPacific"), description: t("globalPartners.asiaPacificDesc") },
    { name: t("globalPartners.middleEast"), description: t("globalPartners.middleEastDesc") },
  ];

  return (
    <section className="relative">
      <VideoBackground src={STOCK_VIDEOS.maritime} className="h-[30vh]">
        <div className="h-[30vh] flex items-center justify-center">
          <div className="text-center">
            <div className="teal-line mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">{t("globalPartners.title")}</h2>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {regions.map((region) => (
              <Card key={region.name} className="border-border/30 bg-card card-lift hover:border-accent/30">
                <CardContent className="p-6">
                  <h3 className="text-base font-serif font-bold text-foreground mb-3">{region.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{region.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="mr-4" asChild>
              <a href="https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled" target="_blank" rel="noopener noreferrer">
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
