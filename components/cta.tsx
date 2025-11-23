"use client";

export function CTA() {
  return (
    <section id="contact" className="min-h-[70vh] flex items-center justify-center px-4 md:px-6 lg:px-8 py-20 relative">
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-16 relative z-10">
        
        {/* Profile Image Section */}
        <div className="flex justify-center lg:justify-end order-2 lg:order-1">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-all duration-500"></div>
            <div className="relative w-72 h-72 rounded-full p-2 glass border border-primary/30">
              <img
                src="/hulo-biral-cyber-security-pfp.jpeg"
                alt="Hulo Biral"
                className="w-full h-full object-cover rounded-full filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Text and CTA Section */}
        <div className="text-center lg:text-left space-y-8 order-1 lg:order-2">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase text-glow">
            READY TO <span className="text-primary">COLLAB?</span>
          </h2>
          <div className="glass px-6 py-4 rounded-3xl inline-block">
            <p className="text-xl text-gray-300 font-mono">
              Rayleigh! Wanna turn the world upside down together? <br/>
              <span className="text-primary text-sm font-bold mt-2 block">SECURE CONNECTION ESTABLISHED...</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-6">
            <a 
              href="https://wa.me/+919593035680"
              className="px-10 py-4 bg-primary text-black rounded-4xl font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300 shadow-[0_0_20px_rgba(255,0,0,0.4)]"
            >
              Join My Crew
            </a>
            
            <a 
              href="mailto:hulo@hulobiral.online"
              className="px-10 py-4 glass-button text-white rounded-4xl font-bold uppercase tracking-widest hover:text-primary transition-all duration-300"
            >
              Send Encrypted Mail
            </a>
          </div>
          
          <p className="text-xs text-secondary font-mono mt-8">
            // WARNING: NO PHISHING ATTEMPTS WILL BE TOLERATED
          </p>
        </div>
      </div>
    </section>
  );
}