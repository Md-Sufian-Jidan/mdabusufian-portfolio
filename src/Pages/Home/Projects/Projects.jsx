import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../../../../public/data';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Full-Stack', 'Frontend', 'Backend'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="projects">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4"
                    >
                        Portfolio
                    </motion.span>

                    <h2 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
                        Featured
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            {" "}Projects
                        </span>
                    </h2>

                    <p className="text-secondary text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                        A showcase of full-stack applications built with modern technologies,
                        featuring responsive design, robust backend architecture, and seamless user experiences.
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${filter === category
                                ? 'bg-primary text-light shadow-lg'
                                : 'bg-light border border-primary/20 text-primary hover:bg-primary/10'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={`${project.title}-${filter}`}
                            project={project}
                            index={index}
                            onView={setSelectedProject}
                        />
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center">
                        <h3 className="text-2xl lg:text-3xl font-bold text-light mb-4">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-light/80 mb-6 max-w-2xl mx-auto">
                            Let's collaborate and bring your ideas to life with cutting-edge technology
                            and exceptional user experience.
                        </p>
                        <Link href={'/contact'}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-light text-primary px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Get In Touch
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
};

export default Projects;