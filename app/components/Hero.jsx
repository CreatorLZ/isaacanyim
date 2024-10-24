"use client";
import Image from "next/image";
import forward from "/public/forward.gif";
import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedText } from "./AnimatedText";

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
        staggerChildren: 0.1,
        duration: 1.5,
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

  const containerVariants2 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 1.5,
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
      className="text-center flex-col pb-0"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        variants={containerVariants2}
        style={{ height: "75vh" }}
        className=" flex flex-col items-center justify-center md:justify-start  "
      >
        <motion.h1
          variants={itemVariants2}
          className="text-gray-700 text-3xl md:text-6xl tracking-normal  pb-0  font-black"
        >
          HI👋🏾{"!"} I{"'"}M ISAAC
          <br />
        </motion.h1>
        <motion.h1
          variants={itemVariants3}
          className="text-gray-700 text-3xl md:text-6xl tracking-normal  pb-0  font-black"
        >
          A FRONTEND DEVELOPER
        </motion.h1>
        {/* <br /> */}
        <AnimatedText className="leading-loose text-sm md:text-xl pb-10">
          I create captivating, immersive & user-friendly digital journeys.
        </AnimatedText>

        <Link
          href="#projects"
          // style={{ border: "2px solid black" }}
          // className="w-full border-2 border-gray-700 flex items-center rounded-md justify-center p-5 md:p-4 cursor-pointer md:w-1/5"
        >
          {/* <div className="text-gray-700 text-base">EXPLORE PROJECTS</div> */}
          <button className="relative inline-block text-lg group mb-12 md:mb-7 w-fit ">
            <span className="relative z-10 block px-5 py-5 overflow-hidden font-medium leading-tight text-black transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-80 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-primary group-hover:-rotate-180 ease"></span>
              <span className="relative text-gray-700">EXPLORE PROJECTS</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-16 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
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
          className="relative bg-cover rounded-xl bg-center h-52 w-full flex justify-start items-end md:items-center p-5 md:h-96 md:w-3/5"
          style={{ backgroundImage: "url('/Mega2.webp')" }}
        >
          <div className="absolute inset-0 bg-black opacity-35 rounded-xl"></div>
          <h3 className="absolute text-left bottom-4 left-4 text-white text-xl font-bold md:w-2/3 md:text-3xl">
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
              <h3 className=" text-white text-xl font-bold md:text-3xl">
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
