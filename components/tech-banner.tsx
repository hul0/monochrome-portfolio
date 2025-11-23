"use client"

export function TechBanner() {
  const techItems = [
    "Android App Development", "Apache", "C/C++", "Cloud Computing", "Threat Hunting", "Cybersecurity",
    "DevSecOps", "Docker", "Firewalls", "Frontend", "Git", "GitHub", "Internet Security",
    "Jetpack Compose", "Kotlin", "Linux", "MySQL", "Network Admin", "Next.js", "NGINX",
    "OSINT", "Penetration Testing", "PostgreSQL", "Project Management", "Python", "Red Teaming",
    "Rust", "Shell Scripting", "SQL Injection", "Web Security"
  ];

  return (
    <section className="glass border-y border-primary/20 py-8 relative z-10 overflow-hidden bg-black/20">
      <div className="flex animate-banner-slide gap-8">
        {/* Original List */}
        <div className="flex gap-8 items-center">
          {techItems.map((item, index) => (
            <span
              key={`a-${index}`}
              className="glass px-6 py-3 rounded-4xl text-white/70 text-sm font-mono font-bold uppercase tracking-wider hover:text-primary hover:bg-primary/10 transition-all cursor-default border border-white/5 hover:border-primary/50 whitespace-nowrap hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
            >
              {item}
            </span>
          ))}
        </div>
        {/* Duplicate List for Seamless Loop */}
        <div className="flex gap-8 items-center">
          {techItems.map((item, index) => (
            <span
              key={`b-${index}`}
              className="glass px-6 py-3 rounded-4xl text-white/70 text-sm font-mono font-bold uppercase tracking-wider hover:text-primary hover:bg-primary/10 transition-all cursor-default border border-white/5 hover:border-primary/50 whitespace-nowrap hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}