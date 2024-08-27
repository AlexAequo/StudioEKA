import React from 'react';
import './Bandeaudefilant.css';

const Bandeaudefilant = () => {
    const keywords = [
        "Communication digitale", "Organisation", "Développement", "Webdesign", 
        "Performance", "Sécurité", "Réseaux sociaux", "Notion", 
        "Communication print", "Stratégie"
    ]; // Liste de mots-clés

    const separator = "•"; // Séparateur de mots-clés

    // Ajouter un séparateur après "Stratégie" pour boucler la liste
    const renderContent = (startIndex) => {
        const length = keywords.length;
        return (
            <>
                {keywords.slice(startIndex, length).concat(keywords.slice(0, startIndex)).map((word, index) => (
                    <React.Fragment key={index}>
                        <span>{word}</span>
                        <span className="separator">{separator}</span> {/* Ajout du séparateur après chaque mot */}
                    </React.Fragment>
                ))}
            </>
        );
    };

    return (
        <div className="bandeau-defilant">
            <div className="bandeau-contenu">
                {renderContent(0)}
                {renderContent(0)} {/* Répéter deux fois pour permettre un défilement continu */}
            </div>
        </div>
    );
};

export default Bandeaudefilant;
