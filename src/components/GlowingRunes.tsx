import React from 'react';
import { motion } from 'framer-motion';

const runes = [
  '᚛', '᚜', 'ᚐ', 'ᚑ', 'ᚒ', 'ᚓ', 'ᚔ', 'ᚕ', 'ᚖ', 'ᚗ'
];

const GlowingRunes: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {runes.map((rune, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl font-rune text-blue-400/50"
          initial={{ opacity: 0.5 }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
            filter: ['blur(2px)', 'blur(4px)', 'blur(2px)']
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            textShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
          }}
        >
          {rune}
        </motion.div>
      ))}
    </div>
  );
};

export default GlowingRunes;