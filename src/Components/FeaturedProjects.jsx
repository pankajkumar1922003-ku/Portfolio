import { motion } from "framer-motion";

const featuredProjects = [
    {
        number: "01",
        title: "Catalogue Management System",
        category: "Production Web Application",
        description:
            "Developed during my Software Development internship as a production-grade catalogue management system for the organization, focused on inventory, billing and order management with real-time data synchronization.",
        tech: ["React.js", "TypeScript", "Firebase", "REST APIs"],
        features: [
            "Real-time inventory management",
            "Barcode scanning",
            "Search & filtering",
            "Invoice generation",
            "Responsive dashboards",
        ],
        live: "https://app.sellar.in/",
    },

    {
        number: "02",
        title: "Employee Management System",
        category: "Full Stack Application",
        description:
            "A secure full-stack employee management platform with authentication, role-based access control and complete employee lifecycle management.",
        tech: [
            "React.js",
            "TypeScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT",
        ],
        features: [
            "JWT authentication",
            "Role-based access control",
            "Complete CRUD operations",
            "Dashboard analytics",
            "Protected routes",
        ],
        github: "https://github.com/pankajkumar1922003-ku/EMS",
        live: "https://ems-client-hr3d.onrender.com/login",
    },

    {
        number: "03",
        title: "TaskFlow — Task Board",
        category: "Full Stack Application",
        description:
            "A full-stack task board application built with React, Node.js, Express and SQLite. It provides task management through columns with validation, filtering, search, error handling and automated backend testing.",
        tech: [
            "React.js",
            "Vite",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "SQLite",
            "Jest",
            "Supertest",
        ],
        features: [
            "Create / edit / delete tasks",
            "Move tasks between columns",
            "Priority filtering",
            "Title search",
            "Frontend + backend validation",
            "Graceful error handling",
            "Backend automated tests",
        ],
        github: "https://github.com/pankajkumar1922003-ku/TaskFlow-Task-Board-Application",
        live: "https://taskflow-frontend-prh4.onrender.com/",
    },

    {
        number: "04",
        title: "Signup Wizard Replication",
        category: "Frontend Application",
        description:
            "A high-fidelity frontend replication of a mobile app's signup wizard, built as a responsive web application with multi-step navigation, real-time validation, OTP verification simulation, error handling and loading states.",
        tech: [
            "React.js",
            "Responsive UI",
            "Multi-Step Forms",
            "Form Validation",
        ],
        features: [
            "Multi-step navigation",
            "Real-time validation",
            "OTP verification simulation",
            "Error handling",
            "Loading states",
            "Improved user experience",
        ],
        github: "https://github.com/pankajkumar1922003-ku/signup-wizard-replication",
        live: "#",
    },
];

const FeaturedProjects = () => {
    return (
        <section
            id="featured-projects"
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
            <div className="pointer-events-none absolute -left-40 top-40 h-[450px] w-[450px] rounded-full bg-purple-600/[0.07] blur-[140px]" />

            <div className="pointer-events-none absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full bg-blue-600/[0.07] blur-[140px]" />

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
                        Featured Projects
                    </div>

                    <h2 className="max-w-4xl text-4xl font-bold tracking-[-0.035em] sm:text-5xl md:text-6xl">
                        Selected work that{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            solves problems.
                        </span>
                    </h2>

                    <p className="mt-6 max-w-2xl text-sm leading-7 text-white/35 sm:text-base">
                        A closer look at some of the applications I've built using modern
                        frontend, backend and database technologies.
                    </p>
                </motion.div>

                {/* Featured Projects */}
                <div className="space-y-8">
                    {featuredProjects.map((project, index) => (
                        <motion.article
                            key={project.number}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.12,
                            }}
                            className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0c0e13]/80 backdrop-blur-xl"
                        >
                            {/* Project Glow */}
                            <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-purple-500/[0.06] blur-[120px] transition-all duration-700 group-hover:bg-purple-500/[0.11]" />

                            <div className="relative grid lg:grid-cols-[1.15fr_0.85fr]">

                                {/* Left Side — Project Details */}
                                <div className="p-7 sm:p-10 lg:p-12">

                                    {/* Number + Category */}
                                    <div className="flex items-center justify-between">
                                        <span className="font-mono text-xs text-white/20">
                                            {project.number}
                                        </span>

                                        <span className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-white/30">
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="mt-12 max-w-xl text-3xl font-bold tracking-[-0.03em] text-white/90 sm:text-4xl">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
                                        {project.description}
                                    </p>

                                    {/* Tech */}
                                    <div className="mt-7 flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 font-mono text-[10px] text-white/40"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Buttons */}
                                    <div className="mt-9 flex flex-wrap gap-3">
                                        {project.github && project.github !== "#" && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="group/btn flex items-center gap-2 rounded-full border border-white/[0.1] px-5 py-3 font-mono text-xs text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
                                            >
                                                GitHub
                                                <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                                                    ↗
                                                </span>
                                            </a>
                                        )}

                                        {project.live && project.live !== "#" && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="group/btn flex items-center gap-2 rounded-full bg-white px-5 py-3 font-mono text-xs font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(255,255,255,0.12)]"
                                            >
                                                Live Demo
                                                <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                                                    ↗
                                                </span>
                                            </a>
                                        )}
                                    </div>
                                </div>


                                {/* Right Side — Key Features */}
                                <div className="border-t border-white/[0.07] bg-white/[0.015] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">

                                    <div className="flex h-full flex-col justify-center">

                                        <span className="mb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-purple-400/70">
                                            Key Features
                                        </span>

                                        <div className="space-y-4">
                                            {project.features.map((feature) => (
                                                <div
                                                    key={feature}
                                                    className="group/feature flex items-center gap-3 text-sm text-white/45 transition-colors duration-300 hover:text-white/80"
                                                >
                                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-purple-400/20 bg-purple-400/[0.06] text-xs text-purple-400/80">
                                                        +
                                                    </span>

                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-12 flex items-center gap-3 font-mono text-xs text-white/20"
                >
                    <span className="h-px w-8 bg-white/10" />
                    Built with curiosity and code.
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedProjects;