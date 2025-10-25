import Hero from "./components/Hero";
// import Socials from "./components/Socials";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import Testimonials from "./components/Testimonials";
import ProjectsSlider from "./components/ProjectsSlider";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProjectsSlider />
      {/* <Skills /> */}
      <Projects />
      {/* <Testimonials /> */}
      <Contact />
    </div>
  );
}
