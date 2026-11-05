'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { projects } from '../lib/projects'
import ProjectDrawer from '../components/ProjectDrawer'

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeFilter, setActiveFilter] = useState('All')

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

  const filters = ['All', 'Websites', 'Full Stack', 'Frontend', 'Tools']

  const filteredProjects = projects
    .map((project, index) => ({ ...project, originalIndex: index }))
    .filter(
      (project) =>
        activeFilter === 'All' || project.categories.includes(activeFilter),
    )

  return (
    <main className="w-full px-6 sm:px-8 pt-8 sm:pt-12 pb-10">
      <div className="max-w-[1024px] mx-auto md:pl-[21.4%]">
        <div className="max-w-[560px]">
          {/* Back to Home Link */}
          <div className="pb-5">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-text-secondary hover:text-text-primary transition-colors"
              data-cuelume-hover="tick"
            >
              <ArrowLeft className="w-3 h-3" />
              BACK TO HOME
            </Link>
          </div>

          {/* Page Title & Filter section */}
          <div className="pb-6 border-b border-border/70">
            <h1 className="font-sans font-black text-[38px] sm:text-[44px] tracking-tight leading-[0.92] text-text-primary">
              All Projects
            </h1>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-secondary mt-1.5">
              {projects.length} PROJECTS · SELECTED WORK, TOOLS & EXPERIMENTS
            </p>

            {/* Filter Pills */}
            <LayoutGroup id="projects-filters">
              <div className="flex flex-wrap items-center gap-1.5 pt-4">
                {filters.map((filter) => {
                  const isActive = activeFilter === filter
                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setActiveFilter(filter)}
                      className={`relative rounded px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors ${
                        isActive
                          ? 'text-text-primary font-bold bg-surface border border-border shadow-sm'
                          : 'text-text-secondary hover:text-text-primary hover:bg-surface-hover/60 border border-transparent'
                      }`}
                      data-cuelume-hover="tick"
                      data-cuelume-press
                    >
                      {filter}
                    </button>
                  )
                })}
              </div>
            </LayoutGroup>
          </div>

          {/* Project List */}
          <div className="flex flex-col divide-y divide-border/60">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="group py-4 sm:py-5 flex items-start justify-between gap-3 cursor-pointer hover:bg-surface-hover/30 px-2 rounded -mx-2 transition-colors"
                  onClick={() => handleOpenProject(project.originalIndex)}
                  data-cuelume-hover="tick"
                  data-cuelume-press
                >
                  <div className="flex items-start gap-2.5">
                    {/* Dart Icon */}
                    <svg
                      className="w-3 h-3 text-text-primary group-hover:text-accent transition-colors shrink-0 mt-1"
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

                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-sans font-bold text-[15px] sm:text-[16px] text-text-primary group-hover:text-accent transition-colors leading-tight">
                          {project.name}
                        </span>
                        {project.tagline && (
                          <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-text-muted">
                            · {project.tagline}
                          </span>
                        )}
                      </div>
                      <p className="font-sans text-[12.5px] sm:text-[13px] text-text-secondary mt-1 leading-snug">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.categories.map((cat) => (
                          <span
                            key={cat}
                            className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-surface border border-border/80 text-text-muted"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted group-hover:text-accent transition-colors shrink-0 mt-1">
                    DETAILS ↗
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
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
