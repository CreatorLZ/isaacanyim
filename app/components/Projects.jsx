'use client'
import React, { useEffect, useState, Fragment } from 'react'
import adresstracker from '/public/adresstracker.png'
import moviebox from '/public/moviebox2.gif'
import carddetails from '/public/carddetails.png'
import advicegenerator from '/public/advicegenerator.png'
import ideafundrsc from '/public/ideafundrsc.gif'
import wristy from '/public/wristy.gif'
import forward from '/public/forward.gif'
import back from '/public/back.png'
import earth from '/public/earth.png'
import github from '/public/github.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isShowing, setIsShowing] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const body = document.body

    // Apply or remove the 'no-scroll' class based on whether a project is selected
    if (selectedProject !== null) {
      body.classList.add('no-scroll')
    } else {
      body.classList.remove('no-scroll')
    }

    // Cleanup: Remove the 'no-scroll' class when the component is unmounted
    return () => {
      body.classList.remove('no-scroll')
    }
  }, [selectedProject])
  const projects = [
    {
      name: 'Ideafundr',
      image: ideafundrsc,
      link: 'https://ideafundr-seven.vercel.app/',
      github: 'https://github.com/CreatorLZ/ideafundr',
      details: 'Showcase your invention to investors with immersive tech.',
      skills: [
        'React',
        'Firebase',
        'Context API',
        'Styled-Components',
        'Swift-XR',
      ],
    },
    {
      name: 'Moviebox',
      link: 'https://moviebox-red.vercel.app/',
      github: 'https://github.com/CreatorLZ/Moviebox',
      image: moviebox,
      details: 'Watch trailers, read reviews of any movie in the world!',
      skills: ['React', 'TMDB API', 'Styled-Components'],
    },
    {
      name: 'IP Address Tracker',
      link: 'https://ip-address-tracker-gamma-five.vercel.app/',
      github: 'https://github.com/CreatorLZ/ip_address_tracker',
      image: adresstracker,
      details: 'Get live info of any IP Address.',
      skills: ['React', 'Styled-Components', 'Geo-location'],
    },
    {
      name: 'Wristy E-commerce',
      link: 'https://vanilla-e-commerce.vercel.app/',
      github: 'https://github.com/CreatorLZ/Vanilla-e-commerce',
      image: wristy,
      details: 'Watch Ecommerce starter template for developers.',
      skills: ['HTML', 'CSS', 'Javascript'],
    },
    {
      name: 'Advice Generator',
      link: 'https://advice-generator-nine-beta.vercel.app/',
      github: 'https://github.com/CreatorLZ/advice-generator',
      image: advicegenerator,
      details: 'Get random advice.',
      skills: ['React', 'Adviceslip API', 'Styled-components'],
    },
    {
      name: 'Card Details',
      link: 'https://interactive-form-eight.vercel.app/',
      github: 'https://github.com/CreatorLZ/Interactive_form',
      image: carddetails,
      details:
        'A modern way of recording customers card details for online payment.',
      skills: ['React', 'Styled-components'],
    },
  ]

  const handleClick = (index) => {
    setSelectedProject(index)
    setIsShowing((isShowing) => !isShowing)
    setIsMenuOpen(!isMenuOpen)
  }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = isMenuOpen ? 'visible' : 'hidden'
  }
  const closeDetails = () => {
    setSelectedProject(null)
    setIsShowing((isShowing) => !isShowing)
  }

  return (
    <main className="pt-32 " id="projects">
      <button className="relative inline-block text-lg group mb-12 md:mb-7 w-fit">
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-black transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-primary group-hover:-rotate-180 ease"></span>
          <span className="relative">Projects</span>
        </span>
        <span
          className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </button>
      <p className="text-center font-bold text-base md:text-lg">
        Here are some projects i{"'"}ve worked on. CLick on any project to
        preview
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-20  ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <Image
              src={project.image}
              alt={`${project.name} screenshot`}
              quality={100}
              style={{ cursor: 'pointer' }}
              placeholder="blur"
              blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMzoyuBwAD5gGgL5NkuQAAAABJRU5ErkJggg=="
              className="h-72 md:h-80 max-w-auto rounded-lg  "
            />
            <div className="absolute inset-0 flex md:hidden md:group-hover:flex items-end py-5 md:py-10 justify-start px-3 md:px-8 bg-black bg-opacity-50  md:bg-black md:bg-opacity-55 rounded-lg transition duration-700 md:backdrop-blur-none">
              <div className="flex flex-col text-left gap-2">
                <p className="text-white text-2xl font-extrabold ">
                  {project.name}
                </p>
                <p className="text-gray-100 text-sm leading-normal tracking-wide">
                  {project.details}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="w-fit inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-sm font-medium text-black ring-1 ring-inset ring-indigo-700/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        {selectedProject !== null && (
          <div className="fixed top-0 right-0 w-full h-full md:w-1/2 z-20 bg-white px-5 py-10 overflow-scroll">
            {' '}
            <div
              className="flex items-center justify-between w-full px-1 py-2"
              onClick={closeDetails}
            >
              <div>
                <Image
                  src={back}
                  alt={back}
                  quality={100}
                  height={30}
                  width={30}
                  placeholder="blur"
                  className="cursor-pointer"
                />
              </div>
              <Link href="#projects">
                <div
                  onClick={closeDetails}
                  className="font-bold cursor-pointer"
                >
                  Back to projects
                </div>
              </Link>
            </div>
            <hr className="pb-10" />
            <p className="text-lg font-extrabold text-black pb-1">
              {projects[selectedProject].name}
            </p>
            <p className="text-gray-700 text-sm md:text-base pb-4 ">
              {projects[selectedProject].details}
            </p>
            <Image
              src={projects[selectedProject].image}
              alt={`${projects[selectedProject].name} screenshot`}
              quality={100}
              placeholder="blur"
              blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMzoyuBwAD5gGgL5NkuQAAAABJRU5ErkJggg=="
              className="h-72 md:h-80 max-w-auto rounded-lg"
            />
            <p className="text-base font-bold text-black pb-1 pt-7">About</p>
            <p className="text-sm md:text-base">
              {projects[selectedProject].details}
            </p>
            <p className="text-base font-bold text-black pb-1 pt-7">
              Technologies
            </p>
            <div className="mt-5">
              <div className="flex flex-wrap gap-3 mt-3">
                {projects[selectedProject].skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="w-fit inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-sm font-medium text-black ring-1 ring-inset ring-indigo-700/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-fit gap-1 flex items-center">
              <Image
                src={earth}
                alt="earth icon"
                quality={100}
                height={20}
                width={20}
                placeholder="blur"
                className="cursor-pointer"
              />
              <p className="text-base font-bold text-black pb-1 pt-7">
                Website
              </p>
            </div>
            <Link href={projects[selectedProject].link}>
              {projects[selectedProject].link}
            </Link>
            <div className="w-fit gap-3 flex items-center">
              <Image
                src={github}
                alt="github icon"
                quality={100}
                height={20}
                width={20}
                placeholder="blur"
                className="cursor-pointer"
              />
              <p className="text-base font-bold text-black pb-1 pt-7">Github</p>{' '}
            </div>
            <Link href={projects[selectedProject].github}>
              {projects[selectedProject].github}
            </Link>
          </div>
        )}
      </div>

      {selectedProject !== null && (
        <div
          className="w-full h-full fixed top-0 left-0 bg-black z-10 bg-opacity-50 cursor-pointer"
          onClick={closeDetails}
        ></div>
      )}

      <div className="flex gap-3 items-center pt-12 justify-center cursor-pointer ">
        <p>See more </p>
        <Image src={forward} alt="forward" width={30} height={30} />
      </div>
    </main>
  )
}
