import { motion } from "framer-motion";
import { FaRocket, FaCode, FaMobileAlt, FaClock, FaBolt, FaSmile } from "react-icons/fa";

const features = [
    {
        icon: <FaRocket className="text-3xl text-primary" />,
        title: "Fast & Optimized",
        description: "Your site will be blazing fast and SEO-friendly out of the box.",
    },
    {
        icon: <FaCode className="text-3xl text-primary" />,
        title: "Clean Code",
        description: "I write maintainable, readable, and modular code using modern standards.",
    },
    {
        icon: <FaMobileAlt className="text-3xl text-primary" />,
        title: "Fully Responsive",
        description: "Your website will look great on any screen size or device.",
    },
    {
        icon: <FaClock className="text-3xl text-primary" />,
        title: "On-Time Delivery",
        description: "I value deadlines and deliver quality work when promised.",
    },
    {
        icon: <FaBolt className="text-3xl text-primary" />,
        title: "Modern Stack",
        description: "React, Vite, Tailwind, Framer Motion — everything you expect in 2025.",
    },
    {
        icon: <FaSmile className="text-3xl text-primary" />,
        title: "Client-Centered",
        description: "Clear communication and feedback loops from start to finish.",
    },
];

const Features = () => {
    return (
        <section className="bg-light py-10 px-6">
            <div className="text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-primary mb-4"
                >
                    Why Choose Me?
                </motion.h2>
                <p className="text-secondary mb-12 max-w-2xl mx-auto">
                    I combine creative design, solid engineering, and smooth user experience to bring your ideas to life.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col items-center"
                        >
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                            <p className="text-secondary text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;