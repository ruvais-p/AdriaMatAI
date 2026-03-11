import Blog from "@/components/Home/Blog";
import Commitment from "@/components/Home/Commitment";
import Companies from "@/components/Home/Companies";
import Hero from "@/components/Home/Hero";
import Process from "@/components/Home/Process";
import Projects from "@/components/Home/Projects";
import Solution from "@/components/Home/Solution";
import Testimonials from "@/components/Home/Testimonials";
import AIServices from "@/components/Home/AIServices";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Solution />
        <Testimonials />
        <Companies />
        <Commitment />
        <Process />
        <AIServices />
        <Projects />
        <Blog />
      </main>
    </>
  )
}
