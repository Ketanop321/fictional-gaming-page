import React from 'react';
import { motion } from 'framer-motion';
import { Sword, Shield, Wand2, Scroll } from 'lucide-react';

const mechanics = [
  {
    icon: Sword,
    title: 'Combat System',
    description: 'Master fluid combat mechanics with unique weapon combinations'
  },
  {
    icon: Shield,
    title: 'Defense Tactics',
    description: 'Develop strategic defensive maneuvers and counter-attacks'
  },
  {
    icon: Wand2,
    title: 'Magic Spells',
    description: 'Harness powerful elemental magic and cast devastating spells'
  },
  {
    icon: Scroll,
    title: 'Skill Tree',
    description: 'Customize your character with an extensive skill progression system'
  }
];

const GameMechanics: React.FC = () => {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-16">Game Mechanics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {mechanics.map((mechanic, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-sm p-6 rounded-lg text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
              <mechanic.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{mechanic.title}</h3>
            <p className="text-gray-400">{mechanic.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GameMechanics;