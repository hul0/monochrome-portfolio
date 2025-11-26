"use client";

import {
  Terminal,
  ShieldAlert,
  ShieldCheck,
  Code,
  Wrench,
  FileText,
  Cpu,
  TvIcon,
} from "lucide-react";
import { title } from "process";

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
        <span>{filename}</span>
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
        "Penetration Testing",
        "Red Teaming",
        "SQL Injection",
        "Cross-Site-Scripting",
        "Social Engineering",
        "OSINT",
        "Cyber Threat Hunting",
      ],
    },
    {
      title: "Defensive Strategy",
      icon: <ShieldCheck className="w-5 h-5 text-primary" />,
      skills: [
        "Security Hardening",
        "Firewall Config",
        "Incident Response",
        "Blue Teaming Tactics",
        "Network Analysis",
        "Logs Monitoring",
        "IPS & IDS Configuration",
      ],
    },
    {
      title: "Code & Scripting",
      icon: <Code className="w-5 h-5 text-primary" />,
      skills: [
        "Python",
        "C",
        "C++",
        "Rust",
        "Shell/Bash",
        "JavaScript/TypeScript",
        "SQL",
        "Kotlin",
      ],
    },
    {
      title: "Infrastructure & Tools",
      icon: <Wrench className="w-5 h-5 text-primary" />,
      skills: [
        "Linux Administration",
        "Docker",
        "Git/GitHub",
        "Apache/NGINX",
        "Cloud Computing",
      ],
    },
    {
      title: "Others",
      icon: <TvIcon className="w-5 h-5 text-primary"/>,
      skills: [
        "HTML",
        "CSS",
        "MySQL",
        "PHP",
        "POSTGRESQL",
        "MONGODB",
        "REACT.JS",
        "NEXT.JS",
        "SEO",
        "ASO",
        "TAILWINDCSS"
      ],
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8 py-24 relative"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-16 border-b border-white/10 pb-8">
          <div className="p-4 glass rounded-full border border-primary/40 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <Terminal className="w-8 h-8 text-primary" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground uppercase text-glow">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="font-mono text-muted-foreground text-sm tracking-widest mt-2">
              :: Who is Hulo? ::
            </p>
          </div>
        </div>

        <div className="grid xl:grid-cols-12 gap-12">
          {/* Left Column: Terminals */}
          <div className="xl:col-span-7 space-y-8">
            <TerminalWindow
              filename="whoami"
              content={
                <p>
                  hulobiral <br /> <br />
                  Hulo is a cat who loves Burgers. But that would be me.
                  <br />
                  <br />
                  Hulo name was originated from my cat. He was a
                  <span className="text-primary"> Badmosh Billa. </span> He was
                  perfect! Better than all other cats, but .... he had one flaw!
                  He was mortal. So he died just like any other cat.
                </p>
              }
            />

            <TerminalWindow
              filename="cat d34th.txt"
              content={
                <p>
                  Hey
                  <strong className="text-primary">
                    {" When do you think a person dies?"}
                  </strong>
                  <br />
                  <br />
                  When a bullet from a pistol pierces his heart?{" "}
                  <strong className="text-primary"> No! </strong> When he is
                  attacked by an incurable disease?{" "}
                  <strong className="text-primary"> No! </strong> When he eats a
                  super deadly poisonous mushroom?{" "}
                  <strong className="text-primary">No!</strong> <br /> <br />
                  <strong className="text-primary">
                    A man dies when people forget him
                  </strong>
                </p>
              }
            />

            <div className="grid md:grid-cols-2 gap-8">
              <TerminalWindow
                filename="cat promise.txt"
                content={
                  <p>
                    3 Years ago, a promise was made to my cat. I'll get
                    stronger! Strong enough that his name reaches up to the
                    heavens.
                  </p>
                }
              />

              <TerminalWindow
                filename="./dream.sh"
                content={
                  <p className="text-primary">
                    The journey begins...
                    <br />
                    <br />
                    I'll be the{" "}
                    <span className="text-white font-bold underline decoration-primary">
                      King of the Pirates
                    </span>
                  </p>
                }
              />
            </div>
          </div>

          {/* Right Column: Skills */}
          <div className="xl:col-span-5 flex flex-col gap-8 h-full">
            <div className="glass-card p-8 rounded-3xl h-fit sticky top-24 border-primary/20">
              <h3 className="text-xl font-mono text-primary border-b border-white/10 pb-4 mb-6 flex items-center gap-2">
                <Cpu /> Skills
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

              {/* <div className="relative mt-8 rounded-2xl overflow-hidden border border-white/10 group">
                <img
                  src="/hulo-biral-cyber-security-alone.jpg"
                  alt="Deep thought"
                  className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-primary/50 px-4 py-2 flex justify-between items-center">
                  <span className="text-primary text-[10px] font-mono animate-pulse">
                    ● LIVE FEED
                  </span>
                  <span className="text-white text-[10px] font-mono">
                    STATUS: SEARCHING_JOB
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
