import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { teamMembers } from "@/pages/TeamPage";
import { useLanguage } from "@/i18n/LanguageContext";

const TeamPreview = () => {
  const { t, language } = useLanguage();

  return (
    <section id="team" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16">
          <div className="w-10 h-[2px] bg-accent mx-auto mb-6" />
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-sans">{t("team.ourPeople")}</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">{t("team.meetTeam")}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {teamMembers.map((member) => (
            <Link key={member.slug} to={`/team/${member.slug}`} className="group text-left">
              <div className="aspect-[3/4] overflow-hidden rounded mb-6 bg-muted">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="text-xs text-muted-foreground mb-1">{member.flag}</p>
              <p className="text-sm italic text-accent font-serif mb-1">{language === "zh" ? member.roleZh : member.role}</p>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{member.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{language === "zh" ? member.summaryZh : member.summary}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/team" className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all font-serif">
            {t("team.viewProfile")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
