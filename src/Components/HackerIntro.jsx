import { useEffect, useState } from "react";
import { motion } from "framer-motion"; 

const HackerIntro = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 500),
      setTimeout(() => setStep(2), 1100),
      setTimeout(() => setStep(3), 1700),
      setTimeout(() => setStep(4), 2300),
      setTimeout(() => setStep(5), 4200),
      setTimeout(() => onComplete(), 5600),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const lines = [
    "> Initializing system...",
    "> Establishing secure connection...",
    "> Access granted ✓",
  ];

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#030504] px-6"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.02,
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,197,94,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,197,94,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      {/* Green Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/[0.04] blur-[120px]" />

      {/* Scan Line */}
      <motion.div
        className="pointer-events-none absolute left-0 right-0 h-px bg-green-400/20"
        animate={{
          top: ["0%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Terminal */}
      <div className="relative w-full max-w-4xl font-mono">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-2 border-b border-green-500/10 pb-4"
        >
          <span className="h-3 w-3 rounded-full bg-red-500/60" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
          <span className="h-3 w-3 rounded-full bg-green-500/60" />

          <span className="ml-3 text-xs text-green-500/40 sm:text-sm">
            pankaj@portfolio:~
          </span>
        </motion.div>

        {/* Terminal Lines */}
        <div className="space-y-3 text-sm sm:text-base md:text-lg">
          {lines.map((line, index) => (
            <motion.div
              key={line}
              initial={{
                opacity: 0,
                x: -15,
              }}
              animate={{
                opacity: step > index ? 1 : 0,
                x: step > index ? 0 : -15,
              }}
              transition={{
                duration: 0.35,
              }}
              className={
                index === 2
                  ? "text-green-400"
                  : "text-green-500/60"
              }
            >
              {line}
            </motion.div>
          ))}

          {/* Welcome */}
          {step >= 4 && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="mt-10"
            >
              <div className="mb-4 text-xs tracking-[0.35em] text-green-500/40 sm:text-sm">
                [ SYSTEM READY ]
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-green-400 sm:text-5xl md:text-6xl">
                Welcome! to my world.
              </h1>

              <div className="mt-4 text-xl text-green-300/80 sm:text-3xl md:text-4xl">
                I'm Pankaj Kumar
              </div>

              <div className="mt-3 text-sm text-green-500/60 sm:text-lg">
                A Full Stack Developer
              </div>

              {/* Blinking Cursor */}
              <motion.span
                animate={{
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                }}
                className="ml-2 inline-block h-5 w-2 bg-green-400 align-middle sm:h-7 sm:w-2.5"
              />
            </motion.div>
          )}

          {/* Launching */}
          {step >= 5 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-10 text-xs text-green-500/50 sm:text-sm"
            >
              <span className="text-green-400">$</span>{" "}
              Launching portfolio...
            </motion.div>
          )}
        </div>
      </div>

      {/* Status */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between font-mono text-[9px] uppercase tracking-[0.25em] text-green-500/25 sm:text-xs">
        <span>System Online</span>
        <span>Secure Connection</span>
      </div>
    </motion.div>
  );
};

export default HackerIntro;