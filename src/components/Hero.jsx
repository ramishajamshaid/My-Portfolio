import { motion } from 'framer-motion'
import {
    ArrowDownRight,
    ArrowUpRight,
    Code2,
    CodeXml,
    Mail,
    Sparkles,
    Terminal,
} from 'lucide-react'
import { reveal } from '../animation/reveal'

const technologies = [
    { name: 'React', angle: 0 },
    { name: 'Node.js', angle: 120 },
    { name: 'MongoDB', angle: 240 },
]

function Hero() {
    return (
        <section
            id="home"
            className="site-grid relative isolate overflow-hidden"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute -left-40 top-32 -z-10 h-80 w-80 rounded-full bg-[#c76b3c]/10 blur-[120px]" />
            <div className="pointer-events-none absolute right-0 top-20 -z-10 h-96 w-96 rounded-full bg-[#c76b3c]/[0.07] blur-[110px]" />

            <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">

                {/* LEFT CONTENT */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.12 } },
                    }}
                    className="relative z-10"
                >
                    <motion.div
                        variants={reveal}
                        className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d77b4d]/25 bg-[#d77b4d]/[0.07] px-4 py-2"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d77b4d] opacity-60" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d77b4d]" />
                        </span>
                        <span className="text-xs font-medium tracking-wide text-[#e5c2ad] sm:text-sm">
                            Open to internships & freelance
                        </span>
                    </motion.div>

                    <motion.p
                        variants={reveal}
                        className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#d77b4d] sm:text-sm"
                    >
                        <span className="h-px w-7 bg-[#d77b4d]" />
                        HELLO, I'M RAMISHA
                    </motion.p>

                    <motion.h1
                        variants={reveal}
                        className="max-w-3xl font-display text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-[#f4f0e9] sm:text-6xl md:text-7xl"
                    >
                        I turn ideas into
                        <span className="mt-2 block text-[#d77b4d]">
                            digital experiences.
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={reveal}
                        className="mt-7 max-w-xl text-base leading-8 text-[#a29e97] sm:text-lg"
                    >
                        I'm a web developer who enjoys building responsive,
                        user-friendly applications — from polished interfaces
                        to full-stack web experiences.
                    </motion.p>

                    <motion.div
                        variants={reveal}
                        className="mt-9 flex flex-wrap items-center gap-4"
                    >
                        <a
                            href="#projects"
                            className="group inline-flex items-center gap-3 rounded-full bg-[#d77b4d] px-6 py-3.5 text-sm font-semibold text-[#171715] transition duration-300 hover:-translate-y-1 hover:bg-[#e69267] hover:shadow-[0_10px_35px_-12px_rgba(215,123,77,0.65)]"
                        >
                            Explore my work
                            <ArrowDownRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                            />
                        </a>

                        <a
                            href="mailto:ramishajamshaid@gmail.com"
                            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-[#f4f0e9] transition duration-300 hover:-translate-y-1 hover:border-[#d77b4d]/60 hover:bg-white/4"
                        >
                            Let's talk
                            <ArrowUpRight
                                size={17}
                                className="text-[#d77b4d] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </a>
                    </motion.div>
                </motion.div>


                {/* RIGHT: ANIMATED PORTRAIT */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    className="relative mx-auto flex w-full max-w-lg flex-col items-center py-6 sm:py-10 lg:py-0"
                >
                    {/* Portrait and orbit animations */}
                    <div className="relative aspect-square w-full max-w-[420px]">
                        {/* Ambient glow */}
                        <div className="absolute inset-[15%] rounded-full bg-[#d77b4d]/15 blur-[55px]" />

                        {/* Outer rotating ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 38,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                            className="absolute inset-[3%] rounded-full border border-dashed border-[#d77b4d]/30"
                        >
                            <span className="absolute left-[17%] top-[13%] h-3 w-3 rounded-full bg-[#d77b4d] shadow-[0_0_18px_#d77b4d]" />
                            <span className="absolute bottom-[14%] right-[16%] h-2 w-2 rounded-full bg-[#e8c5ad] shadow-[0_0_14px_#e8c5ad]" />
                        </motion.div>

                        {/* Middle orbit */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{
                                duration: 24,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                            className="absolute inset-[10%] rounded-full border border-[#d77b4d]/30"
                        >
                            <span className="absolute -right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#d77b4d]/30 bg-[#211c19] text-[#d77b4d] shadow-lg">
                                <CodeXml size={17} />
                            </span>
                        </motion.div>

                        {/* Inner ring */}
                        <div className="absolute inset-[17%] rounded-full border border-white/10" />

                        {/* Portrait */}
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="absolute inset-[21%] overflow-hidden rounded-full border-2 border-[#d77b4d]/70 bg-[#24211e] shadow-[0_0_50px_-15px_rgba(215,123,77,0.35)]"
                        >
                            <img
                                src="/images/ramisha.jpeg"
                                alt="Ramisha Jamshaid"
                                className="h-full w-full object-cover object-center"
                            />

                            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#171715]/30 via-transparent to-[#d77b4d]/10" />
                        </motion.div>

                        {/* Orbiting dot */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                            className="absolute inset-0"
                        >
                            <span className="absolute left-1/2 top-[1%] h-2.5 w-2.5 rounded-full bg-[#e9b99e] shadow-[0_0_18px_#d77b4d]" />
                        </motion.div>

                        {/* Desktop floating badge: top left */}
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{
                                duration: 4.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="absolute left-[-5%] top-[18%] z-10 hidden items-center gap-2.5 rounded-2xl border border-white/10 bg-[#211f1c]/95 px-3 py-3 shadow-xl backdrop-blur-md sm:flex lg:left-[-8%]"
                        >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#d77b4d]/15 text-[#d77b4d]">
                                <Code2 size={19} />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-[#f4f0e9]">
                                    Web Development
                                </p>
                                <p className="mt-1 text-[10px] text-[#a29e97]">
                                    Build. Test. Improve.
                                </p>
                            </div>
                        </motion.div>

                        {/* Desktop floating badge: bottom right */}
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: 0.5,
                            }}
                            className="absolute bottom-[17%] right-[-5%] z-10 hidden items-center gap-2.5 rounded-2xl border border-white/10 bg-[#211f1c]/95 px-3 py-3 shadow-xl backdrop-blur-md sm:flex lg:right-[-8%]"
                        >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#d77b4d]/15 text-[#d77b4d]">
                                <Sparkles size={18} />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-[#f4f0e9]">
                                    Creative Developer
                                </p>
                                <p className="mt-1 text-[10px] text-[#a29e97]">
                                    Ideas into reality
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Mobile badges: below the portrait, never over the image */}
                    <div className="mt-5 grid w-full max-w-[420px] grid-cols-2 gap-3 sm:hidden">
                        <div className="flex min-w-0 items-center gap-2 rounded-xl border border-white/10 bg-[#211f1c] p-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#d77b4d]/15 text-[#d77b4d]">
                                <Code2 size={18} />
                            </div>
                            <div className="min-w-0">
                                <p className="text-[11px] font-semibold leading-4 text-[#f4f0e9]">
                                    Web Development
                                </p>
                                <p className="mt-1 text-[10px] leading-4 text-[#a29e97]">
                                    Build. Test. Improve.
                                </p>
                            </div>
                        </div>

                        <div className="flex min-w-0 items-center gap-2 rounded-xl border border-white/10 bg-[#211f1c] p-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#d77b4d]/15 text-[#d77b4d]">
                                <Sparkles size={18} />
                            </div>
                            <div className="min-w-0">
                                <p className="text-[11px] font-semibold leading-4 text-[#f4f0e9]">
                                    Creative Developer
                                </p>
                                <p className="mt-1 text-[10px] leading-4 text-[#a29e97]">
                                    Ideas into reality
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Scroll indicator */}
            <a
                href="#about"
                className="mx-auto mb-7 flex w-fit items-center gap-2 text-xs text-[#77736d] transition hover:text-[#d77b4d]"
            >
                <ArrowDownRight size={15} />
                Scroll to explore
            </a>
        </section>
    )
}

export default Hero
