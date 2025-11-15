import { Users, Building2, Briefcase } from "lucide-react";
import { useLanguage } from "@/translations/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Users,
      title: t("whoWeHelp.clientType1.title"),
      description: t("whoWeHelp.clientType1.description")
    },
    {
      icon: Building2,
      title: t("whoWeHelp.clientType2.title"),
      description: t("whoWeHelp.clientType2.description")
    },
    {
      icon: Briefcase,
      title: t("whoWeHelp.clientType3.title"),
      description: t("whoWeHelp.clientType3.description")
    }
  ];

  return (
    <section id="services" className="mx-auto px-6 py-20 bg-muted/30 w-full">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-3xl font-semibold mb-4">{t("whoWeHelp.title")}</h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-normal">
          {t("whoWeHelp.subtitle")}
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div 
              key={index} 
              className="flex flex-col items-center text-center"
            >
              <div className="gradient-border-circle mb-6">
                <div className="gradient-border-circle-inner">
                  <Icon className="h-8 w-8 text-foreground" />
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
