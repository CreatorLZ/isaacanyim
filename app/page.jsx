import Hero from "./components/Hero";
import Socials from "./components/Socials";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      {/* <Testimonials /> */}
      <Contact />
      <Socials />
    </div>
  );
}
