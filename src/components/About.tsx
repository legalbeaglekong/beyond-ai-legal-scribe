import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Users, TrendingUp, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import planeTakeoff from "@/assets/plane-takeoff.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const achievements = [
    { icon: Award, title: t("about.achievement1Title"), description: t("about.achievement1Desc"), highlight: t("about.achievement1Highlight") },
    { icon: TrendingUp, title: t("about.achievement2Title"), description: t("about.achievement2Desc"), highlight: t("about.achievement2Highlight") },
    { icon: Users, title: t("about.achievement3Title"), description: t("about.achievement3Desc"), highlight: t("about.achievement3Highlight") },
    { icon: BookOpen, title: t("about.achievement4Title"), description: t("about.achievement4Desc"), highlight: t("about.achievement4Highlight") },
  ];

  const certifications = [t("about.cert1"), t("about.cert2"), t("about.cert3"), t("about.cert4")];

  return (
    <section id="about" className="relative">
      <Link to="/team" className="block relative h-[40vh] md:h-[50vh] overflow-hidden group cursor-pointer">
        <img src={planeTakeoff} alt="Plane taking off at sunrise" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={1920} height={768} />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-10 h-[2px] bg-white/60 mx-auto mb-6" />
            <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-4 font-sans">{t("about.ourPeople")}</p>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white drop-shadow-lg">{t("about.meetTeam")}</h2>
            <span className="inline-flex items-center text-white/70 text-sm mt-4 group-hover:text-white transition-colors">
              {t("about.viewTeam")} <ArrowRight className="h-4 w-4 ml-2" />
            </span>
          </div>
        </div>
      </Link>

      <div className="section-padding bg-background">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h3 className="text-3xl font-serif font-bold text-foreground">{t("about.genesisTitle")}</h3>
              <p className="text-muted-foreground leading-relaxed">{t("about.genesis1")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("about.genesis2")}</p>
              <p className="text-muted-foreground leading-relaxed">{t("about.genesis3")}</p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond Horizons is a specialist practice group within{" "}
                <a href="https://www.bethelchambers.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">
                  Bethel Chambers LLC
                </a>
                , a full-service Singapore law firm. We share seamless collaboration across practice areas and provide strategic support to clients navigating complex, cross-border matters.
              </p>
              <div className="mt-12">
                <h4 className="text-sm uppercase tracking-[0.2em] text-accent mb-6 font-sans">{t("about.certTitle")}</h4>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="text-muted-foreground text-sm py-3 border-b border-border/50 flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3 flex-shrink-0" />
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-border/50 bg-card card-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <achievement.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-base font-serif font-bold text-foreground">{achievement.title}</h4>
                          <span className="text-xs text-accent uppercase tracking-wider">{achievement.highlight}</span>
                        </div>
                        <p className="text-sm text-muted-foreground text-justify">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <div className="bg-secondary/50 rounded p-8 text-center mt-8">
                <h4 className="text-lg font-serif font-bold text-foreground mb-4">{t("about.ctaTitle")}</h4>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{t("about.ctaDesc")}</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="default" size="default" asChild>
                    <a href="https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled" target="_blank" rel="noopener noreferrer">
                      {t("about.scheduleConsultation")} <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="default" className="border-foreground/30 text-foreground hover:bg-foreground hover:text-background" asChild>
                    <a href="https://www.linkedin.com/in/hui-ling-teo-7bb8b812b/recent-activity/all/" target="_blank" rel="noopener noreferrer">
                      {t("about.viewPublications")} <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
