"use client";

import {
  Terminal,
  ShieldAlert,
  ShieldCheck,
  Code,
  Wrench,
  FileText,
  Cpu,
} from "lucide-react";

// Reusable Terminal Component
const TerminalWindow = ({
  filename,
  content,
}: {
  filename: string;
  content: React.ReactNode;
}) => (
  <div className="w-full glass-card rounded-3xl overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-500 group">
    {/* Terminal Header */}
    <div className="bg-[#0a0a0a] border-b border-white/5 p-3 px-6 flex items-center gap-4">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
      </div>
      <div className="flex items-center gap-2 text-[10px] font-mono text-white/40 uppercase tracking-widest select-none group-hover:text-primary/80 transition-colors">
        <FileText className="w-3 h-3" />
        {filename}
      </div>
    </div>

    {/* Terminal Body */}
    <div className="p-8 font-mono text-sm leading-relaxed bg-black/20">
      <div className="flex gap-3 text-primary font-bold mb-4 border-b border-white/5 pb-2">
        <span className="text-primary/80 select-none">root@hulo:~#</span>
        <span>cat {filename}</span>
      </div>
      <div className="text-gray-300 whitespace-pre-wrap">{content}</div>
    </div>
  </div>
);

export function About() {
  const skillCategories = [
    {
      title: "Offensive Operations",
      icon: <ShieldAlert className="w-5 h-5 text-primary" />,
      skills: [
        "Penetration Testing", "Red Teaming", "SQL Injection",
        "Exploit Development", "Social Engineering", "OSINT", "Cyber Threat Hunting",
      ],
    },
    {
      title: "Defensive Strategy",
      icon: <ShieldCheck className="w-5 h-5 text-primary" />,
      skills: [
        "Security Hardening", "Firewall Config", "Incident Response",
        "Blue Teaming Tactics", "Network Analysis",
      ],
    },
    {
      title: "Code & Scripting",
      icon: <Code className="w-5 h-5 text-primary" />,
      skills: [
        "Python", "C/C++", "Rust", "Shell/Bash",
        "JavaScript/TypeScript", "SQL", "Kotlin", "Jetpack Compose",
      ],
    },
    {
      title: "Infrastructure & Tools",
      icon: <Wrench className="w-5 h-5 text-primary" />,
      skills: [
        "Linux Administration", "Docker", "Git/GitHub",
        "Apache/NGINX", "Cloud Computing", "DevSecOps",
      ],
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8 py-24 relative">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-16 border-b border-white/10 pb-8">
          <div className="p-4 glass rounded-full border border-primary/40 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <Terminal className="w-8 h-8 text-primary" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground uppercase text-glow">
              <span className="text-primary">USER</span>_PROFILE
            </h2>
            <p className="font-mono text-muted-foreground text-sm tracking-widest mt-2">
              :: ACCESS_LEVEL: RESTRICTED ::
            </p>
          </div>
        </div>

        <div className="grid xl:grid-cols-12 gap-12">
          {/* Left Column: Terminals */}
          <div className="xl:col-span-7 space-y-8">
            <TerminalWindow
              filename="origin_story.txt"
              content={
                <p>
                  Hulo is a cat who loves Burgers. But beyond the feline
                  persona, I am a cyber enthusiast forged in the fires of
                  curiosity.
                  <br /><br />
                  It started in 2022 with a simple query:{" "}
                  <span className="text-primary">"How does this break?"</span>
                  Since then, I've been peeling back the layers of the digital
                  world, looking for the cracks that others miss.
                </p>
              }
            />

            <TerminalWindow
              filename="mission_protocol.md"
              content={
                <p>
                  Why do I do this? The digital realm is the new wild west.{" "}
                  <strong className="text-white">I break things to secure them.</strong>
                  <br /><br />
                  I hunt vulnerabilities not just for the thrill of the
                  exploit, but to ensure that when the real threats come
                  knocking, the doors are locked tight. It's about power,
                  responsibility, and a little bit of calculated chaos.
                </p>
              }
            />

            <div className="grid md:grid-cols-2 gap-8">
              <TerminalWindow
                filename="classified_logs.json"
                content={
                  <p>
                    {"{"}<br />
                    &nbsp;&nbsp;"event": "incident_01",<br />
                    &nbsp;&nbsp;"desc": "Almost ran 'rm -rf /' on prod",<br />
                    &nbsp;&nbsp;"status": "Mitigated",<br />
                    &nbsp;&nbsp;"lesson": "Always double check sudo"<br />
                    {"}"}<br /><br />
                    Every bug I find adds a new line to my source code.
                  </p>
                }
              />

              <TerminalWindow
                filename="dream.exe"
                content={
                  <p className="text-primary">
                    Executing dream sequence...<br /><br />
                    Goal: To be the{" "}
                    <span className="text-white font-bold underline decoration-primary">
                      King of Pirates
                    </span>
                    ... in Cybersecurity.<br /><br />
                    To reach a level of mastery where no system is opaque.
                  </p>
                }
              />
            </div>
          </div>

          {/* Right Column: Skills */}
          <div className="xl:col-span-5 flex flex-col gap-8 h-full">
            <div className="glass-card p-8 rounded-3xl h-fit sticky top-24 border-primary/20">
              <h3 className="text-xl font-mono text-primary border-b border-white/10 pb-4 mb-6 flex items-center gap-2">
                <Cpu /> SKILL_MATRIX_LOADED
              </h3>

              <div className="grid gap-8">
                {skillCategories.map((cat, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-center gap-3 mb-4">
                      {cat.icon}
                      <h4 className="font-bold text-white uppercase tracking-wider text-sm group-hover:text-primary transition-colors">
                        {cat.title}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-4 border-l-2 border-white/10 group-hover:border-primary transition-colors duration-300">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono px-3 py-1 bg-white/5 rounded-4xl text-gray-300 border border-white/5 hover:border-primary/50 hover:text-primary hover:bg-primary/10 transition-all cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative mt-8 rounded-2xl overflow-hidden border border-white/10 group">
                <img
                  src="/hulo-biral-cyber-security-alone.jpg"
                  alt="Deep thought"
                  className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-primary/50 px-4 py-2 flex justify-between items-center">
                  <span className="text-primary text-[10px] font-mono animate-pulse">● LIVE FEED</span>
                  <span className="text-white text-[10px] font-mono">STATUS: SEARCHING_JOB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}