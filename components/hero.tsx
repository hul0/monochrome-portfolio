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
    <section className="min-h-screen flex items-center justify-center pt-20 md:pt-0 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-balance leading-tight md:leading-tight lg:leading-tight">
          Start the Great Cyber era with Hulo
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto text-balance leading-relaxed md:leading-relaxed">
          "My name is Hulo. It's destiny, meeting you, I say. How about we team up and turn this whole world upside down?" <br /> Lets start The Great Cyber Era.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 md:pt-8">
          <button className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all duration-300 font-medium">
            <a href="#about" rel="noopener noreferrer">
              Inspect Me
            </a>
          </button>
          <button className="px-8 py-3 bg-white text-black hover:opacity-90 transition-opacity duration-300 font-medium">
            <a href="#contact" rel="noopener noreferrer">
              Join The Crew
            </a>
          </button>
        </div>

        {/* Optimized Image */}
        <div className="pt-8 md:pt-12 flex justify-center">
          <div className="relative w-fit max-w-md h-fit md:h-fit bg-white/5 border border-white/10 rounded overflow-hidden">
            <Image
              src="/hulo-biral-cyber-security-great-cyber-era.jpg"
              alt="Start the great cyber era with Hulo Biral - Cybersecurity expert and hacker"
              className="object-cover"
              height={300}
              width={400}
              priority={false}
            />
          </div>
        </div>

        <div className="pt-4 md:pt-8">
          <svg
            className="w-6 h-6 md:w-8 md:h-8 mx-auto animate-bounce"
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
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 p-3 md:p-4 bg-white text-black rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
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

      {/* Floating Music Player Panel - Always mounted but visibility controlled */}
      <div
        className={`fixed bottom-20 md:bottom-24 right-4 md:right-6 z-50 bg-black/90 backdrop-blur-sm border border-white/10 rounded-lg shadow-2xl p-3 md:p-4 w-[calc(100vw-2rem)] max-w-[320px] md:max-w-[380px] transition-all duration-300 ${
          isPlayerOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex justify-between items-center mb-3">
          <p className="text-sm font-medium">Music Player</p>
          <button
            onClick={() => setIsPlayerOpen(false)}
            className="text-white/70 hover:text-white transition-colors"
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
        <MusicPlayer
          playlist={demoPlaylist}
          autoPlay={false}
          showPlaylist={false}
        />
      </div>
    </section>
  );
}
