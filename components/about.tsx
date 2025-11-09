import QuoteComponent from "./quote";
export function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8 py-20 md:py-0 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 tracking-tighter">
          About
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div className="space-y-6 md:space-y-8">
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              Hulo is a cat who loves Burgers. I am Hulo Biral. In this about
              section , you will not know anything "About" me at all. If you
              want to know about me , you better do that by yourself (You can
              stalk , OSINT & gather information about me , you can dox me ,
              leak almost every secret of mine to the world... except my ssh
              keys ). All you're gonna find here is my tech stack , skills that
              i've learned since 2022 , my personal favourite tools (or maybe
              the ones i remember right now) for cybersecurity and other tech
              stuff. I have bugs just like any other human , so you might notice
              some grammatical or human errors , kindly ignore or report them to
              me.
            </p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              Even though this portfolio website was written by V0 ai chatbot by
              Vercel , not a single word (known as "String" to the programming
              world) you see here is AI Written . Why ? because AI might code
              better than me , but it lacks the most important thing , my
              Personality.
            </p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              When I'm talking about my personality , what do you think is my
              personality? The answer varies from people to people.
              {/*               
              To some
              people , I might be arrogant , egoist , narcissist , Pessimist ,
              Impulsive, Deceptive , Manipulative , Paranoid , Coward ,
              Unreliable , Lazy , Rude , Attention-Seeking ,
              Stubborn and Cynical . To some people , I Might be Empathetic ,
              confident , humble , honest , loyal , resilient , reliable ,
              helpful , open-minded , generous , creative , tolerant , forgiving
              , chill , cool , calm , composed , respectful , supportive ,
              patient , adaptable & technical genious.
               */}
              Different pictures of me exist in the mind of different people. So
              it's hard for me to know how I am (or i will be) to you. But i am
              eager to know that from you ! I would love to hear from you , and
              i will be more than happy knowing which image of me exists in your
              memory. If you don't wanna share , that's fine , we should
              not share everything online, especially images which include your face.
            </p>
            <p className="text-base text-shadow-white/80 leading-loose">
              (I guess enough meaningless squabble....) Well , Don't i know that my
              works matter more than my meaningless squabble ? Maybe the
              Vegeta inside me heard that... <br></br> meaningless huh ??
            </p>
            <QuoteComponent
              quote="MEANINGLESS, HUH? WHAT DO YOU KNOW OF MEANINGLESS? Spend most of your life ruled by another! Watch your race dwindle to a handful! AND THEN, tell me what has more meaning than your own strength! I have in me the blood of a Saiyan prince. He is nothing but a joke! Yet I've had to watch him surpass me in strength, my destiny thrown to the wayside! He's... he's even saved my life as if I were a helpless child. He has stolen my honor, and his debts... must be paid!"
              author="Vegeta"
              authorRole="Prince of all saiyans"
              image="/hulo-biral-cyber-security-meaningless-huhh.jpg"
              imageHeight={200}
              imageWidth={200}
              schemaType="Comment"
              datePublished="2025-11-09"
              variant="bordered"
              quoteColor="white"
              imagePosition="top"
              size="sm"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-sm md:text-base font-semibold mb-4 tracking-wide uppercase opacity-60">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {[
                  "Android App Development",
                  "Apache Administration",
                  "C/C++ Programming",
                  "Cloud Computing",
                  "Cyber Threat Hunting",
                  "Cybersecurity",
                  "DevOps",
                  "DevSecOps",
                  "Docker",
                  "Firewall Configuration",
                  "Frontend Web Development",
                  "Git",
                  "GitHub",
                  "Internet Security",
                  "Jetpack Compose",
                  "Kotlin",
                  "Linux System Administration",
                  "MySQL Database Management",
                  "Network Administration",
                  "Next.js",
                  "NGINX Administration",
                  "OSINT (Open Source Intelligence)",
                  "Penetration Testing",
                  "PostgreSQL Database Management",
                  "Project Management and Planning",
                  "Python Programming",
                  "Red Teaming",
                  "Rust Programming",
                  "Shell Scripting",
                  "SQL Injection Testing",
                  "Web Application Security",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 md:px-4 py-2 border border-white/20 text-xs md:text-sm hover:border-white/60 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-semibold mb-4 tracking-wide uppercase opacity-60">
                Job Experience
              </h3>
              <p>{"None - Please gimme a job :("}</p>
              <img
                src="/hulo-biral-cyber-security-alone.jpg"
                alt="Hulo biral is alone looking at sky thinking about cyber security"
                className="w-full h-full object-cover"
              />
              {/* <div className="space-y-4 md:space-y-6">
                <div className="border-l border-white/20 pl-4 md:pl-6">
                  <p className="font-semibold text-base md:text-lg">
                    Lead Design Director
                  </p>
                  <p className="text-white/50 text-sm md:text-base">
                    Digital Studio | 2021 - Present
                  </p>
                </div>
                <div className="border-l border-white/20 pl-4 md:pl-6">
                  <p className="font-semibold text-base md:text-lg">
                    Product Designer
                  </p>
                  <p className="text-white/50 text-sm md:text-base">
                    Tech Startup | 2018 - 2021
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
