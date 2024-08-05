import React, { useEffect, useRef } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const ctaButtonRef = useRef(null);

    useEffect(() => {
        const animateButton = () => {
            if (ctaButtonRef.current) {
                ctaButtonRef.current.classList.add('jello-vertical');
                setTimeout(() => {
                    ctaButtonRef.current.classList.remove('jello-vertical');
                }, 900); // Durée de l'animation (0.9s = 900ms)
            }
        };

        animateButton(); // Démarre l'animation immédiatement

        const intervalId = setInterval(() => {
            animateButton();
        }, 30000); // Répéter toutes les 30 secondes

        return () => clearInterval(intervalId); // Nettoie l'intervalle lors du démontage du composant
    }, []);

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">LOGO</Link>
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to="/presentation">Présentation</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/realisations">Réalisations</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
            <div className="cta">
                <Link to="/contact" className="cta-button" ref={ctaButtonRef}>Contact</Link>
            </div>
            <div className="burger" onClick={() => {}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
}

export default Header;
