"use client";

export function Testimonials() {
  return (
    <section id="testimonials" className="min-h-[50vh] flex items-center justify-center px-4 md:px-6 lg:px-8 py-24">
      <div className="max-w-5xl mx-auto w-full text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tighter text-foreground uppercase text-glow">
          CLIENT <span className="text-primary">LOGS</span>
        </h2>

        {/* Empty State */}
        <div className="glass-card rounded-4xl p-16 relative overflow-hidden border border-primary/20 hover:border-primary/50 transition-colors">
          <div className="space-y-8 relative z-10">
            <div className="text-6xl text-primary/30 font-serif">"</div>
            <p className="text-3xl font-bold text-white">
              Oops! No transmission data found.
            </p>
            <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
              Be the first to initiate a handshake. Share your experience working with me.
            </p>
          </div>

          <div className="mt-10">
            <a
              href="mailto:hulo@hulobiral.online?subject=Testimonial for Hulo Biral"
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-4xl font-bold uppercase font-mono hover:bg-white hover:text-primary transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              Submit_Feedback
            </a>
          </div>
          
          <p className="text-xs text-primary/70 mt-8 font-mono tracking-wider">
             // DATA WILL BE ENCRYPTED AND STORED SECURELY
          </p>
        </div>
      </div>
    </section>
  )
}