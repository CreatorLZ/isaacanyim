'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

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
      name: 'Pookoo',
      categories: ['Tools'],
      github: 'https://github.com/CreatorLZ/pookoo',
      description: 'Audit, document, and extract environment variables using static AST analysis.',
      details: 'Audit, document, and extract environment variables from any codebase using static AST analysis. Zero credentials required.',
      skills: ['TypeScript', 'Node.js', 'AST', 'CLI'],
    },
    {
      name: 'BagXtra',
      categories: ['Websites', 'Full Stack'],
      link: 'https://app.usebagxtra.com',
      description: 'Shop abroad, get it delivered by a traveler on your route.',
      image: '/bagxtra.png',
      details: 'Shop abroad, get it brought home by a traveler.',
      skills: [
        'TypeScript',
        'JavaScript',
        'MongoDB',
        'Express',
        'React',
        'Node.js',
        'AWS S3',
        'Stripe',
      ],
    },
    {
      name: 'chute',
      categories: ['Tools'],
      github: 'https://github.com/CreatorLZ/chute',
      description: 'Plug-and-play UploadThing file upload library for Next.js.',
      details: 'Drop-in file upload components for Next.js.',
      skills: [
        'Next.js',
        'TypeScript',
        'UploadThing',
        'React',
        'shadcn/ui',
        'Tailwind CSS',
      ],
    },
    {
      name: 'Taskwise',
      categories: ['Websites', 'Full Stack'],
      link: 'https://taskwise-three.vercel.app/',
      github: 'https://github.com/CreatorLZ/taskwise',
      description: 'Manage your tasks with natural language.',
      image: '/taskwise.webp',
      details: 'AI-powered task manager with natural language input.',
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
        'Watch trailers, discover trending films and cinema listings.',
      image: '/moviebox.webp',
      details: 'Trailers, trending picks, and cinema listings.',
      skills: ['React', 'TMDB API', 'Styled-Components', 'JavaScript'],
    },
    {
      name: 'Ideafundr',
      categories: ['Websites', 'Frontend'],
      image: '/ideafundr.webp',
      link: 'https://ideafundr-seven.vercel.app/',
      github: 'https://github.com/CreatorLZ/ideafundr',
      description: 'Pitch your invention to investors using AR technology.',
      details: 'Pitch inventions to investors using AR.',
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
      image: '/silkywriters.webp',
      link: 'https://silkywriters.vercel.app/',
      description: 'Academic writing, research, and YouTube scripts agency.',
      details: 'Writing agency for academics and creators.',
      skills: ['Typescript', 'Tailwind CSS', 'React', 'Framer-motion'],
    },

    // {
    //   name: 'ExpressLine Logistics',
    //   categories: ['Websites', 'Frontend'],
    //   image: '/expressline.webp',
    //   link: 'https://expresslinecouriers.com/',
    //   github: 'https://github.com/CreatorLZ/expressline_logistics',
    //   description: 'A logistics company',
    //   details: 'An international Logistics company',
    //   skills: ['HTML', 'Bootstrap', 'CSS', 'JavaScript'],
    // },

    {
      name: 'Wristy E-commerce',
      categories: ['Websites', 'Frontend'],
      link: 'https://vanilla-e-commerce.vercel.app/',
      github: 'https://github.com/CreatorLZ/Vanilla-e-commerce',
      description: 'Dark-themed e-commerce starter template for watches.',
      image: '/wristy.webp',
      details: 'Dark-themed watch e-commerce starter template.',
      skills: ['HTML', 'CSS', 'Javascript'],
    },
  ]

  const handleClick = (index) => {
    setSelectedProject(index)
    window.history.pushState({ modal: 'project-details', projectIndex: index }, '')
  }

  const closeDetails = () => {
    setSelectedProject(null)
    if (window.history.state && window.history.state.modal === 'project-details') {
      window.history.back()
    }
  }

  useEffect(() => {
    const handlePopState = (e) => {
      if (e.state && e.state.modal === 'project-details' && e.state.projectIndex !== undefined) {
        setSelectedProject(e.state.projectIndex)
      } else {
        setSelectedProject(null)
      }
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const slideInRightAnimate = {
    hidden: { x: '100%' },
    visible: {
      x: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      x: '100%',
      transition: { duration: 0.4, ease: 'easeIn' },
    },
  }

  const projectAnimate = {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
    exit: {
      opacity: 0,
      y: -8,
      scale: 0.98,
      transition: { duration: 0.2, ease: 'easeIn' },
    },
  }

  const filters = ['All', 'Websites', 'Full Stack', 'Frontend', 'Tools']

  const filteredProjects = projects
    .map((project, index) => ({ ...project, originalIndex: index }))
    .filter(
      (project) =>
        activeFilter === 'All' || project.categories.includes(activeFilter),
    )

  return (
    <main className="pt-52 px-6 md:px-12 lg:px-24" id="projects">
      <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-16 pb-16 md:pb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-text-primary leading-[0.9] pb-0 mb-0"
          style={{ letterSpacing: '-0.04em' }}
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="text-text-muted text-xs md:text-sm leading-relaxed max-w-xs md:pb-2"
          style={{ fontFamily: 'var(--font-space-mono), monospace' }}
        >
          Selected work and side projects. Click on any project to explore
          details.
        </motion.p>
      </div>

      <LayoutGroup id="project-filters">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 max-w-5xl mx-auto">
          {filters.map((filter) => {
            const isActive = activeFilter === filter

            return (
              <motion.button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`relative overflow-hidden rounded-xl px-3.5 py-2 text-xs outline-none transition-colors md:px-4 md:py-2 md:text-xs ${
                  isActive
                    ? 'text-accent font-bold'
                    : 'font-normal text-text-muted hover:bg-surface hover:text-accent'
                }`}
                whileHover={!isActive ? { y: -1 } : undefined}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                data-cuelume-toggle
              >
                {isActive && (
                  <motion.span
                    layoutId="active-project-filter"
                    className="absolute inset-0 rounded-xl bg-surface border border-border"
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

      {/* Project list */}
      <div className="flex flex-col w-full max-w-4xl mx-auto pt-8 md:pt-12 border-t border-border mt-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const urlString = project.link || project.github
            let domain = ''
            if (urlString) {
              try {
                domain = new URL(urlString).hostname.replace('www.', '')
              } catch (e) {
                domain = urlString
              }
            }

            return (
              <motion.div
                layout
                custom={index}
                variants={projectAnimate}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.25 }}
                key={project.originalIndex}
                className="relative group cursor-pointer border-b border-border transition-colors duration-300 py-8 flex flex-col items-start overflow-hidden"
                onClick={() => handleClick(project.originalIndex)}
                data-cuelume-press
                data-cuelume-release
                data-cuelume-hover="tick"
                transition={{
                  layout: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                }}
              >
                <div className="flex flex-col w-full px-4 md:px-6 transition-transform duration-500 relative">
                  <h3 className="text-lg md:text-2xl text-text-primary group-hover:text-accent transition-colors duration-300 mb-1">
                    {project.name}
                  </h3>
                  {domain && (
                    <p className="text-[10px] md:text-[11px] font-mono text-text-muted uppercase tracking-[0.1em] mb-3">
                      {domain}
                    </p>
                  )}
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed max-w-2xl group-hover:text-text-primary transition-colors duration-300">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Project details sliding in from the right */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            key={selectedProject}
            className="fixed top-0 right-0 w-full h-full md:w-1/2 z-50 bg-bg px-0 py-10 overflow-auto overflow-x-hidden pb-24 border-l border-border gap-5"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideInRightAnimate}
          >
            <div
              className="flex items-center justify-between w-full px-4 pb-2 pt-6"
              onClick={closeDetails}
            >
              <ArrowLeft
                className="cursor-pointer text-text-secondary hover:text-text-primary transition-colors"
                size={16}
              />
              <div
                onClick={(e) => {
                  e.stopPropagation()
                  closeDetails()
                }}
                className="font-normal cursor-pointer text-text-secondary hover:text-accent transition-colors text-sm"
              >
                Back to projects
              </div>
            </div>
            <hr className="pb-10 border-border" />
            <p className="text-lg font-normal text-text-primary pb-1 px-5">
              {projects[selectedProject].name}
            </p>
            <p className="text-text-secondary text-sm md:text-sm pb-4 px-5">
              {projects[selectedProject].description}
            </p>
            {projects[selectedProject].image ? (
              <Image
                src={projects[selectedProject].image}
                alt={`${projects[selectedProject].name} screenshot`}
                width={400}
                height={320}
                className="h-72 md:h-80 w-full rounded-lg object-cover px-5"
                unoptimized
              />
            ) : (
              <div className="h-72 md:h-80 rounded-lg mx-5 bg-surface-hover flex items-center justify-center">
                <span className="text-6xl font-bold text-text-muted">
                  {projects[selectedProject].name[0].toUpperCase()}
                </span>
              </div>
            )}
            <p className="text-base font-normal text-text-primary pb-3 pt-7 px-5">
              About
            </p>
            <p className="text-sm md:text-sm px-5 text-text-secondary">
              {projects[selectedProject].details}
            </p>
            <p className="text-base font-normal text-text-primary pb-3 pt-7 px-5">
              Major Technologies Used
            </p>
            <div className="mt-5 px-5">
              <div className="flex flex-wrap gap-3 mt-3">
                {projects[selectedProject].skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="w-fit inline-flex items-center rounded-md bg-surface border border-border px-2 py-1 text-xs font-normal text-text-primary ring-1 ring-inset ring-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {projects[selectedProject].link && (
              <>
                <div className="w-fit gap-2 flex items-center justify-center h-fit px-5 pb-7 pt-7">
                  <Image
                    src="/earth.png"
                    alt="earth icon"
                    width={20}
                    height={20}
                    className="cursor-pointer dark:invert opacity-80"
                  />
                  <p className="text-base font-normal text-text-primary">
                    Website
                  </p>
                </div>
                <div className="px-5 pb-7">
                  <Link
                    className="pb-1 text-text-secondary hover:text-accent border-b border-transparent hover:border-accent transition-colors"
                    href={projects[selectedProject].link}
                    target="_blank"
                  >
                    {projects[selectedProject].link}
                  </Link>
                </div>
              </>
            )}
            {projects[selectedProject].github && (
              <div className="w-fit gap-2 flex items-center justify-center h-fit px-5 pt-7">
                <Image
                  src="/github.png"
                  alt="github icon"
                  width={20}
                  height={20}
                  className="cursor-pointer dark:invert opacity-80"
                />
                <p className="text-base font-bold text-text-primary">Github</p>
              </div>
            )}
            {projects[selectedProject].github && (
              <div className="px-5 pb-7">
                <Link
                  className="pb-1 text-text-secondary hover:text-accent border-b border-transparent hover:border-accent transition-colors"
                  href={projects[selectedProject].github}
                  target="_blank"
                >
                  {projects[selectedProject].github}
                </Link>
              </div>
            )}
            <div className="sticky -bottom-24 left-0 w-full h-fit p-5 bg-bg border-t border-border z-50">
              <Link
                href={
                  projects[selectedProject].link ||
                  projects[selectedProject].github
                }
                target="_blank"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-md bg-surface border border-border text-text-primary text-sm font-semibold hover:border-text-muted transition-colors"
                data-cuelume-hover="tick"
              >
                {projects[selectedProject].link
                  ? 'Open project'
                  : 'View on GitHub'}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </Link>
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
      {/* <Link href="https://github.com/CreatorLZ" target="_blank">
        <div
          className="flex gap-3 items-center pt-12 justify-center cursor-pointer"
          data-cuelume-hover="tick"
        >
          <p className="text-text-secondary">See more</p>
          <ArrowRight className="text-text-secondary" size={20} />
        </div>
      </Link> */}
    </main>
  )
}
