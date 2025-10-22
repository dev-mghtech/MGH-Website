import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-8 md:grid-cols-12 lg:grid-cols-16 gap-0">
        {Array.from({ length: 128 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square border border-muted/10 hover:bg-muted/20 transition-colors duration-300"
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-2 bg-muted rounded-full">
            <span className="text-sm text-muted-foreground">{t("hero.badge")}</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {t("hero.title")}
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              {t("hero.cta")}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              {t("hero.contact")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
