import React from 'react';
import './Accueil.css';
import ChienHero from '../Components/Assets/chien-hero.jpg';
import Boutoncta from '../Components/Boutoncta/Boutoncta';
import Barreservice from '../Components/Barreservice/Barreservice';
import WordRotate from '../Components/magicui/word-rotate';
import Realisations from '../Components/Realisations/Realisations';
import Titrecategorie from '../Components/Titrecategorie/Titrecategorie';

const Accueil = () => {
    return (
        <>
            <div className="hero-section">
                <div className="hero-content">
                    <h1>
                        Une communication <br /> 
                        qui a du <div className="highlight"> 
                            <WordRotate 
                                className="text-4xl font-bold text-black dark:text-white"
                                words={["chien", "style", "peps"]}
                            />
                        </div>
                    </h1>
                    <Boutoncta />
                </div>
                <img src={ChienHero} alt="Chien Hero" className="hero-image" />
            </div>
            <div className="services-accroche">
                <h2>Chez Studio EKA on vous bichonne</h2>
            </div>
            <Barreservice /> 

            <section className="realisations-section">
                <Titrecategorie /> {/* Integration of the new component */}
                <h2>Nos Réalisations</h2>
                <Realisations /> 
                <div className="bouton-cta-container">
                    <Boutoncta />
                </div>
                </section>
            
        </>
    );
};

export default Accueil;
