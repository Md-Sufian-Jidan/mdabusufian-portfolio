import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    const [state, handleSubmit] = useForm("xwpbrkge");

    if (state.succeeded) {
        return <p className="text-center text-2xl mt-10 text-primary">Thanks for joining!</p>;
    }
    return (
        <section className="bg-accent py-10 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-primary mb-4"
                >
                    Get in Touch
                </motion.h2>
                <p className="text-secondary mb-10 max-w-xl mx-auto">
                    Whether you have a project idea, question, or just want to say hi — my inbox is always open!
                </p>

                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-1 gap-6 bg-white p-8 rounded-xl shadow"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        name="name"
                        required
                    />
                    <ValidationError
                        prefix="Your Name"
                        field="name"
                        errors={state.errors}
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                        name="email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        name="message"
                        required
                    />
                    <ValidationError
                        prefix="Your Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="bg-primary text-white py-3 rounded font-semibold hover:scale-105 transition-transform"
                    >
                        Send Message
                    </button>
                </motion.form>
                {/* Contact Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center gap-6 mt-10 text-2xl"
                >
                    <a
                        href="mailto:jidanjiyaj03@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-secondary transition-colors"
                    >
                        <FaEnvelope />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/md-abu-sufian-jidan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-secondary transition-colors"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/Md-Sufian-Jidan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-secondary transition-colors"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://wa.me/8801906844598"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-secondary transition-colors"
                    >
                        <FaWhatsapp />
                    </a>
                </motion.div>
            </div>
        </section >
    );
}

export default Contact;