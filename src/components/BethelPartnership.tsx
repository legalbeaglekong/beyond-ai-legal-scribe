import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Building } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const BethelPartnership = () => {
  const { t, language } = useLanguage();

  const sections = [
    {
      icon: Building,
      title: t("bethel.col1Title"),
      subtitle: t("bethel.col1Subtitle"),
      desc: t("bethel.col1Desc"),
      items: language === "zh" ? ["公司与商业法", "跨境交易", "监管合规", "国际商业法"] : ["Corporate & Commercial Law", "Cross-Border Transactions", "Regulatory Compliance", "International Business Law"],
    },
    {
      icon: Users,
      title: t("bethel.col2Title"),
      subtitle: "",
      desc: t("bethel.col2Desc"),
      items: language === "zh" ? ["私人客户服务", "代际传承", "家族办公室咨询", "财富架构"] : ["Private Client Services", "Generation Transfer", "Family Office Advisory", "Wealth Structuring"],
    },
    {
      icon: Users,
      title: t("bethel.col3Title"),
      subtitle: "",
      desc: t("bethel.col3Desc"),
      items: language === "zh" ? ["家庭法", "遗产规划", "遗嘱认证", "个人法律事务"] : ["Family Law", "Estate Planning", "Probate", "Personal Legal Matters"],
    },
  ];

  return (
    <section id="bethel-partnership" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-12">
          <div className="teal-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">{t("bethel.title")}</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">{t("bethel.desc")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {sections.map((section, i) => (
            <Card key={i} className="p-6 border-border/30 bg-card card-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center">
                  <section.icon className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h3 className="text-base font-serif font-bold text-foreground">{section.title}</h3>
                  {section.subtitle && <span className="text-xs text-muted-foreground">{section.subtitle}</span>}
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-4">{section.desc}</p>
              <ul className="space-y-2">
                {section.items.map((item, j) => (
                  <li key={j} className="text-xs text-muted-foreground flex items-center">
                    <span className="w-1 h-1 rounded-full bg-accent/40 mr-2" />{item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="border border-border/30 rounded p-8 mb-8">
          <h3 className="text-lg font-serif font-bold text-foreground mb-6 text-center">{t("bethel.statsTitle")}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-accent mb-2">{t("bethel.stat1")}</div>
              <p className="text-sm text-muted-foreground">{t("bethel.stat1Desc")}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-accent mb-2">{t("bethel.stat2")}</div>
              <p className="text-sm text-muted-foreground">{t("bethel.stat2Desc")}</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" variant="outline">
            <a href="https://bethelchambers.com/" target="_blank" rel="noopener noreferrer">
              {t("bethel.visitBethel")} <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BethelPartnership;
