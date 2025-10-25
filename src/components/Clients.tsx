import { useLanguage } from "@/contexts/LanguageContext";

const Clients = () => {
  const { t } = useLanguage();
  const logos = [
    { src: "/assets/images/cies/hangloose_logo_grey.svg", alt: "Hang Loose" },
    { src: "/assets/images/cies/mokuna_logo.svg", alt: "Mokuna" },
    { src: "/assets/images/cies/NicLaTaille1_carre-copy-d16559ea-1920w.webp", alt: "Nic La Taille" },
  ];

  return (
    <section className="w-full py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t("clients.title")}</h2>
          <p className="text-muted-foreground">
            {t("clients.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-4xl mx-auto">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-8 bg-background rounded-lg hover:shadow-md transition-shadow"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-auto max-h-20 object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
