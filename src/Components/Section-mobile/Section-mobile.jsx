import React from 'react';
import Lottie from 'react-lottie-player';
import MobileImage from '../Assets/mobile.png';
import lottieAnimation from '../Assets/Animation-bubble.json';
import './Section-mobile.css';

const SectionMobile = () => {
    return (
        <section className="mobile-visitor-section">
            <div className="mobile-visitor-content">
                <div className="mobile-visitor-left">
                    <Lottie
                        loop
                        animationData={lottieAnimation}
                        play
                        className="blob-lottie-animation"
                        style={{ width: 300, height: 300, position: 'absolute' }}
                    />
                    <img src={MobileImage} alt="Mobile" className="mobile-image" />
                </div>
                <div className="mobile-visitor-right">
                    <div className="mobile-visitor-text">
                        <span className="mobile-visitor-percentage">75% <br /> </span>
                        <span className="mobile-visitor-description">des visiteurs naviguent sur <br /> leur mobile</span>
                    </div>
                    <a href="/contact" className="mobile-visitor-button">Mon site adapté</a>
                </div>
            </div>
        </section>
    );
};

export default SectionMobile;

