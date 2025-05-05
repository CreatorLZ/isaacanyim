"use client";
import Image from "next/image";
import forward from "/public/forward.gif";
import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedText } from "./AnimatedText";

import { Plus_Jakarta_Sans } from "next/font/google";
import { ArrowRight } from "lucide-react";

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

  // Add this new variant near your other animation variants
  const buttonVariants = {
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
        delay: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
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
        className=" flex flex-col items-center justify-center md:justify-center lg:justify-normal lg:pt-20 h-[85vh] lg:h-[100vh] md:gap-14 gap-3 "
      >
        <motion.h1
          variants={itemVariants2}
          className={`text-gray-700 text-3xl lg:text-[65px] tracking-normal pb-0 font-extrabold `}
        >
          HEY, I{"'"}M ISAAC.
          <br />
        </motion.h1>
        <motion.h1
          variants={itemVariants3}
          className={`text-gray-700 text-3xl lg:text-[65px] tracking-normal pb-0 font-extrabold `}
        >
          A SOFTWARE DEVELOPER.
        </motion.h1>
        {/* /* <br /> */}
        <AnimatedText className="leading-loose text-sm md:text-xl pb-10">
          I create captivating, immersive & user-friendly digital journeys.
        </AnimatedText>
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
        >
          <Link href="#contact" className="hidden lg:flex">
            <button className="font-bold group px-8 py-5 lg:px-16 border-2 border-gray-700 dark:border-white uppercase bg-white text-gray-700 transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] flex items-center">
              HIRE ME
              <ArrowRight className="ml-2 w-3 h-3 -rotate-45 transition-transform group-hover:rotate-0" />
            </button>
          </Link>
          <Link
            href="/#contact"
            className="ml-4 bg-[#7856ff] hover:bg-[#6645e0] text-white rounded-full px-6 py-3 flex lg:hidden items-center text-sm uppercase font-bold tracking-wider transition-colors group"
          >
            HIRE ME
            <ArrowRight className="ml-2 w-3 h-3 -rotate-45 transition-transform group-hover:rotate-0" />
          </Link>
        </motion.div>
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

      <div className="w-full flex items-center justify-center lg:pt-10 pt-7 ">
        <Link href="/about" className="hidden lg:flex">
          <button className="font-bold group px-8 py-5 lg:px-16 border-2 border-gray-700 dark:border-white uppercase bg-white text-gray-700 transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] flex items-center">
            SEE MORE
            <ArrowRight className="ml-2 w-3 h-3 -rotate-45 transition-transform group-hover:rotate-0" />
          </button>
        </Link>
        <Link
          href="/about"
          className=" lg:hidden flex  justify-center ml-4 bg-[#7856ff] hover:bg-[#6645e0] text-white rounded-full px-6 py-3  items-center text-sm uppercase font-bold tracking-wider transition-colors group"
        >
          See more
          <ArrowRight className="ml-2 w-3 h-3 -rotate-45 transition-transform group-hover:rotate-0" />
        </Link>
      </div>
    </motion.main>
  );
}
