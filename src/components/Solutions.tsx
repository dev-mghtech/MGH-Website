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
            {t("solutions.discoveryTitle")}
          </h3>
          
          <div className="space-y-4">
            <p className="text-muted-foreground">
              {t("solutions.discoveryDesc")}
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• {t("solutions.discoveryPoint1")}</li>
              <li>• {t("solutions.discoveryPoint2")}</li>
              <li>• {t("solutions.discoveryPoint3")}</li>
              <li>• {t("solutions.discoveryPoint4")}</li>
            </ul>
            <p className="text-sm font-medium pt-2">
              {t("solutions.discoveryWho")}
            </p>
            <p className="text-sm text-muted-foreground">
              {t("solutions.discoveryWhoDesc")}
            </p>
          </div>
          
          <Button variant="outline" size="lg" className="group">
            {t("header.contact")}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Card>

        <Card className="p-8 space-y-6">
          <h3 className="text-3xl font-bold">
            {t("solutions.ctoTitle")}
          </h3>
          
          <div className="space-y-4">
            <p className="text-muted-foreground font-medium">
              {t("solutions.ctoSubtitle")}
            </p>
            <p className="text-muted-foreground">
              {t("solutions.ctoDesc")}
            </p>
          </div>
          
          <Button size="lg" className="w-full sm:w-auto">
            {t("header.contact")}
          </Button>
        </Card>

        <Card className="p-8 space-y-6 lg:col-span-2">
          <h3 className="text-3xl font-bold">
            {t("solutions.softwareTitle")}
          </h3>
          
          <div className="space-y-4">
            <p className="text-muted-foreground font-medium">
              {t("solutions.softwareSubtitle")}
            </p>
            <p className="text-muted-foreground">
              {t("solutions.softwareDesc")}
            </p>
            <p className="text-sm font-medium pt-2">
              {t("solutions.softwareWho")}
            </p>
            <p className="text-sm text-muted-foreground">
              {t("solutions.softwareWhoDesc")}
            </p>
          </div>
          
          <Button size="lg" className="w-full sm:w-auto">
            {t("header.contact")}
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default Solutions;
