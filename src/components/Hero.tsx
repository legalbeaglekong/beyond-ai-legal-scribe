import singaporePanorama from "@/assets/singapore-panorama.jpg";
import industryAviation from "@/assets/industry-aviation.jpg";
import industryRobotics from "@/assets/industry-robotics.jpg";
import industryTransportation from "@/assets/industry-transportation.jpg";
import industryEnergy from "@/assets/industry-energy.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-background">
      <div className="pt-28 pb-8 max-w-5xl mx-auto container-padding text-center">
        <p className="text-sm text-muted-foreground mb-6">{t("hero.tagline")}</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.05] mb-8 max-w-4xl mx-auto">
          {t("hero.headline")}
        </h1>
        <a href="#about" className="text-foreground link-underline text-base inline-flex items-center hover:text-accent transition-smooth">
          {t("hero.cta")}
        </a>
      </div>

      <div className="px-4 md:px-8 pb-16">
        <img src={singaporePanorama} alt="Singapore skyline at dusk" className="w-full h-[50vh] md:h-[60vh] object-cover rounded-sm" />
      </div>

      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto container-padding py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: t("hero.stat1"), label: t("hero.stat1Label") },
            { value: t("hero.stat2"), label: t("hero.stat2Label") },
            { value: t("hero.stat3"), label: t("hero.stat3Label") },
            { value: t("hero.stat4"), label: t("hero.stat4Label") },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-serif font-bold text-accent">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto container-padding py-16">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">{t("hero.industryHeadline")}</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">{t("hero.industryDesc")}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: industryAviation, label: t("hero.aviation"), href: "/industry/aviation" },
              { img: industryRobotics, label: t("hero.robotics"), href: "/industry/robotics" },
              { img: industryTransportation, label: t("hero.transportation"), href: "/industry/transportation" },
              { img: industryEnergy, label: t("hero.energyTransition"), href: "/industry/energy-transition" },
            ].map((item) => (
              <a key={item.href} href={item.href} className="group block">
                <div className="overflow-hidden rounded-sm mb-2">
                  <img src={item.img} alt={item.label} className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <span className="text-sm text-foreground group-hover:text-accent transition-smooth font-medium">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
