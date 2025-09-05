import { motion } from "framer-motion";
import { FaSearch, FaPencilRuler, FaCode, FaRocket } from "react-icons/fa";

const steps = [
    {
        icon: <FaSearch className="text-primary text-2xl" />,
        title: "Research",
        description: "Understand your goals, audience, and brand needs.",
    },
    {
        icon: <FaPencilRuler className="text-primary text-2xl" />,
        title: "Design",
        description: "Create a modern, user-focused layout and wireframe.",
    },
    {
        icon: <FaCode className="text-primary text-2xl" />,
        title: "Develop",
        description: "Build the site with responsive, clean React code.",
    },
    {
        icon: <FaRocket className="text-primary text-2xl" />,
        title: "Launch",
        description: "Deploy, test, and deliver with performance in mind.",
    },
];

const Process = () => {
    return (
        <section className="bg-light py-10 px-6">
            <div className="text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-primary mb-4"
                >
                    My Work Process
                </motion.h2>
                <p className="text-secondary mb-12 max-w-2xl mx-auto">
                    A smooth step-by-step journey from ideas to a launched, high-performing product.
                </p>

                <div className="flex flex-col md:flex-row items-center md:justify-between gap-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="bg-white shadow-md p-6 rounded-xl w-full md:max-w-[22%] text-center relative flex flex-col items-center"
                        >
                            <div className="mb-4 mx-auto">{step.icon}</div>
                            <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                            <p className="text-secondary text-sm">{step.description}</p>

                            {/* Line Connector (desktop only) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute right-[-50%] top-1/2 w-full h-0.5 bg-secondary opacity-20 transform translate-y-[-50%]" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Process;