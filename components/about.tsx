"use client";

import { useRef } from "react";
import {
  Terminal,
  ShieldAlert,
  ShieldCheck,
  Code,
  Wrench,
  FileText,
  Cpu,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

// Reusable Terminal Component
const TerminalWindow = ({
  filename,
  content,
  index
}: {
  filename: string;
  content: React.ReactNode;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative w-full bg-black border border-red-900/40 rounded-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(220,38,38,0.25)] shadow-[0_0_15px_rgba(220,38,38,0.1)]"
  >
    {/* Terminal Header */}
    <div className="bg-[#0a0a0a] border-b border-red-900/30 p-2 px-4 flex items-center gap-4">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-600/80 group-hover:bg-red-500 transition-colors"></div>
        <div className="w-3 h-3 rounded-full bg-red-900/50"></div>
        <div className="w-3 h-3 rounded-full bg-red-900/30"></div>
      </div>
      <div className="flex items-center gap-2 text-[10px] font-mono text-red-500/60 uppercase tracking-widest select-none">
        <FileText className="w-3 h-3" />
        {filename}
      </div>
    </div>

    {/* Terminal Body */}
    <div className="p-6 font-mono text-sm leading-relaxed relative">
      {/* Command Line */}
      <div className="flex gap-3 text-red-500 font-bold mb-4 border-b border-red-900/20 pb-2">
        <span className="text-red-700 select-none">root@hulo:~#</span>
        <span className="typing-effect">cat {filename}</span>
        <span className="w-2 h-5 bg-red-500 animate-pulse"></span>
      </div>

      {/* Output */}
      <div className="text-gray-300/90 whitespace-pre-wrap">{content}</div>

      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] pointer-events-none opacity-40"></div>
    </div>
  </motion.div>
);

export function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects for columns
  const leftColumnY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const rightColumnY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  const skillCategories = [
    {
      title: "Offensive Operations",
      icon: <ShieldAlert className="w-5 h-5 text-red-500" />,
      skills: [
        "Penetration Testing",
        "Red Teaming",
        "SQL Injection",
        "Exploit Development",
        "Social Engineering",
        "OSINT",
        "Cyber Threat Hunting",
      ],
    },
    {
      title: "Defensive Strategy",
      icon: <ShieldCheck className="w-5 h-5 text-red-500" />,
      skills: [
        "Security Hardening",
        "Firewall Config",
        "Incident Response",
        "Blue Teaming Tactics",
        "Network Analysis",
      ],
    },
    {
      title: "Code & Scripting",
      icon: <Code className="w-5 h-5 text-red-500" />,
      skills: [
        "Python",
        "C/C++",
        "Rust",
        "Shell/Bash",
        "JavaScript/TypeScript",
        "SQL",
        "Kotlin",
        "Jetpack Compose",
      ],
    },
    {
      title: "Infrastructure & Tools",
      icon: <Wrench className="w-5 h-5 text-red-500" />,
      skills: [
        "Linux Administration",
        "Docker",
        "Git/GitHub",
        "Apache/NGINX",
        "Cloud Computing",
        "DevSecOps",
      ],
    },
  ];

  return (
    <section
      ref={containerRef}
      id="about"
      className="min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8 py-24 border-t border-red-900/30 bg-black relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-900/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-900/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16 border-b border-red-900/30 pb-8"
        >
          <div className="p-3 bg-red-950/10 border border-red-900/50 rounded-lg">
            <Terminal className="w-8 h-8 text-red-600" />
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase">
              <span className="text-red-600">USER</span>_PROFILE
            </h2>
            <p className="font-mono text-red-500/50 text-sm tracking-widest">
              :: ACCESS_LEVEL: RESTRICTED ::
            </p>
          </div>
        </motion.div>

        <div className="grid xl:grid-cols-12 gap-12">
          {/* Left Column: The 4 Floating Terminals - Parallax Speed Slower */}
          <motion.div style={{ y: leftColumnY }} className="xl:col-span-7 space-y-8">
            <TerminalWindow
              filename="origin_story.txt"
              index={0}
              content={
                <p>
                  Hulo is a cat who loves Burgers. But beyond the feline
                  persona, I am a cyber enthusiast forged in the fires of
                  curiosity.
                  <br />
                  <br />
                  It started in 2022, not with a noble goal, but with a simple
                  query:{" "}
                  <span className="text-red-400">"How does this break?"</span>
                  Since then, I've been peeling back the layers of the digital
                  world, looking for the cracks that others miss.
                </p>
              }
            />

            <TerminalWindow
              filename="mission_protocol.md"
              index={1}
              content={
                <p>
                  Why do I do this? The digital realm is the new wild west.{" "}
                  <strong className="text-white">
                    I break things to secure them.
                  </strong>
                  <br />
                  <br />I hunt vulnerabilities not just for the thrill of the
                  exploit, but to ensure that when the real threats come
                  knocking, the doors are locked tight. It's about power,
                  responsibility, and a little bit of calculated chaos.
                </p>
              }
            />

            <div className="grid md:grid-cols-2 gap-8">
              <TerminalWindow
                filename="classified_logs.json"
                index={2}
                content={
                  <p>
                    {"{"}
                    <br />
                    &nbsp;&nbsp;"event": "incident_01",
                    <br />
                    &nbsp;&nbsp;"desc": "Almost ran 'rm -rf /' on prod",
                    <br />
                    &nbsp;&nbsp;"status": "Mitigated",
                    <br />
                    &nbsp;&nbsp;"lesson": "Always double check sudo"
                    <br />
                    {"}"}
                    <br />
                    <br />
                    Every bug I find, every CTF flag I capture, adds a new line
                    to my source code.
                  </p>
                }
              />

              <TerminalWindow
                filename="dream.exe"
                index={3}
                content={
                  <p className="text-red-300">
                    Executing dream sequence...
                    <br />
                    <br />
                    Goal: To be the{" "}
                    <span className="text-white font-bold underline decoration-red-500">
                      King of Pirates
                    </span>
                    ... in Cybersecurity.
                    <br />
                    <br />
                    To reach a level of mastery where no system is opaque, and
                    no defense is absolute. Building the Great Cyber Era.
                  </p>
                }
              />
            </div>
          </motion.div>

          {/* Right Column: Skills Matrix & Image - Parallax Speed Faster/Reverse */}
          <motion.div 
            style={{ y: rightColumnY }}
            className="xl:col-span-5 flex flex-col gap-8 h-full"
          >
            <div className="bg-[#050505] border border-red-900/30 p-6 h-fit sticky top-24">
              <h3 className="text-xl font-mono text-red-500 border-b border-red-900/50 pb-4 mb-6 flex items-center gap-2">
                <Cpu className="animate-spin-slow" /> SKILL_MATRIX_LOADED
              </h3>

              <div className="grid gap-6">
                {skillCategories.map((cat, idx) => (
                  <motion.div 
                    key={idx} 
                    className="group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {cat.icon}
                      <h4 className="font-bold text-white group-hover:text-red-400 transition-colors uppercase tracking-wider text-sm">
                        {cat.title}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pl-8 border-l border-red-900/30">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono px-2 py-1 bg-red-950/10 border border-red-900/30 text-gray-400 hover:bg-red-600 hover:text-black hover:border-red-600 transition-all cursor-crosshair"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="relative mt-8 border border-red-600/30 p-1 group overflow-hidden">
                <div className="absolute inset-0 bg-red-600/5 group-hover:bg-red-600/10 transition-colors z-10" />
                <img
                  src="/hulo-biral-cyber-security-alone.jpg"
                  alt="Deep thought"
                  className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 border-t border-red-600 px-3 py-1 flex justify-between items-center z-20">
                  <span className="text-red-500 text-[10px] font-mono animate-pulse">
                    ● LIVE FEED
                  </span>
                  <span className="text-white text-[10px] font-mono">
                    STATUS: SEARCHING_JOB
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}