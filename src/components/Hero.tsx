import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import { STOCK_VIDEOS } from "@/lib/stock-videos";

const Hero = () => {
  return (
    <VideoBackground src={STOCK_VIDEOS.hero} className="min-h-screen flex items-center">
      <div className="min-h-screen flex items-center justify-center w-full">
        <div className="max-w-5xl mx-auto container-padding text-center py-32">
          {/* Teal accent line */}
          <div className="teal-line mx-auto mb-8" />

          <p className="text-sm md:text-base font-sans uppercase tracking-[0.3em] text-foreground/70 mb-6">
            Bethel Chambers LLC
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-4 leading-[0.95]">
            BEYOND
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-8 leading-[0.95]">
            HORIZONS
          </h1>

          <p className="text-xl md:text-2xl font-sans font-light text-foreground/80 mb-4 tracking-wide">
            Crafted for Visionaries
          </p>

          <div className="w-px h-12 bg-accent/40 mx-auto my-8" />

          <p className="text-base md:text-lg font-sans text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            A specialised legal service delivering strategic counsel across aviation, transportation, 
            energy transition, and emerging technology — with global reach from Singapore.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="default" size="lg" className="text-base px-8 py-6" asChild>
              <a 
                href="https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Stats bar like P&B results sidebar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-serif font-bold text-accent">$8B+</div>
              <div className="text-xs text-foreground/50 uppercase tracking-wider mt-1">Deal Value</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-serif font-bold text-accent">10+</div>
              <div className="text-xs text-foreground/50 uppercase tracking-wider mt-1">Jurisdictions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-serif font-bold text-accent">6 Years</div>
              <div className="text-xs text-foreground/50 uppercase tracking-wider mt-1">Chambers Ranked</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-serif font-bold text-accent">2026</div>
              <div className="text-xs text-foreground/50 uppercase tracking-wider mt-1">ALB Law Firm to Watch</div>
            </div>
          </div>
        </div>
      </div>
    </VideoBackground>
  );
};

export default Hero;
