import { useState } from "react";
import { X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const OfferCard = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useLanguage();

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-y border-primary/20 animate-fade-in">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="flex-shrink-0">
              <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            </div>
            <div className="flex-1">
              <p className="text-sm md:text-base font-medium text-foreground">
                <span className="font-bold text-primary">{t("offer.badge")}</span>
                {" "}
                {t("offer.text")}
              </p>
            </div>
            <Button
              size="sm"
              className="hidden sm:inline-flex"
            >
              {t("offer.cta")}
            </Button>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 p-1 rounded-full hover:bg-muted transition-colors"
            aria-label="Close offer"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
        <Button
          size="sm"
          className="w-full mt-3 sm:hidden"
        >
          {t("offer.cta")}
        </Button>
      </div>
    </div>
  );
};

export default OfferCard;
