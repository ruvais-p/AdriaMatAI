import { HeaderItem } from "@/type/menu";

export const headerData: HeaderItem[] = [
    { label: "Home", href: "/" },
    {
        label: "Pages",
        href: "#",
        submenu: [
            { label: "About Us", href: "/about" },
            { label: "Team", href: "/team" },
            { label: "Faq", href: "/faq" },
            { label: "Contact", href: "/contact" }
        ]
    },
    {
        label: "Services",
        href: "#",
        submenu: [
            { label: "Services List", href: "/services" },
            { label: "Services Details", href: "/services/business-strategy-development" }
        ]
    },
    {
        label: "Protfolio",
        href: "/protfolio",
        submenu: [
            { label: "Protfolio", href: "/protfolio" },
            { label: "Protfolio Details", href: "/protfolio/event-management-platform" }
        ]
    },
    {
        label: "Blog",
        href: "/blog",
        submenu: [
            { label: "Blog", href: "/blog" },
            { label: "Blog Details", href: "/blog/harnessing-digital-transform" }
        ]
    },
    { label: "Contact", href: "contact" },
]