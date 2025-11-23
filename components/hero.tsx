"use client";

import { MusicPlayer } from "./musicPlayer";
import Image from "next/image";
import { useState } from "react";
import { Scan, Target, Zap } from "lucide-react";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0 px-4 md:px-6 lg:px-8">
      
      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 md:space-y-12">
        <div className="space-y-6">
          <div className="inline-block glass px-6 py-2 rounded-4xl mb-4">
            <span className="text-primary font-mono text-xs md:text-sm tracking-[0.2em] uppercase flex items-center gap-2">
              <Zap className="w-3 h-3" /> System Breach Detected
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase drop-shadow-2xl text-glow">
            INITIATE <span className="text-primary">RED TEAM</span><br/>PROTOCOL
          </h1>
        </div>
        
        <div className="glass-card p-8 rounded-4xl max-w-3xl mx-auto">
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 font-mono leading-relaxed">
            "Identity: <span className="text-primary font-bold">Hulo Biral</span>. Status: Online. <br className="hidden md:block"/>
            It's destiny, meeting you. Let's dismantle the system and build a new world order."
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4 md:pt-8">
          <a 
            href="#about" 
            className="px-8 py-4 glass-button text-white rounded-4xl font-mono uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Scan className="w-4 h-4" /> Execute_Inspection
          </a>
          
          <a 
            href="#contact" 
            className="px-8 py-4 bg-primary hover:bg-primary-dark text-black rounded-4xl font-bold font-mono uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(255,0,0,0.4)] flex items-center justify-center gap-2"
          >
            <Target className="w-4 h-4" /> Join_The_Syndicate
          </a>
        </div>

        {/* STATIC IMAGE CONTAINER */}
        <div className="pt-12 flex justify-center relative z-20">
          <div className="relative group p-2 glass rounded-3xl">
            <div className="relative w-fit max-w-md overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/hulo-biral-cyber-security-great-cyber-era.jpg"
                alt="Hulo Biral Cyber Era"
                className="object-cover w-full h-full"
                height={300}
                width={400}
                priority={true}
              />
              
              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-2 flex justify-between items-center border-t border-white/10">
                 <span className="text-[10px] font-mono text-primary tracking-widest">LIVE FEED</span>
                 <span className="text-[10px] font-mono text-white">TARGET: HULO_001</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Music Player Toggle */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsPlayerOpen(!isPlayerOpen)}
          className="p-4 glass rounded-4xl text-primary hover:bg-white/10 transition-all duration-300 shadow-lg border border-primary/30"
        >
          {isPlayerOpen ? (
            <span className="font-mono text-xs font-bold">CLOSE</span>
          ) : (
            <div className="flex items-center gap-2">
               <span className="w-2 h-2 bg-primary rounded-full"></span>
               <span className="font-mono text-xs font-bold">AUDIO</span>
            </div>
          )}
        </button>
      </div>

      {/* Music Player Panel */}
      {isPlayerOpen && (
        <div className="fixed bottom-24 right-6 z-40">
          <div className="glass-card p-6 rounded-4xl w-80 border border-primary/20">
            <p className="text-primary font-mono text-xs mb-4 flex justify-between items-center">
              <span>:: AUDIO_PLAYER ::</span>
              <span className="text-white/50">● REC</span>
            </p>
            <div className="[&_*]:text-white [&_input]:accent-primary">
              <MusicPlayer playlist={demoPlaylist} autoPlay={false} showPlaylist={false} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}