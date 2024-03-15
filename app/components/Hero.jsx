'use client'
import Image from 'next/image'
import Webinar from '/public/coding.png'
import forward from '/public/forward.gif'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  const detailsAnimate = {
    offscreen: { opacity: 0, y: -10 },
    onscreen: {
      opacity: [0, 1],
      y: 0,
      transition: { duration: 0.5 },
    },
  }
  const descAnimate = {
    offscreen: { opacity: 0, y: 10 },
    onscreen: {
      opacity: [0, 1],
      y: 0,
      transition: { duration: 0.5 },
    },
  }
  return (
    <motion.main
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{ once: 'true', amount: 0.5 }}
      transition={{ staggerChildren: 0.1 }}
      className="text-center flex-col pb-0"
    >
      <motion.h1
        variants={detailsAnimate}
        className="text-gray-700 text-2xl md:text-4xl tracking-normal  pb-0  font-black"
      >
        Hi👋🏾, I{"'"}M ISAAC
        <br />A FRONTEND DEVELOPER
      </motion.h1>
      <br />

      <motion.p
        variants={descAnimate}
        className="leading-loose text-sm md:text-base"
      >
        As a <strong>results-driven web developer</strong> , I specialize in
        creating <strong>accessible</strong> and <strong>user-centric </strong>
        experiences that seamlessly combine aesthetics with engagement. My
        enthusiasm lies in the art of designing captivating,{' '}
        <strong> user-friendly</strong>, and immersive digital journeys.
      </motion.p>
      <div className="w-full flex items-center justify-center">
        <div>
          <Image
            src={Webinar}
            alt="person"
            quality={100}
            placeholder="blur"
            style={{ cursor: 'pointer' }}
            className="h-72 md:h-80 w-full  rounded-lg"
          />
        </div>
      </div>
      <Link href="/about">
        <div className="flex gap-3 items-center pt-12 justify-center cursor-pointer ">
          <p>See more about me </p>
          <Image src={forward} alt="forward" width={30} height={30} />
        </div>
      </Link>
    </motion.main>
  )
}
