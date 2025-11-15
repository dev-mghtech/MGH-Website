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
    let value = translations[language];
    
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
      about: "About MGH",
      blog: "Blog",
      contact: "Contact",
      getInTouch: "Get in touch",
      login: "Log in",
      getStarted: "Get Started",
    },
    offer: {
      badge: "☕ Free Coffee Chat:",
      text: "Book your free 15-minute coffee chat to talk about your project and explore how we can help.",
      cta: "Schedule Chat",
    },
    hero: {
      badgeText: "New!",
      badge: "Book a free coffee chat with us ☕",
      title: "Transforming Potential into Impactful Software",
      subtitle: "MGH Tech partners with businesses to uncover opportunities, shape technology strategies, and deliver solutions that move you forward.",
      cta: "Start Your Journey",
      contact: "Contact Us",
      audience: {
        entrepreneur: "Entrepreneurs",
        manufacturing: "Manufacturing",
        marketing: "Marketing Agencies",
      },
    },
    whoWeHelp: {
      title: "Who We Help",
      subtitle: "From early ideas to enterprise solutions — we help you move forward.",
      clientType1: {
          title: "Entrepreneurs",
          description: "Personalized technology consulting and product strategy to help turn ideas into impactful products.",
        },
        clientType2: {
          title: "Growing Companies",
          description: "Scalable solutions that streamline operations, strengthen products, and accelerate sustainable growth.",
        },
        clientType3: {
          title: "Enterprise",
          description: "Comprehensive technology transformation designed to enhance efficiency, innovation, and long-term success.",
        },
    },
    services: {
      individualsTitle: "Entrepreneurs",
      individualsDesc: "Personalized technology consulting and product strategy to help turn ideas into impactful products.",
      growingTitle: "Growing Companies",
      growingDesc: "Scalable solutions that streamline operations, strengthen products, and accelerate sustainable growth.",
      enterpriseTitle: "Enterprise",
      enterpriseDesc: "Comprehensive technology transformation designed to enhance efficiency, innovation, and long-term success.",
    },
    clients: {
      title: "In Good Company",
      subtitle: "We've partnered with trusted organizations across various industries",
    },
    solutions: {
      title: "Technology & Strategy Services",
      subtitle: "We deliver personalized strategies and hands-on guidance to empower your team and accelerate your project or current business. Every solution is crafted around your unique goals — driving clarity, capability, and long-term success.",
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
      subtitle: "Small team. Big expertise. Real impact.",
      story: {
        title: "Who We Are",
        paragraph1: "We're a small team of software engineers who've worked in both fast-moving startups and some of the world's most successful tech companies. Every project we take on benefits from that dual perspective — combining startup agility with enterprise-grade standards.",
        paragraph2: "At MGH Tech, we're highly selective about the projects we accept. We only partner with clients when we know we can bring genuine, industry-leading expertise and create meaningful impact. This focus allows us to give every project the depth, precision, and commitment it deserves.",
        paragraph3: "Depending on your project's needs, we assemble the right expertise — whether from our core team or our network of trusted engineers and professionals — to deliver tailored, high-impact solutions.",
        paragraph4: "When we truly believe in your vision, that's when our best work happens. Those are the projects that ignite our passion — where we become more than consultants, but a true extension of your team. We dive deep into your business, your users, and your goals to build software that creates real, measurable value and lasting success.",
        paragraph5: "What drives us isn't just building great software — it's seeing it make a difference. When our solutions help you reach your goals, that's when we know we've done our job right.",
      },
    },
    footer: {
      tagline: "Transforming Potential into Impactful Software",
      company: "Company",
      about: "About",
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
    offer: {
      badge: "Planifie un appel découverte gratuit avec nous ☕",
      text: "Réservez votre chat café gratuit de 15 minutes pour parler de votre projet et explorer comment nous pouvons vous aider.",
      cta: "Planifier un Chat",
    },
    hero: {
      badgeText: "Nouveau!",
      badge: "Planifie un appel découverte gratuit avec nous ☕",
      title: "Transformez votre Potentiel en Solution Logicielle",
      subtitle: "Nos solutions expertes de conseil technologique stimulent l'innovation, optimisent les opérations et accélèrent la transformation numérique pour les entreprises de toutes tailles.",
      cta: "Commencez votre parcours",
      contact: "Contactez-Nous",
      audience: {
        entrepreneur: "Entrepreneurs",
        manufacturing: "Fabrication",
        marketing: "Agences Marketing",
      },
    },
    whoWeHelp: {
      title: "Qui aidons-nous?",
      subtitle: "Que ce soit une idée entrepreneuriale ou une solution d’entreprise, nous vous aidons à avancer.",
      clientType1: {
        title: "Entrepreneurs",
        description: "Conseils technologiques personnalisés et stratégie pour transformer vos idées de MVP à produit complet.",
      },
      clientType2: {
        title: "Compagnies en croissance",
        description: "Des solutions évolutives qui optimisent vos opérations, renforcent vos produits et accélèrent une croissance durable.",
      },
      clientType3: {
        title: "Enterprise",
        description: "Développement technologique conçu pour améliorer l’efficacité, stimuler l’innovation et assurer le succès à long terme.",
      },

    },
    clients: {
      title: "La Confiance des Leaders de l'Industrie",
      subtitle: "Nous avons travaillé avec des organisations de premier plan dans divers secteurs",
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
      subtitle: "Petite équipe. Grande expertise. Impact réel.",
      story: {
        title: "Qui Nous Sommes",
        paragraph1: "Nous sommes une petite équipe d'ingénieurs logiciels ayant travaillé dans des startups dynamiques et certaines des entreprises technologiques les plus prospères au monde. Chaque projet bénéficie de cette double perspective — combinant l'agilité des startups avec des standards de niveau entreprise.",
        paragraph2: "Chez MGH Tech, nous sommes très sélectifs quant aux projets que nous acceptons. Nous ne nous associons qu'avec des clients lorsque nous savons que nous pouvons apporter une expertise réellement de pointe et créer un impact significatif. Cette concentration nous permet de donner à chaque projet la profondeur, la précision et l'engagement qu'il mérite.",
        paragraph3: "Selon les besoins de votre projet, nous assemblons la bonne expertise — que ce soit de notre équipe principale ou de notre réseau d'ingénieurs et de professionnels de confiance — pour fournir des solutions sur mesure à fort impact.",
        paragraph4: "Lorsque nous croyons vraiment en votre vision, c'est là que notre meilleur travail se produit. Ce sont les projets qui enflamment notre passion — où nous devenons plus que des consultants, mais une véritable extension de votre équipe. Nous plongeons profondément dans votre entreprise, vos utilisateurs et vos objectifs pour construire des logiciels qui créent une valeur réelle et mesurable et un succès durable.",
        paragraph5: "Ce qui nous motive, ce n'est pas seulement de créer d'excellents logiciels — c'est de voir qu'ils font une différence. Quand nos solutions vous aident à atteindre vos objectifs, c'est là que nous savons que nous avons bien fait notre travail.",
      },
    },
    footer: {
      tagline: "Transformer le Potentiel en Logiciels à Impact",
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
