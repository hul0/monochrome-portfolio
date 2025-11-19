"use client";

import { MusicPlayer } from "./musicPlayer";
import Image from "next/image";
import { useState } from "react";

const demoPlaylist = [
  {
    title: "Six Days",
    artist: "Unknown",
    url: "/Six_Days__Remix_(256k).mp3",
  },
];

export function Hero() {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 md:pt-0 px-4 md:px-6 lg:px-8">
      
      {/* Background Grid & Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1a0000_1px,transparent_1px),linear-gradient(to_bottom,#1a0000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Video Background (Optional - kept from original but with red tint overlay) */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-screen">
         <div className="absolute inset-0 bg-red-950/50 mix-blend-multiply z-10" />
         {/* Placeholder for video if needed, otherwise the grid serves as bg */}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 md:space-y-12">
        <div className="space-y-4">
          <div className="inline-block border border-red-600/30 bg-red-950/10 px-3 py-1 rounded-none backdrop-blur-md mb-4">
            <span className="text-red-500 font-mono text-xs md:text-sm tracking-[0.2em] uppercase animate-pulse">
              ● System Breach Detected
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase mix-blend-difference">
            INITIATE <span className="text-red-600 text-shadow-red">RED TEAM</span><br/>PROTOCOL
          </h1>
        </div>
        
        <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto font-mono leading-relaxed border-l-2 border-red-600 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
          "Identity: <span className="text-red-500 font-bold text-shadow-red">Hulo Biral</span>. Status: <span className="text-green-400 font-bold text-shadow-green-600">Online</span> <br />
          It's destiny, meeting you. Let's dismantle the system and build a new world order."
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4 md:pt-8">
          <a 
            href="#about" 
            className="group relative px-8 py-4 bg-transparent overflow-hidden border border-red-600 text-red-600 font-mono uppercase tracking-widest hover:text-black transition-all duration-300"
          >
            <span className="absolute inset-0 w-0 bg-red-600 transition-all duration-[250ms] ease-out group-hover:w-full"></span>
            <span className="relative">Execute_Inspection</span>
          </a>
          
          <a 
            href="#contact" 
            className="group relative px-8 py-4 bg-red-600 text-black font-bold font-mono uppercase tracking-widest border border-red-600 hover:bg-black hover:text-red-600 transition-all duration-300 box-glow"
          >
            <span className="relative">Join_The_Syndicate</span>
          </a>
        </div>

        {/* Optimized Image with Cyber Frame */}
        <div className="pt-12 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-red-600 opacity-30 blur-lg animate-pulse"></div>
            <div className="relative w-fit max-w-md bg-black border border-red-600 p-1">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500 -mt-2 -ml-2"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500 -mb-2 -mr-2"></div>
              <Image
                src="/hulo-biral-cyber-security-great-cyber-era.jpg"
                alt="Hulo Biral Cyber Era"
                className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0"
                height={300}
                width={400}
                priority={true}
              />
              {/* Scanline */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <svg
            className="w-6 h-6 md:w-8 md:h-8 mx-auto animate-bounce text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Floating Music Player */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsPlayerOpen(!isPlayerOpen)}
          className="p-3 bg-black text-red-600 border border-red-600 shadow-[0_0_15px_rgba(255,0,0,0.3)] hover:bg-red-950 transition-all duration-300 rounded-none"
        >
          {isPlayerOpen ? (
            <span className="font-mono text-xs">CLOSE_AUDIO</span>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" /></svg>
          )}
        </button>
      </div>

      {/* Music Player Panel */}
      <div
        className={`fixed bottom-20 right-6 z-40 transition-all duration-500 transform ${
          isPlayerOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <div className="border border-red-600 bg-black/95 p-4 w-80 box-glow">
          <p className="text-red-600 font-mono text-xs mb-2 border-b border-red-900 pb-1">:: SYSTEM_AUDIO_PLAYER ::</p>
          <div className="[&_*]:text-red-500 [&_input]:accent-red-600">
            <MusicPlayer playlist={demoPlaylist} autoPlay={false} showPlaylist={false} />
          </div>
        </div>
      </div>
    </section>
  );
}