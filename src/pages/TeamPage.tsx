import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import planeTakeoff from "@/assets/plane-takeoff.jpg";
import teamHuiling from "@/assets/team-huiling.png";
import teamSonia from "@/assets/team-sonia.png";
import teamAmanda from "@/assets/team-amanda.png";

const teamMembers = [
  {
    slug: "hui-ling-teo",
    name: "Hui Ling Teo",
    role: "Founder",
    image: teamHuiling,
    flag: "🇸🇬 🇬🇧",
    summary: "Chambers ranked. Legal 500 \"Next Generation Partner\". English and Singapore law qualified.",
    experience: "14 years of experience",
  },
  {
    slug: "sonia-motwani",
    name: "Sonia Motwani",
    role: "Delivery Lead",
    image: teamSonia,
    flag: "🇬🇧",
    summary: "Seasoned aerospace paralegal. Admission Pending (English law). LLB University of Birmingham.",
    experience: "5 years of experience",
  },
  {
    slug: "amanda-lee",
    name: "Amanda Lee",
    role: "Legal Executive",
    image: teamAmanda,
    flag: "🇦🇺",
    summary: "Admitted as a solicitor in Victoria, Australia. LLB University of Tasmania.",
    experience: "Entry level",
  },
];

export { teamMembers };

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img src={planeTakeoff} alt="Plane taking off at sunrise" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-10 h-[2px] bg-white/60 mx-auto mb-6" />
            <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-4 font-sans">Our People</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white drop-shadow-lg">
              Meet Your Legal Team
            </h1>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="section-padding bg-background">
        <div className="max-w-5xl mx-auto container-padding">
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
            Our team combines decades of experience across Magic Circle and top-tier firms, united by a shared mission to deliver innovative, accessible legal solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <Link
                key={member.slug}
                to={`/team/${member.slug}`}
                className="group text-left"
              >
                <div className="aspect-[3/4] overflow-hidden rounded mb-6 bg-muted">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-xs text-muted-foreground mb-1">{member.flag}</p>
                <p className="text-sm italic text-accent font-serif mb-1">{member.role}</p>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">{member.summary}</p>
                <p className="text-xs text-muted-foreground">{member.experience}</p>
                <span className="inline-flex items-center text-sm text-accent mt-4 group-hover:gap-2 transition-all">
                  View Profile <ArrowRight className="h-4 w-4 ml-1" />
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
