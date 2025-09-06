import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactMeeting = () => {
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Toast notification state
    const [toast, setToast] = useState({ show: false, type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Show toast notification
    const showToast = (type, message) => {
        setToast({ show: true, type, message });
        setTimeout(() => {
            setToast({ show: false, type: '', message: '' });
        }, 4000);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simple validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            showToast('error', 'Please fill in all fields');
            setIsSubmitting(false);
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showToast('error', 'Please enter a valid email address');
            setIsSubmitting(false);
            return;
        }

        // Simulate form submission
        try {
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
            showToast('success', 'Message sent successfully! I\'ll get back to you soon.');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            showToast('error', 'Failed to send message. Please try again.');
        }

        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#F2F1EB' }}>
            <div className="max-w-7xl mx-auto py-16 px-6 space-y-20">

                {/* Contact Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-4xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-12">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-bold mb-4"
                                style={{ color: '#12372A' }}
                            >
                                Get In Touch
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="text-lg max-w-2xl mx-auto"
                                style={{ color: '#3A4D39' }}
                            >
                                Have a project in mind or just want to say hello? I'd love to hear from you.
                                Let's create something amazing together!
                            </motion.p>
                        </div>

                        {/* Contact Form Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl"
                        >
                            <div className="space-y-6">
                                {/* Name Field */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-semibold mb-2"
                                        style={{ color: '#12372A' }}
                                    >
                                        Your Name
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-transparent focus:outline-none transition-all duration-300"
                                        style={{
                                            backgroundColor: '#F2F1EB',
                                            color: '#12372A'
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.borderColor = '#12372A';
                                            e.target.style.backgroundColor = '#DDEBE2';
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = 'transparent';
                                            e.target.style.backgroundColor = '#F2F1EB';
                                        }}
                                        placeholder="Enter your full name"
                                    />
                                </motion.div>

                                {/* Email Field */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold mb-2"
                                        style={{ color: '#12372A' }}
                                    >
                                        Email Address
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-transparent focus:outline-none transition-all duration-300"
                                        style={{
                                            backgroundColor: '#F2F1EB',
                                            color: '#12372A'
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.borderColor = '#12372A';
                                            e.target.style.backgroundColor = '#DDEBE2';
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = 'transparent';
                                            e.target.style.backgroundColor = '#F2F1EB';
                                        }}
                                        placeholder="your.email@example.com"
                                    />
                                </motion.div>

                                {/* Message Field */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.7 }}
                                    viewport={{ once: true }}
                                >
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-semibold mb-2"
                                        style={{ color: '#12372A' }}
                                    >
                                        Your Message
                                    </label>
                                    <motion.textarea
                                        whileFocus={{ scale: 1.02 }}
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-transparent focus:outline-none resize-none transition-all duration-300"
                                        style={{
                                            backgroundColor: '#F2F1EB',
                                            color: '#12372A'
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.borderColor = '#12372A';
                                            e.target.style.backgroundColor = '#DDEBE2';
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = 'transparent';
                                            e.target.style.backgroundColor = '#F2F1EB';
                                        }}
                                        placeholder="Tell me about your project or just say hello..."
                                    />
                                </motion.div>

                                {/* Submit Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                    viewport={{ once: true }}
                                    className="text-center pt-4"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                                        style={{ backgroundColor: '#12372A' }}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                </svg>
                                                Send Message
                                            </>
                                        )}
                                    </motion.button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Meeting Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                        className="relative bg-white rounded-3xl shadow-2xl overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, #DDEBE2 0%, white 100%)'
                        }}
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="w-full h-full rounded-full border-4"
                                style={{ borderColor: '#12372A' }}
                            />
                        </div>

                        <div className="flex flex-col lg:flex-row items-center p-8 md:p-12 gap-8">
                            {/* Left Side - Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="lg:w-2/3 text-center lg:text-left"
                            >
                                <h3
                                    className="text-3xl md:text-4xl font-bold mb-4"
                                    style={{ color: '#12372A' }}
                                >
                                    Let's Work Together
                                </h3>

                                <p
                                    className="text-lg md:text-xl leading-relaxed mb-6"
                                    style={{ color: '#3A4D39' }}
                                >
                                    Ready to bring your vision to life? Let's schedule a free consultation
                                    to discuss your project, goals, and how I can help you succeed.
                                </p>

                                {/* Feature Points */}
                                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                    {[
                                        'Free Consultation',
                                        'Project Planning',
                                        'Custom Solutions'
                                    ].map((feature, index) => (
                                        <motion.div
                                            key={feature}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-center gap-2"
                                        >
                                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#12372A' }}></div>
                                            <span className="text-sm" style={{ color: '#3A4D39' }}>{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Right Side - CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="lg:w-1/3 flex justify-center"
                            >
                                <motion.a
                                    href="https://calendly.com/your-username" // Replace with your actual Calendly link
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 20px 40px rgba(18, 55, 42, 0.3)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
                                    style={{ backgroundColor: '#12372A' }}
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Book a Meeting
                                </motion.a>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.section>
            </div>

            {/* Toast Notification */}
            <AnimatePresence>
                {toast.show && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.8 }}
                        transition={{ duration: 0.4, type: "spring" }}
                        className="fixed bottom-6 right-6 z-50 max-w-md"
                    >
                        <div
                            className={`p-4 rounded-2xl shadow-2xl border-l-4 bg-white ${toast.type === 'success'
                                ? 'border-green-500'
                                : 'border-red-500'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                                    }`}>
                                    {toast.type === 'success' ? (
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    ) : (
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    )}
                                </div>
                                <p className="font-medium" style={{ color: '#12372A' }}>
                                    {toast.message}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ContactMeeting;