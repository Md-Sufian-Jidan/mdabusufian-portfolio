import { motion } from "framer-motion";
import { steps } from "../../../../public/data";

const Process = () => {
    return (
        <section className="p-10">
            <div className="max-w-5xl mx-auto text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-primary mb-4"
                >
                    My Work Process
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-secondary text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                >
                    A smooth step-by-step journey from ideas to a launched, high-performing product.
                </motion.p>
            </div>

            <div className="relative flex flex-col md:flex-row items-center md:justify-between gap-12">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        className="relative flex-1 flex flex-col items-center text-center"
                    >
                        {/* Circle Icon */}
                        <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                            {step.icon}
                        </div>
                        {/* Title & Description */}
                        <h3 className="text-xl md:text-2xl font-semibold text-primary mb-2">{step.title}</h3>
                        <p className="text-secondary text-sm md:text-base leading-relaxed">{step.description}</p>

                        {/* Connector line (desktop only) */}
                        {index < steps.length - 1 && (
                            <div className="hidden md:block absolute top-8 right-[-50%] w-[100%] h-1 bg-gradient-to-r from-primary to-secondary opacity-40 rounded-full"></div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Process;
