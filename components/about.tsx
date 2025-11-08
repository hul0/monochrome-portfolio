export function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8 py-20 md:py-0 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 tracking-tighter">About</h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div className="space-y-6 md:space-y-8">
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              I'm a digital designer and developer with a passion for creating minimalist, functional interfaces. With
              over a decade of experience, I've worked with startups and established brands to bring their visions to
              life.
            </p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              My approach combines strategic thinking with aesthetic excellence, ensuring every pixel serves a purpose.
              I believe that great design is invisible—it simply works, elegantly and intuitively.
            </p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              When I'm not designing, I'm exploring new technologies, contributing to open-source projects, or enjoying
              the minimal art scene. Let's create something extraordinary together.
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-sm md:text-base font-semibold mb-4 tracking-wide uppercase opacity-60">Skills</h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {[
                  "UI Design",
                  "UX Strategy",
                  "Frontend Dev",
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind",
                  "Animation",
                  "Branding",
                  "Web3",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 md:px-4 py-2 border border-white/20 text-xs md:text-sm hover:border-white/60 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-semibold mb-4 tracking-wide uppercase opacity-60">Experience</h3>
              <div className="space-y-4 md:space-y-6">
                <div className="border-l border-white/20 pl-4 md:pl-6">
                  <p className="font-semibold text-base md:text-lg">Lead Design Director</p>
                  <p className="text-white/50 text-sm md:text-base">Digital Studio | 2021 - Present</p>
                </div>
                <div className="border-l border-white/20 pl-4 md:pl-6">
                  <p className="font-semibold text-base md:text-lg">Product Designer</p>
                  <p className="text-white/50 text-sm md:text-base">Tech Startup | 2018 - 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 md:mt-20 h-64 md:h-80 bg-white/5 border border-white/10 rounded overflow-hidden">
          <img
            src="/placeholder.svg?height=400&width=700"
            alt="Professional workspace"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
