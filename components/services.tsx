import { TerminalSquare } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Frontend Web Development",
      description: "High quality, responsive Frontend architectures.",
    },
    {
      title: "Full Stack Web Development",
      description: "High-performance web applications built with Next.js and modern tech.",
    },
    {
      title: "Search Engine Optimization",
      description: "Tactical SEO strategies to dominate search rankings.",
    },
    {
      title: "App Development",
      description: "Efficient, impactful Android applications using Kotlin/Compose.",
    },
    {
      title: "Cybersecurity Consultant",
      description: "Strategic guidance to fortify digital assets against threats.",
    },
    {
      title: "Penetration Testing",
      description: "Simulated attacks to expose and patch vulnerabilities.",
    },
    {
      title:"Security Hardening",
      description:"Firewalls, IDS/IPS, Encryption & Blue Team defense implementations."
    }
  ];

  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8 py-20 bg-black border-t border-red-900/30"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-16 tracking-tighter text-white uppercase text-center">
          <span className="text-red-600">Services</span> Offered
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-black border border-red-900/30 p-6 hover:border-red-600 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <TerminalSquare className="w-8 h-8 text-red-800 group-hover:text-red-500 mb-4 transition-colors" />
              
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-500 font-mono">
                {service.title}
              </h3>
              <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed font-mono">
                &gt; {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 group relative overflow-hidden border border-red-900/30 bg-red-950/5 hover:border-red-600 transition-all duration-300">
            <div className="flex flex-col items-center gap-6 p-8 md:flex-row md:gap-12">
                <div className="relative w-full shrink-0 overflow-hidden md:w-80 border border-red-900/50 group-hover:border-red-500 transition-colors">
                <img
                    src="/hulo-biral-cyber-security-transition-i-need.jpeg"
                    alt="Transition"
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                        The Transition I Need
                    </h2>
                    <p className="text-gray-400 font-mono text-sm">
                        "Every system has a flaw. I am just looking for the right exploit to upgrade my career."
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}