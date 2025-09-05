import { motion } from "framer-motion";

const blogs = [
    {
        title: "How I Built LuxeMatches Using MERN",
        date: "June 15, 2025",
        summary:
            "A behind-the-scenes breakdown of how I developed LuxeMatches — from authentication to Stripe payments.",
        link: "#",
    },
    {
        title: "Tips for Clean React Components",
        date: "May 30, 2025",
        summary:
            "Modular, reusable, and scalable React code — tips I use to keep my frontend clean and efficient.",
        link: "#",
    },
    {
        title: "Why Tailwind CSS Changed My Workflow",
        date: "May 10, 2025",
        summary:
            "Exploring how utility-first design sped up development time while improving consistency.",
        link: "#",
    },
];

const Blog = () => {
    return (
        <section className="min-h-screen bg-light py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-primary mb-4"
                >
                    My Blogs
                </motion.h2>
                <p className="text-secondary mb-12 max-w-2xl mx-auto">
                    I write about projects, tips, and tools I use in modern web development.
                </p>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow text-left"
                        >
                            <h3 className="text-xl font-semibold text-primary mb-2">
                                {post.title}
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                            <p className="text-secondary text-sm mb-4">{post.summary}</p>
                            <a
                                href={post.link}
                                className="text-primary hover:underline font-medium text-sm"
                            >
                                Read more →
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blog;