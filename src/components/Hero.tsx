import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="container mx-auto px-6 py-20 md:py-32">
      <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-muted/50 rounded-full border border-border/50">
          <span className="px-2.5 py-1 bg-destructive text-destructive-foreground text-xs font-semibold rounded">
            New!
          </span>
          <span className="text-sm text-muted-foreground">
            {t("hero.badge")}
          </span>
          <ArrowRight className="w-4 h-4 text-muted-foreground" />
        </div>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
          <span className="text-foreground">
            {t("hero.title").split(' ').slice(0, -2).join(' ')}{' '}
          </span>
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {t("hero.title").split(' ').slice(-2).join(' ')}
          </span>
        </h1>
        
        {/* Subtitle */}
        <div className="max-w-3xl space-y-2">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t("hero.subtitle")}
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="pt-4">
          <Button size="lg" className="px-8 py-6 text-base font-semibold rounded-xl">
            {t("hero.cta")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
