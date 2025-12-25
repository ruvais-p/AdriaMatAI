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