import React from 'react';
import './Accueil.css';
import Hero from '../Components/Hero/Hero';
import ChienFull from '../Components/Assets/chienfull.jpg';
import ChienFete from '../Components/Assets/chienfete.jpg';
import Boutoncta from '../Components/Boutoncta/Boutoncta';
import Bandeaudefilant from '../Components/Bandeaudefilant/Bandeaudefilant';
import Work from '../Components/Work/Work';
import Apropos from '../Components/Apropos/Apropos';
import Barreservice from '../Components/Barreservice/Barreservice';
import Realisations1 from '../Components/Realisations/Realisations1';
import Titrecategorie from '../Components/Titrecategorie/Titrecategorie';
import Cardarticleblog from '../Components/Cardarticleblog/Cardarticleblog';
import MobileImage from '../Components/Assets/mobile.png';
import Formulairecontact from '../Components/Formulairecontact/Formulairecontact';
import articlenotion from '../Components/Assets/articlenotion.jpg';
import articleprint from '../Components/Assets/articleprint.jpg';
import articletendances from '../Components/Assets/articletendances.jpg';
import Lottie from 'react-lottie-player';
import lottieAnimation from '../Components/Assets/Animation-bubble.json';

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

const testimonials = [
    {
        content: "Super service ! Je suis très satisfait.",
        photo: require('../Components/Assets/temoignage1.jpg'), // Mettre à jour le chemin
        name: "John Doe",
        company: "Météors space"
    },
    {
        content: "Un travail exceptionnel, merci au Studio !",
        photo: require('../Components/Assets/temoignage2.jpg'), // Mettre à jour le chemin
        name: "Sarah Berthelot",
        company: "Sensorial"
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
            <div className="full-page-image-section">
                <img src={ChienFull} alt="Chien Full" className="full-page-image" />
                <div className="full-page-text">
                    Une agence avec <br />
                    <span className="highlight-text">du mordant !</span>
                </div>
            </div>
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
            <Titrecategorie titre1="Paroles" titre2="de clients" />
            <section className="testimonials-section">
                <div className="testimonials-container">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <p>{testimonial.content}</p>
                            <div className="testimonial-author">
                                <img src={testimonial.photo} alt={testimonial.name} className="testimonial-photo" />
                                <div>
                                    <strong>{testimonial.name}</strong>
                                    <span>{testimonial.company}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
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
