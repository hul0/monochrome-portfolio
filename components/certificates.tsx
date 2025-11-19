import { Award, ExternalLink } from "lucide-react";

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
    <section id="certificates" className="min-h-[80vh] flex flex-col justify-center px-4 md:px-6 lg:px-8 py-20 bg-black border-t border-red-900/30">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-red-800 pb-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-2">
              CERTIFICATE <span className="text-red-600">VAULT</span>
            </h2>
            <p className="text-red-500/60 font-mono text-sm">
              // VERIFIED_CREDENTIALS_DB
            </p>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-xs font-mono text-gray-500">TOTAL_ENTRIES: {certificates.length}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="group relative bg-[#050505] border border-red-900/30 overflow-hidden hover:border-red-600 transition-all duration-300"
            >
              {/* Top Bar */}
              <div className="flex justify-between items-center p-2 bg-red-950/10 border-b border-red-900/30">
                 <span className="text-[10px] font-mono text-red-500/70">{cert.id}</span>
                 <div className="flex gap-1">
                   <div className="w-2 h-2 rounded-full bg-red-900"></div>
                   <div className="w-2 h-2 rounded-full bg-red-900"></div>
                 </div>
              </div>

              {/* Image Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-white/5 p-4 flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-auto h-full max-h-[140px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 relative">
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-red-600/0 group-hover:border-red-600 transition-all duration-300" />
                
                <h3 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors line-clamp-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400 font-mono mt-1 mb-4">
                  Issued By: <span className="text-white">{cert.issuer}</span>
                </p>

                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <span className="text-xs font-mono text-red-500/50">YEAR: {cert.date}</span>
                  <button className="text-xs flex items-center gap-1 text-white hover:text-red-500 transition-colors">
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