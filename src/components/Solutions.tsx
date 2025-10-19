import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Solutions = () => {
  const { t } = useLanguage();
  return (
    <section id="solutions" className="container mx-auto px-6 py-20">
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {t("solutions.title")}
        </h2>
        <p className="text-lg text-muted-foreground">
          {t("solutions.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <Card className="p-8 space-y-6">
          <h3 className="text-3xl font-bold">
            {t("solutions.card1Title")}
          </h3>
          
          <p className="text-muted-foreground">
            {t("solutions.card1Desc")}
          </p>
          
          <Button variant="outline" size="lg" className="group">
            {t("header.solutions")}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Card>

        <Card className="p-8 space-y-6">
          <h3 className="text-3xl font-bold">
            {t("solutions.card2Title")}
          </h3>
          
          <p className="text-muted-foreground">
            {t("solutions.card2Desc")}
          </p>
          
          <Button size="lg" className="w-full sm:w-auto">
            {t("header.contact")}
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default Solutions;
