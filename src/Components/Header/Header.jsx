import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">LOGO</Link>
            </div>
            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/presentation">Présentation</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/realisations">Réalisations</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
            <div className="cta">
                <Link to="/contact" className="cta-button">Contact</Link>
            </div>
            <div className="burger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
}

export default Header;
