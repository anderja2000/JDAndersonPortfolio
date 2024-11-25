import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const Particles = ({ count }) => {
  const mesh = useRef();
  const particles = useRef([]);
  const [positions, setPositions] = useState(() => new Float32Array(count * 3));

  useEffect(() => {
    for (let i = 0; i < count; i++) {
      particles.current.push({
        position: new THREE.Vector3(
          Math.random() * 10 - 5,
          Math.random() * 10 - 5,
          Math.random() * 10 - 5
        ),
        velocity: Math.random() * 0.02 + 0.01
      });
    }
  }, [count]);

  useFrame(() => {
    particles.current.forEach((particle, i) => {
      particle.position.y += particle.velocity;
      if (particle.position.y > 5) particle.position.y = -5;
      positions[i * 3] = particle.position.x;
      positions[i * 3 + 1] = particle.position.y;
      positions[i * 3 + 2] = particle.position.z;
    });
    setPositions([...positions]);
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          usage={THREE.DynamicDrawUsage}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#ffffff" />
    </points>
  );
};

const AnimatedText = () => {
  const textRef = useRef();

  useFrame(({ clock }) => {
    textRef.current.position.y = Math.sin(clock.elapsedTime) * 0.5;
  });

  return (
    <Text
      ref={textRef}
      fontSize={1}
      color="#ffffff"
      anchorX="center"
      anchorY="middle"
    >
      Your Name
    </Text>
  );
};

const InteractiveHeader = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Particles count={200} />
        <AnimatedText />
      </Canvas>
    </div>
  );
};

export default InteractiveHeader;