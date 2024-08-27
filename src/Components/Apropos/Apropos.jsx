import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Apropos.css';
import chienlunette1 from '../Assets/chienlunette1.jpg'; // Chemin vers l'image
import flagBretagne from '../Assets/flag-bretagne.png'; // Utilisation du chemin correct

const Apropos = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageHeight, setImageHeight] = useState(0);
    const paragraphRef = useRef(null);

    useEffect(() => {
        if (paragraphRef.current) {
            setImageHeight(paragraphRef.current.clientHeight);
        }
    }, []);

    return (
        <div className="apropos-container">
            <div className="apropos-header">
                <p className="apropos-subtitle">À PROPOS</p>
                <h2 className="apropos-title"><span className="apropos-slash">/</span> EKA Studio</h2>
            </div>
            <div className="apropos-content">
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
            </div>
            <div className="apropos-paragraph apropos-left">
                <p><strong>Studio EKA ou E-Kreiz</strong> (au milieu en breton) 
                <img src={flagBretagne} alt="Drapeau Bretagne" className="flag-emoji" /> {/* Ajout de l'emoji */}
                <strong>Aequo</strong> (référence à ex-aequo et l'écho le bruit) fait référence au fait de réussir à trouver un chemin au milieu du bruit et de la foule, c'est que vous propose ce studio 100% pur beurre breton, trouver votre voix avec style.</p>
            </div>
        </div>
    );
};

export default Apropos;
