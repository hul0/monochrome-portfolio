import QuoteComponent from "./quote";
import { Terminal, ShieldAlert, ShieldCheck, Code, Wrench } from "lucide-react";

export function About() {
  const skillCategories = [
    {
      title: "Offensive Operations",
      icon: <ShieldAlert className="w-5 h-5 text-red-500" />,
      skills: ["Penetration Testing", "Red Teaming", "SQL Injection", "Exploit Development", "Social Engineering", "OSINT", "Cyber Threat Hunting"]
    },
    {
      title: "Defensive Strategy",
      icon: <ShieldCheck className="w-5 h-5 text-red-500" />,
      skills: ["Security Hardening", "Firewall Config", "Incident Response", "Blue Teaming Tactics", "Network Analysis"]
    },
    {
      title: "Code & Scripting",
      icon: <Code className="w-5 h-5 text-red-500" />,
      skills: ["Python", "C/C++", "Rust", "Shell/Bash", "JavaScript/TypeScript", "SQL", "Kotlin", "Jetpack Compose"]
    },
    {
      title: "Infrastructure & Tools",
      icon: <Wrench className="w-5 h-5 text-red-500" />,
      skills: ["Linux Administration", "Docker", "Git/GitHub", "Apache/NGINX", "Cloud Computing", "DevSecOps"]
    }
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8 py-24 border-t border-red-900/30 bg-black relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/10 blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-4 mb-12">
          <Terminal className="w-8 h-8 text-red-600" />
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase">
            File: <span className="text-red-600">USER_PROFILE</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column: The Story */}
          <div className="space-y-10">
            <div className="prose prose-invert prose-p:font-mono prose-p:text-sm prose-p:leading-relaxed prose-headings:font-bold prose-headings:text-red-500">
              <div className="border-l-2 border-red-600/50 pl-6 space-y-6">
                <div>
                  <h3>// THE_ORIGIN_STORY</h3>
                  <p>
                    Hulo is a cat who loves Burgers. But beyond the feline persona, I am a cyber enthusiast forged in the fires of curiosity. 
                    It started in 2022, not with a noble goal, but with a question: "How does this break?" 
                    Since then, I've been peeling back the layers of the digital world, looking for the cracks that others miss.
                  </p>
                </div>
                
                <div>
                  <h3>// THE_MISSION_STATEMENT</h3>
                  <p>
                    Why do I do this? The digital realm is the new wild west. I break things to secure them. 
                    I hunt vulnerabilities not just for the thrill of the exploit, but to ensure that when the real threats come knocking, the doors are locked tight.
                    It's about power, responsibility, and a little bit of chaos.
                  </p>
                </div>

                <div>
                  <h3>// CLASSIFIED_LOGS</h3>
                  <p>
                    There was that one time I almost <code>rm -rf /</code> on a production server... kidding (mostly). 
                    Every bug I find, every CTF flag I capture, adds a new line to my code. I see the web not as screens and buttons, but as requests, packets, and logic flows waiting to be manipulated.
                  </p>
                </div>

                <div>
                  <h3>// ENDGAME_PROTOCOL</h3>
                  <p>
                    My Dream? To be the King of Pirates... in Cybersecurity. To reach a level of mastery where no system is opaque, and no defense is absolute. 
                    I want to build the Great Cyber Era alongside a crew that's just as crazy as I am.
                  </p>
                </div>
              </div>
            </div>

            <QuoteComponent
              quote="MEANINGLESS, HUH? WHAT DO YOU KNOW OF MEANINGLESS? Spend most of your life ruled by another! Watch your race dwindle to a handful! AND THEN, tell me what has more meaning than your own strength!"
              author="Vegeta"
              authorRole="Prince of all Saiyans"
              image="/hulo-biral-cyber-security-meaningless-huhh.jpg"
              variant="card"
              backgroundColor="bg-red-950/10"
              borderColor="border-red-600"
              quoteColor="text-white"
              quoteIconColor="text-red-600"
              className="border border-red-600/30"
            />
          </div>

          {/* Right Column: Skills Matrix */}
          <div className="space-y-8">
            <h3 className="text-xl font-mono text-red-500 border-b border-red-900 pb-2 mb-6">
              :: SKILL_MATRIX_LOADED ::
            </h3>
            
            <div className="grid gap-6">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="bg-red-950/5 border border-red-900/30 p-6 hover:border-red-600 transition-colors duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    {cat.icon}
                    <h4 className="font-bold text-white group-hover:text-red-400 transition-colors uppercase tracking-wider">
                      {cat.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-2 py-1 bg-black border border-red-900/50 text-gray-400 hover:text-white hover:border-red-500 transition-all cursor-crosshair"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-8 border border-red-600/30 p-1 group">
               <div className="absolute inset-0 bg-red-600/5 group-hover:bg-red-600/10 transition-colors" />
               <img
                src="/hulo-biral-cyber-security-alone.jpg"
                alt="Deep thought"
                className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-2 right-2 bg-black px-2 text-red-500 text-xs font-mono">STATUS: SEARCHING_FOR_JOB</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}