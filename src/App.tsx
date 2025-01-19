import React, { useState, Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Cursor from './components/Cursor';
import ParticleEffect from './components/ParticleEffect';
import GlowingRunes from './components/GlowingRunes';

// Lazy load components to improve initial load time
const Hero3D = lazy(() => import('./components/Hero3D'));
const ParallaxBackground = lazy(() => import('./components/ParallaxBackground'));
const GameMechanics = lazy(() => import('./components/GameMechanics'));
const WorldMap = lazy(() => import('./components/WorldMap'));
const CharacterShowcase = lazy(() => import('./components/CharacterShowcase'));
const CharacterCustomization = lazy(() => import('./components/CharacterCustomization'));
const PreRegistration = lazy(() => import('./components/PreRegistration'));

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
          <Suspense fallback={<div className="min-h-screen bg-primary flex items-center justify-center">Loading...</div>}>
            <main className="min-h-screen bg-primary">
              <ParallaxBackground />
              <Hero3D />
              <section className="container mx-auto px-4 py-16">
                <h1 className="text-6xl font-bold mb-8">Epic Adventure Awaits</h1>
                <p className="text-xl mb-8">
                  Embark on a journey through mysterious worlds and face legendary challenges.
                </p>
                <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-10 transition-all">
                  Start Your Journey
                </button>
              </section>
              <GameMechanics />
              <WorldMap />
              <CharacterShowcase />
              <CharacterCustomization />
              <PreRegistration />
            </main>
          </Suspense>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;