import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Work.css';

const Work = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, -300]); // Ajuste pour une animation plus fluide

    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className="work-container"
            style={{ y }} // Appliquer la transformation de défilement
        >
            <motion.div className="text-container">
                {"présentation".split("").map((char, index) => (
                    <motion.span
                        key={index}
                        className="work-letter"
                        variants={letterVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ 
                            duration: 1.2, 
                            delay: index * 0.05, 
                            type: "spring", 
                            stiffness: 100 
                        }}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Work;
