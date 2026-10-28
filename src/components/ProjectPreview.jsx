
function ProjectPreview({ color, number }) {
  const previews = {
    tidy: {
      image: '/images/tidynote.jpg',
      alt: 'TidyNote notes and task management application',
    },
    cartora: {
      image: '/images/cartora.jpg',
      alt: 'Cartora e-commerce website',
    },
    movie: {
      image: '/images/moviedex.jpg',
      alt: 'MovieDex movie discovery website',
    },
  }

  const preview = previews[color]

  if (!preview) return null

  return (
    <div className="group relative h-48 overflow-hidden border-b border-white/[0.07] bg-[#1c1b19] sm:h-56">
      <img
        src={preview.image}
        alt={preview.alt}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

      <span className="absolute bottom-3 right-4 font-mono text-xs text-white/80">
        {number} / 03
      </span>
    </div>
  )
}

export default ProjectPreview
