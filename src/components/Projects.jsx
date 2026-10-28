
import SectionHeading from './SectionHeading.jsx'
import { projects } from '../data/projects.js'
import { motion } from 'framer-motion'
import { reveal } from '../animation/reveal'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

const projectImages = {
  tidy: {
    src: '/images/tidynote.jpg',
    alt: 'TidyNote notes and task management application',
  },
  cartora: {
    src: '/images/cartora.jpg',
    alt: 'Cartora e-commerce website',
  },
  movie: {
    src: '/images/moviedex.jpg',
    alt: 'MovieDex movie discovery website',
  },
}

function Projects() {
  return (
    <section id="projects" className="border-t border-white/[0.07]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-28">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Projects I've built."
          description="A selection of applications where I put my skills into practice."
        />

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const preview = projectImages[project.color]

            return (
              <motion.article
                key={project.name}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.08 }}
                className="project-card flex min-w-0 flex-col overflow-hidden rounded-2xl"
              >
                {/* Project screenshot */}
                <div className="flex h-52 items-center justify-center overflow-hidden border-b border-white/[0.07] bg-[#1c1b19] p-3 sm:h-56">
                  {preview ? (
                    <img
                      src={preview.src}
                      alt={preview.alt}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
                    />
                  ) : (
                    <p className="text-sm text-[#a29e97]">
                      Project preview unavailable
                    </p>
                  )}
                </div>

                {/* Project details */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="section-label mb-2">{project.type}</p>

                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {project.name}
                    </h3>

                    <span className="pt-1 font-mono text-xs text-[#77736d]">
                      {project.number}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[#a29e97]">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-md bg-white/5.5 px-2.5 py-1.5 text-xs text-[#c6c0b8]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-x-5 gap-y-3 border-t border-white/8 pt-5 mt-7">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#e5dfd6] transition hover:text-[#d77b4d]"
                    >
                      Source code <ArrowUpRight size={14} />
                    </a>

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-[#d77b4d] transition hover:text-[#efa37c]"
                      >
                        Live demo <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
