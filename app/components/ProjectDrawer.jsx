'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

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

export default function ProjectDrawer({
  selectedProject,
  projects,
  onClose,
}) {
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

  const project =
    selectedProject !== null && projects ? projects[selectedProject] : null

  return (
    <>
      <AnimatePresence>
        {project && (
          <motion.div
            key={selectedProject}
            className="fixed top-0 right-0 w-full h-full md:w-1/2 z-50 bg-bg px-0 py-10 overflow-auto overflow-x-hidden pb-24 border-l border-border gap-5 font-sans"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideInRightAnimate}
          >
            <div
              className="flex items-center justify-between w-full px-4 pb-2 pt-6"
              onClick={onClose}
            >
              <ArrowLeft
                className="cursor-pointer text-text-secondary hover:text-text-primary transition-colors"
                size={16}
              />
              <div
                onClick={(e) => {
                  e.stopPropagation()
                  onClose()
                }}
                className="font-normal cursor-pointer text-text-secondary hover:text-accent transition-colors text-sm font-mono"
              >
                Back to projects
              </div>
            </div>
            <hr className="pb-10 border-border" />
            <p className="text-2xl font-bold font-sans text-text-primary pb-1 px-5">
              {project.name}
            </p>
            <p className="text-text-secondary text-sm md:text-sm pb-4 px-5 font-sans">
              {project.description}
            </p>
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.name} screenshot`}
                width={400}
                height={320}
                className="h-72 md:h-80 w-full rounded-lg object-cover px-5"
                unoptimized
              />
            ) : (
              <div className="h-72 md:h-80 rounded-lg mx-5 bg-surface-hover flex items-center justify-center">
                <span className="text-6xl font-bold font-sans text-text-muted">
                  {project.name[0].toUpperCase()}
                </span>
              </div>
            )}
            <p className="text-xs font-mono uppercase tracking-widest text-text-muted pb-3 pt-7 px-5">
              About
            </p>
            <p className="text-sm md:text-base px-5 text-text-secondary font-sans leading-relaxed">
              {project.details}
            </p>
            <p className="text-xs font-mono uppercase tracking-widest text-text-muted pb-3 pt-7 px-5">
              Major Technologies Used
            </p>
            <div className="mt-2 px-5">
              <div className="flex flex-wrap gap-2 mt-2">
                {project.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="w-fit inline-flex items-center rounded-md bg-surface border border-border px-2.5 py-1 text-xs font-mono text-text-primary ring-1 ring-inset ring-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {project.link && (
              <>
                <div className="w-fit gap-2 flex items-center justify-center h-fit px-5 pb-7 pt-7">
                  <Image
                    src="/earth.png"
                    alt="earth icon"
                    width={20}
                    height={20}
                    className="cursor-pointer dark:invert opacity-80"
                  />
                  <p className="text-sm font-mono uppercase tracking-wider text-text-primary">
                    Website
                  </p>
                </div>
                <div className="px-5 pb-7">
                  <Link
                    className="pb-1 text-text-secondary hover:text-accent border-b border-transparent hover:border-accent transition-colors font-mono text-xs sm:text-sm break-all"
                    href={project.link}
                    target="_blank"
                  >
                    {project.link}
                  </Link>
                </div>
              </>
            )}
            {project.github && (
              <div className="w-fit gap-2 flex items-center justify-center h-fit px-5 pt-7">
                <Image
                  src="/github.png"
                  alt="github icon"
                  width={20}
                  height={20}
                  className="cursor-pointer dark:invert opacity-80"
                />
                <p className="text-sm font-mono uppercase tracking-wider text-text-primary">
                  Github
                </p>
              </div>
            )}
            {project.github && (
              <div className="px-5 pb-7">
                <Link
                  className="pb-1 text-text-secondary hover:text-accent border-b border-transparent hover:border-accent transition-colors font-mono text-xs sm:text-sm break-all"
                  href={project.github}
                  target="_blank"
                >
                  {project.github}
                </Link>
              </div>
            )}
            <div className="sticky -bottom-24 left-0 w-full h-fit p-5 bg-bg border-t border-border z-50">
              <Link
                href={project.link || project.github}
                target="_blank"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-md bg-surface border border-border text-text-primary text-sm font-semibold hover:border-text-muted transition-colors font-sans"
                data-cuelume-hover="tick"
              >
                {project.link ? 'Open project' : 'View on GitHub'}
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

      {/* Backdrop overlay */}
      {project && (
        <div
          className="w-full h-full fixed top-0 left-0 bg-black/50 z-40 cursor-pointer"
          onClick={onClose}
        />
      )}
    </>
  )
}

