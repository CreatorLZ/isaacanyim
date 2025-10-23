"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { AnimatedText } from "./AnimatedText";
import Girlfriend from "/public/Girlfriend.jpg";
import web1 from "/public/web1.jpg";
import web2 from "/public/web2.jpg";
import code from "/public/code.png";
import Isaac from "/public/isaac.jpeg";
import product1 from "/public/product1.jpg";
import product2 from "/public/product2.jpg";
import automation3 from "/public/automation3.jpg";
import automation4 from "/public/automation4.jpg";

import seo1 from "/public/seo1.jpg";
import seo2 from "/public/seo2.jpg";
import { Montserrat } from "next/font/google";

import {
  ArrowRight,
  Briefcase,
  Compass,
  Lightbulb,
  Puzzle,
  Search,
  Shield,
  Sparkles,
  Target,
  Users,
  Users2,
} from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const columnVariants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

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
        delay: 0.8,
        ease: "easeOut",
      },
      viewport: {
        once: true,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  const frameworks = [
    { name: "Progress Driven", icon: <Target className="w-4 h-4 mr-2" /> },
    { name: "Customer Centric", icon: <Users className="w-4 h-4 mr-2" /> },
    { name: "Business Focused", icon: <Briefcase className="w-4 h-4 mr-2" /> },
    { name: "Problem Solver", icon: <Puzzle className="w-4 h-4 mr-2" /> },
    { name: "Detail Oriented", icon: <Search className="w-4 h-4 mr-2" /> },
    { name: "Team Player", icon: <Users2 className="w-4 h-4 mr-2" /> },
    { name: "Fast Learner", icon: <Lightbulb className="w-4 h-4 mr-2" /> },
    { name: "Innovative", icon: <Sparkles className="w-4 h-4 mr-2" /> },
    { name: "Adaptable", icon: <Compass className="w-4 h-4 mr-2" /> },
    { name: "Quality Focused", icon: <Shield className="w-4 h-4 mr-2" /> },
  ];

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
        className=" flex flex-col items-center justify-center md:justify-center lg:justify-normal lg:pt-20 h-[65vh] lg:h-[100vh] md:gap-14 gap-4 "
      >
        <p className="hidden items-center gap-2 text-sm text-gray-600 mb-0">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          available for new projects
        </p>
        <motion.h1
          variants={itemVariants2}
          className={`text-gray-700 text-3xl lg:text-[65px] tracking-tight lg:tracking-normal pb-0 font-extrabold `}
        >
          HEY, I{"'"}M ISAAC.
          <br />
        </motion.h1>
        <motion.h1
          variants={itemVariants3}
          className={`text-gray-700 text-3xl lg:text-[65px] tracking-tight lg:tracking-tight pb-0 font-extrabold `}
        >
          A SOFTWARE ENGINEER.
        </motion.h1>
        {/* /* <br /> */}
        {/* <AnimatedText className="leading-loose text-sm md:text-xl pb-10">
          I create captivating, immersive & user-friendly digital journeys.
        </AnimatedText> */}
        <TypeAnimation
          sequence={[
            "I build functional, captivating & user-friendly stuff for the web.",
            1000, // Wait 1 second before repeating
          ]}
          wrapper="p" // Use a paragraph tag as the wrapper
          speed={70} // Typing speed (higher is faster)
          style={{
            // fontSize: "1rem",
            lineHeight: "2",
            paddingBottom: "2.5rem",
          }}
          className="leading-loose text-sm lg:text-base pb-10 text-gray-700"
          repeat={Infinity} // Loop the animation
        />
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
        >
          <Link href="/about" className="hidden lg:flex">
            <button className="font-bold group px-8 py-5 lg:px-16 border-2 border-gray-700 dark:border-white uppercase bg-white text-gray-700 transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] flex items-center">
              LEARN MORE
              <ArrowRight className="ml-2 w-3 h-3 -rotate-45 transition-transform group-hover:rotate-0" />
            </button>
          </Link>
          <Link
            href="/about"
            className="ml-4 bg-[#7856ff] hover:bg-[#6645e0] text-white rounded-full px-6 py-3 flex lg:hidden items-center text-sm uppercase font-bold tracking-wider transition-colors group"
          >
            LEARN MORE
            <ArrowRight className="ml-2 w-3 h-3 -rotate-45 transition-transform group-hover:rotate-0" />
          </Link>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}
