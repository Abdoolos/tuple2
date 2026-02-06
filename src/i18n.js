import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  no: {
    translation: {
      // Home
      "home.tagline": "Kreativitet møter teknologi",
      "home.marketing": "Tulpe Marketing",
      "home.labs": "Tuple Labs",
      
      // Header
      "header.home": "Hjem",
      "header.labs": "Labs",
      "header.marketing": "Marketing",
      "header.tulpeMarketing": "Tulpe Marketing",
      "header.tupleLabs": "Tuple Labs",
      
      // Marketing Page
      "marketing.title": "Tulpe Marketing – Merkevare & Vekst",
      "marketing.subtitle": "En del av Tuple.no. Vi fokuserer på markedsføring, merkevarebygging og vekst.",
      "marketing.partOf": "En del av Tuple.no",
      "marketing.services": "Våre Tjenester",
      "marketing.service1.title": "Branding & Identitet",
      "marketing.service1.desc": "Vi bygger sterke merkevarer som skiller seg ut.",
      "marketing.service2.title": "Innholdsstrategi",
      "marketing.service2.desc": "Strategisk innhold som engasjerer og konverterer.",
      "marketing.service3.title": "Sosiale Medier",
      "marketing.service3.desc": "Effektiv tilstedeværelse på alle plattformer.",
      "marketing.service4.title": "Vekstmarkedsføring",
      "marketing.service4.desc": "Datadrevet markedsføring for rask vekst.",
      "marketing.service5.title": "E-postmarkedsføring",
      "marketing.service5.desc": "Personaliserte kampanjer som gir resultater.",
      "marketing.service6.title": "Analyse & Rapportering",
      "marketing.service6.desc": "Innsikt som driver bedre beslutninger.",
      "marketing.cta": "Kontakt oss",
      
      // Labs Page
      "labs.title": "Tuple Labs – Engineering Lab",
      "labs.subtitle": "En del av Tuple.no. Vi bygger nettsteder, apper og digitale produkter.",
      "labs.partOf": "En del av Tuple.no",
      "labs.services": "Våre Tjenester",
      "labs.service1.title": "Nettutvikling",
      "labs.service1.desc": "Moderne og raske nettsider med beste teknologi.",
      "labs.service2.title": "App-utvikling",
      "labs.service2.desc": "Native og cross-platform mobilapper.",
      "labs.service3.title": "API & Backend",
      "labs.service3.desc": "Skalerbare og sikre backend-løsninger.",
      "labs.service4.title": "AI & Automatisering",
      "labs.service4.desc": "Smarte løsninger med kunstig intelligens.",
      "labs.service5.title": "Cloud & DevOps",
      "labs.service5.desc": "Infrastruktur og deployment i skyen.",
      "labs.service6.title": "Teknisk Konsultasjon",
      "labs.service6.desc": "Ekspertråd for dine tekniske utfordringer.",
      "labs.cta": "Kontakt oss",
    }
  },
  en: {
    translation: {
      // Home
      "home.tagline": "Where creativity meets technology",
      "home.marketing": "Tulpe Marketing",
      "home.labs": "Tuple Labs",
      
      // Header
      "header.home": "Home",
      "header.labs": "Labs",
      "header.marketing": "Marketing",
      "header.tulpeMarketing": "Tulpe Marketing",
      "header.tupleLabs": "Tuple Labs",
      
      // Marketing Page
      "marketing.title": "Tulpe Marketing – Brand & Growth",
      "marketing.subtitle": "Part of Tuple.no. We focus on marketing, branding, and growth.",
      "marketing.partOf": "Part of Tuple.no",
      "marketing.services": "Our Services",
      "marketing.service1.title": "Branding & Identity",
      "marketing.service1.desc": "We build strong brands that stand out.",
      "marketing.service2.title": "Content Strategy",
      "marketing.service2.desc": "Strategic content that engages and converts.",
      "marketing.service3.title": "Social Media",
      "marketing.service3.desc": "Effective presence across all platforms.",
      "marketing.service4.title": "Growth Marketing",
      "marketing.service4.desc": "Data-driven marketing for rapid growth.",
      "marketing.service5.title": "Email Marketing",
      "marketing.service5.desc": "Personalized campaigns that deliver results.",
      "marketing.service6.title": "Analytics & Reporting",
      "marketing.service6.desc": "Insights that drive better decisions.",
      "marketing.cta": "Contact us",
      
      // Labs Page
      "labs.title": "Tuple Labs – Engineering Lab",
      "labs.subtitle": "Part of Tuple.no. We build websites, apps, and digital products.",
      "labs.partOf": "Part of Tuple.no",
      "labs.services": "Our Services",
      "labs.service1.title": "Web Development",
      "labs.service1.desc": "Modern and fast websites with best technology.",
      "labs.service2.title": "App Development",
      "labs.service2.desc": "Native and cross-platform mobile apps.",
      "labs.service3.title": "API & Backend",
      "labs.service3.desc": "Scalable and secure backend solutions.",
      "labs.service4.title": "AI & Automation",
      "labs.service4.desc": "Smart solutions with artificial intelligence.",
      "labs.service5.title": "Cloud & DevOps",
      "labs.service5.desc": "Infrastructure and deployment in the cloud.",
      "labs.service6.title": "Technical Consulting",
      "labs.service6.desc": "Expert advice for your technical challenges.",
      "labs.cta": "Contact us",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'no',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
