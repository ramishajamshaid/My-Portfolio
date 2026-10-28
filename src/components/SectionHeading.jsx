import { motion } from 'framer-motion'
import {reveal} from '../animation/reveal'
function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="mb-10 max-w-2xl"
    >
      <p className="section-label mb-3">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-[#f4f0e9] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-sm leading-7 text-[#a29e97] sm:text-base">
          {description}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeading;