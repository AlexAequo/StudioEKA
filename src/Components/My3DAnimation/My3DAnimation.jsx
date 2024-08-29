// My3DAnimation.jsx
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Vector3 } from 'three';

// Composant pour une capsule médicamenteuse animée
const FallingCapsule = ({ position, onRest }) => {
  const meshRef = useRef();
  const [velocity, setVelocity] = useState(new Vector3(0, 0, 0));
  const [hasLanded, setHasLanded] = useState(false);

  useFrame(() => {
    if (meshRef.current && !hasLanded) {
      // Simuler la gravité
      const delta = 0.05;
      const newVelocity = velocity.clone().add(new Vector3(0, -delta, 0));
      meshRef.current.position.add(newVelocity);

      // Vérifier si la capsule a touché le sol
      if (meshRef.current.position.y <= 0.75) {
        meshRef.current.position.y = 0.75;
        setHasLanded(true);
        setVelocity(new Vector3(0, 0, 0));
        if (onRest) onRest(); // Appeler la fonction onRest lorsque la capsule se repose
      } else {
        setVelocity(newVelocity);
      }
    }
  });

  return (
    <motion.group
      ref={meshRef}
      position={position}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
    >
      {/* Corps de la capsule (cylindre horizontal) */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderBufferGeometry args={[0.5, 0.5, 1.5, 32]} />
        <meshStandardMaterial color='royalblue' />
      </mesh>
      
      {/* Extrémités de la capsule (sphères aux extrémités du cylindre horizontal) */}
      <mesh position={[0, 0, 0.75]}>
        <sphereBufferGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color='royalblue' />
      </mesh>
      <mesh position={[0, 0, -0.75]}>
        <sphereBufferGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color='royalblue' />
      </mesh>
    </motion.group>
  );
};

// Composant principal
const My3DAnimation = () => {
  const [capsules, setCapsules] = useState([]);

  // Fonction pour ajouter une nouvelle capsule à la scène
  const addCapsule = () => {
    const x = Math.random() * 10 - 5;
    const z = Math.random() * 10 - 5;
    setCapsules((prevCapsules) => [
      ...prevCapsules,
      { key: Date.now(), position: [x, 10, z] },
    ]);
  };

  // Ajouter une capsule toutes les secondes
  useEffect(() => {
    const interval = setInterval(() => {
      addCapsule();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas
        camera={{ position: [0, 0, 15], fov: 50 }}
        style={{ background: '#222' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        {capsules.map((capsule) => (
          <FallingCapsule
            key={capsule.key}
            position={capsule.position}
            onRest={() => console.log('Capsule has landed!')}
          />
        ))}
        <mesh position={[0, -0.5, 0]} receiveShadow>
          <boxBufferGeometry args={[10, 1, 10]} />
          <meshStandardMaterial color='grey' />
        </mesh>
      </Canvas>
    </div>
  );
};

export default My3DAnimation;

