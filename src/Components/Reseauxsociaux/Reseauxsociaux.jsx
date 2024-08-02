import React from 'react';
import './Reseauxsociaux.css';
import linkedinIcon from '../Assets/linkedin.png'; 
import facebookIcon from '../Assets/facebook.png'; 
import instagramIcon from '../Assets/instagram.png'; 

const Reseauxsociaux = () => {
    return (
        <div className="social-container">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" className="social-icon" />
            </a>
        </div>
    );
};

export default Reseauxsociaux;
