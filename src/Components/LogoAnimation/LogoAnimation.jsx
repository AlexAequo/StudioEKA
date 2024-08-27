import React from 'react';
import { motion } from 'framer-motion';
import './LogoAnimation.css';

const LogoAnimation = () => {
    const text = "Studio EKA";

    const letterVariants = {
        bounce: {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.5 } }
        },
        rotate: {
            hidden: { opacity: 0, rotate: -180 },
            visible: { opacity: 1, rotate: 0, transition: { duration: 0.6 } }
        },
        scale: {
            hidden: { opacity: 0, scale: 0.5 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
        },
        fadeIn: {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.6 } }
        }
    };

    const getRandomVariant = () => {
        const variants = ['bounce', 'rotate', 'scale', 'fadeIn'];
        return variants[Math.floor(Math.random() * variants.length)];
    };

    return (
        <div className="logo-text">
            {text.split("").map((char, index) => {
                const variant = getRandomVariant();
                return (
                    <motion.span
                        key={index}
                        variants={letterVariants[variant]}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            duration: 0.6,
                            delay: index * 0.05
                        }}
                        style={{ display: 'inline-block' }}
                    >
                        {char}
                    </motion.span>
                );
            })}
        </div>
    );
};

export default LogoAnimation;
