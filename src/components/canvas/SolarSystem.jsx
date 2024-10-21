import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { useState, useEffect } from "react";

const SolarSystem = () => {
  // Load the 3D model using the useGLTF hook
  const solar_system = useGLTF("./solar_system/scene.gltf"); // Update the path to your actual model file

  const [scale, setScale] = useState(1); // Default scale is 1 (for larger screens)

  useEffect(() => {
    const updateScale = () => {
      if (window.innerWidth <= 768) {
        // If the screen width is 768px or less (mobile), set scale to 0.5
        setScale(0.5);
      } else {
        // For larger screens, set scale to 1
        setScale(1);
      }
    };

    // Check the screen size on initial load
    updateScale();

    // Add a resize event listener to update the scale when the window size changes
    window.addEventListener("resize", updateScale);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  return (
      <primitive object={solar_system.scene} scale={scale} />
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
