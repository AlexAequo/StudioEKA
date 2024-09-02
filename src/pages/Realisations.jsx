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
                <p className="realisations-paragraph">
                    Bienvenue chez Studio EKA, où chaque projet est une expression créative inspirée de notre Bretagne. Que vous ayez besoin d’un site web sur mesure, d’une campagne percutante, ou d’une gestion optimisée, nous mettons notre expertise au service de vos ambitions avec créativité et rigueur.
                </p>
            </div>
            <Realisations1 />
        </div>
    );
};

export default Realisations;
