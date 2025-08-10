import { 
  MapPin, 
  Mail, 
  Linkedin, 
  BookOpen, 
  Scale,
  Rocket,
  Plane,
  MessageCircle
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
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto container-padding">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid lg:grid-cols-4 gap-16">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2 accent-dot">Beyond Horizons</h3>
                <p className="text-muted-foreground text-sm font-light">Bethel Chambers LLC</p>
                <span className="text-foreground text-xs font-medium uppercase tracking-wide mt-3 inline-block">
                  Global Market Leader
                </span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed font-light">
                Pioneering legal solutions for transportation and space innovation, 
                empowering visionary clients to shape tomorrow's industries.
              </p>

              {/* Recognition */}
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground font-light">
                  Chambers Global 2025 - Band 3
                </div>
                <div className="text-sm text-muted-foreground font-light">
                  Legal 500 Next Generation Partner
                </div>
              </div>
            </div>

            {/* Practice Areas */}
            <div className="space-y-8">
              <h4 className="text-lg font-medium text-foreground">Practice Areas</h4>
              <ul className="space-y-3">
                {practiceAreas.map((area, index) => (
                  <li key={index}>
                    <a 
                      href="#practice-areas" 
                      className="text-muted-foreground hover:text-foreground transition-smooth text-sm font-light"
                    >
                      {area}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-8">
              <h4 className="text-lg font-medium text-foreground">Resources & Insights</h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-foreground transition-smooth text-sm font-light flex items-center space-x-2"
                    >
                      <resource.icon className="h-4 w-4" />
                      <span>{resource.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <h4 className="text-lg font-medium text-foreground">Contact Information</h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                  <div className="text-muted-foreground text-sm font-light">
                    <div>39B Neil Rd (Level 3)</div>
                    <div>Singapore 088823</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-foreground" />
                  <a 
                    href="mailto:hl@huilinglawoffice.com"
                    className="text-muted-foreground hover:text-foreground transition-smooth text-sm font-light"
                  >
                    hl@huilinglawoffice.com
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-foreground" />
                  <a 
                    href="https://wa.me/6597265330"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-smooth text-sm font-light"
                  >
                    Chat on WhatsApp
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Linkedin className="h-5 w-5 text-foreground" />
                  <a 
                    href="https://www.linkedin.com/company/beyondhorizonslegal" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-smooth text-sm font-light"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="minimal-divider" />

        {/* Bottom Footer */}
        <div className="py-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-muted-foreground text-sm font-light">
              © 2024 Beyond Horizons, Bethel Chambers LLC. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-muted-foreground font-light">
              <a href="https://bethelchambers.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-smooth">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-smooth">Professional Standards</a>
            </div>
          </div>

          {/* Special Recognition */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap justify-center items-center gap-8 text-xs text-muted-foreground font-light">
              <div className="flex items-center space-x-2">
                <Plane className="h-4 w-4 text-foreground" />
                <span>Aviation Finance Excellence</span>
              </div>
              <div className="flex items-center space-x-2">
                <Rocket className="h-4 w-4 text-foreground" />
                <span>Space Innovation Legal Pioneer</span>
              </div>
              <div className="flex items-center space-x-2">
                <Scale className="h-4 w-4 text-foreground" />
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