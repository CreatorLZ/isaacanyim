import InfiniteSlider from "./InfiniteSlider";
import ProjectCard from "./Projectcard";
import bagxtra from "/public/bagxtra.png";
import adresstracker from "/public/adresstracker.webp";
import moviebox from "/public/moviebox.webp";
import taskwise from "/public/taskwise.webp";
import expressline from "/public/expressline.webp";
import ideafundrsc from "/public/ideafundr.webp";
import wristy from "/public/wristy.webp";
import silkywriters from "/public/silkywriters.webp";

const projects = [
  {
    name: "bagXtra",
    image: bagxtra,
    link: "https://app.usebagxtra.com",
    description: "Shop from any store abroad and have it brought to you by a verified traveler on your route — cheaper than courier shipping.",
    details:
      "Explore global shopping without the hassle of shipping. With BagXtra, travelers help you bring it home. Shop from anywhere, receive from everywhere.",
    skills: [
      "TypeScript",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node.js",
    ],
  },
  {
    name: "Taskwise",
    link: "https://taskwise-three.vercel.app/",
    github: "https://github.com/CreatorLZ/taskwise",
    description: "A smart task manager that lets you create and organize tasks using plain natural language. Clean interface, AI-powered sorting, and deadline reminders.",
    image: taskwise,
    details:
      "Smart task manager that helps you keep track of your daily tasks.",
    skills: [
      "TypeScript",
      "Node.js",
      "React",
      "MongoDB",
      "Express",
      "Tailwind",
      "Zustand",
      "React-Query",
      "Vite",
      "NLP",
      "huggingface-inference",
    ],
  },
  {
    name: "Ideafundr",
    image: ideafundrsc,
    link: "https://ideafundr-seven.vercel.app/",
    github: "https://github.com/CreatorLZ/ideafundr",
    description: "A platform where inventors showcase their work to potential investors using AR technology — letting them view and interact with prototypes in their physical space.",
    details: "Showcase your invention to investors with immersive tech.",
    skills: [
      "React",
      "Firebase",
      "Context API",
      "Styled-Components",
      "AR",
      "Swift-XR",
      "JavaScript",
    ],
  },
  {
    name: "Silkywriters",
    image: silkywriters,
    link: "https://silkywriters.vercel.app/",
    // github: "https://github.com/CreatorLZ/expressline_logistics",
    description: "Official website for a writing agency specialising in academic papers, research, and YouTube scripts.",
    details: "Official website for Silkywriters, a writing agency.",
    skills: ["Typescript", "Tailwind CSS", "React", "Framer-motion"],
  },
  {
    name: "Wristy E-commerce",
    link: "https://vanilla-e-commerce.vercel.app/",
    github: "https://github.com/CreatorLZ/Vanilla-e-commerce",
    description: "Dark-themed e-commerce starter template built for watch brands. Clean UI, ready to extend.",
    image: wristy,
    details: "Watch Ecommerce starter template for developers.",
    skills: ["HTML", "CSS", "Javascript"],
  },
  {
    name: "ExpressLine Logistics",
    image: expressline,
    link: "https://expresslinecouriers.com/",
    github: "https://github.com/CreatorLZ/expressline_logistics",
    description: "A logistics company",
    details: "An international Logistics company",
    skills: ["HTML", "Bootstrap", "CSS", "JavaScript"],
  },
  {
    name: "Moviebox",
    link: "https://moviebox-red.vercel.app/",
    github: "https://github.com/CreatorLZ/Moviebox",
    description: "Browse trailers, discover trending films, and check what's showing in cinemas — all powered by the TMDB API.",
    image: moviebox,
    details: "Watch trailers, read reviews of any movie in the world!",
    skills: ["React", "TMDB API", "Styled-Components", "JavaScript"],
  },
  {
    name: "IP Address Tracker",
    link: "https://ip-address-tracker-gamma-five.vercel.app/",
    github: "https://github.com/CreatorLZ/ip_address_tracker",
    description: "Enter any IP address and instantly get live location data on an interactive map.",
    image: adresstracker,
    details: "Get live info of any IP Address.",
    skills: ["React", "Styled-Components", "Geo-location", "JavaScript"],
  },
];

const ProjectsSlider = () => {
  return (
    <div>
      <InfiniteSlider
        duration={60}
        durationOnHover={100}
        gap={24}
        className="py-6"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            image={project.image}
            // link={project.link}
          />
        ))}
      </InfiniteSlider>
    </div>
  );
};

export default ProjectsSlider;
