import { motion } from "framer-motion";
import { FaCalendarAlt, FaArrowRight, FaClock, FaBookOpen, FaPen } from "react-icons/fa";
import { blogs } from "../../../public/data";

const Blog = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hover: {
            scale: 1.1,
            rotate: 2,
            transition: { duration: 0.4 }
        }
    };

    return (
        <section className="relative bg-gradient-to-br from-light via-accent/30 to-light py-20 px-6 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zM10 10c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            {/* Floating Elements */}
            <motion.div
                animate={{
                    y: [-20, 20, -20],
                    rotate: [0, 5, 0]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl"
            />

            <motion.div
                animate={{
                    y: [20, -20, 20],
                    rotate: [0, -3, 0]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-r from-accent to-primary/20 rounded-full blur-xl"
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
                        <FaPen className="text-sm" />
                        Latest Insights
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
                    >
                        Blog &
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ml-3">
                            Articles
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-secondary text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                    >
                        Sharing my journey, insights, and discoveries in web development.
                        From technical tutorials to industry best practices.
                    </motion.p>
                </div>

                {/* Blog Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {blogs.map((post, index) => (
                        <motion.article
                            key={index}
                            variants={cardVariants}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.3 }
                            }}
                            className="group bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden h-48">
                                <motion.img
                                    src={post.image}
                                    alt={post.title}
                                    variants={imageVariants}
                                    whileHover="hover"
                                    className="w-full h-full object-cover"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                {/* Read Time Badge */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 + 0.5 }}
                                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary flex items-center gap-1"
                                >
                                    <FaClock className="text-xs" />
                                    {post.readTime}
                                </motion.div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Date */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                    className="flex items-center gap-2 text-secondary text-sm mb-3"
                                >
                                    <FaCalendarAlt className="text-xs" />
                                    {post.date}
                                </motion.div>

                                {/* Title */}
                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.4 }}
                                    className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300 line-clamp-2"
                                >
                                    {post.title}
                                </motion.h3>

                                {/* Summary */}
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.5 }}
                                    className="text-secondary text-sm leading-relaxed mb-4 line-clamp-3"
                                >
                                    {post.summary}
                                </motion.p>

                                {/* Tags */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.6 }}
                                    className="flex flex-wrap gap-2 mb-6"
                                >
                                    {post.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${post.color} text-white`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </motion.div>

                                {/* Read More Button */}
                                <motion.a
                                    href={post.link}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.7 }}
                                    whileHover={{ x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:text-secondary transition-colors duration-300 group/link"
                                >
                                    <FaBookOpen className="text-xs" />
                                    Read Full Article
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <FaArrowRight className="text-xs group-hover/link:scale-110 transition-transform" />
                                    </motion.span>
                                </motion.a>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <p className="text-secondary mb-6 text-lg">
                        Want to stay updated with my latest articles and insights?
                    </p>
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 group"
                    >
                        <FaBookOpen className="text-sm group-hover:scale-110 transition-transform" />
                        Subscribe to Newsletter
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}

export default Blog;