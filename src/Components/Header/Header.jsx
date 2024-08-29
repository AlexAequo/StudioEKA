import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LogoAnimation from '../LogoAnimation/LogoAnimation';
import iconeBurger from '../Assets/icone-burger.png';
import iconeFermeture from '../Assets/icone-fermeture.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const logoVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    const navItemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    const ctaButtonVariants = {
        hidden: { scale: 1 },
        visible: { 
            scale: [1, 1.1, 1], 
            transition: { duration: 0.8, repeat: Infinity, repeatType: "loop" }
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="custom-header">
            <motion.div 
                className="custom-logo" 
                initial="hidden" 
                animate="visible" 
                variants={logoVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <Link to="/">
                    <LogoAnimation /> {/* Animation du logo */}
                </Link>
            </motion.div>

            <nav className={`custom-nav ${menuOpen ? 'open' : ''}`}>
                <ul>
                    {['Presentation', 'Services', 'Realisations', 'Blog'].map((item, index) => (
                        <motion.li 
                            key={item} 
                            initial="hidden" 
                            animate="visible" 
                            variants={navItemVariants}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 * (index + 1) }}
                        >
                            <Link 
                                to={`/${item.toLowerCase()}`} 
                                className={`custom-nav-link ${item.toLowerCase()}`} 
                                onClick={() => setMenuOpen(false)}  // Ferme le menu lorsque l'utilisateur clique sur un lien
                            >
                                {item}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>

            <motion.div 
                className="custom-cta" 
                initial="hidden" 
                animate="visible" 
                variants={ctaButtonVariants}
            >
                <Link to="/contact" className="custom-cta-button">Contact</Link>
            </motion.div>

            {/* Menu burger et fermeture au même endroit */}
            <motion.div 
                className={`burger-menu ${menuOpen ? 'active' : ''}`} 
                onClick={toggleMenu}
                initial={{ rotate: 0 }}
                animate={{ rotate: menuOpen ? 180 : 0 }} 
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                <img 
                    src={menuOpen ? iconeFermeture : iconeBurger} 
                    alt="Menu icon" 
                />
            </motion.div>

            {/* Modal overlay */}
            <motion.div 
                className={`menu-overlay ${menuOpen ? 'active' : ''}`} 
                initial={{ x: '100%' }} 
                animate={{ x: menuOpen ? 0 : '100%' }} 
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                <nav className="menu-nav">
                    <ul>
                        {['Presentation', 'Services', 'Realisations', 'Blog'].map((item, index) => (
                            <li key={item}>
                                <Link 
                                    to={`/${item.toLowerCase()}`} 
                                    className={`menu-nav-link ${item.toLowerCase()}`} 
                                    onClick={toggleMenu} // Ferme le menu après avoir cliqué sur un lien
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </motion.div>
        </header>
    );
};

export default Header;
