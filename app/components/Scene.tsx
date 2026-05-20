'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

// Icosahedron wireframe with glow
function IcosahedronMesh({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const outerRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.15 + mouse.current[1] * 0.3;
      meshRef.current.rotation.y = t * 0.22 + mouse.current[0] * 0.3;
    }
    if (outerRef.current) {
      outerRef.current.rotation.x = t * 0.12 + mouse.current[1] * 0.2;
      outerRef.current.rotation.y = t * 0.18 + mouse.current[0] * 0.2;
    }
  });

  return (
    <group position={[1.2, 0, 0]}>
      {/* Core wireframe */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshBasicMaterial
          color="#00f5ff"
          wireframe
          transparent
          opacity={0.75}
        />
      </mesh>

      {/* Outer glow sphere */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshBasicMaterial
          color="#00c8d4"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Inner solid */}
      <mesh>
        <icosahedronGeometry args={[1.3, 1]} />
        <meshStandardMaterial
          color="#050508"
          emissive="#00f5ff"
          emissiveIntensity={0.07}
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
}

// Floating particle ring
function ParticleRing() {
  const points = useMemo(() => {
    const pts = [];
    const count = 200;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const r = 3.4 + Math.random() * 0.4;
      pts.push(
        new THREE.Vector3(
          Math.cos(angle) * r,
          (Math.random() - 0.5) * 0.8,
          Math.sin(angle) * r
        )
      );
    }
    return pts;
  }, []);

  const ref = useRef<THREE.Points>(null!);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.08;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flatMap((p) => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#00f5ff" size={0.04} transparent opacity={0.6} />
    </points>
  );
}

// Mouse tracking wrapper
function SceneContent({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[4, 4, 4]} intensity={2} color="#00f5ff" />
      <pointLight position={[-4, -2, -4]} intensity={1} color="#0066ff" />
      <Stars
        radius={30}
        depth={40}
        count={2000}
        factor={2}
        saturation={0}
        fade
        speed={0.5}
      />
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        <IcosahedronMesh mouse={mouse} />
      </Float>
      <ParticleRing />
    </>
  );
}

export default function Scene() {
  const mouse = useRef<[number, number]>([0, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouse.current = [
      ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      -((e.clientY - rect.top) / rect.height - 0.5) * 2,
    ];
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Cyan glow halo behind canvas */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '480px',
          height: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,245,255,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 58 }}
        gl={{ antialias: true, alpha: true }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'transparent',
        }}
      >
        <SceneContent mouse={mouse} />
      </Canvas>
    </div>
  );
}
