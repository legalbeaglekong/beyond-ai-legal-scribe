import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Rocket, Globe } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroBannerBg from "@/assets/hero-banner-bg.jpg";
import singaporeSkyline from "@/assets/singapore-skyline.jpg";

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${singaporeSkyline})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay to ensure text visibility */}
      <div className="absolute inset-0 bg-black/[0.99] z-10"></div>
      <div className="max-w-4xl mx-auto container-padding text-center relative z-20" style={{ color: '#ffffff' }}>
        {/* Logo/Title centered */}
        <div className="mb-16">
          <div className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold leading-none tracking-wide" style={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
            <h1 className="mb-2">BEYOND</h1>
            <h1 className="mb-4">HORIZONS</h1>
          </div>
          
          {/* Tagline */}
          <div className="max-w-2xl mx-auto text-center mb-8 mt-8">
            <p className="text-2xl md:text-3xl font-light mb-6 tracking-wide" style={{ color: '#ffffff', textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>
              Crafted for Visionaries
            </p>
            
            {/* Firm Name */}
            <div className="text-sm md:text-base font-medium leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              <p className="mb-2">A specialised legal service delivered by</p>
              <p className="text-2xl md:text-3xl font-light tracking-wide" style={{ color: '#ffffff' }}>
                Bethel Chambers LLC
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;