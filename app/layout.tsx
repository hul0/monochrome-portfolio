import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Geist_Mono as FontGeistMono } from 'next/font/google'

// Initialize fonts
const geistMono = FontGeistMono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: "Hulo Biral : Cybersecurity | The Great Cyber Era",
  description: "Start the Great Cyber era with Hulo Biral.",
  icons: {
    icon: [{ url: "/hulo-biral-cyber-security-pfp.jpeg" }],
    apple: "/hulo-biral-cyber-security-pfp.jpeg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}