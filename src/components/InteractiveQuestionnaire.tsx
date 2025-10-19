import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import entrepreneurChar from "@/assets/character-entrepreneur.png";
import growingChar from "@/assets/character-growing.png";
import enterpriseChar from "@/assets/character-enterprise.png";
import discoveryChar from "@/assets/character-discovery.png";
import earlyStageChar from "@/assets/character-early-stage.png";
import growthStageChar from "@/assets/character-growth-stage.png";
import ctoChar from "@/assets/character-cto.png";
import sparkleChar from "@/assets/character-sparkle.png";

type Message = {
  type: "bot" | "user";
  content: string;
  character?: string;
};

const InteractiveQuestionnaire = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState(0);
  const [selection1, setSelection1] = useState("");
  const [selection2, setSelection2] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", business: "", email: "" });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initial greeting
    setTimeout(() => {
      setMessages([{ type: "bot", content: t("questionnaire.greeting"), character: sparkleChar }]);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { type: "bot", content: t("questionnaire.step1.question"), character: sparkleChar },
        ]);
        setStep(1);
      }, 800);
    }, 300);
  }, []);

  const getCharacter = (option: string) => {
    const characters: Record<string, string> = {
      entrepreneur: entrepreneurChar,
      growing: growingChar,
      enterprise: enterpriseChar,
      discovery: discoveryChar,
      earlyStage: earlyStageChar,
      growthStage: growthStageChar,
      cto: ctoChar,
    };
    return characters[option] || sparkleChar;
  };

  const handleStep1 = (key: string, label: string) => {
    setSelection1(key);
    setMessages((prev) => [...prev, { type: "user", content: label, character: getCharacter(key) }]);
    setStep(0);
    
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: "bot", content: t("questionnaire.step2.question"), character: sparkleChar },
      ]);
      setStep(2);
    }, 600);
  };

  const handleStep2 = (key: string, label: string) => {
    setSelection2(key);
    setMessages((prev) => [...prev, { type: "user", content: label, character: getCharacter(key) }]);
    setStep(0);
    
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: "bot", content: t("questionnaire.step3.question"), character: sparkleChar },
      ]);
      setStep(3);
    }, 600);
  };

  const handleDiscoveryCall = (wantsCall: boolean) => {
    const response = wantsCall ? t("questionnaire.step3.yes") : t("questionnaire.step3.no");
    setMessages((prev) => [...prev, { type: "user", content: response }]);
    setStep(0);
    
    if (wantsCall) {
      setTimeout(() => {
        setShowForm(true);
        setMessages((prev) => [
          ...prev,
          { type: "bot", content: t("questionnaire.form.title"), character: sparkleChar },
        ]);
      }, 600);
    } else {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { type: "bot", content: t("questionnaire.result.title"), character: sparkleChar },
        ]);
        setStep(4);
      }, 600);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.business) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    setShowForm(false);
    setMessages((prev) => [
      ...prev,
      { type: "bot", content: t("questionnaire.form.success"), character: sparkleChar },
    ]);
    setStep(4);
    
    console.log("Form submitted:", { ...formData, selection1, selection2 });
  };

  const reset = () => {
    setMessages([]);
    setStep(0);
    setSelection1("");
    setSelection2("");
    setShowForm(false);
    setFormData({ name: "", business: "", email: "" });
    
    setTimeout(() => {
      setMessages([{ type: "bot", content: t("questionnaire.greeting"), character: sparkleChar }]);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { type: "bot", content: t("questionnaire.step1.question"), character: sparkleChar },
        ]);
        setStep(1);
      }, 800);
    }, 300);
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 shadow-xl">
      <div className="h-[500px] flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 animate-fade-in ${msg.type === "user" ? "flex-row-reverse" : ""}`}
            >
              {msg.character && (
                <img
                  src={msg.character}
                  alt=""
                  className={`w-10 h-10 flex-shrink-0 ${msg.type === "bot" ? "animate-bounce" : ""}`}
                />
              )}
              <div
                className={`rounded-2xl px-4 py-3 max-w-[80%] ${
                  msg.type === "bot"
                    ? "bg-muted text-foreground"
                    : "bg-primary text-primary-foreground ml-auto"
                }`}
              >
                <p className="text-sm">{msg.content}</p>
              </div>
            </div>
          ))}
          
          {showForm && (
            <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
              <div>
                <Input
                  placeholder={t("questionnaire.form.namePlaceholder")}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background"
                />
              </div>
              <div>
                <Textarea
                  placeholder={t("questionnaire.form.businessPlaceholder")}
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  className="bg-background min-h-[80px]"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={t("questionnaire.form.emailPlaceholder")}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background"
                />
              </div>
              <Button type="submit" className="w-full">
                {t("questionnaire.form.submit")}
              </Button>
            </form>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <div className="space-y-2">
          {step === 1 && (
            <div className="grid grid-cols-1 gap-2 animate-fade-in">
              {Object.entries(t("questionnaire.step1.options")).map(([key, label]) => (
                <Button
                  key={key}
                  onClick={() => handleStep1(key, label as string)}
                  variant="outline"
                  className="justify-start gap-3 hover:scale-105 transition-all"
                >
                  <img src={getCharacter(key)} alt="" className="w-8 h-8" />
                  <span>{label}</span>
                </Button>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="grid grid-cols-1 gap-2 animate-fade-in">
              {Object.entries(t("questionnaire.step2.options")).map(([key, label]) => (
                <Button
                  key={key}
                  onClick={() => handleStep2(key, label as string)}
                  variant="outline"
                  className="justify-start gap-3 hover:scale-105 transition-all"
                >
                  <img src={getCharacter(key)} alt="" className="w-8 h-8" />
                  <span>{label}</span>
                </Button>
              ))}
            </div>
          )}

          {step === 3 && (
            <div className="grid grid-cols-2 gap-2 animate-fade-in">
              <Button onClick={() => handleDiscoveryCall(true)} className="w-full">
                {t("questionnaire.step3.yes")}
              </Button>
              <Button onClick={() => handleDiscoveryCall(false)} variant="outline" className="w-full">
                {t("questionnaire.step3.no")}
              </Button>
            </div>
          )}

          {step === 4 && (
            <Button onClick={reset} variant="outline" className="w-full animate-fade-in">
              {t("questionnaire.result.reset")}
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default InteractiveQuestionnaire;
