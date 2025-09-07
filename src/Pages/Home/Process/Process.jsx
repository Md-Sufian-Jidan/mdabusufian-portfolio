import { motion } from 'framer-motion';
import { steps } from '../../../../public/data';
import ProcessStep from './ProcessStep';

const Process = () => {

    return (
        <section className="py-12 px-5 md:px-10 lg:px-20 relative overflow-hidden">
            <div className="relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4"
                    >
                        Work Process
                    </motion.span>

                    <h2 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
                        How I
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            {" "}Work
                        </span>
                    </h2>

                    <p className="text-secondary text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
                        A smooth, collaborative step-by-step journey from initial ideas to a launched,
                        high-performing product that exceeds your expectations.
                    </p>
                </motion.div>

                {/* Process Steps */}
                <div className="max-w-7xl mx-auto">
                    {steps.map((step, index) => (
                        <ProcessStep
                            key={index}
                            step={step}
                            index={index}
                        />
                    ))}
                </div>

                {/* Mobile Step Indicators */}
                <div className="flex justify-center space-x-4 mt-12 md:hidden">
                    {steps.map((_, index) => (
                        <button key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;