export function Testimonials() {
  // const testimonials = [
  //   {
  //     quote:
  //       "Their design approach transformed our product vision into reality. The attention to detail and user-centric thinking was exceptional.",
  //     author: "Sarah Chen",
  //     title: "CEO at TechVenture",
  //   },
  //   {
  //     quote:
  //       "Working with this designer elevated our brand identity. Clean, sophisticated, and exactly what we needed to stand out.",
  //     author: "Marcus Johnson",
  //     title: "Founder at Creative Labs",
  //   },
  //   {
  //     quote:
  //       "A true professional who delivers on time, on budget, and with exceptional quality. Highly recommended for any ambitious project.",
  //     author: "Elena Rodriguez",
  //     title: "Product Director at InnovateCo",
  //   },
  // ]

  return (
    <section
      id="testimonials"
      className="min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8 py-20 md:py-0 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-16 tracking-tighter">
          Testimonials
        </h2>

        {/* Empty State */}
        <div className="border border-white/10 rounded-lg p-8 md:p-12 lg:p-16 text-center space-y-6 md:space-y-8 hover:border-white/20 transition-colors duration-300">
          <div className="space-y-4">
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90">
              Oops! I don't have any testimonials yet
            </p>
            <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              But you can be the first! Share your experience working with me, and your name will be featured right here ;)
            </p>
          </div>

          <a
            href="mailto:hulo@hulobiral.online?subject=Testimonial for Hulo Biral&body=Hi Hulo,%0D%0A%0D%0AI'd like to share my testimonial:%0D%0A%0D%0A"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-lg text-base md:text-lg font-medium transition-all duration-300 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Send Your Testimonial
          </a>

          <p className="text-sm md:text-base text-white/40 italic">
            Your feedback helps others understand hulo's works {"<3"}
          </p>
        </div>

        {/* Commented Grid Layout for when you have testimonials */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border border-white/10 p-6 md:p-8 space-y-4 md:space-y-6 hover:border-white/30 transition-colors duration-300"
            >
              <p className="text-base md:text-lg text-white/80 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-white/10 pt-4 md:pt-6">
                <p className="font-semibold text-base md:text-lg">{testimonial.author}</p>
                <p className="text-sm md:text-base text-white/50">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
