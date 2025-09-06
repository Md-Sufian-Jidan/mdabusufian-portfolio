import { FaHome, FaUserAlt, FaBlog, FaEnvelope, FaFileAlt, FaRocket, FaCode, FaMobileAlt, FaClock, FaBolt, FaSmile, FaSearch, FaPencilRuler, } from "react-icons/fa";

export const navItems = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "About", path: "/about", icon: <FaUserAlt /> },
  { name: "Resume", path: "/resume", icon: <FaFileAlt /> },
  { name: "Blog", path: "/blog", icon: <FaBlog /> },
  { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
];

export const features = [
  { icon: <FaRocket className="text-3xl text-primary" />, title: "Fast & Optimized", description: "Blazing fast, SEO-friendly, and performance-tuned." },
  { icon: <FaCode className="text-3xl text-primary" />, title: "Clean Code", description: "Readable, modular, and maintainable code." },
  { icon: <FaMobileAlt className="text-3xl text-primary" />, title: "Fully Responsive", description: "Looks perfect on all devices." },
  { icon: <FaClock className="text-3xl text-primary" />, title: "On-Time Delivery", description: "Deadlines matter — I deliver on time." },
  { icon: <FaBolt className="text-3xl text-primary" />, title: "Modern Stack", description: "React, Tailwind, Framer Motion, Vite." },
  { icon: <FaSmile className="text-3xl text-primary" />, title: "Client-Centered", description: "Clear communication and feedback loops." },
];

export const steps = [
  { icon: <FaSearch className="text-white text-2xl" />, title: "Research", description: "Understand your goals, audience, and brand needs." },
  { icon: <FaPencilRuler className="text-white text-2xl" />, title: "Design", description: "Create a modern, user-focused layout and wireframe." },
  { icon: <FaCode className="text-white text-2xl" />, title: "Develop", description: "Build the site with responsive, clean React code." },
  { icon: <FaRocket className="text-white text-2xl" />, title: "Launch", description: "Deploy, test, and deliver with performance in mind." },
];

export const projects = [
  {
    title: "LuxeMatches",
    description:
      "Premium matchmaking platform with role-based auth, Stripe payments, dynamic filtering, and admin control.",
    features: [
      "Role-based Access & Authentication: Firebase Auth + JWT protection.",
      "Stripe Payment Integration for secure contact requests.",
      "Dynamic Filtering & Pagination: Filter biodata by age, gender, division.",
    ],
    tech: [
      "React", "Node.js", "MongoDB", "Firebase", "Tailwind", "Stripe",
      "Firebase Auth", "React Router", "React Query", "Framer Motion",
      "SwiperJS", "JWT", "Axios",
    ],
    live: "https://luxe-matches-client.vercel.app/",
    client: "https://github.com/Md-Sufian-Jidan/luxe-matches-client",
  },
  {
    title: "WorkNest",
    description:
      "Job management app with employee salary tracking, dashboards, and JWT-secured role-based access.",
    features: [
      "Role-based dashboards: Admin, HR, Employee.",
      "Stripe integration for salary payments.",
      "Monthly progress tracking and work submission forms.",
    ],
    tech: [
      "React", "Express", "MongoDB", "Node.js", "Tailwind", "Stripe",
      "Firebase Auth", "React Router", "React Query", "Framer Motion",
      "SwiperJS", "JWT", "Axios",
    ],
    live: "https://work-nest-client.web.app/",
    client: "https://github.com/Md-Sufian-Jidan/work-nest-client",
  },
  {
    title: "StudySync",
    description:
      "Online assessment system with role-based feedback, leaderboards, PDF previews, and dark mode.",
    features: [
      "Admins can give marks & feedback. Users can submit assignments.",
      "PDF preview & notes on submission.",
      "Pagination, difficulty filters, dark/light mode, leaderboard.",
    ],
    tech: [
      "React", "MongoDB", "Node.js", "Express", "JWT", "Firebase Authentication",
      "Tailwind CSS", "Axios", "SweetAlert2", "React Toastify", "Swiper.js",
      "React Awesome Reveal",
    ],
    live: "https://online-assessment-client.web.app/",
    client: "https://github.com/Md-Sufian-Jidan/online-assessment-client",
  },
];

export const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "React Router",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "Firebase",
  "JWT",
  "Stripe",
  "Git / GitHub",
  "Postman",
  "Framer Motion",
  "Vite",
  "AOS",
];

export const blogs = [
  {
    title: "How I Built LuxeMatches Using MERN",
    date: "June 15, 2025",
    readTime: "8 min read",
    summary: "A behind-the-scenes breakdown of how I developed LuxeMatches — from authentication to Stripe payments.",
    tags: ["MERN", "Authentication", "Stripe"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
    color: "bg-gradient-to-r from-[#3A4D39] to-[#12372A]",
    link: "#",
  },
  {
    title: "Tips for Clean React Components",
    date: "May 30, 2025",
    readTime: "5 min read",
    summary: "Modular, reusable, and scalable React code — tips I use to keep my frontend clean and efficient.",
    tags: ["React", "Clean Code", "Best Practices"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    color: "bg-gradient-to-r from-[#3A4D39] to-[#12372A]",
    link: "#",
  },
  {
    title: "Why Tailwind CSS Changed My Workflow",
    date: "May 10, 2025",
    readTime: "6 min read",
    summary: "Exploring how utility-first design sped up development time while improving consistency.",
    tags: ["CSS", "Tailwind", "Productivity"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    color: "bg-gradient-to-r from-[#3A4D39] to-[#12372A]",
    link: "#",
  },
];


export const skillMessages = {
  'React': 'I use React to build dynamic and interactive user interfaces.',
  'JavaScript': 'JavaScript is my core programming language for web development.',
  'TailwindCSS': 'I leverage TailwindCSS for rapid, utility-first styling.',
  'HTML5': 'HTML5 forms the foundation of all my web projects.',
  'CSS3': 'I use modern CSS3 features for animations and layouts.',
  'Node.js': 'Node.js powers my backend development and server-side logic.',
  'MongoDB': 'MongoDB is my preferred NoSQL database for data storage.',
  'Express.js': 'Express.js helps me build robust REST APIs quickly.',
  'Squarespace': 'I specialize in creating custom Squarespace websites for clients.',
  'Responsive Design': 'I ensure all websites work perfectly across all devices.',
  'Git': 'Git is essential for my version control and collaboration workflow.',
  'Figma': 'I use Figma for UI/UX design and prototyping before development.'
};