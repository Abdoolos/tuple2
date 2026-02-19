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
      "mkt.heroTitle": "Vi bygger merkevarer som faktisk selger.",
      "mkt.heroSub1": "For selskaper innen helse, hudpleie og livsstil som vil bygge tillit, følge regelverket og vokse på en bærekraftig måte.",
      "mkt.heroSub2": "Vi tar ikke alle kunder – vi tar de rette. Er du klar for å bygge noe som varer?",
      "mkt.heroBtn1": "Book 15 min gratis →",
      "mkt.heroBtn2": "Se hva vi har bygget",

      // Marketing Page - Focus Section
      "mkt.focusTitle": "Hvem vi jobber med",
      "mkt.focusSub": "Vi spesialiserer oss på selskaper som har et produkt folk faktisk trenger – og som ønsker å nå dem på en ærlig og effektiv måte.",
      "mkt.focus1Title": "Kosttilskudd & Urter",
      "mkt.focus1Text": "Fra adaptogener til vitaminer – vi kjenner bransjen og reglene.",
      "mkt.focus2Title": "Naturlig Hudpleie",
      "mkt.focus2Text": "Serum, krem og behandlinger – vi formidler effekten, ikke bare estetikken.",
      "mkt.focus3Title": "Trening & Performance",
      "mkt.focus3Text": "Energi, fokus og kropp – markedsføring som motiverer, ikke lover for mye.",
      "mkt.focusLink": "Se hva vi gjør →",

      // Marketing Page - Principles
      "mkt.principlesTitle": "Slik tenker vi",
      "mkt.pr1Title": "Tillit slår triks",
      "mkt.pr1Text": "Kunder som stoler på deg kommer tilbake. Vi bygger langsiktig omdømme, ikke bare klikk.",
      "mkt.pr2Title": "Estetikk + salg",
      "mkt.pr2Text": "Pent design er ikke nok. Vi kombinerer god estetikk med klar salgsstrategi.",
      "mkt.pr3Title": "Effekt over ego",
      "mkt.pr3Text": "Vi måler suksess i resultater – ikke i fine rapporter eller imponerende buzzwords.",

      // Marketing Page - How we help
      "mkt.helpTitle": "Slik hjelper vi deg",
      "mkt.helpSub": "Vi jobber ikke med raske triks eller copy-paste løsninger. Vi setter oss inn i din merkevare og bygger en strategi som gir resultater over tid.",
      "mkt.help1Title": "Butikk som selger",
      "mkt.help1Text": "Vi setter opp og optimaliserer nettbutikken din for konvertering. Riktig plattform, riktig opplevelse.",
      "mkt.help2Title": "Annonser som virker",
      "mkt.help2Text": "TikTok og Meta-kampanjer bygget på innsikt – ikke magefølelse. Vi tester, måler og forbedrer.",
      "mkt.help3Title": "Synlighet uten annonser",
      "mkt.help3Text": "SEO-innhold skrevet riktig – trygt, faktabasert og optimalisert for søk og tillit.",

      // Marketing Page - CTA
      "mkt.ctaTitle": "Vil du bygge noe skikkelig?",
      "mkt.ctaSub": "Vi tar en gratis 15-minutters samtale for å se om vi er riktig match for deg. Ingen forpliktelser, ingen salgspress.",
      "mkt.ctaBtn": "Book gratis samtale →",
      "mkt.ctaSmall": "Tilgjengelig på norsk og engelsk. Vi svarer innen én arbeidsdag.",

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
      "labs.heroTitle": "Teknologi som bygger, automatiserer og skalerer virksomheten din.",
      "labs.heroText1": "Vi er ikke et byrå. Vi er et laboratorium. Vi bygger systemer, apper og AI-løsninger for selskaper som allerede vokser – og trenger infrastruktur som henger med.",
      "labs.heroText2": "Ikke et byrå. Et laboratorium.",

      // Labs Page - Comparison Table
      "labs.compareTitle": "Andre byråer vs Tuple Labs",
      "labs.compareOther": "Andre",
      "labs.compareTuple": "Tuple Labs",
      "labs.compare1Other": "Leverer nettsider",
      "labs.compare1Tuple": "Bygger komplette systemer",
      "labs.compare2Other": "Forsvinner etter lansering",
      "labs.compare2Tuple": "Drifter og videreutvikler",
      "labs.compare3Other": "Du tilpasser deg verktøyet",
      "labs.compare3Tuple": "Verktøyet tilpasses deg",
      "labs.compare4Other": "Black box-kode du ikke eier",
      "labs.compare4Tuple": "Ren kode – du eier alt",

      // Labs Page - Services
      "labs.servicesSub": "Vi leverer ikke standardpakker. Vi forstår utfordringen din, designer arkitekturen og bygger løsningen fra bunnen – med kode du eier.",
      "labs.servicesTitle": "Hva vi faktisk bygger",
      "labs.svc1Title": "AI & Automatisering",
      "labs.svc1Item1": "Chatbots og interne AI-verktøy",
      "labs.svc1Item2": "Automatisering av ordre, lager og support",
      "labs.svc1Item3": "AI i praksis – ikke bare i presentasjoner",
      "labs.svc2Title": "App & Systemutvikling",
      "labs.svc2Item1": "iOS, Android og Web / PWA",
      "labs.svc2Item2": "Backend, API og CRM/ERP-integrasjoner",
      "labs.svc2Item3": "Dashboards, portaler og datavisning",
      "labs.svc3Title": "Teknisk e-handel",
      "labs.svc3Item1": "Shopify med custom logikk",
      "labs.svc3Item2": "Abonnement og medlemskapsløsninger",
      "labs.svc3Item3": "Vipps, Klarna, logistikk og regnskap",

      // Labs Page - Security
      "labs.securityTitle": "Trygghet og eierskap fra dag én",
      "labs.securitySub": "Vi bygger med sikkerhet og transparens som standard. Du eier koden, dataene og infrastrukturen – alltid.",
      "labs.sec1": "Kunden eier all kode og infrastruktur",
      "labs.sec2": "Data lagret i EU etter avtale",
      "labs.sec3": "GDPR og DPA fra start",
      "labs.sec4": "Logging, overvåkning og varsler inkludert",

      // Labs Page - Process
      "labs.processTitle": "Slik bygger vi systemer som tåler vekst",
      "labs.processSub": "Vi følger en strukturert prosess fra diagnose til drift – slik at ingenting glipper.",
      "labs.process1Title": "Forstå",
      "labs.process1Text": "Workshop, diagnose og veikart",
      "labs.process2Title": "Planlegge",
      "labs.process2Text": "Arkitektur og estimat",
      "labs.process3Title": "Bygge",
      "labs.process3Text": "Sprints med ukentlige demoer",
      "labs.process4Title": "Teste",
      "labs.process4Text": "Last, brukere, AI og feil",
      "labs.process5Title": "Skalere",
      "labs.process5Text": "Drift, automasjon og videreutvikling",

      // Labs Page - CTA
      "labs.ctaTitle": "Klar for å starte?",
      "labs.ctaSub": "Ta en gratis 20-minutters teknisk vurdering. Vi ser på utfordringen din og forteller deg ærlig hva som trengs.",
      "labs.ctaBtn": "Start et prosjekt →",
      "labs.ctaLink": "Gratis teknisk vurdering",

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
      "mkt.heroTitle": "We build brands that actually sell.",
      "mkt.heroSub1": "For companies in health, skincare and lifestyle that want to build trust, follow regulations and grow sustainably.",
      "mkt.heroSub2": "We don't take every client – we take the right ones. Ready to build something that lasts?",
      "mkt.heroBtn1": "Book 15 min free →",
      "mkt.heroBtn2": "See what we've built",

      // Marketing Page - Focus Section
      "mkt.focusTitle": "Who we work with",
      "mkt.focusSub": "We specialize in companies that have a product people actually need – and want to reach them in an honest and effective way.",
      "mkt.focus1Title": "Supplements & Herbs",
      "mkt.focus1Text": "From adaptogens to vitamins – we know the industry and the regulations.",
      "mkt.focus2Title": "Natural Skincare",
      "mkt.focus2Text": "Serums, creams and treatments – we communicate the effect, not just the aesthetics.",
      "mkt.focus3Title": "Training & Performance",
      "mkt.focus3Text": "Energy, focus and body – marketing that motivates, without overpromising.",
      "mkt.focusLink": "See what we do →",

      // Marketing Page - Principles
      "mkt.principlesTitle": "How we think",
      "mkt.pr1Title": "Trust beats tricks",
      "mkt.pr1Text": "Customers who trust you come back. We build long-term reputation, not just clicks.",
      "mkt.pr2Title": "Aesthetics + sales",
      "mkt.pr2Text": "Pretty design isn't enough. We combine good aesthetics with a clear sales strategy.",
      "mkt.pr3Title": "Results over ego",
      "mkt.pr3Text": "We measure success in results – not in fancy reports or impressive buzzwords.",

      // Marketing Page - How we help
      "mkt.helpTitle": "How we help you",
      "mkt.helpSub": "We don't do quick tricks or copy-paste solutions. We understand your brand and build a strategy that delivers results over time.",
      "mkt.help1Title": "Store that sells",
      "mkt.help1Text": "We set up and optimize your online store for conversions. Right platform, right experience.",
      "mkt.help2Title": "Ads that work",
      "mkt.help2Text": "TikTok and Meta campaigns built on insight – not gut feeling. We test, measure and improve.",
      "mkt.help3Title": "Visibility without ads",
      "mkt.help3Text": "SEO content written right – safe, fact-based and optimized for search and trust.",

      // Marketing Page - CTA
      "mkt.ctaTitle": "Want to build something real?",
      "mkt.ctaSub": "We offer a free 15-minute call to see if we're the right match for you. No obligations, no sales pressure.",
      "mkt.ctaBtn": "Book free call →",
      "mkt.ctaSmall": "Available in Norwegian and English. We respond within one business day.",

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
      "labs.heroTitle": "Technology that builds, automates and scales your business.",
      "labs.heroText1": "We're not an agency. We're a laboratory. We build systems, apps and AI solutions for companies that are already growing – and need infrastructure that keeps up.",
      "labs.heroText2": "Not an agency. A laboratory.",

      // Labs Page - Comparison Table
      "labs.compareTitle": "Other agencies vs Tuple Labs",
      "labs.compareOther": "Others",
      "labs.compareTuple": "Tuple Labs",
      "labs.compare1Other": "Deliver websites",
      "labs.compare1Tuple": "Build complete systems",
      "labs.compare2Other": "Disappear after launch",
      "labs.compare2Tuple": "Operate and develop further",
      "labs.compare3Other": "You adapt to the tool",
      "labs.compare3Tuple": "The tool adapts to you",
      "labs.compare4Other": "Black box code you don't own",
      "labs.compare4Tuple": "Clean code – you own everything",

      // Labs Page - Services
      "labs.servicesSub": "We don't deliver standard packages. We understand your challenge, design the architecture and build the solution from scratch – with code you own.",
      "labs.servicesTitle": "What we actually build",
      "labs.svc1Title": "AI & Automation",
      "labs.svc1Item1": "Chatbots and internal AI tools",
      "labs.svc1Item2": "Automation of orders, inventory and support",
      "labs.svc1Item3": "AI in practice – not just in presentations",
      "labs.svc2Title": "App & System Development",
      "labs.svc2Item1": "iOS, Android and Web / PWA",
      "labs.svc2Item2": "Backend, API and CRM/ERP integrations",
      "labs.svc2Item3": "Dashboards, portals and data visualization",
      "labs.svc3Title": "Technical e-commerce",
      "labs.svc3Item1": "Shopify with custom logic",
      "labs.svc3Item2": "Subscription and membership solutions",
      "labs.svc3Item3": "Vipps, Klarna, logistics and accounting",

      // Labs Page - Security
      "labs.securityTitle": "Security and ownership from day one",
      "labs.securitySub": "We build with security and transparency as standard. You own the code, the data and the infrastructure – always.",
      "labs.sec1": "Customer owns all code and infrastructure",
      "labs.sec2": "Data stored in EU by agreement",
      "labs.sec3": "GDPR and DPA from start",
      "labs.sec4": "Logging, monitoring and alerts included",

      // Labs Page - Process
      "labs.processTitle": "How we build systems that handle growth",
      "labs.processSub": "We follow a structured process from diagnosis to operations – so nothing slips through.",
      "labs.process1Title": "Understand",
      "labs.process1Text": "Workshop, diagnosis and roadmap",
      "labs.process2Title": "Plan",
      "labs.process2Text": "Architecture and estimate",
      "labs.process3Title": "Build",
      "labs.process3Text": "Sprints with weekly demos",
      "labs.process4Title": "Test",
      "labs.process4Text": "Load, users, AI and bugs",
      "labs.process5Title": "Scale",
      "labs.process5Text": "Operations, automation and further development",

      // Labs Page - CTA
      "labs.ctaTitle": "Ready to start?",
      "labs.ctaSub": "Get a free 20-minute technical assessment. We look at your challenge and tell you honestly what's needed.",
      "labs.ctaBtn": "Start a project →",
      "labs.ctaLink": "Free technical assessment",

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
