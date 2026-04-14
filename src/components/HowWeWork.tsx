import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, FileSignature, Wallet, Bot } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const HowWeWork = () => {
  const { t } = useLanguage();

  const steps = [
    { title: t("howWeWork.step1Title"), text: t("howWeWork.step1Text"), Icon: ShieldCheck },
    { title: t("howWeWork.step2Title"), text: t("howWeWork.step2Text"), Icon: FileSignature },
    { title: t("howWeWork.step3Title"), text: t("howWeWork.step3Text"), Icon: Wallet },
    { title: t("howWeWork.step4Title"), text: t("howWeWork.step4Text"), Icon: Bot },
  ];

  return (
    <section id="how-we-work" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-12">
          <div className="teal-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">{t("howWeWork.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("howWeWork.subtitle")}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, text, Icon }) => (
            <Card key={title} className="border-border/30 bg-card card-lift">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" />
                  </span>
                  <CardTitle className="text-sm font-serif">{title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground leading-relaxed text-justify">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
