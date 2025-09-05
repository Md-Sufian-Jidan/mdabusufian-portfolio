import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "LuxeMatches",
        description: "Premium matchmaking platform with role-based auth, Stripe payments, dynamic filtering, and admin control.",
        features: [
            "Role-based Access & Authentication: Firebase Auth + JWT protection.",
            "Stripe Payment Integration for secure contact requests.",
            "Dynamic Filtering & Pagination: Filter biodata by age, gender, division."
        ],
        tech: ["React", "Node.js", "MongoDB", "Firebase", "Tailwind", "Stripe", "Firebase Auth", "Stripe", "React Router", "React Query", "Framer Motion", "SwiperJS", "JWT", "Axios"],
        live: "https://luxe-matches-client.vercel.app/",
        github: "https://github.com/Md-Sufian-Jidan/luxe-matches-client",
    },
    {
        title: "WorkNest",
        description: "Job management app with employee salary tracking, dashboards, and JWT-secured role-based access.",
        features: [
            "Role-based dashboards: Admin, HR, Employee.",
            "Stripe integration for salary payments.",
            "Monthly progress tracking and work submission forms."
        ],
        tech: ["React", "Express", "MongoDB", "Node.js", "Tailwind", "Stripe", "Firebase Auth", "Stripe", "React Router", "React Query", "Framer Motion", "SwiperJS", "JWT", "Axios"],
        live: "https://work-nest-client.web.app/",
        github: "https://github.com/Md-Sufian-Jidan/work-nest-client",
    },
    {
        title: "StudySync",
        description: "Online assessment system with role-based feedback, leaderboards, PDF previews, and dark mode.",
        features: [
            "Admins can give marks & feedback. Users can submit assignments.",
            "PDF preview & notes on submission.",
            "Pagination, difficulty filters, dark/light mode, leaderboard."
        ],
        tech: ["React", "MongoDB", "Node.js", "Express", "JWT", "Firebase Authentication", "Tailwind CSS", "Axios", "SweetAlert2", "React Toastify", "Swiper.js", "React Awesome Reveal"],
        live: "https://online-assessment-client.web.app/",
        github: "https://github.com/Md-Sufian-Jidan/online-assessment-client",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="bg-accent py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-primary mb-4"
                >
                    Featured Projects
                </motion.h2>
                <p className="text-secondary mb-12 max-w-2xl mx-auto">
                    A few full-stack apps I’ve developed using modern web technologies.
                </p>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
                                <p className="text-secondary text-sm mb-4">{project.description}</p>

                                <ul className="text-left list-disc list-inside text-sm text-gray-600 mb-4 space-y-1">
                                    {project.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-accent text-primary px-2 py-1 text-xs rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4 mt-4">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline flex items-center gap-1"
                                >
                                    Live <FaExternalLinkAlt />
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline flex items-center gap-1"
                                >
                                    Code <FaGithub />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;