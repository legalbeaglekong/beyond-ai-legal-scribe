import React, { createContext, useContext, useState } from "react";

export type Language = "en" | "zh" | "ja" | "ko" | "ms" | "fr" | "es" | "pt" | "ar" | "hi" | "th";

export const LANGUAGE_OPTIONS: { code: Language; label: string; nativeLabel: string }[] = [
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "zh", label: "Chinese", nativeLabel: "中文" },
  { code: "ja", label: "Japanese", nativeLabel: "日本語" },
  { code: "ko", label: "Korean", nativeLabel: "한국어" },
  { code: "ms", label: "Malay", nativeLabel: "Bahasa Melayu" },
  { code: "fr", label: "French", nativeLabel: "Français" },
  { code: "es", label: "Spanish", nativeLabel: "Español" },
  { code: "pt", label: "Portuguese", nativeLabel: "Português" },
  { code: "ar", label: "Arabic", nativeLabel: "العربية" },
  { code: "hi", label: "Hindi", nativeLabel: "हिन्दी" },
  { code: "th", label: "Thai", nativeLabel: "ไทย" },
];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};

import { translations } from "./translations";

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem("site-language") as Language) || "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("site-language", lang);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    if (typeof value === "string") return value;
    // Fallback to English
    let fallback: any = translations.en;
    for (const k of keys) {
      fallback = fallback?.[k];
    }
    return typeof fallback === "string" ? fallback : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
