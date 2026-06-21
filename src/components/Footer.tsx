import { MapPin, Mail, Linkedin, BookOpen, Scale, Rocket, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const singaporePillars: { label: string; to: string }[] = [
  { label: "Singapore Space Law", to: "/singapore-space-law" },
  { label: "Singapore AI Governance", to: "/singapore-ai-governance" },
  { label: "Singapore Employment Law", to: "/singapore-employment-law" },
  { label: "Restructuring & Insolvency", to: "/singapore-restructuring-insolvency" },
  { label: "Aviation Law", to: "/singapore-aviation-law" },
  { label: "Robotics Law", to: "/singapore-robotics-law" },
  { label: "Alternative Energy", to: "/singapore-alternative-energy-law" },
  { label: "Nuclear & SMR Advisory", to: "/singapore-nuclear-law" },
  { label: "All Topics", to: "/topics" },
];

const Footer = () => {
  const { t, language } = useLanguage();

  const resources = language === "zh"
    ? ["战略商业咨询", "行业洞察通讯", "演讲活动", "法律出版物"]
    : ["Strategic Business Advisory", "Industry Insights Newsletter", "Speaking Engagements", "Legal Publications"];

  return (
    <footer className="bg-secondary/30 border-t border-border/30">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-1">Beyond Horizons</h3>
                <p className="text-xs text-muted-foreground">Bethel Chambers LLC</p>
                <div className="teal-line mt-3" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{t("footer.tagline")}</p>
              <div className="space-y-2 text-xs text-muted-foreground">
                <p>Chambers Global 2025 - Band 3</p>
                <p>Legal 500 Next Generation Partner</p>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-sans uppercase tracking-wider text-accent">Practice Areas</h4>
              <ul className="space-y-2">
                {singaporePillars.map((p) => (
                  <li key={p.to}>
                    <Link to={p.to} className="text-xs text-muted-foreground hover:text-accent transition-smooth">
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-sans uppercase tracking-wider text-accent">{t("footer.resources")}</h4>
              <ul className="space-y-2">
                {resources.map((r, i) => (
                  <li key={i}><a href="#" className="text-xs text-muted-foreground hover:text-accent transition-smooth flex items-center"><BookOpen className="h-3 w-3 mr-2" />{r}</a></li>
                ))}
              </ul>
            </div>


            <div className="space-y-6">
              <h4 className="text-sm font-sans uppercase tracking-wider text-accent">{t("footer.contactLabel")}</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-muted-foreground">39B Neil Road, #03-01, Singapore 088823</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-accent" />
                  <a href="mailto:HL@beyondhorizons.sg" className="text-xs text-muted-foreground hover:text-accent transition-smooth">HL@beyondhorizons.sg</a>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4 text-accent" />
                  <a href="https://wa.me/6597265330" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-accent transition-smooth">{t("footer.chatWhatsApp")}</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Linkedin className="h-4 w-4 text-accent" />
                  <a href="https://www.linkedin.com/company/beyondhorizonslegal" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-accent transition-smooth">{t("footer.connectLinkedIn")}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-border/30" />

        <div className="py-8">
          <p className="text-xs text-muted-foreground text-center md:text-left mb-4">
            Beyond Horizons is a service of Bethel Chambers LLC, a law practice registered in Singapore. UEN: 202007868D.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs text-muted-foreground">{t("footer.copyright")}</div>
            <div className="flex items-center gap-6">
              <a href="https://bethelchambers.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-accent transition-smooth">{t("footer.privacyPolicy")}</a>
              <Link to="/terms" className="text-xs text-muted-foreground hover:text-accent transition-smooth">Terms of Use</Link>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1.5"><Rocket className="h-3 w-3 text-accent" /><span>{t("footer.strategicInnovation")}</span></div>
            <div className="flex items-center space-x-1.5"><BookOpen className="h-3 w-3 text-accent" /><span>{t("footer.globalAdvisory")}</span></div>
            <div className="flex items-center space-x-1.5"><Scale className="h-3 w-3 text-accent" /><span>{t("footer.dealValue")}</span></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
