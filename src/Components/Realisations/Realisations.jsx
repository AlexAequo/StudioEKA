import React from 'react';
import { motion } from 'framer-motion';
import './Realisations.css';

const images = [
  'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/2162733/pexels-photo-2162733.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/259681/pexels-photo-259681.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/259586/pexels-photo-259586.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/326975/pexels-photo-326975.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/356963/pexels-photo-356963.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg?auto=compress&cs=tinysrgb&w=400',
];

const Realisations = () => {
  return (
    <div className="realisations-container">
      {images.map((src, index) => (
        <motion.div
          key={index}
          className={`realisations-image image-${index + 1}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <img src={src} alt={`Projet ${index + 1}`} />
        </motion.div>
      ))}
    </div>
  );
};

export default Realisations;
