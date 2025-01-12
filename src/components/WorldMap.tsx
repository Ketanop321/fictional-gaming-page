import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';

const regions = [
  {
    name: 'Mystic Forest',
    description: 'Ancient woods filled with magical creatures and hidden secrets.',
    position: { top: '30%', left: '20%' },
    color: '#2d5a27'
  },
  {
    name: 'Crystal Mountains',
    description: 'Towering peaks where powerful artifacts lie dormant.',
    position: { top: '25%', left: '60%' },
    color: '#4a9eff'
  },
  {
    name: 'Shadow Lands',
    description: 'A realm of eternal twilight and mysterious powers.',
    position: { top: '60%', left: '70%' },
    color: '#453545'
  },
  {
    name: 'Golden Plains',
    description: 'Vast grasslands where legendary heroes first emerged.',
    position: { top: '70%', left: '30%' },
    color: '#c4a777'
  }
];

const WorldMap: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<typeof regions[0] | null>(null);

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-16">World Map</h2>
      <div className="relative w-full max-w-4xl mx-auto h-[600px] rounded-lg overflow-hidden">
        {/* Map Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&q=80&w=2000")',
            filter: 'sepia(50%) brightness(50%)'
          }}
        />
        
        {/* Map Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/70" />
        
        {/* Region Markers */}
        {regions.map((region, index) => (
          <motion.button
            key={index}
            className="absolute"
            style={{ top: region.position.top, left: region.position.left }}
            onClick={() => setSelectedRegion(region)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <MapPin 
              size={32} 
              className="cursor-pointer" 
              style={{ color: region.color }}
            />
          </motion.button>
        ))}
        
        {/* Region Info */}
        <AnimatePresence>
          {selectedRegion && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md p-6 rounded-lg max-w-md"
            >
              <h3 className="text-2xl font-bold mb-2" style={{ color: selectedRegion.color }}>
                {selectedRegion.name}
              </h3>
              <p className="text-gray-300">{selectedRegion.description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WorldMap;