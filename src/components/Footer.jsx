function Footer() {
  return (
    <footer className="border-t border-white/[0.07]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-7 text-xs text-[#8e8981] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} Ramisha Jamshaid. Built with care.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/ramishajamshaid"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[#d77b4d]"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ramishajamshaid"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[#d77b4d]"
          >
            LinkedIn
          </a>
          <a href="#home" className="transition hover:text-[#d77b4d]">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;