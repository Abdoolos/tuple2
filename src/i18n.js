import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  no: {
    translation: {
      // Header
      "header.labs": "Labs",
      "header.marketing": "Marketing",
      "header.book": "Book 15 min gratis",
      "header.tupleLabs": "Tuple Labs",
      "header.tupleMarketing": "Tuple Marketing",

      // Home Page
      "home.heroTitle": "Vi bygger systemer for vekst.",
      "home.heroSubtitle": "Markedsføring og teknologi samlet i ett selskap – for selskaper som vil fremover.",
      "home.card1Badge": "Tuple",
      "home.card1Title": "Tuple Marketing",
      "home.card1Text": "Merkevare, markedsføring og vekst",
      "home.card1Btn": "Se hvilke resultater vi skaper →",
      "home.card2Badge": "Tuple",
      "home.card2Title": "Tuple Labs",
      "home.card2Text": "Teknologi, produkter og systemer",
      "home.card2Btn": "Se hva vi bygger →",
      "home.footerText": "Begge teamene jobber tett sammen – du får én partner, ikke to leverandører.",

      // Marketing Page - Hero
      "mkt.heroTitle": "Vi bygger merkevarer som selger – uten bullshit.",
      "mkt.heroSub1": "For selskaper innen helse, hud, kosttilskudd og livsstil som vil bygge tillit, følge reglene – og faktisk vokse.",
      "mkt.heroSub2": "Dette er ikke for deg som vil 'teste litt'. Dette er for deg som vil bygge noe som varer.",
      "mkt.heroBtn1": "Book 15 min gratis",
      "mkt.heroBtn2": "Start med en idé →",

      // Marketing Page - Focus Section
      "mkt.focusTitle": "Fullt fokus på helse og livsstil",
      "mkt.focusSub": "Kosttilskudd, hud, funksjonell helse, adaptogener, livsstil",
      "mkt.focus1Title": "Kosttilskudd & Urter",
      "mkt.focus1Text": "Planter, piller, opptak",
      "mkt.focus2Title": "Naturlig Hudpleie",
      "mkt.focus2Text": "Serum, krem, glow",
      "mkt.focus3Title": "Trening & Performance",
      "mkt.focus3Text": "Energi, fokus, kropp",
      "mkt.focusLink": "Se hva vi gjør →",

      // Marketing Page - Principles
      "mkt.principlesTitle": "Våre prinsipper",
      "mkt.pr1Title": "Tillit slår triks",
      "mkt.pr1Text": "Vi bygger langsiktig – følger regler",
      "mkt.pr2Title": "Estetikk + salg",
      "mkt.pr2Text": "Pent design. Fra produkter",
      "mkt.pr3Title": "Effekt > kosmetikk",
      "mkt.pr3Text": "Markedsføring som faktisk gir kunder",

      // Marketing Page - How we help
      "mkt.helpTitle": "Hvordan vi hjelper deg",
      "mkt.help1Title": "Butikk som selger",
      "mkt.help1Text": "Riktig plattform + nettside,",
      "mkt.help2Title": "Annonser som virker",
      "mkt.help2Text": "TikTok / Meta kampanjer –",
      "mkt.help3Title": "Synlighet uten annonser",
      "mkt.help3Text": "SEO-innhold skrevet trygt.",

      // Marketing Page - CTA
      "mkt.ctaTitle": "Rammer satt – prosesser tilpasset",
      "mkt.ctaBtn": "Book 15 min gratis >",

      // Marketing Page - Why us
      "mkt.whyTitle": "Hvorfor velge oss",
      "mkt.why1Title": "Regelverk & compliance-first",
      "mkt.why1Text": "Vi kjenner reglene – og følger dem",
      "mkt.why2Title": "Erfaring fra helse / livsstil",
      "mkt.why2Text": "Vi har jobbet med kosttilskudd,",
      "mkt.why3Title": "Jobber tett med Tuple Labs",
      "mkt.why3Text": "Markedsførere som skjønner tech",

      // Marketing Page - Footer
      "mkt.footerTitle": "Tuple Marketing",
      "mkt.footerEmail": "hei@tuple.no",
      "mkt.footerLocation": "Norge – jobber digitalt, globalt",
      "mkt.footerCopy": "2024 Tuple Labs ©. Nettsider laget med kjærlighet i Oslo 💜",

      // Labs Page - Hero
      "labs.heroTitle": "Teknologi som bygger, automatiserer og skalerer virksomheter.",
      "labs.heroText1": "AI, app, backend og systemer – for deg som allerede har kunder og trenger mer enn standardløsninger.",
      "labs.heroText2": "Ikke et byrå. Et laboratorium.",

      // Labs Page - Comparison Table
      "labs.compareTitle": "Hva vi faktisk bygger",
      "labs.compareOther": "Andre",
      "labs.compareTuple": "Tuple Labs",
      "labs.compare1Other": "Leverer nettsider",
      "labs.compare1Tuple": "Bygger systemer",
      "labs.compare2Other": "Forsvinner etter launch",
      "labs.compare2Tuple": "Bygger og drifter",
      "labs.compare3Other": "Du tilpasser deg",
      "labs.compare3Tuple": "Systemet tilpasses deg",
      "labs.compare4Other": "Black box-kode",
      "labs.compare4Tuple": "Kode du eier",

      // Labs Page - Services
      "labs.servicesTitle": "Hva vi faktisk bygger",
      "labs.svc1Title": "AI & Automatisering",
      "labs.svc1Item1": "Chatbots, interne AI-verktøy",
      "labs.svc1Item2": "Automatisering av ordre, lager, support",
      "labs.svc1Item3": "AI brukt i praksis, ikke hype",
      "labs.svc2Title": "App & Systemutvikling",
      "labs.svc2Item1": "iOS / Android | Web / PWA",
      "labs.svc2Item2": "Backend, API, CRM/ERP-integrasjoner",
      "labs.svc2Item3": "Dashboards, portaler, datavisning",
      "labs.svc3Title": "Teknisk e-handel & plattformer",
      "labs.svc3Item1": "Shopify + custom logikk",
      "labs.svc3Item2": "Abonnement, medlemskap",
      "labs.svc3Item3": "Vipps, Klarna, logistikk, regnskap",

      // Labs Page - Security
      "labs.securityTitle": "Trygghet & eierskap",
      "labs.sec1": "Kunden eier kode og infrastruktur.",
      "labs.sec2": "Data i EU / etter avtale.",
      "labs.sec3": "GDPR & DPA fra start.",
      "labs.sec4": "Logging, overvåkning, varsler.",

      // Labs Page - CTA
      "labs.ctaTitle": "Klar for å starte?",
      "labs.ctaBtn": "Start et prosjekt >",
      "labs.ctaLink": "Gratis 20-min teknisk vurdering",

      // Labs Page - Footer
      "labs.footerTitle": "Tuple Labs",
      "labs.footerEmail": "hei@tuple.no",
      "labs.footerLocation": "Norge – jobber digitalt, globalt",
    }
  },
  en: {
    translation: {
      // Header
      "header.labs": "Labs",
      "header.marketing": "Marketing",
      "header.book": "Book 15 min free",
      "header.tupleLabs": "Tuple Labs",
      "header.tupleMarketing": "Tuple Marketing",

      // Home Page
      "home.heroTitle": "We build systems for growth.",
      "home.heroSubtitle": "Marketing and technology combined in one company – for companies that want to move forward.",
      "home.card1Badge": "Tuple",
      "home.card1Title": "Tuple Marketing",
      "home.card1Text": "Branding, marketing and growth",
      "home.card1Btn": "See the results we create →",
      "home.card2Badge": "Tuple",
      "home.card2Title": "Tuple Labs",
      "home.card2Text": "Technology, products and systems",
      "home.card2Btn": "See what we build →",
      "home.footerText": "Both teams work closely together – you get one partner, not two suppliers.",

      // Marketing Page - Hero
      "mkt.heroTitle": "We build brands that sell – without bullshit.",
      "mkt.heroSub1": "For companies in health, skincare, supplements and lifestyle that want to build trust, follow the rules – and actually grow.",
      "mkt.heroSub2": "This is not for those who want to 'test a little'. This is for those who want to build something that lasts.",
      "mkt.heroBtn1": "Book 15 min free",
      "mkt.heroBtn2": "Start with an idea →",

      // Marketing Page - Focus Section
      "mkt.focusTitle": "Full focus on health and lifestyle",
      "mkt.focusSub": "Supplements, skincare, functional health, adaptogens, lifestyle",
      "mkt.focus1Title": "Supplements & Herbs",
      "mkt.focus1Text": "Plants, pills, absorption",
      "mkt.focus2Title": "Natural Skincare",
      "mkt.focus2Text": "Serum, cream, glow",
      "mkt.focus3Title": "Training & Performance",
      "mkt.focus3Text": "Energy, focus, body",
      "mkt.focusLink": "See what we do →",

      // Marketing Page - Principles
      "mkt.principlesTitle": "Our principles",
      "mkt.pr1Title": "Trust beats tricks",
      "mkt.pr1Text": "We build long-term – follow the rules",
      "mkt.pr2Title": "Aesthetics + sales",
      "mkt.pr2Text": "Beautiful design. From products",
      "mkt.pr3Title": "Effect > cosmetics",
      "mkt.pr3Text": "Marketing that actually brings customers",

      // Marketing Page - How we help
      "mkt.helpTitle": "How we help you",
      "mkt.help1Title": "Store that sells",
      "mkt.help1Text": "Right platform + website,",
      "mkt.help2Title": "Ads that work",
      "mkt.help2Text": "TikTok / Meta campaigns –",
      "mkt.help3Title": "Visibility without ads",
      "mkt.help3Text": "SEO content written safely.",

      // Marketing Page - CTA
      "mkt.ctaTitle": "Framework set – processes adapted",
      "mkt.ctaBtn": "Book 15 min free >",

      // Marketing Page - Why us
      "mkt.whyTitle": "Why choose us",
      "mkt.why1Title": "Regulation & compliance-first",
      "mkt.why1Text": "We know the rules – and follow them",
      "mkt.why2Title": "Experience from health / lifestyle",
      "mkt.why2Text": "We have worked with supplements,",
      "mkt.why3Title": "Works closely with Tuple Labs",
      "mkt.why3Text": "Marketers who understand tech",

      // Marketing Page - Footer
      "mkt.footerTitle": "Tuple Marketing",
      "mkt.footerEmail": "hei@tuple.no",
      "mkt.footerLocation": "Norway – works digitally, globally",
      "mkt.footerCopy": "2024 Tuple Labs ©. Websites made with love in Oslo 💜",

      // Labs Page - Hero
      "labs.heroTitle": "Technology that builds, automates and scales businesses.",
      "labs.heroText1": "AI, apps, backend and systems – for those who already have customers and need more than standard solutions.",
      "labs.heroText2": "Not an agency. A laboratory.",

      // Labs Page - Comparison Table
      "labs.compareTitle": "What we actually build",
      "labs.compareOther": "Others",
      "labs.compareTuple": "Tuple Labs",
      "labs.compare1Other": "Deliver websites",
      "labs.compare1Tuple": "Build systems",
      "labs.compare2Other": "Disappear after launch",
      "labs.compare2Tuple": "Build and operate",
      "labs.compare3Other": "You adapt",
      "labs.compare3Tuple": "The system adapts to you",
      "labs.compare4Other": "Black box code",
      "labs.compare4Tuple": "Code you own",

      // Labs Page - Services
      "labs.servicesTitle": "What we actually build",
      "labs.svc1Title": "AI & Automation",
      "labs.svc1Item1": "Chatbots, internal AI tools",
      "labs.svc1Item2": "Automation of orders, inventory, support",
      "labs.svc1Item3": "AI used in practice, not hype",
      "labs.svc2Title": "App & System Development",
      "labs.svc2Item1": "iOS / Android | Web / PWA",
      "labs.svc2Item2": "Backend, API, CRM/ERP integrations",
      "labs.svc2Item3": "Dashboards, portals, data visualization",
      "labs.svc3Title": "Technical e-commerce & platforms",
      "labs.svc3Item1": "Shopify + custom logic",
      "labs.svc3Item2": "Subscriptions, memberships",
      "labs.svc3Item3": "Vipps, Klarna, logistics, accounting",

      // Labs Page - Security
      "labs.securityTitle": "Security & ownership",
      "labs.sec1": "Customer owns code and infrastructure.",
      "labs.sec2": "Data in EU / by agreement.",
      "labs.sec3": "GDPR & DPA from start.",
      "labs.sec4": "Logging, monitoring, alerts.",

      // Labs Page - CTA
      "labs.ctaTitle": "Ready to start?",
      "labs.ctaBtn": "Start a project >",
      "labs.ctaLink": "Free 20-min technical assessment",

      // Labs Page - Footer
      "labs.footerTitle": "Tuple Labs",
      "labs.footerEmail": "hei@tuple.no",
      "labs.footerLocation": "Norway – works digitally, globally",
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
