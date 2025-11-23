import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Poppins } from 'next/font/google'

// Initialize Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
  display: 'swap',
})

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
      <body className={`${poppins.variable} font-sans antialiased bg-background text-foreground selection:bg-primary selection:text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}