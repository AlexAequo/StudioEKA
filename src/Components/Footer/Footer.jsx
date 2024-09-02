import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const handleNavigation = () => {
    window.scrollTo(0, 0);  // Fait défiler la page en haut
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo">
          <p className="logo-footer">Studio EKA</p>
          <p className="logo-subtext">"L'agence qui a du mordant !"</p>
        </div>
        <div className="footer-section navigation">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/presentation" onClick={handleNavigation}>Présentation</Link></li>
            <li><Link to="/services" onClick={handleNavigation}>Services</Link></li>
            <li><Link to="/realisations" onClick={handleNavigation}>Réalisations</Link></li>
            <li><Link to="/blog" onClick={handleNavigation}>Blog</Link></li>
          </ul>
        </div>
        <div className="footer-section pages">
          <h4>Informations</h4>
          <ul>
            <li><Link to="/informations" onClick={handleNavigation}>Politique de confidentialité</Link></li>
            <li><Link to="/informations" onClick={handleNavigation}>Mentions Légales</Link></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h4>Contact</h4>
          <p>E-mail : <a href="mailto:contact@studio-eka.bzh">contact@studio-eka.bzh</a></p>
          <div className="social-media">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
