import React from 'react';
import Apropos from '../Components/Apropos/Apropos';
import Formulairecontact from '../Components/Formulairecontact/Formulairecontact';
import './Presentation.css';

const Presentation = () => {
    return (
        <div className="presentation-container">
            <h1 className="presentation-title">Présentation</h1>
            
            <Apropos />

            <div className="presentation-section">
                <div className="presentation-header">
                    <p className="presentation-subtitle">QUI SUIS-JE ?</p>
                    <h2 className="presentation-title"><span className="presentation-slash">/</span> Alexandra</h2>
                </div>
                <div className="presentation-content">
                    <p>
                        Moi, c’est Alexandra, fondatrice et maître-chien de Studio EKA. À 35 ans, avec 6 ans d'expérience dans le domaine de la communication, je mets toute mon énergie et mon savoir-faire au service de vos projets. En tant que Bretonne pure beurre, je sais ce que cela signifie de se battre contre vents et marées pour obtenir des résultats. J'ai à cœur de vous offrir une communication qui ne passe pas inaperçue, avec un brin de folie et beaucoup de passion. Chez moi, les jeux de mots canins ne sont jamais très loin, car comme dirait l'autre, « qui a du chien a de l'avenir » !
                    </p>
                </div>
            </div>

            <div className="presentation-section">
                <div className="presentation-header">
                    <p className="presentation-subtitle">CE QUE JE PEUX APPORTER À VOTRE ENTREPRISE</p>
                    <h2 className="presentation-title"><span className="presentation-slash">/</span> Services</h2>
                </div>
                <div className="presentation-content">
                    <p>
                        En tant que partenaire de votre réussite, Studio EKA vous propose une gamme complète de services pour renforcer votre visibilité et votre notoriété en ligne. Du développement de sites web qui aboient fort sur Google, à la gestion de votre back-office Notion pour vous libérer du temps et de l’énergie, nous sommes là pour que vous puissiez vous concentrer sur l'essentiel : faire croître votre business. Nos services de création graphique print et web ajoutent une touche bretonne à votre communication, avec un design qui ne laisse personne indifférent. Vous cherchez un site web optimisé, une stratégie de contenu percutante, ou une identité visuelle qui a du caractère ? Chez Studio EKA, nous faisons tout ça, et avec un grain de sel breton en prime !
                    </p>
                </div>
            </div>

            <div className="presentation-section">
                <div className="presentation-header">
                    <p className="presentation-subtitle">NOS VALEURS</p>
                    <h2 className="presentation-title"><span className="presentation-slash">/</span> Valeurs</h2>
                </div>
                <div className="presentation-content">
                    <p>
                        Authenticité, créativité, et engagement sont les maîtres mots de Studio EKA. En tant qu'entreprise ancrée en Bretagne, nous prônons des valeurs de simplicité et de convivialité, sans jamais sacrifier la qualité ou l'originalité. Nous croyons qu'une communication efficace doit être à la fois authentique et innovante, et c'est pourquoi nous travaillons main dans la patte avec nos clients pour créer des solutions sur mesure qui vous ressemblent. Chez Studio EKA, nous ne faisons pas de promesses en l'air : chaque projet est abordé avec rigueur, passion, et une touche de malice, pour un résultat à la hauteur de vos attentes. Et parce qu'une bonne communication, c'est avant tout une question de confiance, nous bâtissons avec nos clients des relations durables, basées sur la transparence et le respect.
                    </p>
                </div>
            </div>

            <Formulairecontact />
        </div>
    );
};

export default Presentation;

