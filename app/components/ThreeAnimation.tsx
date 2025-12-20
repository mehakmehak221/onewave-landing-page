"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Float, Text, useTexture, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const RotatingLogo = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture("/onewavelogo.png");

  useFrame((state) => {
    if (meshRef.current) {
  
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
      <mesh ref={meshRef}>
        <circleGeometry args={[2.5, 64]} />
        <meshStandardMaterial 
          map={texture} 
          side={THREE.DoubleSide}
         
          emissiveIntensity={0.1}
          toneMapped={false}
        />
      </mesh>
    </Float>
  );
};

const ComingSoonText = () => {
  return (
    <group position={[0, -3.2, 0]}>
      <Text
        fontSize={0.8}
        color="black"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
        characters="COMING SOON"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.1}
        outlineWidth={0.02}
        outlineColor="#3073E7"
      >
        COMING SOON
        <meshStandardMaterial 
          color="black"
          emissive="#3073E7"
          emissiveIntensity={0.5}
        />
      </Text>
    </group>
  );
};

const ParticleRing = () => {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      ref.current.rotation.z = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref} rotation={[Math.PI / 3, 0, 0]}>
       <Sparkles count={100} scale={8} size={4} speed={0.4} opacity={0.5} color="#3073E7" />
    </group>
  );
}

export default function ThreeAnimation() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <pointLight position={[-10, -5, -5]} intensity={1} color="#3073E7" />
        
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        <group position={[0, 0.5, 0]}>
          <RotatingLogo />
          <ParticleRing />
        </group>
        
        <ComingSoonText />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          minPolarAngle={Math.PI / 3} 
          maxPolarAngle={Math.PI / 1.5} 
        />
      </Canvas>
    </div>
  );
}
