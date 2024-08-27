import React from 'react';
import './Hero.css';
import HEROS from '../Assets/HEROS.png';
import Boutoncta from '../Boutoncta/Boutoncta';
import WordRotate from '../magicui/word-rotate';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Une communication <br />
                    qui a du <span className="highlight-inline">
                        <WordRotate
                            className="word-rotate"
                            words={["chien !", "style !", "peps !"]}
                        />
                    </span>
                </motion.h1>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                >
                    <Boutoncta />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
