"use client";

import React from "react";
import Contact from "../components/Contact";
import Socials from "../components/Socials";
import { motion } from "framer-motion";
import Link from "next/link";

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
      transition: { duration: 0.5 },
    },
  };

  return (
    <main>
      <div className="w-full flex flex-col">
        <h2 className="text-4xl font-black">About Me.</h2>
      </div>
      <div className="w-full min-h-screen flex flex-col bg-transparent gap-8">
        {/* first section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex flex-col md:flex-row gap-8"
        >
          <motion.div
            variants={itemVariants}
            className="relative bg-cover rounded-xl bg-center h-52 w-full flex justify-start items-end md:items-center p-5 md:h-96 md:w-3/5"
            style={{ backgroundImage: "url('/Mega2.webp')" }}
          >
            <div className="absolute inset-0 bg-black opacity-35 rounded-xl"></div>
            <h3 className="absolute text-left bottom-4 left-4 text-white text-2xl font-bold md:w-2/3 md:text-3xl">
              I focus on working closely with clients, ensuring clear and open
              communication
            </h3>
          </motion.div>
          <div className="flex flex-col md:w-2/5 md:h-96 gap-4">
            <motion.div
              variants={itemVariants}
              className="relative bg-cover rounded-xl bg-center h-52 w-full flex justify-start items-end p-5"
              style={{ backgroundImage: "url('/continent.png')" }}
            >
              <div className="absolute inset-0 bg-black opacity-65 rounded-xl"></div>
              <div className="flex flex-col z-10 items-center text-left justify-center h-full gap-4">
                <h3 className=" text-white text-2xl font-bold md:text-3xl">
                  I am flexible for communication across timezones
                </h3>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative bg-cover rounded-xl bg-center h-52 w-full flex justify-start items-end p-5"
              style={{ backgroundImage: "url('/techstack.webp')" }}
            >
              <div className="absolute inset-0 bg-black opacity-65 rounded-xl"></div>
              <div className="flex flex-col text-left gap-1 md:gap-3">
                <p className="text-gray-400 absolute bottom-20 left-4 text-lg font-semibold">
                  I stay on top of
                </p>
                <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold md:text-3xl">
                  Best and modern web development practices
                </h3>
              </div>
            </motion.div>
          </div>
        </motion.div>
        {/* first section end */}

        {/* second section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
          className="flex flex-col md:flex-row gap-8"
        >
          <div className="flex flex-col md:w-2/5 md:h-96 gap-4">
            <motion.div
              variants={itemVariants}
              className="relative bg-cover rounded-xl bg-center h-52 w-full flex justify-start items-end p-5"
              style={{ backgroundImage: "url('/legos.webp')" }}
            >
              <div className="absolute inset-0 bg-black opacity-65 rounded-xl"></div>
              <div className="flex flex-col z-10 items-center text-left justify-center h-full gap-4">
                <h3 className=" text-white text-2xl font-bold md:text-3xl">
                  Tech Ethusiast With A Passion To Build
                </h3>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative bg-cover rounded-xl bg-center h-52 w-full flex justify-start items-end p-5 gap-2"
              style={{ backgroundImage: "url('/calm2.jpg')" }}
            >
              <div className="absolute inset-0 bg-black opacity-70 rounded-xl"></div>
              <div className="flex flex-col z-10 items-center text-center justify-center h-full gap-4">
                <h3 className=" text-white text-2xl font-bold md:text-3xl">
                  Want us to build a project together?
                </h3>
                <Link
                  href="#contact"
                  style={{ border: "2px solid lightgray" }}
                  className="w-2/3 flex items-center rounded-md justify-center py-3 cursor-pointer md:w-2/3 text-gray-300"
                >
                  <div>Contact me</div>
                </Link>
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={itemVariants}
            className="relative bg-cover rounded-xl bg-center h-52 w-full flex justify-start items-end md:items-center p-5 md:h-96 md:w-3/5"
            style={{ backgroundImage: "url('/cubes.webp')" }}
          >
            <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
            <div className="flex flex-col text-left gap-1 md:gap-3">
              <p className="text-gray-300 absolute bottom-20 left-4 text-lg font-semibold">
                Elite Innovator{"'"}s Manifesto <br />
              </p>
              <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold md:text-3xl">
                I{"'"}m always building new stuff to improve my skill and be
                among the top 1{"%"}.
              </h3>
            </div>
          </motion.div>
        </motion.div>
        {/* second section end */}
      </div>
      <div className="pt-10">
        <p className="font-bold">
          Websites that shine go beyond just looking good. They also work
          flawlessly and are a breeze to navigate. That{"'"}s where I come in.
          Through my experience as a freelancer and from personal projects, I
          {"'"}ve honed my ability to tackle complex technical challenges while
          designing websites that are both beautiful and user-friendly. I stay
          on top of the latest web development trends to ensure every aspect of
          your website is optimized for a smooth user experience.
        </p>
      </div>
      <Socials />
      <Contact id="contact" />
    </main>
  );
}
