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
  { name: "Automotive & Mobility" },
  { name: "Insurance & Financial Services" },
  { name: "Logistics & Supply Chain" },
  { name: "Manufacturing" },
  { name: "Healthcare & Life Sciences" },
  { name: "Government & Public Administration" },
  { name: "Research Institutions" },
  { name: "Education & Academic Institutions" },
  { name: "Retail & E-commerce" },
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
    title: "Harnessing Digital Transform: A Roadmap for Businesses",
    category: "Business",
    author: "Ivan Jedvej",
    date: "18 Jun 2026",
    image: "/images/blog/blog-1.jpg",
    description: "Discover how to leverage digital transformation to boost efficiency and growth.",
    detailsParagraph1:
      "Digital transformation is no longer a luxury; it's a necessity for survival in today's fast-paced market. Harnessing the power of digital tools allows businesses to streamline operations, reduce costs, and deliver superior customer value. A strategic roadmap is essential to navigate this complex journey, starting from internal processes to external customer interactions.",
    detailsParagraph2:
      "Implementing technologies like cloud computing, AI, and data analytics requires a cultural shift within the organization. By fostering a digital-first mindset, companies can unlock new levels of efficiency and agility, ensuring they remain competitive in an increasingly automated world. The roadmap involves clear milestones, continuous employee training, and a focus on scalability.",
    quote: "Digital transformation is not about technology. It's about people and how they use it to solve problems.",
    quoteAuthor: "Ivan Jedvej",
    lessonTitle: "Key Lessons in Digital Transformation",
    lessonDescription: "Successful transformation requires balancing technological adoption with organizational readiness.",
    lessonsList: [
      "Customer-Centric Strategy",
      "Data-Driven Decision Making",
      "Agile Implementation",
      "Cybersecurity Integration",
      "Scalable Infrastructure"
    ]
  },
  {
    id: 2,
    slug: "mastering-change-management",
    title: "Mastering Change Management: Lessons for Businesses",
    category: "Corporate",
    author: "Sherif",
    date: "14 Jun 2026",
    image: "/images/blog/blog-2.jpg",
    description: "Learn proven change management strategies for adapting to evolving business challenges.",
    detailsParagraph1:
      "Change is the only constant in the business world, and how an organization manages it dictates its long-term success. Mastering change management involves clear communication, leadership alignment, and an understanding of human psychology. It's about bridging the gap between current reality and the desired future state while minimizing resistance.",
    detailsParagraph2:
      "Effective change management ensures that transitions are smooth and that the desired outcomes are achieved with minimal disruption. It requires a structured approach that includes stakeholder engagement, risk assessment, and a continuous feedback loop to adjust strategies as needed. Resilience and adaptability are the hallmarks of a successful transition.",
    quote: "Change is not a threat, it's an opportunity. Survival is not the goal, excellence is.",
    quoteAuthor: "Sherif",
    lessonTitle: "Mastering Organizational Change",
    lessonDescription: "The success of any change initiative depends on the people involved and the clarity of the vision.",
    lessonsList: [
      "Transparent Communication",
      "Empowering Employees",
      "Clear Vision and Goals",
      "Iterative Progress Tracking",
      "Emotional Intelligence"
    ]
  },
  {
    id: 3,
    slug: "entrepreneur-mindset-success",
    title: "AI-Driven Business Transformation: A Roadmap for Growth",
    category: "AI",
    author: "Prof. Sasi Gopalan",
    date: "01 Oct 2026",
    image: "/images/blog/blog-3.jpg",
    description: "Discover how AI is reshaping industries, driving efficiency, and creating new opportunities for growth.",
    detailsParagraph1:
      "Artificial Intelligence is no longer a futuristic concept; it's a current driver of massive business growth. An AI-driven transformation involves integrating machine learning and predictive analytics into core business functions. This roadmap for growth helps organizations identify high-impact AI use cases, from optimizing supply chains to personalizing marketing at scale.",
    detailsParagraph2:
      "Building an AI-ready organization requires both technical investment and strategic planning. Companies must ensure their data infrastructure is robust and their teams are equipped to work alongside intelligent systems. The focus should be on creating measurable value and fostering a culture of experimentation and data-driven innovation.",
    quote: "AI will not replace humans, but humans who use AI will replace those who do not.",
    quoteAuthor: "Prof. Sasi Gopalan",
    lessonTitle: "Insights into AI Growth",
    lessonDescription: "Transforming your business with AI requires a shift from intuition to data-backed intelligence.",
    lessonsList: [
      "Infrastructure Readiness",
      "AI Ethics and Governance",
      "Predictive Maintenance",
      "Personalized Customer Journeys",
      "Operational Automation"
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
    title: "Business Strategy Development",
    description: "Through a combination of data-driven insights and innovative approaches, we work closely with you to develop customized solutions.",
    icon: "bxs:business",
    href: "/services/business-strategy-development",
    image: service01,
    gallery: [service01, service02, service03],
    features: ["Innovation", "Scalable Systems", "Customer-Centric Approach", "Resilience"],
    detailsParagraph1:
      "Business Strategy Development focuses on helping organizations define clear long-term objectives and build structured plans to achieve sustainable growth. Our team combines market research, operational analysis, and strategic planning to design effective business frameworks.",
    detailsParagraph2:
      "By aligning strategic planning with real operational capabilities, we help organizations adapt to changing markets while maintaining stability and competitiveness.",
    benefits: [
      "Clear Strategic Direction",
      "Improved Decision Making",
      "Sustainable Business Growth",
      "Competitive Market Positioning",
      "Operational Alignment",
      "Risk Management",
      "Long-Term Business Value"
    ],
    rangeOfServicesTitle: "Our Business Strategy Services",
    rangeOfServicesDescription:
      "Forum Invest helps organizations develop structured business strategies that align operational capabilities with long-term growth objectives.",
    faqs: [
      {
        question: "What is Business Strategy Development?",
        answer: "It is the process of defining long-term goals and creating structured plans to achieve sustainable growth."
      },
      {
        question: "How does strategy improve business performance?",
        answer: "A clear strategy helps organizations focus resources, reduce risks, and identify new opportunities."
      },
      {
        question: "Can strategy consulting help growing companies?",
        answer: "Yes. Strategic guidance helps businesses scale operations and adapt to changing market conditions."
      }
    ]
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
    detailsParagraph1:
      "Exceptional customer experiences are at the heart of successful organizations. Our Customer Experience Solutions help businesses design meaningful interactions that improve satisfaction and loyalty.",
    detailsParagraph2:
      "We analyze customer journeys, optimize digital platforms, and develop strategies that enhance engagement across all touchpoints.",
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
    rangeOfServicesDescription:
      "Forum Invest focuses on creating experiences that strengthen relationships between businesses and their customers.",
    faqs: [
      {
        question: "What is Customer Experience (CX)?",
        answer: "Customer Experience refers to the overall impression a customer forms through interactions with a business."
      },
      {
        question: "How do CX solutions improve customer loyalty?",
        answer: "By personalizing experiences and optimizing interactions across digital and physical channels."
      },
      {
        question: "How do you collect customer insights?",
        answer: "Through analytics tools, surveys, and direct customer interactions."
      }
    ]
  },

  {
    id: 3,
    slug: "sustainability-and-esg-consulting",
    title: "Sustainability and ESG Consulting",
    description: "Provide tailored strategies that not only drive long-term value but also build trust with stakeholders and investors.",
    icon: "carbon:sustainability",
    href: "/services/sustainability-and-esg-consulting",
    image: service03,
    gallery: [service03, service04, service05],
    features: ["Sustainable Strategy", "ESG Compliance", "Environmental Responsibility", "Stakeholder Trust"],
    detailsParagraph1:
      "Sustainability and ESG Consulting helps organizations integrate environmental, social, and governance principles into their operational strategies.",
    detailsParagraph2:
      "Our consulting frameworks support responsible growth, regulatory compliance, and long-term sustainability while strengthening stakeholder confidence.",
    benefits: [
      "Improved Corporate Reputation",
      "Regulatory Compliance",
      "Investor Confidence",
      "Sustainable Growth",
      "Risk Reduction",
      "Environmental Responsibility",
      "Long-Term Value Creation"
    ],
    rangeOfServicesTitle: "Our ESG Consulting Services",
    rangeOfServicesDescription:
      "Forum Invest helps organizations design ESG strategies that align sustainability goals with business growth and regulatory requirements.",
    faqs: [
      {
        question: "What is ESG consulting?",
        answer: "It helps organizations integrate environmental, social, and governance practices into their operations."
      },
      {
        question: "Why is ESG important for companies?",
        answer: "ESG practices improve corporate reputation, investor trust, and regulatory compliance."
      },
      {
        question: "Can ESG strategies improve business performance?",
        answer: "Yes, sustainable practices often lead to long-term financial and operational benefits."
      }
    ]
  },

  {
    id: 4,
    slug: "training-and-development-programs",
    title: "Training and Development Programs",
    description: "Empowering employees with the skills, knowledge, and tools needed to succeed in modern business environments.",
    icon: "carbon:development",
    href: "/services/training-and-development-programs",
    image: service04,
    gallery: [service04, service05, service06],
    features: ["Professional Growth", "Skill Development", "Leadership Training", "Continuous Learning"],
    detailsParagraph1:
      "Training and Development Programs help organizations strengthen workforce capabilities and prepare teams for evolving business challenges.",
    detailsParagraph2:
      "Our training frameworks focus on leadership, technical skills, and innovation to create a culture of continuous learning.",
    benefits: [
      "Employee Skill Development",
      "Improved Productivity",
      "Leadership Growth",
      "Knowledge Sharing",
      "Team Collaboration",
      "Innovation Culture",
      "Higher Employee Retention"
    ],
    rangeOfServicesTitle: "Our Training Programs",
    rangeOfServicesDescription:
      "Forum Invest provides professional training programs designed to empower employees and support organizational development.",
    faqs: [
      {
        question: "Why are training programs important?",
        answer: "They help employees develop new skills and adapt to changing industry demands."
      },
      {
        question: "Can training improve employee performance?",
        answer: "Yes. Well-designed training programs improve productivity and job satisfaction."
      },
      {
        question: "Do you provide customized training programs?",
        answer: "Yes. Our training programs are tailored to meet organizational needs."
      }
    ]
  },

  {
    id: 5,
    slug: "it-support-and-maintenance",
    title: "IT Support & Maintenance",
    description: "Ensuring technology infrastructure runs smoothly, securely, and efficiently.",
    icon: "pajamas:work-item-maintenance",
    href: "/services/it-support-and-maintenance",
    image: service05,
    gallery: [service05, service06, service01],
    features: ["System Monitoring", "Security Maintenance", "Technical Support", "Infrastructure Stability"],
    detailsParagraph1:
      "IT Support & Maintenance services ensure that enterprise technology infrastructure remains secure, stable, and operational.",
    detailsParagraph2:
      "Our experts monitor systems, perform maintenance updates, and resolve technical issues to prevent downtime and operational disruptions.",
    benefits: [
      "Reduced System Downtime",
      "Improved Security",
      "Reliable IT Infrastructure",
      "Faster Issue Resolution",
      "Operational Stability",
      "Proactive System Monitoring",
      "Technology Optimization"
    ],
    rangeOfServicesTitle: "Our IT Support Services",
    rangeOfServicesDescription:
      "Forum Invest provides proactive IT support and maintenance to ensure business systems remain secure and operational.",
    faqs: [
      {
        question: "What does IT support include?",
        answer: "IT support includes system monitoring, troubleshooting, maintenance, and security updates."
      },
      {
        question: "Why is regular IT maintenance important?",
        answer: "It helps prevent system failures, improves security, and ensures smooth operations."
      },
      {
        question: "Can IT support improve system performance?",
        answer: "Yes. Regular maintenance and optimization improve system reliability and speed."
      }
    ]
  },

  {
    id: 6,
    slug: "marketing-strategy-and-campaigns",
    title: "Marketing Strategy & Campaigns",
    description: "Developing marketing strategies and campaigns that drive growth and brand visibility.",
    icon: "streamline-freehand:creativity-idea-strategy",
    href: "/services/marketing-strategy-and-campaigns",
    image: service06,
    gallery: [service06, service01, service02],
    features: ["Brand Strategy", "Digital Campaigns", "Market Insights", "Customer Engagement"],
    detailsParagraph1:
      "Marketing Strategy & Campaigns services help organizations strengthen brand visibility and attract new customers through targeted marketing initiatives.",
    detailsParagraph2:
      "Our team develops data-driven marketing strategies that combine digital campaigns, brand storytelling, and customer engagement.",
    benefits: [
      "Increased Brand Awareness",
      "Customer Engagement",
      "Targeted Campaigns",
      "Data-Driven Marketing",
      "Improved Lead Generation",
      "Market Expansion",
      "Stronger Brand Identity"
    ],
    rangeOfServicesTitle: "Our Marketing Services",
    rangeOfServicesDescription:
      "Forum Invest designs strategic marketing campaigns that help organizations reach the right audiences and accelerate business growth.",
    faqs: [
      {
        question: "What is a marketing strategy?",
        answer: "It is a structured plan designed to promote products, services, and brand value to the right audience."
      },
      {
        question: "How do marketing campaigns improve growth?",
        answer: "They increase brand awareness, generate leads, and strengthen customer relationships."
      },
      {
        question: "Do you provide digital marketing strategies?",
        answer: "Yes. Our marketing strategies include digital platforms, analytics, and targeted campaigns."
      }
    ]
  }, {
    id: 7,
    slug: "ai-integration-and-implementation",
    title: "AI Integration & Implementation",
    description: "We help organizations integrate AI into existing digital ecosystems, ensuring seamless adoption with minimal disruption.",
    icon: "hugeicons:ai-idea",
    href: "/services/ai-integration-and-implementation",
    image: service01,
    gallery: [service01, service02, service03],
    features: ["AI Integration", "System Compatibility", "Scalable Architecture", "Operational Efficiency"],
    detailsParagraph1:
      "AI Integration & Implementation services help organizations embed artificial intelligence into their existing digital environments. Our approach focuses on seamless integration that enhances operational capabilities without disrupting current workflows.",
    detailsParagraph2:
      "We analyze your infrastructure, data systems, and operational processes to ensure AI solutions integrate smoothly. Our team ensures the architecture remains scalable, secure, and optimized for performance while aligning with long-term strategic goals.",
    benefits: [
      "Seamless System Integration",
      "Improved Operational Efficiency",
      "Enhanced Decision Support",
      "Reduced Implementation Risk",
      "Scalable AI Architecture",
      "Data Utilization Optimization",
      "Faster Technology Adoption"
    ],
    rangeOfServicesTitle: "Our AI Integration Services",
    rangeOfServicesDescription:
      "Forum Invest helps organizations implement AI technologies in a structured and scalable way. From system architecture planning to deployment and monitoring, our integration frameworks ensure AI capabilities deliver measurable business value.",
    faqs: [
      {
        question: "What does AI integration mean for an organization?",
        answer: "AI integration involves embedding artificial intelligence capabilities into existing systems, enabling automation, intelligent insights, and improved operational performance."
      },
      {
        question: "Will AI disrupt our existing systems?",
        answer: "No. Our integration process focuses on compatibility and minimal disruption, ensuring AI works seamlessly with your current infrastructure."
      },
      {
        question: "How long does AI implementation take?",
        answer: "Implementation timelines depend on project scope, data availability, and system complexity, but we design projects to deliver results in structured phases."
      }
    ]
  },

  {
    id: 8,
    slug: "intelligent-automation",
    title: "Intelligent Automation",
    description: "Automation of workflows and business processes using AI to improve efficiency, accuracy, and speed.",
    icon: "hugeicons:ai-cloud-01",
    href: "/services/intelligent-automation",
    image: service02,
    gallery: [service02, service03, service04],
    features: ["Process Automation", "Workflow Optimization", "AI Decision Engines", "Operational Efficiency"],
    detailsParagraph1:
      "Intelligent Automation combines AI, machine learning, and automation technologies to streamline complex business processes. Our solutions eliminate repetitive tasks and allow teams to focus on high-value strategic activities.",
    detailsParagraph2:
      "By integrating automation with existing enterprise systems, organizations can increase productivity, reduce operational costs, and improve accuracy across business operations.",
    benefits: [
      "Reduced Operational Costs",
      "Faster Workflow Execution",
      "Higher Process Accuracy",
      "Improved Productivity",
      "Error Reduction",
      "Scalable Automation Systems",
      "Enhanced Operational Transparency"
    ],
    rangeOfServicesTitle: "Our Automation Capabilities",
    rangeOfServicesDescription:
      "Forum Invest designs automation solutions that enhance operational performance across departments. Our frameworks enable organizations to automate processes, increase speed, and maintain high operational quality.",
    faqs: [
      {
        question: "What is Intelligent Automation?",
        answer: "It is the use of AI and automation technologies to streamline business processes and reduce manual effort."
      },
      {
        question: "Which processes can be automated?",
        answer: "Administrative tasks, data processing, customer support workflows, financial processes, and operational reporting."
      },
      {
        question: "Will automation replace employees?",
        answer: "Automation supports employees by eliminating repetitive tasks and allowing them to focus on strategic and creative work."
      }
    ]
  },

  {
    id: 9,
    slug: "data-intelligence-and-analytics",
    title: "Data Intelligence & Analytics",
    description: "Transforming data into actionable insights through advanced analytics, predictive modelling, and machine learning.",
    icon: "hugeicons:ai-network",
    href: "/services/data-intelligence-and-analytics",
    image: service03,
    gallery: [service03, service04, service05],
    features: ["Predictive Analytics", "Machine Learning Models", "Data Visualization", "Business Intelligence"],
    detailsParagraph1:
      "Data Intelligence & Analytics services transform complex datasets into strategic insights. Our analytics frameworks enable organizations to understand trends, identify opportunities, and predict future outcomes.",
    detailsParagraph2:
      "Using machine learning and advanced analytics, we help organizations turn raw data into actionable intelligence that supports data-driven decision making.",
    benefits: [
      "Predictive Insights",
      "Improved Business Decisions",
      "Data-Driven Strategy",
      "Operational Transparency",
      "Performance Optimization",
      "Risk Reduction",
      "Enhanced Forecasting"
    ],
    rangeOfServicesTitle: "Our Data Analytics Services",
    rangeOfServicesDescription:
      "Forum Invest provides advanced analytics frameworks designed to help organizations unlock the full value of their data. Our solutions combine AI, data engineering, and business intelligence.",
    faqs: [
      {
        question: "What is Data Intelligence?",
        answer: "It is the process of analyzing large volumes of data to extract meaningful insights that guide strategic decision-making."
      },
      {
        question: "How can analytics improve business performance?",
        answer: "Analytics helps identify patterns, optimize processes, and predict future trends."
      },
      {
        question: "Do we need large datasets to start?",
        answer: "While large datasets provide deeper insights, meaningful analytics can still be performed on smaller structured datasets."
      }
    ]
  },

  {
    id: 10,
    slug: "ai-strategy-and-consulting",
    title: "AI Strategy & Consulting",
    description: "Helping organizations design long-term AI roadmaps aligned with business goals, regulatory frameworks, and operational realities.",
    icon: "hugeicons:ai-chat-02",
    href: "/services/ai-strategy-and-consulting",
    image: service04,
    gallery: [service04, service05, service06],
    features: ["Strategic Planning", "AI Roadmaps", "Regulatory Alignment", "Technology Assessment"],
    detailsParagraph1:
      "AI Strategy & Consulting services help organizations design structured transformation strategies. Our consultants assess operational needs, technological readiness, and market opportunities.",
    detailsParagraph2:
      "We create long-term AI roadmaps that align with regulatory frameworks, operational requirements, and business objectives.",
    benefits: [
      "Strategic Clarity",
      "AI Adoption Roadmaps",
      "Risk Reduction",
      "Technology Alignment",
      "Competitive Advantage",
      "Operational Transformation",
      "Regulatory Compliance"
    ],
    rangeOfServicesTitle: "Our AI Strategy Services",
    rangeOfServicesDescription:
      "Forum Invest supports organizations in designing AI strategies that deliver measurable business value while maintaining regulatory compliance.",
    faqs: [
      {
        question: "Why is AI strategy important?",
        answer: "A structured AI strategy ensures investments align with long-term business objectives."
      },
      {
        question: "Do we need technical expertise internally?",
        answer: "No. Our consulting services provide guidance for organizations at all levels of AI maturity."
      },
      {
        question: "Can AI strategy help reduce risks?",
        answer: "Yes. Strategic planning helps organizations manage technological, operational, and regulatory risks."
      }
    ]
  },

  {
    id: 11,
    slug: "custom-ai-solutions",
    title: "Custom AI Solutions",
    description: "Designing industry-specific AI applications tailored to the needs of each organization.",
    icon: "hugeicons:artificial-intelligence-01",
    href: "/services/custom-ai-solutions",
    image: service05,
    gallery: [service05, service06, service01],
    features: ["Industry Solutions", "AI Model Development", "Custom Applications", "Enterprise Integration"],
    detailsParagraph1:
      "Custom AI Solutions focus on developing intelligent systems tailored to specific business environments. We design solutions that address unique operational challenges.",
    detailsParagraph2:
      "Our team develops machine learning models, AI applications, and enterprise solutions designed to deliver measurable improvements in productivity and decision-making.",
    benefits: [
      "Industry-Specific Solutions",
      "Improved Productivity",
      "Customized AI Models",
      "Better Decision Making",
      "Operational Efficiency",
      "Technology Differentiation",
      "Strategic Innovation"
    ],
    rangeOfServicesTitle: "Our Custom AI Services",
    rangeOfServicesDescription:
      "Forum Invest develops tailored AI systems designed to meet specific organizational needs across industries.",
    faqs: [
      {
        question: "What are Custom AI Solutions?",
        answer: "They are AI systems designed specifically to address the unique operational requirements of an organization."
      },
      {
        question: "Which industries benefit most from custom AI?",
        answer: "Industries such as finance, logistics, automotive, healthcare, and public services benefit greatly."
      },
      {
        question: "Are custom solutions scalable?",
        answer: "Yes. Our AI systems are designed with scalability and future growth in mind."
      }
    ]
  },

  {
    id: 12,
    slug: "cloud-ai-infrastructure",
    title: "Cloud & AI Infrastructure",
    description: "Building scalable and secure cloud infrastructures optimized for AI workloads, data processing, and enterprise applications.",
    icon: "hugeicons:cloud",
    href: "/services/cloud-ai-infrastructure",
    image: service06,
    gallery: [service06, service01, service02],
    features: ["Cloud Architecture", "AI Infrastructure", "Scalable Systems", "Secure Platforms"],
    detailsParagraph1:
      "Cloud & AI Infrastructure services provide the technological foundation required for modern AI systems. Our cloud environments are optimized for high-performance data processing and machine learning workloads.",
    detailsParagraph2:
      "We design secure and scalable infrastructures that support enterprise applications, AI models, and advanced analytics platforms.",
    benefits: [
      "High-Performance Infrastructure",
      "Secure Cloud Environments",
      "Scalable AI Platforms",
      "Reduced Infrastructure Costs",
      "Flexible Computing Resources",
      "Optimized Data Processing",
      "Reliable System Performance"
    ],
    rangeOfServicesTitle: "Our Cloud Infrastructure Services",
    rangeOfServicesDescription:
      "Forum Invest develops cloud environments designed to support AI innovation and enterprise scalability. Our solutions combine security, performance, and operational reliability.",
    faqs: [
      {
        question: "Why is cloud infrastructure important for AI?",
        answer: "AI systems require powerful computing resources and scalable data environments, which cloud infrastructure provides."
      },
      {
        question: "Is cloud infrastructure secure?",
        answer: "Yes. Our cloud architectures are designed with strong cybersecurity frameworks and compliance standards."
      },
      {
        question: "Can cloud infrastructure scale with business growth?",
        answer: "Absolutely. Cloud systems are designed to scale dynamically as organizational needs grow."
      }
    ]
  }
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
  moreServicesTitle: "More services",
  tagsTitle: "Tags",
  tags: ["Branding", "Business", "Consulting", "Design", "Innovate", "Lead", "Marketing"]
};
