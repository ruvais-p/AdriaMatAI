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
    title: "Training & Development",
    icon: "mdi:school",
    description:
      "Equip your teams with skills and knowledge tailored to your corporate goals.",
  },
  {
    title: "Business Strategy",
    icon: "mdi:briefcase-outline",
    description:
      "Develop actionable strategies to drive growth and stay ahead in your industry.",
  },
  {
    title: "Sustainability & ESG",
    icon: "mdi:leaf",
    description:
      "Implement strategies for long-term value, sustainability, and corporate responsibility.",
  },
  {
    title: "AI Solutions",
    icon: "mdi:brain",
    description:
      "Develop actionable strategies to drive growth and stay ahead in your industry.",
  },
  {
    title: "Customer Engagement",
    icon: "mdi:account-group-outline",
    description:
      "Enhance customer journeys to boost satisfaction, loyalty, and long-term retention.",
  },
  {
    title: "Training & Development",
    icon: "mdi:school",
    description:
      "Equip your teams with skills and knowledge tailored to your corporate goals.",
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
      "Working with Bexon has been a game-changer for our business. Their team’s professionalism, attention to detail, and innovative solutions have helped us streamline operations and achieve our goals faster than we imagined. We truly feel like a valued partner.",
    name: "Ralph Edwards",
    position: "Co. Founder",
    image: "/images/testimonials/user.jpg",
  },
  {
    id: 2,
    text:
      "The results we’ve seen after partnering with Bexon are beyond our expectations. They not only understood our vision but also brought new ideas to the table that have taken our business to the next level.",
    name: "Guy Hawkins",
    position: "Co. Founder",
    image: "/images/testimonials/user2.jpg",
  },
  {
    id: 3,
    text:
      "We’ve been working with Bexon for years, and they continue to deliver outstanding results. Their team is proactive, responsive, and always goes the extra mile.",
    name: "Devon Lane",
    position: "Co. Founder",
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

export type Service = {
    id: number;
    slug: string;
    title: string;
    description: string;
    icon: string;
    href?: string;
    image: any; // StaticImageData
    gallery?: any[];
    features?: string[];
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