import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/translations/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 header-grid-background" />
      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-muted/50 rounded-full border border-border/50">
          <span className="px-2.5 py-1 bg-destructive text-destructive-foreground text-xs font-semibold rounded">
            {t("hero.badgeText")}
          </span>
          <span className="text-sm text-muted-foreground">
            {t("hero.badge")}
          </span>
          <ArrowRight className="w-4 h-4 text-muted-foreground" />
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.15] tracking-[-0.02em]" style={{ fontWeight: 500 }}>
          <span className="text-foreground">
            {t("hero.title").split(' ').slice(0, -2).join(' ')}{' '}
          </span>
          <span className="hero-gradient-text">
            {t("hero.title").split(' ').slice(-2).join(' ')}
          </span>
        </h1>
        
        {/* Subtitle */}
        <div className="max-w-3xl space-y-2">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-normal">
            {t("hero.subtitle")}
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="pt-4">
          <Button 
            size="lg" 
            className="px-8 py-6 text-base font-medium rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            onClick={scrollToServices}
          >
            {t("hero.cta")}
          </Button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Hero;
