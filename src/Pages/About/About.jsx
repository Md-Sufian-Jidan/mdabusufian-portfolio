import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../../public/data';

const About = () => {
    const [typewriterText, setTypewriterText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const typewriterStrings = [
        "Frontend Developer",
        "MERN Stack Enthusiast",
        "UI/UX Explorer",
        "Tech Learner for Life"
    ];

    useEffect(() => {
        const currentString = typewriterStrings[currentIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setTypewriterText(currentString.substring(0, typewriterText.length + 1));
                if (typewriterText === currentString) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                setTypewriterText(currentString.substring(0, typewriterText.length - 1));
                if (typewriterText === '') {
                    setIsDeleting(false);
                    setCurrentIndex((currentIndex + 1) % typewriterStrings.length);
                }
            }
        }, isDeleting ? 50 : 150);

        return () => clearTimeout(timeout);
    }, [typewriterText, currentIndex, isDeleting, typewriterStrings]);

    return (
        <div>
            <section className="max-w-7xl mx-auto py-16 px-6">
                {/* Main Flex Layout */}
                <div className="flex flex-col md:flex-row items-center md:gap-16 mb-20">
                    {/* Left Side: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="md:w-[38.2%] flex justify-center mb-10 md:mb-0"
                    >
                        <div className="relative">
                            {/* Glowing background effect */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.05, 1],
                                    opacity: [0.5, 0.8, 0.5]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full"
                                style={{
                                    background: 'radial-gradient(circle, #DDEBE2 0%, transparent 70%)',
                                    filter: 'blur(20px)'
                                }}
                            />

                            {/* Profile image container */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4"
                                style={{ borderColor: '#DDEBE2' }}
                            >
                                <img
                                    src="https://i.ibb.co.com/nqNfBWpk/portfolio-image.jpg"
                                    alt="Md Abu Sufian Jidan"
                                    className="w-full h-full object-cover"
                                />

                                {/* Subtle overlay */}
                                <div
                                    className="absolute inset-0 rounded-full opacity-20"
                                    style={{
                                        background: 'linear-gradient(45deg, #12372A, #DDEBE2, #12372A)'
                                    }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Side: Summary */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="md:w-[61.8%] text-center md:text-left"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-4xl md:text-5xl font-bold mb-6"
                            style={{ color: '#12372A' }}
                        >
                            About Me
                        </motion.h2>

                        {/* Typewriter intro */}
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-xl md:text-2xl mb-6 h-8 flex items-center justify-center md:justify-start"
                            style={{ color: '#3A4D39' }}
                        >
                            <span>{typewriterText}</span>
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                                className="ml-1"
                                style={{ color: '#12372A' }}
                            >
                                |
                            </motion.span>
                        </motion.h3>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg md:text-xl leading-relaxed mb-4"
                            style={{ color: '#3A4D39' }}
                        >
                            I'm <span className="font-semibold" style={{ color: '#12372A' }}>Md Abu Sufian Jidan</span>,
                            a Junior Frontend Developer passionate about crafting smooth, interactive,
                            and responsive digital experiences. I specialize in React, Tailwind, and
                            Framer Motion, bringing ideas to life with clean design and animation.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-lg md:text-xl leading-relaxed"
                            style={{ color: '#3A4D39' }}
                        >
                            My focus is on creating scalable, reusable components and delivering
                            intuitive user experiences. I'm always curious, learning, and open
                            to collaborating on exciting projects.
                        </motion.p>
                    </motion.div>
                </div>

                {/* Tech Stack Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <h3 className="text-3xl font-semibold mb-8 text-center" style={{ color: '#12372A' }}>
                        Tech Stack
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
                        {skills.map((tech, index) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: [0, -2, 2, 0],
                                    y: -5
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium cursor-pointer text-center border-2 border-transparent"
                                style={{ color: '#12372A' }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#DDEBE2';
                                    e.target.style.borderColor = '#12372A';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'white';
                                    e.target.style.borderColor = 'transparent';
                                }}
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Beyond Coding Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-3xl font-semibold mb-8 text-center" style={{ color: '#12372A' }}>
                        Beyond Coding ✨
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            whileHover={{
                                y: -10,
                                scale: 1.02
                            }}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
                        >
                            <motion.div
                                whileHover={{ rotate: [0, -10, 10, 0] }}
                                transition={{ duration: 0.5 }}
                                className="text-4xl mb-4"
                            >
                                🧩
                            </motion.div>
                            <h4 className="text-xl font-semibold mb-3" style={{ color: '#12372A' }}>
                                Problem Solver
                            </h4>
                            <p className="text-sm leading-relaxed" style={{ color: '#3A4D39' }}>
                                I enjoy tackling real-world challenges and finding creative solutions
                                with technology.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{
                                y: -10,
                                scale: 1.02
                            }}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
                        >
                            <motion.div
                                whileHover={{ rotate: [0, -10, 10, 0] }}
                                transition={{ duration: 0.5 }}
                                className="text-4xl mb-4"
                            >
                                📚
                            </motion.div>
                            <h4 className="text-xl font-semibold mb-3" style={{ color: '#12372A' }}>
                                Continuous Learner
                            </h4>
                            <p className="text-sm leading-relaxed" style={{ color: '#3A4D39' }}>
                                Always exploring new frameworks, design trends, and modern practices
                                to grow my skills.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            whileHover={{
                                y: -10,
                                scale: 1.02
                            }}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group sm:col-span-2 lg:col-span-1"
                        >
                            <motion.div
                                whileHover={{ rotate: [0, -10, 10, 0] }}
                                transition={{ duration: 0.5 }}
                                className="text-4xl mb-4"
                            >
                                🎨
                            </motion.div>
                            <h4 className="text-xl font-semibold mb-3" style={{ color: '#12372A' }}>
                                Creative Mind
                            </h4>
                            <p className="text-sm leading-relaxed" style={{ color: '#3A4D39' }}>
                                Outside coding, I enjoy sketching and experimenting with visual design
                                for inspiration.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default About;