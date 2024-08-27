import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LogoAnimation from '../LogoAnimation/LogoAnimation';

const Header = () => {
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
            <nav className="custom-nav">
                <ul>
                    {['Presentation', 'Services', 'Realisations', 'Blog'].map((item, index) => (
                        <motion.li 
                            key={item} 
                            initial="hidden" 
                            animate="visible" 
                            variants={navItemVariants}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 * (index + 1) }}
                        >
                            <Link to={`/${item.toLowerCase()}`} className={`custom-nav-link ${item.toLowerCase()}`}>
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
        </header>
    );
};

export default Header;
