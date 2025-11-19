"use client";

import { title } from "process";
import { MusicPlayer } from "./musicPlayer";
import { url } from "inspector";
import Image from "next/image";
import { useState } from "react";

const demoPlaylist = [
  // {
  //   title: "Crystal Castles - Crimewave",
  //   artist: "Crystal Castles",
  //   url: "/Crystal Castles - Crimewave (slowed + reverb) [gFmC6M0aeP8].mp3",
  // },
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
      
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark Overlay for text readability */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-100"
        >
          {/* Using a sample cyber/matrix style video background */}
          <source src="https://www.pexels.com/download/video/3141207/" type="video/mp4" />
        </video>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-balance leading-tight md:leading-tight lg:leading-tight text-white">
          Start the <span className="text-green-500">Great Cyber Era</span> with Hulo
        </h1>
        
        <p className="text-base md:text-lg lg:text-xl text-green-500/80 max-w-2xl mx-auto text-balance leading-relaxed md:leading-relaxed font-mono">
          "My name is Hulo. It's destiny, meeting you, I say. How about we team
          up and turn this whole world upside down?"
          <br /> 
          <span className="text-green-400 font-bold">Lets start The Great Cyber Era.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 md:pt-8">
          {/* Fixed: Removed <button> wrapping <a>. Applied button styles directly to <a> */}
          <a 
            href="#about" 
            rel="noopener noreferrer"
            className="px-8 py-3 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all duration-300 font-medium font-mono uppercase tracking-wider"
          >
            Inspect Me
          </a>
          
          <a 
            href="#contact" 
            rel="noopener noreferrer"
            className="px-8 py-3 bg-green-600 text-black hover:bg-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all duration-300 font-medium font-mono uppercase tracking-wider"
          >
            Join The Crew
          </a>
        </div>

        {/* Optimized Image */}
        <div className="pt-8 md:pt-12 flex justify-center">
          <div className="relative w-fit max-w-md h-fit md:h-fit bg-black border border-green-500/30 rounded overflow-hidden shadow-[0_0_30px_rgba(34,197,94,0.15)]">
            <Image
              src="/hulo-biral-cyber-security-great-cyber-era.jpg"
              alt="Start the great cyber era with Hulo Biral - Cybersecurity expert and hacker"
              className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
              height={300}
              width={400}
              priority={false}
            />
            {/* Scanline effect overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20"></div>
          </div>
        </div>

        <div className="pt-4 md:pt-8">
          <svg
            className="w-6 h-6 md:w-8 md:h-8 mx-auto animate-bounce text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Floating Music Player Button */}
      <button
        onClick={() => setIsPlayerOpen(!isPlayerOpen)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 p-3 md:p-4 bg-black text-green-500 border border-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:scale-110 hover:bg-green-900/20 transition-all duration-300"
        aria-label="Toggle music player"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      </button>

      {/* Floating Music Player Panel */}
      <div
        className={`fixed bottom-20 md:bottom-24 right-4 md:right-6 z-50 bg-black/95 backdrop-blur-md border border-green-500/30 rounded-lg shadow-[0_0_25px_rgba(34,197,94,0.1)] p-3 md:p-4 w-[calc(100vw-2rem)] max-w-[320px] md:max-w-[380px] transition-all duration-300 ${
          isPlayerOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex justify-between items-center mb-3 border-b border-green-500/20 pb-2">
          <p className="text-sm font-medium text-green-500 font-mono tracking-widest">SYSTEM_AUDIO</p>
          <button
            onClick={() => setIsPlayerOpen(false)}
            className="text-green-700 hover:text-green-400 transition-colors"
            aria-label="Close music player"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        
        {/* Wrapper to style inner MusicPlayer if it accepts className, otherwise container handles some styling */}
        <div className="[&_*]:text-green-500 [&_*]:border-green-500/30"> 
            <MusicPlayer
            playlist={demoPlaylist}
            autoPlay={false}
            showPlaylist={false}
            />
        </div>
      </div>
    </section>
  );
}