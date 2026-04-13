import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import teamHuiling from "@/assets/team-huiling.png";
import teamSonia from "@/assets/team-sonia.png";
import teamAmanda from "@/assets/team-amanda.png";
import { useLanguage } from "@/i18n/LanguageContext";

const teamData: Record<string, {
  name: string;
  role: string;
  roleZh: string;
  image: string;
  flag: string;
  qualifications: string[];
  qualificationsZh: string[];
  highlights: string[];
  highlightsZh: string[];
  experience: string;
  experienceZh: string;
  linkedin?: string;
}> = {
  "hui-ling-teo": {
    name: "Hui Ling Teo",
    role: "Founder",
    roleZh: "创始人",
    image: teamHuiling,
    flag: "🇸🇬 🇬🇧",
    experience: "14 years of experience",
    experienceZh: "14年经验",
    qualifications: [
      "Qualified in Singapore and English law",
      "Dual English & Singapore Law Qualification",
      "ESG Investing Certification",
      "Green and Sustainable Finance Certification",
      "Blockchain Technology Certification",
    ],
    qualificationsZh: [
      "新加坡和英格兰法律资格",
      "英格兰和新加坡双重法律资格",
      "ESG投资认证",
      "绿色与可持续金融认证",
      "区块链技术认证",
    ],
    highlights: [
      "Seasoned legal professional with over 14 years of experience in corporate and finance work",
      "Successfully handled large merger and acquisitions transactions",
      "Well-versed in commercial negotiations",
      "Expertise in corporate and finance areas such as debt restructuring, blended finance, sale, purchase, leasing and trading of machinery",
      "Chambers ranked since 2019",
      "Honoured as Legal 500's \"Next Generation Partner\" in 2023",
      "Top 20 asset finance lawyers globally",
      "Top 10 most influential lawyers shaping aviation finance",
    ],
    highlightsZh: [
      "资深法律专业人士，拥有超过14年的公司和金融工作经验",
      "成功处理大型并购交易",
      "精通商业谈判",
      "在债务重组、混合融资、机械买卖、租赁和贸易等公司和金融领域的专业知识",
      "自2019年起获钱伯斯排名",
      "2023年荣获Legal 500「新一代合伙人」",
      "全球前20名资产融资律师",
      "塑造航空融资的十大最具影响力律师",
    ],
    linkedin: "https://www.linkedin.com/in/hui-ling-teo-7bb8b812b/",
  },
  "sonia-motwani": {
    name: "Sonia Motwani",
    role: "Delivery Lead",
    roleZh: "交付负责人",
    image: teamSonia,
    flag: "🇬🇧",
    experience: "5 years of experience",
    experienceZh: "5年经验",
    qualifications: [
      "Qualified as an English solicitor",
      "LLB University of Birmingham",
      "LLM Legal Practice (Solicitors)",
    ],
    qualificationsZh: [
      "英格兰法律准入待审",
      "伯明翰大学法学学士",
      "法律实务硕士（律师）",
    ],
    highlights: [
      "Seasoned aerospace professional",
      "Proven track record delivering high stakes transactions",
    ],
    highlightsZh: [
      "资深航空法律助理",
      "在高风险交易交付方面拥有良好记录",
    ],
  },
  "amanda-lee": {
    name: "Amanda Lee",
    role: "Legal Executive",
    roleZh: "法律主管",
    image: teamAmanda,
    flag: "🇦🇺",
    experience: "Entry level",
    experienceZh: "初级",
    qualifications: [
      "Admitted as a solicitor in Victoria, Australia",
      "LLB University of Tasmania",
      "Legal Practice at Leo Cussen Centre for Law (Australia)",
      "Diploma in Aerospace Technology with Business (Singapore)",
    ],
    qualificationsZh: [
      "澳大利亚维多利亚州注册律师",
      "塔斯马尼亚大学法学学士",
      "Leo Cussen法律中心法律实务（澳大利亚）",
      "航空技术与商业文凭（新加坡）",
    ],
    highlights: [
      "Assisting with legal matters",
      "Contributing to business development and marketing initiatives",
    ],
    highlightsZh: [
      "协助处理法律事务",
      "为业务发展和市场推广做出贡献",
    ],
  },
};

const slugs = Object.keys(teamData);

const TeamMemberPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const member = slug ? teamData[slug] : null;
  const { t, language } = useLanguage();

  if (!member) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground">Team member not found.</p>
      </div>
    );
  }

  const currentIndex = slugs.indexOf(slug!);
  const prevSlug = currentIndex > 0 ? slugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < slugs.length - 1 ? slugs[currentIndex + 1] : null;
  const qualifications = language === "zh" ? member.qualificationsZh : member.qualifications;
  const highlights = language === "zh" ? member.highlightsZh : member.highlights;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 pb-8 container-padding max-w-6xl mx-auto">
        <Link to="/team" className="inline-flex items-center text-sm text-muted-foreground hover:text-accent transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" /> {t("team.backToTeam")}
        </Link>
      </div>

      <div className="container-padding max-w-6xl mx-auto pb-24">
        <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start">
          <div className="w-full max-w-[280px] aspect-[3/4] overflow-hidden rounded bg-muted">
            <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-xs text-muted-foreground mb-2">{member.flag}</p>
              <p className="text-sm italic text-accent font-serif mb-1">{language === "zh" ? member.roleZh : member.role}</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">{member.name}</h1>
              <p className="text-sm text-muted-foreground">{language === "zh" ? member.experienceZh : member.experience}</p>
            </div>

            <div>
              <h2 className="text-sm uppercase tracking-[0.2em] text-accent mb-4 font-sans">{t("team.qualifications")}</h2>
              <div className="space-y-3">
                {qualifications.map((q, i) => (
                  <div key={i} className="text-sm text-muted-foreground py-2 border-b border-border/50 flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3 flex-shrink-0 mt-1.5" />{q}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm uppercase tracking-[0.2em] text-accent mb-4 font-sans">{t("team.highlights")}</h2>
              <div className="space-y-3">
                {highlights.map((h, i) => (
                  <div key={i} className="text-sm text-muted-foreground py-2 border-b border-border/50 flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3 flex-shrink-0 mt-1.5" />{h}
                  </div>
                ))}
              </div>
            </div>

            {member.linkedin && (
              <Button variant="outline" asChild>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  {t("team.viewLinkedIn")} <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}

            <div className="flex justify-between pt-8 border-t border-border/50">
              {prevSlug ? (
                <Link to={`/team/${prevSlug}`} className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center">
                  <ArrowLeft className="h-4 w-4 mr-2" /> {teamData[prevSlug].name}
                </Link>
              ) : <div />}
              {nextSlug ? (
                <Link to={`/team/${nextSlug}`} className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center">
                  {teamData[nextSlug].name} <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              ) : <div />}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TeamMemberPage;
