import { Button } from "@/components/ui/button";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage, LANGUAGE_OPTIONS } from "@/i18n/LanguageContext";

const workSubLinks = [
  { name: "Our Work", href: "/work" },
  { name: "AI Tools", href: "/ai-tools" },
  { name: "Why Specialist Counsel", href: "/why-specialist-counsel" },
  { name: "CSR", href: "/work/csr" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [isMobileWorkOpen, setIsMobileWorkOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/en-us/";
  const { language, setLanguage, t } = useLanguage();
  const langRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);

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
      if (workRef.current && !workRef.current.contains(e.target as Node)) {
        setIsWorkOpen(false);
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
    { name: t("nav.work"), href: isHome ? "#practice-areas" : "/#practice-areas", hash: "#practice-areas", hasDropdown: true },
    { name: t("nav.team"), href: isHome ? "#team" : "/#team", hash: "#team" },
    { name: t("nav.insights"), href: "https://beyondhorizons.substack.com/", external: true },
    { name: t("nav.contact"), href: isHome ? "#contact" : "/#contact", hash: "#contact" },
  ];

  const currentLang = LANGUAGE_OPTIONS.find(l => l.code === language);

  const navLinkClass = "text-foreground/70 hover:text-accent transition-smooth font-sans text-xs tracking-widest uppercase whitespace-nowrap";

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

          {/* Desktop Navigation + Actions */}
          <div className="hidden lg:flex items-center gap-7">
            {navigation.map((item) => {
              // Work dropdown
              if (item.hasDropdown) {
                return (
                  <div key={item.name} ref={workRef} className="relative">
                    <button
                      onClick={() => setIsWorkOpen(!isWorkOpen)}
                      className={`${navLinkClass} flex items-center gap-1`}
                    >
                      {item.name}
                      <ChevronDown className={`h-3 w-3 transition-transform ${isWorkOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isWorkOpen && (
                      <div className="absolute left-0 mt-2 w-56 bg-background border border-border/50 rounded-md shadow-lg py-1 z-50">
                        {/* Hash link to practice areas on homepage */}
                        <a
                          href={item.href}
                          onClick={(e) => {
                            if (item.hash && isHome) handleHashNavigation(e, item.hash);
                            setIsWorkOpen(false);
                          }}
                          className="block px-4 py-2.5 text-sm text-foreground/70 hover:bg-accent/10 hover:text-accent transition-smooth"
                        >
                          Practice Areas
                        </a>
                        {workSubLinks.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            onClick={() => setIsWorkOpen(false)}
                            className="block px-4 py-2.5 text-sm text-foreground/70 hover:bg-accent/10 hover:text-accent transition-smooth"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (item.external) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={navLinkClass}
                  >
                    {item.name}
                  </a>
                );
              }

              if (item.hash && isHome) {
                return (
                  <a
                    key={item.name}
                    href={item.hash}
                    onClick={(e) => handleHashNavigation(e, item.hash!)}
                    className={navLinkClass}
                  >
                    {item.name}
                  </a>
                );
              }

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={navLinkClass}
                >
                  {item.name}
                </a>
              );
            })}

            {/* Separator */}
            <div className="w-px h-5 bg-border/60" />

            {/* Language Dropdown */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 text-foreground/60 hover:text-accent transition-smooth text-xs uppercase tracking-wider font-sans whitespace-nowrap"
              >
                <Globe className="h-3.5 w-3.5" />
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

            {/* CTA */}
            <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground tracking-wider text-xs uppercase whitespace-nowrap" asChild>
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
            className="lg:hidden text-foreground hover:text-accent transition-smooth"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-sm border-t border-border/50">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => {
                // Work with sub-links on mobile
                if (item.hasDropdown) {
                  return (
                    <div key={item.name}>
                      <button
                        onClick={() => setIsMobileWorkOpen(!isMobileWorkOpen)}
                        className="flex items-center gap-1.5 text-foreground/70 hover:text-accent transition-smooth text-sm uppercase tracking-wider py-2 w-full"
                      >
                        {item.name}
                        <ChevronDown className={`h-3 w-3 transition-transform ${isMobileWorkOpen ? "rotate-180" : ""}`} />
                      </button>
                      {isMobileWorkOpen && (
                        <div className="ml-4 space-y-1 mt-1 border-l border-border/30 pl-4">
                          <a
                            href={item.href}
                            onClick={(e) => {
                              if (item.hash && isHome) handleHashNavigation(e, item.hash);
                              setIsMenuOpen(false);
                            }}
                            className="block text-foreground/60 hover:text-accent transition-smooth text-sm py-1.5"
                          >
                            Practice Areas
                          </a>
                          {workSubLinks.map((sub) => (
                            <Link
                              key={sub.href}
                              to={sub.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block text-foreground/60 hover:text-accent transition-smooth text-sm py-1.5"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                if (item.external) {
                  return (
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
                  );
                }

                return (
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
                );
              })}

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
