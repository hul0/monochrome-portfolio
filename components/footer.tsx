import { 
  Github, 
  Linkedin, 
  Youtube, 
  Facebook, 
  Instagram, 
  Globe, 
  LucideTwitter, 
  Book,
  Mail,
  LucideComputer 
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { name: "Email", url: "mailto:hulo@hulobiral.online", icon: Mail },
    { name: "TryHackMe", url: "https://tryhackme.com/p/hulo", icon: LucideComputer },
    { name: "GitHub", url: "https://github.com/hul0", icon: Github },
    { name: "GitLab", url: "https://gitlab.com/hul0", icon: Globe },
    { name: "LinkedIn", url: "https://linkedin.com/in/hulo", icon: Linkedin },
    { name: "Medium", url: "https://medium.com/@hulo-biral", icon: Book },
    { name: "YouTube", url: "https://youtube.com/@hulocyber", icon: Youtube },
    { name: "X", url: "https://x.com/hulocyber", icon: LucideTwitter },
    { name: "Facebook", url: "https://www.facebook.com/hulocyber", icon: Facebook },
    { name: "Instagram", url: "https://instagram.com/yourhandle", icon: Instagram },
  ];

  return (
    <footer className="border-t border-primary/10 py-16 bg-[#0a0a0a]/80 backdrop-blur-lg text-muted-foreground font-mono text-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Brand */}
          <div className="text-center lg:text-left min-w-[200px]">
            <h3 className="font-bold text-foreground text-2xl mb-2 tracking-wider text-glow">HULO_BIRAL</h3>
            <p className="text-xs text-gray-500 glass px-3 py-1 rounded-full inline-block border-primary/20">
              System Status: <span className="text-green-500 font-bold">ONLINE</span>
            </p>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary hover:bg-white/5 px-3 py-2 rounded-xl transition-all flex items-center gap-2 group hover:scale-105"
                aria-label={link.name}
              >
                <link.icon className="w-4 h-4 group-hover:text-primary transition-colors" />
                <span className="hidden md:inline font-bold text-xs tracking-wider">{link.name.toUpperCase()}</span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center lg:text-right min-w-[200px]">
            <p className="text-xs mb-2">© {currentYear} Hulo Biral.</p>
            <p className="text-[10px] text-primary/60 tracking-widest border border-primary/20 px-2 py-1 rounded-lg inline-block">SECURED BY RED TEAM PROTOCOLS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}