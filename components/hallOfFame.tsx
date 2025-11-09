"use client";
import {
  Shield,
  Award,
  Book,
  Wrench,
  MessageSquare,
  Github,
  Linkedin,
  Youtube,
  Facebook,
  Instagram,
  Globe,
  LucideComputer,
  X,
  LucideTwitter,
} from "lucide-react";

import ImageGallery from "./imageGallery";
import { ImageDatas } from "./imageGallery";
export function HallOfFame() {
  const ImagesThatMatter: ImageDatas[] = [
    {
      src: "/hulo-biral-cyber-security-eminem-glow.jpeg",
      alt: "The favourite rapper of Hulo Biral - Eminem",
      title: "The favourite rapper of Hulo Biral - Eminem",
      caption: '"I am the real shady"',
      description: "Famous rapper eminem is the favourite rapper of Hulo Biral",
      width: 800,
      height: 600,
    },
    {
      src: "/hulo-biral-cyber-security-goku-black-smile.jpeg",
      alt: "The favourite anime character of hulo biral is Goku Black",
      title: "The favourite anime character of hulo biral is Goku Black",
      caption: '"At last , there is nobody left who can resist me"',
      width: 600,
      height: 800,
    },
    {
      src: "/hulo-biral-cyber-security-idols.jpg",
      alt: "The idols of hulo biral - cybersecurity are Messi & Adolf",
      title: "The idols of hulo biral - cybersecurity are Messi & Adolf",
      caption: "My Idols",
      width: 600,
      height: 600,
    },
    {
      src: "/hulo-biral-cyber-security-griffith-pfp.png",
      alt: "Griffith from berserk shares the same dream as hulo biral",
      title: "Griffith from berserk shares the same dream as hulo biral",
      caption: '"For me to call a man my friend, he must be equal to me in all respects."',
      width: 600,
      height: 600,
    },
    {
      src: "/hulo-biral-cyber-security-original-face.jpg",
      alt: "The original face of hulo biral who is a cyber security student",
      title: "Hulo Biral original face",
      caption: "This is me btw :(",
      width: 600,
      height: 600,
    },
    {
      src: "/hulo-biral-cyber-security-ben-10-smoothie.jpeg",
      alt: "Hulo biral loves smoothie just like Ben 10",
      title: "Hulo Biral favourite childhood cartoon - Ben 10",
      caption: "Be calm like Ben-10 and work smooth like Smoothie",
      width: 600,
      height: 600,
    },
    {
      src: "/hulo-biral-cyber-security-kid-goku-smile.jpeg",
      alt: "Hulo Biral is as innocent as kid goku",
      title: "Kid Goku Pfp - Hulo Biral",
      caption: "Thanks for spending time in my website , I hope you liked it , hehe <3 :)",
      width: 600,
      height: 600,
    },
    {
      src: "/hulo-biral-cyber-security-work.jpg",
      alt: "Hulo Biral is a cyber security student and engineer",
      title: "Hulo biral is a cyber security engineer",
      caption: "I'm Engineer. HueHueHue",
      width: 600,
      height: 600,
    },
  ];
  const badges = [
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "2025",
      image: "/introduction-to-cybersecurity-cisco-completed-by-hulo-biral.png",
    },
    {
      title: "Hacktoberfest 2025: Supercontributor",
      issuer: "DigitalOcean",
      date: "2025",
      image: "/hacktoberfest-6th-pr-accepted-hulo-biral-cyber.webp",
    },
    {
      title: "ISC2 Candidate",
      issuer: "ISC2",
      date: "2025",
      image: "/isc2-candidate-hulo-biral.png",
    },
    {
      title: "Bronze League 1st Place",
      issuer: "TryHackMe",
      date: "2025",
      image: "/tryhackme-hulo-biral-bronze-league-1st.svg",
    },
  ];

  const achievements = [
    "Top 10% on TryHackMe",
    "10+ CTF Challenges Solved",
    "Open Source Security Contributor",
  ];

  const certificates = [
    { name: "Offensive Security Certified Professional (OSCP)", year: "2024" },
    { name: "Certified Ethical Hacker (CEH)", year: "2023" },
    { name: "CompTIA Security+", year: "2023" },
    { name: "eLearnSecurity Junior Penetration Tester (eJPT)", year: "2022" },
  ];

  const tools = [
    "Nmap",
    "Wireshark",
    "Metasploit Framework",
    "Burp Suite",
    "OWASP ZAP",
    "sqlmap",
    "Hashcat",
    "John the Ripper",
    "Aircrack-ng",
    "Hydra",
    "Masscan",
    "Netcat",
    "Hping3",
    "Shodan",
    "Nikto",
    "Snort",
    "Amass",
    "theHarvester",
    "Sublist3r",
    "Recon-ng",
    "Gobuster",
    "ffuf",
    "Wfuzz",
    "DirBuster",
    "WhatWeb",
    "WAFW00F",
    "BeEF",
    "Social-Engineer Toolkit (SET)",
    "Gophish",
    "Maltego",
    "SpiderFoot",
    "DNSRecon",
    "Knockpy",
    "Airodump-ng",
    "RainbowCrack",
    "Cowpatty",
    "CeWL",
    "Commix",
    "Searchsploit",
    "ExifTool",
    "Tor",
    "ProxyChains",
    "ngrok",
    "OpenVPN",
    "UFW",
    "Steghide",
    "TorsHammer",
    "Slowloris",
    "ATK6 - Smurf6",
    "Holehe",
    "iSMTP",
    "Self-made tools",
  ];

  const quote = {
    text: "You think I give a damn about a Grammy? \n Half of you critics can't even stomach me, let alone stand me \n'But Slim, what if you win? Wouldn't it be weird?' \nWhy? So you guys could just lie to get me here? \nSo you can sit me here next to Britney Spears? \nYo, shit, Christina Aguilera better switch me chairs \nSo I can sit next to Carson Daly and Fred Durst \nAnd hear 'em argue over who she gave head to first",
    author: "EMINEM",
  };

  const socialLinks = [
    {
      name: "TryHackMe",
      icon: Shield,
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
    <section
      id="hall-of-fame"
      className="min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8 py-20 border-t border-white"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tighter text-white">
            Hall of Fame
          </h2>
          <p className="text-lg md:text-xl text-white">
            Things that i have achieved so far (Not much yet , trying hard)
          </p>
        </div>

        {/* Badges Section */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-6 h-6 text-white" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Badges & Certifications
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="bg-black border-2 border-white p-6 hover:bg-white hover:text-black transition-all duration-300 group"
              >
                <div className="w-full aspect-square mb-4  flex items-center justify-center overflow-hidden">
                  <img
                    src={badge.image}
                    alt={badge.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-lg font-bold mb-2 text-white group-hover:text-black">
                  {badge.title}
                </h4>
                <p className="text-sm text-white group-hover:text-black mb-1">
                  {badge.issuer}
                </p>
                <p className="text-xs text-white group-hover:text-black">
                  {badge.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* TryHackMe Badge */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <LucideComputer className="w-6 h-6 text-white" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              TryHackMe Banner
            </h3>
          </div>
          <iframe
            src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=1354938"
            title="hulo biral tryhackme banner"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            loading="eager"
          ></iframe>
        </div>
        {/* Achievements Section */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-6 h-6 text-white" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Key Achievements
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-black border-2 border-white p-4 hover:bg-white hover:text-black transition-colors group"
              >
                <div className="text-2xl text-white group-hover:text-black">
                  ✓
                </div>
                <span className="text-base md:text-lg text-white group-hover:text-black">
                  {achievement}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-8">
            <Book className="w-6 h-6 text-white" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Professional Certificates
            </h3>
          </div>
          <p>
            I can't afford any cybersecurity certificates now (No Money . I'm
            Gareebs)
          </p>
          {/* <div className="space-y-3">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-black border-2 border-white p-5 hover:bg-white transition-colors group"
              >
                <span className="text-base md:text-lg text-white group-hover:text-black">
                  {cert.name}
                </span>
                <span className="text-sm text-white group-hover:text-black">
                  {cert.year}
                </span>
              </div>
            ))}
          </div> */}
        </div>

        {/* Tools Section */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-8">
            <Wrench className="w-6 h-6 text-white" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Tools I Use
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-black border-2 border-white text-sm text-white hover:bg-white hover:text-black transition-all duration-300 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-8">
            <MessageSquare className="w-fit h-fit text-white" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Philosophy
            </h3>
          </div>
          <div className="bg-black border-2 border-white p-8 md:p-10">
            <p
              className="text-lg md:text-xl text-white italic leading-relaxed mb-4"
              style={{ whiteSpace: "pre-line" }}
            >
              "{quote.text}"
            </p>
            <p className="text-sm text-white">— {quote.author}</p>
            <img src="/hulo-biral-cyber-security-eminem.jpg" alt="" />
          </div>
        </div>

        {/* Social Links Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-6 h-6 text-white" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Connect With Me
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 bg-black border-2 border-white p-6 hover:bg-white transition-all duration-300 group"
                >
                  <Icon className="w-8 h-8 text-white group-hover:text-black" />
                  <span className="text-sm font-medium text-center text-white group-hover:text-black">
                    {link.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Image Gallery */}

        <div className="min-h-screen bg-black text-white p-8">
          <ImageGallery
            images={ImagesThatMatter}
            autoScrollSpeed={80}
            autoScrollDirection="right"
            imageWidth={300}
            imageHeight={300}
            gap={30}
            quality={90}
            priority={true}
            showControls={false}
          />
        </div>
      </div>
    </section>
  );
}
