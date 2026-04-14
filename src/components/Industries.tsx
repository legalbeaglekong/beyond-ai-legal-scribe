import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import industryAviation from "@/assets/industry-aviation.jpg";
import industryTransportation from "@/assets/industry-transportation.jpg";
import industryRobotics from "@/assets/industry-robotics.jpg";
import industryEnergy from "@/assets/industry-energy.jpg";
import industryTrade from "@/assets/industry-trade.jpg";
import industryCybersecurity from "@/assets/industry-cybersecurity.jpg";
import industryWellness from "@/assets/industry-wellness.jpg";
import industryBlockchain from "@/assets/industry-blockchain.jpg";
import industrySpace from "@/assets/industry-space.jpg";
import businessMeeting from "@/assets/business-meeting.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const Industries = () => {
  const { t } = useLanguage();

  const industries = [
    { title: t("industries.aviation"), description: t("industries.aviationDesc"), highlights: ["Aircraft Financing & Leasing", "Aviation Regulatory Compliance", "International Aviation Agreements"], route: "/industry/aviation", image: industryAviation },
    { title: t("industries.transportation"), description: t("industries.transportationDesc"), highlights: ["Transportation Infrastructure", "Logistics & Supply Chain", "Cross-border Transportation"], route: "/industry/transportation", image: industryTransportation },
    { title: t("industries.wellness"), description: t("industries.wellnessDesc"), highlights: ["Healthcare Compliance", "Digital Health Solutions", "Wellness Technology"], route: "/industry/wellness-health", image: industryWellness },
    { title: t("industries.blockchain"), description: t("industries.blockchainDesc"), highlights: ["Digital Asset Compliance", "Cryptocurrency Regulations", "DeFi Legal Frameworks"], route: "/industry/blockchain-digital-assets", image: industryBlockchain },
    { title: t("industries.energy"), description: t("industries.energyDesc"), highlights: ["Renewable Energy Projects", "ESG Compliance", "Sustainable Infrastructure"], route: "/industry/energy-transition", image: industryEnergy },
    { title: t("industries.trade"), description: t("industries.tradeDesc"), highlights: ["Contractual Restructuring", "Joint Venture Agreements", "Business Repositioning"], route: "/industry/trade-tariff", image: industryTrade },
    { title: t("industries.robotics"), description: t("industries.roboticsDesc"), highlights: ["Robot Leasing Agreements", "RaaS Contracts", "Liability Frameworks"], link: "https://robotlaw.beyondhorizons.sg", image: industryRobotics },
    { title: t("industries.cyber"), description: t("industries.cyberDesc"), highlights: ["Cybersecurity Governance", "AI Regulation & Liability", "Critical Infrastructure"], route: "/industry/cybersecurity-tech", image: industryCybersecurity },
    { title: t("industries.space"), description: t("industries.spaceDesc"), highlights: ["Satellite Transactions & Licensing", "Launch Agreements & Liability", "Space Regulatory Compliance"], route: "/industry/space", image: industrySpace },
  ];

  return (
    <section id="industries" className="bg-background">
      <div className="px-4 md:px-8">
        <img src={businessMeeting} alt="Corporate boardroom meeting" className="w-full h-[35vh] object-cover rounded-sm" loading="lazy" />
      </div>

      <div className="section-padding">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="mb-16 text-center">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">{t("industries.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("industries.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {industries.map((industry, index) => (
              <div key={index} className="group flex flex-col">
                <div className="overflow-hidden rounded-sm mb-4">
                  {industry.image ? (
                    <img src={industry.image} alt={industry.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  ) : (
                    <div className="w-full h-48 bg-secondary/50 rounded-sm flex items-center justify-center">
                      <span className="text-muted-foreground/40 font-serif text-lg">{industry.title}</span>
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-2 group-hover:text-accent transition-smooth">{industry.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{industry.description}</p>
                <div className="space-y-1 mb-4">
                  {industry.highlights.map((h, i) => (
                    <div key={i} className="text-xs text-muted-foreground flex items-center">
                      <span className="w-1 h-1 rounded-full bg-accent/60 mr-2" />{h}
                    </div>
                  ))}
                </div>
                <div className="mt-auto">
                  {industry.link ? (
                    <a href={industry.link} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground link-underline inline-flex items-center">
                      {t("industries.learnMore")} <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  ) : industry.route ? (
                    <Link to={industry.route} className="text-sm text-foreground link-underline inline-flex items-center">
                      {t("industries.learnMore")} <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-12 text-center">
            <h3 className="text-2xl font-serif text-foreground mb-4">{t("industries.ctaTitle")}</h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{t("industries.ctaDesc")}</p>
            <Button variant="default" size="lg" asChild>
              <a href="https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled" target="_blank" rel="noopener noreferrer">
                {t("industries.ctaButton")} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
