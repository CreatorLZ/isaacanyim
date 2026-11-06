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

const inlineLinkClass =
  'text-text-primary underline decoration-accent underline-offset-[3px] decoration-[1.5px] hover:text-accent transition-colors'

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [greeting, setGreeting] = useState('Hi 😃')

  // Featured selected work matching the target design screenshot
  const featuredSlugs = ['pookoo', 'chute', 'bagxtra']
  const featuredProjects = featuredSlugs
    .map((slug) => {
      const index = projects.findIndex((p) => p.id === slug)
      return { ...projects[index], originalIndex: index }
    })
    .filter((p) => p.originalIndex !== -1)

  const featuredById = Object.fromEntries(
    featuredProjects.map((project) => [project.id, project]),
  )

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

  useEffect(() => {
    // Computed after mount so the greeting matches the visitor's local time
    // instead of the server time (which would cause a hydration mismatch).
    /* eslint-disable react-hooks/set-state-in-effect */
    const hour = new Date().getHours()
    if (hour < 12) setGreeting('Good morning 🌞')
    else if (hour < 18) setGreeting('Good afternoon 🌤️')
    else setGreeting('Good evening 🌚')
    /* eslint-enable react-hooks/set-state-in-effect */
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
              Software engineer. I design, build, and run things end
              to end, from the first sketch to the server it runs on.
            </p>
          </motion.section>

          {/* Quick Links */}
          <motion.section
            variants={itemVariants}
            className="pb-14 font-mono text-[10.5px] tracking-[0.16em] uppercase text-text-secondary flex flex-wrap items-center gap-x-2.5"
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

          {/* About */}
          <motion.section
            id="about"
            variants={itemVariants}
            className="pb-10"
          >
            <h2 className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-text-secondary mb-4 pb-0 font-normal">
              ABOUT
            </h2>
            <div className="space-y-4 font-sans text-[14px] sm:text-[14.5px] font-normal leading-[1.65] text-text-secondary">
              <p>
                {greeting}. I build the whole product: the data model, the API,
                the interface, and the deploy.
              </p>
              <p>
                At Analaize Limited I led{' '}
                <Link
                  href={featuredById.bagxtra.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={inlineLinkClass}
                  data-cuelume-hover="tick"
                >
                  BagXtra
                </Link>{' '}
                end to end. I'm currently auditing the Qewordly v1.9 codebase
                and designing its v2.0 architecture.
              </p>
              <p>
                On my own time I build the tools I wish existed, like{' '}
                <Link
                  href={featuredById.pookoo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={inlineLinkClass}
                  data-cuelume-hover="tick"
                >
                  Pookoo
                </Link>{' '}
                and{' '}
                <Link
                  href={featuredById.chute.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={inlineLinkClass}
                  data-cuelume-hover="tick"
                >
                  Chute
                </Link>
                , and publish them as open source. Away from the keyboard, I'm
                exploring what's new in AI, playing drums, or lost in a good
                book.
              </p>
            </div>
          </motion.section>

          {/* Projects */}
          <motion.section
            variants={itemVariants}
            className="pt-8 border-t border-border/70 pb-12"
          >
            <h2 className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-text-secondary mb-4 pb-0 font-normal">
              PROJECTS
            </h2>

            <motion.div
              className="flex flex-col divide-y divide-border/60 border-y border-border/60 mb-3"
              variants={listContainerVariants}
            >
              {featuredProjects.map((project) => (
                <motion.button
                  key={project.id}
                  variants={rowVariants}
                  type="button"
                  onClick={() => handleOpenProject(project.originalIndex)}
                  className="group flex items-start justify-between gap-6 py-5 text-left w-full cursor-pointer outline-none focus-visible:outline-accent"
                  data-cuelume-hover="tick"
                  data-cuelume-press
                >
                  <span className="flex flex-col gap-1.5">
                    <span className="font-sans font-bold text-[20px] sm:text-[22px] tracking-tight text-text-primary group-hover:text-accent transition-colors leading-tight">
                      {project.name}
                    </span>
                    <span className="font-sans text-[12.5px] sm:text-[13px] text-text-secondary leading-snug max-w-[380px]">
                      {project.description}
                    </span>
                  </span>

                  <span className="flex items-center gap-3 shrink-0 pt-1">
                    {project.kind && (
                      <span className="font-mono text-[9px] sm:text-[9.5px] uppercase tracking-[0.14em] text-text-muted">
                        {project.kind}
                      </span>
                    )}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="w-4 h-4 text-text-muted group-hover:text-accent transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </motion.button>
              ))}
            </motion.div>

            <motion.div variants={rowVariants}>
              <Link
                href="/projects"
                className="font-mono text-[10px] tracking-[0.16em] uppercase text-text-primary hover:text-accent transition-colors font-medium inline-flex items-center gap-1 group"
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

          {/* Skills */}
          <motion.section
            variants={itemVariants}
            className="pt-8 border-t border-border/70"
          >
            <h2 className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-text-secondary mb-4 pb-0 font-normal">
              SKILLS
            </h2>
            <p className="font-sans font-normal text-[14.5px] sm:text-[15px] leading-[1.6] text-text-primary">
              I can make it happen.
            </p>
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
