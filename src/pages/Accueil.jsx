import React from 'react';
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
import Avisclient from '../Components/Avisclient/Avisclient'; // Import du composant Avisclient
import articlenotion from '../Components/Assets/articlenotion.jpg';
import articleprint from '../Components/Assets/articleprint.jpg';
import articletendances from '../Components/Assets/articletendances.jpg';

const articles = [
    {
        image: articlenotion,
        title: 'Notion pour les Débutants',
        category: 'Productivité',
        link: '/blog/notion-pour-debutants'
    },
    {
        image: articleprint,
        title: "L'Impression 3D: Le Futur de la Fabrication",
        category: 'Technologie',
        link: '/blog/impression-3d'
    },
    {
        image: articletendances,
        title: 'Tendances de Design 2024',
        category: 'Design',
        link: '/blog/tendances-design-2024'
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
                <div className="bubble-text-container">
            Vos <span className="highlight-text">idées</span>, notre flair !
        </div>
        <div className="image-wrapper">
            <img src={require('../Components/Assets/chiencontact.jpg')} alt="Chien Contact" className="chiencontact-image" />
        </div>
                </div>
            </section>
        </>
    );
};

export default Accueil;
