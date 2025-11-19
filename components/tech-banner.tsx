"use client"

export function TechBanner() {
  const techItems = [
  "Android App Development", "Apache", "C/C++", "Cloud Computing", "Threat Hunting", "Cybersecurity",
  "DevSecOps", "Docker", "Firewalls", "Frontend", "Git", "GitHub", "Internet Security",
  "Jetpack Compose", "Kotlin", "Linux", "MySQL", "Network Admin", "Next.js", "NGINX",
  "OSINT", "Penetration Testing", "PostgreSQL", "Project Management", "Python", "Red Teaming",
  "Rust", "Shell Scripting", "SQL Injection", "Web Security"
]

  return (
    <div className="bg-red-950/10 border-y border-red-900/30 overflow-hidden mt-0 py-2">
      <div className="flex animate-slide">
        {/* First set of items */}
        <div className="flex gap-12 px-8 py-2 whitespace-nowrap">
          {techItems.map((item, index) => (
            <span
              key={index}
              className="text-red-500/50 text-sm font-mono font-bold uppercase tracking-wider hover:text-red-500 hover:text-shadow-red transition-all cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex gap-12 px-8 py-2 whitespace-nowrap">
          {techItems.map((item, index) => (
            <span
              key={`dup-${index}`}
              className="text-red-500/50 text-sm font-mono font-bold uppercase tracking-wider hover:text-red-500 hover:text-shadow-red transition-all cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}