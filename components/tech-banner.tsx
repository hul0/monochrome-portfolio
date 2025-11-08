"use client"

export function TechBanner() {
  const techItems = [
  "Android App Development",
  "Apache Administration",
  "C/C++ Programming",
  "Cloud Computing",
  "Cyber Threat Hunting",
  "Cybersecurity",
  "DevOps",
  "DevSecOps",
  "Docker",
  "Firewall Configuration",
  "Frontend Web Development",
  "Git",
  "GitHub",
  "Internet Security",
  "Jetpack Compose",
  "Kotlin",
  "Linux System Administration",
  "MySQL Database Management",
  "Network Administration",
  "Next.js",
  "NGINX Administration",
  "OSINT (Open Source Intelligence)",
  "Penetration Testing",
  "PostgreSQL Database Management",
  "Project Management and Planning",
  "Python Programming",
  "Red Teaming",
  "Rust Programming",
  "Shell Scripting",
  "SQL Injection Testing",
  "Web Application Security"
]


  return (
    <div className="bg-black border-t border-b border-white/10 overflow-hidden mt-20 md:mt-24">
      <div className="flex animate-slide">
        {/* First set of items */}
        <div className="flex gap-8 px-8 py-4 whitespace-nowrap">
          {techItems.map((item, index) => (
            <span
              key={index}
              className="text-white text-sm md:text-base font-medium opacity-70 hover:opacity-100 transition-opacity"
            >
              {item}
            </span>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex gap-8 px-8 py-4 whitespace-nowrap">
          {techItems.map((item, index) => (
            <span
              key={`dup-${index}`}
              className="text-white text-sm md:text-base font-medium opacity-70 hover:opacity-100 transition-opacity"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
