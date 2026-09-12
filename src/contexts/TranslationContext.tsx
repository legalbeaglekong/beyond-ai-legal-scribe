import { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

interface TranslationContextType {
  targetLanguage: string | null;
  isTranslating: boolean;
  translatedContent: Record<string, string>;
  setTargetLanguage: (lang: string | null) => void;
  translateText: (key: string, text: string) => Promise<string>;
  clearTranslations: () => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const SUPPORTED_LANGUAGES = [
  { code: "de", name: "Deutsch", englishName: "German" },
  { code: "zh", name: "简体中文", englishName: "Chinese (Simplified)" },
  { code: "zh-TW", name: "繁體中文", englishName: "Chinese (Traditional)" },
  { code: "ja", name: "日本語", englishName: "Japanese" },
  { code: "ko", name: "한국어", englishName: "Korean" },
  { code: "vi", name: "Tiếng Việt", englishName: "Vietnamese" },
  { code: "th", name: "ไทย", englishName: "Thai" },
  { code: "id", name: "Bahasa Indonesia", englishName: "Indonesian" },
  { code: "ms", name: "Bahasa Melayu", englishName: "Malay" },
  { code: "es", name: "Español", englishName: "Spanish" },
  { code: "fr", name: "Français", englishName: "French" },
  { code: "ar", name: "العربية", englishName: "Arabic" },
];

export { SUPPORTED_LANGUAGES };

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [targetLanguage, setTargetLanguage] = useState<string | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [translatedContent, setTranslatedContent] = useState<Record<string, string>>({});

  const setTargetLanguageWithLog = useCallback((lang: string | null) => {
    console.log("[translation] setTargetLanguage:", lang);
    setTargetLanguage(lang);
  }, []);

  const clearTranslations = useCallback(() => {
    setTranslatedContent({});
    setTargetLanguage(null);
  }, []);

  const translateText = useCallback(async (key: string, text: string): Promise<string> => {
    if (!targetLanguage) return text;
    
    const cacheKey = `${targetLanguage}:${key}`;
    if (translatedContent[cacheKey]) {
      return translatedContent[cacheKey];
    }

    setIsTranslating(true);
    try {
      const { data, error } = await supabase.functions.invoke("translate", {
        body: { text, targetLanguage },
      });

      if (error) throw error;
      
      const translated = data?.translatedText || text;
      setTranslatedContent(prev => ({ ...prev, [cacheKey]: translated }));
      return translated;
    } catch (error) {
      console.error("Translation error:", error);
      return text;
    } finally {
      setIsTranslating(false);
    }
  }, [targetLanguage, translatedContent]);

  return (
    <TranslationContext.Provider value={{ 
      targetLanguage, 
      isTranslating, 
      translatedContent,
      setTargetLanguage: setTargetLanguageWithLog,
      translateText,
      clearTranslations 
    }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within TranslationProvider");
  }
  return context;
};
