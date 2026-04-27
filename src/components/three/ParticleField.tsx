"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const geoRef = useRef<THREE.BufferGeometry>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const count = 1500;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useEffect(() => {
    if (!geoRef.current) return;
    geoRef.current.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
  }, [positions]);

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.y = clock.getElapsedTime() * 0.02;
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.01;

    mouseRef.current.x += (pointer.x * 0.5 - mouseRef.current.x) * 0.02;
    mouseRef.current.y += (pointer.y * 0.5 - mouseRef.current.y) * 0.02;

    meshRef.current.position.x = mouseRef.current.x;
    meshRef.current.position.y = mouseRef.current.y;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry ref={geoRef} />
      <pointsMaterial
        size={0.02}
        color="#c4a35a"
        transparent
        opacity={0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}
