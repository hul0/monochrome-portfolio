export function Work() {
  const projects = [
    {
      title: "Digital Transformation Platform",
      description:
        "A comprehensive platform designed to streamline enterprise workflows and boost productivity for teams of all sizes.",
      tags: ["UI/UX", "React", "Design System"],
    },
    {
      title: "E-Commerce Ecosystem",
      description:
        "Full-stack e-commerce solution with personalized recommendations, inventory management, and seamless checkout experience.",
      tags: ["Web App", "Backend", "Mobile"],
    },
    {
      title: "Brand Identity System",
      description:
        "Complete visual identity and design system for a global fintech company, including guidelines and component library.",
      tags: ["Branding", "Design System", "Guidelines"],
    },
  ]

  return (
    <section
      id="work"
      className="min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8 py-20 md:py-0 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-16 tracking-tighter">Featured Work</h2>
        <div className="space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-video md:aspect-video bg-white/5 border border-white/10 hover:border-white/30 transition-colors duration-300 mb-6 md:mb-8 overflow-hidden rounded">
                <img
                  src={`/placeholder.svg?height=400&width=700&query=${project.title} project showcase`}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 group-hover:opacity-75 transition-opacity">
                {project.title}
              </h3>
              <p className="text-base md:text-lg text-white/70 mb-4 md:mb-6 leading-relaxed max-w-2xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs md:text-sm text-white/50 border-b border-white/20 hover:border-white/60 transition-colors duration-300 pb-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
