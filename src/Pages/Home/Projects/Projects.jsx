import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../../../../public/data";

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-primary mb-4"
                >
                    My Projects
                </motion.h2>
                <p className="text-secondary mb-16 max-w-3xl mx-auto">
                    A showcase of full-stack applications built with modern technologies.
                </p>

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-2xl font-semibold text-primary mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-secondary text-sm mb-4">{project.description}</p>

                                <ul className="text-left list-disc list-inside text-gray-600 mb-4 space-y-1">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="hover:text-primary transition-colors">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-primary text-accent px-3 py-1 text-xs font-medium rounded-full transition-transform transform hover:scale-105"
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
                                    className="flex items-center gap-2 text-primary font-medium hover:underline"
                                >
                                    Live <FaExternalLinkAlt />
                                </a>
                                <a
                                    href={project.client}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-primary font-medium hover:underline"
                                >
                                    Client <FaGithub />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
