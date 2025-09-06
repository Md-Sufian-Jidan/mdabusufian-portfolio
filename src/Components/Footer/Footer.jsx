import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-light pt-12 pb-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-10"
      >
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
          {/* Brand / Name */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-2">
              Md Abu Sufian Jidan
            </h3>
            <p className="text-sm text-light/80">
              Crafting modern, responsive, and interactive web experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row justify-center gap-4 text-sm font-medium">
            <Link to="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link to="/resume" className="hover:text-accent transition-colors">
              Resume
            </Link>
            <Link to="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-5 text-xl">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://wa.me/8801906844598"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <FaWhatsapp />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="mailto:jidanjiyaj03@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <FaEnvelope />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/md-abu-sufian-jidan/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/Md-Sufian-Jidan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <FaGithub />
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-light/20 my-8"></div>

        {/* Bottom Section */}
        <div className="text-center text-xs text-light/70">
          &copy; 2024-{new Date().getFullYear()} Md Abu Sufian Jidan. All rights
          reserved.
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
