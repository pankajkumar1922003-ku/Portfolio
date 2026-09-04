import { motion } from "framer-motion";

const capabilities = [
  {
    number: "01",
    title: "Frontend",
    description:
      "Building responsive and interactive interfaces with React.js, TypeScript and Tailwind CSS.",
    tech: "React.js · Next.js · TypeScript · Tailwind",
  },
  {
    number: "02",
    title: "Backend",
    description:
      "Developing reliable APIs and backend systems with Node.js, Express.js and REST APIs.",
    tech: "Node.js · Express.js · REST APIs",
  },
  {
    number: "03",
    title: "Database",
    description:
      "Working with structured and real-time data using MongoDB, MySQL and Firebase Firestore.",
    tech: "MongoDB · MySQL · Firebase",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#08090d] px-6 py-16 text-white lg:px-8"
    >
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Purple Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-purple-600/[0.07] blur-[130px]" />

      {/* Blue Glow */}
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-600/[0.07] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-purple-400">
            <span className="h-px w-8 bg-purple-400/60" />
            About Me
          </div>

          <h2 className="max-w-4xl text-4xl font-bold tracking-[-0.035em] sm:text-5xl md:text-6xl">
            Turning ideas into{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              scalable
            </span>{" "}
            digital experiences.
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="max-w-xl text-base leading-8 text-white/50 sm:text-lg">
              I'm a Software Developer passionate about building modern,
              scalable and user-focused web applications. I enjoy turning
              complex problems into clean, practical and intuitive digital
              experiences.
            </p>

            <p className="mt-2 max-w-xl text-base leading-8 text-white/40 sm:text-lg">
              My primary focus is on{" "}
              <span className="text-white/70">React.js, Next.js, TypeScript</span> and
              the <span className="text-white/70">MERN stack</span>, with
              hands-on experience building production-grade applications,
              REST APIs, responsive interfaces and real-time systems.
            </p>

            {/* Mini Stats */}
            <div className="mt-8 flex flex-wrap gap-8 border-t border-white/[0.08] pt-8">
              <div>
                <div className="font-mono text-2xl font-semibold text-white">
                  20+
                </div>
                <div className="mt-1 text-xs text-white/35">
                  Reusable Components
                </div>
              </div>

              <div>
                <div className="font-mono text-2xl font-semibold text-white">
                  3+
                </div>
                <div className="mt-1 text-xs text-white/35">
                  Full-Stack Projects
                </div>
              </div>

              <div>
                <div className="font-mono text-2xl font-semibold text-white">
                  MERN
                </div>
                <div className="mt-1 text-xs text-white/35">
                  Primary Stack
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Capabilities */}
          <div className="space-y-3">
            {capabilities.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.15] hover:bg-white/[0.035]"
              >
                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-500/[0.08] blur-[60px] transition-all duration-500 group-hover:bg-purple-500/[0.15]" />

                <div className="relative flex gap-5">
                  {/* Number */}
                  <div className="pt-1 font-mono text-xs text-white/20">
                    {item.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white/90">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/40">
                      {item.description}
                    </p>

                    <div className="mt-4 font-mono text-[11px] text-purple-400/60">
                      {item.tech}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white/60">
                    ↗
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 border-t border-white/[0.08] pt-8"
        >
          <p className="font-mono text-xs leading-6 text-white/25 sm:text-sm">
            <span className="text-purple-400/60">&gt;</span>{" "}
            Always learning. Always building. Always improving.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;