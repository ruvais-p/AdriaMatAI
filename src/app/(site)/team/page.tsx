"use client";
import React from "react";
import HeroSub from "@/components/SharedComponents/HeroSub";
import Team from "@/components/Home/Team";

const Page = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/team", text: "Team" },
    ];

    return (
        <>
            <HeroSub title="Team" description="" breadcrumbLinks={breadcrumbLinks} />
            <Team />
        </>
    );
};

export default Page;
