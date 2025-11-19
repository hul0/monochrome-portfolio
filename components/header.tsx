"use client"

import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-red-900/30 bg-black/90 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-widest hover:text-red-500 transition-colors font-mono uppercase">
          <span className="text-red-600">&gt;</span> Hulo_Biral
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer group"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-red-600 transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-4 h-0.5 bg-red-600 transition-opacity ${isOpen ? "opacity-0" : "group-hover:w-6 transition-all"}`} />
          <span className={`block w-6 h-0.5 bg-red-600 transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Work', 'Certificates', 'Services', 'Testimonials'].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-mono uppercase tracking-widest hover:text-red-500 hover-glitch transition-colors"
            >
              {item}
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-6 py-2 border border-red-600 text-red-500 hover:bg-red-600 hover:text-black transition-all duration-300 font-mono uppercase text-sm tracking-widest"
          >
            Initialize_Contact
          </Link>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-black border-b border-red-900/50 md:hidden animate-in slide-in-from-top-5">
            <div className="flex flex-col gap-4 p-6">
              {['About', 'Work', 'Certificates', 'Services', 'Testimonials'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-mono text-red-500/80 hover:text-red-500 border-l-2 border-transparent hover:border-red-500 pl-4 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-4 px-6 py-3 bg-red-900/20 border border-red-600 text-center text-red-500 font-mono uppercase"
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