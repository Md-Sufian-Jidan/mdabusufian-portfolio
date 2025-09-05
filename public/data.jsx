import { FaHome, FaUserAlt, FaBlog, FaEnvelope, FaFileAlt } from "react-icons/fa";

export const navItems = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "About", path: "/about", icon: <FaUserAlt /> },
  { name: "Resume", path: "/resume", icon: <FaFileAlt /> },
  { name: "Blog", path: "/blog", icon: <FaBlog /> },
  { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
];