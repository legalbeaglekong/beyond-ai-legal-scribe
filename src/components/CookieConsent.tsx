import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => { localStorage.setItem("cookie-consent", "accepted"); handleClose(); };
  const handleDecline = () => { localStorage.setItem("cookie-consent", "declined"); handleClose(); };
  const handleClose = () => { setIsAnimating(true); setTimeout(() => { setIsVisible(false); setIsAnimating(false); }, 300); };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 transform transition-all duration-300 ease-in-out ${isAnimating ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}>
      <div className="bg-background/95 backdrop-blur-sm border-t border-border shadow-hover">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-start gap-4 flex-1">
              <div className="flex-shrink-0"><Cookie className="h-5 w-5 text-muted-foreground mt-0.5" /></div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-medium text-foreground">{t("cookie.title")}</h3>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide font-light">{t("cookie.notice")}</span>
                </div>
                <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-2xl">{t("cookie.desc")}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <Button variant="outline" size="sm" onClick={handleDecline} className="text-xs font-medium uppercase tracking-wide border-border hover:bg-secondary hover:text-secondary-foreground transition-smooth">{t("cookie.decline")}</Button>
              <Button size="sm" onClick={handleAccept} className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-medium uppercase tracking-wide transition-smooth">{t("cookie.acceptAll")}</Button>
              <Button variant="ghost" size="sm" onClick={handleClose} className="text-muted-foreground hover:text-foreground p-2 h-auto"><X className="h-4 w-4" /></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
