import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/translations/LanguageContext";
import { openCalendlyBooking } from "@/lib/calendly";

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              {t("about.title")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("about.subtitle")}
            </p>
          </div>

          {/* Story Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">{t("about.story.title")}</h2>
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t("about.story.paragraph1")}
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t("about.story.paragraph2")}
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t("about.story.paragraph3")}
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t("about.story.paragraph4")}
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t("about.story.paragraph5")}
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold">Ready to Build Something Great?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your project and see if we're the right fit. Book a free 15-minute coffee chat to explore how we can help bring your vision to life.
            </p>
            <Button 
              size="lg" 
              className="px-8 py-6 text-base font-medium rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => openCalendlyBooking("about-page")}
            >
              Schedule Your Free Call
            </Button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
