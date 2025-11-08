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
  title: "Modern Portfolio",
  description: "A minimalist monochrome portfolio showcasing exceptional design and development work.",
  openGraph: {
    type: "website",
    url: "https://portfolio.example.com",
    title: "Modern Portfolio",
    description: "A minimalist monochrome portfolio showcasing exceptional design and development work.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Modern Portfolio",
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
