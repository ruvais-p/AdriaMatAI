import { HeaderItem } from "@/type/menu";

export const headerData: HeaderItem[] = [

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

    { label: "Contact", href: "contact" },
]