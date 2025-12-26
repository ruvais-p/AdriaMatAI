export type SolutionItem = {
  title: string;
  icon: string;
  description: string;
};

export type CompanyItem = {
  image: string;
};

export type ProjectItem = {
  category: string;
  title: string;
  description: string;
  image: string;
  link: string;
};

export type TestimonialItem = {
  id: number;
  text: string;
  name: string;
  position: string;
  image: string;
};

export type FooterLink = {
  link: string;
};

export type SubMenuItem = {
  label: string;
  href: string;
};

export type HeaderItem = {
  label: string;
  href: string;
  submenu?: SubMenuItem[];
};

// =======================
// Solutions
// =======================

export const solutionData: SolutionItem[] = [
  {
    title: "Obuka i razvoj",
    icon: "mdi:school",
    description:
      "Opremite svoje timove vještinama i znanjem prilagođenim vašim korporativnim ciljevima.",
  },
  {
    title: "Poslovna strategija",
    icon: "mdi:briefcase-outline",
    description:
      "Razvijte djelotvorne strategije za poticanje rasta i ostati ispred u svojoj industriji.",
  },
  {
    title: "Održivost i ESG",
    icon: "mdi:leaf",
    description:
      "Implementirajte strategije za dugoročnu vrijednost, održivost i korporativnu odgovornost.",
  },
  {
    title: "AI rješenja",
    icon: "mdi:brain",
    description:
      "Razvijte djelotvorne strategije za poticanje rasta i ostati ispred u svojoj industriji.",
  },
  {
    title: "Angažman kupaca",
    icon: "mdi:account-group-outline",
    description:
      "Poboljšajte putovanja kupaca kako biste povećali zadovoljstvo, lojalnost i dugoročno zadržavanje.",
  },
  {
    title: "Obuka i razvoj",
    icon: "mdi:school",
    description:
      "Opremite svoje timove vještinama i znanjem prilagođenim vašim korporativnim ciljevima.",
  },
];

// =======================
// Companies
// =======================

export const companies: CompanyItem[] = [
  { image: "/images/companies/brand-1.webp" },
  { image: "/images/companies/brand-2.webp" },
  { image: "/images/companies/brand-3.webp" },
  { image: "/images/companies/brand-4.webp" },
  { image: "/images/companies/brand-5.webp" },
  { image: "/images/companies/brand-2.webp" },
  { image: "/images/companies/brand-4.webp" },
];

// =======================
// Projects
// =======================

export const projects: ProjectItem[] = [
  {
    category: "Inovacija",
    title: "AI-powered Analytics Suite",
    description:
      "Pretvorite sirove podatke u značajne uvide s prediktivnim AI nadzornim pločama koje pomažu tvrtkama donositi brže i pametnije odluke.",
    image: "/images/projects/project-01.jpg",
    link: "/about",
  },
  {
    category: "Suradnja",
    title: "Radni prostor udaljenog tima",
    description:
      "Moderan digitalni centar koji povezuje udaljene timove, omogućujući komunikaciju u stvarnom vremenu, besprijekorno dijeljenje datoteka i produktivne tijekove rada.",
    image: "/images/projects/project-02.jpg",
    link: "/about",
  },
  {
    category: "Rast",
    title: "Platforma za ubrzanje e-trgovine",
    description:
      "Povećajte online prodaju s optimiziranim prodajnim mjestima, automatiziranim marketinškim kampanjama i alatima za angažman kupaca izgrađenim za skaliranje.",
    image: "/images/projects/project-03.jpg",
    link: "/about",
  },
  {
    category: "Strategija",
    title: "Pametni sustav upravljanja događajima",
    description:
      "Planirajte, upravljajte i analizirajte događaje bez napora s AI-driven alatima za raspoređivanje, angažman sudionika i uvide u stvarnom vremenu.",
    image: "/images/projects/project-04.jpg",
    link: "/about",
  },
];

// =======================
// Testimonials
// =======================

export const testimonial: TestimonialItem[] = [
  {
    id: 1,
    text:
      "Suradnja s Bexonom bila je prekretnica za naš posao. Profesionalizam njihovog tima, pažnja na detalje i inovativna rješenja pomogli su nam racionalizirati operacije i postići naše ciljeve brže nego što smo zamislili. Stvarno se osjećamo kao cijenjeni partner.",
    name: "Ralph Edwards",
    position: "Suosnivač",
    image: "/images/testimonials/user.jpg",
  },
  {
    id: 2,
    text:
      "Rezultati koje smo vidjeli nakon partnerstva s Bexonom nadmašuju naša očekivanja. Ne samo da su razumjeli našu viziju, već su donijeli nove ideje koje su naš posao podigle na višu razinu.",
    name: "Guy Hawkins",
    position: "Suosnivač",
    image: "/images/testimonials/user2.jpg",
  },
  {
    id: 3,
    text:
      "Suradjujemo s Bexonom godinama, a oni nastavljaju isporučivati izvanredne rezultate. Njihov tim je proaktivan, odzivan i uvijek ide korak dalje.",
    name: "Devon Lane",
    position: "Suosnivač",
    image: "/images/testimonials/user3.jpg",
  },
];

// =======================
// Footer Links
// =======================

export const footerLinks: FooterLink[] = [
  { link: "Iskustvo kupaca" },
  { link: "Programi obuke" },
  { link: "Poslovna strategija" },
  { link: "Program obuke" },
  { link: "ESG savjetovanje" },
  { link: "Centar za razvoj" },
  { link: "Kontaktirajte nas" },
  { link: "Član tima" },
  {
    link: "Priznanja",
  },
  {
    link: "Karijere",
  },
  {
    link: "Novosti",
  },
  {
    link: "Povratne informacije",
  },
  {
    link: "Privatnost",
  },
  {
    link: "Sigurnost",
  },
  {
    link: "Odricanje",
  },
];

// blogs

export const blogs = [
  {
    id: 1,
    slug: "harnessing-digital-transform",
    title: "Iskorištavanje digitalne transformacije: Plan za tvrtke",
    category: "Posao",
    author: "Ellinien Loma",
    date: "18 Lip",
    image: "/images/blog/blog-1.jpg",
    description: "Otkrijte kako iskoristiti digitalnu transformaciju za povećanje učinkovitosti i rasta."
  },
  {
    id: 2,
    slug: "mastering-change-management",
    title: "Ovladavanje upravljanjem promjenama: Lekcije za tvrtke",
    category: "Korporativno",
    author: "Ellinien Loma",
    date: "14 Lip",
    image: "/images/blog/blog-2.jpg",
    description: "Naučite dokazane strategije upravljanja promjenama za prilagođavanje evoluirajućim poslovnim izazovima."
  },
  {
    id: 3,
    slug: "entrepreneur-mindset-success",
    title: "Poduzetnički mentalitet: Navike koje pokreću uspjeh",
    category: "Inovacija",
    author: "Ellinien Loma",
    date: "01 Lis, 2025",
    image: "/images/blog/blog-3.jpg",
    description: "Istražite ključne navike i strategije koje oblikuju uspješan poduzetnički mentalitet."
  },
];

import service01 from "@/../public/images/servicedetails/service-01.webp";
import service02 from "@/../public/images/servicedetails/service-01.webp";
import service03 from "@/../public/images/servicedetails/service-01.webp";
import service04 from "@/../public/images/servicedetails/service-01.webp";
import service05 from "@/../public/images/servicedetails/service-01.webp";
import service06 from "@/../public/images/servicedetails/service-01.webp";

import { StaticImageData } from "next/image";

export type Service = {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: string;
  href?: string;
  image: StaticImageData;
  gallery?: StaticImageData[];
  features?: string[];
  detailsParagraph1?: string;
  detailsParagraph2?: string;
  benefits?: string[];
  rangeOfServicesTitle?: string;
  rangeOfServicesDescription?: string;
  faqs?: FAQItem[];
};

export const services: Service[] = [
  {
    id: 1,
    slug: "business-strategy-development",
    title: "Razvoj poslovne strategije",
    description: "Kroz kombinaciju uvida vođenih podacima i inovativnih pristupa, blisko surađujemo s vama kako bismo razvili prilagođena rješenja.",
    icon: "bxs:business",
    href: "/services/business-strategy-development",
    image: service01,
    gallery: [service01, service02, service03],
    features: ["Inovacija", "Skalabilni sustavi", "Prilagođen kupcima", "Otpornost"],
  },
  {
    id: 2,
    slug: "customer-experience-solutions",
    title: "Rješenja za iskustvo kupaca",
    description: "Razvoj personaliziranih putovanja kupaca za povećanje zadovoljstva i lojalnosti.",
    icon: "raphael:customer",
    href: "/services/customer-experience-solutions",
    image: service02,
    gallery: [service02, service03],
    features: ["Prilagođen kupcima", "Operativna učinkovitost", "Kontinuirano učenje"],
  },
  {
    id: 3,
    slug: "sustainability-and-esg-consulting",
    title: "Savjetovanje o održivosti i ESG-u",
    description: "Pružamo prilagođene strategije koje ne samo da pokreću dugoročnu vrijednost, već i grade povjerenje s dionicima, investitorima.",
    icon: "carbon:sustainability",
    href: "/services/sustainability-and-esg-consulting",
    image: service03,
  },
  {
    id: 4,
    slug: "training-and-development-programs",
    title: "Programi obuke i razvoja",
    description: "Programi obuke i razvoja dizajnirani su za osnaživanje zaposlenika vještinama, znanjem i alatima koje trebaju.",
    icon: "carbon:development",
    href: "/services/training-and-development-programs",
    image: service04,
  },
  {
    id: 5,
    slug: "it-support-and-maintenance",
    title: "IT podrška i održavanje",
    description: "Naše usluge IT podrške i održavanja osiguravaju da vaša tehnološka infrastruktura radi glatko i sigurno.",
    icon: "pajamas:work-item-maintenance",
    href: "/services/it-support-and-maintenance",
    image: service05,
  },
  {
    id: 6,
    slug: "marketing-strategy-and-campaigns",
    title: "Marketinška strategija i kampanje",
    description: "Učinkovit marketing ključan je za poticanje rasta poslovanja. Naša usluga Marketinške strategije i kampanja.",
    icon: "streamline-freehand:creativity-idea-strategy",
    href: "/services/marketing-strategy-and-campaigns",
    image: service06,
  },
];

export const protfolio = [
  {
    id: 1,
    category: "Posao",
    title: "Platforma za upravljanje događajima",
    slug: "event-management-platform",
    image: "/images/protfolio/project-1.webp",
  },
  {
    id: 2,
    category: "Poveži",
    title: "Digitalna marketinška kampanja",
    slug: "digital-marketing-campaign",
    image: "/images/protfolio/project-2.webp",
  },
  {
    id: 3,
    category: "Osnaži",
    title: "Interaktivna platforma za učenje",
    slug: "interactive-learning-platform",
    image: "/images/protfolio/project-3.webp",
  },
  {
    id: 4,
    category: "Podrška",
    title: "Nadzorna ploča utjecaja na okoliš",
    slug: "environmental-impact-dashboard",
    image: "/images/protfolio/project-4.webp",
  },
];

export const team = [
  {
    id: 1,
    name: "Eade Marren",
    post: "Glavni izvršni direktor",
    image: "/images/team/team-1.webp"
  },
  {
    id: 2,
    name: "Savannah Nguyen",
    post: "Voditelj operacija",
    image: "/images/team/team-2.webp"
  },
  {
    id: 3,
    name: "Kristin Watson",
    post: "Voditelj marketinga",
    image: "/images/team/team-3.webp"
  },
  {
    id: 4,
    name: "Darlene Robertson",
    post: "Poslovni direktor",
    image: "/images/team/team-4.webp"
  },
  {
    id: 5,
    name: "Eade Marren",
    post: "Glavni izvršni direktor",
    image: "/images/team/team-5.webp"
  },
  {
    id: 6,
    name: "Darlene Robertson",
    post: "Poslovni direktor",
    image: "/images/team/team-7.webp"
  },
  {
    id: 7,
    name: "Kristin Watson",
    post: "Voditelj marketinga",
    image: "/images/team/team-6.webp"
  },
  {
    id: 8,
    name: "Savannah Nguyen",
    post: "Voditelj operacija",
    image: "/images/team/team-8.webp"
  },
]

export type HeroData = {
  title: string;
  buttonText: string;
  quote: string;
  counter: string;
  counterSuffix: string;
};

export type SectionHeader = {
  subtitle: string;
  title: string;
  description?: string;
  buttonText?: string;
};

export type CommitmentData = {
  header: SectionHeader;
  card1: {
    title: string;
    stat: string;
    text: string;
  };
  card2: {
    title: string;
  };
  card3: {
    title: string;
    text: string;
    tags: string[];
  };
};

export type PricingPlan = {
  title: string;
  monthlyPrice: string;
  yearlyPrice: string;
  description: string;
  features: string[];
  buttonText: string;
};

export type PricingData = {
  header: SectionHeader;
  plans: {
    basic: PricingPlan;
    standard: PricingPlan;
    premium: PricingPlan;
  };
  toggleText: {
    monthly: string;
    yearly: string;
  };
};

export type ProcessStep = {
  stepNumber: string;
  title: string;
  description: string;
};

export type ProcessData = {
  header: SectionHeader;
  steps: ProcessStep[];
};
// =======================
// Hero
// =======================

export const heroData: HeroData = {
  title: "Pretvaramo ideje u stvarnost",
  buttonText: "Započnite odmah",
  quote: "Posvećeni smo preciznom inženjerstvu i trajnoj suradnji; potičemo uspjeh kroz transparentne inovacije i zajedničku viziju industrijske umjetne inteligencije.",
  counter: "",
  counterSuffix: ""
};

// =======================
// Commitment
// =======================

export const commitmentData: CommitmentData = {
  header: {
    subtitle: "Odaberite najbolje",
    title:
      "Posvećeni pružanju inteligentnih rješenja koja potiču industrijsku preciznost, s naglaskom na tehničku izvrsnost.",
    buttonText: "Saznajte više"
  },
  card1: {
    title: "Strategija rebrandinga za rastuću tvrtku",
    stat: "200",
    text: "Zadovoljnih klijenata surađuje s našim AdriaMat AI rješenjima."
  },
  card2: {
    title: "Strategija rebrandinga za rastuću tvrtku"
  },
  card3: {
    title: "Strategija rebrandinga za rastuću tvrtku",
    text:
      "Naš tim je uvijek dostupan kako bi odgovorio na vaše potrebe i pružio brza i učinkovita rješenja.",
    tags: ["Rast", "Uspjeh", "Inovacija", "Vodstvo", "Utjecaj", "Fokus", "Tehnologija"]
  }
};

// =======================
// Pricing
// =======================

export const pricingData: PricingData = {
  header: {
    subtitle: "FLEKSIBILNE CIJENE",
    title: "Naši cjenovni paketi"
  },
  toggleText: {
    monthly: "Mjesečno",
    yearly: "Godišnje"
  },
  plans: {
    basic: {
      title: "Osnovni paket",
      monthlyPrice: "99",
      yearlyPrice: "299",
      description:
        "Kombinacijom analitike temeljene na podacima i inovativnih pristupa.",
      buttonText: "Odaberi paket",
      features: [
        "Pristup osnovnim uslugama",
        "Ograničena korisnička podrška (e-mail)",
        "1 projekt mjesečno",
        "Osnovna izvješća i analitika",
        "Standardni predlošci i alati",
        "Osnovno praćenje učinkovitosti"
      ]
    },
    standard: {
      title: "Standardni paket",
      monthlyPrice: "249",
      yearlyPrice: "599",
      description:
        "Kombinacijom analitike temeljene na podacima i inovativnih pristupa.",
      buttonText: "Odaberi paket",
      features: [
        "Sve značajke osnovnog paketa",
        "Prioritetna korisnička podrška",
        "Do 3 projekta mjesečno",
        "Mjesečni pregledi učinkovitosti",
        "Alati za timsku suradnju",
        "Prilagođeni predlošci"
      ]
    },
    premium: {
      title: "Premium paket",
      monthlyPrice: "499",
      yearlyPrice: "899",
      description:
        "Kombinacijom analitike temeljene na podacima i inovativnih pristupa.",
      buttonText: "Odaberi paket",
      features: [
        "Sve značajke standardnog paketa",
        "Dodijeljeni voditelj računa",
        "Prilagođene strateške sesije",
        "Kvartalne revizije učinkovitosti",
        "Prioritetna podrška",
        "24/7 hitna podrška"
      ]
    }
  }
};

// =======================
// Process
// =======================

export const processData: ProcessData = {
  header: {
    subtitle: "Naš proces",
    title: "Prilagođene AI arhitekture za uspjeh na industrijskoj razini",
    description:
      "Razvijamo personalizirana korisnička iskustva kako bismo povećali zadovoljstvo i lojalnost.",
    buttonText: "Zatraži poziv"
  },
  steps: [
    {
      stepNumber: "01",
      title: "Otkrivanje i planiranje",
      description:
        "Prvi korak je razumijevanje vaših poslovnih potreba, ciljeva i izazova."
    },
    {
      stepNumber: "02",
      title: "Provedba i isporuka",
      description:
        "Nakon definiranja plana, naš tim prelazi na provedbu strategije i realizaciju ciljeva."
    },
    {
      stepNumber: "03",
      title: "Pregled i podrška",
      description:
        "Nakon završetka projekta provodimo detaljnu analizu kako bismo osigurali usklađenost s vašim ciljevima."
    }
  ]
};

// =======================
// Section Headers
// =======================

export const blogHeader: SectionHeader = {
  subtitle: "Naši blogovi",
  title: "Strategije i uvidi."
};

export const companiesHeader: SectionHeader = {
  subtitle: "Naši partneri",
  title: "Start Your Intelligence Transformation with MAT.ai"
};

export const projectsHeader: SectionHeader = {
  subtitle: "Naši projekti",
  title: "Započnite svoju transformaciju inteligencije s MAT.ai"
};

export const solutionHeader: SectionHeader = {
  subtitle: "Naša rješenja",
  title: "Prilagođena poslovna rješenja za moderne korporacije",
  buttonText: "Istraži više"
};

export const testimonialsHeader = {
  title: "Iskustva naših klijenata.",
  rating: "4.9",
  reviewCount: "(50+ recenzija klijenata)"
};

// =======================
// About
// =======================

export type AboutData = {
  header: {
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
  };
  aboutItems: {
    icon: string;
    title: string;
    description: string;
  }[];
  getToKnowUs: {
    subtitle: string;
    title: string;
    mission: {
      title: string;
      description: string;
      points: string[];
    };
    vision: {
      title: string;
      description: string;
      points: string[];
    };
    buttonText: string;
  };
};

export const aboutData: AboutData = {
  header: {
    title: "O nama",
    subtitle: "Odaberite najbolje",
    description: "Osnaživanje poslovanja stručnošću.",
    buttonText: "Zatraži poziv"
  },
  aboutItems: [
    {
      icon: "famicons:bulb-outline",
      title: "Inovativna rješenja",
      description: "Ostajemo ispred krivulje, koristeći najsuvremenije tehnologije i strategije kako bismo vas održali konkurentnima na tržištu."
    },
    {
      icon: "la:award",
      title: "Nagrađivana stručnost",
      description: "Priznat od strane lidera industrije, naš nagrađivani tim ima dokazano iskustvo u isporuci izvrsnosti u svim projektima."
    },
    {
      icon: "streamline-plump:customer-support-3",
      title: "Posvećena podrška",
      description: "Naš tim je uvijek dostupan za rješavanje vaših problema, pružajući brza i učinkovita rješenja za održavanje vašeg poslovanja."
    }
  ],
  getToKnowUs: {
    subtitle: "Upoznajte nas",
    title: "Poticanje inovacija i izvrsnosti za održivi korporativni uspjeh širom svijeta.",
    mission: {
      title: "Naša misija",
      description: "naša misija je osnažiti tvrtke kroz inovativna najbolja rješenja, iznimnu uslugu.",
      points: ["Inovacija i izvrsnost", "Iznimni kupac", "Poslovni rast"]
    },
    vision: {
      title: "Naša vizija",
      description: "Naša vizija je postati globalni lider u pružanju transformativnih poslovnih rješenja.",
      points: ["Globalno vodstvo", "Transformativni učinak", "Održivi uspjeh"]
    },
    buttonText: "Saznajte više o nama"
  }
};

// =======================
// FAQ
// =======================

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQPageData = {
  header: {
    title: string;
    breadcrumbLinkText: string;
  };
  faqSection: {
    image: string;
    items: FAQItem[];
  };
  commonQuestionsSection: {
    subtitle: string;
    title: string;
    items: FAQItem[];
  };
};

export const faqPageData: FAQPageData = {
  header: {
    title: "Česta pitanja",
    breadcrumbLinkText: "Česta pitanja"
  },
  faqSection: {
    image: "/images/faq/faq-image-01.webp",
    items: [
      {
        question: "Koliko brzo vaša organizacija može transformirati složene operativne izazove u skalabilne inovacije?",
        answer: "Ubrzavanje inovacija uz AdriaMAT AI je pojednostavljen i strukturiran proces. Kontaktirajte nas već danas kako bismo započeli konzultacije na visokoj razini, tijekom kojih povezujemo vaše poslovne ciljeve s našim naprednim AI i kvantnim mogućnostima. U svakoj fazi projekta dajemo prednost potpunoj transparentnosti i rigoroznoj kontroli kvalitete, osiguravajući isporuku robusnih i dugoročno održivih rješenja. Partnerstvom s nama pretvarate složene operativne izazove u održive konkurentske prednosti."
      },
      {
        question: "Je li vaša organizacija spremna predvoditi sljedeći val digitalne transformacije?",
        answer: "Strateške inovacije započinju jednostavnim razgovorom. Kontaktirajte AdriaMAT AI već danas kako biste razgovarali o svojoj razvojnoj strategiji i otkrili kako naša napredna AI i kvantna rješenja mogu osnažiti vaš projekt. Od početnih konzultacija do konačne isporuke, prioritet nam je transparentnost, visoki standardi kvalitete i brza realizacija. Obratite nam se i pretvorite tehničku složenost u održivu konkurentsku prednost."
      },
      {
        question: "Kako AdriaMAT AI pretvara složene poslovne ciljeve u pouzdanu i visokoučinkovitu tehnologiju?",
        answer: "U AdriaMAT AI uspjeh projekta temelji se na strateškom partnerskom modelu usmjerenom na usklađenost, transparentnost, kvalitetu i skalabilnost. Svaki angažman započinjemo konzultacijama na visokoj razini kako bismo uskladili vaše poslovne ciljeve s našim naprednim mogućnostima AI integracije, osiguravajući svrhovitu tehničku izvedbu. Korištenjem agilnog razvojnog ciklusa fokusiramo se na skalabilnu implementaciju i brzu realizaciju, pretvarajući tehničku složenost u mjerljivu i održivu konkurentsku prednost za vašu organizaciju."
      },
      {
        question: "Kako vizionarski koncept pretvarate u precizno dizajniranu digitalnu stvarnost?",
        answer: "Strateške inovacije započinju jednostavnim razgovorom. Obratite nam se već danas kako bismo razgovarali o vašoj strategiji i otkrili kako integracijske sposobnosti AdriaMAT AI mogu osnažiti vašu viziju. Pružamo strukturiran i komunikativan proces koji vas drži u središtu razvoja, jamčeći precizno inženjerstvo i pravovremenu implementaciju. Partnerstvom s nama redefinirajte granice svojih digitalnih mogućnosti."
      },
      {
        question: "Kako AdriaMAT AI osigurava transparentnost i praćenje napretka vašeg projekta?",
        answer: "Strateške inovacije započinju jednostavnim razgovorom. Jednostavno kontaktirajte AdriaMAT AI putem našeg kontakt obrasca ili nas nazovite, a mi ćemo zakazati konzultacije kako bismo razgovarali o vašem projektu i načinu na koji vam možemo pomoći. Naš tim vas kontinuirano informira tijekom cijelog procesa, osiguravajući kontrolu kvalitete i pravovremenu isporuku."
      }
    ]
  },

  commonQuestionsSection: {
    subtitle: "Uobičajena pitanja",
    title: "Trebate pomoć? Započnite ovdje...",
    items: [
      {
        question: "Koje usluge Bexon nudi klijentima?",
        answer: "Početak je jednostavan! Jednostavno nas kontaktirajte putem našeg obrasca za kontakt ili nas nazovite, a mi ćemo zakazati konzultacije kako bismo razgovarali o vašem projektu i kako vam možemo najbolje pomoći. Naš tim vas obavještava tijekom cijelog procesa, osiguravajući kontrolu kvalitete i pravovremenu isporuku."
      },
      {
        question: "Kako započeti s korporativnim poslovanjem?",
        answer: "Početak je jednostavan! Jednostavno nas kontaktirajte putem našeg obrasca za kontakt ili nas nazovite, a mi ćemo zakazati konzultacije kako bismo razgovarali o vašem projektu i kako vam možemo najbolje pomoći. Naš tim vas obavještava tijekom cijelog procesa, osiguravajući kontrolu kvalitete i pravovremenu isporuku."
      },
      {
        question: "Kako osiguravate uspjeh projekta?",
        answer: "Početak je jednostavan! Jednostavno nas kontaktirajte putem našeg obrasca za kontakt ili nas nazovite, a mi ćemo zakazati konzultacije kako bismo razgovarali o vašem projektu i kako vam možemo najbolje pomoći. Naš tim vas obavještava tijekom cijelog procesa, osiguravajući kontrolu kvalitete i pravovremenu isporuku."
      },
      {
        question: "Koliko će trajati završetak mog projekta?",
        answer: "Početak je jednostavan! Jednostavno nas kontaktirajte putem našeg obrasca za kontakt ili nas nazovite, a mi ćemo zakazati konzultacije kako bismo razgovarali o vašem projektu i kako vam možemo najbolje pomoći. Naš tim vas obavještava tijekom cijelog procesa, osiguravajući kontrolu kvalitete i pravovremenu isporuku."
      },
      {
        question: "Mogu li pratiti napredak svog projekta?",
        answer: "Početak je jednostavan! Jednostavno nas kontaktirajte putem našeg obrasca za kontakt ili nas nazovite, a mi ćemo zakazati konzultacije kako bismo razgovarali o vašem projektu i kako vam možemo najbolje pomoći. Naš tim vas obavještava tijekom cijelog procesa, osiguravajući kontrolu kvalitete i pravovremenu isporuku."
      }
    ]
  }
};

// =======================
// Service Details Sidebar
// =======================

export const serviceDetailsSidebar = {
  moreServicesTitle: "Više usluga",
  tagsTitle: "Oznake",
  tags: ["Brendiranje", "Posao", "Savjetovanje", "Dizajn", "Inovacije", "Vodstvo", "Marketing"]
};
