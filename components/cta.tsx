export function CTA() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8 py-20 md:py-0 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
        {/* Profile Image Section */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            <img
              src="/hulo-biral-cyber-security-pfp.jpeg" // Replace with your actual PFP path, e.g., "/hulo-biral-pfp.jpeg"
              alt="Hulo Biral Cyber Security Profile Picture"
              className="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-full border-2 border-white/20 group-hover:border-white/40 transition-all duration-300 shadow-2xl group-hover:scale-105"
            />
          </div>
        </div>

        {/* Text and CTA Section */}
        <div className="text-center lg:text-left space-y-6 lg:space-y-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-balance leading-tight md:leading-tight lg:leading-tight">
            Ready to Collab?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/70 text-balance leading-relaxed">
            Rayleigh! Wanna turn the world upside down together?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 md:pt-8">
            <button className="px-8 py-3 bg-white text-black hover:opacity-90 transition-opacity duration-300 font-medium text-base md:text-lg group">
              <span className="flex items-center justify-center gap-2">
                <a href="https://wa.me/+919593035680">Join My Crew</a>
                <svg
                  className="h-4 w-4 group-hover:rotate-12 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>
            <button className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all duration-300 font-medium text-base md:text-lg group">
              <span className="flex items-center justify-center gap-2">
                <a href="mailto:hulo@hulobiral.online">Send a letter</a>
                <svg
                  className="h-4 w-4 group-hover:animate-bounce transition-transform"
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
              </span>
            </button>
          </div>
          <p className="text-sm text-white/50 italic">
            No phishing attempts pweaseee {":)"}
          </p>
        </div>
      </div>
    </section>
  );
}
