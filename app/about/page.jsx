"use client";

import React from "react";
import Contact from "../components/Contact";
import Socials from "../components/Socials";
import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedText } from "../components/AnimatedText";
import Timeline from "../components/Timeline";

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
      <div className="w-full flex flex-col">
        <h2 className="text-4xl font-extrabold">About Me.</h2>
      </div>

      <motion.div
        className="pt-6 g:px-10 px-0 "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <blockquote className="text-sm leading-loose md:text-sm text-gray-800  ">
          Hello there. I am a software developer from Nigeria, Working on
          software development and web design with enthusiasm for a diverse
          range of topics. I find great joy in contributing to open-source,
          crafting engaging content, creating art, and building interactive,
          elegant websites.
          <br /> <br /> In my free time, I explore advancements in artificial
          intelligence and love diving into coding projects, or getting lost in
          a good book.
          <br /> <br /> I am a firm believer in the power of technology to
          transform lives and communities, and I am committed to using my skills
          to make a positive impact in the world.
        </blockquote>
      </motion.div>

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
        <AnimatedText className="text-sm leading-loose md:text-sm text-gray-800 ">
          My journey as a Software developer began with a simple curiosity about
          how websites work, which quickly turned into a full-blown
          obsession.Eversince, I have spent countless hours learning and
          experimenting with different technologies. I am constantly seeking new
          challenges to push my skills to the next level.
        </AnimatedText>
      </motion.div>

      <Socials />
      <Contact id="contact" />
    </main>
  );
}
