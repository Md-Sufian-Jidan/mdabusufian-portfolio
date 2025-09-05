import { motion } from "framer-motion";
import { FaDownload, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { skills } from "../../../public/data";

const Resume = () => {
    return (
        <section className="min-h-screen max-w-7xl mx-auto  py-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-primary mb-10 text-center"
                >
                    Resume
                </motion.h2>

                {/* Download Button */}
                <div className="text-center mb-16">
                    <a
                        href="/MDABUSUFIANJIDAN-RESUME-Front-end.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-2xl font-medium hover:scale-105 transition-transform shadow-md"
                    >
                        <FaDownload /> Download Resume
                    </a>
                </div>

                {/* Education & Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-3xl font-semibold text-primary mb-6 flex items-center gap-3">
                            <FaGraduationCap /> Education
                        </h3>
                        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow">
                            <h4 className="text-xl font-semibold text-primary mb-1">
                                Govt. Tolaram College, Narayanganj
                            </h4>
                            <p className="text-secondary text-sm">2023 – 2024</p>
                            <p className="text-secondary mt-2 text-sm">
                                Studied Commerce (Business Studies)
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-3xl font-semibold text-primary mb-6 flex items-center gap-3">
                            <FaBriefcase /> Experience
                        </h3>
                        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow">
                            <h4 className="text-xl font-semibold text-primary mb-1">
                                Frontend Developer – Self Projects
                            </h4>
                            <p className="text-secondary text-sm">2024 – Present</p>
                            <p className="text-secondary mt-2 text-sm">
                                Built multiple full-stack apps using React, Node.js, Express, and MongoDB. Focused on clean UI/UX, reusable components, and secure API integration.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Technical Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-20"
                >
                    <h3 className="text-3xl font-semibold text-primary mb-8 text-center">
                        Technical Skills
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
                        {skills.map((skill, i) => (
                            <span
                                key={i}
                                className="bg-white text-primary px-4 py-2 rounded-xl shadow hover:bg-accent hover:scale-105 transition-transform font-medium cursor-pointer"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-20"
                >
                    <h3 className="text-3xl font-semibold text-primary mb-8 text-center">
                        Certifications
                    </h3>
                    <div className="space-y-6 max-w-4xl mx-auto">
                        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow">
                            <h4 className="text-xl font-semibold text-primary mb-1">
                                Complete Web Development Course
                            </h4>
                            <p className="text-secondary text-sm">
                                Programming Hero — Jan 2024 to July 2024
                            </p>
                            <a
                                href="https://drive.google.com/file/d/1z3OaW149lKzWyNjYGO2u0y5npoN-irQP/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary text-sm mt-2 inline-block hover:underline"
                            >
                                View Certificate
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
