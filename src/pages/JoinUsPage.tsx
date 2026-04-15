import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, Heart, Target, Sparkles, Users, BookOpen, Globe } from "lucide-react";

const BOOKING_URL = "https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled";

const values = [
  { icon: Target, title: "Commitment to Excellence", desc: "We hold ourselves to the highest standards — in the quality of our work, the depth of our analysis, and the care we bring to every client engagement." },
  { icon: Sparkles, title: "Growth Mindset", desc: "We seek people who are curious, resilient, and constantly learning. The legal landscape evolves rapidly — we expect our team to evolve with it." },
  { icon: Heart, title: "Character & Integrity", desc: "Technical skill matters, but character matters more. We value honesty, humility, and the courage to do what is right — even when it is difficult." },
  { icon: Users, title: "Collaborative Spirit", desc: "We work as one team — across practice areas, jurisdictions, and disciplines. Ego has no place here. The best outcomes come from genuine collaboration." },
  { icon: BookOpen, title: "Intellectual Curiosity", desc: "We are drawn to complex, novel problems at the intersection of law, technology, and commerce. If you thrive on challenges others avoid, you'll feel at home." },
  { icon: Globe, title: "Global Perspective", desc: "Our work spans jurisdictions and cultures. We value diverse perspectives and the richness that comes from working across borders." },
];

const roles = [
  { title: "Associate — Technology & Emerging Sectors", description: "For lawyers with 2–5 years PQE interested in aviation, AI governance, blockchain, or space law. Strong academic credentials and genuine curiosity about technology required." },
  { title: "Paralegal / Legal Operations", description: "For detail-oriented professionals who want to work at the intersection of legal practice and technology. Experience with legal tech, contract management, or compliance systems valued." },
  { title: "Intern / Trainee Programme", description: "For law students and recent graduates seeking meaningful exposure to specialist cross-border practice. We offer structured mentorship and real client work — not photocopying." },
];

const JoinUsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const elements = container.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Join Us — Careers at Beyond Horizons Legal | Bethel Chambers LLC Singapore</title>
        <meta name="description" content="Join Beyond Horizons Legal — a specialist practice group within Bethel Chambers LLC. We seek excellence, growth mindset, and strength of character. Selection is not guaranteed." />
        <meta property="og:title" content="Join Us — Beyond Horizons Legal Singapore" />
        <meta property="og:url" content="https://beyondhorizons.sg/join-us" />
        <link rel="canonical" href="https://beyondhorizons.sg/join-us" />
      </Helmet>

      <div className="min-h-screen bg-background" ref={containerRef}>
        <Header />

        {/* Hero */}
        <section className="pt-32 pb-20 bg-secondary/20">
          <div className="max-w-4xl mx-auto container-padding text-center fade-in">
            <div className="teal-line mx-auto mb-8" />
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 font-sans">Careers</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight tracking-tight">
              Join Us
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
              We are building a practice for the long term — one that demands the best of the people who are part of it. If you are drawn to complex, meaningful work and hold yourself to a high standard, we would like to hear from you.
            </p>
            <p className="text-sm text-muted-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Selection is not guaranteed. We are deliberately small and intentionally selective — because the quality of our team is the foundation of everything we do.
            </p>
          </div>
        </section>

        {/* What We Look For */}
        <section className="section-padding bg-background">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-12 fade-in">
              <div className="teal-line mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                What We Look For
              </h2>
              <p className="text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Credentials open the door — but character, mindset, and commitment determine who thrives here. We value these qualities above all else.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((item, i) => (
                <Card key={i} className="border border-border bg-card shadow-md card-lift fade-in" style={{ transitionDelay: `${i * 80}ms` }}>
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center mb-4">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-sm font-serif font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="section-padding bg-secondary/20">
          <div className="max-w-4xl mx-auto container-padding fade-in">
            <div className="text-center mb-12">
              <div className="teal-line mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                What to Expect
              </h2>
            </div>
            <div className="space-y-8 max-w-3xl mx-auto">
              {[
                { heading: "Real work from day one", text: "We do not believe in years of observation before responsibility. If you join us, you will work on substantive matters — advising clients, drafting agreements, and contributing to strategy — from the start." },
                { heading: "A demanding but supportive environment", text: "We expect a great deal from our team, and we invest accordingly — in mentorship, in professional development, and in creating conditions where talented people can do their best work." },
                { heading: "Exposure to complexity", text: "Our practice sits at the intersection of law, technology, and cross-border commerce. You will work across sectors — aviation, AI, blockchain, space, energy — and across jurisdictions. No two matters are alike." },
                { heading: "A meritocratic culture", text: "Advancement is based on contribution, capability, and character — not tenure. We recognise and reward people who take ownership, solve problems, and make those around them better." },
              ].map((item, i) => (
                <div key={i} className="fade-in" style={{ transitionDelay: `${i * 100}ms` }}>
                  <h3 className="text-sm font-serif font-bold text-foreground mb-2">{item.heading}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Opportunities */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto container-padding fade-in">
            <div className="text-center mb-12">
              <div className="teal-line mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                Current Opportunities
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                We are always interested in hearing from exceptional candidates, even if no specific role is listed below.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {roles.map((role, i) => (
                <Card key={i} className="border border-border bg-card shadow-md card-lift fade-in" style={{ transitionDelay: `${i * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mb-4" />
                    <h3 className="text-sm font-serif font-bold text-foreground mb-3">{role.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{role.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Selection Note */}
        <section className="py-12 bg-secondary/20">
          <div className="max-w-3xl mx-auto container-padding text-center fade-in">
            <p className="text-sm text-muted-foreground leading-relaxed italic">
              "We are not looking for the most impressive CV. We are looking for people with the discipline to do excellent work, the humility to keep learning, and the character to put the client's interests first. If that describes you, we want to talk."
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-accent/5">
          <div className="max-w-3xl mx-auto container-padding text-center fade-in">
            <div className="teal-line mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Ready to apply?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 text-base">
              Send your CV and a brief cover note explaining why Beyond Horizons is the right fit for you. We read every application personally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="bg-accent text-accent-foreground font-semibold shadow-lg hover:bg-accent/90" asChild>
                <a href="mailto:HL@beyondhorizons.sg?subject=Application — Beyond Horizons Legal">
                  <Mail className="mr-2 h-4 w-4" /> Send Application
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Schedule a Conversation <ArrowRight className="ml-2 h-4 w-4" />
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

export default JoinUsPage;
