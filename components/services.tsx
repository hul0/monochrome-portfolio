export function Services() {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "Strategic design solutions that combine aesthetics with functionality, creating intuitive user experiences.",
    },
    {
      title: "Web Development",
      description:
        "High-performance web applications built with modern technologies and optimized for speed and accessibility.",
    },
    {
      title: "Design Systems",
      description:
        "Scalable design systems and component libraries that ensure consistency across your digital products.",
    },
    {
      title: "Brand Strategy",
      description: "Comprehensive branding solutions including identity design, messaging, and visual guidelines.",
    },
    {
      title: "Animation & Interaction",
      description:
        "Thoughtful micro-interactions and animations that enhance user engagement without compromising performance.",
    },
    {
      title: "Consultation",
      description:
        "Expert guidance on digital strategy, product development, and organizational design thinking practices.",
    },
  ]

  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8 py-20 md:py-0 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-16 tracking-tighter">Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-white/10 hover:border-white/40 transition-colors duration-300 p-6 md:p-8 group"
            >
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 group-hover:opacity-75 transition-opacity">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-white/70 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 md:mt-20 h-64 md:h-80 bg-white/5 border border-white/10 rounded overflow-hidden">
          <img
            src="/placeholder.svg?height=400&width=700"
            alt="Services illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
