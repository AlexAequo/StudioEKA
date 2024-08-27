// src/Components/Cardarticleblog/Cardarticleblog.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Cardarticleblog.css';
import articlenotion from '../Assets/articlenotion.jpg';
import articleprint from '../Assets/articleprint.jpg';
import articletendances from '../Assets/articletendances.jpg';

const Cardarticleblog = ({ image, title, category, link }) => {
    return (
        <motion.div
            className="card-article"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <a href={link}>
                <div className="card-content">
                    <div className="card-category">{category}</div>
                    <img src={image} alt={title} className="card-image" />
                    <div className="card-overlay">
                        <h3 className="card-title">{title}</h3>
                    </div>
                    <motion.div
                        className="card-hover-overlay"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                    >
                        En savoir plus
                    </motion.div>
                </div>
            </a>
        </motion.div>
    );
};

export default Cardarticleblog;
