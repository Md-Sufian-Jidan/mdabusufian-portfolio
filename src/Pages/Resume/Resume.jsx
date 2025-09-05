import { motion } from "framer-motion";
import { FaDownload, FaGraduationCap, FaBriefcase } from "react-icons/fa";

const skills = ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "React Router", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Firebase", "Stripe", "Git/GitHub", "Axios", "Postman", "Framer Motion", "AOS", "Vite"];

const Resume = () => {
    return (
        <section className="min-h-[75vh] bg-accent py-10 px-6">
            <div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center"
                >Resume</motion.h2>
                {/* Download resume */}
                <div className="text-center mb-10">
                    <a
                        href="/MDABUSUFIANJIDAN-RESUME-Front-end.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl hover:scale-105 transition-transform"
                    >
                        <FaDownload /> Download Resume
                    </a>
                </div>

                {/* Education & Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
                            <FaGraduationCap /> Education
                        </h3>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h4 className="text-lg font-semibold text-primary">Govt. Tolaram College, Narayanganj</h4>
                            <p className="text-secondary text-sm">2023 – 2024</p>
                            <p className="text-secondary mt-2 text-sm">
                                Studied Commerce ( Business Studies )
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
                            <FaBriefcase /> Experience
                        </h3>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h4 className="text-lg font-semibold text-primary">Frontend Developer – Self Projects</h4>
                            <p className="text-secondary text-sm">2024 – Present</p>
                            <p className="text-secondary mt-2 text-sm">
                                Built multiple full-stack apps using React, Node.js, Express and MongoDB. Focused on clean UI/UX, reusable components, and secure API integration.
                            </p>
                        </div>
                    </motion.div>
                </div>
                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-16"
                >
                    <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Technical Skills</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-sm text-center">
                        {skills.map((skill, i) => (
                            <span
                                key={i}
                                className="bg-white text-primary px-3 py-2 rounded-lg shadow hover:cursor-pointer hover:bg-accent hover:scale-105 transition-transform"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
                {/* Certificates Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-16"
                >
                    <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Certifications</h3>
                    <div className="space-y-6 max-w-3xl mx-auto">
                        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                            <h4 className="text-lg font-semibold text-primary">
                                Complete Web Development Course
                            </h4>
                            <p className="text-secondary text-sm">Programming Hero — Jan 2024 to July 2024</p>
                            <a
                                href="https://drive.google.com/file/d/1z3OaW149lKzWyNjYGO2u0y5npoN-irQP/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary text-sm inline-block mt-2 hover:underline"
                            >
                                View Certificate
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Resume;