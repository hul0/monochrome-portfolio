export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-12 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
          <div>
            <h3 className="font-bold text-lg mb-4">Hulo Biral</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Did you like my website? Then lemme know what u liked the most , send me email to {"hulo@hulobiral.online <3 ;) "} 
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-white/60 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#hall-of-fame" className="text-white/60 hover:text-white transition-colors">
                  Achievements
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/60 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Follow</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  GitLab
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Youtube
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Medium
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 md:pt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs md:text-sm">
            © {currentYear} All rights reserved by Hulo Biral.
          </p>
          <div className="flex gap-6 md:gap-8 text-xs md:text-sm">
            {/* <a href="#" className="text-white/50 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Terms
            </a> */}
            <a href="/sitemap.xml" className="text-white/50 hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
