"use client";
import Contact from "../components/Contact";
import Socials from "../components/Socials";
import { motion } from "framer-motion";
import Image from "next/image";
import react from "/public/react.png";
import nextjs from "/public/nextjs.png";
import html from "/public/html.png";
import css from "/public/css.png";
import javascript from "/public/javascript.png";
import mongodb from "/public/mongodb.png";
import sql from "/public/sql.png";
import express from "/public/express.png";
import node2 from "/public/node.png";
import typescript from "/public/typescript.png";
import styledcomponents from "/public/styledcomponents.png";
import tailwind from "/public/tailwind.png";
// import { AnimatedText } from "../components/AnimatedText";
import Timeline from "../components/Timeline";
import InfiniteSlider from "../components/InfiniteSlider";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const words = ["Crafting,", "Shaping,", "Engineering", "—", "My", "Process."];

  const skills = [
    { name: "JavaScript", image: javascript },
    { name: "TypeScript", image: typescript },
    { name: "Node.js", image: node2 },
    { name: "Express", image: express },
    { name: "SQL", image: sql },
    { name: "MongoDB", image: mongodb },
    { name: "React.js", image: react },
    { name: "Next.js", image: nextjs },
    { name: "Tailwind", image: tailwind },
    { name: "Styled Components", image: styledcomponents },
    { name: "HTML", image: html },
    { name: "CSS", image: css },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5 },
    },
  };

  return (
    <main className="py-12 lg:px-24">
      <div className="w-full flex flex-col lg:px-10 px-0">
        <h2 className="text-4xl lg:text-6xl font-extrabold">About Me.</h2>
      </div>

      <motion.div
        className="pt-6 lg:px-10 px-0 "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-sm leading-loose md:text-sm text-gray-800  ">
          Hello Hello. I am isaac, a software developer from Nigeria. I work on
          full-stack software development for the web with enthusiasm for a
          diverse range of topics. I find great joy in contributing to
          open-source, diving headfirst into coding projects, shit posting into
          the void on x, and building interactive, elegant websites.
          <br /> <br /> In my free time, I explore advancements in artificial
          intelligence and machine learning, or get lost in a good book.
          <br /> <br /> I am a firm believer in the power of technology to
          transform lives and communities, and I am committed to using my skills
          to make a positive impact in the world.
        </p>
      </motion.div>

      {/* Skills Image Slider */}
      <div className="w-full md:px-8">
        <div className="w-full overflow-hidden">
          <InfiniteSlider
            duration={30}
            durationOnHover={60}
            gap={40}
            className="py-2"
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center h-24 min-w-[120px] shrink-0 bg-transparent rounded-md px-4 py-3  transition-all"
              >
                <div className="relative w-10 h-10 mb-2">
                  <Image
                    src={skill.image || "/placeholder.svg"}
                    alt={`${skill.name} logo`}
                    fill
                    style={{ objectFit: "contain" }}
                    quality={100}
                  />
                </div>
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>
      <div className="w-full flex flex-col pt-20 lg:px-10 px-0">
        <motion.div
          className="text-4xl font-black flex flex-wrap gap-2"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15, // small delay between each word
              },
            },
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <Timeline />

      <motion.div
        className="pt-20 lg:px-10 px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="w-full flex flex-col">
          <h2 className="text-4xl font-black">My journey.</h2>
        </div>
        <p className="text-sm leading-loose md:text-sm text-gray-800 ">
          My journey as a Software developer began with a simple curiosity about
          how websites work, which quickly turned into a full-blown
          obsession.Eversince, I have spent countless hours learning and
          experimenting with different technologies. I am constantly seeking new
          challenges to push my skills to the next level.
        </p>
      </motion.div>

      <Socials />
      <Contact id="contact" />
    </main>
  );
}
