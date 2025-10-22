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
      about: "About",
      blog: "Blog",
      contact: "Contact",
      getInTouch: "Get in touch",
      login: "Log in",
      getStarted: "Get Started",
    },
    hero: {
      badge: "Technology consulting excellence",
      title: "Transforming Business through Technology",
      subtitle: "Our expert technology consulting solutions drive innovation, optimize operations, and accelerate digital transformation for businesses of all sizes.",
      cta: "Start Your Journey",
      contact: "Contact Us",
      audience: {
        entrepreneur: "Entrepreneurs",
        manufacturing: "Manufacturing",
        marketing: "Marketing Agencies",
      },
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
      discoveryTitle: "Discovery Phase Services",
      discoveryDesc: "Evidence-based decisions backed by research:",
      discoveryPoint1: "Clear requirements and realistic expectations",
      discoveryPoint2: "Predictable costs and timelines",
      discoveryPoint3: "Faster time-to-market with minimal changes",
      discoveryPoint4: "Strong foundation for successful development",
      discoveryWho: "Who This Is For",
      discoveryWhoDesc: "Startups and founders ready to turn their idea into reality—the right way. Whether you're seeking investment, validating a concept, or preparing for development, we'll ensure you start strong.",
      learnMore: "Learn More",
      ctoTitle: "CTO-as-a-Service",
      ctoSubtitle: "Your Vision. Our Technical Expertise. No Full-Time Commitment.",
      ctoDesc: "You know where your startup is headed, but navigating the technical landscape feels overwhelming. MGH Tech's CTO-as-a-Service gives you seasoned technology leadership without the six-figure salary—guiding you from concept to launch and beyond.",
      ctoWho: "Who This Is For",
      ctoWhoDesc: "Founders and business leaders who need expert technical guidance but aren't ready to hire a full-time CTO. Perfect for startups looking to scale smart and make informed technology decisions.",
      softwareTitle: "Software Development Service",
      softwareSubtitle: "From Idea to Launch – We Build Your Vision End-to-End",
      softwareDesc: "Stop juggling multiple vendors and fragmented teams. MGH Tech delivers complete software development services—taking your project from initial concept through launch and beyond, all under one roof.",
      softwareWho: "Full-Cycle Development You Can Trust",
      softwareWhoDesc: "Whether you're launching a new product, digitizing your business, or scaling an existing platform, we handle every aspect of software development so you can focus on growing your business.",
    },
    questionnaire: {
      greeting: "Hi there! 👋 I'm here to help you find the perfect solution for your business.",
      step1: {
        question: "What best describes your business?",
        options: {
          entrepreneur: "Entrepreneur",
          growing: "Growing Business",
          enterprise: "Enterprise",
        },
      },
      step2: {
        question: "Great! What service are you looking for?",
        options: {
          discovery: "Discovery Phase Services",
          earlyStage: "For Early-Stage Startups",
          growthStage: "For Growth-Stage Startups",
          cto: "CTO as a Service",
        },
      },
      step3: {
        question: "Perfect! Would you like a free 15-minute discovery call to discuss how we can help?",
        yes: "Yes, I'd love to!",
        no: "No, thanks",
      },
      form: {
        title: "Great! Please share your details:",
        name: "Your Name",
        namePlaceholder: "John Doe",
        business: "Business Description",
        businessPlaceholder: "Tell us about your business...",
        email: "Email Address",
        emailPlaceholder: "john@example.com",
        submit: "Schedule Discovery Call",
        success: "Thank you! We'll be in touch soon.",
      },
      result: {
        title: "Thanks for your interest!",
        description: "Based on your selection:",
        reset: "Start Over",
      },
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
    about: {
      title: "About Us",
      subtitle: "Empowering businesses through innovative technology solutions and expert consulting services",
      story: {
        title: "Our Story",
        paragraph1: "Founded with a vision to bridge the gap between technology and business success, MGH Tech has been at the forefront of digital transformation. We believe that every organization, regardless of size, deserves access to world-class technology consulting and solutions.",
        paragraph2: "Our team of experienced professionals brings together decades of expertise in software development, IT strategy, and business process optimization. We're committed to delivering personalized solutions that drive real results for our clients.",
      },
      values: {
        title: "Our Values",
        value1: {
          title: "Client-Centric",
          description: "Your success is our success. We prioritize understanding your unique challenges and goals to deliver tailored solutions.",
        },
        value2: {
          title: "Excellence",
          description: "We maintain the highest standards in everything we do, from code quality to customer service.",
        },
        value3: {
          title: "Innovation",
          description: "We stay ahead of technology trends to provide cutting-edge solutions that give you a competitive advantage.",
        },
      },
      mission: {
        title: "Our Mission",
        description: "To democratize access to enterprise-level technology solutions and empower businesses to thrive in the digital age through expert consulting, innovative software development, and personalized support.",
      },
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
      about: "À Propos",
      blog: "Blog",
      contact: "Contact",
      getInTouch: "Nous contacter",
      login: "Connexion",
      getStarted: "Commencer",
    },
    hero: {
      badge: "Excellence en conseil technologique",
      title: "Transformer les Entreprises par la Technologie",
      subtitle: "Nos solutions expertes de conseil technologique stimulent l'innovation, optimisent les opérations et accélèrent la transformation numérique pour les entreprises de toutes tailles.",
      cta: "Commencez Votre Parcours",
      contact: "Contactez-Nous",
      audience: {
        entrepreneur: "Entrepreneurs",
        manufacturing: "Fabrication",
        marketing: "Agences Marketing",
      },
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
      discoveryTitle: "Services de Phase de Découverte",
      discoveryDesc: "Décisions fondées sur des preuves soutenues par la recherche :",
      discoveryPoint1: "Exigences claires et attentes réalistes",
      discoveryPoint2: "Coûts et délais prévisibles",
      discoveryPoint3: "Mise sur le marché plus rapide avec des changements minimes",
      discoveryPoint4: "Base solide pour un développement réussi",
      discoveryWho: "Pour Qui",
      discoveryWhoDesc: "Startups et fondateurs prêts à concrétiser leur idée—de la bonne manière. Que vous recherchiez un investissement, validiez un concept ou vous prépariez au développement, nous vous assurerons un départ solide.",
      learnMore: "En Savoir Plus",
      ctoTitle: "CTO en tant que Service",
      ctoSubtitle: "Votre Vision. Notre Expertise Technique. Sans Engagement à Temps Plein.",
      ctoDesc: "Vous savez où va votre startup, mais naviguer dans le paysage technique semble écrasant. Le CTO-as-a-Service de MGH Tech vous offre un leadership technologique expérimenté sans le salaire à six chiffres—vous guidant du concept au lancement et au-delà.",
      ctoWho: "Pour Qui",
      ctoWhoDesc: "Fondateurs et dirigeants d'entreprise qui ont besoin de conseils techniques experts mais ne sont pas prêts à embaucher un CTO à temps plein. Parfait pour les startups qui cherchent à se développer intelligemment et à prendre des décisions technologiques éclairées.",
      softwareTitle: "Service de Développement Logiciel",
      softwareSubtitle: "De l'Idée au Lancement – Nous Construisons Votre Vision de Bout en Bout",
      softwareDesc: "Arrêtez de jongler avec plusieurs fournisseurs et équipes fragmentées. MGH Tech offre des services complets de développement logiciel—menant votre projet du concept initial au lancement et au-delà, tout sous un même toit.",
      softwareWho: "Développement en Cycle Complet en Qui Vous Pouvez Avoir Confiance",
      softwareWhoDesc: "Que vous lanciez un nouveau produit, numérisiez votre entreprise ou développiez une plateforme existante, nous gérons tous les aspects du développement logiciel afin que vous puissiez vous concentrer sur la croissance de votre entreprise.",
    },
    questionnaire: {
      greeting: "Bonjour! 👋 Je suis là pour vous aider à trouver la solution parfaite pour votre entreprise.",
      step1: {
        question: "Qu'est-ce qui décrit le mieux votre entreprise?",
        options: {
          entrepreneur: "Entrepreneur",
          growing: "Entreprise en Croissance",
          enterprise: "Grande Entreprise",
        },
      },
      step2: {
        question: "Excellent! Quel service recherchez-vous?",
        options: {
          discovery: "Services de Phase de Découverte",
          earlyStage: "Pour Startups en Phase Initiale",
          growthStage: "Pour Startups en Phase de Croissance",
          cto: "CTO en tant que Service",
        },
      },
      step3: {
        question: "Parfait! Souhaitez-vous un appel découverte gratuit de 15 minutes pour discuter de comment nous pouvons vous aider?",
        yes: "Oui, avec plaisir!",
        no: "Non, merci",
      },
      form: {
        title: "Excellent! Partagez vos coordonnées:",
        name: "Votre Nom",
        namePlaceholder: "Jean Dupont",
        business: "Description de l'Entreprise",
        businessPlaceholder: "Parlez-nous de votre entreprise...",
        email: "Adresse Email",
        emailPlaceholder: "jean@exemple.com",
        submit: "Planifier l'Appel Découverte",
        success: "Merci! Nous vous contacterons bientôt.",
      },
      result: {
        title: "Merci de votre intérêt!",
        description: "Selon votre sélection:",
        reset: "Recommencer",
      },
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
    about: {
      title: "À Propos de Nous",
      subtitle: "Donner aux entreprises les moyens d'agir grâce à des solutions technologiques innovantes et des services de conseil experts",
      story: {
        title: "Notre Histoire",
        paragraph1: "Fondée avec la vision de combler le fossé entre la technologie et le succès commercial, MGH Tech est à l'avant-garde de la transformation numérique. Nous croyons que chaque organisation, quelle que soit sa taille, mérite l'accès à des services de conseil technologique et des solutions de classe mondiale.",
        paragraph2: "Notre équipe de professionnels expérimentés rassemble des décennies d'expertise en développement logiciel, stratégie informatique et optimisation des processus métier. Nous nous engageons à fournir des solutions personnalisées qui génèrent de vrais résultats pour nos clients.",
      },
      values: {
        title: "Nos Valeurs",
        value1: {
          title: "Centré Client",
          description: "Votre succès est notre succès. Nous priorisons la compréhension de vos défis et objectifs uniques pour fournir des solutions sur mesure.",
        },
        value2: {
          title: "Excellence",
          description: "Nous maintenons les plus hauts standards dans tout ce que nous faisons, de la qualité du code au service client.",
        },
        value3: {
          title: "Innovation",
          description: "Nous restons à l'avant-garde des tendances technologiques pour fournir des solutions de pointe qui vous donnent un avantage concurrentiel.",
        },
      },
      mission: {
        title: "Notre Mission",
        description: "Démocratiser l'accès aux solutions technologiques de niveau entreprise et permettre aux entreprises de prospérer à l'ère numérique grâce à des conseils d'experts, un développement logiciel innovant et un support personnalisé.",
      },
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
