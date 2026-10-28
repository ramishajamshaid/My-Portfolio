import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { reveal } from '../animation/reveal'
import { experiences } from '../data/experiences'
import { BriefcaseBusiness, ArrowUpRight } from 'lucide-react'

function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/[0.07] bg-[#1b1b19]"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-28">
        <SectionHeading
          eyebrow="EXPERIENCE"
          title="Learning by building."
          description="My practical experience contributing to web development projects."
        />

        <div className="relative mt-12 space-y-5">
          {experiences.map((item, index) => (
            <motion.article
              key={item.company}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl border border-white/8 bg-[#201f1d] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#d77b4d]/35 hover:bg-[#24221f] sm:p-7"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#d77b4d]/20 bg-[#d77b4d]/8">
                  <BriefcaseBusiness
                    size={22}
                    className="text-[#d77b4d]"
                  />
                </div>

                {/* Experience details */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-[#eee8df] sm:text-xl">
                        {item.role}
                      </h3>

                      <p className="mt-2 flex items-center gap-2 text-sm font-medium text-[#d77b4d]">
                        {item.company}
                        <ArrowUpRight
                          size={14}
                          className="opacity-60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                        />
                      </p>
                    </div>

                    <span className="w-fit shrink-0 rounded-full border border-white/8 bg-white/3 px-3 py-1.5 font-mono text-xs text-[#a29e97]">
                      {item.period}
                    </span>
                  </div>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#a29e97]">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-7 right-7 h-px origin-left scale-x-0 bg-linear-to-r from-[#d77b4d]/60 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
