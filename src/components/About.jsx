import { motion } from 'framer-motion'
import {
    ArrowDownToLine,
    ArrowUpRight,
    GraduationCap,
    MapPin,
    Code2,
    CalendarDays,
} from 'lucide-react'
import SectionHeading from './SectionHeading'
import { reveal } from '../animation/reveal'

function About() {
    return (
        <section id="about" className="relative overflow-hidden border-t border-white/[0.07]">
            <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">

                <SectionHeading
                    eyebrow="ABOUT ME"
                    title="A bit about who I am."
                    description="My background, my journey into development, and the things I love building."
                />

                <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20">

                    {/* LEFT: INTRODUCTION */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.12 } },
                        }}
                    >
                        <motion.div variants={reveal} className="flex items-center gap-3">
                            <span className="h-px w-8 bg-[#d77b4d]" />
                            <span className="text-xs font-semibold tracking-[0.22em] text-[#d77b4d]">
                                THE PERSON BEHIND THE CODE
                            </span>
                        </motion.div>

                        <motion.h3
                            variants={reveal}
                            className="mt-6 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight text-[#f4f0e9] sm:text-4xl md:text-5xl"
                        >
                            Ramisha Jamshaid
                            <span className="mt-2 block text-[#d77b4d]">
                                Full-Stack Web Developer.
                            </span>
                        </motion.h3>

                        <motion.p
                            variants={reveal}
                            className="mt-7 max-w-xl text-base leading-8 text-[#aaa69e] sm:text-lg"
                        >
                            I'm an Information Technology graduate passionate about building useful, user-friendly web applications. I enjoy creating responsive interfaces and connecting them with reliable backend functionality.
                        </motion.p>

                        <motion.p
                            variants={reveal}
                            className="mt-5 max-w-xl text-base leading-8 text-[#aaa69e] sm:text-lg"
                        >
                            Through personal projects and web development internships, I've gained hands-on experience across the stack. I'm focused on writing clean code and continuously improving my development skills.
                        </motion.p>

                        <motion.div
                            variants={reveal}
                            className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#a29e97]"
                        >
                            <span className="inline-flex items-center gap-2">
                                <MapPin size={16} className="text-[#d77b4d]" />
                                Hyderabad, Pakistan
                            </span>

                            <span className="inline-flex items-center gap-2">
                                <Code2 size={16} className="text-[#d77b4d]" />
                                MERN Stack
                            </span>
                        </motion.div>

                        <motion.div variants={reveal} className="mt-9 flex flex-wrap gap-4">
                            <a
                                href="/public/Ramisha_Jamshaid_Web_Developer_CV.pdf"
                                download="Ramisha-Jamshaid-CV.pdf"
                                className="group inline-flex items-center gap-1.5 sm:gap-2.5 rounded-full bg-[#d77b4d] px-4 py-2.5 sm:px-6 sm:py-3.5 text-sm font-semibold text-[#171715] transition hover:-translate-y-0.5 hover:bg-[#e69267]"
                            >
                                <ArrowDownToLine size={17} />
                                Download my CV
                            </a>

                            <a
                                href="#contact"
                                className="group inline-flex items-center gap-1.5 sm:gap-2.5 rounded-full border border-white/15 px-4 py-2.5 sm:px-6 sm:py-3.5 text-sm font-medium text-[#f4f0e9] transition hover:border-[#d77b4d]/50"
                            >
                                Get in touch
                                <ArrowUpRight
                                    size={17}
                                    className="text-[#d77b4d] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT: EDUCATION */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.15 } },
                        }}
                        className="relative"
                    >
                        <motion.div
                            variants={reveal}
                            className="mb-6 flex items-center justify-between"
                        >
                            <h3 className="font-display text-lg font-semibold text-[#f4f0e9]">
                                Education
                            </h3>
                            <span className="font-mono text-xs text-[#77736d]">01 / 01</span>
                        </motion.div>

                        <motion.article
                            variants={reveal}
                            className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#201e1b] p-6 sm:p-8"
                        >
                            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#d77b4d]/10 blur-[65px]" />

                            <div className="relative">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d77b4d]/20 bg-[#d77b4d]/10 text-[#d77b4d]">
                                        <GraduationCap size={25} />
                                    </div>

                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-[#aaa69e]">
                                        <CalendarDays size={13} />
                                        2022 — 2026
                                    </span>
                                </div>

                                <p className="mt-7 text-xs font-medium uppercase tracking-[0.18em] text-[#d77b4d]">
                                    Bachelor's Degree
                                </p>

                                <h4 className="mt-3 font-display text-2xl font-semibold leading-snug text-[#f4f0e9] sm:text-3xl">
                                    Information Technology
                                </h4>

                                <p className="mt-3 text-sm leading-6 text-[#aaa69e]">
                                    University of Sindh, Jamshoro
                                </p>

                                <div className="my-7 h-px bg-white/9" />

                                <div className="flex items-end justify-between gap-4">
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.15em] text-[#8e8981]">
                                            Academic performance
                                        </p>
                                        <p className="mt-2 text-sm text-[#c4beb5]">
                                            Cumulative GPA
                                        </p>
                                    </div>

                                    <div className="text-right shrink-0">
                                        <span className="font-display text-2xl sm:text-4xl font-semibold tracking-tight text-[#d77b4d]">
                                            3.53
                                        </span>
                                        <span className="ml-1 text-sm text-[#8e8981]">/ 4.00</span>
                                    </div>
                                </div>

                                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '88.25%' }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                                        className="h-full rounded-full bg-[#d77b4d]"
                                    />
                                </div>
                            </div>
                        </motion.article>

                        {/* Small detail underneath */}
                        <motion.div
                            variants={reveal}
                            className="mt-5 flex items-start gap-3 px-1"
                        >
                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#d77b4d]" />
                            <p className="text-sm leading-6 text-[#8e8981]">
                                Combining my IT foundation with practical experience in
                                frontend and backend web development.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
