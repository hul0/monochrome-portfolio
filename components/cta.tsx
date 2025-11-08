export function CTA() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8 py-20 md:py-0 border-t border-white/10">
      <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8 w-full">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-balance leading-tight md:leading-tight lg:leading-tight">
          Ready to Start Your Next Project?
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-white/70 text-balance leading-relaxed">
          Let's collaborate and create something remarkable. Whether you're launching a startup or transforming an
          established brand, I'm here to help you succeed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 md:pt-8">
          <button className="px-8 py-3 bg-white text-black hover:opacity-90 transition-opacity duration-300 font-medium text-base md:text-lg">
            Schedule a Call
          </button>
          <button className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all duration-300 font-medium text-base md:text-lg">
            Send an Email
          </button>
        </div>
      </div>
    </section>
  )
}
