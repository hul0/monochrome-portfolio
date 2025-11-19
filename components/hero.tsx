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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 md:pt-0 px-4 md:px-6 lg:px-8">
      
      {/* Background Grid & Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1a0000_1px,transparent_1px),linear-gradient(to_bottom,#1a0000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Video Background (Optional) */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-screen">
         <div className="absolute inset-0 bg-red-950/50 mix-blend-multiply z-10" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 md:space-y-12">
        <div className="space-y-4">
          <div className="inline-block border border-red-600/30 bg-red-950/10 px-3 py-1 rounded-none backdrop-blur-md mb-4">
            <span className="text-red-500 font-mono text-xs md:text-sm tracking-[0.2em] uppercase animate-pulse flex items-center gap-2">
              <Zap className="w-3 h-3" /> System Breach Detected
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase mix-blend-difference">
            INITIATE <span className="text-red-600 text-shadow-red">RED TEAM</span><br/>PROTOCOL
          </h1>
        </div>
        
        <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto font-mono leading-relaxed border-l-2 border-red-600 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
          "Identity: <span className="text-red-500 font-bold">Hulo Biral</span>. Status: Online. <br className="hidden md:block"/>
          It's destiny, meeting you. Let's dismantle the system and build a new world order."
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4 md:pt-8">
          <a 
            href="#about" 
            className="group relative px-8 py-4 bg-transparent overflow-hidden border border-red-600 text-red-600 font-mono uppercase tracking-widest hover:text-black transition-all duration-300"
          >
            <span className="absolute inset-0 w-0 bg-red-600 transition-all duration-[250ms] ease-out group-hover:w-full"></span>
            <span className="relative flex items-center gap-2"><Scan className="w-4 h-4" /> Execute_Inspection</span>
          </a>
          
          <a 
            href="#contact" 
            className="group relative px-8 py-4 bg-red-600 text-black font-bold font-mono uppercase tracking-widest border border-red-600 hover:bg-black hover:text-red-600 transition-all duration-300 box-glow"
          >
            <span className="relative flex items-center gap-2"><Target className="w-4 h-4" /> Join_The_Syndicate</span>
          </a>
        </div>

        {/* INFINITE SCANNING IMAGE CONTAINER */}
        <div className="pt-12 flex justify-center relative z-20">
          <div className="relative group cursor-crosshair">
            
            {/* Tech Ring Rotating */}
            <div className="absolute -inset-12 md:-inset-16 border border-red-600/20 rounded-full animate-spin-slow border-dashed pointer-events-none"></div>
            <div className="absolute -inset-12 md:-inset-16 border border-red-600/10 rounded-full animate-spin-slow border-dotted pointer-events-none" style={{ animationDirection: 'reverse' }}></div>
            
            {/* Pulse Glow */}
            <div className="absolute -inset-2 bg-red-600/10 blur-xl animate-pulse rounded-lg"></div>

            {/* Main Frame Container */}
            <div className="relative w-fit max-w-md bg-black p-1 overflow-hidden">
              
              {/* Frame Corners */}
              <div className="absolute inset-0 border border-red-600/30"></div>
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-red-500 z-20"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-red-500 z-20"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-red-500 z-20"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-red-500 z-20"></div>
              
              {/* Decorative Sides */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 h-12 w-1 bg-red-600 z-20"></div>
              <div className="absolute top-1/2 -translate-y-1/2 right-0 h-12 w-1 bg-red-600 z-20"></div>

              {/* Image Wrapper */}
              <div className="relative overflow-hidden w-full h-full bg-black">
                
                {/* Tactical Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px] z-20 pointer-events-none opacity-30"></div>
                
                {/* Base Layer: Silhouette / Dimmed (Always visible background) */}
                <div className="relative opacity-20 grayscale contrast-150">
                   <Image
                    src="/hulo-biral-cyber-security-great-cyber-era.jpg"
                    alt="Target Silhouette"
                    height={300}
                    width={400}
                    priority={true}
                  />
                </div>

                {/* Scanning Layer: Full Color (Reveals and Hides) */}
                <div className="absolute inset-0 z-10 animate-cyber-image">
                  <Image
                    src="/hulo-biral-cyber-security-great-cyber-era.jpg"
                    alt="Hulo Biral Cyber Era"
                    className="object-cover w-full h-full"
                    height={300}
                    width={400}
                    priority={true}
                  />
                </div>
                
                {/* Laser Scan Line (Syncs with image reveal/hide) */}
                <div className="absolute inset-x-0 h-[2px] bg-red-500 shadow-[0_0_20px_rgba(255,0,0,1)] z-30 animate-cyber-line pointer-events-none"></div>
                
                {/* CRT Lines Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(255,0,0,0.02),rgba(255,0,0,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none z-20"></div>
                
                {/* HUD Info - Top Right */}
                <div className="absolute top-3 right-3 z-40 flex flex-col items-end">
                  <span className="text-[9px] font-mono text-red-500 bg-black/90 px-1 border border-red-500/50 mb-1">TARGET: HULO_001</span>
                  <span className="text-[9px] font-mono text-red-500 bg-black/90 px-1 border border-red-500/50 animate-flicker-fast">SCANNING...</span>
                </div>

                 {/* HUD Info - Bottom Left */}
                 <div className="absolute bottom-3 left-3 z-40">
                   <div className="flex items-center gap-1 mb-1">
                      <div className="w-1 h-1 bg-red-500 rounded-full animate-ping"></div>
                      <span className="text-[8px] font-mono text-red-500 tracking-widest">LIVE FEED</span>
                   </div>
                   <div className="h-1 w-16 bg-red-900/50 overflow-hidden">
                      <div className="h-full bg-red-500 w-full animate-[slide-left_2s_linear_infinite]"></div>
                   </div>
                </div>
              </div>
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
          className="p-3 bg-black text-red-600 border border-red-600 shadow-[0_0_15px_rgba(255,0,0,0.3)] hover:bg-red-950 transition-all duration-300 rounded-none group"
        >
          {isPlayerOpen ? (
            <span className="font-mono text-xs font-bold">CLOSE_AUDIO</span>
          ) : (
            <div className="relative">
               <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
               <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" /></svg>
            </div>
          )}
        </button>
      </div>

      {/* Music Player Panel */}
      <div
        className={`fixed bottom-20 right-6 z-40 transition-all duration-500 transform ${
          isPlayerOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <div className="border border-red-600 bg-black/95 p-4 w-80 box-glow relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-red-600/50"></div>
          <p className="text-red-600 font-mono text-xs mb-2 border-b border-red-900 pb-1 flex justify-between">
            <span>:: AUDIO_PLAYER ::</span>
            <span className="animate-pulse">● REC</span>
          </p>
          <div className="[&_*]:text-red-500 [&_input]:accent-red-600">
            <MusicPlayer playlist={demoPlaylist} autoPlay={false} showPlaylist={false} />
          </div>
        </div>
      </div>
    </section>
  );
}