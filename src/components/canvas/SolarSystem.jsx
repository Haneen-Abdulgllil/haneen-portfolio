import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

const SolarSystem = () => {
  // Load the 3D model using the useGLTF hook
  const solar_system = useGLTF("./solar_system/scene.gltf"); // Update the path to your actual model file
  console.log(solar_system); // Add this to debug
  return (
    <primitive object={solar_system.scene} scale={1} />
  );
};

const SolarSystemCanvas = () => {
  
    return (
    <Canvas 
      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 100,
        position: [-4, 3, 6],
      }}
    >
      <ambientLight intensity={2} />
      <Suspense fallback={null}>
          <SolarSystem />
      </Suspense>
      <OrbitControls
       enableZoom={false} autoRotate 
       />
  </Canvas>
    );
  };

export default SolarSystemCanvas;
