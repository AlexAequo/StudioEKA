import React from 'react';
import { motion } from 'framer-motion';
import './Accueil.css';
import Hero from '../Components/Hero/Hero';
import ChienFull from '../Components/Assets/chienfull.jpg';
import Boutoncta from '../Components/Boutoncta/Boutoncta';
import Apropos from '../Components/Apropos/Apropos';
import Barreservice from '../Components/Barreservice/Barreservice';
import Realisations1 from '../Components/Realisations/Realisations1';
import Titrecategorie from '../Components/Titrecategorie/Titrecategorie';
import Cardarticleblog from '../Components/Cardarticleblog/Cardarticleblog';
import Formulairecontact from '../Components/Formulairecontact/Formulairecontact';
import Bandeaupromo from '../Components/Bandeaupromo/Bandeaupromo';
import SectionMobile from '../Components/Section-mobile/Section-mobile';
import Avisclient from '../Components/Avisclient/Avisclient'; 
import articlenotion from '../Components/Assets/articlenotion.jpg';
import articleprint from '../Components/Assets/articleprint.jpg';
import articletendances from '../Components/Assets/articletendances.jpg';

// Tableau des articles mis à jour
const articles = [
    {
        image: articletendances,
        title: 'Les Dernières Tendances en Webdesign pour 2024',
        category: 'Webdesign',
        link: '/tendances-webdesign-2024'
    },
    {
        image: articlenotion,
        title: 'Les Avantages de Notion par Rapport aux Autres Outils de Gestion',
        category: 'Productivité',
        link: '/avantages-notion'
    },
    {
        image: articleprint,
        title: 'Les Erreurs à Éviter Lors de la Création de Vos Supports Print',
        category: 'Design',
        link: '/erreurs-supports-print'
    }
];

const Accueil = () => {
    return (
        <>
            <Hero />
            <div className="services-accroche"></div>
            <Apropos />
            <Titrecategorie titre1="Vous adorerez" titre2="Nos services" />
            <Barreservice />
            <section className="realisations-section">
                <Titrecategorie titre1="Découvrir" titre2="Les réalisations" />
                <Realisations1 />
                <div className="bouton-cta-container">
                    <Boutoncta />
                </div>
            </section>
            <Bandeaupromo 
                imageSrc={ChienFull} 
                text="Une agence avec" 
                highlightText="du mordant !" 
            />
            <section className="articles-section">
                <Titrecategorie titre1="Nos Articles" titre2="Récents" />
                <div className="articles-container">
                    {articles.map((article, index) => (
                        <Cardarticleblog
                            key={index}
                            image={article.image}
                            title={article.title}
                            category={article.category}
                            link={article.link}
                        />
                    ))}
                </div>
            </section>
            <SectionMobile /> {/* Intégration de la section mobile */}
            <Titrecategorie titre1="Paroles" titre2="de clients" /> {/* Réintégration du composant Titrecategorie */}
            <Avisclient /> {/* Intégration du composant Avisclient */}
            <section className="contact-section">
                <div className="contact-left">
                    <Formulairecontact />
                </div>
                <div className="contact-right">
                    <motion.div
                        className="bubble-text-container"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Vos <span className="highlight-text">idées</span>, notre flair !
                    </motion.div>
                    <div className="image-wrapper">
                        <img src={require('../Components/Assets/chiencontact.jpg')} alt="Chien Contact" className="chiencontact-image" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Accueil;
