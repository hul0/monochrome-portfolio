export function CTA() {
  return (
    <section
      id="contact"
      className="min-h-[70vh] flex items-center justify-center px-4 md:px-6 lg:px-8 py-20 bg-black border-t border-red-900/30 relative overflow-hidden"
    >
      {/* Bg Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative z-10">
        {/* Profile Image Section */}
        <div className="flex justify-center lg:justify-end order-2 lg:order-1">
          <div className="relative group">
            <div className="absolute -inset-1 bg-red-600 rounded-full opacity-20 group-hover:opacity-50 blur-md transition-all duration-500"></div>
            <img
              src="/hulo-biral-cyber-security-pfp.jpeg"
              alt="Hulo Biral"
              className="relative w-64 h-64 object-cover rounded-full border-4 border-red-900 group-hover:border-red-500 transition-all duration-300 grayscale group-hover:grayscale-0"
            />
          </div>
        </div>

        {/* Text and CTA Section */}
        <div className="text-center lg:text-left space-y-8 order-1 lg:order-2">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase">
            READY TO <span className="text-red-600 hover-glitch">COLLAB?</span>
          </h2>
          <p className="text-xl text-gray-400 font-mono">
            Rayleigh! Wanna turn the world upside down together? <br/>
            <span className="text-red-500 text-sm">SECURE CONNECTION ESTABLISHED...</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
            <a 
              href="https://wa.me/+919593035680"
              className="px-8 py-4 bg-red-600 text-black font-bold uppercase tracking-widest hover:bg-white hover:text-red-600 transition-all duration-300 skew-x-[-10deg]"
            >
              <span className="block skew-x-[10deg]">Join My Crew</span>
            </a>
            
            <a 
              href="mailto:hulo@hulobiral.online"
              className="px-8 py-4 bg-transparent border border-white text-white font-bold uppercase tracking-widest hover:border-red-600 hover:text-red-600 transition-all duration-300 skew-x-[-10deg]"
            >
              <span className="block skew-x-[10deg]">Send Encrypted Mail</span>
            </a>
          </div>
          
          <p className="text-xs text-red-800 font-mono mt-8">
            // WARNING: NO PHISHING ATTEMPTS WILL BE TOLERATED
          </p>
        </div>
      </div>
    </section>
  );
}