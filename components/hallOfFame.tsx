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
import ImageGallery, { ImageDatas } from "./imageGallery";

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
    { name: "TryHackMe", icon: LucideComputer, url: "https://tryhackme.com/p/hulo" },
    { name: "GitHub", icon: Github, url: "https://github.com/hul0" },
    { name: "GitLab", icon: Globe, url: "https://gitlab.com/hul0" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/hulo" },
    { name: "Medium", icon: Book, url: "https://medium.com/@hulo-biral" },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com/@hulocyber" },
    { name: "X (Twitter)", icon: LucideTwitter, url: "https://x.com/hulocyber" },
    { name: "Facebook", icon: Facebook, url: "https://facebook.com/yourprofile" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/yourhandle" },
  ];

  return (
    <section id="achievements" className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 py-24">
      <div className="max-w-6xl mx-auto w-full space-y-24">
        
        {/* Intro */}
        <div className="text-center space-y-6">
           <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase text-glow">
             <span className="text-primary">ARSENAL</span> & <span className="text-primary">TROPHIES</span>
           </h2>
           <div className="w-32 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Tools Section */}
        <div className="grid lg:grid-cols-2 gap-12">
           {/* Tools I Use */}
           <div className="glass-card p-8 rounded-3xl space-y-6">
             <div className="flex items-center gap-3 border-b border-white/10 pb-4">
               <div className="p-2 bg-primary/10 rounded-xl"><Wrench className="text-primary" /></div>
               <h3 className="text-2xl font-bold text-white font-mono">TOOLS_I_USE</h3>
             </div>
             <div className="flex flex-wrap gap-2">
               {toolsUsed.map((tool, idx) => (
                 <span 
                   key={idx} 
                   className="px-3 py-1 bg-black/40 border border-white/5 rounded-full text-xs font-mono text-gray-300 hover:border-primary hover:text-white transition-colors cursor-default"
                 >
                   {tool}
                 </span>
               ))}
             </div>
           </div>

           {/* Tools I Made */}
           <div className="glass-card p-8 rounded-3xl space-y-6">
             <div className="flex items-center gap-3 border-b border-white/10 pb-4">
               <div className="p-2 bg-primary/10 rounded-xl"><Hammer className="text-primary" /></div>
               <h3 className="text-2xl font-bold text-white font-mono">TOOLS_I_MADE</h3>
             </div>
             <div className="space-y-3">
               {toolsMade.map((tool, idx) => (
                 <div 
                    key={idx} 
                    className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-transparent hover:border-primary/30 transition-all group"
                  >
                   <span className="text-sm font-mono text-white">{tool}</span>
                   <Cpu className="w-4 h-4 text-primary/50 group-hover:text-primary" />
                 </div>
               ))}
             </div>
           </div>
        </div>

        {/* TryHackMe & Achievements */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
             <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2">
               <LucideComputer className="text-primary" /> LIVE_STATUS
             </h3>
             <div className="glass p-2 rounded-3xl border border-primary/30">
                <div className="rounded-2xl overflow-hidden">
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
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2">
               <Award className="text-primary" /> UNLOCKED_ACHIEVEMENTS
             </h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-4 glass p-4 rounded-2xl border-l-4 border-l-primary hover:bg-white/10 transition-colors">
                  <div className="text-primary font-bold font-mono">0{index + 1}</div>
                  <span className="text-lg text-white font-mono">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Gallery & Quote */}
        <div className="space-y-12 pt-12 border-t border-white/10">
           <div className="text-center">
             <div className="w-16 h-16 mx-auto glass rounded-full flex items-center justify-center mb-6 border border-primary/30">
               <MessageSquare className="w-8 h-8 text-primary" />
             </div>
             <blockquote className="text-xl md:text-3xl font-mono text-white italic max-w-4xl mx-auto leading-relaxed">
               "{quote.text}"
             </blockquote>
             <cite className="block mt-6 text-primary font-bold tracking-widest text-sm">— {quote.author}</cite>
           </div>

           <div className="p-6 glass-card rounded-3xl border border-primary/20">
             <ImageGallery
                images={ImagesThatMatter}
                autoScrollSpeed={50}
                autoScrollDirection="right"
                imageWidth={300}
                imageHeight={300}
                gap={20}
                quality={90}
                showControls={false}
                containerClassName="rounded-xl overflow-hidden"
                imageClassName="rounded-xl border-2 border-transparent hover:border-primary transition-all"
             />
           </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-full hover:bg-primary hover:text-black transition-all duration-300 group border border-white/10 hover:border-primary"
                >
                  <Icon className="w-6 h-6 text-white group-hover:text-black" />
                </a>
              );
            })}
        </div>
      </div>
    </section>
  );
}