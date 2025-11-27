"use client"

import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent ">
      <nav className="relative glass-card rounded-4xl max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between backdrop-blur-2xl">
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-widest hover:text-primary transition-colors font-mono uppercase text-foreground text-glow">
          <span className="text-primary">&gt;</span> Hulo
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden hidden flex flex-col gap-1.5 cursor-pointer group p-2 glass-card rounded-lg border-primary/20"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-primary transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-4">
          <div className="glass-card px-6 py-2 rounded-4xl flex items-center gap-6 border-primary/10 bg-black/20">
            {['About', 'Certificates', 'Services', 'Testimonials'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-mono uppercase tracking-widest text-white/70 hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
              >
                {item}
              </Link>
            ))}
          </div>
          <Link
            href="#contact"
            className="px-6 glass-card py-2 bg-primary text-white font-bold rounded-4xl backdrop-blur-md transition-all duration-300 font-mono uppercase text-sm tracking-widest shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:-translate-y-0.5"
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div 
            className="absolute top-full left-0 right-0 glass border-b border-primary/10 md:hidden bg-background/95"
            style={{
              WebkitBackdropFilter: 'blur(20px)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="flex flex-col gap-2 p-6">
              {['About', 'Work', 'Certificates', 'Services', 'Testimonials'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-mono text-white/80 hover:text-primary glass p-3 rounded-4xl text-center transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-2 px-6 py-3 bg-primary text-white font-bold rounded-4xl text-center font-mono uppercase shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Initialize_Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
