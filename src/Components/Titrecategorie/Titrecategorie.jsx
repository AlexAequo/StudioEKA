import React from 'react';
import { motion } from 'framer-motion';
import './Titrecategorie.css';

const Titrecategorie = () => {
    return (
        <div className="titrecategorie-container">
            <motion.div 
                className="text-box decouvrir"
                initial={{ y: 100, opacity: 0, rotate: 6.22 }}
                whileInView={{ y: 0, opacity: 1, scale: [1, 1.1, 1], rotate: 6.22 }}
                transition={{ type: 'spring', stiffness: 120, delay: 0.5 }}
                viewport={{ once: true }}
            >
                Découvrir
            </motion.div>
            <motion.div 
                className="text-box realisations"
                initial={{ y: 100, opacity: 0, rotate: -5.69 }}
                whileInView={{ y: 0, opacity: 1, scale: [1, 1.1, 1], rotate: -5.69 }}
                transition={{ type: 'spring', stiffness: 120, delay: 1.5 }}
                viewport={{ once: true }}
            >
                les réalisations
            </motion.div>
        </div>
    );
}

export default Titrecategorie;
