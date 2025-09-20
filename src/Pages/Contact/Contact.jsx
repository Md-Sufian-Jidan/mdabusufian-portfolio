import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaUser, FaPaperPlane, FaMapMarkerAlt, FaCheckCircle, FaHeart } from "react-icons/fa";
import { useState } from "react";
import { socialLinks } from "../../../public/data";

const Contact = () => {
    const [state, handleSubmit] = useForm("xwpbrkge");
    const [focusedField, setFocusedField] = useState(null);

    // Success state with confetti-like animation
    if (state.succeeded) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-light via-accent/30 to-primary/10 px-6 relative overflow-hidden">
                {/* Floating Success Elements */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: 0 }}
                        animate={{
                            scale: [0, 1, 0],
                            rotate: [0, 180, 360],
                            y: [-100, -200, -300]
                        }}
                        transition={{
                            duration: 3,
                            delay: i * 0.2,
                            repeat: Infinity,
                            repeatDelay: 2
                        }}
                        className={`absolute w-4 h-4 rounded-full ${i % 3 === 0 ? 'bg-primary' : i % 3 === 1 ? 'bg-secondary' : 'bg-accent'
                            }`}
                        style={{
                            left: `${20 + (i * 15)}%`,
                            top: '80%'
                        }}
                    />
                ))}

                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    className="text-center bg-white/90 backdrop-blur-lg p-12 rounded-3xl shadow-2xl max-w-2xl mx-auto"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring", bounce: 0.6 }}
                        className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8"
                    >
                        <FaCheckCircle className="text-white text-4xl" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-3xl md:text-4xl font-bold text-primary mb-4"
                    >
                        Message Sent Successfully! 🎉
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="text-secondary text-lg mb-8"
                    >
                        Thank you for reaching out! I'll get back to you within 24 hours.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.1 }}
                        className="flex items-center justify-center gap-2 text-primary"
                    >
                        <span>Made with</span>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            <FaHeart className="text-red-500" />
                        </motion.div>
                        <span>by Sufian</span>
                    </motion.div>
                </motion.div>
            </div>
        );
    }

    return (
        <section className="relative bg-gradient-to-br from-light via-accent/20 to-primary/5 py-20 px-6 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M50 50m-25 0a25,25 0 1,1 50,0a25,25 0 1,1 -50,0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            {/* Floating Decorative Elements */}
            <motion.div
                animate={{
                    y: [-30, 30, -30],
                    rotate: [0, 10, 0]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-2xl"
            />

            <motion.div
                animate={{
                    y: [30, -30, 30],
                    rotate: [0, -10, 0]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-accent to-primary/10 rounded-full blur-2xl"
            />

            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full text-primary font-medium mb-6 shadow-lg"
                    >
                        <FaPaperPlane className="text-sm" />
                        Let's Connect
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
                    >
                        Get in
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ml-3">
                            Touch
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-secondary text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                    >
                        Have a project in mind? Want to collaborate? Or just want to say hello?
                        I'd love to hear from you. Let's create something amazing together!
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="lg:col-span-1 space-y-8"
                    >
                        {/* Quick Contact Cards */}
                        <div className="space-y-4">
                            <motion.div
                                whileHover={{ scale: 1.05, x: 10 }}
                                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <FaEnvelope className="text-white text-lg" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-primary mb-1">Email Me</h3>
                                        <p className="text-secondary text-sm">jidanjiyaj03@gmail.com</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05, x: 10 }}
                                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <FaWhatsapp className="text-white text-lg" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-primary mb-1">WhatsApp</h3>
                                        <p className="text-secondary text-sm">+880 1906 844598</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05, x: 10 }}
                                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <FaMapMarkerAlt className="text-white text-lg" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-primary mb-1">Location</h3>
                                        <p className="text-secondary text-sm">Narayanganj, Bangladesh</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                            <h3 className="font-semibold text-primary mb-4 text-center">Connect on Social</h3>
                            <div className="flex justify-center gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                                    >
                                        <social.icon className="text-lg" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-xl">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                                    Send me a message
                                </h3>
                                <p className="text-secondary">
                                    Fill out the form below and I'll get back to you as soon as possible
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Name Field */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="relative"
                                    >
                                        <label className="block text-sm font-medium text-primary mb-2">
                                            Full Name *
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                onFocus={() => setFocusedField('name')}
                                                onBlur={() => setFocusedField(null)}
                                                className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-0 transition-all duration-300 bg-white/50"
                                                placeholder="Enter your full name"
                                            />
                                            <FaUser className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${focusedField === 'name' ? 'text-primary' : 'text-gray-400'
                                                }`} />
                                        </div>
                                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                                    </motion.div>

                                    {/* Email Field */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="relative"
                                    >
                                        <label className="block text-sm font-medium text-primary mb-2">
                                            Email Address *
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                onFocus={() => setFocusedField('email')}
                                                onBlur={() => setFocusedField(null)}
                                                className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-0 transition-all duration-300 bg-white/50"
                                                placeholder="Enter your email address"
                                            />
                                            <FaEnvelope className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${focusedField === 'email' ? 'text-primary' : 'text-gray-400'
                                                }`} />
                                        </div>
                                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                                    </motion.div>
                                </div>

                                {/* Subject Field */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="relative"
                                >
                                    <label className="block text-sm font-medium text-primary mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        required
                                        onFocus={() => setFocusedField('subject')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-0 transition-all duration-300 bg-white/50"
                                        placeholder="What's this about?"
                                    />
                                    <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                                </motion.div>

                                {/* Message Field */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="relative"
                                >
                                    <label className="block text-sm font-medium text-primary mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        rows="6"
                                        required
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-0 transition-all duration-300 bg-white/50 resize-none"
                                        placeholder="Tell me about your project, ideas, or just say hello..."
                                    />
                                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                                </motion.div>

                                {/* Submit Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-center"
                                >
                                    <motion.button
                                        type="submit"
                                        disabled={state.submitting}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                                    >
                                        <AnimatePresence>
                                            {state.submitting ? (
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0 }}
                                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                                                />
                                            ) : (
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0 }}
                                                >
                                                    <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                        {state.submitting ? 'Sending...' : 'Send Message'}
                                    </motion.button>
                                </motion.div>
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* Map Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16"
                >
                    <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                            Find Me Here
                        </h3>
                        <p className="text-secondary">
                            Based in Narayanganj, Bangladesh - Available for remote work worldwide
                        </p>
                    </div>

                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-3xl shadow-xl">
                        <div className="h-80 md:h-96 rounded-2xl overflow-hidden">
                            <iframe
                                title="Narayanganj, Bangladesh"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902947341242!2d90.50640231536597!3d23.622038892235036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0bd9fbbf2b9%3A0xc7a2f8fca9e4df44!2sNarayanganj%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1693937369521!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                allowFullScreen=""
                                loading="lazy"
                                className="rounded-2xl filter grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;