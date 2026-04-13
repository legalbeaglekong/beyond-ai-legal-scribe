import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import planeTakeoff from "@/assets/plane-takeoff.jpg";
import teamHuiling from "@/assets/team-huiling.png";
import teamSonia from "@/assets/team-sonia.png";
import teamAmanda from "@/assets/team-amanda.png";
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
    summary: "Seasoned aerospace paralegal. Qualified as an English solicitor. LLB University of Birmingham.",
    summaryZh: "资深航空法律助理。英格兰法律准入待审。伯明翰大学法学学士。",
    experience: "5 years of experience",
    experienceZh: "5年经验",
  },
  {
    slug: "amanda-lee",
    name: "Amanda Lee",
    role: "Legal Executive",
    roleZh: "法律主管",
    image: teamAmanda,
    flag: "🇦🇺",
    summary: "Admitted as a solicitor in Victoria, Australia. LLB University of Tasmania.",
    summaryZh: "澳大利亚维多利亚州注册律师。塔斯马尼亚大学法学学士。",
    experience: "Entry level",
    experienceZh: "初级",
  },
];

export { teamMembers };

const TeamPage = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
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

          <div className="grid md:grid-cols-3 gap-12">
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
