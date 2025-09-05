import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navItems } from "../../../public/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Glass effect with border and shadow */}
      <div className="backdrop-blur-lg bg-accent/30 border border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            MdAbuSufianJidan
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map(({ name, path, icon }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ${
                    isActive ? "text-primary" : "text-secondary hover:text-primary"
                  }`
                }
              >
                {icon}
                {name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary text-2xl"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-accent/20 backdrop-blur-md px-4 py-2 rounded-b-lg shadow-lg border-t border-white/20"
            >
              {navItems.map(({ name, path, icon }) => (
                <NavLink
                  key={name}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 py-3 border-b border-white/10 ${
                      isActive ? "text-primary" : "text-secondary hover:text-primary"
                    }`
                  }
                >
                  {icon}
                  {name}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
