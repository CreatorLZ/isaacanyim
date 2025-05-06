"use client";

import { useState } from "react";
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
import { motion } from "framer-motion";
import Link from "next/link";
import InfiniteSlider from "./InfiniteSlider";
import { ArrowRight } from "lucide-react";

export default function Skills() {
  const skillAnimate = {
    offscreen: { opacity: 0, y: 100 },
    onscreen: (index) => ({
      opacity: [1],
      y: 0,
      transition: { delay: 0.05 * index, duration: 0.05 * index },
    }),
  };
  const [showAllSkills, setShowAllSkills] = useState(false);

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
  const frameworks = [
    { name: "Material UI" },
    { name: "Bootstrap" },
    { name: "Git" },
    { name: "GitHub" },
    { name: "Firebase" },
    { name: "Redux Toolkit" },
    { name: "Zustand" },
    { name: "React Query" },
    { name: "Context API" },
    { name: "Framer Motion" },
    { name: "Vite" },
    { name: "Swift XR" },
    { name: "More..." },
  ];
  const visibleSkills = showAllSkills ? skills : skills.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const skillCardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.main
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="pt-20 lg:pb-0 overflow-hidden"
      id="skills"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          className="px-2 py-2 mb-8 border-2 border-gray-700 dark:border-white uppercase bg-white text-gray-700 transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
        >
          SKILLS
        </motion.button>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 items-center pt-1 md:pt-6 lg:pt-10 p-2.5 md:px-24 w-full justify-between sm:justify-normal"
        >
          {visibleSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative w-full md:w-72 h-48 border border-gray-400 items-center justify-center flex flex-col text-center"
            >
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 text-black ml-[-12px] mt-[-13px] text-2xl font-light">
                +
              </div>
              <div className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 text-black mr-[-13px] mt-[-13px] text-2xl font-light">
                +
              </div>
              <div className="absolute bottom-0 left-0 flex items-center justify-center w-6 h-6 text-black ml-[-11px] mb-[-10px] text-2xl font-light">
                +
              </div>
              <div className="absolute bottom-0 right-0 flex items-center justify-center w-6 h-6 text-black mr-[-11px] mb-[-10px] text-2xl font-light">
                +
              </div>
              <h3 className="font-bold text-3xl">{skill.name}</h3>
              <Image
                src={skill.image || "/placeholder.svg"}
                alt={`${skill.name} logo`}
                width={40}
                height={40}
                quality={100}
                style={{ cursor: "pointer" }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mt-4"
        >
          <Link href="#skills" className="hidden lg:flex">
            <motion.button
              whileHover="hover"
              variants={buttonVariants}
              className="px-8 py-5 border-2 border-gray-700 dark:border-white uppercase bg-white text-gray-700 transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
              onClick={() => setShowAllSkills(!showAllSkills)}
            >
              {showAllSkills ? "Show Less" : "Show More"}
            </motion.button>
          </Link>
          <Link
            href="/#skills"
            className="ml-4 bg-[#7856ff] hover:bg-[#6645e0] text-white rounded-full px-6 py-3 flex lg:hidden items-center text-sm uppercase font-bold tracking-wider transition-colors group"
          >
            {showAllSkills ? "Show Less" : "Show More"}
            <ArrowRight className="ml-2 w-3 h-3 -rotate-45 transition-transform group-hover:rotate-0" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-20 flex flex-col"
        >
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className="px-2 py-2 w-fit border-2 border-gray-700 dark:border-white uppercase bg-white text-gray-700 transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
          >
            I can go on and on..
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 w-full md:px-24"
          >
            <div className="w-full overflow-hidden">
              <InfiniteSlider
                duration={20}
                durationOnHover={60}
                gap={24}
                className="py-6 "
              >
                {frameworks.map((framework, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center lg:h-16 h-10 lg:min-w-[180px]  shrink-0 bg-indigo-50 rounded-md lg:px-6 px-2 ring-1 ring-inset ring-indigo-700/10 hover:bg-indigo-100 transition-colors"
                  >
                    <div className="font-medium text-black">
                      {framework.name}
                    </div>
                  </div>
                ))}
              </InfiniteSlider>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
}
