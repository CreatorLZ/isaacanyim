import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
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
