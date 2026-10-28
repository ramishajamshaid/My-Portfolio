import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  Menu,
  X,
  Code2,
} from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Experience', '#experience'],
    ['Contact', '#contact'],
  ]

  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#171715]/85 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-3"
          aria-label="Ramisha home"
        >
          {/* <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d77b4d] text-[#171715] shadow-lg shadow-[#d77b4d]/10 transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105">
            <Code2 size={21} strokeWidth={2.3} />
          </span> */}

          <span className="leading-tight">
            <span className="block text-[1.3rem] font-semibold tracking-wide text-[#f0ebe3] ">
              Ramisha<span className="text-[#d77b4d]">.dev</span>
            </span>
            {/* <span className="mt-1 block text-[10px] tracking-[0.16em] text-[#77736d]">
              WEB DEVELOPER
            </span> */}
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={`rounded-full px-3.5 py-2 text-[13px] transition-all duration-200 ${
                label === 'Contact'
                  ? 'ml-1 text-[#d77b4d] hover:bg-[#d77b4d]/10'
                  : 'text-[#aaa69e] hover:bg-white/[0.05] hover:text-[#f0ebe3]'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="mailto:ramishajamshaid@gmail.com"
          className="hidden items-center gap-2 rounded-full bg-[#d77b4d] px-4 py-2.5 text-sm font-medium text-[#171715] transition-all duration-300 hover:bg-[#efa37c] hover:shadow-lg hover:shadow-[#d77b4d]/10 md:inline-flex"
        >
          Let's talk
          <ArrowUpRight size={15} />
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[#eee8df] transition hover:border-[#d77b4d]/40 hover:text-[#d77b4d] md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Animated mobile navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-white/[0.07] md:hidden"
          >
            <div className="mx-auto max-w-7xl px-5 pb-5 pt-3 sm:px-8">
              <div className="rounded-2xl border border-white/[0.07] bg-[#201f1d] p-2">
                {links.map(([label, href], index) => (
                  <motion.a
                    key={label}
                    href={href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.035 }}
                    className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm text-[#c6c0b8] transition hover:bg-white/[0.04] hover:text-[#d77b4d]"
                  >
                    {label}
                    <ArrowUpRight size={15} className="opacity-40" />
                  </motion.a>
                ))}
              </div>

              <a
                href="mailto:ramishajamshaid@gmail.com"
                onClick={closeMenu}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#d77b4d] px-4 py-3 text-sm font-medium text-[#171715] transition hover:bg-[#efa37c]"
              >
                Let's work together
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar