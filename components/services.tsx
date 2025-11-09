import { title } from "process";

export function Services() {
  const services = [
    {
      title: "Frontend Web Development",
      description: "High quality, classy, cool, responsive Frontend for Websites",
    },
    {
      title: "Full Stack Web Development",
      description:
        "High-performance web applications built with modern technologies and optimized for speed and accessibility.",
    },
    {
      title: "Search Engine Optimization",
      description:
        "Rank #1 on every search engines with my Search Engine Optimization  (Kidding , you'll rank #2)",
    },
    {
      title: "App Development",
      description:
        "Impactful, fast and efficient android apps",
    },
    {
      title: "Cybersecurity Consultant",
      description:
        "Guidance and monitoring to protect your services from cyber threats",
    },
    {
      title: "Penetration Testing",
      description:
        "Simulate real-world attack to know how vulnerable your services are.",
    },
    {
      title:"Security Hardening",
      description:"Setting FIrewalls, IDS/IPS, VPNs, Encryption, Monitoring, Educating Employees, Logs & Other blue teaming tactics to harden the security of your services"
    }
  ];

  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8 py-20 md:py-0 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-16 tracking-tighter">
          Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-white/10 hover:border-white/40 transition-colors duration-300 p-6 md:p-8 group"
            >
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 group-hover:opacity-75 transition-opacity">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-white/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 md:mt-20 group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10">
  <div className="flex flex-col items-center gap-4 p-6 md:flex-row md:gap-6 md:p-8">
    <div className="relative w-full shrink-0 overflow-hidden rounded-md md:w-64 lg:w-80">
      <img
        src="/hulo-biral-cyber-security-transition-i-need.jpeg"
        alt="Services illustration"
        className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
      />
    </div>
    <h2 className="text-center text-lg font-semibold text-white/90 md:text-left md:text-xl lg:text-2xl align-middle">
      The Transition I Need In My Career
    </h2>
  </div>
</div>

      </div>
    </section>
  );
}
