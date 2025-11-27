import type { Metadata } from "next"
import { Header } from "@/components/header"
import { TechBanner } from "@/components/tech-banner"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Certificates } from "@/components/certificates"
import { HallOfFame } from "@/components/hallOfFame"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Hulo Biral | Cybersecurity - Portfolio",
  description: "Start the Great Cyber era with Hulo Biral. My name is Roger. It's destiny, meeting you. How about we team up and turn this whole world upside down?",
  openGraph: {
    type: "website",
    url: "https://www.hulobiral.online",
    siteName: "Hulo Biral - Cybersecurity",
    title: "Hulo Biral | The Great Cyber Era",
    description: "Start the Great Cyber era with Hulo Biral.",
    images: [
      {
        url: "/og-image-hulo-biral-cyber-security.jpg",
        width: 1200,
        height: 630,
        alt: "Hulo Biral Cybersecurity",
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden bg-transparent text-foreground selection:bg-primary selection:text-white">
        <Hero />
        <TechBanner />
        <About />
        <Certificates />
        <HallOfFame />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}