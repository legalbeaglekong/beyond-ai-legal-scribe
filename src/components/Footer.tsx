import { MapPin, Mail, Linkedin, BookOpen, Scale, Rocket, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  CANONICAL_ADDRESS,
  EMAIL,
  WHATSAPP_URL,
  LINKEDIN_URL,
  PARENT_PRIVACY_URL,
  PARENT_TERMS_URL,
  UEN,
  REGULATORY_BLURB,
  LEGAL_DISCLAIMER,
  LEGAL_ENTITY,
} from "@/config/business";

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
  const year = new Date().getFullYear();

  const resources = [
    { label: language === "zh" ? "课程与培训" : "Courses & Training", href: "/courses" },
    { label: language === "zh" ? "战略商业咨询" : "Strategic Business Advisory", href: "#" },
    { label: language === "zh" ? "行业洞察通讯" : "Industry Insights Newsletter", href: "#" },
    { label: language === "zh" ? "演讲活动" : "Speaking Engagements", href: "#" },
    { label: language === "zh" ? "法律出版物" : "Legal Publications", href: "#" },
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border/30">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-1">Beyond Horizons</h3>
                <p className="text-xs text-muted-foreground">{LEGAL_ENTITY}</p>
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
                  <li key={i}>
                    {r.href.startsWith("/") ? (
                      <Link to={r.href} className="text-xs text-muted-foreground hover:text-accent transition-smooth flex items-center">
                        <BookOpen className="h-3 w-3 mr-2" />{r.label}
                      </Link>
                    ) : (
                      <a href={r.href} className="text-xs text-muted-foreground hover:text-accent transition-smooth flex items-center">
                        <BookOpen className="h-3 w-3 mr-2" />{r.label}
                      </a>
                    )}
                  </li>
                ))}

              </ul>
            </div>


            <div className="space-y-6">
              <h4 className="text-sm font-sans uppercase tracking-wider text-accent">{t("footer.contactLabel")}</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-muted-foreground">{CANONICAL_ADDRESS}</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-accent" />
                  <a href={`mailto:${EMAIL}`} className="text-xs text-muted-foreground hover:text-accent transition-smooth">{EMAIL}</a>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4 text-accent" />
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-accent transition-smooth">{t("footer.chatWhatsApp")}</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Linkedin className="h-4 w-4 text-accent" />
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-accent transition-smooth">{t("footer.connectLinkedIn")}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-border/30" />

        {/* Regulatory / compliance block */}
        <div className="py-8 space-y-4">
          <p className="text-xs text-muted-foreground leading-relaxed text-center md:text-left">
            {REGULATORY_BLURB} UEN: {UEN}. Registered office: {CANONICAL_ADDRESS}.
          </p>
          <p className="text-xs text-muted-foreground/80 leading-relaxed italic text-center md:text-left">
            {LEGAL_DISCLAIMER}
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pt-2">
            <div className="text-xs text-muted-foreground">
              © {year} {LEGAL_ENTITY}. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href={PARENT_PRIVACY_URL} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-accent transition-smooth">
                {t("footer.privacyPolicy")}
              </a>
              <a href={PARENT_TERMS_URL} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-accent transition-smooth">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="mt-2 flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
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
