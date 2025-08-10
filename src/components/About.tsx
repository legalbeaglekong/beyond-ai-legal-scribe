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
    <section id="about" className="py-20 gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            Global Authority
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Your <span className="text-gradient">Legal Strategist</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hui Ling Teo combines unparalleled legal expertise with visionary business acumen to guide
            tomorrow's most innovative companies through complex regulatory landscapes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Founder Image & Core Info */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src={founderPortrait}
                alt="Hui Ling Teo - Legal Strategist and Business Builder"
                className="w-full max-w-md mx-auto rounded-2xl shadow-elegant"
              />
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gold text-gold-foreground font-bold px-6 py-2">
                  Global Market Leader
                </Badge>
              </div>
            </div>

            <div className="text-center lg:text-left space-y-4">
              <h3 className="text-3xl font-bold text-foreground">Hui Ling Teo</h3>
              <p className="text-lg text-accent font-semibold">
                Legal Strategist | Business Builder | Global Market Leader
              </p>
              <p className="text-muted-foreground leading-relaxed">
                "I see legal challenges through a business perspective rather than just legal — this unique
                approach enables me to craft solutions that drive innovation while ensuring compliance in
                the most complex regulatory environments."
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Strategic Certifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="justify-start p-3">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="gradient-card border-0 shadow-elegant hover:shadow-hover transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <achievement.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-foreground">
                            {achievement.title}
                          </h4>
                          <Badge variant="outline" className="text-accent border-accent">
                            {achievement.highlight}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-primary/5 rounded-2xl p-8 text-center border border-primary/10">
              <h4 className="text-xl font-semibold text-foreground mb-3">
                Ready to Transform Your Legal Strategy?
              </h4>
              <p className="text-muted-foreground mb-6">
                Experience the difference of working with a globally recognized legal innovator
                who understands your industry's unique challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="premium" size="lg">
                  Schedule Consultation
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