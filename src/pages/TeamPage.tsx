import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "@/lib/router-compat";
import { ArrowRight } from "lucide-react";
import planeTakeoff from "@/assets/plane-takeoff.jpg";
import teamHuiling from "@/assets/team-huiling.png";
import teamSonia from "@/assets/team-sonia.webp.asset.json";
import { useLanguage } from "@/i18n/LanguageContext";
import Legal500Text from "@/components/Legal500Text";

const teamMembers = [
  {
    slug: "hui-ling-teo",
    name: "Hui Ling Teo",
    role: "Founder",
    roleZh: "创始人",
    image: teamHuiling,
    flag: "🇸🇬 🇬🇧",
    summary: "Chambers Asia-Pacific 2026 — Band 3, Aviation: Finance — Singapore. Legal 500 Asia Pacific 2026, Next Generation Partner, Asset Finance (Singapore). Qualified as a solicitor in England and Wales and as an advocate and solicitor in Singapore.",
    summaryZh: "钱伯斯排名。Legal 500「新一代合伙人」。英格兰和新加坡法律资格。",
    experience: "14 years of experience",
    experienceZh: "14年经验",
  },
  {
    slug: "sonia-motwani",
    name: "Sonia Motwani",
    role: "Delivery Lead",
    roleZh: "交付负责人",
    image: teamSonia.url,
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Our Team — Beyond Horizons by Bethel Chambers",
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
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">{t("team.teamDesc")} For continuing, scoped legal support, see <Link to="/industry/fractional-gc" className="text-primary underline">fractional general counsel in Singapore</Link>.</p>

          <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.slug} className="group text-left">
                <Link to={`/team/${member.slug}`} className="block aspect-[3/4] overflow-hidden rounded mb-6 bg-muted">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                </Link>
                <p className="text-xs text-muted-foreground mb-1">{member.flag}</p>
                <p className="text-sm italic text-accent font-serif mb-1">{language === "zh" ? member.roleZh : member.role}</p>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-accent transition-colors"><Link to={`/team/${member.slug}`}>{member.name}</Link></h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2"><Legal500Text text={language === "zh" ? member.summaryZh : member.summary} /></p>
                <p className="text-xs text-muted-foreground">{language === "zh" ? member.experienceZh : member.experience}</p>
                <Link to={`/team/${member.slug}`} className="inline-flex items-center text-sm text-accent mt-4 group-hover:gap-2 transition-all">
                  {t("team.viewProfile")} <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TeamPage;
