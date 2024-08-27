import React from 'react';
import './Footer.css';

const Footer = () => {
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
            <li><a href="#presentation">Présentation</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#realisations">Réalisations</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>
        <div className="footer-section pages">
          <h4>Pages</h4>
          <ul>
            <li><a href="#privacy-policy">Politique de confidentialité</a></li>
            <li><a href="#text1">Mentions Légales</a></li>
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
