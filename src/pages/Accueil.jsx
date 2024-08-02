import React from 'react';
import './Accueil.css';
import ChienHero from '../Components/Assets/chien-hero.jpg';
import Boutoncta from '../Components/Boutoncta/Boutoncta';
import Barreservice from '../Components/Barreservice/Barreservice';

const Accueil = () => {
    return (
        <>
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Une communication qui a du <span className="highlight">chien</span></h1>
                    <Boutoncta />
                </div>
                <img src={ChienHero} alt="Chien Hero" className="hero-image" />
            </div>
            <div className="services-accroche">
                <h2>Chez Studio EKA on vous bichonne</h2>
            </div>
            <Barreservice /> {/* Ajout du composant Barreservice */}
        </>
    );
};

export default Accueil;
