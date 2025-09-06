import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../../../public/data'
import { skillMessages } from '../../../public/data'

const Resume = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);

    const handleSkillClick = (skill) => {
        const message = skillMessages[skill] || `I have experience working with ${skill}.`;
        setSelectedSkill(message);

        // Auto-hide message after 4 seconds
        setTimeout(() => {
            setSelectedSkill(null);
        }, 4000);
    };

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#F2F1EB' }}>
            <section className="max-w-7xl mx-auto py-16 px-6">
                {/* Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-10 text-center"
                    style={{ color: '#12372A' }}
                >
                    Resume
                </motion.h2>

                {/* Download Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center mb-16"
                >
                    <motion.a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-medium shadow-lg transition-all duration-300 hover:shadow-xl"
                        style={{
                            backgroundColor: '#12372A',
                            color: 'white'
                        }}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download Resume
                    </motion.a>
                </motion.div>

                {/* Education & Experience */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col h-full"
                    >
                        <h3 className="text-3xl font-semibold mb-6 flex items-center gap-3" style={{ color: '#12372A' }}>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            </svg>
                            Education
                        </h3>
                        <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex-1"
                        >
                            <h4 className="text-xl font-semibold mb-1" style={{ color: '#12372A' }}>
                                Govt. Tolaram College, Narayanganj
                            </h4>
                            <p className="text-sm mb-2" style={{ color: '#3A4D39' }}>
                                2023 – 2024
                            </p>
                            <p className="text-sm" style={{ color: '#3A4D39' }}>
                                Studied Commerce (Business Studies)
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col h-full"
                    >
                        <h3 className="text-3xl font-semibold mb-6 flex items-center gap-3" style={{ color: '#12372A' }}>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                            </svg>
                            Experience
                        </h3>
                        <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex-1"
                        >
                            <h4 className="text-xl font-semibold mb-1" style={{ color: '#12372A' }}>
                                Frontend Developer – SM Technology
                            </h4>
                            <p className="text-sm mb-4" style={{ color: '#3A4D39' }}>
                                2024 – Present
                            </p>
                            <p className="text-sm mb-4" style={{ color: '#3A4D39' }}>
                                Specializing in designing and developing professional websites using the Squarespace CMS platform.
                                Delivered visually appealing, responsive, and user-friendly digital solutions.
                            </p>
                            <ul className="space-y-2 text-sm" style={{ color: '#3A4D39' }}>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#12372A' }}></span>
                                    Designed & customized websites for diverse industries.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#12372A' }}></span>
                                    Collaborated with clients to align websites with goals.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#12372A' }}></span>
                                    Implemented content workflows for consistency.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#12372A' }}></span>
                                    Optimized sites for performance.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#12372A' }}></span>
                                    Stayed updated with Squarespace trends.
                                </li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Technical Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <h3 className="text-3xl font-semibold mb-8 text-center" style={{ color: '#12372A' }}>
                        Technical Skills
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {skills.map((skill, index) => (
                            <motion.button
                                key={skill}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleSkillClick(skill)}
                                className="bg-white px-4 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 font-medium cursor-pointer border-2 border-transparent hover:border-opacity-50"
                                style={{
                                    color: '#12372A',
                                    '--tw-border-opacity': '0.2'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#DDEBE2';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'white';
                                }}
                            >
                                {skill}
                            </motion.button>
                        ))}
                    </div>

                    {/* Skill Message */}
                    <AnimatePresence>
                        {selectedSkill && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                                className="mt-8 text-center"
                            >
                                <div
                                    className="inline-block px-6 py-4 rounded-xl shadow-lg max-w-md mx-auto"
                                    style={{
                                        backgroundColor: '#DDEBE2',
                                        color: '#12372A'
                                    }}
                                >
                                    {selectedSkill}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-3xl font-semibold mb-8 text-center" style={{ color: '#12372A' }}>
                        Certifications
                    </h3>
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <h4 className="text-xl font-semibold mb-2" style={{ color: '#12372A' }}>
                                Complete Web Development Course
                            </h4>
                            <p className="text-sm mb-3" style={{ color: '#3A4D39' }}>
                                Programming Hero — Jan 2024 to July 2024
                            </p>
                            <motion.a
                                href="https://drive.google.com/file/d/1z3OaW149lKzWyNjYGO2u0y5npoN-irQP/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                                style={{ color: '#12372A' }}
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                View Certificate
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Resume;