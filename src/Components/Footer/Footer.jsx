import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="px-4 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        {/* Left: Name and year */}
        <div className="text-sm text-center md:text-left">
          &copy; 2024-{new Date().getFullYear()} Md Abu Sufian Jidan. All rights reserved.
        </div>

        {/* Center: Navigation links */}
        <div className="flex gap-4 text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/resume" className="hover:underline">Resume</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>

        {/* Right: Social icons */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://wa.me/8801906844598"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:jidanjiyaj03@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/md-abu-sufian-jidan/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Md-Sufian-Jidan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;