import React from "react";
import CommonHero from "@/components/SharedComponents/HeroSub";

import Blog from "@/components/Home/Blog";
import Commitment from "@/components/Home/Commitment";
import Process from "@/components/Home/Process";
import Projects from "@/components/Home/Projects";
import Testimonials from "@/components/Home/Testimonials";
import AdriaHero from "./components/adriaHero";
import AdriaSolution from "./components/adriaSolution";
import AdriaTeam from "./components/adraiTeam";

const AdriamatPage = () => {
    return (
        <>
            <main>
                <AdriaHero />
                <AdriaSolution />
                <Commitment />
                <Process />
                <Projects />
                <Testimonials />
                <AdriaTeam />
                <Blog />
            </main>
        </>
    );
};

export default AdriamatPage;

