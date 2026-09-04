import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#08090d] text-white">
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.045]">
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
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[140px]" />

      {/* Blue Glow */}
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

      {/* Green Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-green-500/[0.03] blur-[100px]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-16 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">

          {/* LEFT */}
          <div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 flex items-center gap-3 font-mono text-xs text-green-400 sm:text-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>

              Available for opportunities
            </motion.div>

            {/* Intro */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-3 font-mono text-sm text-white/35"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-5xl font-bold tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Pankaj
              <span className="ml-3.5 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Kumar.
              </span>
            </motion.h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 flex items-center gap-3"
            >
              <span className="font-mono text-lg text-purple-400">
                &lt;/&gt;
              </span>

              <h2 className="text-xl font-medium text-white/80 sm:text-2xl">
                Full Stack Developer
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg"
            >
              I build modern, scalable, and user-centric web applications using React.js, TypeScript, and the MERN stack, combining intuitive frontend experiences with robust backend solutions.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-6 flex flex-wrap gap-4"
            >
              <a
                href="#featured-projects"
                className="group flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(255,255,255,0.12)]"
              >
                Explore My Work

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/5 hover:text-white"
              >
                Let's Connect
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.65,
              }}
              className="mt-6 flex items-center gap-3"
            >
              {/* GitHub */}
              <a
                href="https://github.com/pankajkumar1922003-ku"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/5 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.89c-2.78.62-3.37-1.2-3.37-1.2-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.54 1.06 1.54 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.15c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/pankaj-kumar-12959533a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 9.15H5.7V18h2.64V9.15zM7.02 5.5a1.53 1.53 0 1 0 0 3.06 1.53 1.53 0 0 0 0-3.06zM18.3 12.91c0-2.33-1.24-3.42-2.9-3.42-1.34 0-1.94.74-2.27 1.26V9.15h-2.64V18h2.64v-4.38c0-1.16.22-2.29 1.66-2.29 1.42 0 1.44 1.33 1.44 2.37V18h2.65l-.58-5.09z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/_pankajprajapati_78/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/50 hover:bg-pink-400/10 hover:text-pink-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* RIGHT CODE CARD */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              x: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.25,
            }}
            className="block w-full"
          >
            <div className="relative mx-auto w-full max-w-[480px]">

              {/* Glow */}
              <div className="absolute inset-10 rounded-full bg-purple-500/10 blur-[90px]" />

              {/* Rotating Ring */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-5 rounded-[45%] border border-dashed border-white/[0.06]"
              />

              {/* Card */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d0f14]/90 shadow-2xl backdrop-blur-xl">

                {/* Top bar */}
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                  </div>

                  <span className="font-mono text-xs text-white/25">
                    developer.ts
                  </span>

                  <span className="text-xs text-green-400/50">
                    TS
                  </span>
                </div>

                {/* Code */}
                <div className="p-7 font-mono text-sm leading-8">
                  <p>
                    <span className="text-purple-400">
                      const
                    </span>{" "}
                    <span className="text-blue-300">
                      developer
                    </span>{" "}
                    = {"{"}
                  </p>

                  <p className="pl-5">
                    <span className="text-white/30">
                      name:
                    </span>{" "}
                    <span className="text-green-300">
                      "Pankaj Kumar"
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    <span className="text-white/30">
                      role:
                    </span>{" "}
                    <span className="text-green-300">
                      "Full Stack Developer"
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    <span className="text-white/30">
                      frontend:
                    </span>{" "}
                    <span className="text-yellow-300">
                      "React.js, Redux Toolkit, Tailwind CSS, Bootstrap, Framer Motion"
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    <span className="text-white/30">
                      language:
                    </span>{" "}
                    <span className="text-yellow-300">
                      JavaScript (ES6+), TypeScript, Java, Python, C++, HTML5, CSS3, SQL
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    <span className="text-white/30">
                      backend:
                    </span>{" "}
                    <span className="text-yellow-300">
                      Node.js, Express.js, REST APIs, JWT Authentication
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    <span className="text-white/30">
                      database:
                    </span>{" "}
                    <span className="text-yellow-300">
                      MongoDB, MySQL, Firebase Firestore
                    </span>
                  </p>

                  <p>{"}"}</p>
                </div>

                {/* Terminal */}
                <div className="mx-6 mb-6 rounded-xl border border-green-400/10 bg-green-400/[0.03] p-4 font-mono text-xs">
                  <div className="text-green-400/80">
                    <span className="text-green-400">
                      $
                    </span>{" "}
                    npm run build
                  </div>

                  <div className="mt-1 text-white/25">
                    ✓ compiled successfully
                  </div>

                  <div className="text-white/25">
                    ✓ production ready
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll */}
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/25 md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.35em]">
          Scroll
        </span>

        <span className="text-sm">↓</span>
      </motion.div>
    </section>
  );
};

export default Hero;