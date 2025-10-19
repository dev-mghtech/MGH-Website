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
      badge: "Technology consulting excellence",
      title: "Transforming Business through Technology",
      subtitle: "Our expert technology consulting solutions drive innovation, optimize operations, and accelerate digital transformation for businesses of all sizes.",
      cta: "Start Your Journey",
      contact: "Contact Us",
    },
    services: {
      individualsTitle: "Individuals",
      individualsDesc: "Personal technology consulting and career development guidance",
      growingTitle: "Growing Companies",
      growingDesc: "Scalable solutions to accelerate your business growth",
      enterpriseTitle: "Enterprise",
      enterpriseDesc: "Comprehensive technology transformation for large organizations",
    },
    clients: {
      title: "Trusted by Industry Leaders",
      subtitle: "We've partnered with leading organizations across various industries",
    },
    solutions: {
      title: "Comprehensive Training and Consulting Solutions Tailored to Your Needs",
      subtitle: "With a focus on individual attention, we are committed to delivering customized strategies, empowering your workforce, and guiding your business to sustainable growth and excellence",
      card1Title: "Strategic IT Consulting",
      card1Desc: "Transform your business with expert guidance on technology strategy, digital transformation, and innovation roadmaps.",
      card2Title: "Custom Software Development",
      card2Desc: "Build scalable, secure applications tailored to your unique business needs with our experienced development team.",
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
      badge: "Excellence en conseil technologique",
      title: "Transformer les Entreprises par la Technologie",
      subtitle: "Nos solutions expertes de conseil technologique stimulent l'innovation, optimisent les opérations et accélèrent la transformation numérique pour les entreprises de toutes tailles.",
      cta: "Commencez Votre Parcours",
      contact: "Contactez-Nous",
    },
    services: {
      individualsTitle: "Particuliers",
      individualsDesc: "Conseil technologique personnel et orientation de développement de carrière",
      growingTitle: "Entreprises en Croissance",
      growingDesc: "Solutions évolutives pour accélérer la croissance de votre entreprise",
      enterpriseTitle: "Grandes Entreprises",
      enterpriseDesc: "Transformation technologique complète pour les grandes organisations",
    },
    clients: {
      title: "La Confiance des Leaders de l'Industrie",
      subtitle: "Nous nous sommes associés à des organisations de premier plan dans divers secteurs",
    },
    solutions: {
      title: "Solutions de Formation et de Conseil Complètes Adaptées à Vos Besoins",
      subtitle: "En mettant l'accent sur l'attention individuelle, nous nous engageons à fournir des stratégies personnalisées, à responsabiliser votre main-d'œuvre et à guider votre entreprise vers une croissance et une excellence durables",
      card1Title: "Conseil Stratégique en TI",
      card1Desc: "Transformez votre entreprise avec des conseils d'experts sur la stratégie technologique, la transformation numérique et les feuilles de route d'innovation.",
      card2Title: "Développement de Logiciels Sur Mesure",
      card2Desc: "Créez des applications évolutives et sécurisées adaptées à vos besoins commerciaux uniques avec notre équipe de développement expérimentée.",
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
