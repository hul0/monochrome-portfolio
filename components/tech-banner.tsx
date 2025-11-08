"use client"

export function TechBanner() {
  const techItems = [
    "React",
    "Node.js",
    "Python",
    "Docker",
    "AWS",
    "PostgreSQL",
    "TypeScript",
    "Next.js",
    "Cybersecurity",
    "Linux",
    "Git",
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
