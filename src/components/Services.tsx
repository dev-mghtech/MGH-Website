import { Search, UserCog, Code } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Search,
      title: t("services.discoveryTitle"),
      description: t("services.discoveryDesc")
    },
    {
      icon: UserCog,
      title: t("services.ctoTitle"),
      description: t("services.ctoDesc")
    },
    {
      icon: Code,
      title: t("services.softwareTitle"),
      description: t("services.softwareDesc")
    }
  ];

  return (
    <section id="services" className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div 
              key={index} 
              className="flex items-start space-x-4 p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0">
                <Icon className="h-6 w-6 text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
