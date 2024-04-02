'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import react from '/public/react.png'
import nextjs from '/public/nextjs.png'
import html from '/public/html.png'
import css from '/public/css.png'
import javascript from '/public/javascript.png'
import typescript from '/public/typescript.png'
import styledcomponents from '/public/styledcomponents.png'
import tailwind from '/public/tailwind.png'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Skills() {
  const skillAnimate = {
    offscreen: { opacity: 0, y: 100 },
    onscreen: (index) => ({
      opacity: [1],
      y: 0,
      transition: { delay: 0.05 * index, duration: 0.05 * index },
    }),
  }
  const [showAllSkills, setShowAllSkills] = useState(false)

  const skills = [
    { name: 'React.js', image: react },
    { name: 'Next.js', image: nextjs },
    { name: 'Tailwind', image: tailwind },
    { name: 'Styled Components', image: styledcomponents },
    { name: 'JavaScript', image: javascript },
    { name: 'TypeScript', image: typescript },
    { name: 'HTML', image: html },
    { name: 'CSS', image: css },
  ]
  const frameworks = [
    { name: 'Material UI' },
    { name: 'Bootstrap' },
    { name: 'Git' },
    { name: 'GitHub' },
    { name: 'Firebase' },
    { name: 'Redux Toolkit' },
    { name: 'Context API' },
    { name: 'Framer Motion' },
    { name: 'Swift XR' },
    { name: 'Trello' },
    { name: 'Slack' },
    { name: 'More...' },
  ]
  const visibleSkills = showAllSkills ? skills : skills.slice(0, 3)

  return (
    <main className="pattern pt-20 pb-20" id="skills">
      <button className="relative inline-block text-base md:text-lg group mb-12 md:mb-7">
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-black transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-primary group-hover:-rotate-180 ease"></span>
          <span className="relative"> Skills</span>
        </span>
        <span
          className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </button>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 items-center pt-1 md:pt-6 lg:pt-10 p-2.5 w-full justify-between sm:justify-normal">
        {visibleSkills.map((skill, index) => (
          <div
            key={index}
            className="relative w-full md:w-72 h-48 border border-gray-400 items-center justify-center flex flex-col text-center "
          >
            <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 text-black ml-[-12px] mt-[-15px] text-5xl font-light">
              +
            </div>
            <div className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 text-black mr-[-13px] mt-[-15px] text-5xl font-light">
              +
            </div>
            <div className="absolute bottom-0 left-0 flex items-center justify-center w-6 h-6 text-black ml-[-11px] mb-[-10px] text-5xl font-light">
              +
            </div>
            <div className="absolute bottom-0 right-0 flex items-center justify-center w-6 h-6 text-black mr-[-11px] mb-[-10px] text-5xl font-light">
              +
            </div>
            <h3 className="font-bold text-3xl ">{skill.name}</h3>
            <Image
              src={skill.image}
              alt={`${skill.name} logo`}
              width={40}
              height={40}
              quality={100}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Link href="#skills">
          <button
            className="relative inline-block text-base md:text-lg group"
            onClick={() => setShowAllSkills(!showAllSkills)}
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-black transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-primary group-hover:-rotate-180 ease"></span>
              <span className="relative">
                {' '}
                {showAllSkills ? 'Show Less' : 'Show More'}
              </span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
        </Link>
      </div>
      <div className="pt-32 flex flex-col w-full">
        <button className="relative inline-block text-base md:text-lg group mb-12 md:mb-7 w-fit">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-black transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-primary group-hover:-rotate-180 ease"></span>
            <span className="relative"> UI Frameworks/Libs/Others</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </button>
        <div className="flex flex-wrap gap-5 items-center justify-center w-full pt-1 md:pt-6 lg:pt-10 p-2.5">
          {frameworks.map((framework, index) => (
            <motion.span
              initial={'offscreen'}
              whileInView={'onscreen'}
              viewport={{ once: 'true' }}
              variants={skillAnimate}
              key={index}
              custom={index}
              className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-sm md:text-lg font-medium text-black ring-1 ring-inset ring-indigo-700/10"
            >
              {framework.name}
            </motion.span>
          ))}
        </div>
      </div>
    </main>
  )
}
