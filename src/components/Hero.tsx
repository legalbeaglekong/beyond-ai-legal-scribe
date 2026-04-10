import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import singaporePanorama from "@/assets/singapore-panorama.jpg";
import industryAviation from "@/assets/industry-aviation.jpg";
import industryRobotics from "@/assets/industry-robotics.jpg";
import industryTransportation from "@/assets/industry-transportation.jpg";
import industryEnergy from "@/assets/industry-energy.jpg";

const Hero = () => {
  return (
    <section className="bg-background">
      {/* Pictet-style: text on light bg, then large image */}
      <div className="pt-28 pb-8 max-w-5xl mx-auto container-padding">
        <p className="text-sm text-muted-foreground mb-6">
          Beyond Horizons by Bethel Chambers LLC | Strategic legal counsel since Singapore
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.05] mb-8 max-w-4xl">
          Beyond Horizons. Crafted for visionaries in industrial law.
        </h1>
        <a
          href="#about"
          className="text-foreground link-underline text-base inline-flex items-center hover:text-accent transition-smooth"
        >
          Find out more
        </a>
      </div>

      {/* Hero image — full width like Pictet */}
      <div className="px-4 md:px-8 pb-16">
        <img
          src={singaporePanorama}
          alt="Singapore skyline at dusk"
          className="w-full h-[50vh] md:h-[60vh] object-cover rounded-sm"
        />
      </div>

      {/* Stats strip */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto container-padding py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-3xl md:text-4xl font-serif font-bold text-accent">$8B+</div>
            <div className="text-sm text-muted-foreground mt-1">Deal value in 2024 & 2025</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-serif font-bold text-accent">10+</div>
            <div className="text-sm text-muted-foreground mt-1">Jurisdictions</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-serif font-bold text-accent">6 Yrs</div>
            <div className="text-sm text-muted-foreground mt-1">Chambers ranked</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-serif font-bold text-accent">2026</div>
            <div className="text-sm text-muted-foreground mt-1">ALB Law Firm to Watch</div>
          </div>
        </div>
      </div>

      {/* Industry image strip like Pictet's sailing image */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto container-padding py-16">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Select your industry to view relevant expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-10">
            We serve clients across niche industrial sectors — from aviation finance and robotics to energy transition and cross-border trade. Our deep sector knowledge ensures targeted legal solutions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: industryAviation, label: "Aviation", href: "/industry/aviation" },
              { img: industryRobotics, label: "Robotics", href: "/industry/robotics" },
              { img: industryTransportation, label: "Transportation", href: "/industry/transportation" },
              { img: industryEnergy, label: "Energy Transition", href: "/industry/energy-transition" },
            ].map((item) => (
              <a key={item.label} href={item.href} className="group block">
                <div className="overflow-hidden rounded-sm mb-2">
                  <img
                    src={item.img}
                    alt={`${item.label} industry`}
                    className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <span className="text-sm text-foreground group-hover:text-accent transition-smooth font-medium">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
