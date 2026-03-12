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
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      <div className="max-w-4xl mx-auto container-padding text-center text-white relative z-20">
        {/* Logo/Title centered */}
        <div className="mb-16">
          <div className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold text-white leading-none tracking-wide">
            <h1 className="mb-2">BEYOND</h1>
            <h1 className="mb-4">HORIZONS</h1>
          </div>
          
          {/* Tagline */}
          <div className="max-w-2xl mx-auto text-center mb-8 mt-8">
            <p className="text-2xl md:text-3xl text-white font-light mb-6 tracking-wide">
              Crafted for Visionaries
            </p>
            
            {/* Firm Name */}
            <div className="text-white/90 text-sm md:text-base font-medium leading-relaxed">
              <p className="mb-2">A specialised legal service delivered by</p>
              <p className="text-2xl md:text-3xl text-white font-light tracking-wide">
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