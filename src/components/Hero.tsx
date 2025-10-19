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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-secondary/5">
                  <img
                    src={heroEntrepreneur}
                    alt="Entrepreneur"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-center mt-4 text-base font-semibold text-foreground">
                {t("hero.audience.entrepreneur")}
              </p>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-secondary/5">
                  <img
                    src={heroManufacturing}
                    alt="Manufacturing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-center mt-4 text-base font-semibold text-foreground">
                {t("hero.audience.manufacturing")}
              </p>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-secondary/5">
                  <img
                    src={heroMarketing}
                    alt="Marketing Agency"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-center mt-4 text-base font-semibold text-foreground">
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
