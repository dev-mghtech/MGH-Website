import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useChat } from "@/contexts/ChatContext";
import heroGrowth from "@/assets/hero-growth-illustration.png";

const Hero = () => {
  const { t } = useLanguage();
  const { openChat } = useChat();
  return (
    <section className="relative animated-gradient min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <span className="text-sm text-white/90">{t("hero.badge")}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              {t("hero.title")}
            </h1>
            
            <p className="text-lg text-white/80 max-w-xl">
              {t("hero.subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group bg-white text-foreground hover:bg-white/90" onClick={openChat}>
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" onClick={openChat}>
                {t("hero.contact")}
              </Button>
            </div>
          </div>
        
          <div className="relative flex items-center justify-center z-10">
            <div className="relative">
              <img
                src={heroGrowth}
                alt="Business growth journey with technology and software solutions"
                className="w-full h-auto max-w-2xl mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
