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
    <section className="glass border-y border-white/5 py-8 relative z-10">
      <div className="flex flex-wrap justify-center gap-4 px-4 max-w-7xl mx-auto">
        {techItems.map((item, index) => (
          <span
            key={index}
            className="glass px-4 py-2 rounded-4xl text-white/60 text-xs font-mono font-bold uppercase tracking-wider hover:text-primary hover:bg-white/5 transition-all cursor-default border border-transparent hover:border-primary/30"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}