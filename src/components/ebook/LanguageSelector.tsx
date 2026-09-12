import { Languages, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation, SUPPORTED_LANGUAGES } from "@/contexts/TranslationContext";

const LanguageSelector = () => {
  const { targetLanguage, setTargetLanguage, clearTranslations, isTranslating } = useTranslation();

  const currentLanguage = SUPPORTED_LANGUAGES.find(l => l.code === targetLanguage);

  if (targetLanguage) {
    return (
      <Button
        onClick={clearTranslations}
        variant="outline"
        className="text-xs md:text-sm border-sage/50 bg-sage text-foreground hover:bg-sage/80"
        disabled={isTranslating}
      >
        {isTranslating ? (
          <Loader2 className="w-4 h-4 mr-1 animate-spin" />
        ) : (
          <X className="w-4 h-4 mr-1" />
        )}
        {currentLanguage?.name || "Translating"} → English
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="text-xs md:text-sm border-sage/50 bg-transparent text-white hover:bg-sage/20"
          disabled={isTranslating}
        >
          {isTranslating ? (
            <Loader2 className="w-4 h-4 mr-1 animate-spin" />
          ) : (
            <Languages className="w-4 h-4 mr-1" />
          )}
          {isTranslating ? "Translating" : "Translate"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="z-50 max-h-[300px] overflow-y-auto bg-popover text-popover-foreground"
      >
        {SUPPORTED_LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onSelect={() => setTargetLanguage(lang.code)}
            onClick={() => setTargetLanguage(lang.code)}
            className="cursor-pointer"
          >
            <span className="font-medium">{lang.name}</span>
            <span className="text-muted-foreground ml-2 text-xs">{lang.englishName}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
