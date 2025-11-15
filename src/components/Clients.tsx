import { useLanguage } from "@/translations/LanguageContext";

const Clients = () => {
  const { t } = useLanguage();
  const logos = [
    { src: "/assets/images/cies/hangloose_logo_grey.svg", alt: "Hang Loose" },
    { src: "/assets/images/cies/mokuna_logo.svg", alt: "Mokuna" },
    { src: "/assets/images/cies/NicLaTaille1_carre-copy-d16559ea-1920w.webp", alt: "Nic La Taille" },
    { src: "/assets/images/cies/launchbreak.svg", alt: "Launchbreak" },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="w-full pb-16 pt-8">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          {/* <h2 className="text-3xl font-bold mb-4">{t("clients.title")}</h2> */}
          <p className="text-muted-foreground">
            {t("clients.subtitle")}
          </p>
        </div>
        
        <div className="logo-scroll-container">
          <div className="logo-scroll-track">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-background rounded-lg mx-4 min-w-[200px]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-auto max-h-12 object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
