"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
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
        className=" flex flex-col items-center justify-center md:justify-center lg:justify-normal lg:pt-20 h-[65vh] lg:h-[100vh] md:gap-14 gap-3 "
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
          viewport={{ once: true }}
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

      {/* About Two Column Layout on Desktop */}
      <motion.section
        className={`container mx-auto px-4 py-2 lg:py-2 ${montserrat.className}`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column */}
          <motion.div
            className="w-full lg:w-[45%] flex flex-col gap-6"
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* "Learn more about me" Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/about" className="block w-full backdrop-blur-md">
                <motion.div
                  className="border-2 border-gray-200 rounded-lg overflow-hidden relative group transition-all duration-300 hover:shadow-lg"
                  whileHover={{
                    boxShadow:
                      "0 10px 15px -3px rgba(120, 86, 255, 0.3), 0 4px 6px -2px rgba(120, 86, 255, 0.2)",
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#7856ff]/0 group-hover:to-[#7856ff]/20 transition-all duration-500 z-10"></div>

                  <div className="flex flex-col md:flex-row gap-6 p-6">
                    <div className="md:w-1/2 z-20 lg:text-left text-center flex flex-col justify-center gap-2">
                      <p className="text-lg font-bold lg:text-left text-center text-black ">
                        Learn more about me
                      </p>

                      <p className="text-base ">Hello Hello!</p>
                      <p className="text-base ">
                        I'm Isaac, an experienced software developer.
                      </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center relative">
                      {/* Picture frame styling */}
                      <div className="relative w-48 h-48 overflow-visible">
                        {/* Decorative frame */}
                        <div className="absolute inset-0 border-2 border-gray-800 group-hover:border-primary rounded-lg  bg-white shadow-lg"></div>

                        {/* Image container */}
                        <div className="absolute inset-0 overflow-hidden rotate-3 transform transition-all duration-300 group-hover:rotate-6 group-hover:scale-105">
                          <Image
                            src={Isaac || "/placeholder.svg"}
                            alt="Profile Image"
                            quality={100}
                            style={{ cursor: "pointer" }}
                            placeholder="blur"
                            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMzoyuBwAD5gGgL5NkuQAAAABJRU5ErkJggg=="
                            className="h-48 w-full object-cover rounded-lg"
                          />
                        </div>

                        {/* Arrow icon that appears on hover */}
                        <div className="absolute bottom-3 right-3 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white p-2 rounded-full shadow-md">
                            <ArrowRight className="w-4 h-4 text-[#7856ff]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>

            {/* "Toolbox" Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                className="backdrop-blur-md border-2 border-gray-200 rounded-lg p-6 py-[18px] overflow-hidden relative group transition-all duration-300 hover:shadow-lg"
                whileHover={{
                  boxShadow:
                    "0 10px 15px -3px rgba(120, 86, 255, 0.3), 0 4px 6px -2px rgba(120, 86, 255, 0.2)",
                }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#7856ff]/0 group-hover:to-[#7856ff]/20 transition-all duration-500 z-10"></div>

                {/* Section Title */}
                {/* <h3 className="text-xl font-bold mb-6 text-left">
                  My Qualities
                </h3> */}

                {/* Grid layout for qualities */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3">
                  {frameworks.map((framework, index) => (
                    <motion.div
                      key={index}
                      className="relative overflow-visible py-1 pl-0 " // Added padding to accommodate overlapping icon
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="bg-white/20 rounded-lg p-2 shadow-md border border-gray-100 flex items-center text-left gap-4 h-full hover:shadow-lg transition-all duration-300 relative  group/item ">
                        {/* 3D Icon Container with Perspective Effect */}
                        <div
                          className="absolute -top-0 -left-2 w-6 h-6 rounded-md overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#8A66FF] to-[#6644E0] transform group-hover/item:-rotate-12 transition-all duration-300 shadow-lg z-10"
                          style={{ perspective: "1000px" }}
                        >
                          {/* Icon content remains the same */}
                          <div className="absolute inset-0 w-full h-full bg-black opacity-20 rounded-tl-md"></div>
                          <div className="absolute bottom-0 right-0 w-full h-1/2 bg-white opacity-10 rounded-br-md"></div>
                          <div className="absolute -inset-2 bg-white/5 transform rotate-45 group-hover/item:rotate-90 transition-transform duration-500"></div>
                          <div className="relative z-10 text-white transform group-hover/item:scale-110 transition-transform duration-300 drop-shadow-[0_0_3px_rgba(255,255,255,0.5)] flex items-center justify-center w-full h-full">
                            {framework.icon}
                          </div>
                        </div>

                        {/* Quality text - adjusted padding to accommodate icon */}
                        <span className="font-medium text-xs text-gray-800 pl-6 group-hover/item:text-[#7856ff] transition-colors duration-300">
                          {framework.name}
                        </span>

                        {/* Subtle animated corner decoration */}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-[#7856ff]/0 to-[#7856ff]/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-tl-lg"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="w-full lg:w-[55%] flex flex-col gap-6"
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.3 }}
          >
            {/* "Services Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="/#contact" className="block w-full ">
                <motion.div
                  className="border-2 border-gray-200 rounded-lg overflow-hidden relative group transition-all duration-300 hover:shadow-lg backdrop-blur-md py-[17px]"
                  whileHover={{
                    boxShadow:
                      "0 10px 15px -3px rgba(120, 86, 255, 0.3), 0 4px 6px -2px rgba(120, 86, 255, 0.2)",
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#7856ff]/0 group-hover:to-[#7856ff]/20 transition-all duration-500 z-10"></div>

                  <div className="p-3">
                    <h2 className="text-2xl lg:text-3xl font-extrabold mb-0">
                      How Can I Help?
                    </h2>
                    <p className="lg:mb-4 mb-6 lg:text-base text-xs font-medium">
                      Let's turn your vision into something amazing.
                    </p>

                    {/* Services Grid Layout - */}
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 my-0">
                      {/* Web Development Card */}
                      <div className="rounded-lg overflow-hidden lg:p-4 p-2 hover:border-[#7856ff]/40 transition-all duration-300 shadow-md relative">
                        <div className="h-32 relative rounded-md mb-3 flex items-center justify-center">
                          <Image
                            src={web1 || "/placeholder.svg"}
                            alt="Profile Image"
                            quality={100}
                            style={{ cursor: "pointer" }}
                            placeholder="blur"
                            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMzoyuBwAD5gGgL5NkuQAAAABJRU5ErkJggg=="
                            className="absolute lg:h-24 lg:w-24 h-16 w-16 object-fill rounded-lg overflow-hidden -rotate-6 transform transition-all duration-300 group-hover:-rotate-12 group-hover:scale-105  group-hover:-translate-x-2 "
                          />
                          <Image
                            src={code || "/placeholder.svg"}
                            alt="Profile Image"
                            quality={100}
                            style={{ cursor: "pointer" }}
                            placeholder="blur"
                            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMzoyuBwAD5gGgL5NkuQAAAABJRU5ErkJggg=="
                            className="absolute lg:h-24 lg:w-24 h-16 w-16 object-fill rounded-lg overflow-hidden rotate-6 transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-105 group-hover:translate-x-2 top-[30px] right-[40px]"
                          />
                        </div>
                        <h3 className="font-semibold lg:text-xs text-xs">
                          Web Development
                        </h3>
                      </div>

                      {/* Product Design Card */}
                      <div className="rounded-lg overflow-hidden lg:p-4 p-2 hover:border-[#7856ff]/40 transition-all duration-300 shadow-md relative">
                        <div className="h-32 relative rounded-md mb-3 flex items-center justify-center">
                          <Image
                            src={product2 || "/placeholder.svg"}
                            alt="Profile Image"
                            quality={100}
                            style={{ cursor: "pointer" }}
                            placeholder="blur"
                            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMzoyuBwAD5gGgL5NkuQAAAABJRU5ErkJggg=="
                            className="absolute lg:h-24 lg:w-24 h-16 w-16 object-fill rounded-lg overflow-hidden -rotate-6 transform transition-all duration-300 group-hover:-rotate-12 group-hover:scale-105  group-hover:-translate-x-2 "
                          />
                          <Image
                            src={product1 || "/placeholder.svg"}
                            alt="Profile Image"
                            quality={100}
                            style={{ cursor: "pointer" }}
                            placeholder="blur"
                            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMzoyuBwAD5gGgL5NkuQAAAABJRU5ErkJggg=="
                            className="absolute lg:h-24 lg:w-24 h-16 w-16 object-fill rounded-lg overflow-hidden rotate-6 transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-105 group-hover:translate-x-2 top-[30px] right-[40px]"
                          />
                        </div>
                        <h3 className="font-semibold lg:text-xs text-xs">
                          Product Design
                        </h3>
                      </div>

                      {/* Automation Card */}
                      <div className="rounded-lg overflow-hidden lg:p-4 p-2 hover:border-[#7856ff]/40 transition-all duration-300 shadow-md relative">
                        <div className="h-32 relative rounded-md mb-3 flex items-center justify-center">
                          <Image
                            src={automation4 || "/placeholder.svg"}
                            alt="Profile Image"
                            quality={100}
                            style={{ cursor: "pointer" }}
                            placeholder="blur"
                            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMzoyuBwAD5gGgL5NkuQAAAABJRU5ErkJggg=="
                            className="absolute lg:h-24 lg:w-24 h-16 w-16 object-fill rounded-lg overflow-hidden -rotate-6 transform transition-all duration-300 group-hover:-rotate-12 group-hover:scale-105  group-hover:-translate-x-2 "
                          />
                          <Image
                            src={automation3 || "/placeholder.svg"}
                            alt="Profile Image"
                            quality={100}
                            style={{ cursor: "pointer" }}
                            placeholder="blur"
                            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMzoyuBwAD5gGgL5NkuQAAAABJRU5ErkJggg=="
                            className="absolute lg:h-24 lg:w-24 h-16 w-16 object-fill rounded-lg overflow-hidden rotate-6 transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-105 group-hover:translate-x-2 top-[30px] right-[40px]"
                          />
                        </div>
                        <h3 className="font-semibold lg:text-xs text-xs">
                          Workforce Automation
                        </h3>
                      </div>

                      {/* Product Design Card */}
                      <div className="rounded-lg overflow-hidden lg:p-4 p-2 hover:border-[#7856ff]/40 transition-all duration-300 shadow-md relative">
                        <div className="h-32 relative rounded-md mb-3 flex items-center justify-center">
                          <Image
                            src={seo1 || "/placeholder.svg"}
                            alt="Profile Image"
                            quality={100}
                            style={{ cursor: "pointer" }}
                            placeholder="blur"
                            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMzoyuBwAD5gGgL5NkuQAAAABJRU5ErkJggg=="
                            className="absolute lg:h-24 lg:w-24 h-16 w-16 object-fill rounded-lg overflow-hidden -rotate-6 transform transition-all duration-300 group-hover:-rotate-12 group-hover:scale-105  group-hover:-translate-x-2 "
                          />
                          <Image
                            src={seo2 || "/placeholder.svg"}
                            alt="Profile Image"
                            quality={100}
                            style={{ cursor: "pointer" }}
                            placeholder="blur"
                            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMzoyuBwAD5gGgL5NkuQAAAABJRU5ErkJggg=="
                            className="absolute lg:h-24 lg:w-24 h-16 w-16 object-fill rounded-lg overflow-hidden rotate-6 transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-105 group-hover:translate-x-2 top-[30px] right-[40px]"
                          />
                        </div>
                        <h3 className="font-semibold lg:text-xs text-xs">
                          SEO
                        </h3>
                      </div>
                    </div>

                    {/* Arrow icon that appears on hover */}
                    <div className="absolute bottom-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white p-2 rounded-full shadow-md">
                        <ArrowRight className="w-4 h-4 text-[#7856ff]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.main>
  );
}
