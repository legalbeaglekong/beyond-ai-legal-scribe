import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Rocket, Globe } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="section-padding min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-5xl mx-auto container-padding text-center">
        {/* Tagline */}
        <div className="mb-16">
          <p className="text-muted-foreground font-light text-sm uppercase tracking-wide mb-2">
            Crafted for Visionaries
          </p>
          <p className="text-muted-foreground font-light text-xs uppercase tracking-wide">
            Pioneering AI-Native Legal Services
          </p>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight">
          Elite Legal Expertise
        </h1>

        {/* Subheader */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-muted-foreground mb-12 leading-tight">
          Clarity in Complexity
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto font-light">
          Led by seasoned partners from the world's top firms, we deliver superior, efficient outcomes 
          in high-stakes restructuring and complex cross-border transactions across Asia.
        </p>

        {/* Outcomes-Based Pricing Highlight */}
        <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/20 rounded-lg p-6 mb-16 max-w-2xl mx-auto">
          <p className="text-lg font-medium text-primary mb-2">Outcomes-Based Pricing</p>
          <p className="text-muted-foreground text-sm">
            Transparent, performance-driven fees aligned with your success. No hourly billing complexity.
          </p>
        </div>

        {/* Key Value Props */}
        <div className="flex flex-wrap justify-center items-center gap-12 mb-16 text-muted-foreground">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-foreground rounded-full"></div>
            <span className="font-light text-sm">Global Market Leader</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-foreground rounded-full"></div>
            <span className="font-light text-sm">Innovation-First Approach</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-foreground rounded-full"></div>
            <span className="font-light text-sm">Chambers & Partners Ranked</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <Button variant="default" size="lg" className="text-base px-12 py-4" asChild>
            <a 
              href="https://outlook.office.com/bookwithme/user/c79273fd7b174b88a10e537f3ae6e251@huilinglawoffice.com/meetingtype/gilpmYHK-EawFiSPKhEVhQ2?anonymous&ep=mlink&ismsaljsauthenabled=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Strategic Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="text-base px-12 py-4">
            Explore Our Expertise
          </Button>
        </div>

        {/* Credentials Preview */}
        <div className="text-muted-foreground">
          <hr className="minimal-divider max-w-xs mx-auto mb-8" />
          <p className="font-light text-sm">
            Trusted by industry leaders • USD 2.8B+ in transformational deals • Band 3 Global Ranking
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;