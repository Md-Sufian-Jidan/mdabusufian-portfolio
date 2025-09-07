import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Hero = () => {
    return (
        <section className="relative flex items-center py-12 px-5 md:px-10 lg:px-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 flex flex-col-reverse md:flex-row items-center w-full gap-10"
            >
                {/* Left side: Name + Typewriter + Summary */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        <Typewriter
                            options={{
                                strings: ["Hello, I'm Md Abu Sufian", "I Build Modern Web Experiences"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <p className="text-secondary text-lg md:text-xl mb-8">
                        Passionate web developer crafting beautiful and functional digital experiences. Specializing in modern web technologies and responsive design.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-accent rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg"
                        >
                            View Projects <FaArrowRight className="mt-0.5" />
                        </a>
                        <a
                            href="/resume.pdf"
                            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-accent transition-colors shadow-lg"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* Right side: Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 flex justify-center md:justify-end relative"
                >
                    <div className="relative w-64 md:w-80 rounded-full overflow-hidden shadow-[0_0_50px_#DDEBE2]">
                        <img
                            src={"https://i.ibb.co.com/nqNfBWpk/portfolio-image.jpg"}
                            alt="Md Abu Sufian"
                            className="w-full rounded-full border-4 border-primary"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-accent/40 to-primary/30 animate-pulse"></div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
