import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sword, Shield, Crown, Wand2 } from 'lucide-react';

interface Equipment {
  id: string;
  name: string;
  type: 'weapon' | 'armor' | 'accessory';
  icon: React.FC;
  stats: { [key: string]: number };
  preview: string;
}

const equipment: Equipment[] = [

  {
    id: 'staff1',
    name: 'Nezuko chan',
    type: 'weapon',
    icon: Wand2,
    stats: { magic: 35, wisdom: 25 },
    preview: 'images/3ab87679-cf96-48c7-a676-6ea413b9f3d4_0.jpeg'
  },
  {
    id: 'sword1',
    name: 'Zenitsu Agatsuma',
    type: 'weapon',
    icon: Sword,
    stats: { attack: 25, speed: 15 },
    preview: 'images/31a2239b-556b-4d6b-897e-a9c1dc2b6e4a_1.jpeg'
  },
  
  {
    id: 'shield1',
    name: 'Mitsuri kanoroji',
    type: 'armor',
    icon: Shield,
    stats: { defense: 30, health: 20 },
    preview: 'images/573b81fd-2805-4dc5-baef-946f9e5c7667_0.jpeg'
  },
  
  {
    id: 'crown1',
    name: 'Obanai Iguro',
    type: 'accessory',
    icon: Crown,
    stats: { magic: 20, wisdom: 15 },
    preview: 'images/e9f0f3d5-5003-412f-97a5-1f2bb6472c70_1.jpeg'
  },
  
  
];

const CharacterCustomization: React.FC = () => {
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);
  const [characterStats, setCharacterStats] = useState({
    attack: 10,
    defense: 10,
    magic: 10,
    speed: 10,
    health: 100,
    wisdom: 10
  });

  const handleEquipmentSelect = (item: Equipment) => {
    setSelectedEquipment(item);
    // Update character stats
    const newStats = { ...characterStats };
    Object.entries(item.stats).forEach(([stat, value]) => {
      newStats[stat as keyof typeof characterStats] = characterStats[stat as keyof typeof characterStats] + value;
    });
    setCharacterStats(newStats);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-primary to-primary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Character Customization</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Preview Section */}
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="aspect-square rounded-lg overflow-hidden mb-6">
              {selectedEquipment ? (
                <img 
                  src={selectedEquipment.preview} 
                  alt={selectedEquipment.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-white/10 flex items-center justify-center">
                  <p className="text-white/50">Select equipment to preview</p>
                </div>
              )}
            </div>
            
            {/* Stats Display */}
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(characterStats).map(([stat, value]) => (
                <div key={stat} className="bg-white/10 rounded p-3">
                  <div className="text-sm text-white/70 capitalize">{stat}</div>
                  <div className="text-xl font-bold">{value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Equipment Selection */}
          <div className="grid grid-cols-2 gap-4">
            {equipment.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleEquipmentSelect(item)}
                className={`p-4 rounded-lg transition-all ${
                  selectedEquipment?.id === item.id
                    ? 'bg-blue-500/20 border-blue-500'
                    : 'bg-white/5 hover:bg-white/10'
                } border border-transparent`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <item.icon className="w-8 h-8 mb-2 mx-auto" />
                <h3 className="font-semibold mb-1">{item.name}</h3>
                <div className="text-sm text-white/70">
                  {Object.entries(item.stats).map(([stat, value]) => (
                    <div key={stat}>
                      {stat}: +{value}
                    </div>
                  ))}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterCustomization;