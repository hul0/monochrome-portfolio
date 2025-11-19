"use client";
import {
  Award,
  Wrench,
  MessageSquare,
  Github,
  Linkedin,
  Youtube,
  Facebook,
  Instagram,
  Globe,
  LucideComputer,
  LucideTwitter,
  Hammer,
  Cpu,
  Book
} from "lucide-react";

import ImageGallery from "./imageGallery";
import { ImageDatas } from "./imageGallery";

export function HallOfFame() {
  const ImagesThatMatter: ImageDatas[] = [
    {
      src: "/hulo-biral-cyber-security-eminem-glow.jpeg",
      alt: "The favourite rapper of Hulo Biral - Eminem",
      title: "Eminem",
      caption: '"I am the real shady"',
      width: 800,
      height: 600,
    },
    {
      src: "/hulo-biral-cyber-security-goku-black-smile.jpeg",
      alt: "Goku Black",
      title: "Goku Black",
      caption: '"At last, there is nobody left who can resist me"',
      width: 600,
      height: 800,
    },
     // ... existing images kept same, just ensuring logic flows
     {
      src: "/hulo-biral-cyber-security-idols.jpg",
      alt: "Idols",
      title: "Idols",
      caption: "My Idols",
      width: 600,
      height: 600,
    },
    {
        src: "/hulo-biral-cyber-security-griffith-pfp.png",
        alt: "Griffith",
        title: "Griffith",
        caption: "Dreamer",
        width: 600,
        height: 600,
    }
  ];

  const achievements = [
    "Top 10% on TryHackMe",
    "10+ CTF Challenges Solved",
    "Open Source Security Contributor",
  ];

  const toolsUsed = [
    "Nmap", "Wireshark", "Metasploit", "Burp Suite", "OWASP ZAP", "sqlmap",
    "Hashcat", "John the Ripper", "Aircrack-ng", "Hydra", "Netcat", "Shodan",
    "Nikto", "Snort", "Gobuster", "ffuf", "DirBuster", "Gophish", "Maltego",
    "Tor", "ProxyChains", "ngrok", "OpenVPN", "UFW", "Linux"
  ];

  const toolsMade = [
    "Custom Port Scanner (Python)",
    "Automated Recon Script (Bash)",
    "Simple Keylogger (C++)", 
    "Steganography Tool",
    "Payload Generator"
  ];

  const quote = {
    text: "You think I give a damn about a Grammy? \n Half of you critics can't even stomach me...",
    author: "EMINEM",
  };

  const socialLinks = [
    {
      name: "TryHackMe",
      icon: LucideComputer,
      url: "https://tryhackme.com/p/hulo",
    },
    { name: "GitHub", icon: Github, url: "https://github.com/hul0" },
    { name: "GitLab", icon: Globe, url: "https://gitlab.com/hul0" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/hulo",
    },
    { name: "Medium", icon: Book, url: "https://medium.com/@hulo-biral" },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com/@hulocyber" },
    {
      name: "X (Twitter)",
      icon: LucideTwitter,
      url: "https://x.com/hulocyber",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/yourprofile",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/yourhandle",
    },
  ];

  return (
    <section id="achievements" className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 py-20 border-t border-red-900/30 bg-black">
      <div className="max-w-6xl mx-auto w-full space-y-24">
        
        {/* Intro */}
        <div className="text-center space-y-4">
           <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase">
             <span className="text-red-600">ARSENAL</span> & <span className="text-red-600">TROPHIES</span>
           </h2>
           <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Tools Section - Split */}
        <div className="grid lg:grid-cols-2 gap-12">
           {/* Tools I Use */}
           <div className="space-y-6">
             <div className="flex items-center gap-3 border-b border-red-900/50 pb-3">
               <Wrench className="text-red-500" />
               <h3 className="text-2xl font-bold text-white font-mono">TOOLS_I_USE</h3>
             </div>
             <div className="flex flex-wrap gap-2">
               {toolsUsed.map((tool, idx) => (
                 <span key={idx} className="px-3 py-1 bg-[#111] border border-red-900/30 text-xs font-mono text-gray-300 hover:border-red-500 hover:text-white transition-colors cursor-default">
                   {tool}
                 </span>
               ))}
             </div>
           </div>

           {/* Tools I Made */}
           <div className="space-y-6">
             <div className="flex items-center gap-3 border-b border-red-900/50 pb-3">
               <Hammer className="text-red-500" />
               <h3 className="text-2xl font-bold text-white font-mono">TOOLS_I_MADE</h3>
             </div>
             <div className="space-y-3">
               {toolsMade.map((tool, idx) => (
                 <div key={idx} className="flex items-center justify-between p-3 bg-red-950/10 border border-red-900/30 hover:bg-red-900/20 transition-colors group">
                   <span className="text-sm font-mono text-white group-hover:text-red-400">{tool}</span>
                   <Cpu className="w-4 h-4 text-red-900 group-hover:text-red-500" />
                 </div>
               ))}
             </div>
           </div>
        </div>

        {/* TryHackMe & Achievements */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
             <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2">
               <LucideComputer className="text-red-500" /> LIVE_STATUS
             </h3>
             <div className="border border-red-600/50 p-1 bg-red-950/5">
                <iframe
                    src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=1354938"
                    title="hulo biral tryhackme banner"
                    width="100%"
                    height="240"
                    style={{ border: "none" }}
                    loading="lazy"
                    className="filter grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
             </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2">
               <Award className="text-red-500" /> UNLOCKED_ACHIEVEMENTS
             </h3>
            <div className="space-y-2">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-4 bg-black border-l-4 border-red-600 p-4 hover:bg-red-950/10 transition-colors">
                  <div className="text-red-500 font-bold font-mono">0{index + 1}</div>
                  <span className="text-lg text-white font-mono">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Gallery & Quote */}
        <div className="space-y-12 pt-12 border-t border-red-900/30">
           <div className="text-center">
             <MessageSquare className="w-8 h-8 text-red-600 mx-auto mb-4" />
             <blockquote className="text-xl md:text-2xl font-mono text-white italic max-w-4xl mx-auto leading-relaxed border-l-4 border-red-600 pl-6">
               "{quote.text}"
             </blockquote>
             <cite className="block mt-4 text-red-500 font-bold tracking-widest">— {quote.author}</cite>
           </div>

           <div className="p-4 border border-red-900/30 bg-black">
             <ImageGallery
                images={ImagesThatMatter}
                autoScrollSpeed={50}
                autoScrollDirection="right"
                imageWidth={300}
                imageHeight={300}
                gap={20}
                quality={90}
                showControls={false}
                containerClassName="grayscale hover:grayscale-0 transition-all duration-700"
                imageClassName="border-2 border-red-900/50"
             />
           </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-red-900/30 rounded-full hover:border-red-500 hover:text-red-500 hover:bg-red-950/20 transition-all duration-300 group"
                >
                  <Icon className="w-6 h-6 text-gray-400 group-hover:text-red-500" />
                </a>
              );
            })}
        </div>
      </div>
    </section>
  );
}