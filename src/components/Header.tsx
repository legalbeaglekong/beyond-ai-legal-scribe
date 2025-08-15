import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "ABOUT", href: "#about" },
    { name: "EXPERTISE", href: "#expertise" },
    { name: "INSIGHTS", href: "https://beyondhorizons.substack.com/", external: true },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 shadow-minimal">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/c29b8821-0606-4c34-9200-3a769446e390.png" 
              alt="Beyond Horizons - Crafted for Visionaries" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="text-muted-foreground hover:text-foreground transition-smooth font-normal text-sm tracking-wider"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" size="lg" asChild>
              <a 
                href="https://outlook.office.com/bookwithme/user/c79273fd7b174b88a10e537f3ae6e251@huilinglawoffice.com/meetingtype/gilpmYHK-EawFiSPKhEVhQ2?anonymous&ep=mlink&ismsaljsauthenabled=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Consultation
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-accent transition-smooth"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border mt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-accent transition-smooth font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button variant="default" size="lg" className="w-full" asChild>
                  <a 
                    href="https://outlook.office.com/bookwithme/user/c79273fd7b174b88a10e537f3ae6e251@huilinglawoffice.com/meetingtype/gilpmYHK-EawFiSPKhEVhQ2?anonymous&ep=mlink&ismsaljsauthenabled=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule Consultation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;