import { Cloud, Brain, Shield, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Cloud,
      title: t("services.cloudTitle"),
      description: t("services.cloudDesc")
    },
    {
      icon: Brain,
      title: t("services.aiTitle"),
      description: t("services.aiDesc")
    },
    {
      icon: Shield,
      title: t("services.securityTitle"),
      description: t("services.securityDesc")
    },
    {
      icon: Lightbulb,
      title: t("services.consultingTitle"),
      description: t("services.consultingDesc")
    }
  ];

  return (
    <section id="services" className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">{t("services.title")}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t("services.subtitle")}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div 
              key={index} 
              className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <Icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
