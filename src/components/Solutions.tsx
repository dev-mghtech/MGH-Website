import { Card } from "@/components/ui/card";
import { Users, Zap, Clock, TrendingUp } from "lucide-react";
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card className="p-6 space-y-4">
          <Users className="h-12 w-12 text-primary" />
          <h3 className="text-xl font-bold">{t("solutions.expertiseTitle")}</h3>
          <p className="text-muted-foreground">{t("solutions.expertiseDesc")}</p>
        </Card>

        <Card className="p-6 space-y-4">
          <Zap className="h-12 w-12 text-primary" />
          <h3 className="text-xl font-bold">{t("solutions.innovationTitle")}</h3>
          <p className="text-muted-foreground">{t("solutions.innovationDesc")}</p>
        </Card>

        <Card className="p-6 space-y-4">
          <Clock className="h-12 w-12 text-primary" />
          <h3 className="text-xl font-bold">{t("solutions.supportTitle")}</h3>
          <p className="text-muted-foreground">{t("solutions.supportDesc")}</p>
        </Card>

        <Card className="p-6 space-y-4">
          <TrendingUp className="h-12 w-12 text-primary" />
          <h3 className="text-xl font-bold">{t("solutions.scalabilityTitle")}</h3>
          <p className="text-muted-foreground">{t("solutions.scalabilityDesc")}</p>
        </Card>
      </div>
    </section>
  );
};

export default Solutions;
