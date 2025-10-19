import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Users, Target, Heart } from "lucide-react";

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
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {t("about.story.paragraph1")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.story.paragraph2")}
              </p>
            </div>
          </section>

          {/* Values Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center">{t("about.values.title")}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t("about.values.value1.title")}</h3>
                <p className="text-muted-foreground">{t("about.values.value1.description")}</p>
              </div>
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t("about.values.value2.title")}</h3>
                <p className="text-muted-foreground">{t("about.values.value2.description")}</p>
              </div>
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t("about.values.value3.title")}</h3>
                <p className="text-muted-foreground">{t("about.values.value3.description")}</p>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="bg-muted/50 rounded-2xl p-8 md:p-12 text-center space-y-4">
            <h2 className="text-3xl font-bold">{t("about.mission.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("about.mission.description")}
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
