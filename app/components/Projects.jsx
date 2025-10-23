"use client";
import React, { useEffect, useState, Fragment } from "react";
import adresstracker from "/public/adresstracker.png";
import moviebox from "/public/moviebox2.gif";
import taskwise from "/public/Taskwise.gif";
import silkywriters from "/public/silkywriters.gif";
import expressline from "/public/expressline.gif";
import ideafundrsc from "/public/ideafundrsc.gif";
import wristy from "/public/wristy.gif";
import forward from "/public/forward.gif";
import back from "/public/back.png";
import earth from "/public/earth.png";
import github from "/public/github.png";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "./NavLink";

// Add this helper function at the top of your file after the imports
const isGifImage = (src) => {
  if (typeof src === "string") {
    return src.endsWith(".gif");
  }
  // For webpack imported images, check the src property
  return src?.src?.endsWith?.(".gif") || false;
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isShowing, setIsShowing] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (selectedProject !== null) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
    return () => {
      body.classList.remove("no-scroll");
    };
  }, [selectedProject]);

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
      name: "ExpressLine Logistics",
      image: expressline,
      // link: "https://expressline-logistics.vercel.app/",
      link: "https://expresslinecouriers.com/",
      github: "https://github.com/CreatorLZ/expressline_logistics",
      description: "A logistics company",
      details: "An international Logistics company",
      skills: ["HTML", "Bootstrap", "CSS", "JavaScript"],
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

    // {
    //   name: "IP Address Tracker",
    //   link: "https://ip-address-tracker-gamma-five.vercel.app/",
    //   github: "https://github.com/CreatorLZ/ip_address_tracker",
    //   description:
    //     "This is a webapp that allows users to get live information about any IP address entered into the search input. The app features a live map that shows precise location info as taken from entered ip addresses.",
    //   image: adresstracker,
    //   details: "Get live info of any IP Address.",
    //   skills: ["React", "Styled-Components", "Geo-location", "JavaScript"],
    // },
  ];

  const handleClick = (index) => {
    setSelectedProject(index);
    setIsShowing(true); // Set isShowing to true to show the project detail
    setIsMenuOpen(!isMenuOpen);
  };

  const closeDetails = () => {
    setSelectedProject(null);
    setIsShowing(false); // Set isShowing to false to hide the project detail
  };

  // Animation for sliding in from the right
  const slideInRightAnimate = {
    hidden: { x: "100%" },
    visible: {
      x: 0,

      transition: { duration: 0.7, ease: "easeInOut" },
    },
    exit: {
      x: "100%",

      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const projectAnimate = {
    offscreen: { opacity: 0, y: 90 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9 },
    },
  };

  return (
    <main className="pt-52 " id="projects">
      {/* Button and description */}
      {/* <button className="px-2 py-2 mb-10 border-2 border-gray-700 dark:border-white uppercase bg-white text-gray-700 transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
        PROJECTS
      </button> */}
      <p className="text-center font-bold text-xl md:text-4xl pb-12">
        Some Featured <span className="text-primary ">Projects.</span> Click on
        any project to preview.
      </p>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-20 ">
        {projects.map((project, index) => (
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: "true", amount: 0.4 }}
            variants={projectAnimate}
            transition={{ staggerChildren: 0.1 }}
            key={index}
            className="relative group cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <Image
              src={project.image}
              alt={`${project.name} screenshot`}
              unoptimized={isGifImage(project.image)}
              quality={100}
              style={{ cursor: "pointer" }}
              placeholder="blur"
              blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMzoyuBwAD5gGgL5NkuQAAAABJRU5ErkJggg=="
              className="h-72 md:h-80 max-w-auto rounded-lg"
            />
            <motion.div className="absolute inset-0 flex md:hidden md:group-hover:flex items-end py-5 md:py-10 justify-start px-3 md:px-8 bg-black bg-opacity-50 md:bg-black md:bg-opacity-55 rounded-lg transition duration-700">
              <div className="flex flex-col text-left gap-2">
                <motion.p className="text-white text-2xl font-extrabold">
                  {project.name}
                </motion.p>
                <motion.p className="text-gray-100 text-sm leading-normal tracking-wide">
                  {project.details}
                </motion.p>
                <div className="flex flex-wrap gap-3 mt-3">
                  {project.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="w-fit inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-sm font-medium text-black ring-1 ring-inset ring-indigo-700/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Project details sliding in from the right */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            key={selectedProject}
            className="fixed top-0 right-0 w-full h-full md:w-1/2 z-50 bg-white px-0 py-10 overflow-scroll overflow-x-hidden pb-24"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideInRightAnimate}
          >
            <div
              className="flex items-center justify-between w-full px-1 pb-2 pt-6"
              onClick={closeDetails}
            >
              <Image
                src={back}
                alt="Back"
                quality={100}
                height={30}
                width={30}
                placeholder="blur"
                className="cursor-pointer"
              />
              <Link href="#projects">
                <div
                  onClick={closeDetails}
                  className="font-bold cursor-pointer"
                >
                  Back to projects
                </div>
              </Link>
            </div>
            <hr className="pb-10" />
            <p className="text-lg font-extrabold text-black pb-1 px-5">
              {projects[selectedProject].name}
            </p>
            <p className="text-gray-700 text-sm md:text-base pb-4 px-5">
              {projects[selectedProject].description}
            </p>
            <Image
              src={projects[selectedProject].image}
              alt={`${projects[selectedProject].name} screenshot`}
              unoptimized={isGifImage(projects[selectedProject].image)}
              quality={100}
              placeholder="blur"
              blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMzoyuBwAD5gGgL5NkuQAAAABJRU5ErkJggg=="
              className="h-72 md:h-80 max-w-auto rounded-lg px-5"
            />
            <p className="text-base font-bold text-black pb-1 pt-7 px-5">
              About
            </p>
            <p className="text-sm md:text-base px-5">
              {projects[selectedProject].details}
            </p>
            <p className="text-base font-bold text-black pb-1 pt-7 px-5">
              Technologies
            </p>
            <div className="mt-5 px-5">
              <div className="flex flex-wrap gap-3 mt-3">
                {projects[selectedProject].skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="w-fit inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-sm font-medium text-black ring-1 ring-inset ring-indigo-700/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-fit gap-2 flex items-center justify-center h-fit px-5 pt-7">
              <Image
                src={earth}
                alt="earth icon"
                quality={100}
                height={20}
                width={20}
                placeholder="blur"
                className="cursor-pointer"
              />
              <p className="text-base font-bold text-black">Website</p>
            </div>
            <Link
              className="px-5 hover:underline"
              href={projects[selectedProject].link}
              target="_blank"
            >
              {projects[selectedProject].link}
            </Link>
            {projects[selectedProject].github && (
              <div className="w-fit gap-2 flex items-center justify-center h-fit px-5 pt-7">
                <Image
                  src={github}
                  alt="github icon"
                  quality={100}
                  height={20}
                  width={20}
                  placeholder="blur"
                  className="cursor-pointer"
                />
                <p className="text-base font-bold text-black">Github</p>
              </div>
            )}
            {projects[selectedProject].github && (
              <Link
                className="px-5 hover:underline"
                href={projects[selectedProject].github}
                target="_blank"
              >
                {projects[selectedProject].github}
              </Link>
            )}
            <div className="sticky md:sticky -bottom-24 left-0 w-full md:w-full md:left-1/2 h-fit gap-2 p-5 bg-black text-white text-sm sm:text-base flex items-center justify-center mt-7 z-50">
              <Link href={projects[selectedProject].link} target="_blank">
                <p className="text-white">Open project</p>
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Overlay */}
      {selectedProject !== null && (
        <div
          className="w-full h-full fixed top-0 left-0 bg-black z-10 bg-opacity-50 cursor-pointer"
          onClick={closeDetails}
        ></div>
      )}
      <Link href="https://github.com/CreatorLZ" target="_blank">
        <div className="flex gap-3 items-center pt-12 justify-center cursor-pointer">
          <p>See more</p>
          <Image src={forward} alt="forward" width={30} height={30} />
        </div>
      </Link>
    </main>
  );
}
