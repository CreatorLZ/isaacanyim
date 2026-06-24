'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeFilter, setActiveFilter] = useState('All')

  useEffect(() => {
    const body = document.body
    if (selectedProject !== null) {
      body.classList.add('no-scroll')
    } else {
      body.classList.remove('no-scroll')
    }
    return () => {
      body.classList.remove('no-scroll')
    }
  }, [selectedProject])

  const projects = [
    {
      name: 'bagXtra',
      categories: ['Websites', 'Full Stack'],
      link: 'https://app.usebagxtra.com',
      description:
        'Buy from any store abroad and get it brought to you by a verified traveler already booked on your route, for a fraction of what courier shipping costs.',
      image: '/bagxtra.png',
      details:
        'Explore global shopping without the hassle of shipping. With BagXtra, travelers help you bring it home. Shop from anywhere, receive from everywhere.',
      skills: [
        'TypeScript',
        'JavaScript',
        'MongoDB',
        'Express',
        'React',
        'Node.js',
      ],
    },
    {
      name: 'Taskwise',
      categories: ['Websites', 'Full Stack'],
      link: 'https://taskwise-three.vercel.app/',
      github: 'https://github.com/CreatorLZ/taskwise',
      description:
        'A Smart task manager that helps you keep track of your daily tasks using natural language. It is designed to be simple and easy to use, with a clean and intuitive interface that makes it easy to stay organized and focused. With Taskwise, you can create tasks, set due dates, and track your progress as you work through your to-do list. You can also set reminders and notifications to help you stay on track and meet your deadlines. Taskwise is designed to be flexible and customizable, so you can use it in a way that works best for you. Whether you need a simple to-do list or a more advanced task manager, Taskwise has you covered.',
      image: '/Taskwise.gif',
      details:
        'Smart task manager that helps you keep track of your daily tasks.',
      skills: [
        'TypeScript',
        'Node.js',
        'React',
        'MongoDB',
        'Express',
        'Tailwind',
        'Zustand',
        'React-Query',
        'Vite',
        'NLP',
        'huggingface-inference',
      ],
    },
    {
      name: 'Moviebox',
      categories: ['Websites', 'Frontend'],
      link: 'https://moviebox-red.vercel.app/',
      github: 'https://github.com/CreatorLZ/Moviebox',
      description:
        'Watch trailers for any movie you can think of. Moviebox also includes suggestions for what to watch, trending movies, and what movies are currently available in cinemas!. ',
      image: '/moviebox.png',
      details: 'Watch trailers, read reviews of any movie in the world!',
      skills: ['React', 'TMDB API', 'Styled-Components', 'JavaScript'],
    },
    {
      name: 'Ideafundr',
      categories: ['Websites', 'Frontend'],
      image: '/ideafundrsc.gif',
      link: 'https://ideafundr-seven.vercel.app/',
      github: 'https://github.com/CreatorLZ/ideafundr',
      description:
        'ideafundr is a fully functional platform where inventors are able to showcase their inventions to potential investors with AR technology. Users can view products and invention in their physical space with AR (Argumented Reality) technology on their device.AR provides a more engaging and interactive way to present inventions. It allows investors to see the invention from all angles, understand its scale, and even interact with virtual prototypes. This immersive experience can lead to better understanding and increased investor interest. A user on sign-up is presented the choice to choose a path as either an inventor or investor.....',
      details: 'Showcase your invention to investors with immersive tech.',
      skills: [
        'React',
        'Firebase',
        'Context API',
        'Styled-Components',
        'AR',
        'Swift-XR',
        'JavaScript',
      ],
    },
    {
      name: 'Silkywriters',
      categories: ['Websites', 'Frontend'],
      image: '/silkywriters.gif',
      link: 'https://silkywriters.vercel.app/',
      // github: "https://github.com/CreatorLZ/expressline_logistics",
      description:
        'Your trusted partner for academic writing, research, and Youtube scripts. We deliver precision, depth, and creativity to bring your ideas to life.',
      details: 'Official website for Silkywriters, a writing agency.',
      skills: ['Typescript', 'Tailwind CSS', 'React', 'Framer-motion'],
    },

    {
      name: 'ExpressLine Logistics',
      categories: ['Websites', 'Frontend'],
      image: '/expressline.gif',
      // link: "https://expressline-logistics.vercel.app/",
      link: 'https://expresslinecouriers.com/',
      github: 'https://github.com/CreatorLZ/expressline_logistics',
      description: 'A logistics company',
      details: 'An international Logistics company',
      skills: ['HTML', 'Bootstrap', 'CSS', 'JavaScript'],
    },

    {
      name: 'Wristy E-commerce',
      categories: ['Websites', 'Frontend', 'Experiments'],
      link: 'https://vanilla-e-commerce.vercel.app/',
      github: 'https://github.com/CreatorLZ/Vanilla-e-commerce',
      description:
        'Slick and grand E-commerce starter template for a watch website. this template features a dark theme that catches the eye and makes for a grand display of the products. NOTE: currently not available for mobile screens.',
      image: '/wristy.gif',
      details: 'Watch Ecommerce starter template for developers.',
      skills: ['HTML', 'CSS', 'Javascript'],
    },
  ]

  const handleClick = (index) => {
    setSelectedProject(index)
  }

  const closeDetails = () => {
    setSelectedProject(null)
  }

  // Animation for sliding in from the right
  const slideInRightAnimate = {
    hidden: { x: '100%' },
    visible: {
      x: 0,

      transition: { duration: 0.7, ease: 'easeInOut' },
    },
    exit: {
      x: '100%',

      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  const projectAnimate = {
    hidden: { opacity: 0, y: 22, scale: 0.97, filter: 'blur(6px)' },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.45,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.96,
      filter: 'blur(4px)',
      transition: { duration: 0.22, ease: 'easeIn' },
    },
  }

  const filters = ['All', 'Websites', 'Full Stack', 'Frontend', 'Experiments']

  const filteredProjects = projects
    .map((project, index) => ({ ...project, originalIndex: index }))
    .filter(
      (project) =>
        activeFilter === 'All' || project.categories.includes(activeFilter),
    )

  return (
    <main className="pt-52 " id="projects">
      <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-16 pb-16 md:pb-20 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-6xl md:text-5xl lg:text-[80px] font-bold tracking-tight text-gray-800 leading-[0.9] pb-0 mb-0"
          style={{ letterSpacing: '-0.04em' }}
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xs md:pb-2"
          style={{ fontFamily: 'var(--font-space-mono), monospace' }}
        >
          Selected work and side projects. Click on any project to explore
          details.
        </motion.p>
      </div>

      <LayoutGroup id="project-filters">
        <div className="flex flex-wrap items-center justify-center gap-2 px-2 md:gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter

            return (
              <motion.button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`relative overflow-hidden rounded-xl px-4 py-2.5 text-sm outline-none transition-colors md:px-5 md:text-base ${
                  isActive
                    ? 'text-primary font-bold'
                    : 'font-normal text-gray-500 hover:bg-gray-200 hover:text-primary'
                }`}
                whileHover={!isActive ? { y: -1 } : undefined}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 420, damping: 28 }}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-project-filter"
                    className="absolute inset-0 rounded-xl bg-gray-200"
                    initial={{ scale: 0.88, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      layout: { type: 'spring', stiffness: 380, damping: 32 },
                      scale: { type: 'spring', stiffness: 500, damping: 28 },
                      opacity: { duration: 0.15 },
                    }}
                  />
                )}
                <motion.span
                  className="relative z-10 block"
                  animate={{
                    scale: isActive ? 1.03 : 1,
                    opacity: isActive ? 1 : 0.8,
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                >
                  {filter}
                </motion.span>
              </motion.button>
            )
          })}
        </div>
      </LayoutGroup>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-7 gap-5 pt-12 md:px-12">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              custom={index}
              variants={projectAnimate}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.25 }}
              key={project.originalIndex}
              className="relative group cursor-pointer rounded-lg shadow-lg duration-500"
              onClick={() => handleClick(project.originalIndex)}
              transition={{
                layout: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              }}
            >
              <Image
                src={project.image}
                alt={`${project.name} screenshot`}
                width={400}
                height={320}
                className="h-72 md:h-80 w-full rounded-lg object-cover"
                unoptimized
                style={{ cursor: 'pointer' }}
              />
              <motion.div className="absolute inset-0 flex md:hidden md:group-hover:flex items-end py-5 md:py-10 justify-start px-3 md:px-8 bg-gradient-to-b from-black/30 to-black/70 rounded-lg transition duration-700 pointer-events-none">
                <div className="flex flex-col text-left gap-2">
                  <motion.p className="text-white text-2xl font-extrabold">
                    {project.name}
                  </motion.p>
                  <motion.p className="text-gray-100 text-sm leading-normal tracking-wide">
                    {project.details}
                  </motion.p>
                  <div className="flex flex-wrap gap-3 mt-3">
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
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project details sliding in from the right */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            key={selectedProject}
            className="fixed top-0 right-0 w-full h-full md:w-1/2 z-50 bg-white px-0 py-10 overflow-scroll overflow-x-hidden pb-24"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideInRightAnimate}
          >
            <div
              className="flex items-center justify-between w-full px-1 pb-2 pt-6"
              onClick={closeDetails}
            >
              <Image
                src="/back.png"
                alt="Back"
                width={30}
                height={30}
                className="cursor-pointer"
              />
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
            <p className="text-lg font-extrabold text-black pb-1 px-5">
              {projects[selectedProject].name}
            </p>
            <p className="text-gray-700 text-sm md:text-base pb-4 px-5">
              {projects[selectedProject].description}
            </p>
            <Image
              src={projects[selectedProject].image}
              alt={`${projects[selectedProject].name} screenshot`}
              width={400}
              height={320}
              className="h-72 md:h-80 w-full rounded-lg object-cover px-5"
              unoptimized
            />
            <p className="text-base font-bold text-black pb-1 pt-7 px-5">
              About
            </p>
            <p className="text-sm md:text-base px-5">
              {projects[selectedProject].details}
            </p>
            <p className="text-base font-bold text-black pb-1 pt-7 px-5">
              Technologies
            </p>
            <div className="mt-5 px-5">
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
            <div className="w-fit gap-2 flex items-center justify-center h-fit px-5 pt-7">
              <Image
                src="/earth.png"
                alt="earth icon"
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <p className="text-base font-bold text-black">Website</p>
            </div>
            <Link
              className="px-5 hover:underline"
              href={projects[selectedProject].link}
              target="_blank"
            >
              {projects[selectedProject].link}
            </Link>
            {projects[selectedProject].github && (
              <div className="w-fit gap-2 flex items-center justify-center h-fit px-5 pt-7">
                <Image
                  src="/github.png"
                  alt="github icon"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
                <p className="text-base font-bold text-black">Github</p>
              </div>
            )}
            {projects[selectedProject].github && (
              <Link
                className="px-5 hover:underline"
                href={projects[selectedProject].github}
                target="_blank"
              >
                {projects[selectedProject].github}
              </Link>
            )}
            <div className="sticky md:sticky -bottom-24 left-0 w-full md:w-full md:left-1/2 h-fit gap-2 p-5 bg-black text-white text-sm sm:text-base flex items-center justify-center mt-7 z-50">
              <Link href={projects[selectedProject].link} target="_blank">
                <p className="text-white">Open project</p>
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Overlay */}
      {selectedProject !== null && (
        <div
          className="w-full h-full fixed top-0 left-0 bg-black z-10 bg-opacity-50 cursor-pointer"
          onClick={closeDetails}
        ></div>
      )}
      <Link href="https://github.com/CreatorLZ" target="_blank">
        <div className="flex gap-3 items-center pt-12 justify-center cursor-pointer">
          <p>See more</p>
          <Image src="/forward.gif" alt="forward" width={30} height={30} />
        </div>
      </Link>
    </main>
  )
}
