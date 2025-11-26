"use client";

import { MusicPlayer } from "./musicPlayer";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Scan, Target, Zap , Music , X} from "lucide-react";

const demoPlaylist = [
  {
    title: "Six Days",
    artist: "Unknown",
    url: "/Six_Days__Remix_(256k).mp3",
  },
];

interface HeroProps {
  initialCount: number;
}

export function Hero({ initialCount }: HeroProps) {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [viewCount, setViewCount] = useState<number>(initialCount);

  useEffect(() => {
    const incrementCounter = async () => {
      try {
        // Increment the counter using POST
        const response = await fetch("/api/counter", {
          method: "POST",
        });

        if (response.ok) {
          const data = await response.json();
          setViewCount(data.data.up_count);
        }
      } catch (error) {
        console.error("Error incrementing counter:", error);
      }
    };

    incrementCounter();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-24 lg:pt-20 px-4 md:px-6 lg:px-8">
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 md:space-y-12">
        <div className="space-y-6">
          <div
            className="inline-block glass px-6 py-2 rounded-4xl mb-4 backdrop-blur-xl"
            style={{
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            <span className="text-primary font-mono text-xs md:text-sm tracking-[0.2em] uppercase flex items-center gap-2">
              <Zap className="w-3 h-3" />
              Views : {viewCount}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground uppercase drop-shadow-2xl text-glow">
            Welcome To <span className="text-primary">Hulo Biral's</span>
            <br />
            Portfolio
          </h1>
        </div>

        <div
          className="glass-card p-8 rounded-4xl max-w-3xl mx-auto backdrop-blur-2xl"
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-mono leading-relaxed">
            I'm Hulo! It's destiny, meeting you. Let's Turn This World Upside
            Down
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4 md:pt-8">
          <a
            href="#about"
            className="px-8 py-4 glass-button text-foreground rounded-4xl font-mono uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 font-bold backdrop-blur-xl"
            style={{
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <Scan className="w-4 h-4" />
            Inspect
          </a>
          <a
            href="#contact"
            className="px-8 py-4 glass-button bg-primary hover:bg-primary-dark text-white rounded-4xl font-bold font-mono uppercase tracking-widest transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.4)] flex items-center justify-center gap-2 hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] hover:-translate-y-1 backdrop-blur-xl"
            style={{
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <Target className="w-4 h-4" />
            Contact
          </a>
        </div>

        <div className="pt-12 flex justify-center relative z-20">
          <div
            className="relative group p-2 glass rounded-3xl hover:scale-[1.02] transition-all duration-500 backdrop-blur-2xl"
            style={{
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            <div className="relative w-fit max-w-md overflow-hidden rounded-2xl border border-white/5">
              <Image
                src="/hulo-biral-cyber-security-great-cyber-era.jpg"
                alt="Hulo Biral Cyber Era"
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                height={300}
                width={400}
                priority={true}
              />

              <div
                className="absolute bottom-0 left-0 right-0 bg-black/80 p-2 flex justify-between items-center border-t border-primary/30 backdrop-blur-md"
                style={{
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
              >
                <span className="text-[10px] font-mono text-primary tracking-widest animate-pulse">
                  LIVE FEED
                </span>
                <span className="text-[10px] font-mono text-white">
                  TARGET: HULO_001
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsPlayerOpen(!isPlayerOpen)}
          className="p-4 glass rounded-4xl text-primary hover:bg-primary/20 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.3)] backdrop-blur-xl"
          style={{
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          {isPlayerOpen ? (
            <span className="font-mono text-xs font-bold"><X/></span>
          ) : (
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold"> <Music/> </span>
            </div>
          )}
        </button>
      </div>

      <div
        className={`fixed bottom-24 right-6 z-40 transition-all duration-300 ${
          isPlayerOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div
          className="glass-card p-6 rounded-4xl w-80 shadow-[0_0_40px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <p className="text-primary font-mono text-xs mb-4 flex justify-between items-center border-b border-white/10 pb-2">
            <span>:: AUDIO_PLAYER ::</span>
            <span className="text-white/50 animate-pulse">● REC</span>
          </p>
          <div className="text-white input:accent-primary">
            <MusicPlayer
              playlist={demoPlaylist}
              autoPlay={true}
              showPlaylist={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
