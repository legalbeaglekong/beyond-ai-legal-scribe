import { Button } from "@/components/ui/button";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage, LANGUAGE_OPTIONS } from "@/i18n/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/en-us/";
  const { language, setLanguage, t } = useLanguage();
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleHashNavigation = (e: React.MouseEvent, hash: string) => {
    if (isHome) {
      e.preventDefault();
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigation = [
    { name: t("nav.about"), href: isHome ? "#about" : "/#about", hash: "#about" },
    { name: t("nav.work"), href: isHome ? "#practice-areas" : "/#practice-areas", hash: "#practice-areas" },
    { name: t("nav.team"), href: isHome ? "#team" : "/#team", hash: "#team" },
    { name: t("nav.insights"), href: "https://beyondhorizons.substack.com/", external: true },
    { name: t("nav.contact"), href: isHome ? "#contact" : "/#contact", hash: "#contact" },
  ];

  const currentLang = LANGUAGE_OPTIONS.find(l => l.code === language);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border/50" : "bg-transparent"
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/lovable-uploads/c29b8821-0606-4c34-9200-3a769446e390.png" 
              alt="Beyond Horizons - Crafted for Visionaries" 
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navigation.map((item) => 
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-accent transition-smooth font-sans text-sm tracking-wider uppercase"
                >
                  {item.name}
                </a>
              ) : item.hash && isHome ? (
                <a
                  key={item.name}
                  href={item.hash}
                  onClick={(e) => handleHashNavigation(e, item.hash!)}
                  className="text-foreground/70 hover:text-accent transition-smooth font-sans text-sm tracking-wider uppercase"
                >
                  {item.name}
                </a>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/70 hover:text-accent transition-smooth font-sans text-sm tracking-wider uppercase"
                >
                  {item.name}
                </a>
              )
            )}
          </div>

          {/* CTA + Language Dropdown */}
          <div className="hidden md:flex items-center space-x-4">
            <div ref={langRef} className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 text-foreground/70 hover:text-accent transition-smooth text-xs uppercase tracking-wider font-sans"
              >
                <Globe className="h-4 w-4" />
                {currentLang?.nativeLabel}
                <ChevronDown className={`h-3 w-3 transition-transform ${isLangOpen ? "rotate-180" : ""}`} />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-background border border-border/50 rounded-md shadow-lg py-1 z-50 max-h-80 overflow-y-auto">
                  {LANGUAGE_OPTIONS.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setLanguage(lang.code); setIsLangOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-accent/10 transition-smooth flex items-center justify-between ${
                        language === lang.code ? "text-accent font-medium" : "text-foreground/70"
                      }`}
                    >
                      <span>{lang.nativeLabel}</span>
                      <span className="text-xs text-muted-foreground">{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Button variant="outline" size="default" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground tracking-wider text-xs uppercase" asChild>
              <a 
                href="https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("nav.schedule")}
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
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-foreground/70 hover:text-accent transition-smooth text-sm uppercase tracking-wider py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-foreground/70 hover:text-accent transition-smooth text-sm uppercase tracking-wider py-2"
                    onClick={(e) => {
                      if (item.hash && isHome) handleHashNavigation(e, item.hash);
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </a>
                )
              )}
              {/* Mobile language selector */}
              <div className="border-t border-border/30 pt-4">
                <button
                  onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                  className="flex items-center gap-1.5 text-foreground/70 hover:text-accent transition-smooth text-sm uppercase tracking-wider py-2 w-full"
                >
                  <Globe className="h-4 w-4" />
                  {currentLang?.nativeLabel}
                  <ChevronDown className={`h-3 w-3 transition-transform ${isMobileLangOpen ? "rotate-180" : ""}`} />
                </button>
                {isMobileLangOpen && (
                  <div className="ml-6 space-y-1 mt-1">
                    {LANGUAGE_OPTIONS.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setLanguage(lang.code); setIsMobileLangOpen(false); setIsMenuOpen(false); }}
                        className={`block w-full text-left py-1.5 text-sm transition-smooth ${
                          language === lang.code ? "text-accent font-medium" : "text-foreground/60 hover:text-accent"
                        }`}
                      >
                        {lang.nativeLabel} <span className="text-xs text-muted-foreground">({lang.label})</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <Button variant="outline" size="lg" className="w-full mt-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                <a 
                  href="https://outlook.office.com/book/BeyondHorizonsbyBethelChambersLLC@huilinglawoffice.com/?ismsaljsauthenabled"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("nav.schedule")}
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
