import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Users, TrendingUp, ExternalLink, ArrowRight } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import { STOCK_VIDEOS } from "@/lib/stock-videos";

const BOOKING_URL = "https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled";

const AboutPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const achievements = [
    { icon: Award, title: "Chambers Global 2025", description: "Band 3 Asset Finance - Global Market Leader", highlight: "6 Years Ranked" },
    { icon: TrendingUp, title: "Legal 500 Recognition", description: "Next Generation Partner 2023", highlight: "Industry Leader" },
    { icon: Users, title: "Early Career Excellence", description: "Top 10 Most Influential Lawyers", highlight: "Proven Track Record" },
    { icon: BookOpen, title: "Bloomberg Law Author", description: "Strategic Business Advisory & ESG Implementation", highlight: "Thought Leadership" },
  ];

  const certifications = ["ESG Investing Certification", "Green and Sustainable Finance", "Blockchain Technology", "Dual English & Singapore Law Qualification"];

  return (
    <>
      <Helmet>
        <title>About Beyond Horizons Legal — Bethel Chambers LLC | Singapore</title>
        <meta name="description" content="Chambers-ranked legal team delivering innovative, cost-effective legal solutions. Dual-qualified in English & Singapore law." />
        <link rel="canonical" href="https://beyondhorizons.sg/about" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero with Video */}
        <VideoBackground src={STOCK_VIDEOS.ocean} className="min-h-[60vh] flex items-center">
          <div className="min-h-[60vh] flex items-center justify-center w-full pt-20">
            <div className="max-w-4xl mx-auto container-padding text-center">
              <div className="teal-line mx-auto mb-6" />
              <p className="text-sm uppercase tracking-[0.3em] text-foreground/60 mb-4 font-sans">Global Authority</p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                Meet Your Legal Team
              </h1>
              <p className="text-base md:text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed mb-8">
                Our experienced legal team combines unparalleled expertise with visionary business acumen.
              </p>
              <Button variant="default" size="lg" asChild>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </VideoBackground>

        {/* Genesis */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto container-padding">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="teal-line mb-6" />
              <h2 className="text-3xl font-serif font-bold text-foreground">Genesis Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                In 2024, our founding team with decades of big law experience saw a unique opportunity: to build a new kind of law team from the ground up — proven lawyers united by one mission: to redesign legal services for tomorrow's visionaries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We built Beyond Horizons Legal to deliver cost-effective, precise, and innovative legal solutions. Our approach breaks traditional molds, making top-tier legal expertise accessible without the overhead or delays common in legacy firms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We regularly work across and collaborate with Magic Circle, AM Law Top 100 and White Shoe firms worldwide, combining global experience with our AI-driven efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="section-padding bg-secondary/20">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-6">
                <div className="teal-line mb-4" />
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Recognition & Achievements</h2>
                {achievements.map((a, i) => (
                  <Card key={i} className="border-border/30 bg-card card-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <a.icon className="h-5 w-5 text-accent" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-sm font-serif font-bold text-foreground">{a.title}</h3>
                            <span className="text-xs text-accent uppercase tracking-wider">{a.highlight}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{a.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div>
                <div className="teal-line mb-4" />
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Strategic Certifications</h2>
                <div className="space-y-3">
                  {certifications.map((cert, i) => (
                    <div key={i} className="text-sm text-muted-foreground py-3 border-b border-border/30 flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />{cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <VideoBackground src={STOCK_VIDEOS.sunrise} className="py-20">
          <div className="max-w-3xl mx-auto container-padding text-center py-12">
            <div className="teal-line mx-auto mb-8" />
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Ready to Transform Your Legal Strategy?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" asChild>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                <a href="https://www.linkedin.com/in/hui-ling-teo-7bb8b812b/recent-activity/all/" target="_blank" rel="noopener noreferrer">
                  View Publications <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </VideoBackground>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
