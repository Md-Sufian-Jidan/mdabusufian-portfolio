import { motion } from 'framer-motion';
import {  FaArrowUp, FaHeart, FaCode, } from 'react-icons/fa';
import { navItems } from '../../../public/data';

// Floating Shape Component
const FloatingShape = ({ delay = 0, duration = 20, className = "" }) => (
  <motion.div
    className={`absolute opacity-10 ${className}`}
    animate={{
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [0, 360],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  />
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-primary via-secondary to-primary text-light overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Shapes */}
        <FloatingShape
          delay={0}
          duration={25}
          className="top-10 left-10 w-8 h-8 border-2 border-accent rounded-lg"
        />
        <FloatingShape
          delay={2}
          duration={30}
          className="top-20 right-20 w-6 h-6 bg-accent rounded-full"
        />
        <FloatingShape
          delay={4}
          duration={35}
          className="bottom-20 left-20 w-4 h-4 bg-accent rotate-45"
        />
        <FloatingShape
          delay={1}
          duration={40}
          className="bottom-40 right-10 w-10 h-10 border-2 border-accent rounded-full"
        />

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="mb-8">
                <motion.h3
                  className="text-3xl lg:text-4xl font-bold mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-accent to-light bg-clip-text text-transparent">
                    Md Abu Sufian Jidan
                  </span>
                </motion.h3>

                <motion.p
                  className="text-light/80 text-lg leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Passionate full-stack developer crafting modern, responsive, and interactive web experiences
                  that bring ideas to life through clean code and creative solutions.
                </motion.p>
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-semibold text-accent mb-6 relative">
                Navigation
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent rounded-full" />
              </h4>

              <nav className="space-y-3">
                {navItems.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5, color: '#DDEBE2' }}
                    className="block text-light/80 hover:text-accent transition-all duration-300 relative group"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <motion.div
                      className="absolute left-0 top-0 w-0 h-full bg-accent/10 -z-10 rounded"
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* Contact & Social */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-semibold text-accent mb-6 relative">
                Let's Connect
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent rounded-full" />
              </h4>

              {/* Social Links */}
              <div className="flex items-center justify-center space-x-4 p-3 rounded-xl bg-light/5 backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-all duration-300">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`text-xl ${social.color} transition-colors`}
                    >
                      <social.icon />
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-light/10 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">

              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center space-x-2 text-light/70 text-sm"
              >
                <span>&copy; 2024-{new Date().getFullYear()}</span>
                <span className="text-accent">•</span>
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <FaHeart className="text-red-400" />
                </motion.div>
                <span>by Md Abu Sufian Jidan</span>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center space-x-2 text-light/70 text-sm"
              >
                <FaCode className="text-accent" />
                <span>Built with React & Tailwind CSS</span>
              </motion.div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="bg-accent/20 backdrop-blur-sm text-accent p-3 rounded-full border border-accent/30 hover:border-accent hover:bg-accent/30 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaArrowUp />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;