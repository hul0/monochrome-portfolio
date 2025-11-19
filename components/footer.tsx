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
    <footer className="border-t border-red-900/30 py-12 bg-black text-gray-400 font-mono text-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center lg:text-left min-w-[200px]">
            <h3 className="font-bold text-white text-lg mb-2 tracking-wider">HULO_BIRAL</h3>
            <p className="text-xs text-gray-600">
              System Status: <span className="text-green-500 animate-pulse">ONLINE</span>
            </p>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-4xl">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors flex items-center gap-2 group"
                aria-label={link.name}
              >
                <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="hidden md:inline font-bold text-xs tracking-wider">{link.name.toUpperCase()}</span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center lg:text-right min-w-[200px]">
            <p className="text-xs">© {currentYear} Hulo Biral.</p>
            <p className="text-[10px] text-red-900 mt-1 tracking-widest">SECURED BY RED TEAM PROTOCOLS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}