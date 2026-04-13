import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import teamHuiling from "@/assets/team-huiling.png";
import teamSonia from "@/assets/team-sonia.png";
import teamAmanda from "@/assets/team-amanda.png";

const teamData: Record<string, {
  name: string;
  role: string;
  image: string;
  flag: string;
  qualifications: string[];
  highlights: string[];
  experience: string;
  linkedin?: string;
}> = {
  "hui-ling-teo": {
    name: "Hui Ling Teo",
    role: "Founder",
    image: teamHuiling,
    flag: "🇸🇬 🇬🇧",
    experience: "14 years of experience",
    qualifications: [
      "Qualified in Singapore and English law",
      "Dual English & Singapore Law Qualification",
      "ESG Investing Certification",
      "Green and Sustainable Finance Certification",
      "Blockchain Technology Certification",
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
    linkedin: "https://www.linkedin.com/in/hui-ling-teo-7bb8b812b/",
  },
  "sonia-motwani": {
    name: "Sonia Motwani",
    role: "Delivery Lead",
    image: teamSonia,
    flag: "🇬🇧",
    experience: "5 years of experience",
    qualifications: [
      "Admission Pending (English law)",
      "LLB University of Birmingham",
      "LLM Legal Practice (Solicitors)",
    ],
    highlights: [
      "Seasoned aerospace paralegal",
      "Proven track record delivering high stakes transactions",
    ],
  },
  "amanda-lee": {
    name: "Amanda Lee",
    role: "Legal Executive",
    image: teamAmanda,
    flag: "🇦🇺",
    experience: "Entry level",
    qualifications: [
      "Admitted as a solicitor in Victoria, Australia",
      "LLB University of Tasmania",
      "Legal Practice at Leo Cussen Centre for Law (Australia)",
      "Diploma in Aerospace Technology with Business (Singapore)",
    ],
    highlights: [
      "Assisting with legal matters",
      "Contributing to business development and marketing initiatives",
    ],
  },
};

const slugs = Object.keys(teamData);

const TeamMemberPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const member = slug ? teamData[slug] : null;

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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 pb-8 container-padding max-w-6xl mx-auto">
        <Link to="/team" className="inline-flex items-center text-sm text-muted-foreground hover:text-accent transition-colors mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Team
        </Link>
      </div>

      <div className="container-padding max-w-6xl mx-auto pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Photo */}
          <div className="aspect-[3/4] overflow-hidden rounded bg-muted">
            <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
          </div>

          {/* Details */}
          <div className="space-y-8">
            <div>
              <p className="text-xs text-muted-foreground mb-2">{member.flag}</p>
              <p className="text-sm italic text-accent font-serif mb-1">{member.role}</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">{member.name}</h1>
              <p className="text-sm text-muted-foreground">{member.experience}</p>
            </div>

            <div>
              <h2 className="text-sm uppercase tracking-[0.2em] text-accent mb-4 font-sans">Qualifications</h2>
              <div className="space-y-3">
                {member.qualifications.map((q, i) => (
                  <div key={i} className="text-sm text-muted-foreground py-2 border-b border-border/50 flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3 flex-shrink-0 mt-1.5" />
                    {q}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm uppercase tracking-[0.2em] text-accent mb-4 font-sans">Highlights</h2>
              <div className="space-y-3">
                {member.highlights.map((h, i) => (
                  <div key={i} className="text-sm text-muted-foreground py-2 border-b border-border/50 flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3 flex-shrink-0 mt-1.5" />
                    {h}
                  </div>
                ))}
              </div>
            </div>

            {member.linkedin && (
              <Button variant="outline" asChild>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  View LinkedIn <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}

            {/* Navigation */}
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
