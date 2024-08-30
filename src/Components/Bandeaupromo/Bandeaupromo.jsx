import React from 'react';
import './Bandeaupromo.css';

const Bandeaupromo = ({ imageSrc, text, highlightText }) => {
    return (
        <div className="bandeaupromo-section">
            <img src={imageSrc} alt="Promo Image" className="bandeaupromo-image" />
            <div className="bandeaupromo-text">
                {text} <br />
                <span className="highlight-text">{highlightText}</span>
            </div>
        </div>
    );
};

export default Bandeaupromo;
