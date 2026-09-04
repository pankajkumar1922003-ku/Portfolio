import { motion } from "framer-motion";

const experiences = [
  {
    number: "01",
    company: "SELLAR",
    role: "Software Developer Intern",
    period: "Dec 2025 — Present",
    current: true,

    description:
      "Currently working as a Software Developer Intern at SELLAR, a startup that builds software solutions for businesses, including POS, catalogue management, inventory, billing, order management and event management systems. I contribute to the development of production-grade web applications and work on building user-friendly, scalable and efficient software solutions.",

    achievements: [
      "Worked on a catalogue management system designed to help businesses efficiently manage products, inventory and related operations.",
      "Contributed to building and improving software features for business workflows, including product management, billing and order-related functionality.",
      "Developed reusable and responsive user interfaces while working with modern frontend technologies and real-time data systems.",
    ],

    stack: ["React.js", "TypeScript", "Firebase", "REST APIs"],
  },

  {
    number: "02",
    company: "TECH ACCESS LEARNING PVT. LTD.",
    role: "Android App Developer",
    period: "Jun 2024 — Jul 2024",
    current: false,

    description:
      "Worked as an Android App Developer at Tech Access Learning Pvt. Ltd., where I developed a Notes Reminder application using Java and the Android SDK. The application was designed to help users create, manage and organize notes while also allowing them to set reminders for important tasks and events.",

    achievements: [
      "Developed the Notes Reminder application using Java and Android SDK.",
      "Implemented functionality for creating, editing and deleting notes within the application.",
      "Added scheduled reminders and notification functionality to help users remember important tasks and notes.",
      "Built responsive application screens using Android Activities and Fragments.",
      "Contributed to application testing, debugging and improving the overall user experience.",
    ],

    stack: ["Java", "Android SDK", "Activities", "Fragments"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#08090d] px-6 py-14 text-white lg:px-8"
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

      {/* Glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-purple-600/[0.06] blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-600/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-purple-400">
            <span className="h-px w-8 bg-purple-400/60" />
            Experience
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-4xl font-bold tracking-[-0.035em] sm:text-5xl md:text-6xl">
              Where I've{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                worked.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-6 text-white/35">
              Hands-on experience building applications, solving technical
              problems and working with modern development technologies.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[19px] top-0 hidden h-full w-px bg-gradient-to-b from-purple-400/30 via-white/[0.08] to-transparent md:block" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className="relative md:pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[13px] top-8 hidden md:block">
                  <div
                    className={`h-3.5 w-3.5 rounded-full border-2 border-[#08090d] ${experience.current
                        ? "bg-green-400 shadow-[0_0_18px_rgba(74,222,128,0.55)]"
                        : "bg-purple-400/70"
                      }`}
                  />
                </div>

                {/* Card */}
                <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 backdrop-blur-sm transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.035] sm:p-9 lg:p-10">
                  {/* Glow */}
                  <div className="pointer-events-none absolute -right-28 -top-28 h-64 w-64 rounded-full bg-purple-500/[0.05] blur-[90px] transition-all duration-500 group-hover:bg-purple-500/[0.11]" />

                  <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.5fr]">
                    {/* Left */}
                    <div>
                      <div className="mb-2 flex items-center justify-between lg:block">
                        <span className="font-mono text-xs text-white/20">
                          {experience.number}
                        </span>

                        {experience.current && (
                          <span className="inline-flex items-center gap-2 rounded-full border border-green-400/10 bg-green-400/[0.04] px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-green-400/70 lg:mt-5">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                            Current
                          </span>
                        )}
                      </div>

                      <p className="font-mono text-xs uppercase tracking-[0.15em] text-purple-400/70">
                        {experience.company}
                      </p>

                      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white/90">
                        {experience.role}
                      </h3>

                      <p className="mt-3 font-mono text-xs text-white/25">
                        {experience.period}
                      </p>
                    </div>

                    {/* Right */}
                    <div>
                      <p className="max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="mt-7 space-y-4">
                        {experience.achievements.map((achievement) => (
                          <div
                            key={achievement}
                            className="flex gap-3 text-sm leading-6 text-white/50"
                          >
                            <span className="mt-1 font-mono text-xs text-purple-400/60">
                              +
                            </span>

                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stack */}
                      <div className="mt-8 flex flex-wrap gap-2">
                        {experience.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 font-mono text-[10px] text-white/35 transition-colors duration-300 group-hover:text-white/55"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 flex items-center gap-3 font-mono text-xs text-white/20"
        >
          <span className="h-px w-8 bg-white/10" />
          Growing through every project and experience.
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;