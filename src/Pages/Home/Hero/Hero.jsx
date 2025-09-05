import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="bg-accent min-h-screen flex items-center justify-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center max-w-4xl"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                    We Connect <br className="hidden sm:block" /> Your Vision with Code
                </h1>
                <p className="text-secondary text-lg md:text-xl mb-8">
                    I’m a web developer building sleek, responsive websites and apps using modern tools like React, Tailwind, and Framer Motion.
                </p>
                <a
                    href={`#projects`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:scale-105 transition-transform"
                >
                    View Projects <FaArrowRight className="mt-0.5" />
                </a>
            </motion.div>
        </section>
    );
}

export default Hero;