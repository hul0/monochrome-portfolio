"use client"

import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-widest hover:text-primary transition-colors font-mono uppercase text-white">
          <span className="text-primary">&gt;</span> Hulo_Biral
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer group p-2 glass rounded-lg"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-primary transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-4">
          <div className="glass px-6 py-2 rounded-4xl flex items-center gap-6">
            {['About', 'Work', 'Certificates', 'Services', 'Testimonials'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-mono uppercase tracking-widest text-white/80 hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
          <Link
            href="#contact"
            className="px-6 py-2 bg-primary/80 hover:bg-primary text-black font-bold rounded-4xl backdrop-blur-md transition-all duration-300 font-mono uppercase text-sm tracking-widest"
          >
            Initialize_Contact
          </Link>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 glass border-b border-white/10 md:hidden">
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
                className="mt-2 px-6 py-3 bg-primary text-black font-bold rounded-4xl text-center font-mono uppercase"
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