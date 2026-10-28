import { ArrowRight, Mail } from 'lucide-react';
import {reveal} from '../animation/reveal'
import {motion} from 'framer-motion'

function Contact() {
  return (
    <section id="contact" className="border-t border-white/[0.07]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-[#d77b4d]/25 bg-[#211e1b] p-7 sm:p-12 md:p-16"
        >
          <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full bg-[#d77b4d]/10 blur-[80px]" />

          <p className="section-label mb-4">HAVE A PROJECT IN MIND?</p>
          <h2 className="relative max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Let's build something
            <span className="text-[#d77b4d]"> meaningful.</span>
          </h2>
          <p className="relative mt-5 max-w-lg text-sm leading-7 text-[#b0aaa1] sm:text-base">
            I'm open to web development internships, junior opportunities
            and freelance projects. I'd love to hear from you.
          </p>

          <a
            href="mailto:ramishajamshaid@gmail.com"
            className="relative mt-8 inline-flex items-center gap-3 rounded-full bg-[#d77b4d] px-6 py-3.5 text-sm font-semibold text-[#171715] transition hover:bg-[#e69267]"
          >
            <Mail size={17} />
            Get in touch
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact;