import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Users, TrendingUp, ExternalLink, ArrowRight } from "lucide-react";
import customerAppealTeamPhoto from "@/assets/customer-appeal-team-photo.jpg";
import modernOfficeSpace from "@/assets/modern-office-space.jpg";

const BOOKING_URL = "https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <>
      <Helmet>
        <title>About Beyond Horizons Legal — Bethel Chambers LLC | Singapore</title>
        <meta name="description" content="Chambers-ranked legal team delivering innovative, cost-effective legal solutions. Dual-qualified in English & Singapore law. Beyond Horizons Legal by Bethel Chambers LLC." />
        <link rel="canonical" href="https://beyondhorizons.sg/about" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="pt-32 pb-20 section-padding bg-gradient-hero relative">
          <div className="max-w-5xl mx-auto container-padding text-center hero-content fade-in">
            <p className="text-muted-foreground font-light text-sm uppercase tracking-wide mb-8">
              Global Authority
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Meet Your Legal Team
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed mb-10">
              Our experienced legal team combines unparalleled expertise with visionary business acumen to guide
              tomorrow's most innovative companies through complex regulatory landscapes and challenging situations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" asChild>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Genesis Story */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div className="space-y-8 fade-in">
                <img
                  src={customerAppealTeamPhoto}
                  alt="Beyond Horizons Legal Team - Professional and Approachable Legal Experts"
                  className="w-full max-w-md mx-auto rounded shadow-minimal"
                />
                <p className="text-xs text-muted-foreground text-center font-light italic">
                  *Photo is illustrative
                </p>
              </div>

              <div className="space-y-8 fade-in" style={{ transitionDelay: '150ms' }}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Beyond Horizons Legal — Genesis Story
                </h2>
                <p className="text-muted-foreground leading-relaxed font-light">
                  In 2024, our founding team with decades of big law experience saw a unique opportunity: to build a new kind of law team from the ground up — proven lawyers united by one mission: to redesign legal services for tomorrow's visionaries.
                </p>
                <p className="text-muted-foreground leading-relaxed font-light">
                  We built Beyond Horizons Legal to deliver cost-effective, precise, and innovative legal solutions. Our approach breaks traditional molds, making top-tier legal expertise accessible without the overhead or delays common in legacy firms.
                </p>
                <p className="text-muted-foreground leading-relaxed font-light">
                  We regularly work across and collaborate with Magic Circle, AM Law Top 100 and White Shoe firms worldwide, combining global experience with our AI-driven efficiency to serve clients who expect more — faster, smarter, and better.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements & Certifications */}
        <section className="section-padding">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="grid lg:grid-cols-2 gap-20">
              {/* Achievements */}
              <div className="space-y-8 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Recognition & Achievements
                </h2>
                <div className="space-y-6">
                  {achievements.map((achievement, index) => (
                    <Card key={index} className="border-border shadow-minimal hover:shadow-hover transition-smooth fade-in" style={{ transitionDelay: `${index * 100}ms` }}>
                      <CardContent className="p-8">
                        <div className="flex items-start space-x-6">
                          <div className="w-12 h-12 bg-secondary rounded flex items-center justify-center flex-shrink-0">
                            <achievement.icon className="h-6 w-6 text-foreground" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="text-lg font-medium text-foreground">{achievement.title}</h3>
                              <span className="text-xs font-light text-muted-foreground uppercase tracking-wide">{achievement.highlight}</span>
                            </div>
                            <p className="text-muted-foreground font-light">{achievement.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Certifications + Office */}
              <div className="space-y-12 fade-in" style={{ transitionDelay: '200ms' }}>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                    Strategic Certifications
                  </h2>
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <div key={index} className="text-muted-foreground font-light text-sm py-3 border-b border-border">
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>

                <img
                  src={modernOfficeSpace}
                  alt="Modern Legal Office Space"
                  className="w-full rounded shadow-minimal"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-3xl mx-auto container-padding text-center fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Legal Strategy?
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-10 text-lg">
              Experience the difference of working with a globally recognized legal innovator
              who understands your industry's unique challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" asChild>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://www.linkedin.com/in/hui-ling-teo-7bb8b812b/recent-activity/all/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Publications
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
