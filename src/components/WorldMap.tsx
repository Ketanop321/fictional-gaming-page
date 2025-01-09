import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';

const regions = [
  { position: [-2, 0, 0], name: 'Mystic Forest', lore: 'Ancient woods filled with magical creatures and hidden secrets.' },
  { position: [2, 0, 0], name: 'Crystal Mountains', lore: 'Towering peaks where powerful artifacts lie dormant.' },
  { position: [0, 2, 0], name: 'Shadow Lands', lore: 'A realm of eternal twilight and mysterious powers.' },
  { position: [0, -2, 0], name: 'Golden Plains', lore: 'Vast grasslands where legendary heroes first emerged.' },
];

const Region = ({ position, name, lore, onSelect }: any) => {
  return (
    <mesh position={position} onClick={() => onSelect({ name, lore })}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#4a9eff" />
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </mesh>
  );
};

const WorldMap: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<{ name: string; lore: string } | null>(null);

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-16">World Map</h2>
      <div className="relative h-[600px]">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls enableZoom={false} />
          {regions.map((region, index) => (
            <Region key={index} {...region} onSelect={setSelectedRegion} />
          ))}
        </Canvas>
        <AnimatePresence>
          {selectedRegion && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md p-6 rounded-lg max-w-md"
            >
              <h3 className="text-2xl font-bold mb-2">{selectedRegion.name}</h3>
              <p className="text-gray-300">{selectedRegion.lore}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WorldMap;