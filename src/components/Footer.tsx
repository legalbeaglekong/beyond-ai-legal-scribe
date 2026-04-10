import { MapPin, Mail, Linkedin, BookOpen, Scale, Rocket, MessageCircle } from "lucide-react";

const Footer = () => {
  const practiceAreas = [
    "Strategic Legal Consultation",
    "Transaction Structuring",
    "Regulatory Compliance",
    "ESG & Sustainability Advisory",
    "Cross-border Deal Support",
    "Innovation Legal Framework",
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border/30">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-1">Beyond Horizons</h3>
                <p className="text-xs text-muted-foreground">Bethel Chambers LLC</p>
                <div className="teal-line mt-3" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Delivering strategic legal excellence and innovative frameworks for visionary clients.
              </p>
              <div className="space-y-2 text-xs text-muted-foreground">
                <p>Chambers Global 2025 - Band 3</p>
                <p>Legal 500 Next Generation Partner</p>
              </div>
            </div>

            {/* Practice Areas */}
            <div className="space-y-6">
              <h4 className="text-sm font-sans uppercase tracking-wider text-accent">Practice Areas</h4>
              <ul className="space-y-2">
                {practiceAreas.map((area, i) => (
                  <li key={i}>
                    <a href="#practice-areas" className="text-xs text-muted-foreground hover:text-accent transition-smooth">{area}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <h4 className="text-sm font-sans uppercase tracking-wider text-accent">Resources</h4>
              <ul className="space-y-2">
                {["Strategic Business Advisory", "Industry Insights Newsletter", "Speaking Engagements", "Legal Publications"].map((r, i) => (
                  <li key={i}>
                    <a href="#" className="text-xs text-muted-foreground hover:text-accent transition-smooth flex items-center">
                      <BookOpen className="h-3 w-3 mr-2" />{r}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h4 className="text-sm font-sans uppercase tracking-wider text-accent">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-muted-foreground">
                    <div>39B Neil Rd (Level 3)</div>
                    <div>Singapore 088823</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-accent" />
                  <a href="mailto:hl@huilinglawoffice.com" className="text-xs text-muted-foreground hover:text-accent transition-smooth">hl@huilinglawoffice.com</a>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4 text-accent" />
                  <a href="https://wa.me/6597265330" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-accent transition-smooth">Chat on WhatsApp</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Linkedin className="h-4 w-4 text-accent" />
                  <a href="https://www.linkedin.com/company/beyondhorizonslegal" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-accent transition-smooth">Connect on LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-border/30" />

        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs text-muted-foreground">
              © 2024 Beyond Horizons, Bethel Chambers LLC. All rights reserved.
            </div>
            <a href="https://bethelchambers.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-accent transition-smooth">
              Privacy Policy
            </a>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1.5">
              <Rocket className="h-3 w-3 text-accent" /><span>Strategic Legal Innovation</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <BookOpen className="h-3 w-3 text-accent" /><span>Global Business Advisory</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Scale className="h-3 w-3 text-accent" /><span>$8B+ Transformational Deals in 2024 & 2025</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
