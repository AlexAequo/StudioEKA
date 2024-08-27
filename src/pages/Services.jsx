import React from 'react';
import Barreservice from '../Components/Barreservice/Barreservice';
import './Services.css';

const Services = () => {
    return (
        <div className="services-container">
            <Barreservice />  {/* La barre de service reste en haut */}

            <div className="services-content">
                <div className="services-header">
                    <p className="services-subtitle">NOS SERVICES</p>
                    <h2 className="services-title"><span className="services-slash">/</span> Studio EKA</h2>
                </div>

                <div className="services-intro">
                    <p>
                        Chez Studio EKA, nous ne faisons pas que développer des sites web ou gérer votre back-office : nous insufflons à chaque projet un petit quelque chose en plus, un vent frais de Bretagne et une touche de créativité qui a du chien. Découvrez comment nous pouvons transformer votre communication et votre gestion quotidienne en un jeu d'enfant.
                    </p>
                </div>

                <div className="services-section">
                    <div className="services-header">
                        <p className="services-subtitle">COMMUNICATION DIGITALE & PRINT</p>
                        <h2 className="services-title"><span className="services-slash">/</span> Faites hurler votre marque !</h2>
                    </div>
                    <div className="services-content">
                        <p><strong>Audit & Recherche des Besoins :</strong> Avant de nous lancer dans la création, nous prenons le temps d'écouter vos besoins, comme un chien de berger attentif à son troupeau. Un audit minutieux nous permet de comprendre vos objectifs et de tracer ensemble le meilleur chemin vers la réussite, que ce soit en ligne ou sur papier.</p>
                        <p><strong>Stratégie de Communication :</strong> Une fois votre situation bien balisée, nous élaborons une stratégie de communication qui ne vous fera pas perdre le Nord (ni l’Ouest d’ailleurs). Nous veillons à harmoniser vos supports digitaux et print pour que votre message résonne, des réseaux sociaux jusqu'à vos brochures.</p>
                        <p><strong>Création & Design :</strong> C’est là que notre flair créatif entre en jeu. Que vous ayez besoin d'un logo qui a du caractère, d'une campagne publicitaire qui remue la queue, ou d'un design print qui fait mouche, nous mettons tout en œuvre pour que votre image de marque soit aussi vivifiante qu'un bon bol d'air breton.</p>
                        <p><strong>Suivi & Optimisation :</strong> La communication est un art en perpétuelle évolution. Nous surveillons les performances de vos campagnes comme un chien de garde et ajustons la stratégie en temps réel pour garantir un impact durable et optimisé.</p>
                    </div>
                </div>

                <div className="services-section">
                    <div className="services-header">
                        <p className="services-subtitle">BACK-OFFICE NOTION</p>
                        <h2 className="services-title"><span className="services-slash">/</span> Une gestion aussi fluide que le courant du Golfe</h2>
                    </div>
                    <div className="services-content">
                        <p><strong>Analyse des Processus :</strong> Naviguer dans le monde de la gestion d’entreprise peut être aussi complexe que les courants bretons, mais ne vous inquiétez pas, nous sommes là pour vous guider. Nous analysons vos processus actuels pour identifier les zones à améliorer, et pour mettre en place des solutions qui vous feront gagner du temps.</p>
                        <p><strong>Création d'Outils Personnalisés :</strong> Avec Notion, nous créons des outils sur mesure, comme un pêcheur breton qui fabrique ses propres filets. Que ce soit des tableaux de bord intuitifs ou des systèmes de gestion complets, chaque solution est taillée pour s’adapter parfaitement à vos besoins, vous permettant ainsi de gérer votre activité avec la précision d’un marin chevronné.</p>
                        <p><strong>Formation & Support :</strong> Pour que vous puissiez naviguer sereinement avec vos nouveaux outils, nous vous proposons une formation complète. Et si jamais vous avez besoin d’un coup de patte, nous restons à votre disposition pour un support continu.</p>
                    </div>
                </div>

                <div className="services-section">
                    <div className="services-header">
                        <p className="services-subtitle">DÉVELOPPEMENT WEB</p>
                        <h2 className="services-title"><span className="services-slash">/</span> Un site web qui déferle sur le net</h2>
                    </div>
                    <div className="services-content">
                        <p><strong>Analyse des Besoins & Cahier des Charges :</strong> Comme un skipper qui prépare sa traversée, nous commençons chaque projet web par une analyse détaillée de vos besoins. Nous élaborons un cahier des charges précis, qui vous servira de boussole tout au long du développement.</p>
                        <p><strong>Conception & Maquettage :</strong> Après avoir mis le cap sur vos objectifs, nous passons à la conception et au maquettage. Imaginez des wireframes comme les premières esquisses d'un navire, prêts à prendre le large. Vous pourrez visualiser l’architecture du site et nous donner vos impressions avant de larguer les amarres vers le développement.</p>
                        <p><strong>Développement & Intégration :</strong> Nos développeurs, tels des charpentiers de marine, transforment ensuite ces maquettes en un site web performant, sécurisé, et beau comme une mer d’huile au lever du soleil. Chaque ligne de code est pensée pour que votre site fonctionne à la perfection, sur tous les appareils.</p>
                        <p><strong>Test & Mise en Ligne :</strong> Avant de mettre à l’eau, nous testons votre site sous tous les angles pour détecter et corriger les moindres bugs. Une fois le tout validé, c’est parti pour la mise en ligne ! Votre site est prêt à surfer sur les vagues du web.</p>
                        <p><strong>Maintenance & Suivi :</strong> Un site web, c’est un peu comme un bateau : il a besoin d’entretien régulier pour rester performant. Nous proposons un service de maintenance pour que votre site continue de briller, peu importe les tempêtes numériques qui pourraient se lever.</p>
                    </div>
                </div>

                <div className="services-section">
                    <div className="services-header">
                        <p className="services-subtitle">NOS VALEURS</p>
                        <h2 className="services-title"><span className="services-slash">/</span> Valeurs</h2>
                    </div>
                    <div className="services-content">
                        <p><strong>Créativité :</strong> Nous mettons un point d’honneur à donner à chaque projet un souffle créatif unique, comme une bouffée d’air marin qui revigore.</p>
                        <p><strong>Engagement :</strong> Tout comme un chien fidèle, nous restons à vos côtés tout au long de votre projet, prêts à relever chaque défi avec vous.</p>
                        <p><strong>Authenticité :</strong> En Bretagne, on ne fait pas dans le faux-semblant. Chez Studio EKA, nous créons des solutions qui sont aussi vraies que nature.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;


