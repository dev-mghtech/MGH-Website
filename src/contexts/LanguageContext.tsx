import { createContext, useContext, ReactNode } from "react";
import { useLocation } from "react-router-dom";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const language: Language = location.pathname.startsWith("/fr") ? "fr" : "en";

  const t = (key: string) => {
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

const translations = {
  en: {
    header: {
      services: "Services",
      solutions: "Solutions",
      blog: "Blog",
      contact: "Contact",
      login: "Log in",
      getStarted: "Get Started",
    },
    hero: {
      title: "Transform Your Business with Cutting-Edge Technology Solutions",
      subtitle: "We deliver innovative IT solutions that drive growth, efficiency, and competitive advantage for businesses worldwide.",
      cta: "Start Your Journey",
      learnMore: "Learn More",
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive technology solutions tailored to your business needs",
      cloudTitle: "Cloud Solutions",
      cloudDesc: "Scalable and secure cloud infrastructure for your applications",
      aiTitle: "AI & Machine Learning",
      aiDesc: "Intelligent automation and insights powered by advanced AI",
      securityTitle: "Cybersecurity",
      securityDesc: "Protect your business with enterprise-grade security solutions",
      consultingTitle: "IT Consulting",
      consultingDesc: "Expert guidance for your digital transformation journey",
    },
    clients: {
      title: "Trusted by Industry Leaders",
      subtitle: "Join hundreds of companies that trust us with their technology needs",
    },
    solutions: {
      title: "Why Choose Us?",
      subtitle: "We combine technical excellence with business understanding to deliver exceptional results",
      expertiseTitle: "Expert Team",
      expertiseDesc: "Our team consists of certified professionals with years of industry experience",
      innovationTitle: "Innovation First",
      innovationDesc: "We stay ahead of technology trends to provide cutting-edge solutions",
      supportTitle: "24/7 Support",
      supportDesc: "Round-the-clock support to ensure your systems run smoothly",
      scalabilityTitle: "Scalable Solutions",
      scalabilityDesc: "Solutions that grow with your business needs",
    },
    reviews: {
      title: "What Our Clients Say",
      subtitle: "Don't just take our word for it - hear from the businesses we've helped transform",
      review1: {
        name: "Sarah Johnson",
        role: "CEO, TechStart Inc.",
        content: "MGH Tech transformed our business with their innovative solutions. Their team's expertise and dedication exceeded all expectations.",
      },
      review2: {
        name: "Michael Chen",
        role: "CTO, DataFlow Systems",
        content: "Outstanding service and support. They delivered a robust solution that scaled perfectly with our growing needs.",
      },
      review3: {
        name: "Emily Rodriguez",
        role: "Director of IT, GlobalCorp",
        content: "Professional, reliable, and innovative. MGH Tech has been instrumental in our digital transformation journey.",
      },
    },
    blog: {
      title: "Our Blog",
      subtitle: "Insights, updates, and expert perspectives on technology, innovation, and digital transformation",
      backToBlog: "Back to Blog",
      viewAll: "View All Articles",
      readTime: "min read",
    },
    footer: {
      tagline: "Empowering businesses through innovative technology solutions",
      company: "Company",
      about: "About Us",
      careers: "Careers",
      contact: "Contact",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      resources: "Resources",
      blog: "Blog",
      docs: "Documentation",
      support: "Support",
      rights: "All rights reserved.",
    },
  },
  fr: {
    header: {
      services: "Services",
      solutions: "Solutions",
      blog: "Blog",
      contact: "Contact",
      login: "Connexion",
      getStarted: "Commencer",
    },
    hero: {
      title: "Transformez Votre Entreprise avec des Solutions Technologiques de Pointe",
      subtitle: "Nous proposons des solutions informatiques innovantes qui favorisent la croissance, l'efficacité et l'avantage concurrentiel des entreprises du monde entier.",
      cta: "Commencez Votre Parcours",
      learnMore: "En Savoir Plus",
    },
    services: {
      title: "Nos Services",
      subtitle: "Des solutions technologiques complètes adaptées aux besoins de votre entreprise",
      cloudTitle: "Solutions Cloud",
      cloudDesc: "Infrastructure cloud évolutive et sécurisée pour vos applications",
      aiTitle: "IA & Apprentissage Automatique",
      aiDesc: "Automatisation intelligente et informations alimentées par l'IA avancée",
      securityTitle: "Cybersécurité",
      securityDesc: "Protégez votre entreprise avec des solutions de sécurité de niveau entreprise",
      consultingTitle: "Conseil IT",
      consultingDesc: "Conseils d'experts pour votre parcours de transformation numérique",
    },
    clients: {
      title: "La Confiance des Leaders de l'Industrie",
      subtitle: "Rejoignez des centaines d'entreprises qui nous confient leurs besoins technologiques",
    },
    solutions: {
      title: "Pourquoi Nous Choisir?",
      subtitle: "Nous combinons l'excellence technique avec la compréhension des affaires pour offrir des résultats exceptionnels",
      expertiseTitle: "Équipe Experte",
      expertiseDesc: "Notre équipe est composée de professionnels certifiés avec des années d'expérience dans l'industrie",
      innovationTitle: "Innovation d'Abord",
      innovationDesc: "Nous restons à la pointe des tendances technologiques pour fournir des solutions de pointe",
      supportTitle: "Support 24/7",
      supportDesc: "Support 24h/24 pour garantir le bon fonctionnement de vos systèmes",
      scalabilityTitle: "Solutions Évolutives",
      scalabilityDesc: "Des solutions qui évoluent avec les besoins de votre entreprise",
    },
    reviews: {
      title: "Ce Que Disent Nos Clients",
      subtitle: "Ne nous croyez pas sur parole - écoutez les entreprises que nous avons aidées à se transformer",
      review1: {
        name: "Sarah Johnson",
        role: "PDG, TechStart Inc.",
        content: "MGH Tech a transformé notre entreprise avec ses solutions innovantes. L'expertise et le dévouement de leur équipe ont dépassé toutes les attentes.",
      },
      review2: {
        name: "Michael Chen",
        role: "CTO, DataFlow Systems",
        content: "Service et support exceptionnels. Ils ont livré une solution robuste qui s'est parfaitement adaptée à nos besoins croissants.",
      },
      review3: {
        name: "Emily Rodriguez",
        role: "Directrice IT, GlobalCorp",
        content: "Professionnel, fiable et innovant. MGH Tech a été essentiel dans notre parcours de transformation numérique.",
      },
    },
    blog: {
      title: "Notre Blog",
      subtitle: "Perspectives, mises à jour et avis d'experts sur la technologie, l'innovation et la transformation numérique",
      backToBlog: "Retour au Blog",
      viewAll: "Voir Tous les Articles",
      readTime: "min de lecture",
    },
    footer: {
      tagline: "Donner aux entreprises les moyens d'agir grâce à des solutions technologiques innovantes",
      company: "Entreprise",
      about: "À Propos",
      careers: "Carrières",
      contact: "Contact",
      legal: "Légal",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      resources: "Ressources",
      blog: "Blog",
      docs: "Documentation",
      support: "Support",
      rights: "Tous droits réservés.",
    },
  },
};
