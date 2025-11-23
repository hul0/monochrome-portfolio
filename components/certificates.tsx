"use client";

import { ExternalLink } from "lucide-react";

export function Certificates() {
  const certificates = [
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "2025",
      image: "/introduction-to-cybersecurity-cisco-completed-by-hulo-biral.png",
      id: "CISCO-CYBER-001"
    },
    {
      title: "Hacktoberfest 2025: Supercontributor",
      issuer: "DigitalOcean",
      date: "2025",
      image: "/hacktoberfest-6th-pr-accepted-hulo-biral-cyber.webp",
      id: "HACK-TOBER-2025"
    },
    {
      title: "ISC2 Candidate",
      issuer: "ISC2",
      date: "2025",
      image: "/isc2-candidate-hulo-biral.png",
      id: "ISC2-CAND-2025"
    },
    {
      title: "Bronze League 1st Place",
      issuer: "TryHackMe",
      date: "2025",
      image: "/tryhackme-hulo-biral-bronze-league-1st.svg",
      id: "THM-BRONZE-01"
    },
  ];

  return (
    <section id="certificates" className="min-h-[80vh] flex flex-col justify-center px-4 md:px-6 lg:px-8 py-24">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter mb-2 text-glow">
              CERTIFICATE <span className="text-primary">VAULT</span>
            </h2>
            <p className="text-primary/70 font-mono text-sm">
              // VERIFIED_CREDENTIALS_DB
            </p>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-xs font-mono text-muted-foreground">TOTAL_ENTRIES: {certificates.length}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="group glass-card rounded-3xl overflow-hidden hover:border-primary transition-all duration-300 border-primary/20"
            >
              {/* Top Bar */}
              <div className="flex justify-between items-center p-3 bg-black/40 border-b border-white/5">
                 <span className="text-[10px] font-mono text-primary/80">{cert.id}</span>
                 <div className="flex gap-1">
                   <div className="w-2 h-2 rounded-full bg-primary"></div>
                   <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                 </div>
              </div>

              {/* Image Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-black/20 p-6 flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-auto h-full max-h-[140px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors line-clamp-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground font-mono mt-1 mb-6">
                  Issued By: <span className="text-white">{cert.issuer}</span>
                </p>

                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <span className="text-xs font-mono text-primary/60">YEAR: {cert.date}</span>
                  <button className="text-xs flex items-center gap-1 text-white hover:text-primary transition-colors px-3 py-1 glass rounded-4xl hover:bg-primary/20">
                    VIEW_PROOF <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}