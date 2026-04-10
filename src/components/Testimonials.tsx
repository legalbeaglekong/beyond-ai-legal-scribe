import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ExternalLink } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import { STOCK_VIDEOS } from "@/lib/stock-videos";

const Testimonials = () => {
  const chambersTestimonials = [
    { quote: "A fantastic lawyer and strategist with significant industry expertise.", source: "Chambers Asia-Pacific 2025", location: "Asia-Pacific Region" },
    { quote: "Offers very high-quality advice.", source: "Chambers Asia-Pacific 2025", location: "Asia-Pacific Region" },
    { quote: "Can always find the key issues and present solutions.", source: "Chambers Global 2024", location: "Singapore" },
  ];

  const recognition = [
    { title: "Chambers Global 2024", description: "Ranked in Aviation: Finance", years: "Global" },
    { title: "Chambers Asia-Pacific 2025", description: "Ranked in Aviation: Finance", years: "Asia-Pacific Region" },
    { title: "Legal 500 Asia Pacific", description: "Next Generation Partner", years: "2023" },
  ];

  return (
    <section className="relative">
      {/* Video divider */}
      <VideoBackground src={STOCK_VIDEOS.elegant} className="h-[35vh]">
        <div className="h-[35vh] flex items-center justify-center">
          <div className="text-center">
            <div className="teal-line mx-auto mb-6" />
            <p className="text-sm uppercase tracking-[0.3em] text-foreground/60 mb-4 font-sans">Awards & Recognition</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Verified Excellence
            </h2>
          </div>
        </div>
      </VideoBackground>

      <div className="section-padding bg-background">
        <div className="max-w-6xl mx-auto container-padding">
          {/* Chambers badge */}
          <div className="text-center mb-16">
            <a
              href="https://chambers.com/lawyer/hui-ling-teo-global-2:25705527"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 px-6 py-3 rounded-full text-accent text-sm hover:bg-accent/10 transition-smooth"
            >
              Chambers and Partners Approved
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Testimonial cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {chambersTestimonials.map((t, i) => (
              <Card key={i} className="border-border/50 bg-card card-lift">
                <CardContent className="p-8">
                  <Quote className="h-6 w-6 text-accent/40 mb-4" />
                  <blockquote className="text-foreground text-lg leading-relaxed mb-6 font-serif italic">
                    "{t.quote}"
                  </blockquote>
                  <div className="text-right">
                    <div className="text-xs text-accent font-sans uppercase tracking-wider">{t.source}</div>
                    <div className="text-xs text-muted-foreground mt-1">{t.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Rankings */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {recognition.map((item, i) => (
              <div key={i} className="text-center p-6 border border-border/30 rounded">
                <h3 className="text-base font-serif font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                <span className="text-xs text-accent uppercase tracking-wider">{item.years}</span>
              </div>
            ))}
          </div>

          {/* Attributes */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Strategic Thinking", desc: "Business perspective beyond legal" },
              { title: "Creative Solutions", desc: "Innovative approaches to complex challenges" },
              { title: "Global Expertise", desc: "Cross-border transaction mastery" },
              { title: "Commercial Mindset", desc: "Excellent understanding of business needs" },
            ].map((attr, i) => (
              <div key={i} className="text-center">
                <div className="w-2 h-2 bg-accent rounded-full mx-auto mb-4" />
                <h4 className="font-serif font-bold text-foreground mb-2 text-sm">{attr.title}</h4>
                <p className="text-xs text-muted-foreground">{attr.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
