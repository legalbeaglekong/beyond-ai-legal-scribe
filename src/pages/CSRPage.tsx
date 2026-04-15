import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Leaf, Heart, ExternalLink, Globe, Users, Plane } from "lucide-react";

const BOOKING_URL = "https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled";

const CSRPage = () => {
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
        <title>Our Work in Society & Impact — Beyond Horizons Legal | Bethel Chambers LLC Singapore</title>
        <meta name="description" content="Beyond Horizons Legal's commitment to sustainability, community, and social impact. Founding the Asia Sustainable Aviation Fuel Association (ASAFA) and supporting Yong-en Care Centre." />
        <meta property="og:title" content="Our Work in Society & Impact — Beyond Horizons Legal Singapore" />
        <meta property="og:url" content="https://beyondhorizons.sg/work/csr" />
        <link rel="canonical" href="https://beyondhorizons.sg/work/csr" />
      </Helmet>

      <div className="min-h-screen bg-background" ref={containerRef}>
        <Header />

        {/* Hero */}
        <section className="pt-32 pb-20 bg-secondary/20">
          <div className="max-w-4xl mx-auto container-padding text-center fade-in">
            <div className="teal-line mx-auto mb-8" />
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 font-sans">Corporate Social Responsibility</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight tracking-tight">
              Purpose Beyond Practice
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We believe that a legal practice has responsibilities that extend beyond its clients. From advancing sustainable aviation to supporting vulnerable communities in Singapore, our work reflects a commitment to making a meaningful difference.
            </p>
          </div>
        </section>

        {/* ASAFA — Asia SAF Association */}
        <section className="section-padding bg-background">
          <div className="max-w-5xl mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center">
                    <Plane className="h-5 w-5 text-accent" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent font-sans">ESG & Sustainability</p>
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
                  Founding the Asia Sustainable Aviation Fuel Association
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Hui Ling Teo, Head of Corporate &amp; Finance at Bethel Chambers LLC and practice lead of Beyond Horizons, founded the <strong>Asia Sustainable Aviation Fuel Association (ASAFA)</strong> — Asia's first independent non-profit dedicated to advancing the adoption and integration of sustainable aviation fuel across the region.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  ASAFA works to accelerate aviation decarbonisation in Asia by promoting SAF adoption, advancing robust policies and market integration, and ensuring a diverse SAF supply chain. The association brings together airlines, fuel producers, airports, regulators, and industry stakeholders to drive collective action on one of aviation's most critical sustainability challenges.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  While ASAFA is a personal initiative, it is deeply informed by our practice at Bethel Chambers — and our practice, in turn, allows us to contribute more fully to the causes and communities that matter. We believe that meaningful legal work and social impact are not separate pursuits, but natural extensions of each other.
                </p>
                <a
                  href="https://www.asiasaf.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-accent hover:underline transition-smooth"
                >
                  Visit ASAFA — asiasaf.org <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Leaf, title: "SAF Policy Advocacy", desc: "Working with governments across Asia to develop supportive regulatory frameworks for sustainable aviation fuel mandates and incentives." },
                  { icon: Globe, title: "Market Development", desc: "Connecting SAF producers with airlines and airports to build viable supply chains and off-take agreements across Asia-Pacific." },
                  { icon: Users, title: "Industry Collaboration", desc: "Convening airlines, fuel producers, financiers, and regulators to align on standards, certification, and investment frameworks for SAF." },
                ].map((item, i) => (
                  <Card key={i} className="border border-border bg-card shadow-sm fade-in" style={{ transitionDelay: `${i * 80}ms` }}>
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <item.icon className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xs font-serif font-bold text-foreground mb-1">{item.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Yong-en Care Centre */}
        <section className="section-padding bg-secondary/20">
          <div className="max-w-5xl mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in">
              <div className="order-2 lg:order-1 space-y-4">
                {[
                  { icon: Heart, title: "Elder Care", desc: "Yong-en provides comprehensive elder care services including day care, home care, and dementia care programmes for seniors in the Chinatown community and beyond." },
                  { icon: Users, title: "Family Support", desc: "Holistic support for families in need — including children and youth programmes, financial assistance, and community outreach services." },
                  { icon: Globe, title: "Community Impact", desc: "Since 1996, Yong-en has served the Chinatown community with professional, compassionate care — a pillar of strength for vulnerable residents." },
                ].map((item, i) => (
                  <Card key={i} className="border border-border bg-card shadow-sm fade-in" style={{ transitionDelay: `${i * 80}ms` }}>
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <item.icon className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xs font-serif font-bold text-foreground mb-1">{item.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center">
                    <Heart className="h-5 w-5 text-accent" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent font-sans">Community & Pro Bono</p>
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
                  Supporting Yong-en Care Centre
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Beyond Horizons proudly supports <strong>Yong-en Care Centre</strong>, a non-profit organisation providing elder care, family support, and community services in Singapore's Chinatown district and beyond.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Founded in 1996, Yong-en has grown from small acts of community kindness into a professionally-run care organisation serving some of Singapore's most vulnerable residents — including seniors living alone, low-income families, and at-risk youth.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Our support reflects a simple conviction: that those who have been given much have a responsibility to give back. We are honoured to contribute to Yong-en's mission of compassionate, community-centred care.
                </p>
                <a
                  href="https://www.yong-en.org.sg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-accent hover:underline transition-smooth"
                >
                  Visit Yong-en Care Centre — yong-en.org.sg <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-16 bg-background">
          <div className="max-w-3xl mx-auto container-padding text-center fade-in">
            <div className="teal-line mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
              Our Commitment
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Corporate social responsibility is not a line item for us — it is woven into how we practise. Whether through founding industry associations that drive systemic change, supporting community organisations that care for the vulnerable, or providing pro bono legal advice to those who need it most, we aim to use our skills and platform for good.
            </p>
            <p className="text-sm text-muted-foreground/70 leading-relaxed">
              We welcome conversations with organisations working on sustainability, access to justice, and community development. If you believe we can help, please reach out.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-accent/5">
          <div className="max-w-3xl mx-auto container-padding text-center fade-in">
            <div className="teal-line mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Partner with us on social impact
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 text-base">
              We are always looking for meaningful ways to contribute. If your organisation is working on sustainability or community development, we would love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="bg-accent text-accent-foreground font-semibold shadow-lg hover:bg-accent/90" asChild>
                <a href="mailto:HL@beyondhorizons.sg?subject=CSR Partnership Enquiry">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
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

export default CSRPage;
