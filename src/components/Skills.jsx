import SectionHeading from './SectionHeading'
import { skills } from '../data/skills'
import { motion } from 'framer-motion'
import { reveal } from '../animation/reveal'
import { ArrowUpRight } from 'lucide-react'

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/[0.07] bg-[#1b1b19]"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-28">
        <SectionHeading
          eyebrow="MY TOOLKIT"
          title="Technologies I work with."
          description="The tools and technologies I use to build responsive, functional web applications."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ title, icon: Icon, items }, index) => (
            <motion.article
              key={title}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.08 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#201f1d] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#d77b4d]/40 hover:bg-[#24221f] sm:p-7"
            >
              {/* Subtle decorative accent */}
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#d77b4d]/[0.06] blur-2xl transition-opacity duration-300 group-hover:bg-[#d77b4d]/[0.12]" />

              {/* Category header */}
              <div className="relative mb-7 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d77b4d]/20 bg-[#d77b4d]/[0.08] transition-colors duration-300 group-hover:bg-[#d77b4d]/[0.14]">
                  <Icon className="text-[#d77b4d]" size={23} />
                </div>

                <span className="font-mono text-xs tracking-wider text-[#77736d]">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="relative">
                <h3 className="text-lg font-semibold tracking-tight text-[#eee8df]">
                  {title}
                </h3>

                <div className="mt-3 h-px w-10 bg-[#d77b4d]/70 transition-all duration-300 group-hover:w-16" />
              </div>

              {/* Skills */}
              <div className="relative mt-6 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-xs leading-relaxed text-[#c6c0b8] transition-colors duration-200 hover:border-[#d77b4d]/30 hover:bg-[#d77b4d]/[0.07] hover:text-[#f0c2a7] sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Bottom detail */}
              <div className="relative mt-auto flex items-center justify-between pt-8">
                <span className="text-xs text-[#77736d]">
                  {items.length} technologies
                </span>

                <ArrowUpRight
                  size={16}
                  className="text-[#77736d] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#d77b4d]"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
