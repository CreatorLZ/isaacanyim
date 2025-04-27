"use client";
import Image from "next/image";
import forward from "/public/forward.gif";
import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedText } from "./AnimatedText";

import { Plus_Jakarta_Sans } from "next/font/google";

// Configure Plus Jakarta Sans
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export default function Hero() {
  const detailsAnimate = {
    offscreen: { opacity: 0, y: -10 },
    onscreen: {
      opacity: [0, 1],
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  const descAnimate = {
    offscreen: { opacity: 0, y: 10 },
    onscreen: {
      opacity: [0, 1],
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 2,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        type: "spring",
        bounce: 0.2,
        stiffness: 40,
      },
    },
  };

  const containerVariants2 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 2,
      },
    },
  };

  const itemVariants2 = {
    hidden: { x: 80 },
    visible: {
      x: 0,
      transition: { duration: 1.5 },
    },
  };
  const itemVariants3 = {
    hidden: { x: -70 },
    visible: {
      x: 0,
      transition: { duration: 1.5 },
    },
  };

  return (
    <motion.main
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: "true", amount: 0.5 }}
      transition={{ staggerChildren: 0.1 }}
      className="text-center flex-col pb-0 "
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        variants={containerVariants2}
        // style={{ height: "75vh" }}
        className=" flex flex-col items-center justify-center md:justify-center lg:justify-normal lg:pt-12 h-[75vh] lg:h-[100vh] lg:gap-14 "
      >
        <motion.h1
          variants={itemVariants2}
          className={`text-gray-700 text-3xl md:text-[65px] tracking-normal pb-0 font-extrabold `}
        >
          HEY, I{"'"}M ISAAC.
          <br />
        </motion.h1>
        <motion.h1
          variants={itemVariants3}
          className={`text-gray-700 text-3xl md:text-[65px] tracking-normal pb-0 font-extrabold `}
        >
          A SOFTWARE ENGINEER.
        </motion.h1>
        {/* /* <br /> */}
        <AnimatedText className="leading-loose text-sm md:text-xl pb-10">
          I create captivating, immersive & user-friendly digital journeys.
        </AnimatedText>
        <Link href="#projects">
          <button className="px-8 py-5  border-2 border-gray-700 dark:border-white uppercase bg-white text-gray-700 transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
            EXPLORE PROJECTS
          </button>
        </Link>
      </motion.div>
      {/* first section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerVariants}
        className="flex flex-col md:flex-row gap-8"
      >
        <motion.div
          variants={itemVariants}
          className="relative bg-cover rounded-xl bg-center h-52 w-full flex justify-start items-end md:items-center p-5 md:h-[80vh] md:w-3/5"
          style={{ backgroundImage: "url('/Mega2.webp')" }}
        >
          <div className="absolute inset-0 bg-black opacity-15 rounded-xl"></div>
          <h3 className="absolute text-left bottom-4 left-4 text-white text-xl font-bold md:w-2/3 md:text-3xl">
            I focus on working closely with clients, ensuring clear and open
            communication
          </h3>
        </motion.div>
        <div className="flex flex-col md:w-2/5 md:h-[80vh] gap-4">
          <motion.div
            variants={itemVariants}
            className="relative bg-cover rounded-xl bg-center h-52 md:h-[50%] w-full flex justify-start items-end p-5"
            style={{ backgroundImage: "url('/continent.png')" }}
          >
            <div className="absolute inset-0 bg-black opacity-45 rounded-xl"></div>
            <div className="flex flex-col z-10 items-center text-left justify-center h-full gap-4">
              <h3 className=" text-white text-xl font-bold md:text-3xl">
                I am flexible for communication across timezones
              </h3>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative bg-cover rounded-xl bg-center h-52 md:h-[50%] w-full flex justify-start items-end p-5"
            style={{ backgroundImage: "url('/techstack.webp')" }}
          >
            <div className="absolute inset-0 bg-black opacity-55 rounded-xl"></div>
            <div className="flex flex-col text-left gap-1 md:gap-3">
              <p className="text-gray-300 absolute bottom-20 left-4 text-lg font-semibold">
                I stay on top of
              </p>
              <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold md:text-3xl">
                The Best Software Development practices
              </h3>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* first section end */}

      <Link href="/about">
        <div className="flex gap-3 items-center pt-12 justify-center cursor-pointer ">
          <p>See more about me </p>
          <Image src={forward} alt="forward" width={30} height={30} />
        </div>
      </Link>
    </motion.main>
  );
}
