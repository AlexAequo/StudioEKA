import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import './Boutoncta.css';

const Boutoncta = () => {
    const controls = useAnimation();
    const ref = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const rect = ref.current.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                controls.start({ opacity: 1, y: 0 });
            } else {
                controls.start({ opacity: 0, y: 50 });
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);

    return (
        <div className="cta1">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <Link to="/contact" className="cta-button1">Prendre rendez-vous !</Link>
            </motion.div>
        </div>
    );
};

export default Boutoncta;




