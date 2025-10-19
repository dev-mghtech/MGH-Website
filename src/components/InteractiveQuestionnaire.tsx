import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Rocket, Building2, Users, Lightbulb, TrendingUp, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const InteractiveQuestionnaire = () => {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [selection1, setSelection1] = useState("");
  const [selection2, setSelection2] = useState("");

  const handleStep1 = (value: string) => {
    setSelection1(value);
    setTimeout(() => setStep(2), 300);
  };

  const handleStep2 = (value: string) => {
    setSelection2(value);
    setTimeout(() => setStep(3), 300);
  };

  const reset = () => {
    setStep(1);
    setSelection1("");
    setSelection2("");
  };

  const getIcon = (option: string) => {
    const icons: Record<string, any> = {
      entrepreneur: Sparkles,
      growing: TrendingUp,
      enterprise: Building2,
      discovery: Lightbulb,
      earlyStage: Rocket,
      growthStage: Users,
      cto: Shield,
    };
    return icons[option] || Sparkles;
  };

  return (
    <div className="relative">
      <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 shadow-xl">
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center space-y-2">
              <Sparkles className="w-12 h-12 mx-auto text-primary animate-pulse" />
              <h3 className="text-2xl font-bold">{t("questionnaire.step1.question")}</h3>
            </div>
            <div className="grid gap-4">
              {Object.entries(t("questionnaire.step1.options")).map(([key, label]) => {
                const Icon = getIcon(key);
                return (
                  <Button
                    key={key}
                    onClick={() => handleStep1(key)}
                    variant="outline"
                    size="lg"
                    className="h-auto py-4 group hover:scale-105 transition-all duration-300 hover:border-primary hover:bg-primary/5"
                  >
                    <Icon className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                    <span className="text-lg">{label}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center space-y-2">
              <Rocket className="w-12 h-12 mx-auto text-primary animate-bounce" />
              <h3 className="text-2xl font-bold">{t("questionnaire.step2.question")}</h3>
            </div>
            <div className="grid gap-4">
              {Object.entries(t("questionnaire.step2.options")).map(([key, label]) => {
                const Icon = getIcon(key);
                return (
                  <Button
                    key={key}
                    onClick={() => handleStep2(key)}
                    variant="outline"
                    size="lg"
                    className="h-auto py-4 group hover:scale-105 transition-all duration-300 hover:border-primary hover:bg-primary/5"
                  >
                    <Icon className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                    <span className="text-lg">{label}</span>
                  </Button>
                );
              })}
            </div>
            <Button
              onClick={reset}
              variant="ghost"
              className="w-full"
            >
              ← {t("questionnaire.result.reset")}
            </Button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-scale-in">
            <div className="text-center space-y-4">
              <div className="relative">
                <Sparkles className="w-16 h-16 mx-auto text-primary animate-pulse" />
                <div className="absolute inset-0 animate-ping opacity-20">
                  <Sparkles className="w-16 h-16 mx-auto text-primary" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-primary">{t("questionnaire.result.title")}</h3>
              <p className="text-muted-foreground">{t("questionnaire.result.description")}</p>
            </div>
            
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  {(() => {
                    const Icon = getIcon(selection1);
                    return <Icon className="w-6 h-6 text-primary" />;
                  })()}
                  <span className="font-semibold">
                    {t(`questionnaire.step1.options.${selection1}`)}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {(() => {
                    const Icon = getIcon(selection2);
                    return <Icon className="w-6 h-6 text-primary" />;
                  })()}
                  <span className="font-semibold">
                    {t(`questionnaire.step2.options.${selection2}`)}
                  </span>
                </div>
              </div>
            </Card>

            <div className="flex flex-col gap-3">
              <Button size="lg" className="w-full group">
                {t("questionnaire.result.cta")}
                <Rocket className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={reset}
                variant="outline"
                size="lg"
                className="w-full"
              >
                {t("questionnaire.result.reset")}
              </Button>
            </div>
          </div>
        )}
      </Card>
      
      {/* Progress indicator */}
      <div className="flex gap-2 justify-center mt-4">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`h-2 rounded-full transition-all duration-300 ${
              s === step ? "w-8 bg-primary" : "w-2 bg-primary/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default InteractiveQuestionnaire;
