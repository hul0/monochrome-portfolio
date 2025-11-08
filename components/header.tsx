"use client"

import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6 flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight hover:opacity-75 transition-opacity">
          Portfolio
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer hover:opacity-75 transition-opacity"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          <Link href="#about" className="text-sm hover:opacity-75 transition-opacity">
            About
          </Link>
          <Link href="#work" className="text-sm hover:opacity-75 transition-opacity">
            Work
          </Link>
          <Link href="#services" className="text-sm hover:opacity-75 transition-opacity">
            Services
          </Link>
          <Link href="#testimonials" className="text-sm hover:opacity-75 transition-opacity">
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="px-6 py-2 border border-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-black border-b border-white/10 md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link
                href="#about"
                className="text-sm hover:opacity-75 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#work"
                className="text-sm hover:opacity-75 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                Work
              </Link>
              <Link
                href="#services"
                className="text-sm hover:opacity-75 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#testimonials"
                className="text-sm hover:opacity-75 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="px-6 py-2 border border-white hover:bg-white hover:text-black transition-all duration-300 inline-block"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
