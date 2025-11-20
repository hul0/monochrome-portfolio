"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function TechBanner() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax x-axis movement based on scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const techItems = [
  "Android App Development", "Apache", "C/C++", "Cloud Computing", "Threat Hunting", "Cybersecurity",
  "DevSecOps", "Docker", "Firewalls", "Frontend", "Git", "GitHub", "Internet Security",
  "Jetpack Compose", "Kotlin", "Linux", "MySQL", "Network Admin", "Next.js", "NGINX",
  "OSINT", "Penetration Testing", "PostgreSQL", "Project Management", "Python", "Red Teaming",
  "Rust", "Shell Scripting", "SQL Injection", "Web Security"
]

  return (
    <section ref={containerRef} className="bg-red-950/10 border-y border-red-900/30 overflow-hidden mt-0 py-4 relative z-10">
      <motion.div 
        style={{ x, opacity }}
        className="flex"
      >
        {/* First set of items */}
        <div className="flex gap-12 px-8 whitespace-nowrap animate-slide">
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
        <div className="flex gap-12 px-8 whitespace-nowrap animate-slide">
          {techItems.map((item, index) => (
            <span
              key={`dup-${index}`}
              className="text-red-500/50 text-sm font-mono font-bold uppercase tracking-wider hover:text-red-500 hover:text-shadow-red transition-all cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}