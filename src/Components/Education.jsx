import { motion } from "framer-motion";

const education = [
  {
    number: "01",
    institution: "Indira Gandhi National Open University",
    shortName: "IGNOU",
    degree: "Master of Computer Applications",
    abbreviation: "MCA",
    period: "2026 — Present",
    status: "Currently Pursuing",
    description:
      "Pursuing a Master's degree in Computer Applications with a focus on strengthening software development and computer science fundamentals.",
    current: true,
  },
  {
    number: "02",
    institution: "Guru Gobind Singh Indraprastha University",
    shortName: "GGSIPU",
    degree: "Bachelor of Computer Applications",
    abbreviation: "BCA",
    period: "2022 — 2025",
    status: "Completed",
    description:
      "Completed a Bachelor's degree in Computer Applications, building a strong foundation in programming, databases, software development and computer science.",
    current: false,
  },
];

const Education = () => {
  return (
    <section
      id="education"
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

      {/* Glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-blue-600/[0.06] blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-600/[0.06] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <div className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-blue-400">
            <span className="h-px w-8 bg-blue-400/60" />
            Education
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-4xl font-bold tracking-[-0.035em] sm:text-5xl md:text-6xl">
              Learning that{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                keeps moving.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-6 text-white/35">
              My academic journey and the foundation behind my approach to
              software development.
            </p>
          </div>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[23px] top-6 hidden h-[calc(100%-48px)] w-px bg-gradient-to-b from-blue-400/30 via-white/[0.08] to-transparent md:block" />

          <div className="space-y-6">
            {education.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className="relative md:pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[17px] top-10 hidden md:block">
                  <div
                    className={`h-3.5 w-3.5 rounded-full border-2 border-[#08090d] ${
                      item.current
                        ? "bg-green-400 shadow-[0_0_18px_rgba(74,222,128,0.5)]"
                        : "bg-blue-400/70"
                    }`}
                  />
                </div>

                {/* Card */}
                <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.15] hover:bg-white/[0.035] sm:p-9 lg:p-10">
                  {/* Glow */}
                  <div className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full bg-blue-500/[0.05] blur-[90px] transition-all duration-500 group-hover:bg-blue-500/[0.12]" />

                  <div className="relative grid gap-8 lg:grid-cols-[0.8fr_1.4fr_auto] lg:items-center">
                    {/* Number */}
                    <div>
                      <span className="font-mono text-xs text-white/20">
                        {item.number}
                      </span>

                      <div className="mt-5">
                        <span
                          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider ${
                            item.current
                              ? "border-green-400/10 bg-green-400/[0.04] text-green-400/70"
                              : "border-white/[0.07] bg-white/[0.02] text-white/25"
                          }`}
                        >
                          {item.current && (
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                          )}

                          {item.status}
                        </span>
                      </div>
                    </div>

                    {/* Main */}
                    <div>
                      <div className="font-mono text-xs uppercase tracking-[0.15em] text-blue-400/70">
                        {item.shortName}
                      </div>

                      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white/90 sm:text-3xl">
                        {item.degree}
                      </h3>

                      <p className="mt-2 text-sm text-white/35">
                        {item.institution}
                      </p>

                      <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40">
                        {item.description}
                      </p>
                    </div>

                    {/* Year */}
                    <div className="lg:text-right">
                      <div className="font-mono text-sm text-white/50">
                        {item.period}
                      </div>

                      <div className="mt-2 font-mono text-[10px] uppercase tracking-wider text-white/20">
                        {item.abbreviation}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 flex items-center gap-3 font-mono text-xs text-white/20"
        >
          <span className="h-px w-8 bg-white/10" />
          Learning never stops.
        </motion.div>
      </div>
    </section>
  );
};

export default Education;