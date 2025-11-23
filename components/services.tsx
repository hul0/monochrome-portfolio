"use client";

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
      title: "Security Hardening",
      description: "Firewalls, IDS/IPS, Encryption & Blue Team defense implementations."
    }
  ];

  return (
    <section id="services" className="min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8 py-24">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-20 tracking-tighter text-foreground uppercase text-center text-glow">
          <span className="text-primary">Services</span> Offered
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-3xl hover:bg-primary/5 transition-all duration-300 group border-primary/10"
            >
              {/* Fixed glow added to icon container */}
              <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center mb-6 border border-primary/20 shadow-[0_0_15px_rgba(168,85,247,0.25)] group-hover:border-primary group-hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all">
                <TerminalSquare className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary font-mono transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-mono group-hover:text-white/80 transition-colors">
                &gt; {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-24 glass-card rounded-4xl overflow-hidden border border-primary/30 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <div className="flex flex-col items-center gap-8 p-10 md:flex-row md:gap-16">
                <div className="relative w-full shrink-0 overflow-hidden md:w-80 rounded-3xl border border-white/10 group shadow-lg">
                  <img
                      src="/hulo-biral-cyber-security-transition-i-need.jpeg"
                      alt="Transition"
                      className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-white mb-4 text-glow">
                        The Transition I Need
                    </h2>
                    <p className="text-gray-300 font-mono text-base leading-relaxed">
                        "Every system has a flaw. I am just looking for the right exploit to upgrade my career."
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}