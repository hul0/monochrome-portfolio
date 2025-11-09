import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Geist_Mono, Geist_Mono as V0_Font_Geist_Mono } from 'next/font/google'

// Initialize fonts
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })

export const metadata: Metadata = {
  title: "Hulo Biral : Cybersecurity | The Great Cyber Era",
  description: "Start the Great Cyber era with Hulo Biral. How about we team up and turn this whole world upside down?",
  icons: {
    icon: [
      {
        url: "/hulo-biral-cyber-security-pfp.jpeg"
      }
    ],
    apple: "/hulo-biral-cyber-security-pfp.jpeg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-black text-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
