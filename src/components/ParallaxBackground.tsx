import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxBackground: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -400]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -600]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 bg-[url('/images/starphoto-1520034475321-cbe63696469a.avif')] bg-cover opacity-30"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute inset-0 bg-[url('/images/starphoto-1520034475321-cbe63696469a.avif')] bg-cover opacity-5"
      />
      <motion.div 
        style={{ y: y3 }}
        className="absolute inset-0 bg-gradient-to-b from-transparent to-primary"
      />
    </div>
  );
}

export default ParallaxBackground;