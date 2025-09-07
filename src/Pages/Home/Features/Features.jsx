import { motion } from "framer-motion";
import { features } from "../../../../public/data";

const Features = () => {
    return (
        <section className="py-12 px-5 md:px-10 lg:px-20">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center md:mb-10 mb-5">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-primary mb-4"
                >
                    Why Choose Me?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-secondary text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                >
                    I combine creative design, solid engineering, and smooth user experience to bring your ideas to life.
                </motion.p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.618fr] lg:grid-cols-3 gap-6 md:gap-10">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.5 }}
                        className={`bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow flex flex-col items-center text-center`}
                    >
                        <div className="mb-4">{feature.icon}</div>
                        <h3 className="text-xl md:text-2xl font-semibold text-primary mb-2">{feature.title}</h3>
                        <p className="text-secondary text-sm md:text-base leading-relaxed">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;
