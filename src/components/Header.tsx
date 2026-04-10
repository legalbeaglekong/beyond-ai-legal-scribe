import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/en-us/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "About", href: isHome ? "#about" : "/#about" },
    { name: "Work", href: isHome ? "#practice-areas" : "/#practice-areas" },
    { name: "Insights", href: "https://beyondhorizons.substack.com/", external: true },
    { name: "Contact", href: isHome ? "#contact" : "/#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border/50" : "bg-transparent"
    }`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/lovable-uploads/c29b8821-0606-4c34-9200-3a769446e390.png" 
              alt="Beyond Horizons - Crafted for Visionaries" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => 
              item.external || item.href.startsWith("#") ? (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="text-foreground/70 hover:text-accent transition-smooth font-sans text-sm tracking-wider uppercase"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground/70 hover:text-accent transition-smooth font-sans text-sm tracking-wider uppercase"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button variant="outline" size="default" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground tracking-wider text-xs uppercase" asChild>
              <a 
                href="https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Consultation
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-accent transition-smooth"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border/50">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => 
                item.external || item.href.startsWith("#") ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-foreground/70 hover:text-accent transition-smooth text-sm uppercase tracking-wider py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-foreground/70 hover:text-accent transition-smooth text-sm uppercase tracking-wider py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <Button variant="outline" size="lg" className="w-full mt-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                <a 
                  href="https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Consultation
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
