import React from 'react';
import './Informations.css';

const Informations = () => {
    return (
        <div className="informations-container">
            <div className="informations-header">
                <p className="informations-subtitle">INFORMATIONS</p>
                <h2 className="informations-title"><span className="informations-slash">/</span> Studio EKA</h2>
            </div>

            <div className="informations-content">
                <div className="informations-section">
                    <div className="informations-header">
                        <p className="informations-subtitle">POLITIQUE DE CONFIDENTIALITÉ</p>
                        <h2 className="informations-title"><span className="informations-slash">/</span> Confidentialité des données</h2>
                    </div>
                    <div className="informations-content">
                        <p>Chez Studio EKA, nous prenons très au sérieux la protection de vos données personnelles. Nous collectons et utilisons vos informations uniquement dans le cadre de nos prestations, en conformité avec les réglementations en vigueur, notamment le Règlement Général sur la Protection des Données (RGPD).</p>
                        <p><strong>Données collectées :</strong> Nous recueillons uniquement les données nécessaires pour la réalisation de nos services : nom, prénom, adresse email, informations de facturation, etc. Ces informations sont stockées de manière sécurisée et ne sont jamais partagées avec des tiers sans votre consentement préalable.</p>
                        <p><strong>Utilisation des données :</strong> Les données collectées sont utilisées pour vous fournir nos services, vous envoyer des informations pertinentes sur nos offres, et améliorer la qualité de notre site internet.</p>
                        <p><strong>Vos droits :</strong> Vous avez le droit d'accéder, de rectifier ou de supprimer vos données personnelles à tout moment. Pour exercer ces droits, veuillez nous contacter à l'adresse email suivante : contact@studioeka.bzh</p>
                    </div>
                </div>

                <div className="informations-section">
                    <div className="informations-header">
                        <p className="informations-subtitle">MENTIONS LÉGALES</p>
                        <h2 className="informations-title"><span className="informations-slash">/</span> Informations légales</h2>
                    </div>
                    <div className="informations-content">
                        <p><strong>Éditeur du site :</strong> Le site <www className="studioeka bzh"></www> est édité par Studio EKA, une entreprise individuelle située au 2 rue des mouettes, 22000 Saint-Brieuc, France. Numéro de SIRET : 3469705356</p>
                        <p><strong>Responsable de publication :</strong> Le responsable de la publication est MME. Lola pariot.</p>
                        <p><strong>Hébergement :</strong> Le site est hébergé par OVH, dont le siège social est situé à  2, rue Kellermann, 59100 Roubaix.</p>
                        <p><strong>Propriété intellectuelle :</strong> Tous les contenus présents sur le site, incluant les textes, images, et graphismes, sont la propriété exclusive de Studio EKA ou de leurs auteurs respectifs. Toute reproduction, même partielle, est strictement interdite sans l'accord préalable écrit de Studio EKA.</p>
                        <p><strong>Limitation de responsabilité :</strong> Studio EKA ne saurait être tenu responsable des dommages directs ou indirects résultant de l'accès à son site web ou de l'utilisation des informations qu'il contient.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Informations;
