import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Rocket, Globe } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="hero-background min-h-screen flex items-center justify-center">
      <div className="hero-content max-w-4xl mx-auto container-padding text-center text-white">
        {/* Logo/Title centered */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-semibold text-white mb-4 leading-none tracking-wide">
            BEYOND
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide mb-12">
            Horizons
          </p>
          <div className="w-full max-w-md mx-auto mt-12">
            <div className="relative">
              <input 
                type="text" 
                placeholder="" 
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-none backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
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