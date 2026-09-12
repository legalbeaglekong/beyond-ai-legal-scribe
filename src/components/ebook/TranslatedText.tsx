import { useEffect, useState, type ElementType } from "react";
import { useTranslation } from "@/contexts/TranslationContext";

interface TranslatedTextProps {
  children: string;
  textKey: string;
  as?: ElementType;
  className?: string | undefined;
}

const TranslatedText = ({ children, textKey, as: Component = "span", className }: TranslatedTextProps) => {
  const { targetLanguage, translateText, translatedContent } = useTranslation();
  const [displayText, setDisplayText] = useState(children);

  useEffect(() => {
    if (!targetLanguage) {
      setDisplayText(children);
      return;
    }

    const cacheKey = `${targetLanguage}:${textKey}`;
    if (translatedContent[cacheKey]) {
      setDisplayText(translatedContent[cacheKey]);
      return;
    }

    translateText(textKey, children).then(translated => {
      setDisplayText(translated);
    });
  }, [targetLanguage, children, textKey, translateText, translatedContent]);

  return <Component className={className}>{displayText}</Component>;
};

export default TranslatedText;
