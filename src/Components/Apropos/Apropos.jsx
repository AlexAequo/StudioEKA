import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Apropos.css';
import chienlunette1 from '../Assets/chienlunette1.jpg';
import flagBretagne from '../Assets/flag-bretagne.png';

const Apropos = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [imageHeight, setImageHeight] = useState(0);
    const paragraphRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (paragraphRef.current) {
            setImageHeight(paragraphRef.current.clientHeight);
        }

        const handleScroll = () => {
            if (contentRef.current) {
                const rect = contentRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (rect.top < windowHeight && rect.bottom > 0) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="apropos-container">
            <motion.div
                className="apropos-header"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                ref={contentRef}
            >
                <p className="apropos-subtitle">À PROPOS</p>
                <h2 className="apropos-title"><span className="apropos-slash">/</span> EKA Studio</h2>
            </motion.div>
            <motion.div
                className="apropos-content"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                ref={contentRef}
            >
                <div 
                    className="apropos-image-container"
                    style={{ height: `${imageHeight}px` }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.img 
                        src={chienlunette1} 
                        alt="Chien avec lunettes" 
                        className="apropos-image"
                        whileHover={{ scale: 1.05 }}
                    />
                    {isHovered && (
                        <motion.div 
                            className="apropos-hover-bubble"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            Chez Studio EKA on vous bichonne !
                        </motion.div>
                    )}
                </div>
                <div className="apropos-paragraph apropos-right" ref={paragraphRef}>
                    <p>EKA Studio est spécialisé dans la communication digitale et print, ainsi que la création de solutions de gestion sur Notion. 
                    Nous créons des sites internet sur mesure, optimisés pour la performance et la sécurité, et offrons une expertise en réseaux sociaux. 
                    De la stratégie à l'exécution, nous vous accompagnons pour maximiser votre visibilité et impact.</p>
                </div>
            </motion.div>
            <motion.div
                className="apropos-paragraph apropos-left"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
                <p><strong>Studio EKA ou E-Kreiz</strong> (au milieu en breton) 
                <img src={flagBretagne} alt="Drapeau Bretagne" className="flag-emoji" /> 
                <strong>Aequo</strong> (référence à ex-aequo et l'écho le bruit) fait référence au fait de réussir à trouver un chemin au milieu du bruit et de la foule, c'est que vous propose ce studio 100% pur beurre breton, trouver votre voix avec style.</p>
            </motion.div>
        </div>
    );
};

export default Apropos;

