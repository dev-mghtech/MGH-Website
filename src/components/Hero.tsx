import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroEntrepreneur from "@/assets/hero-entrepreneur.png";
import heroManufacturing from "@/assets/hero-manufacturing.png";
import heroMarketing from "@/assets/hero-marketing.png";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 bg-muted rounded-full">
            <span className="text-sm text-muted-foreground">{t("hero.badge")}</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {t("hero.title")}
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-xl">
            {t("hero.subtitle")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group">
              {t("hero.cta")}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              {t("hero.contact")}
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-3 gap-6">
            <div className="group">
              <div className="relative overflow-hidden rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                <img
                  src={heroEntrepreneur}
                  alt="Entrepreneur"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-center mt-3 text-sm font-medium text-muted-foreground">
                {t("hero.audience.entrepreneur")}
              </p>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                <img
                  src={heroManufacturing}
                  alt="Manufacturing"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-center mt-3 text-sm font-medium text-muted-foreground">
                {t("hero.audience.manufacturing")}
              </p>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                <img
                  src={heroMarketing}
                  alt="Marketing Agency"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-center mt-3 text-sm font-medium text-muted-foreground">
                {t("hero.audience.marketing")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
