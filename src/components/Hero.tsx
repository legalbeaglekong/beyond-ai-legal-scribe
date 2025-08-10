import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Rocket, Globe } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Professional legal office with futuristic transportation technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Scale className="h-5 w-5 text-gold" />
            <span className="text-gold font-sans-light text-sm uppercase tracking-[0.2em]">
              Legal Innovation for Tomorrow's Leaders
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif-heading font-bold text-primary-foreground mb-6 leading-tight">
            Pioneering Legal Solutions for{" "}
            <span className="text-gold accent-dot">Transportation</span>{" "}
            <span className="divider-line text-gold">Space Innovation</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed max-w-3xl mx-auto font-sans-light">
            Empowering visionary clients who are shaping the future of aviation, maritime, space exploration, 
            and sustainable technologies with bespoke legal strategies.
          </p>

          {/* Key Value Props */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-10 text-primary-foreground/80">
            <div className="flex items-center space-x-3">
              <Globe className="h-5 w-5 text-gold" />
              <span className="font-sans-light text-sm tracking-wide">Global Market Leader</span>
            </div>
            <div className="flex items-center space-x-3">
              <Rocket className="h-5 w-5 text-gold" />
              <span className="font-sans-light text-sm tracking-wide">Innovation-First Approach</span>
            </div>
            <div className="flex items-center space-x-3">
              <Scale className="h-5 w-5 text-gold" />
              <span className="font-sans-light text-sm tracking-wide">Chambers & Partners Ranked</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="premium" size="lg" className="text-lg px-8 py-4">
              Schedule Strategic Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Explore Our Expertise
            </Button>
          </div>

          {/* Credentials Preview */}
          <div className="mt-12 text-primary-foreground/70">
            <p className="font-sans-light text-sm tracking-wide">
              Trusted by industry leaders • USD 2.8B+ in transformational deals • Band 3 Global Ranking
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;