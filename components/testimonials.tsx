export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Their design approach transformed our product vision into reality. The attention to detail and user-centric thinking was exceptional.",
      author: "Sarah Chen",
      title: "CEO at TechVenture",
    },
    {
      quote:
        "Working with this designer elevated our brand identity. Clean, sophisticated, and exactly what we needed to stand out.",
      author: "Marcus Johnson",
      title: "Founder at Creative Labs",
    },
    {
      quote:
        "A true professional who delivers on time, on budget, and with exceptional quality. Highly recommended for any ambitious project.",
      author: "Elena Rodriguez",
      title: "Product Director at InnovateCo",
    },
  ]

  return (
    <section
      id="testimonials"
      className="min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8 py-20 md:py-0 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-16 tracking-tighter">Testimonials</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border border-white/10 p-6 md:p-8 space-y-4 md:space-y-6 hover:border-white/30 transition-colors duration-300"
            >
              <p className="text-base md:text-lg text-white/80 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="border-t border-white/10 pt-4 md:pt-6">
                <p className="font-semibold text-base md:text-lg">{testimonial.author}</p>
                <p className="text-sm md:text-base text-white/50">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
