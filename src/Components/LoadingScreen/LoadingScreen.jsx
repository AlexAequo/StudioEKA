// LoadingScreen.jsx
import React, { useEffect, useState } from 'react';
import Kaleidoscope from '../Kaleidoscope/Kaleidoscope'; // Assurez-vous que le chemin d'accès est correct
import './LoadingScreen.css'; // Ajoutez le fichier CSS pour le style de l'écran de chargement

const LoadingScreen = ({ onLoadingComplete }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Définir un délai de 5 secondes (ajustez le temps ici)
        const timer = setTimeout(() => {
            setLoading(false);
            onLoadingComplete(); // Indiquez que le chargement est terminé
        }, 5000); // 5000 ms = 5 secondes

        // Nettoyez le timer si le composant est démonté
        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    return (
        <div className={`loading-screen ${loading ? '' : 'hidden'}`}>
            <Kaleidoscope />
        </div>
    );
};

export default LoadingScreen;
