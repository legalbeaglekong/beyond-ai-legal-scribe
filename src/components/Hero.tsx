import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Rocket, Globe } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="section-padding min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-5xl mx-auto container-padding text-center">
        {/* Tagline */}
        <div className="mb-24">
          <p className="text-muted-foreground font-light text-sm uppercase tracking-wide">
            Crafted for Visionaries
          </p>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-16 leading-tight">
          Elite Legal Expertise.
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-16 leading-relaxed max-w-4xl mx-auto font-light">
          Led by seasoned partners from the world's top firms, we deliver superior, efficient outcomes 
          in high-stakes restructuring and complex cross-border transactions across Asia.
        </p>

        {/* Outcomes-Based Pricing Highlight */}
        <div className="bg-secondary border border-border rounded p-8 mb-24 max-w-2xl mx-auto">
          <p className="text-lg font-medium text-foreground mb-3">Outcomes-Based Pricing</p>
          <p className="text-muted-foreground">
            Transparent, performance-driven fees aligned with your success. No hourly billing complexity.
          </p>
        </div>

        {/* Key Value Props */}
        <div className="flex flex-wrap justify-center items-center gap-16 mb-24 text-muted-foreground">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-foreground rounded-full"></div>
            <span className="font-light">Global Market Leader</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-foreground rounded-full"></div>
            <span className="font-light">Innovation-First Approach</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-foreground rounded-full"></div>
            <span className="font-light">Chambers & Partners Ranked</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-32">
          <Button variant="default" size="lg" className="text-base px-16 py-4" asChild>
            <a 
              href="https://outlook.office.com/bookwithme/user/c79273fd7b174b88a10e537f3ae6e251@huilinglawoffice.com/meetingtype/gilpmYHK-EawFiSPKhEVhQ2?anonymous&ep=mlink&ismsaljsauthenabled=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Strategic Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="text-base px-16 py-4">
            Explore Our Expertise
          </Button>
        </div>

        {/* Credentials Preview */}
        <div className="text-muted-foreground">
          <hr className="minimal-divider max-w-xs mx-auto mb-12" />
          <p className="font-light">
            Trusted by industry leaders • USD 2.8B+ in transformational deals • Band 3 Global Ranking
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;