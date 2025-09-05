import { motion } from "framer-motion";
import { skills } from "../../../public/data";

const About = () => {
    return (
        <section className="min-h-screen max-w-7xl mx-auto  py-16 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:gap-16">
                {/* Bio Section */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="md:w-[61.8%]" // Golden ratio: 61.8% / 38.2%
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                        About Me
                    </h2>
                    <p className="text-secondary text-lg md:text-xl leading-relaxed mb-4">
                        I’m <span className="text-primary font-semibold">Md Abu Sufian Jidan</span>, a Junior Frontend Developer specializing in React. I love building clean, responsive web apps using the MERN stack and modern tools like Tailwind CSS and Framer Motion.
                    </p>
                    <p className="text-secondary text-lg md:text-xl leading-relaxed">
                        My focus is on writing scalable, reusable components and creating smooth user experiences with thoughtful UI/UX design. I'm always learning and excited to collaborate on real-world projects.
                    </p>
                </motion.div>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="md:w-[38.2%] mt-8 md:mt-0"
                >
                    <h3 className="text-3xl font-semibold text-primary mb-6">
                        Tech Stack
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                        {skills.map((tech, i) => (
                            <span
                                key={i}
                                className="bg-white text-primary hover:bg-accent hover:scale-105 transition-transform px-3 py-2 rounded-lg shadow text-center font-medium cursor-pointer"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
