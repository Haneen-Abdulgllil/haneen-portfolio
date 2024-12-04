import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";

function SkillIcon({ icon, name }) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      ref={mesh}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={hovered ? [1.2, 1.2, 1.2] : [1, 1, 1]}
    >
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshStandardMaterial attach="material" map={icon} />
    </mesh>
  );
}

function SkillsSection() {
  return (
    <Canvas>
      {technologies.map((tech) => (
        <SkillIcon key={tech.name} icon={tech.icon} name={tech.name} />
      ))}
    </Canvas>
  );
}

export default SkillsSection;
