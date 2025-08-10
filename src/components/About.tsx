import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Users, TrendingUp, ExternalLink } from "lucide-react";
import founderPortrait from "@/assets/founder-portrait.jpg";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "Chambers Global 2025",
      description: "Band 3 Asset Finance - Global Market Leader",
      highlight: "6 Years Ranked",
    },
    {
      icon: TrendingUp,
      title: "Legal 500 Recognition",
      description: "Next Generation Partner 2023",
      highlight: "Industry Leader",
    },
    {
      icon: Users,
      title: "Early Career Excellence",
      description: "Top 10 Most Influential Lawyers",
      highlight: "Proven Track Record",
    },
    {
      icon: BookOpen,
      title: "Bloomberg Law Author",
      description: "ESG Issues for Aerospace & Defense Companies",
      highlight: "Thought Leadership",
    },
  ];

  const certifications = [
    "ESG Investing Certification",
    "Green and Sustainable Finance",
    "Blockchain Technology",
    "Dual English & Singapore Law Qualification",
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-24">
          <p className="text-muted-foreground font-light text-sm uppercase tracking-wide mb-8">
            Global Authority
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
            Meet Your Legal Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Our experienced legal team combines unparalleled expertise with visionary business acumen to guide
            tomorrow's most innovative companies through complex regulatory landscapes and challenging situations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Founder Image & Core Info */}
          <div className="space-y-12">
            <div className="relative">
              <img
                src="/src/assets/fashionable-aircraft-hangar-ai-team.jpg"
                alt="Beyond Horizons Legal Team - Aviation Manufacturing AI-Enhanced Practice"
                className="w-full max-w-md mx-auto rounded shadow-minimal"
              />
            </div>

            <div className="text-center lg:text-left space-y-6">
              <h3 className="text-3xl font-bold text-foreground">Beyond Horizons Legal Team</h3>
              <p className="text-lg text-muted-foreground font-light">
                Expert Legal Solutions | Global Partners | Market Leaders
              </p>
              <p className="text-muted-foreground leading-relaxed font-light italic">
                "We see legal challenges through a business perspective rather than just legal — this unique
                approach enables us to craft solutions that drive innovation while ensuring compliance in
                the most complex regulatory environments and challenging situations."
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-6">
              <h4 className="text-lg font-medium text-foreground">Strategic Certifications</h4>
              <div className="grid grid-cols-1 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="text-muted-foreground font-light text-sm py-2 border-b border-border">
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="space-y-12">
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-border shadow-minimal hover:shadow-hover transition-smooth">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-secondary rounded flex items-center justify-center">
                        <achievement.icon className="h-6 w-6 text-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-lg font-medium text-foreground">
                            {achievement.title}
                          </h4>
                          <span className="text-xs font-light text-muted-foreground uppercase tracking-wide">
                            {achievement.highlight}
                          </span>
                        </div>
                        <p className="text-muted-foreground font-light">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-secondary rounded p-12 text-center">
              <h4 className="text-xl font-medium text-foreground mb-4">
                Ready to Transform Your Legal Strategy?
              </h4>
              <p className="text-muted-foreground mb-8 font-light leading-relaxed">
                Experience the difference of working with a globally recognized legal innovator
                who understands your industry's unique challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" asChild>
                  <a 
                    href="https://outlook.office.com/bookwithme/user/c79273fd7b174b88a10e537f3ae6e251@huilinglawoffice.com/meetingtype/gilpmYHK-EawFiSPKhEVhQ2?anonymous&ep=mlink&ismsaljsauthenabled=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule Consultation
                  </a>
                </Button>
                <Button variant="outline" size="lg">
                  View Publications
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;