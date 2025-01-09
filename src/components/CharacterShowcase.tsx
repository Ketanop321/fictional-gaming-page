import React from 'react';
import { motion } from 'framer-motion';

const characters = [
  {
    name: 'The Warrior',
    role: 'Melee Combat Specialist',
    image: 'https://images.unsplash.com/photo-1535970793482-07de93762dc4?auto=format&fit=crop&w=800',
    description: 'Master of close combat and tactical warfare.'
  },
  {
    name: 'The Mage',
    role: 'Elemental Spellcaster',
    image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=800',
    description: 'Wielder of ancient magical arts and forbidden knowledge.'
  },
  {
    name: 'The Rogue',
    role: 'Stealth Specialist',
    image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=800',
    description: 'Expert in stealth, subterfuge, and precision strikes.'
  }
];

const CharacterShowcase: React.FC = () => {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-16">Choose Your Hero</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {characters.map((character, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-1">{character.name}</h3>
                <p className="text-primary-400 mb-2">{character.role}</p>
                <p className="text-sm text-gray-300">{character.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CharacterShowcase;