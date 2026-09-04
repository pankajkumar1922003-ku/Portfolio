import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#08090d] px-6 py-12 text-white lg:px-8"
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
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/[0.07] blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 top-20 h-[350px] w-[350px] rounded-full bg-blue-600/[0.06] blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-green-400">
            <span className="h-px w-8 bg-green-400/60" />
            Get In Touch
            <span className="h-px w-8 bg-green-400/60" />
          </div>

          <h2 className="mx-auto max-w-4xl text-4xl font-bold tracking-[-0.04em] sm:text-5xl md:text-7xl">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              great.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/35 sm:text-base">
            Have an opportunity, project or just want to talk about
            development? My inbox is always open.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-8 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0e13]/80 shadow-2xl backdrop-blur-xl sm:mt-14 sm:rounded-3xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.75fr]">

            {/* Left — Contact Information */}
            <div className="p-5 sm:p-8 md:p-10 lg:p-12">

              {/* Availability */}
              <div className="mb-6 flex items-center gap-3 sm:mb-8">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-400 shadow-[0_0_15px_rgba(74,222,128,0.5)]" />

                <span className="font-mono text-[10px] text-green-400/70 sm:text-xs">
                  Available for opportunities
                </span>
              </div>

              {/* Heading */}
              <h3 className="text-2xl font-semibold leading-tight text-white/90 sm:text-3xl">
                Have something in mind?
              </h3>

              {/* Description */}
              <p className="mt-4 max-w-lg text-sm leading-6 text-white/40 sm:leading-7">
                I'm always interested in discussing new projects, opportunities
                and ideas around software development.
              </p>

              {/* Email */}
              <a
                href="mailto:pankajkumar1922003@gmail.com"
                className="group mt-7 flex w-full items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.04] sm:mt-8 sm:gap-4 sm:rounded-2xl sm:p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] font-mono text-sm text-purple-400/70 sm:h-11 sm:w-11 sm:rounded-xl">
                  @
                </div>

                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[9px] uppercase tracking-wider text-white/20 sm:text-[10px]">
                    Email
                  </div>

                  <div className="mt-1 break-all text-xs leading-5 text-white/60 transition-colors group-hover:text-white sm:text-sm">
                    pankajkumar1922003@gmail.com
                  </div>
                </div>

                <span className="shrink-0 text-white/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white/60">
                  ↗
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+917827393725"
                className="group mt-3 flex w-full items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.04] sm:gap-4 sm:rounded-2xl sm:p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] font-mono text-sm text-blue-400/70 sm:h-11 sm:w-11 sm:rounded-xl">
                  #
                </div>

                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[9px] uppercase tracking-wider text-white/20 sm:text-[10px]">
                    Phone
                  </div>

                  <div className="mt-1 text-xs text-white/60 transition-colors group-hover:text-white sm:text-sm">
                    +91 7827393725
                  </div>
                </div>

                <span className="shrink-0 text-white/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white/60">
                  ↗
                </span>
              </a>
            </div>

            {/* Right — Social Links */}
            <div className="border-t border-white/[0.07] bg-white/[0.015] p-5 sm:p-8 md:p-10 lg:border-l lg:border-t-0 lg:p-12">

              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/20">
                Connect
              </div>

              <div className="mt-5 space-y-3 sm:mt-6">

                {/* GitHub */}
                <a
                  href="https://github.com/pankajkumar1922003-ku"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex w-full items-center justify-between gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.04] sm:rounded-2xl sm:p-4"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="shrink-0 font-mono text-xs text-white/30">
                      GH
                    </span>

                    <span className="text-sm text-white/50 transition-colors group-hover:text-white/80">
                      GitHub
                    </span>
                  </div>

                  <span className="shrink-0 text-white/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white/60">
                    ↗
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/pankaj-kumar-12959533a/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex w-full items-center justify-between gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.04] sm:rounded-2xl sm:p-4"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="shrink-0 font-mono text-xs font-bold text-white/30">
                      in
                    </span>

                    <span className="text-sm text-white/50 transition-colors group-hover:text-white/80">
                      LinkedIn
                    </span>
                  </div>

                  <span className="shrink-0 text-white/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white/60">
                    ↗
                  </span>
                </a>
              </div>

              {/* Location */}
              <div className="mt-7 border-t border-white/[0.07] pt-5 sm:mt-10 sm:pt-6">
                <div className="font-mono text-[9px] uppercase tracking-wider text-white/20 sm:text-[10px]">
                  Based in
                </div>

                <div className="mt-2 text-sm text-white/50">
                  New Delhi, India
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Terminal */}
          <div className="border-t border-white/[0.07] bg-black/20 px-5 py-4 sm:px-10">
            <div className="flex flex-wrap items-center gap-2 font-mono text-[9px] sm:text-[10px]">
              <span className="text-green-400/70">$</span>

              <span className="text-white/30">echo</span>

              <span className="text-purple-400/60">
                "Let's work together"
              </span>

              <span className="text-green-400/40">✓</span>
            </div>
          </div>
        </motion.div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-center font-mono text-xs text-white/20"
        >
          Have a great idea? Let's turn it into reality.
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;