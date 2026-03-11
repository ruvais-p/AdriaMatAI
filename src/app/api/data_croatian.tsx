export type SolutionItem = {
  title: string;
  icon: string;
  description: string;
};

export type CompanyItem = {
  name: string;
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
    title: "Strategija integracije umjetne inteligencije",
    icon: "mdi:brain",
    description:
      "Dizajniranje strateških planova za učinkovitu integraciju umjetne inteligencije u postojeće poslovne sustave i radne procese.",
  },
  {
    title: "Obuka za umjetnu inteligenciju i razvoj radne snage",
    icon: "mdi:school",
    description:
      "Osposobljavanje zaposlenika praktičnim znanjima i vještinama iz područja umjetne inteligencije uz pomoć organizacijama u privlačenju i razvoju vrhunskih AI talenata.",
  },
  {
    title: "Inteligentna automatizacija procesa",
    icon: "mdi:robot-outline",
    description:
      "Korištenje automatizacije pokretane umjetnom inteligencijom za poboljšanje operativne učinkovitosti, smanjenje ručnog rada i povećanje produktivnosti.",
  },
  {
    title: "AI vođena inteligencija odlučivanja",
    icon: "mdi:chart-line",
    description:
      "Primjena napredne AI analitike i prediktivnih modela za donošenje pametnijih i bržih poslovnih odluka.",
  },
  {
    title: "Odgovorna i održiva umjetna inteligencija",
    icon: "mdi:leaf",
    description:
      "Implementacija etičnih, transparentnih i održivih AI rješenja koja su usklađena s organizacijskim vrijednostima i dugoročnim ciljevima.",
  },
  {
    title: "AI rješenja specifična za industriju",
    icon: "mdi:domain",
    description:
      "Razvoj prilagođenih AI sustava za sektore poput automobilske industrije, logistike, financija, osiguranja, istraživačkih institucija i javnog sektora.",
  },
];

// =======================
// Companies
// =======================

export const companies: CompanyItem[] = [
  { name: "Korporativni subjekti" },
  { name: "Vladine institucije" },
  { name: "Istraživačke organizacije" },
  { name: "Obrazovne ustanove" },
  { name: "Neprofitne organizacije" },
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
      "Umjetna inteligencija redefinira globalno poslovanje. U Forum Investu spajamo napredni AI, inženjering i poslovnu strategiju kako bismo pomogli organizacijama da postanu inteligentni i prilagodljivi ekosustavi. Naš fokus je na discipliniranoj provedbi, skalabilnim inovacijama i strateškim partnerstvima koja stvaraju trajnu konkurentsku prednost.",
    name: "Ivan Jedvej",
    position: "CEO",
    image: "/images/testimonials/user.jpg",
  },
  {
    id: 2,
    text:
      "Tehnološko vodstvo u eri umjetne inteligencije zahtijeva preciznost, sigurnu arhitekturu i kontinuirane inovacije. Forum Invest razvija inteligentne sustave koji integriraju AI, automatizaciju i analitiku u skalabilne infrastrukture. Vođeni istraživanjem, kibernetičkom sigurnošću i optimizacijom performansi isporučujemo pouzdana rješenja s dugoročnim učinkom.",
    name: "Prof. Sasi Gopalan",
    position: "CTO",
    image: "/images/testimonials/user2.jpg",
  },
  {
    id: 3,
    text:
      "Današnja tržišta definira inteligencija. Forum Invest pomaže organizacijama redizajnirati poslovne procese kroz integraciju umjetne inteligencije, otkriti prediktivne uvide iz podataka te povećati produktivnost uz smanjenje troškova. Naša misija je pretvoriti inteligentne sustave u mjerljive poslovne rezultate i dugoročno tržišno vodstvo.",
    name: "Sherif",
    position: "CMO",
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

export type Blog = {
  id: number;
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
  description: string;
  detailsParagraph1: string;
  detailsParagraph2: string;
  quote: string;
  quoteAuthor: string;
  lessonTitle: string;
  lessonDescription: string;
  lessonsList: string[];
};

export const blogs: Blog[] = [
  {
    id: 1,
    slug: "harnessing-digital-transform",
    title: "Iskorištavanje digitalne transformacije: Putokaz za poslovanje",
    category: "Poslovanje",
    author: "Ivan Jedvej",
    date: "18 Lip 2026",
    image: "/images/blog/blog-1.jpg",
    description: "Otkrijte kako iskoristiti digitalnu transformaciju za povećanje učinkovitosti i poslovnog rasta.",
    detailsParagraph1:
      "Digitalna transformacija više nije luksuz; to je nužnost za opstanak na današnjem brzom tržištu. Iskorištavanje snage digitalnih alata omogućuje tvrtkama da pojednostave operacije, smanje troškove i pruže vrhunsku vrijednost kupcima. Strateški putokaz ključan je za navigaciju ovim složenim putovanjem, počevši od internih procesa do vanjskih interakcija s kupcima.",
    detailsParagraph2:
      "Implementacija tehnologija poput računalstva u oblaku, AI-a i analitike podataka zahtijeva kulturnu promjenu unutar organizacije. Poticanjem digitalnog načina razmišljanja, tvrtke mogu otključati nove razine učinkovitosti i agilnosti, osiguravajući da ostanu konkurentne u sve automatiziranijem svijetu. Putokaz uključuje jasne prekretnice, kontinuiranu obuku zaposlenika i fokus na skalabilnost.",
    quote: "Digitalna transformacija nije u tehnologiji. Riječ je o ljudima i načinu na koji je koriste za rješavanje problema.",
    quoteAuthor: "Ivan Jedvej",
    lessonTitle: "Ključne lekcije u digitalnoj transformaciji",
    lessonDescription: "Uspješna transformacija zahtijeva usklađivanje tehnološkog usvajanja s organizacijskom spremnošću.",
    lessonsList: [
      "Strategija usmjerena na kupca",
      "Donošenje odluka temeljeno na podacima",
      "Agilna implementacija",
      "Integracija kibernetičke sigurnosti",
      "Skalabilna infrastruktura"
    ]
  },
  {
    id: 2,
    slug: "mastering-change-management",
    title: "Upravljanje promjenama: Lekcije za poslovanje",
    category: "Korporativno",
    author: "Sherif",
    date: "14 Lip 2026",
    image: "/images/blog/blog-2.jpg",
    description: "Saznajte provjerene strategije upravljanja promjenama za prilagodbu stalno promjenjivim poslovnim izazovima.",
    detailsParagraph1:
      "Promjena je jedina konstanta u poslovnom svijetu, a način na koji je organizacija vodi diktira njezin dugoročni uspjeh. Ovladavanje upravljanjem promjenama uključuje jasnu komunikaciju, usklađenost vodstva i razumijevanje ljudske psihologije. Riječ je o premošćivanju jaza između trenutne stvarnosti i željenog budućeg stanja uz minimiziranje otpora.",
    detailsParagraph2:
      "Učinkovito upravljanje promjenama osigurava da su prijelazi glatki i da se postignu željeni rezultati uz minimalne poremećaje. Zahtijeva strukturirani pristup koji uključuje angažman dionika, procjenu rizika i kontinuiranu povratnu informaciju za prilagodbu strategija prema potrebi. Otpornost i prilagodljivost obilježja su uspješne tranzicije.",
    quote: "Promjena nije prijetnja, već prilika. Opstanak nije cilj, izvrsnost jest.",
    quoteAuthor: "Sherif",
    lessonTitle: "Ovladavanje organizacijskim promjenama",
    lessonDescription: "Uspjeh svake inicijative promjene ovisi o uključenim ljudima i jasnoći vizije.",
    lessonsList: [
      "Transparentna komunikacija",
      "Osnaživanje zaposlenika",
      "Jasna vizija i ciljevi",
      "Iterativno praćenje napretka",
      "Emocionalna inteligencija"
    ]
  },
  {
    id: 3,
    slug: "entrepreneur-mindset-success",
    title: "AI pokretana poslovna transformacija: Putokaz za rast",
    category: "Umjetna inteligencija",
    author: "Prof. Sasi Gopalan",
    date: "01 Lis 2026",
    image: "/images/blog/blog-3.jpg",
    description: "Otkrijte kako umjetna inteligencija mijenja industrije, povećava učinkovitost i stvara nove prilike za rast.",
    detailsParagraph1:
      "Umjetna inteligencija više nije futuristički koncept; ona je trenutni pokretač masovnog poslovnog rasta. Transformacija vođena AI-jem uključuje integraciju strojnog učenja i prediktivne analitike u temeljne poslovne funkcije. Ovaj putokaz za rast pomaže organizacijama identificirati slučajeve upotrebe AI-a s velikim učinkom, od optimizacije opskrbnih lanaca do personalizacije marketinga u velikom opsegu.",
    detailsParagraph2:
      "Izgradnja organizacije spremne za AI zahtijeva i tehnička ulaganja i strateško planiranje. Tvrtke moraju osigurati da su njihove podatkovne infrastrukture robusne i da su njihovi timovi opremljeni za rad uz inteligentne sustave. Fokus bi trebao biti na stvaranju mjerljive vrijednosti i poticanju kulture eksperimentiranja i inovacija temeljenih na podacima.",
    quote: "AI neće zamijeniti ljude, ali ljudi koji koriste AI zamijenit će one koji to ne čine.",
    quoteAuthor: "Prof. Sasi Gopalan",
    lessonTitle: "Uvidi u rast AI-a",
    lessonDescription: "Transformacija vašeg poslovanja pomoću AI-a zahtijeva pomak s intuicije na inteligenciju podržanu podacima.",
    lessonsList: [
      "Spremnost infrastrukture",
      "AI etika i upravljanje",
      "Prediktivno održavanje",
      "Personalizirana putovanja kupaca",
      "Operativna automatizacija"
    ]
  }
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
    detailsParagraph1:
      "Razvoj poslovne strategije usmjeren je na pomoć organizacijama u definiranju jasnih dugoročnih ciljeva i izgradnji strukturiranih planova za postizanje održivog rasta. Naš tim kombinira istraživanje tržišta, operativnu analizu i strateško planiranje za dizajn učinkovitih poslovnih okvira.",
    detailsParagraph2:
      "Usklađivanjem strateškog planiranja sa stvarnim operativnim mogućnostima, pomažemo organizacijama da se prilagode promjenjivim tržištima uz zadržavanje stabilnosti i konkurentnosti.",
    benefits: [
      "Jasno strateško usmjerenje",
      "Poboljšano donošenje odluka",
      "Održivi poslovni rast",
      "Konkurentna pozicija na tržištu",
      "Operativna usklađenost",
      "Upravljanje rizicima",
      "Dugoročna poslovna vrijednost"
    ],
    rangeOfServicesTitle: "Naše usluge poslovne strategije",
    rangeOfServicesDescription:
      "Forum Invest pomaže organizacijama u razvoju strukturiranih poslovnih strategija koje usklađuju operativne sposobnosti s dugoročnim ciljevima rasta.",
    faqs: [
      {
        question: "Što je razvoj poslovne strategije?",
        answer: "To je proces definiranja dugoročnih ciljeva i izrade strukturiranih planova za postizanje održivog rasta."
      },
      {
        question: "Kako strategija poboljšava poslovne rezultate?",
        answer: "Jasna strategija pomaže organizacijama usmjeriti resurse, smanjiti rizike i identificirati nove prilike."
      },
      {
        question: "Može li strateško savjetovanje pomoći rastućim tvrtkama?",
        answer: "Da. Strateško vodstvo pomaže tvrtkama u skaliranju operacija i prilagodbi promjenjivim tržišnim uvjetima."
      }
    ]
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
    detailsParagraph1:
      "Izuzetna iskustva kupaca u središtu su uspješnih organizacija. Naša rješenja za iskustvo kupaca pomažu tvrtkama osmisliti značajne interakcije koje poboljšavaju zadovoljstvo i lojalnost.",
    detailsParagraph2:
      "Analiziramo putovanja kupaca, optimiziramo digitalne platforme i razvijamo strategije koje poboljšavaju angažman na svim dodirnim točkama.",
    benefits: [
      "Personalizacija sustava na razini",
      "Zadržavanje kupaca",
      "Poboljšano zadržavanje kupaca",
      "Optimizacija podrške",
      "Uvidi vođeni podacima",
      "Proaktivni angažman",
      "Omni-channel integracija"
    ],
    rangeOfServicesTitle: "Naš raspon usluga za kupce",
    rangeOfServicesDescription:
      "Forum Invest se fokusira na stvaranje iskustava koja jačaju odnose između tvrtki i njihovih kupaca.",
    faqs: [
      {
        question: "Što je iskustvo kupaca (CX)?",
        answer: "Iskustvo kupaca odnosi se na cjelokupni dojam koji kupac stječe interakcijom s tvrtkom."
      },
      {
        question: "Kako CX rješenja poboljšavaju lojalnost kupaca?",
        answer: "Personalizacijom iskustava i optimizacijom interakcija kroz digitalne i fizičke kanale."
      },
      {
        question: "Kako prikupljate uvide o kupcima?",
        answer: "Putem analitičkih alata, anketa i izravnih interakcija s kupcima."
      }
    ]
  },
  {
    id: 3,
    slug: "sustainability-and-esg-consulting",
    title: "Savjetovanje o održivosti i ESG-u",
    description: "Pružamo prilagođene strategije koje ne samo da pokreću dugoročnu vrijednost, već i grade povjerenje s dionicima, investitorima.",
    icon: "carbon:sustainability",
    href: "/services/sustainability-and-esg-consulting",
    image: service03,
    gallery: [service03, service04, service05],
    features: ["Održiva strategija", "ESG usklađenost", "Okolišna odgovornost", "Povjerenje dionika"],
    detailsParagraph1:
      "Savjetovanje o održivosti i ESG-u pomaže organizacijama integrirati ekološka, društvena i upravljačka načela u operativne strategije.",
    detailsParagraph2:
      "Naši savjetodavni okviri podržavaju odgovoran rast, usklađenost s propisima i dugoročnu održivost uz jačanje povjerenja dionika.",
    benefits: [
      "Poboljšana korporativna reputacija",
      "Regulatorna usklađenost",
      "Povjerenje investitora",
      "Održivi rast",
      "Smanjenje rizika",
      "Okolišna odgovornost",
      "Stvaranje dugoročne vrijednosti"
    ],
    rangeOfServicesTitle: "Naše ESG savjetodavne usluge",
    rangeOfServicesDescription:
      "Forum Invest pomaže organizacijama u dizajnu ESG strategija koje usklađuju ciljeve održivosti s poslovnim rastom i regulatornim zahtjevima.",
    faqs: [
      {
        question: "Što je ESG savjetovanje?",
        answer: "Pomaže organizacijama integrirati ekološke, društvene i upravljačke prakse u poslovanje."
      },
      {
        question: "Zašto je ESG važan za tvrtke?",
        answer: "ESG prakse poboljšavaju korporativnu reputaciju, povjerenje investitora i usklađenost s propisima."
      },
      {
        question: "Mogu li ESG strategije poboljšati poslovne rezultate?",
        answer: "Da, održive prakse često vode do dugoročnih financijskih i operativnih koristi."
      }
    ]
  },
  {
    id: 4,
    slug: "training-and-development-programs",
    title: "Programi obuke i razvoja",
    description: "Programi obuke i razvoja dizajnirani su za osnaživanje zaposlenika vještinama, znanjem i alatima koje trebaju.",
    icon: "carbon:development",
    href: "/services/training-and-development-programs",
    image: service04,
    gallery: [service04, service05, service06],
    features: ["Profesionalni rast", "Razvoj vještina", "Obuka vodstva", "Kontinuirano učenje"],
    detailsParagraph1:
      "Programi obuke i razvoja pomažu organizacijama ojačati sposobnosti radne snage i pripremiti timove za evoluirajuće poslovne izazove.",
    detailsParagraph2:
      "Naši okviri obuke fokusiraju se na vodstvo, tehničke vještine i inovacije kako bi stvorili kulturu kontinuiranog učenja.",
    benefits: [
      "Razvoj vještina zaposlenika",
      "Poboljšana produktivnost",
      "Rast vodstva",
      "Dijeljenje znanja",
      "Timski rad",
      "Kultura inovacija",
      "Veće zadržavanje zaposlenika"
    ],
    rangeOfServicesTitle: "Naši programi obuke",
    rangeOfServicesDescription:
      "Forum Invest pruža profesionalne programe obuke dizajnirane za osnaživanje zaposlenika i potporu organizacijskom razvoju.",
    faqs: [
      {
        question: "Zašto su programi obuke važni?",
        answer: "Pomažu zaposlenicima razviti nove vještine i prilagoditi se promjenjivim zahtjevima industrije."
      },
      {
        question: "Može li obuka poboljšati učinkovitost zaposlenika?",
        answer: "Da. Dobro osmišljeni programi obuke poboljšavaju produktivnost i zadovoljstvo poslom."
      },
      {
        question: "Pružate li prilagođene programe obuke?",
        answer: "Da. Naši programi obuke prilagođeni su potrebama organizacije."
      }
    ]
  },
  {
    id: 5,
    slug: "it-support-and-maintenance",
    title: "IT podrška i održavanje",
    description: "Naše usluge IT podrške i održavanja osiguravaju da vaša tehnološka infrastruktura radi glatko i sigurno.",
    icon: "pajamas:work-item-maintenance",
    href: "/services/it-support-and-maintenance",
    image: service05,
    gallery: [service05, service06, service01],
    features: ["Nadzor sustava", "Sigurnosno održavanje", "Tehnička podrška", "Stabilnost infrastrukture"],
    detailsParagraph1:
      "Usluge IT podrške i održavanja osiguravaju da tehnološka infrastruktura poduzeća ostane sigurna, stabilna i operativna.",
    detailsParagraph2:
      "Naši stručnjaci prate sustave, provode ažuriranja održavanja i rješavaju tehničke probleme kako bi spriječili zastoje i operativne poremećaje.",
    benefits: [
      "Smanjeno vrijeme zastoja sustava",
      "Poboljšana sigurnost",
      "Pouzdana IT infrastruktura",
      "Brže rješavanje problema",
      "Operativna stabilnost",
      "Proaktivno praćenje sustava",
      "Optimizacija tehnologije"
    ],
    rangeOfServicesTitle: "Naše usluge IT podrške",
    rangeOfServicesDescription:
      "Forum Invest pruža proaktivnu IT podršku i održavanje kako bi osigurao da poslovni sustavi ostanu sigurni i operativni.",
    faqs: [
      {
        question: "Što uključuje IT podrška?",
        answer: "IT podrška uključuje nadzor sustava, rješavanje problema, održavanje i sigurnosna ažuriranja."
      },
      {
        question: "Zašto je redovito IT održavanje važno?",
        answer: "Pomaže u sprječavanju kvarova sustava, poboljšava sigurnost i osigurava neometano poslovanje."
      },
      {
        question: "Može li IT podrška poboljšati performanse sustava?",
        answer: "Da. Redovito održavanje i optimizacija poboljšavaju pouzdanost i brzinu sustava."
      }
    ]
  },
  {
    id: 6,
    slug: "marketing-strategy-and-campaigns",
    title: "Marketinška strategija i kampanje",
    description: "Učinkovit marketing ključan je za poticanje rasta poslovanja. Naša usluga Marketinške strategije i kampanja.",
    icon: "streamline-freehand:creativity-idea-strategy",
    href: "/services/marketing-strategy-and-campaigns",
    image: service06,
    gallery: [service06, service01, service02],
    features: ["Strategija brenda", "Digitalne kampanje", "Uvidi u tržište", "Angažman kupaca"],
    detailsParagraph1:
      "Usluge marketinške strategije i kampanja pomažu organizacijama ojačati vidljivost brenda i privući nove kupce putem ciljanih marketinških inicijativa.",
    detailsParagraph2:
      "Naš tim razvija marketinške strategije temeljene na podacima koje kombiniraju digitalne kampanje, pripovijedanje brenda i angažman kupaca.",
    benefits: [
      "Povećana svijest o brendu",
      "Angažman kupaca",
      "Ciljane kampanje",
      "Marketing vođen podacima",
      "Poboljšano generiranje leadova",
      "Proširenje tržišta",
      "Jači identitet brenda"
    ],
    rangeOfServicesTitle: "Naše marketinške usluge",
    rangeOfServicesDescription:
      "Forum Invest dizajnira strateške marketinške kampanje koje pomažu organizacijama dosegnuti pravu publiku i ubrzati poslovni rast.",
    faqs: [
      {
        question: "Što je marketinška strategija?",
        answer: "To je strukturirani plan osmišljen za promicanje proizvoda, usluga i vrijednosti brenda pravoj publici."
      },
      {
        question: "Kako marketinške kampanje poboljšavaju rast?",
        answer: "One povećavaju svijest o brendu, generiraju leadove i jačaju odnose s kupcima."
      },
      {
        question: "Pružate li strategije digitalnog marketinga?",
        answer: "Da. Naše marketinške strategije uključuju digitalne platforme, analitiku i ciljane kampanje."
      }
    ]
  },
  {
    id: 7,
    slug: "ai-integration-and-implementation",
    title: "AI integracija i implementacija",
    description: "Pomažemo organizacijama integrirati AI u postojeće digitalne ekosustave, osiguravajući besprijekorno usvajanje uz minimalne smetnje.",
    icon: "hugeicons:ai-idea",
    href: "/services/ai-integration-and-implementation",
    image: service01,
    gallery: [service01, service02, service03],
    features: ["AI integracija", "Kompatibilnost sustava", "Skalabilna arhitektura", "Operativna učinkovitost"],
    detailsParagraph1:
      "Usluge AI integracije i implementacije pomažu organizacijama da ugrade umjetnu inteligenciju u svoje postojeće digitalne sustave. Naš fokus je na besprijekornoj integraciji koja poboljšava operativne sposobnosti bez ometanja trenutnih procesa.",
    detailsParagraph2:
      "Analiziramo vašu infrastrukturu, sustave podataka i operativne procese kako bismo osigurali glatku integraciju AI rješenja. Naš tim osigurava skalabilnu, sigurnu i optimiziranu arhitekturu usklađenu s vašim strateškim ciljevima.",
    benefits: [
      "Besprijekorna integracija sustava",
      "Poboljšana operativna učinkovitost",
      "Unaprijeđena podrška odlučivanju",
      "Smanjen rizik implementacije",
      "Skalabilna AI arhitektura",
      "Optimizacija korištenja podataka",
      "Brže usvajanje tehnologije"
    ],
    rangeOfServicesTitle: "Naše AI integracijske usluge",
    rangeOfServicesDescription:
      "Forum Invest pomaže organizacijama implementirati AI tehnologije na strukturiran i skalabilan način. Naši okviri osiguravaju mjerljivu poslovnu vrijednost.",
    faqs: [
      {
        question: "Što AI integracija znači za organizaciju?",
        answer: "Uključuje instalaciju AI mogućnosti u postojeće sustave, omogućujući automatizaciju i inteligentne uvide."
      },
      {
        question: "Hoće li AI omesti naše postojeće sustave?",
        answer: "Ne. Naš proces fokusiran je na kompatibilnost i minimalne smetnje tijekom integracije."
      },
      {
        question: "Koliko traje implementacija AI-a?",
        answer: "Vremenski okviri ovise o opsegu projekta i složenosti sustava, ali radimo u strukturiranim fazama."
      }
    ]
  },
  {
    id: 8,
    slug: "intelligent-automation",
    title: "Inteligentna automatizacija",
    description: "Automatizacija radnih procesa i poslovnih operacija pomoću AI-a radi poboljšanja učinkovitosti, točnosti i brzine.",
    icon: "hugeicons:ai-cloud-01",
    href: "/services/intelligent-automation",
    image: service02,
    gallery: [service02, service03, service04],
    features: ["Automatizacija procesa", "Optimizacija tijeka rada", "AI motori za odlučivanje", "Operativna učinkovitost"],
    detailsParagraph1:
      "Inteligentna automatizacija spaja AI, strojno učenje i automatizacijske tehnologije za pojednostavljenje složenih poslovnih procesa. Naša rješenja uklanjaju zadatke koji se ponavljaju.",
    detailsParagraph2:
      "Integracijom automatizacije s postojećim sustavima, organizacije mogu povećati produktivnost, smanjiti troškove i poboljšati točnost u svim operacijama.",
    benefits: [
      "Smanjeni operativni troškovi",
      "Brže izvršavanje tijeka rada",
      "Veća točnost procesa",
      "Poboljšana produktivnost",
      "Smanjenje pogrešaka",
      "Skalabilni sustavi automatizacije",
      "Poboljšana operativna transparentnost"
    ],
    rangeOfServicesTitle: "Naše mogućnosti automatizacije",
    rangeOfServicesDescription:
      "Forum Invest dizajnira rješenja koja poboljšavaju operativne performanse u svim odjelima. Naši okviri omogućuju brzinu i visoku kvalitetu.",
    faqs: [
      {
        question: "Što je inteligentna automatizacija?",
        answer: "To je korištenje AI i tehnologija automatizacije za pojednostavljenje poslovnih procesa i smanjenje ručnog rada."
      },
      {
        question: "Koji se procesi mogu automatizirati?",
        answer: "Administrativni zadaci, obrada podataka, tijekovi rada podrške i financijski procesi."
      },
      {
        question: "Hoće li automatizacija zamijeniti zaposlenike?",
        answer: "Automatizacija podržava zaposlenike uklanjanjem repetitivnih zadataka, omogućujući im fokus na strateški rad."
      }
    ]
  },
  {
    id: 9,
    slug: "data-intelligence-and-analytics",
    title: "Podatkovna inteligencija i analitika",
    description: "Pretvaranje podataka u djelotvorne uvide putem napredne analitike, prediktivnog modeliranja i strojnog učenja.",
    icon: "hugeicons:ai-network",
    href: "/services/data-intelligence-and-analytics",
    image: service03,
    gallery: [service03, service04, service05],
    features: ["Prediktivna analitika", "Modeli strojnog učenja", "Vizualizacija podataka", "Poslovna inteligencija"],
    detailsParagraph1:
      "Usluge podatkovne inteligencije pretvaraju složene skupove podataka u strateške uvide. Naši analitički okviri omogućuju razumijevanje trendova i predviđanje ishoda.",
    detailsParagraph2:
      "Koristeći strojno učenje, pomažemo organizacijama pretvoriti sirove podatke u inteligenciju koja podržava donošenje odluka temeljem dokaza.",
    benefits: [
      "Prediktivni uvidi",
      "Poboljšane poslovne odluke",
      "Strategija vođena podacima",
      "Operativna transparentnost",
      "Optimizacija performansi",
      "Smanjenje rizika",
      "Poboljšano predviđanje"
    ],
    rangeOfServicesTitle: "Naše usluge analitike podataka",
    rangeOfServicesDescription:
      "Forum Invest pruža napredne analitičke okvire dizajnirane da otključaju punu vrijednost vaših podataka spajajući AI i poslovnu inteligenciju.",
    faqs: [
      {
        question: "Što je podatkovna inteligencija?",
        answer: "Proces analize velikih količina podataka radi izvlačenja značenja koje vodi strateške odluke."
      },
      {
        question: "Kako analitika poboljšava poslovanje?",
        answer: "Identificira obrasce, optimizira procese i predviđa buduće trendove."
      },
      {
        question: "Trebaju li nam veliki skupovi podataka?",
        answer: "Iako veliki podaci pružaju dublje uvide, smislena analitika moguća je i na manjim strukturiranim podacima."
      }
    ]
  },
  {
    id: 10,
    slug: "ai-strategy-and-consulting",
    title: "AI strategija i savjetovanje",
    description: "Pomažemo organizacijama osmisliti dugoročne AI planove usklađene s poslovnim ciljevima, regulatornim okvirima i operativnom stvarnošću.",
    icon: "hugeicons:ai-chat-02",
    href: "/services/ai-strategy-and-consulting",
    image: service04,
    gallery: [service04, service05, service06],
    features: ["Strateško planiranje", "AI planovi razvoja", "Regulatorna usklađenost", "Procjena tehnologije"],
    detailsParagraph1:
      "Usluge AI strategije pomažu organizacijama u dizajnu strukturiranih transformacija. Naši konzultanti procjenjuju spremnost i tržišne prilike.",
    detailsParagraph2:
      "Stvaramo dugoročne AI planove koji su usklađeni s regulatornim okvirima i vašim specifičnim poslovnim ciljevima.",
    benefits: [
      "Strateška jasnoća",
      "Planovi za usvajanje AI-a",
      "Smanjenje rizika",
      "Usklađenost tehnologije",
      "Konkurentska prednost",
      "Operativna transformacija",
      "Regulatorna usklađenost"
    ],
    rangeOfServicesTitle: "Naše usluge AI strategije",
    rangeOfServicesDescription:
      "Forum Invest podržava organizacije u dizajnu AI strategija koje donose mjerljivu vrijednost uz poštivanje propisa.",
    faqs: [
      {
        question: "Zašto je AI strategija važna?",
        answer: "Osigurava da ulaganja u tehnologiju budu usklađena s dugoročnim poslovnim ciljevima."
      },
      {
        question: "Trebamo li unutarnju tehničku stručnost?",
        answer: "Ne. Naše usluge pružaju vodstvo za organizacije na svim razinama zrelosti u AI-u."
      },
      {
        question: "Može li AI strategija smanjiti rizike?",
        answer: "Da. Planiranje pomaže u upravljanju tehnološkim, operativnim i regulatornim rizicima."
      }
    ]
  },
  {
    id: 11,
    slug: "custom-ai-solutions",
    title: "Prilagođena AI rješenja",
    description: "Dizajniranje AI aplikacija specifičnih za industriju, prilagođenih potrebama svake organizacije.",
    icon: "hugeicons:artificial-intelligence-01",
    href: "/services/custom-ai-solutions",
    image: service05,
    gallery: [service05, service06, service01],
    features: ["Industrijska rješenja", "Razvoj AI modela", "Prilagođene aplikacije", "Enterprise integracija"],
    detailsParagraph1:
      "Prilagođena AI rješenja fokusirana su na razvoj inteligentnih sustava za specifična poslovna okruženja i jedinstvene izazove.",
    detailsParagraph2:
      "Naš tim razvija modele strojnog učenja i aplikacije dizajnirane za mjerljiva poboljšanja produktivnosti.",
    benefits: [
      "Rješenja specifična za industriju",
      "Poboljšana produktivnost",
      "Prilagođeni AI modeli",
      "Bolje donošenje odluka",
      "Operativna učinkovitost",
      "Tehnološka diferencijacija",
      "Strateška inovacija"
    ],
    rangeOfServicesTitle: "Naše prilagođene AI usluge",
    rangeOfServicesDescription:
      "Forum Invest razvija AI sustave po mjeri dizajnirane da zadovolje specifične potrebe organizacija u svim sektorima.",
    faqs: [
      {
        question: "Što su prilagođena AI rješenja?",
        answer: "Sustavi dizajnirani posebno za rješavanje jedinstvenih operativnih zahtjeva vaše organizacije."
      },
      {
        question: "Koje industrije imaju najviše koristi?",
        answer: "Financije, logistika, automobilska industrija, zdravstvo i javne usluge."
      },
      {
        question: "Jesu li prilagođena rješenja skalabilna?",
        answer: "Da. Naši sustavi su izgrađeni s vizijom skalabilnosti i budućeg rasta."
      }
    ]
  },
  {
    id: 12,
    slug: "cloud-ai-infrastructure",
    title: "Cloud i AI infrastruktura",
    description: "Izgradnja skalabilne i sigurne cloud infrastrukture optimizirane za AI radna opterećenja, obradu podataka i poslovne aplikacije.",
    icon: "hugeicons:cloud",
    href: "/services/cloud-ai-infrastructure",
    image: service06,
    gallery: [service06, service01, service02],
    features: ["Cloud arhitektura", "AI infrastruktura", "Skalabilni sustavi", "Sigurne platforme"],
    detailsParagraph1:
      "Usluge Cloud i AI infrastrukture pružaju tehnološki temelj za moderne AI sustave optimizirane za obradu podataka.",
    detailsParagraph2:
      "Dizajniramo sigurne i skalabilne infrastrukture koje podržavaju poslovne aplikacije i naprednu analitiku.",
    benefits: [
      "Visokoučinkovita infrastruktura",
      "Sigurna Cloud okruženja",
      "Skalabilne AI platforme",
      "Smanjeni troškovi infrastrukture",
      "Fleksibilni resursi",
      "Optimizirana obrada podataka",
      "Pouzdane performanse sustava"
    ],
    rangeOfServicesTitle: "Naše usluge Cloud infrastrukture",
    rangeOfServicesDescription:
      "Forum Invest razvija okruženja dizajnirana da podrže AI inovaciju i skalabilnost, spajajući sigurnost i pouzdanost.",
    faqs: [
      {
        question: "Zašto je Cloud infrastruktura važna za AI?",
        answer: "AI sustavi zahtijevaju snažne računalne resurse i skalabilna podatkovna okruženja."
      },
      {
        question: "Je li Cloud infrastruktura sigurna?",
        answer: "Da. Naše arhitekture dizajnirane su s jakim sigurnosnim okvirima i standardima usklađenosti."
      },
      {
        question: "Može li Cloud skalirati s rastom poslovanja?",
        answer: "Apsolutno. Cloud sustavi su dizajnirani za dinamičko skaliranje prema potrebama."
      }
    ]
  }
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

export type AIServiceItem = {
  title: string;
  description: string;
  icon: string;
};

export type ProcessData = {
  header: SectionHeader;
  steps: ProcessStep[];
};

export type AIServicesData = {
  header: SectionHeader;
  services: AIServiceItem[];
};
// =======================
// Hero
// =======================

export const heroData: HeroData = {
  title: "Transformirajmo ideje u stvarnost",
  buttonText: "Započnite odmah",
  quote: "Posvećeni smo preciznom inženjerstvu i trajnoj suradnji; potičemo uspjeh kroz transparentne inovacije i zajedničku viziju industrijske umjetne inteligencije.",
  counter: "10",
  counterSuffix: "M+"
};

// =======================
// Hero
// =======================
export const adriaHeroData: HeroData = {
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
    subtitle: "Naš pristup",
    title: "Prilagođene AI arhitekture za uspjeh na industrijskoj razini",
    description: "Pretvaramo inovativna AI istraživanja u skalabilne industrijske primjene.",
    buttonText: "Zatraži poziv"
  },
  steps: [
    {
      stepNumber: "01",
      title: "Razumijevanje",
      description: "Započinjemo razumijevanjem klijentovog ekosustava, podatkovne infrastrukture i operativnih izazova."
    },
    {
      stepNumber: "02",
      title: "Dizajniranje",
      description: "Naši stručnjaci dizajniraju prilagođene AI strategije i arhitekture koje odgovaraju ciljevima organizacije."
    },
    {
      stepNumber: "03",
      title: "Integracija",
      description: "Besprijekorno integriramo AI rješenja u postojeće platforme, tijekove rada i sustave odlučivanja."
    },
    {
      stepNumber: "04",
      title: "Skaliranje",
      description: "Naša rješenja su izgrađena za skalabilnost, osiguravajući dugoročnu vrijednost razvojem organizacija."
    }
  ]
};

export const aiServicesData: AIServicesData = {
  header: {
    subtitle: "Naše osnovne usluge",
    title: "Omogućujemo industrijsku izvrsnost putem umjetne inteligencije",
    description: "Pružamo cjelovita AI rješenja dizajnirana za transformaciju poslovanja i poticanje inovacija."
  },
  services: [
    {
      title: "AI integracija i implementacija",
      description: "Pomažemo organizacijama integrirati AI u postojeće digitalne ekosustave, osiguravajući besprijekorno usvajanje uz minimalne smetnje.",
      icon: "hugeicons:ai-idea"
    },
    {
      title: "Inteligentna automatizacija",
      description: "Automatizacija radnih procesa i poslovnih operacija pomoću AI-a radi poboljšanja učinkovitosti, točnosti i brzine.",
      icon: "hugeicons:ai-cloud-01"
    },
    {
      title: "Podatkovna inteligencija i analitika",
      description: "Pretvaranje podataka u djelotvorne uvide putem napredne analitike, prediktivnog modeliranja i strojnog učenja.",
      icon: "hugeicons:ai-network"
    },
    {
      title: "AI strategija i savjetovanje",
      description: "Pomažemo organizacijama osmisliti dugoročne AI planove usklađene s poslovnim ciljevima, regulatornim okvirima i operativnom stvarnošću.",
      icon: "hugeicons:ai-chat-02"
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
  title: "Surađujemo s",
  description: "Surađujemo u svim sektorima kako bismo potaknuli AI transformaciju i isporučili održivu industrijsku izvrsnost."
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

export const adriaSolutionHeader: SectionHeader = {
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
      title: "Inovativna Rješenja",
      description: "Ostajemo korak ispred koristeći najsuvremenije tehnologije i strategije kako bismo vam pomogli da ostanete konkurentni na tržištu."
    },
    {
      icon: "la:award",
      title: "Nagrađivana Stručnost",
      description: "Prepoznati od strane industrijskih lidera, naš nagrađivani tim ima dokazanu povijest postizanja izvrsnosti u projektima."
    },
    {
      icon: "streamline-plump:customer-support-3",
      title: "Posvećena Podrška",
      description: "Naš tim je uvijek dostupan za rješavanje vaših pitanja, pružajući brza i učinkovita rješenja kako bi vaše poslovanje nesmetano funkcioniralo."
    },
    {
      icon: "mdi:robot-outline",
      title: "Stručnjaci za AI Integraciju",
      description: "Mi smo europska tehnološka tvrtka usmjerena na pomoć organizacijama u sigurnom i učinkovitom usvajanju i integraciji umjetne inteligencije."
    },
    {
      icon: "carbon:machine-learning",
      title: "Multidisciplinarni Tim",
      description: "Naš tim kombinira stručnost u AI inženjerstvu, znanosti o podacima, poslovnim sustavima i industrijskom savjetovanju kako bi napredne AI tehnologije pretvorio u praktična rješenja."
    },
    {
      icon: "mdi:lightbulb-on-outline",
      title: "Vođeni Inovacijama",
      description: "Izgradili smo prepoznatljiv i napredan identitet temeljen na inovacijama, uvidu i pouzdanosti kako bismo pružili moderna i učinkovita tehnološka rješenja."
    },
    {
      icon: "mdi:account-search-outline",
      title: "Duboko Razumijevanje Klijenata",
      description: "Naši stručnjaci pažljivo analiziraju zahtjeve klijenata te prepoznaju izazove i prilike kako bi osmislili rješenja prilagođena stvarnom poslovnom okruženju."
    },
    {
      icon: "mdi:cog-sync-outline",
      title: "Prilagođena Rješenja",
      description: "Dizajniramo i implementiramo skalabilna AI rješenja usklađena s potrebama organizacija kako bismo ostvarili održive i značajne rezultate."
    },
    {
      icon: "mdi:chart-line",
      title: "Stvarni AI Učinak",
      description: "Kombiniranjem tehničke izvrsnosti i strateškog uvida pomažemo organizacijama prijeći s eksperimentiranja na mjerljiv i stvaran utjecaj umjetne inteligencije."
    }
  ],
  getToKnowUs: {
    subtitle: "Upoznajte nas",
    title: "Poticanje inovacija i izvrsnosti za održivi korporativni uspjeh širom svijeta.",
    mission: {
      title: "Naša misija",
      description: "",
      points: [
        "Pojednostaviti i unaprijediti svakodnevni život kroz inteligentnu integraciju umjetne inteligencije.",
        "Razviti sustave i platforme temeljene na AI-u koji stvaraju trajnu vrijednost za sadašnje i buduće generacije.",
        "Razvijati i osnažiti novu generaciju IT stručnjaka sposobnih oblikovati tehnološku budućnost.",
        "Iskoristiti nove tehnologije i postojeće resurse za izgradnju pametnijih sustava, snažnijih institucija i boljih prilika za sve.",
        "Doprinijeti svijetu u kojem pojedinci, organizacije i zajednice imaju koristi od odgovorne i inteligentne upotrebe tehnologije."
      ]
    },
    vision: {
      title: "Naša vizija",
      description: "",
      points: [
        "Postati pouzdan globalni partner organizacijama koje žele odgovorno integrirati umjetnu inteligenciju u samu srž svojeg poslovanja i sustava odlučivanja.",
        "Učiniti naprednu tehnologiju dostupnom, pristupačnom i utjecajnom za svaki sektor društva.",
        "Redefinirati primjenu tehnologije kao pokretača održivog rasta, inovacija i zajedničkog prosperiteta.",
        "Poticati i podržavati istraživanja, inovacije i praktičnu primjenu tehnologije koja ubrzava napredak u svim industrijama i domenama."
      ]
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
    image: "/images/faq/faq-image-01.jpg",
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
        question: "What services does Forum Invest provide?",
        answer: "Forum Invest specializes in AI integration, enterprise strategy, intelligent automation, and advanced analytics. We help organizations adopt Artificial Intelligence to improve productivity, decision-making, and operational efficiency while ensuring solutions are scalable, secure, and aligned with long-term business goals."
      },
      {
        question: "How does Forum Invest help organizations adopt AI?",
        answer: "We guide organizations through the full AI transformation journey—from strategy and architecture design to system integration and deployment. Our experts ensure AI technologies integrate seamlessly with existing workflows while delivering measurable improvements in efficiency and performance."
      },
      {
        question: "Which industries does Forum Invest work with?",
        answer: "Forum Invest develops AI solutions for industries including automotive, logistics, finance, insurance, research institutions, and the public sector. Our approach focuses on creating tailored solutions that align with the operational and strategic needs of each industry."
      },
      {
        question: "Does Forum Invest provide AI training for teams?",
        answer: "Yes. Forum Invest helps organizations build internal AI capabilities by training existing teams and supporting the development of AI talent. Our programs equip professionals with practical knowledge needed to successfully work with intelligent technologies."
      },
      {
        question: "How does Forum Invest ensure reliable and secure AI solutions?",
        answer: "Our engineering frameworks are built on research-driven design, cybersecurity by default, and compliance with global and European standards. We focus on performance optimization, secure architectures, and scalable systems that remain reliable as organizations grow."
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
