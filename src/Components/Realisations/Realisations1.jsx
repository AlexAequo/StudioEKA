import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import Lottie from 'react-lottie-player';
import blobAnimation from '../Assets/blob-color.json'; // Assurez-vous que ce chemin est correct
import './Realisations1.css';

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
  const [selectedImage, setSelectedImage] = useState(null);
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.realisations-image');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          controls.start({ opacity: 1, y: 0 });
        } else {
          controls.start({ opacity: 0, y: 50 });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <div className="realisations-container">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="realisations-image"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 * index }}
          whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
          onClick={() => setSelectedImage(image)}
        >
          <div className="blob-container">
            <Lottie
              loop
              animationData={blobAnimation}
              play
              className="blob-animation"
            />
          </div>
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

      <AnimatePresence>
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
                <p>{selectedImage.description}</p>
              </div>
              <button className="modal-close" onClick={() => setSelectedImage(null)}>
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Realisations1;
