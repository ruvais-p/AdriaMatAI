import React from "react";
import CommonHero from "@/components/SharedComponents/HeroSub";

import Blog from "@/components/Home/Blog";
import Commitment from "@/components/Home/Commitment";
import Process from "@/components/Home/Process";
import Projects from "@/components/Home/Projects";
import Solution from "@/components/Home/Solution";
import Testimonials from "@/components/Home/Testimonials";
import AdriaHero from "./components/adriaHero";

const AdriamatPage = () => {
    return (
        <>
            <main>
                <AdriaHero />
                <Solution />
                <Commitment />
                <Process />
                <Projects />
                <Testimonials />
                <Blog />
            </main>
        </>
    );
};

export default AdriamatPage;

