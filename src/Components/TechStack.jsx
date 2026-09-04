import { motion } from "framer-motion";

const techGroups = [
  {
    number: "01",
    title: "Languages",
    items: [
      { name: "JavaScript", level: "ES6+" },
      { name: "TypeScript", level: "Primary" },
      { name: "C++", level: "Core" },
      { name: "Java", level: "Core" },
      { name: "Python", level: "Core" },
      { name: "SQL", level: "Database" },
      { name: "HTML5", level: "Markup" },
      { name: "CSS3", level: "Styling" },
    ],
  },
  {
    number: "02",
    title: "Frontend",
    items: [
      { name: "React.js", level: "Primary" },
      { name: "Next.js", level: "Framework" },
      { name: "Redux Toolkit", level: "State" },
      { name: "Tailwind CSS", level: "UI" },
      { name: "Bootstrap", level: "UI" },
      { name: "Framer Motion", level: "Animation" },
    ],
  },
  {
    number: "03",
    title: "Backend",
    items: [
      { name: "Node.js", level: "Runtime" },
      { name: "Express.js", level: "Framework" },
      { name: "REST APIs", level: "Architecture" },
      { name: "JWT", level: "Authentication" },
    ],
  },
  {
    number: "04",
    title: "Database",
    items: [
      { name: "MongoDB", level: "NoSQL" },
      { name: "MySQL", level: "SQL" },
      { name: "Firebase", level: "Firestore" },
    ],
  },
  {
    number: "05",
    title: "Tools",
    items: [
      { name: "Git", level: "Version Control" },
      { name: "GitHub", level: "Repository" },
      { name: "Postman", level: "API Testing" },
      { name: "VS Code", level: "Editor" },
      { name: "Vite", level: "Build Tool" },
      { name: "Thunder Client", level: "API Testing" },
    ],
  },
];

const TechStack = () => {
  return (
    <section
      id="tech-stack"
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
      <div className="pointer-events-none absolute left-1/4 top-20 h-[400px] w-[400px] rounded-full bg-purple-600/[0.06] blur-[140px]" />

      {/* Blue Glow */}
      <div className="pointer-events-none absolute right-0 bottom-10 h-[400px] w-[400px] rounded-full bg-blue-600/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
            <span className="h-px w-8 bg-cyan-400/60" />
            Tech Stack
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-4xl font-bold tracking-[-0.035em] sm:text-5xl md:text-6xl">
              Tools I use to{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                build.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-6 text-white/35">
              Technologies and tools I use to build modern, scalable and
              production-ready applications.
            </p>
          </div>
        </motion.div>

        {/* Tech Groups */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((group, index) => (
            <motion.div
              key={group.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.15] hover:bg-white/[0.035] ${group.number === "05" ? "md:col-span-2 lg:col-span-1" : ""
                }`}
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-purple-500/[0.06] blur-[60px] transition-all duration-500 group-hover:bg-purple-500/[0.13]" />

              {/* Header */}
              <div className="relative mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-white/20">
                    {group.number}
                  </span>

                  <h3 className="text-lg font-semibold text-white/85">
                    {group.title}
                  </h3>
                </div>

                <span className="font-mono text-[10px] text-white/20">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>

              {/* Technologies */}
              <div className="relative space-y-2">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between rounded-xl border border-white/[0.05] bg-white/[0.015] px-4 py-3 transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.035]"
                  >
                    <span className="text-sm text-white/65">
                      {item.name}
                    </span>

                    <span className="font-mono text-[9px] uppercase tracking-wider text-white/20">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Code Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center gap-2 font-mono text-xs text-white/20"
        >
          <span className="text-purple-400/60">const</span>
          <span className="text-blue-400/60">stack</span>
          <span>=</span>
          <span className="text-green-400/50">"always evolving"</span>
          <span>;</span>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;