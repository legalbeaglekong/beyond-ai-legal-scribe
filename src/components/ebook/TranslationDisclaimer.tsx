import { AlertTriangle } from "lucide-react";
import { useTranslation, SUPPORTED_LANGUAGES } from "@/contexts/TranslationContext";

const TranslationDisclaimer = () => {
  const { targetLanguage } = useTranslation();
  const currentLanguage = SUPPORTED_LANGUAGES.find(l => l.code === targetLanguage);

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4 text-sm print:block">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold text-amber-800">
            AI Translation Disclaimer
          </p>
          <p className="text-amber-700">
            This {currentLanguage?.englishName || "translated"} version is AI-generated for reference only. 
            In case of any discrepancy or dispute, the English version shall prevail and is available at{" "}
            <a 
              href="https://ascendingasia.beyondhorizons.sg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline font-medium hover:text-amber-900"
            >
              https://ascendingasia.beyondhorizons.sg
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TranslationDisclaimer;
