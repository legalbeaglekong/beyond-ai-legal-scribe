import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  BookOpen, 
  Scale,
  Rocket,
  Plane
} from "lucide-react";

const Footer = () => {
  const practiceAreas = [
    "Aviation & Aircraft Engines",
    "Maritime Innovations",
    "Low Carbon & Alternative Fuels",
    "Complex Transaction Structuring",
    "Space Exploration & Commercialization",
  ];

  const resources = [
    { name: "ESG for Aerospace & Defense", icon: BookOpen },
    { name: "Industry Insights Newsletter", icon: BookOpen },
    { name: "Speaking Engagements", icon: BookOpen },
    { name: "Legal Publications", icon: BookOpen },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gold mb-2">Beyond Horizons</h3>
                <p className="text-primary-foreground/80 text-sm">Bethel Chambers LLC</p>
                <Badge variant="outline" className="mt-3 border-gold text-gold">
                  Global Market Leader
                </Badge>
              </div>
              
              <p className="text-primary-foreground/80 leading-relaxed">
                Pioneering legal solutions for transportation and space innovation, 
                empowering visionary clients to shape tomorrow's industries.
              </p>

              {/* Recognition */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Scale className="h-4 w-4 text-gold" />
                  <span className="text-sm text-primary-foreground/80">
                    Chambers Global 2025 - Band 3
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Scale className="h-4 w-4 text-gold" />
                  <span className="text-sm text-primary-foreground/80">
                    Legal 500 Next Generation Partner
                  </span>
                </div>
              </div>
            </div>

            {/* Practice Areas */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gold">Practice Areas</h4>
              <ul className="space-y-3">
                {practiceAreas.map((area, index) => (
                  <li key={index}>
                    <a 
                      href="#practice-areas" 
                      className="text-primary-foreground/80 hover:text-gold transition-smooth text-sm flex items-center space-x-2"
                    >
                      <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                      <span>{area}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gold">Resources & Insights</h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-primary-foreground/80 hover:text-gold transition-smooth text-sm flex items-center space-x-2"
                    >
                      <resource.icon className="h-4 w-4" />
                      <span>{resource.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gold">Contact Information</h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <div className="text-primary-foreground/80 text-sm">
                    <div>16 Collyer Quay, #10-00</div>
                    <div>Income at Raffles</div>
                    <div>Singapore 049318</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gold" />
                  <span className="text-primary-foreground/80 text-sm">+65 6223 1910</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gold" />
                  <span className="text-primary-foreground/80 text-sm">hlteo@bethelchambers.com</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Linkedin className="h-5 w-5 text-gold" />
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-gold transition-smooth text-sm"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © 2024 Beyond Horizons, Bethel Chambers LLC. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/80">
              <a href="#" className="hover:text-gold transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-smooth">Terms of Service</a>
              <a href="#" className="hover:text-gold transition-smooth">Professional Standards</a>
            </div>
          </div>

          {/* Special Recognition */}
          <div className="mt-6 pt-6 border-t border-primary-foreground/20">
            <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-primary-foreground/60">
              <div className="flex items-center space-x-2">
                <Plane className="h-4 w-4 text-gold" />
                <span>Aviation Finance Excellence</span>
              </div>
              <div className="flex items-center space-x-2">
                <Rocket className="h-4 w-4 text-gold" />
                <span>Space Innovation Legal Pioneer</span>
              </div>
              <div className="flex items-center space-x-2">
                <Scale className="h-4 w-4 text-gold" />
                <span>$2.8B+ Transformational Deals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;