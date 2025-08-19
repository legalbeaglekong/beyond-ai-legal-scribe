import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Rocket, Globe } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroBannerBg from "@/assets/hero-banner-bg.jpg";

const Hero = () => {
  return (
    <section 
      className="hero-background min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${heroBannerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="hero-content max-w-4xl mx-auto container-padding text-center text-white">
        {/* Logo/Title centered */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-semibold text-white mb-4 leading-none tracking-wide">
            BEYOND
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide mb-8">
            Horizons
          </p>
          
          {/* Tagline */}
          <div className="max-w-2xl mx-auto text-center mb-8">
            <p className="text-2xl md:text-3xl text-white font-light mb-6 tracking-wide">
              Crafted for Visionaries
            </p>
            
            {/* Firm Name */}
            <div className="text-white/70 text-sm md:text-base font-light leading-relaxed">
              <p className="mb-2">A specialised legal service delivered by</p>
              <p className="text-white/90 font-medium">Bethel Chambers LLC</p>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-white/80">
          <div className="flex flex-col items-center space-y-2">
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span className="text-xs uppercase tracking-wider opacity-60">Scroll</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;