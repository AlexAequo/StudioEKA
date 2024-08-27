import React from 'react';
import { motion } from 'framer-motion';

import './Realisations.css';

// Importation des images locales
import image1 from '../Assets/mockup-affiche.png';
import image2 from '../Assets/mockup-notion.png';
import image3 from '../Assets/mockup-spirit.png';

const images = [
  { src: image1, description: 'Communication print pour Street-art en Baie 2022' },
  { src: image2, description: 'Votre "Buddy" de travail sur Notion' },
  { src: image3, description: 'Boutique en ligne Ghibli Spirit' },
];

const Realisations1 = () => {
  return (
    <div className="realisations-container">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="realisations-image"
          whileHover={{
            scale: 1.2,
            borderRadius: ["20%", "50%", "20%"],
            transition: { duration: 0.5, ease: "easeInOut" }
          }}
        >
          <img src={image.src} alt={`Image ${index + 1}`} className="realisations-img" />
          <div className="realisations-hover-overlay">
            {image.description}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Realisations1;
