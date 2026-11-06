'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SOCIAL_LINKS } from './lib/social-links'
import { projects } from './lib/projects'
import ProjectDrawer from './components/ProjectDrawer'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
}

const rowVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null)

  // Featured selected work matching the target design screenshot
  const featuredSlugs = ['pookoo', 'chute', 'bagxtra']
  const featuredProjects = featuredSlugs
    .map((slug) => {
      const index = projects.findIndex((p) => p.id === slug)
      return { ...projects[index], originalIndex: index }
    })
    .filter((p) => p.originalIndex !== -1)

  const handleOpenProject = (originalIndex) => {
    setSelectedProject(originalIndex)
    window.history.pushState(
      { modal: 'project-details', projectIndex: originalIndex },
      '',
    )
  }

  const handleCloseProject = () => {
    setSelectedProject(null)
    if (
      typeof window !== 'undefined' &&
      window.history.state &&
      window.history.state.modal === 'project-details'
    ) {
      window.history.back()
    }
  }

  useEffect(() => {
    const handlePopState = (e) => {
      if (
        e.state &&
        e.state.modal === 'project-details' &&
        e.state.projectIndex !== undefined
      ) {
        setSelectedProject(e.state.projectIndex)
      } else {
        setSelectedProject(null)
      }
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return (
    <main className="w-full px-6 sm:px-8 pt-8 sm:pt-12 pb-6">
      <div className="max-w-[1024px] mx-auto md:pl-[21.4%]">
        <motion.div
          className="max-w-[480px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Name Title */}
          <motion.section variants={itemVariants} className="pb-8">
            <h1 className="font-sans font-black text-[52px] sm:text-[58px] tracking-tight leading-[0.88] text-text-primary">
              Isaac
              <br />
              Anyim
            </h1>
          </motion.section>

          {/* Statement / Bio */}
          <motion.section variants={itemVariants} className="pb-8">
            <p className="font-sans text-[15px] sm:text-[15.5px] font-normal text-text-secondary leading-[1.6]">
              Software engineer and builder. I design, build, and run things{' '}
              <Link
                href="/about"
                className="underline decoration-accent underline-offset-[3px] decoration-[1.5px] text-text-primary hover:text-accent transition-colors"
                data-cuelume-hover="tick"
              >
                end to end
              </Link>
              , from the first sketch to the server it runs on.
            </p>
          </motion.section>

          {/* Quick Links */}
          <motion.section
            variants={itemVariants}
            className="pb-10 font-mono text-[10.5px] tracking-[0.16em] uppercase text-text-secondary flex flex-wrap items-center gap-x-2.5"
          >
            <Link
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              data-cuelume-hover="tick"
            >
              GITHUB
            </Link>
            <span className="select-none text-text-muted">·</span>
            <Link
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              data-cuelume-hover="tick"
            >
              X
            </Link>
            <span className="select-none text-text-muted">·</span>
            <Link
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              data-cuelume-hover="tick"
            >
              LINKEDIN
            </Link>
            <span className="select-none text-text-muted">·</span>
            <a
              href="mailto:isaacchimarokeanyim@gmail.com"
              className="hover:text-accent transition-colors"
              data-cuelume-hover="tick"
            >
              EMAIL
            </a>
          </motion.section>

          {/* Projects */}
          <motion.section variants={itemVariants} className="pb-12">
            <h2 className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-text-secondary mb-4 pb-0 font-normal">
              PROJECTS
            </h2>

            <motion.div
              className="flex flex-col gap-3.5 mb-3"
              variants={listContainerVariants}
            >
              {featuredProjects.map((project) => (
                <motion.button
                  key={project.id}
                  variants={rowVariants}
                  type="button"
                  onClick={() => handleOpenProject(project.originalIndex)}
                  className="group flex items-center gap-3 text-left w-fit cursor-pointer outline-none focus-visible:outline-accent"
                  data-cuelume-hover="tick"
                  data-cuelume-press
                >
                  {/* Dart Icon with subtle micro-hover drift */}
                  <svg
                    className="w-3 h-3 text-text-primary group-hover:text-accent transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polygon points="21 3 3 10 11 13 14 21 21 3" />
                  </svg>

                  {/* Project Row Label */}
                  <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                    <span className="font-mono text-[11px] sm:text-[11.5px] tracking-[0.08em] uppercase text-text-primary group-hover:text-accent transition-colors">
                      {project.name}
                    </span>
                    <span className="font-mono text-[9px] sm:text-[9.5px] tracking-[0.12em] uppercase text-text-muted">
                      {project.tagline}
                    </span>
                  </span>
                </motion.button>
              ))}
            </motion.div>

            <motion.div variants={rowVariants}>
              <Link
                href="/projects"
                className="font-mono text-[10px] tracking-[0.16em] uppercase text-text-primary hover:text-accent transition-colors font-medium inline-flex items-center gap-1 pl-[22px] group"
                data-cuelume-hover="tick"
              >
                VIEW ALL
                <ArrowUpRight
                  aria-hidden="true"
                  className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>
          </motion.section>
        </motion.div>
      </div>

      {/* Shared Project Details Drawer */}
      <ProjectDrawer
        selectedProject={selectedProject}
        projects={projects}
        onClose={handleCloseProject}
      />
    </main>
  )
}
