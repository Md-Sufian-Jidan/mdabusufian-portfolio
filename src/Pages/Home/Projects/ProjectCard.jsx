import { FaExternalLinkAlt, FaGithub, FaServer, FaEye } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index, onView }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
            }}
            whileHover={{ y: -10 }}
            className="group relative bg-light rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
        >
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden">
                <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onView(project)}
                        className="bg-light/90 backdrop-blur-sm text-primary px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-light transition-colors flex items-center gap-2"
                    >
                        <FaEye />
                        View Details
                    </motion.button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="bg-primary text-light px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {project.title}
                </h3>

                <p className="text-secondary mb-4 line-clamp-3">
                    {project.description}
                </p>

                {/* Tech Preview */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech, i) => (
                        <span
                            key={i}
                            className="bg-accent text-primary px-3 py-1 text-xs font-medium rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.tech.length > 4 && (
                        <span className="bg-secondary/10 text-secondary px-3 py-1 text-xs font-medium rounded-full">
                            +{project.tech.length - 4} more
                        </span>
                    )}
                </div>

                {/* Quick Actions */}
                <div className="flex gap-3">
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-primary text-light py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                        <FaExternalLinkAlt className="text-sm" />
                        Live
                    </a>
                    <a
                        href={project.client}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 border border-primary text-primary px-4 py-2.5 rounded-lg font-medium hover:bg-primary hover:text-light transition-colors"
                    >
                        <FaGithub className="text-sm" />
                    </a>
                    <a
                        href={project.server}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 border border-secondary text-secondary px-4 py-2.5 rounded-lg font-medium hover:bg-secondary hover:text-light transition-colors"
                    >
                        <FaServer className="text-sm" />
                    </a>
                </div>
            </div>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 rounded-2xl transition-colors duration-300 pointer-events-none" />
        </motion.div>
    );
};

export default ProjectCard;