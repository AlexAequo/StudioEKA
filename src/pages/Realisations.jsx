import React from 'react';
import Realisations1 from '../Components/Realisations/Realisations1';
import './Realisations.css';


const Realisations = () => {
    return (
        <div className="realisations-container">
            <div className="realisations-header">
                <p className="realisations-subtitle">NOS RÉALISATIONS</p>
                <h2 className="realisations-title">
                    <span className="realisations-slash">/</span> Des projets qui naviguent avec style
                </h2>
            </div>
            <div className="realisations-content">
                <div className="realisations-paragraph realisations-right">
                    <p>
                        Bienvenue dans notre chenil créatif, où chaque projet réalisé par Studio EKA est une nouvelle occasion de montrer les crocs... de la meilleure des façons ! Que ce soit un site web sur mesure, une campagne de communication percutante, ou une optimisation de votre back-office, nous avons mis notre cœur breton et notre flair aiguisé dans chaque réalisation.
                    </p>
                </div>
                <div className="realisations-paragraph realisations-left">
                    <p>
                        Chez Studio EKA, chaque réalisation est un vent de fraîcheur venu tout droit de la Bretagne. Que vous soyez à la recherche d’un site web performant, d’une campagne de communication qui a du mordant, ou d’une gestion optimisée de vos outils, nous avons mis toute notre expertise au service de vos ambitions. Chaque projet est un mélange de créativité et de rigueur, pensé pour vous aider à atteindre vos objectifs tout en restant fidèle à vos valeurs.
                    </p>
                </div>
            </div>
            <Realisations1 />
        </div>
    );
};

export default Realisations;
