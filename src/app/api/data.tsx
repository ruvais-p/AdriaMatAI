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
// Solutions
// =======================

export const solutionData: SolutionItem[] = [
  {
    title: "AI Integration Strategy",
    icon: "mdi:brain",
    description:
      "Design strategic roadmaps to integrate Artificial Intelligence into existing business systems and workflows effectively.",
  },
  {
    title: "AI Training & Workforce Development",
    icon: "mdi:school",
    description:
      "Equip employees with practical AI knowledge and skills while helping organizations attract and nurture top AI talent.",
  },
  {
    title: "Intelligent Process Automation",
    icon: "mdi:robot-outline",
    description:
      "Leverage AI-powered automation to improve operational efficiency, reduce manual workload, and enhance productivity.",
  },
  {
    title: "AI-Driven Decision Intelligence",
    icon: "mdi:chart-line",
    description:
      "Use advanced AI analytics and predictive models to support smarter and faster business decision-making.",
  },
  {
    title: "Responsible & Sustainable AI",
    icon: "mdi:leaf",
    description:
      "Implement ethical, transparent, and sustainable AI solutions that align with organizational values and long-term goals.",
  },
  {
    title: "Industry-Specific AI Solutions",
    icon: "mdi:domain",
    description:
      "Develop tailored AI systems for sectors such as automotive, logistics, finance, insurance, research, and the public sector.",
  },
];

// =======================
// Adria Solutions
// =======================

export const adriaSolutionData: SolutionItem[] = [
  {
    title: "Training & Development",
    icon: "mdi:school",
    description:
      "Equip your teams with relevant skills and practical knowledge aligned with corporate goals, driving performance, innovation, and long-term organizational success.",
  },
  {
    title: "Technology Transfer",
    icon: "mdi:briefcase-outline",
    description:
      "We seamlessly transfer eco-efficient innovations into global industrial workflows, transforming research into scalable, sustainable applications.",
  },
  {
    title: "AI-Driven Roadmaps",
    icon: "mdi:brain",
    description:
      "We design intelligent AI roadmaps enabling seamless digital transformation, scalable operations, and long-term organizational growth.",
  },
  {
    title: "Eco-Efficient Discovery",
    icon: "mdi:account-group-outline",
    description:
      "We integrate machine learning into R&D to accelerate sustainable discoveries for circular, low-carbon industrial futures.",
  },
  {
    title: "Industrial Partnerships",
    icon: "mdi:school",
    description:
      "We extend your R&D capabilities through strategic partnerships, converting complex technical challenges into market advantages.",
  },


];

// =======================
// Companies
// =======================

export const companies: CompanyItem[] = [
  { name: "Corporate Entities" },
  { name: "Government institutions" },
  { name: "Research organizations" },
  { name: "Educational institutions" },
  { name: "Non-profit organizations" },
];

// =======================
// Projects
// =======================

export const projects: ProjectItem[] = [
  {
    category: "Innovation",
    title: "AI-Powered Analytics Suite",
    description:
      "Transform raw data into meaningful insights with predictive AI dashboards that help businesses make faster and smarter decisions.",
    image: "/images/projects/project-01.jpg",
    link: "/about",
  },
  {
    category: "Collaboration",
    title: "Remote Team Workspace",
    description:
      "A modern digital hub that connects remote teams, enabling real-time communication, seamless file sharing, and productive workflows.",
    image: "/images/projects/project-02.jpg",
    link: "/about",
  },
  {
    category: "Growth",
    title: "E-Commerce Acceleration Platform",
    description:
      "Boost online sales with optimized storefronts, automated marketing campaigns, and customer engagement tools built for scale.",
    image: "/images/projects/project-03.jpg",
    link: "/about",
  },
  {
    category: "Strategy",
    title: "Smart Event Management System",
    description:
      "Plan, manage, and analyze events effortlessly with AI-driven tools for scheduling, attendee engagement, and real-time insights.",
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
      "Artificial Intelligence is redefining global business. At Forum Invest, we combine advanced AI, engineering, and enterprise strategy to help organizations evolve into intelligent, adaptive ecosystems. Our focus is disciplined execution, scalable innovation, and strategic partnerships that create lasting competitive advantage.",
    name: "Ivan Jedvej",
    position: "CEO",
    image: "/images/testimonials/user.jpg",
  },
  {
    id: 2,
    text:
      "Technology leadership in the AI era demands precision, secure architecture, and continuous innovation. Forum Invest builds intelligent systems integrating AI, automation, and analytics into scalable infrastructures. Guided by research, cybersecurity, and performance optimization, we deliver reliable enterprise solutions designed for long-term impact.",
    name: "Prof. Sasi Gopalan",
    position: "CTO",
    image: "/images/testimonials/user2.jpg",
  },
  {
    id: 3,
    text:
      "Markets today are defined by intelligence. Forum Invest helps organizations redesign operations through AI integration, unlock predictive insights, and improve productivity while reducing costs. Our mission is to translate intelligent systems into measurable business performance and strong long-term market leadership.",
    name: "Sherif",
    position: "CMO",
    image: "/images/testimonials/user3.jpg",
  },
];

// =======================
// Footer Links
// =======================

export const footerLinks: FooterLink[] = [
  { link: "Customer Experience" },
  { link: "Training Programs" },
  { link: "Business Strategy" },
  { link: "Training Program" },
  { link: "ESG Consulting" },
  { link: "Development Hub" },
  { link: "Contact us" },
  { link: "Team Member" },
  {
    link: "Recognitions",
  },
  {
    link: "Careers",
  },
  {
    link: "News",
  },
  {
    link: "Feedback",
  },
  {
    link: "Privacy",
  },
  {
    link: "Security",
  },
  {
    link: "Disclaimer",
  },
];

// blogs

export const blogs = [
  {
    id: 1,
    slug: "harnessing-digital-transform",
    title: "Harnessing Digital Transform: A Roadmap for Businesses",
    category: "Business",
    author: "Ellinien Loma",
    date: "18 Jun",
    image: "/images/blog/blog-1.jpg",
    description: "Discover how to leverage digital transformation to boost efficiency and growth."
  },
  {
    id: 2,
    slug: "mastering-change-management",
    title: "Mastering Change Management: Lessons for Businesses",
    category: "Corporate",
    author: "Ellinien Loma",
    date: "14 Jun",
    image: "/images/blog/blog-2.jpg",
    description: "Learn proven change management strategies for adapting to evolving business challenges."
  },
  {
    id: 3,
    slug: "entrepreneur-mindset-success",
    title: "Entrepreneur Mindset: Habits That Drive Success",
    category: "Innovation",
    author: "Ellinien Loma",
    date: "01 Oct, 2025",
    image: "/images/blog/blog-3.jpg",
    description: "Explore the key habits and strategies that shape a successful entrepreneur mindset."
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
    title: "Business Strategy Development",
    description: "Through a combination of data-driven insights and innovative approaches, we work closely with you to develop customized solutions.",
    icon: "bxs:business",
    href: "/services/business-strategy-development",
    image: service01,
    gallery: [service01, service02, service03],
    features: ["Innovation", "Scalable Systems", "Customer-Centric Approach", "Resilience"],
  },
  {
    id: 2,
    slug: "customer-experience-solutions",
    title: "Customer Experience Solutions",
    description: "Developing personalized customer journeys to increase satisfaction and loyalty.",
    icon: "raphael:customer",
    href: "/services/customer-experience-solutions",
    image: service02,
    gallery: [service02, service03],
    features: ["Customer-Centric Approach", "Operational Efficiency", "Continuous Learning"],
    detailsParagraph1: "Recognize that exceptional customer experiences are at the heart of every successful business. Our Customer Experience Solutions are crafted to help you transform every interaction your customers have with your brand into a meaningful and positive experience. We believe that understanding the customer journey and providing personalized, seamless experiences can significantly enhance customer loyalty, satisfaction, and lifetime value. Our approach to customer experience is comprehensive and data-driven.",
    detailsParagraph2: "Our approach to customer experience is comprehensive and data-driven. We begin by assessing your current customer touchpoints, identifying areas for improvement, and using insights to develop strategies that meet your customers' evolving needs. From optimizing digital platforms.",
    benefits: [
      "Personalization at Scale",
      "Customer Retention",
      "Improved Customer Retention",
      "Support Optimization",
      "Data-Driven Insights",
      "Proactive Engagement",
      "Omni-channel Integration"
    ],
    rangeOfServicesTitle: "Our Range of Customer Services",
    rangeOfServicesDescription: "At Bexon, we don't just focus on solving customer problems—we focus on creating experiences that delight and build lasting relationships. Whether it's through improving customer service operations, leveraging technology, or designing more engaging digital experiences, our team is here to help you exceed your customers' expectations every time. We help you understand your customers deeply, optimize their experience.",
    faqs: [
      {
        question: "What is Customer Experience (CX) and why is it important?",
        answer: "Customer Experience (CX) refers to the overall impression a customer has of a business based on their interactions across various touchpoints—whether it’s a website visit, a customer support call, or an in-store purchase. It encompasses everything from ease of navigation and service quality to emotional connection and brand perception."
      },
      {
        question: "How can your Customer Experience Solutions benefit?",
        answer: "Our CX solutions help streamline processes, increase customer satisfaction, and build long-term loyalty through personalized experiences."
      },
      {
        question: "How do you personalize the customer experience?",
        answer: "We collect customer data and insights to tailor interactions, offers, and support to each individual’s preferences and behavior."
      },
      {
        question: "How do you collect customer feedback?",
        answer: "We use surveys, feedback forms, analytics tools, and direct interactions to gather valuable insights from your customers."
      },
      {
        question: "Can you help improve our customer support system?",
        answer: "Yes! We analyze your current support channels and implement solutions to optimize efficiency, response time, and overall satisfaction."
      }
    ],
  },
  {
    id: 3,
    slug: "sustainability-and-esg-consulting",
    title: "Sustainability and ESG Consulting",
    description: "Provide tailored strategies that not only drive long-term value but also build trust with stakeholders, investors.",
    icon: "carbon:sustainability",
    href: "/services/sustainability-and-esg-consulting",
    image: service03,
  },
  {
    id: 4,
    slug: "training-and-development-programs",
    title: "Training and Development Programs",
    description: "Training and Development Programs are designed to empower employees with the skills, knowledge, and tools they need.",
    icon: "carbon:development",
    href: "/services/training-and-development-programs",
    image: service04,
  },
  {
    id: 5,
    slug: "it-support-and-maintenance",
    title: "IT Support & Maintenance",
    description: "Our IT Support & Maintenance services ensure that your technology infrastructure is running smoothly and securely.",
    icon: "pajamas:work-item-maintenance",
    href: "/services/it-support-and-maintenance",
    image: service05,
  },
  {
    id: 6,
    slug: "marketing-strategy-and-campaigns",
    title: "Marketing Strategy & Campaigns",
    description: "Effective marketing is key to driving business growth. Our Marketing Strategy & Campaigns service.",
    icon: "streamline-freehand:creativity-idea-strategy",
    href: "/services/marketing-strategy-and-campaigns",
    image: service06,
  },
];

export const protfolio = [
  {
    id: 1,
    category: "Business",
    title: "Event Management Platform",
    slug: "event-management-platform",
    image: "/images/protfolio/project-1.webp",
  },
  {
    id: 2,
    category: "Connect",
    title: "Digital Marketing Campaign",
    slug: "digital-marketing-campaign",
    image: "/images/protfolio/project-2.webp",
  },
  {
    id: 3,
    category: "Empower",
    title: "Interactive Learning Platform",
    slug: "interactive-learning-platform",
    image: "/images/protfolio/project-3.webp",
  },
  {
    id: 4,
    category: "Support",
    title: "Environmental Impact Dashboard",
    slug: "environmental-impact-dashboard",
    image: "/images/protfolio/project-4.webp",
  },
];

export const team = [
  {
    id: 1,
    name: "Eade Marren",
    post: "Chief Executive",
    image: "/images/team/team-1.webp"
  },
  {
    id: 2,
    name: "Savannah Nguyen",
    post: "Operations Head",
    image: "/images/team/team-2.webp"
  },
  {
    id: 3,
    name: "Kristin Watson",
    post: "Marketing Lead",
    image: "/images/team/team-3.webp"
  },
  {
    id: 4,
    name: "Darlene Robertson",
    post: "Business Director",
    image: "/images/team/team-4.webp"
  },
  {
    id: 5,
    name: "Eade Marren",
    post: "Chief Executive",
    image: "/images/team/team-5.webp"
  },
  {
    id: 6,
    name: "Darlene Robertson",
    post: "Business Director",
    image: "/images/team/team-7.webp"
  },
  {
    id: 7,
    name: "Kristin Watson",
    post: "Marketing Lead",
    image: "/images/team/team-6.webp"
  },
  {
    id: 8,
    name: "Savannah Nguyen",
    post: "Operations Head",
    image: "/images/team/team-8.webp"
  },
]

export const adriaTeam = [
  {
    id: 1,
    name: "Prof.(Dr.) Sasi Gopalan",
    post: "Chief Executive",
    image: "/images/adriateam/team-1.jpg"
  },
  {
    id: 2,
    name: "Rohit T P",
    post: "Operations Head",
    image: "/images/adriateam/team-2.jpg"
  },
  {
    id: 3,
    name: "Varsha Shaheen",
    post: "Marketing Lead",
    image: "/images/adriateam/team-3.jpg"
  },
  {
    id: 4,
    name: " Sunith V S",
    post: "Business Director",
    image: "/images/adriateam/team-4.jpg"
  },
  {
    id: 5,
    name: "Alosh Denny",
    post: "Business Director",
    image: "/images/adriateam/team-5.jpg"
  },
  {
    id: 6,
    name: "Dr. Sanjana Salim",
    post: "Business Director",
    image: "/images/adriateam/team-6.jpg"
  },
  {
    id: 7,
    name: "Aswin Pradeep",
    post: "Business Director",
    image: "/images/adriateam/team-7.jpg"
  },
]


// =======================
// Hero
// =======================

export const heroData: HeroData = {
  title: "Transforming Ideas into Reality",
  buttonText: "Get Started Now",
  quote: "We are committed to precision engineering and lasting collaboration; driving success through transparent innovation and a shared vision for industrial AI.",
  counter: "10",
  counterSuffix: "M+"
};

// =======================
// AdriaHero
// =======================

export const adriaHeroData: HeroData = {
  title: "MAT AI: Translating Discovery into Delivery",
  buttonText: "Get Started Now",
  quote: "We are committed to precision engineering and lasting collaboration; driving success through transparent innovation and a shared vision for industrial AI.",
  counter: "",
  counterSuffix: ""
};



// =======================
// Commitment
// =======================

export const commitmentData: CommitmentData = {
  header: {
    subtitle: "Choose the Best",
    title: "Committed to delivering intelligent solutions that drive industrial precision, with a focus on technical excellence.",
    buttonText: "Learn More"
  },
  card1: {
    title: "Rebranding Strategy for a Growing",
    stat: "200",
    text: "Satisfied customers work with our AdriaMat AI."
  },
  card2: {
    title: "Rebranding Strategy for a Growing"
  },
  card3: {
    title: "Rebranding Strategy for a Growing",
    text: "Our team are always available to addressed our concerns, providing quick solution.",
    tags: ["Growth", "Success", "Innovate", "Lead", "Impact", "Focus", "Tech"]
  }
};

// =======================
// Pricing
// =======================

export const pricingData: PricingData = {
  header: {
    subtitle: "FLEXIBLE PRICING",
    title: "Our Pricing Plan"
  },
  toggleText: {
    monthly: "Monthly",
    yearly: "Yearly"
  },
  plans: {
    basic: {
      title: "Basic Plan",
      monthlyPrice: "99",
      yearlyPrice: "299",
      description: "Through a combination of our data-driven insights and innovative approaches.",
      buttonText: "Choose package",
      features: [
        "Access to core services",
        "Limited customer support (email)",
        "1 project per month",
        "Basic reporting and analytics",
        "Standard templates and tools",
        "Basic performance tracking"
      ]
    },
    standard: {
      title: "Standard Plan",
      monthlyPrice: "249",
      yearlyPrice: "599",
      description: "Through a combination of our data-driven insights and innovative approaches.",
      buttonText: "Choose package",
      features: [
        "All features in Basic Plan",
        "Priority customer support",
        "Up to 3 projects per month",
        "Monthly performance reviews",
        "Collaboration tools for team",
        "Custom templates"
      ]
    },
    premium: {
      title: "Premium Plan",
      monthlyPrice: "499",
      yearlyPrice: "899",
      description: "Through a combination of our data-driven insights and innovative approaches.",
      buttonText: "Choose package",
      features: [
        "All features in Standard Plan",
        "Dedicated account manager",
        "Tailored strategy sessions",
        "Quarterly performance audits",
        "Priority support",
        "24/7 emergency service"
      ]
    }
  }
};

// =======================
// Process
// =======================

export const processData: ProcessData = {
  header: {
    subtitle: "Our Approach",
    title: "Bespoke AI Architectures for Industrial-Scale Success",
    description: "Translating innovative AI research into scalable industrial applications.",
    buttonText: "Request a Call"
  },
  steps: [
    {
      stepNumber: "01",
      title: "Understand",
      description: "We begin by understanding the client’s ecosystem, data infrastructure, and operational challenges."
    },
    {
      stepNumber: "02",
      title: "Design",
      description: "Our experts design tailored AI strategies and architectures suited to the organization’s objectives."
    },
    {
      stepNumber: "03",
      title: "Integrate",
      description: "We seamlessly integrate AI solutions into existing platforms, workflows, and decision-making systems."
    },
    {
      stepNumber: "04",
      title: "Scale",
      description: "Our solutions are built for scalability, ensuring long-term value as organizations grow."
    }
  ]
};

export const aiServicesData: AIServicesData = {
  header: {
    subtitle: "Our Core Services",
    title: "Enabling Industrial Excellence Through Artificial Intelligence",
    description: "We provide end-to-end AI solutions designed to transform operations and drive innovation."
  },
  services: [
    {
      title: "AI Integration & Implementation",
      description: "We help organizations integrate AI into existing digital ecosystems, ensuring seamless adoption with minimal disruption.",
      icon: "hugeicons:ai-idea"
    },
    {
      title: "Intelligent Automation",
      description: "Automation of workflows and business processes using AI to improve efficiency, accuracy, and speed.",
      icon: "hugeicons:ai-cloud-01"
    },
    {
      title: "Data Intelligence & Analytics",
      description: "Transforming data into actionable insights through advanced analytics, predictive modelling, and machine learning.",
      icon: "hugeicons:ai-network"
    },
    {
      title: "AI Strategy & Consulting",
      description: "Helping organizations design long-term AI roadmaps aligned with business goals, regulatory frameworks, and operational realities.",
      icon: "hugeicons:ai-chat-02"
    }
  ]
};

// =======================
// Section Headers
// =======================

export const blogHeader: SectionHeader = {
  subtitle: "Our Blogs",
  title: "Strategies and Insights."
};

export const companiesHeader: SectionHeader = {
  subtitle: "Our Partners",
  title: "We work with",
  description: "We collaborate across sectors to drive AI-powered transformation and deliver sustainable industrial excellence."
};

export const projectsHeader: SectionHeader = {
  subtitle: "Our Projects",
  title: "Start Your Intelligence Transformation with MAT.AI"
};

export const solutionHeader: SectionHeader = {
  subtitle: "Our Solution",
  title: "Tailor-Made Business Solutions for Modern Corporates",
  buttonText: "Explore More"
};

export const adriaSolutionHeader: SectionHeader = {
  subtitle: "Our Solution",
  title: "Tailor-Made Business Solutions for Modern Corporates",
  buttonText: "Explore More"
};

export const testimonialsHeader = {
  title: "Hear from Our Customer.",
  rating: "4.9",
  reviewCount: "(50+ Clients Reviews)"
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
    title: "About",
    subtitle: "Choose the Best",
    description: "Empowering Business with Expertise.",
    buttonText: "Request a Call"
  },
  aboutItems: [
    {
      icon: "famicons:bulb-outline",
      title: "Innovative Solutions",
      description: "We stay ahead of the curve, leveraging cutting-edge technologies and strategies to keep you competitive in a marketplace."
    },
    {
      icon: "la:award",
      title: "Award-Winning Expertise",
      description: "Recognized by industry leaders, our award-winning team has a proven record of delivering excellence across projects."
    },
    {
      icon: "streamline-plump:customer-support-3",
      title: "Dedicated Support",
      description: "Our team is always available to address your concerns, providing quick and effective solution to keep your business."
    },
    {
      icon: "mdi:robot-outline",
      title: "AI Integration Experts",
      description: "We are a European technology company focused on helping organizations confidently adopt and integrate artificial intelligence into their operations."
    },
    {
      icon: "carbon:machine-learning",
      title: "Multidisciplinary Team",
      description: "Our team combines expertise in AI engineering, data science, enterprise systems, and industry consulting to transform advanced AI technologies into practical solutions."
    },
    {
      icon: "mdi:lightbulb-on-outline",
      title: "Innovation Driven",
      description: "We have built a forward-looking identity centered on innovation, insight, and reliability to deliver modern and effective technological solutions."
    },
    {
      icon: "mdi:account-search-outline",
      title: "Deep Client Understanding",
      description: "Our experts carefully analyze client requirements, identifying challenges and opportunities to design solutions tailored to real operational environments."
    },
    {
      icon: "mdi:cog-sync-outline",
      title: "Tailored Solutions",
      description: "We design and implement scalable AI solutions precisely aligned with organizational needs to deliver meaningful and sustainable results."
    },
    {
      icon: "mdi:chart-line",
      title: "Real AI Impact",
      description: "By combining technical excellence with strategic insight, we help organizations move from experimentation to measurable and impactful AI adoption."
    }
  ],
  getToKnowUs: {
    subtitle: "Get to Know Us",
    title: "Driving Innovation and Excellence for Sustainable Corporate Success Worldwide.",
    mission: {
      title: "Our Mission",
      description: "",
      points: [
        "To simplify and enhance everyday life through the intelligent integration of Artificial Intelligence.",
        "To develop AI-powered systems and platforms that create lasting value for present and future generations.",
        "To nurture and empower a new generation of IT professionals capable of shaping the technological future.",
        "To leverage emerging technologies and existing resources to build smarter systems, stronger institutions, and better opportunities for all.",
        "To contribute to a world where individuals, organizations, and communities benefit from the responsible and intelligent use of technology."
      ]
    },
    vision: {
      title: "Our Vision",
      description: "",
      points: [
        "To become a trusted global partner for organizations seeking to responsibly integrate artificial intelligence into the fabric of their operations and decision-making systems.",
        "To make advanced technology accessible, affordable, and impactful for every sector of society.",
        "To redefine the application of technology as a driver of sustainable growth, innovation, and shared prosperity.",
        "To encourage and support research, innovation, and practical applications of technology that accelerate progress across industries and domains."
      ]
    },
    buttonText: "Learn More About Us"
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
    title: "Faq",
    breadcrumbLinkText: "Faq"
  },
  faqSection: {

    image: "/images/faq/faq-image-01.jpg",
    items: [
      {
        question: "How quickly can your organization transform complex operational hurdles into scalable innovation?",
        answer: "Accelerating your innovation with AdriaMAT AI is a streamlined process. Contact us today to initiate a high-level consultation where we bridge the gap between your business objectives and our cutting-edge AI and Quantum capabilities. We prioritize complete transparency and rigorous quality assurance at every stage, ensuring the delivery of robust, future-ready solutions. Partner with us to transform your complex operational hurdles into sustainable competitive advantages."
      },
      {
        question: "Is your organization equipped to lead the next wave of digital transformation?",
        answer: "Strategic innovation begins with a simple conversation. Contact AdriaMAT AI today to discuss your roadmap and discover how our advanced AI and Quantum solutions can empower your project. From the initial consultation to final delivery, we prioritize transparency, meticulous quality standards, and rapid execution. Reach out now to transform your technical complexities into a sustainable competitive edge."
      },
      {
        question: "How does AdriaMAT AI translate complex business objectives into reliable, high-performance technology?",
        answer: "At AdriaMAT AI, project success is driven by a strategic partnership model focused on alignment, transparency, quality, and scalability. We initiate every engagement with a high-level consultation to synchronize your business goals with our advanced AI integration capabilities, ensuring purposeful technical execution. By employing an Agile development lifecycle, we focus on scalable deployment and rapid execution, transforming technical complexity into a sustainable and measurable competitive edge for your organization"
      },
      {
        question: "How do you transform a visionary concept into a precision-engineered digital reality?",
        answer: "Strategic innovation begins with a simple conversation. Reach out today to discuss your roadmap and discover how AdriaMAT AI’s integration capabilities can empower your vision. We provide a structured, communicative process that keeps you at the center of the development journey, guaranteeing precision engineering and on-schedule deployment. Partner with us to redefine the boundaries of your digital capabilities."
      },
      {
        question: "How does AdriaMAT AI ensure transparency and progress of your project?",
        answer: "Strategic innovation begins with a simple conversation. Simply reach out to AdriaMAT AI through our contact form or give us a call, and we’ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery."
      }
    ]
  },
  commonQuestionsSection: {
    subtitle: "Common Questions",
    title: "Need Help? Start Here...",
    items: [
      {
        question: "What services does Bexon offer to clients?",
        answer: "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we’ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery."
      },
      {
        question: "How do I get started with Corporate Business?",
        answer: "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we’ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery."
      },
      {
        question: "How do you ensure the success of a project?",
        answer: "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we’ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery."
      },
      {
        question: "How long will it take to complete my project?",
        answer: "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we’ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery."
      },
      {
        question: "Can I track the progress of my project?",
        answer: "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we’ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery."
      }
    ]
  }
};

// =======================
// Service Details Sidebar
// =======================

export const serviceDetailsSidebar = {
  moreServicesTitle: "More services",
  tagsTitle: "Tags",
  tags: ["Branding", "Business", "Consulting", "Design", "Innovate", "Lead", "Marketing"]
};
