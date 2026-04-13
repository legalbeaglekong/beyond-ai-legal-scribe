import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, DollarSign, Globe, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const WhyChooseUs = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const reasons = [
    { id: "digital-first", icon: Bot, title: t("whyChooseUs.digitalFirst"), description: t("whyChooseUs.digitalFirstDesc") },
    { id: "cost-efficiency", icon: DollarSign, title: t("whyChooseUs.costEfficiency"), description: t("whyChooseUs.costEfficiencyDesc") },
    { id: "global-expertise", icon: Globe, title: t("whyChooseUs.globalExpertise"), description: t("whyChooseUs.globalExpertiseDesc") },
    { id: "confidentiality", icon: Shield, title: t("whyChooseUs.confidentiality"), description: t("whyChooseUs.confidentialityDesc") },
  ];

  return (
    <section className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-12">
          <div className="teal-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">{t("whyChooseUs.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("whyChooseUs.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reasons.map((reason) => (
            <Card key={reason.id} className="group cursor-pointer border-border/30 bg-card card-lift hover:border-accent/30" onClick={() => navigate(`/why-choose-us/${reason.id}`)}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded bg-accent/10 flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-sm font-serif font-bold mb-3 text-foreground group-hover:text-accent transition-smooth">{reason.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{reason.description}</p>
                <span className="text-xs text-accent inline-flex items-center">{t("whyChooseUs.learnMore")} <ArrowRight className="w-3 h-3 ml-1" /></span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <Button onClick={() => navigate("/expertise")} variant="ghost" size="sm" className="text-accent hover:bg-accent/10 text-xs uppercase tracking-wider">
            {t("whyChooseUs.viewExpertise")} <ArrowRight className="w-3 h-3 ml-2" />
          </Button>
          <div>
            <Button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              {t("whyChooseUs.contactUs")} <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
