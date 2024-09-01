import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Realisations1.css';

import image1 from '../Assets/mockup-affiche.png';
import image2 from '../Assets/mockup-notion.png';
import image3 from '../Assets/mockup-spirit.png';

const images = [
  { src: image1, description: 'Communication print pour Street-art en Baie 2022', modalText: ' <strong>Street Art en Baie : Une touche artistique pour Yffiniac</strong>\n\nÀ l\'occasion du Festival Street Art en Baie, organisé par la ville d\'Yffiniac, j\'ai eu le plaisir de concevoir l\'identité visuelle complète de l\'événement. Flyers, affiches et autres supports promotionnels ont été créés pour capturer l\'énergie et la créativité de ce festival unique.' },
  { src: image2, description: 'Votre "Buddy" de travail sur Notion', modalText: '<strong>Work Buddy : Votre partenaire de gestion sur Notion</strong>\n\nAvec Work Buddy, prenez le contrôle de votre organisation avec la même confiance qu\'un marin breton affrontant les flots. Cet outil est conçu pour vous aider à naviguer en toute sérénité dans vos tâches et projets.\n\n Work Buddy est un backoffice personnalisé sur le logiciel Notion, pensé pour optimiser l\'organisation de votre entreprise. Que vous soyez une petite start-up en plein essor ou une entreprise bien établie, notre solution s\'adapte à vos besoins spécifiques. Grâce à notre expertise, nous transformons Notion en un véritable phare guidant vos équipes vers une productivité accrue, tout en gardant l\'esprit aussi clair qu\'une journée sur la côte bretonne.' },
  { src: image3, description: 'Boutique en ligne Ghibli Spirit', modalText: '<strong>Ghibli Spirit : E-commerce dédié aux fans du Studio Ghibli</strong>\n\nJ\'ai développé Ghibli Spirit, un site e-commerce sous WordPress utilisant le builder Divi, spécialement conçu pour vendre des goodies du Studio Ghibli. Le site intègre une architecture optimisée pour une navigation fluide, avec un design qui reflète l\'esthétique unique du studio. Chaque page a été configurée pour mettre en valeur les produits, assurer une expérience utilisateur agréable, et maximiser les conversions.' },
];

const Realisations1 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="realisations-container">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="realisations-image"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 * index }}
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          onClick={() => setSelectedImage(image)}
        >
          <img src={image.src} alt={`Image ${index + 1}`} className="realisations-img" />
          <div className="realisations-hover-overlay">
            <p>{image.description}</p>
            <motion.button
              className="discover-button"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Découvrez le projet
            </motion.button>
          </div>
        </motion.div>
      ))}

      {selectedImage && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={e => e.stopPropagation()}
          >
            <img src={selectedImage.src} alt="Modal" className="modal-image" />
            <div className="modal-description">
              <div dangerouslySetInnerHTML={{ __html: selectedImage.modalText.replace(/\n/g, '<br />') }} />
            </div>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>
              &times;
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Realisations1;
