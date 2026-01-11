import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Compass, UserCheck, Code } from "lucide-react";
import { useLanguage } from "@/translations/LanguageContext";

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <Card className="p-6 space-y-4 flex flex-col">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
            <Compass className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-2xl font-bold">
            {t("solutions.discoveryTitle")}
          </h3>
          
          <div className="space-y-3 flex-grow">
            <p className="text-muted-foreground text-sm">
              {t("solutions.discoveryDesc")}
            </p>
            <ul className="space-y-1.5 text-muted-foreground text-sm">
              <li>• {t("solutions.discoveryPoint1")}</li>
              <li>• {t("solutions.discoveryPoint2")}</li>
              <li>• {t("solutions.discoveryPoint3")}</li>
              <li>• {t("solutions.discoveryPoint4")}</li>
            </ul>
            <p className="text-sm font-medium pt-2">
              {t("solutions.discoveryWho")}
            </p>
            <p className="text-xs text-muted-foreground">
              {t("solutions.discoveryWhoDesc")}
            </p>
          </div>
          
          <Button size="sm" className="group w-full">
            {t("solutions.learnMore")}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Card>

        <Card className="p-6 space-y-4 flex flex-col">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
            <UserCheck className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-2xl font-bold">
            {t("solutions.ctoTitle")}
          </h3>
          
          <div className="space-y-3 flex-grow">
            <p className="text-muted-foreground font-medium text-sm">
              {t("solutions.ctoSubtitle")}
            </p>
            <p className="text-muted-foreground text-sm">
              {t("solutions.ctoDesc")}
            </p>
            <p className="text-sm font-medium pt-2">
              {t("solutions.ctoWho")}
            </p>
            <p className="text-xs text-muted-foreground">
              {t("solutions.ctoWhoDesc")}
            </p>
          </div>
          
          <Button size="sm" className="group w-full">
            {t("solutions.learnMore")}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Card>

        <Card className="p-6 space-y-4 flex flex-col">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
            <Code className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-2xl font-bold">
            {t("solutions.softwareTitle")}
          </h3>
          
          <div className="space-y-3 flex-grow">
            <p className="text-muted-foreground font-medium text-sm">
              {t("solutions.softwareSubtitle")}
            </p>
            <p className="text-muted-foreground text-sm">
              {t("solutions.softwareDesc")}
            </p>
            <p className="text-sm font-medium pt-2">
              {t("solutions.softwareWho")}
            </p>
            <p className="text-xs text-muted-foreground">
              {t("solutions.softwareWhoDesc")}
            </p>
          </div>
          
          <Button size="sm" className="group w-full">
            {t("solutions.learnMore")}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default Solutions;
