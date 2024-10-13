import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

const SimpleEarth = () => {
  // Load the 3D model using the useGLTF hook
  const simple_earth = useGLTF("./alien_planet/scene.gltf"); // Update the path to your actual model file
  console.log(simple_earth); // Add this to debug
  return (
    <primitive object={simple_earth.scene} scale={2.2} />
  );
};

const SimpleEarthCanvas = () => {
  
    return (
    <Canvas 
      // shadows
      // frameloop='always'
      // dpr={[1, 2]}
      // gl={{ preserveDrawingBuffer: true }}
      // camera={{
      //   fov: 45,
      //   near: 0.1,
      //   far: 200,
      //   position: [-4, 3, 6],
      // }}
    >
      <ambientLight intensity={4} />
      <Suspense fallback={null}>
          <SimpleEarth />
      </Suspense>
      <OrbitControls
       enableZoom={false} autoRotate 
       />
  </Canvas>
    );
  };

export default SimpleEarthCanvas;
