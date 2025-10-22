import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroWomanPhone from "@/assets/hero-woman-phone-enhanced.png";

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
        
        <div className="relative flex items-center justify-center">
          <div className="relative">
            <img
              src={heroWomanPhone}
              alt="Happy professional planning on phone"
              className="w-full h-auto max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
