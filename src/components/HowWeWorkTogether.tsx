import { useLanguage } from "@/i18n/LanguageContext";

const HowWeWorkTogether = () => {
  const { t } = useLanguage();

  return (
    <section id="how-we-work-together" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto container-padding text-center">
        <div className="teal-line mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">{t("howWeWorkTogether.title")}</h2>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>{t("howWeWorkTogether.p1")}</p>
          <p>{t("howWeWorkTogether.p2")}</p>
          <p>{t("howWeWorkTogether.p3")}</p>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkTogether;
