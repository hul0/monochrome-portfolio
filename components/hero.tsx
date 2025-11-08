export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 md:pt-0 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-balance leading-tight md:leading-tight lg:leading-tight">
          Minimalist Design & Digital Innovation
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto text-balance leading-relaxed md:leading-relaxed">
          Creating exceptional digital experiences through clean, purposeful design and cutting-edge technology. Welcome
          to my creative portfolio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 md:pt-8">
          <button className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all duration-300 font-medium">
            View My Work
          </button>
          <button className="px-8 py-3 bg-white text-black hover:opacity-90 transition-opacity duration-300 font-medium">
            Get In Touch
          </button>
        </div>
        <div className="pt-8 md:pt-12">
          <div className="h-64 md:h-80 bg-white/5 border border-white/10 rounded overflow-hidden">
            <img
              src="/placeholder.svg?height=400&width=700"
              alt="Digital innovation concept"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="pt-4 md:pt-8">
          <svg
            className="w-6 h-6 md:w-8 md:h-8 mx-auto animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
