import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Cursor from './components/Cursor';
import LoadingScreen from './components/LoadingScreen';
import Hero3D from './components/Hero3D';
import ParallaxBackground from './components/ParallaxBackground';
import GameMechanics from './components/GameMechanics';
import WorldMap from './components/WorldMap';
import CharacterShowcase from './components/CharacterShowcase';
import ParticleEffect from './components/ParticleEffect';
import GlowingRunes from './components/GlowingRunes';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Cursor />
      <ParticleEffect />
      <GlowingRunes />
      <AnimatePresence>
        {isLoading ? (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        ) : (
          <main className="min-h-screen bg-primary">
            <ParallaxBackground />
            <Hero3D />
            <section className="container mx-auto px-4 py-16">
              <h1 className="text-6xl font-bold mb-8">Epic Adventure Awaits</h1>
              <p className="text-xl mb-8">
                Embark on a journey through mysterious worlds and face legendary challenges.
              </p>
              <button className="bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all">
                Start Your Journey
              </button>
            </section>
            <GameMechanics />
            <WorldMap />
            <CharacterShowcase />
          </main>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;