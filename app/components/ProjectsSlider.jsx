import InfiniteSlider from "./InfiniteSlider";
import ProjectCard from "./Projectcard";
import adresstracker from "/public/adresstracker.png";
import moviebox from "/public/moviebox.png";
import taskwise from "/public/taskwise.png";
import expressline from "/public/expressline.png";
import ideafundrsc from "/public/ideafundr.png";
import wristy from "/public/wristy.png";
import silkywriters from "/public/silkywriters.png";

const projects = [
  {
    name: "Taskwise",
    link: "https://taskwise-three.vercel.app/",
    github: "https://github.com/CreatorLZ/taskwise",
    description:
      "Smart task manager that helps you keep track of your daily tasks. Taskwise is a simple and easy-to-use task manager that helps you keep track of your daily tasks. It is designed to be simple and easy to use, with a clean and intuitive interface that makes it easy to stay organized and focused. With Taskwise, you can create tasks, set due dates, and track your progress as you work through your to-do list. You can also set reminders and notifications to help you stay on track and meet your deadlines. Taskwise is designed to be flexible and customizable, so you can use it in a way that works best for you. Whether you need a simple to-do list or a more advanced task manager, Taskwise has you covered.",
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
    description:
      "ideafundr is a fully functional platform where inventors are able to showcase their inventions to potential investors with AR technology. Users can view products and invention in their physical space with AR (Argumented Reality) technology on their device.AR provides a more engaging and interactive way to present inventions. It allows investors to see the invention from all angles, understand its scale, and even interact with virtual prototypes. This immersive experience can lead to better understanding and increased investor interest. A user on sign-up is presented the choice to choose a path as either an inventor or investor.....",
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
    description:
      "Your trusted partner for academic writing, research, and Youtube scripts. We deliver precision, depth, and creativity to bring your ideas to life.",
    details: "Official website for Silkywriters, a writing agency.",
    skills: ["Typescript", "Tailwind CSS", "React", "Framer-motion"],
  },
  {
    name: "Wristy E-commerce",
    link: "https://vanilla-e-commerce.vercel.app/",
    github: "https://github.com/CreatorLZ/Vanilla-e-commerce",
    description:
      "Slick and grand E-commerce starter template for a watch website. this template features a dark theme that catches the eye and makes for a grand display of the products. NOTE: currently not available for mobile screens.",
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
    description:
      "Watch trailers for any movie you can think of. Moviebox also includes suggestions for what to watch, trending movies, and what movies are currently available in cinemas!. ",
    image: moviebox,
    details: "Watch trailers, read reviews of any movie in the world!",
    skills: ["React", "TMDB API", "Styled-Components", "JavaScript"],
  },
  {
    name: "IP Address Tracker",
    link: "https://ip-address-tracker-gamma-five.vercel.app/",
    github: "https://github.com/CreatorLZ/ip_address_tracker",
    description:
      "This is a webapp that allows users to get live information about any IP address entered into the search input. The app features a live map that shows precise location info as taken from entered ip addresses.",
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
