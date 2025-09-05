import { motion } from "framer-motion";

const skills = ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "React Router", "Node.js", "Express.js", "MongoDB", "Mongoose", "Firebase", "JWT", "Stripe", "Git / GitHub", "Postman", "Framer Motion", "Vite", "AOS"];

const About = () => {
    return (
        <section className="min-h-screen bg-light py-10 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Bio Section */}
                <motion.div
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-primary mb-4">About Me</h2>
                    <p className="text-secondary text-lg leading-relaxed mb-4">
                        I’m <span className="text-primary font-semibold">Md Abu Sufian Jidan</span>, a Junior Frontend Developer specializing in React. I love building clean, responsive web apps using the MERN stack and modern tools like Tailwind CSS and Framer Motion.
                    </p>
                    <p className="text-secondary text-lg leading-relaxed">
                        My focus is on writing scalable, reusable components and building smooth user experiences with thoughtful UI/UX design. I'm always learning and excited to collaborate on real-world projects.
                    </p>
                </motion.div>
                {/* Skills / Tools */}
                <motion.div
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-semibold text-primary mb-4">Tech Stack</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                        {skills.map((tech, i) => (
                            <span
                                key={i}
                                className="bg-white text-primary hover:cursor-pointer hover:bg-accent hover:scale-105 transition-transform  px-3 py-2 rounded-lg shadow text-center"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;