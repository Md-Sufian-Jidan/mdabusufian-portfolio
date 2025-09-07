import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaServer, FaTimes } from 'react-icons/fa';

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-light rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 bg-dark/50 text-light rounded-full p-2 hover:bg-dark/70 transition-colors"
                    >
                        <FaTimes />
                    </button>

                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden rounded-t-2xl">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-3xl font-bold text-primary">{project.title}</h3>
                            <span className="bg-primary text-light px-3 py-1 rounded-full text-sm">
                                {project.category}
                            </span>
                        </div>

                        <p className="text-secondary text-lg mb-6 leading-relaxed">
                            {project.description}
                        </p>

                        {/* Features */}
                        <div className="mb-6">
                            <h4 className="text-xl font-semibold text-primary mb-3">Key Features</h4>
                            <ul className="space-y-2">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex items-start space-x-2 text-secondary">
                                        <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tech Stack */}
                        <div className="mb-8">
                            <h4 className="text-xl font-semibold text-primary mb-3">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-gradient-to-r from-primary to-secondary text-light px-3 py-1 text-sm rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-primary text-light px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg"
                            >
                                <FaExternalLinkAlt />
                                Live Demo
                            </a>
                            <a
                                href={project.client}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-light transition-colors"
                            >
                                <FaGithub />
                                Client Code
                            </a>
                            <a
                                href={project.server}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border-2 border-secondary text-secondary px-6 py-3 rounded-xl font-semibold hover:bg-secondary hover:text-light transition-colors"
                            >
                                <FaServer />
                                Server Code
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectModal;