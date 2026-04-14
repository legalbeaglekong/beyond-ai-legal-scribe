import { Button } from "@/components/ui/button";
import { Plane, Fuel, Building, Rocket, ArrowRight, DollarSign, Globe, Lightbulb } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import { STOCK_VIDEOS } from "@/lib/stock-videos";
import { useLanguage } from "@/i18n/LanguageContext";
import practiceStrategy from "@/assets/practice-strategy.jpg";
import practiceTransactions from "@/assets/practice-transactions.jpg";
import practiceRegulatory from "@/assets/practice-regulatory.jpg";
import practiceEsg from "@/assets/practice-esg.jpg";
import practiceCrossborder from "@/assets/practice-crossborder.jpg";
import practiceInnovation from "@/assets/practice-innovation.jpg";

const PracticeAreas = () => {
  const { t } = useLanguage();

  const practiceAreas = [
    { icon: Lightbulb, image: practiceStrategy, title: t("practiceAreas.area1Title"), description: t("practiceAreas.area1Desc"), highlight: t("practiceAreas.area1Highlight"), expertise: ["Business Strategy Legal Framework", "Risk Assessment & Mitigation", "Strategic Decision Support", "Legal Innovation Planning"] },
    { icon: Building, image: practiceTransactions, title: t("practiceAreas.area2Title"), description: t("practiceAreas.area2Desc"), highlight: t("practiceAreas.area2Highlight"), expertise: ["M&A Transaction Design", "Joint Venture Structuring", "Strategic Partnerships", "Cross-border Deal Architecture"] },
    { icon: Globe, image: practiceRegulatory, title: t("practiceAreas.area3Title"), description: t("practiceAreas.area3Desc"), highlight: t("practiceAreas.area3Highlight"), expertise: ["Multi-jurisdictional Compliance", "Regulatory Risk Management", "Policy Development", "Compliance Framework Design"] },
    { icon: Fuel, image: practiceEsg, title: t("practiceAreas.area4Title"), description: t("practiceAreas.area4Desc"), highlight: t("practiceAreas.area4Highlight"), expertise: ["ESG Strategy Development", "Sustainability Legal Framework", "Environmental Compliance", "Social Impact Assessment"] },
    { icon: DollarSign, image: practiceCrossborder, title: t("practiceAreas.area5Title"), description: t("practiceAreas.area5Desc"), highlight: t("practiceAreas.area5Highlight"), expertise: ["International Transaction Support", "Cross-border Regulatory Navigation", "Multi-jurisdictional Coordination", "Global Deal Execution"] },
    { icon: Rocket, image: practiceInnovation, title: t("practiceAreas.area6Title"), description: t("practiceAreas.area6Desc"), highlight: t("practiceAreas.area6Highlight"), expertise: ["Technology Legal Framework", "Innovation Strategy", "Emerging Technology Compliance", "Digital Transformation Legal Support"] },
  ];

  return (
    <section id="practice-areas" className="relative">
      <VideoBackground src={STOCK_VIDEOS.business} className="h-[35vh]">
        <div className="h-[35vh] flex items-center justify-center">
          <div className="text-center">
            <div className="teal-line mx-auto mb-6" />
            <p className="text-sm uppercase tracking-[0.3em] text-foreground/60 mb-4 font-sans">{t("practiceAreas.sectionLabel")}</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">{t("practiceAreas.sectionTitle")}</h2>
          </div>
        </div>
      </VideoBackground>

      <div className="section-padding bg-background">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="grid grid-cols-3 gap-8 mb-16 max-w-2xl mx-auto">
            {[
              { value: t("practiceAreas.stat1"), label: t("practiceAreas.stat1Label") },
              { value: t("practiceAreas.stat2"), label: t("practiceAreas.stat2Label") },
              { value: t("practiceAreas.stat3"), label: t("practiceAreas.stat3Label") },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-serif font-bold text-accent mb-1">{s.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-12">
            {practiceAreas.map((area, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center">
                      <area.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-foreground">{area.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-justify">{area.description}</p>
                  {area.highlight && (
                    <div className="border-l-2 border-accent/30 pl-4">
                      <p className="text-xs text-accent uppercase tracking-wider mb-1">{t("practiceAreas.notableAchievement")}</p>
                      <p className="text-sm text-foreground">{area.highlight}</p>
                    </div>
                  )}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-accent mb-4 font-sans">{t("practiceAreas.keyExpertise")}</h4>
                    <div className="space-y-2">
                      {area.expertise.map((skill, i) => (
                        <div key={i} className="text-sm text-muted-foreground py-2 border-b border-border/30 flex items-center">
                          <span className="w-1 h-1 rounded-full bg-accent/40 mr-3" />{skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src={area.image} 
                      alt={area.title} 
                      loading="lazy" 
                      width={768} 
                      height={512} 
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <div className="teal-line mx-auto mb-8" />
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{t("practiceAreas.ctaTitle")}</h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{t("practiceAreas.ctaDesc")}</p>
            <Button variant="default" size="lg" asChild>
              <a href="https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled" target="_blank" rel="noopener noreferrer">
                {t("practiceAreas.ctaButton")} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
