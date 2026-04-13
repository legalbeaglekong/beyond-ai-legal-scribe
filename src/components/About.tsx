import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Users, TrendingUp, ExternalLink, ArrowRight } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import { STOCK_VIDEOS } from "@/lib/stock-videos";

const About = () => {
  const achievements = [
    { icon: Award, title: "Chambers Global 2025", description: "Band 3 Asset Finance - Global Market Leader", highlight: "6 Years Ranked" },
    { icon: TrendingUp, title: "Legal 500 Recognition", description: "Next Generation Partner 2023", highlight: "Industry Leader" },
    { icon: Users, title: "Early Career Excellence", description: "Top 10 Most Influential Lawyers", highlight: "Proven Track Record" },
    { icon: BookOpen, title: "Bloomberg Law Author", description: "Strategic Business Advisory & ESG Implementation", highlight: "Thought Leadership" },
  ];

  const certifications = [
    "ESG Investing Certification",
    "Green and Sustainable Finance",
    "Blockchain Technology",
    "Dual English & Singapore Law Qualification",
  ];

  return (
    <section id="about" className="relative">
      {/* Video divider band */}
      <VideoBackground src={STOCK_VIDEOS.business} className="h-[40vh] md:h-[50vh]">
        <div className="h-[40vh] md:h-[50vh] flex items-center justify-center">
          <div className="text-center">
            <div className="teal-line mx-auto mb-6" />
            <p className="text-sm uppercase tracking-[0.3em] text-foreground/60 mb-4 font-sans">Global Authority</p>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
              Meet Your Legal Team
            </h2>
          </div>
        </div>
      </VideoBackground>

      {/* Content */}
      <div className="section-padding bg-background">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — Story */}
            <div className="space-y-8">
              <h3 className="text-3xl font-serif font-bold text-foreground">Genesis Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                In 2024, our founding team with decades of big law experience saw a unique opportunity: to build a new kind of law team from the ground up — proven lawyers united by one mission: to redesign legal services for tomorrow's visionaries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We built Beyond Horizons Legal to deliver cost-effective, precise, and innovative legal solutions. Our approach breaks traditional molds, making top-tier legal expertise accessible without the overhead or delays common in legacy firms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We regularly work across and collaborate with Magic Circle, AM Law Top 100 and White Shoe firms worldwide, combining global experience with our AI-driven efficiency to serve clients who expect more — faster, smarter, and better.
              </p>

              {/* Certifications */}
              <div className="mt-12">
                <h4 className="text-sm uppercase tracking-[0.2em] text-accent mb-6 font-sans">Strategic Certifications</h4>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="text-muted-foreground text-sm py-3 border-b border-border/50 flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3 flex-shrink-0" />
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Achievements */}
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-border/50 bg-card card-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <achievement.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-base font-serif font-bold text-foreground">{achievement.title}</h4>
                          <span className="text-xs text-accent uppercase tracking-wider">{achievement.highlight}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* CTA */}
              <div className="bg-secondary/50 rounded p-8 text-center mt-8">
                <h4 className="text-lg font-serif font-bold text-foreground mb-4">
                  Ready to Transform Your Legal Strategy?
                </h4>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Experience the difference of working with a globally recognized legal innovator.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="default" size="default" asChild>
                    <a href="https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled" target="_blank" rel="noopener noreferrer">
                      Schedule Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="default" className="border-foreground/30 text-foreground hover:bg-foreground hover:text-background" asChild>
                    <a href="https://www.linkedin.com/in/hui-ling-teo-7bb8b812b/recent-activity/all/" target="_blank" rel="noopener noreferrer">
                      View Publications
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
