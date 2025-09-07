import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const ProcessStep = ({ step, index, isActive, onHover, onLeave }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut"
            }}
            onMouseEnter={() => onHover(index)}
            onMouseLeave={onLeave}
            className={`relative group cursor-pointer ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col md:flex items-center gap-8 mb-10 md:mb-24`}
        >
            {/* Content Card */}
            <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`flex-1 bg-light rounded-2xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-accent/20 ${isActive ? 'ring-2 ring-primary/30' : ''
                    }`}
            >
                {/* Step Number */}
                <div className="flex items-center mb-4">
                    <span className={`bg-gradient-to-r ${step.color} text-light text-sm font-bold px-3 py-1 rounded-full mr-3`}>
                        Step {index + 1}
                    </span>
                    <span className="text-secondary/60 text-sm font-medium">{step.duration}</span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                    {step.title}
                </h3>

                <p className="text-secondary text-lg mb-6 leading-relaxed">
                    {step.description}
                </p>

                {/* Details List */}
                <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:opacity-100 md:max-h-96'}`}>
                    <h4 className="text-primary font-semibold mb-3">Key Activities:</h4>
                    <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start space-x-3 text-secondary"
                            >
                                <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0" />
                                <span>{detail}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </motion.div>

            {/* Icon Circle */}
            <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`relative z-10 bg-gradient-to-r ${step.color} rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500`}
            >
                {step.icon}

                {/* Pulse Ring */}
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full`}
                />

                {/* Step Number Overlay */}
                <div className="absolute -bottom-2 -right-2 bg-light text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                    {index + 1}
                </div>
            </motion.div>

        </motion.div>
    );
};

export default ProcessStep;