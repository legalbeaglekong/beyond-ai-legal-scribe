import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import planeTakeoff from "@/assets/plane-takeoff.jpg";
import teamHuiling from "@/assets/team-huiling.png";
import teamSonia from "@/assets/team-sonia.webp.asset.json";
import { useLanguage } from "@/i18n/LanguageContext";

const teamMembers = [
  {
    slug: "hui-ling-teo",
    name: "Hui Ling Teo",
    role: "Founder",
    roleZh: "创始人",
    image: teamHuiling,
    flag: "🇸🇬 🇬🇧",
    summary: "Chambers ranked. Legal 500 \"Next Generation Partner\". English and Singapore law qualified.",
    summaryZh: "钱伯斯排名。Legal 500「新一代合伙人」。英格兰和新加坡法律资格。",
    experience: "14 years of experience",
    experienceZh: "14年经验",
  },
  {
    slug: "sonia-motwani",
    name: "Sonia Motwani",
    role: "Delivery Lead",
    roleZh: "交付负责人",
    image: teamSonia,
    flag: "🇬🇧",
    summary: "Seasoned aerospace professional. Qualified as an English solicitor. LLB University of Birmingham.",
    summaryZh: "资深航空专业人士。英格兰注册律师。伯明翰大学法学学士。",
    experience: "5 years of experience",
    experienceZh: "5年经验",
  },
];

export { teamMembers };

const TeamPage = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Our Team | Beyond Horizons Legal Singapore</title>
        <meta name="description" content="Meet the Chambers-ranked legal team behind Beyond Horizons by Bethel Chambers LLC — dual-qualified counsel in Singapore and English law." />
        <link rel="canonical" href="https://beyondhorizons.sg/team" />
        <meta property="og:title" content="Our Team | Beyond Horizons Legal Singapore" />
        <meta property="og:description" content="Meet the Chambers-ranked legal team behind Beyond Horizons by Bethel Chambers LLC." />
        <meta property="og:url" content="https://beyondhorizons.sg/team" />
        <meta property="og:image" content="https://beyondhorizons.sg/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://beyondhorizons.sg/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Our Team — Beyond Horizons Legal",
            url: "https://beyondhorizons.sg/team",
            about: {
              "@type": "Organization",
              name: "Beyond Horizons by Bethel Chambers LLC",
              url: "https://beyondhorizons.sg"
            },
            hasPart: teamMembers.map((m) => ({
              "@type": "Person",
              name: m.name,
              jobTitle: m.role,
              description: m.summary,
              url: `https://beyondhorizons.sg/team/${m.slug}`,
              worksFor: { "@type": "Organization", name: "Bethel Chambers LLC" }
            }))
          })}
        </script>
      </Helmet>
      <Header />

      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img src={planeTakeoff} alt="Plane taking off at sunrise" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-10 h-[2px] bg-white/60 mx-auto mb-6" />
            <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-4 font-sans">{t("team.ourPeople")}</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white drop-shadow-lg">{t("team.meetTeam")}</h1>
          </div>
        </div>
      </div>

      <div className="section-padding bg-background">
        <div className="max-w-5xl mx-auto container-padding">
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">{t("team.teamDesc")}</p>

          <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            {teamMembers.map((member) => (
              <Link key={member.slug} to={`/team/${member.slug}`} className="group text-left">
                <div className="aspect-[3/4] overflow-hidden rounded mb-6 bg-muted">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">{member.flag}</p>
                <p className="text-sm italic text-accent font-serif mb-1">{language === "zh" ? member.roleZh : member.role}</p>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{member.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">{language === "zh" ? member.summaryZh : member.summary}</p>
                <p className="text-xs text-muted-foreground">{language === "zh" ? member.experienceZh : member.experience}</p>
                <span className="inline-flex items-center text-sm text-accent mt-4 group-hover:gap-2 transition-all">
                  {t("team.viewProfile")} <ArrowRight className="h-4 w-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TeamPage;
