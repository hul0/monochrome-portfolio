import type { Metadata } from "next"
import { Header } from "@/components/header"
import { TechBanner } from "@/components/tech-banner"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { HallOfFame } from "@/components/hallOfFame"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Hulo Biral - Cybersecurity | Ethical Hacking | The Great Cyber Era",
  description: "Start the Great Cyber era with Hulo Biral. How about we team up and turn this whole world upside down?",
  openGraph: {
    type: "website",
    url: "https://hulobiral.online",
    title: "Hulo Biral - Cybersecurity | The Great Cyber Era",
    description: "Start the Great Cyber era with Hulo Biral. How about we team up and turn this whole world upside down",
    images: [
      {
        url: "/og-image-hulo-biral-cyber-security.jpg",
        width: 1200,
        height: 630,
        alt: "The open graph image for hulo biral cyber security",
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <TechBanner />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <HallOfFame />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
