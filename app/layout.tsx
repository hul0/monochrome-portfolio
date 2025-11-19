import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Geist_Mono, Geist_Mono as V0_Font_Geist_Mono } from 'next/font/google'
import { AlertTriangle, Skull, ShieldAlert } from "lucide-react"

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

function GlobalSecurityBanner() {
  // Content block repeated for seamless loop
  const BannerContent = () => (
    <div className="flex items-center gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 md:px-8 whitespace-nowrap">
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <Skull className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 animate-pulse text-black flex-shrink-0" />
        <span className="text-sm sm:text-lg md:text-2xl lg:text-4xl font-black tracking-wider md:tracking-widest uppercase">DO NOT CROSS</span>
      </div>
      <span className="text-sm sm:text-lg md:text-2xl lg:text-4xl font-light opacity-50">////////////////////////////////</span>
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-black flex-shrink-0" />
        <span className="text-sm sm:text-lg md:text-2xl lg:text-4xl font-black tracking-wider md:tracking-widest uppercase">SITE UNDER RED TEAM DEVELOPMENT</span>
      </div>
      <span className="text-sm sm:text-lg md:text-2xl lg:text-4xl font-light opacity-50">////////////////////////////////</span>
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-black flex-shrink-0" />
        <span className="text-sm sm:text-lg md:text-2xl lg:text-4xl font-black tracking-wider md:tracking-widest uppercase">AUTHORIZED PERSONNEL ONLY</span>
      </div>
      <span className="text-sm sm:text-lg md:text-2xl lg:text-4xl font-light opacity-50">////////////////////////////////</span>
    </div>
  )

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] h-[10vh] min-h-[60px] sm:h-[11vh] sm:min-h-[70px] md:h-[12vh] md:min-h-[80px] bg-red-600 text-black border-t-4 sm:border-t-[5px] md:border-t-[6px] border-red-900 shadow-[0_-5px_30px_rgba(220,38,38,0.4)] sm:shadow-[0_-8px_40px_rgba(220,38,38,0.45)] md:shadow-[0_-10px_50px_rgba(220,38,38,0.5)] flex items-center overflow-hidden select-none">
      {/* Grunge Texture Overlay */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_8px,rgba(0,0,0,0.1)_8px,rgba(0,0,0,0.1)_16px)] sm:bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.1)_10px,rgba(0,0,0,0.1)_20px)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)] pointer-events-none"></div>
      
      {/* Scrolling Content */}
      <div className="flex animate-banner-slide w-max">
        {/* Multiple instances for seamless looping */}
        <BannerContent />
        <BannerContent />
        <BannerContent />
        <BannerContent />
      </div>
    </div>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${_geistMono.className} font-sans antialiased bg-black text-white pb-[10vh] sm:pb-[11vh] md:pb-[12vh]`}>
        <div className="blur-[5px]">
          {children}
        </div>
        <GlobalSecurityBanner />
        <Analytics />
      </body>
    </html>
  )
}