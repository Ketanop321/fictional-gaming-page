import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Model = () => {
  const gltf = useGLTF('models/model.gltf', true); // Enable Draco compression
  console.log(gltf)
  return <primitive object={gltf.scene} scale={2} position={[0, 0, 0]} />;
};

const Hero3D: React.FC = () => {
  return (
    <div className="h-screen w-full">
      <Suspense fallback={<div className="h-full flex items-center justify-center">Loading 3D model...</div>}>
        <Canvas
          shadows
          dpr={[1, 2]} // Optimize for different screen densities
          performance={{ min: 0.5 }} // Lower bound for performance optimization
        >
          <PerspectiveCamera makeDefault position={[0, 2, 5]} />
          <OrbitControls 
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
          />
          
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={2}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          
          <Model />
          
          <mesh 
            rotation={[-Math.PI / 2, 0, 0]} 
            position={[0, -1, 0]} 
            receiveShadow
          >
            <planeGeometry args={[100, 100]} />
            <shadowMaterial transparent opacity={0.4} />
          </mesh>
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Hero3D;