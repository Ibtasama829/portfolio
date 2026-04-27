/* eslint-disable react-hooks/purity */
"use client";
import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Stars() {
  const ref = useRef<THREE.Points>(null);
  const geoRef = useRef<THREE.BufferGeometry>(null);
  const count = 2000;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useEffect(() => {
    if (!geoRef.current) return;
    geoRef.current.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  }, [positions]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.015;
    ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.01) * 0.1;
  });

  return (
    <points ref={ref}>
      <bufferGeometry ref={geoRef} />
      <pointsMaterial size={0.04} color="#c4a35a" transparent opacity={0.7} sizeAttenuation blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  );
}

function Planet() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.x = 0.15;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group>
      {/* Planet body */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.4, 64, 64]} />
        <meshStandardMaterial
          color="#1a1a2e"
          emissive="#c4a35a"
          emissiveIntensity={0.08}
          roughness={0.8}
          metalness={0.3}
        />
      </mesh>
      {/* Saturn-like ring */}
      <mesh ref={ringRef} rotation={[1.2, 0, 0]}>
        <ringGeometry args={[2.0, 2.8, 128]} />
        <meshStandardMaterial
          color="#c4a35a"
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
          emissive="#c4a35a"
          emissiveIntensity={0.1}
        />
      </mesh>
    </group>
  );
}

function OrbitingMoon() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * 0.4;
    ref.current.position.x = Math.cos(t) * 3.5;
    ref.current.position.z = Math.sin(t) * 3.5;
    ref.current.position.y = Math.sin(t * 0.5) * 0.5;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.15, 32, 32]} />
      <meshStandardMaterial color="#ddd" emissive="#c4a35a" emissiveIntensity={0.3} />
    </mesh>
  );
}

export default function AstronomyScene() {
  return (
    <div style={{ width: "100%", height: "100%", minHeight: "350px" }}>
      <Canvas camera={{ position: [0, 1.5, 6], fov: 50 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }} style={{ background: "transparent" }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#c4a35a" />
        <pointLight position={[-5, -3, 3]} intensity={0.3} color="#6666aa" />
        <Stars />
        <Planet />
        <OrbitingMoon />
      </Canvas>
    </div>
  );
}
