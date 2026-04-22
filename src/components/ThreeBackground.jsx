// src/components/ThreeBackground.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";

// Rotating object component
function RotatingMesh({ children, position }) {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.002;
      ref.current.rotation.y += 0.003;
    }
  });

  return <mesh ref={ref} position={position}>{children}</mesh>;
}

function Scene() {
  return (
    <>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 3]} intensity={1} />

      {/* Floating IT Objects */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <RotatingMesh position={[-2, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#3b82f6" wireframe />
        </RotatingMesh>
      </Float>

      <Float speed={3}>
        <RotatingMesh position={[2, 1, -1]}>
          <sphereGeometry args={[0.9, 32, 32]} />
          <meshStandardMaterial color="#8b5cf6" wireframe />
        </RotatingMesh>
      </Float>

      <Float speed={2}>
        <RotatingMesh position={[0, -1.5, 0]}>
          <torusGeometry args={[1.2, 0.3, 16, 100]} />
          <meshStandardMaterial color="#06b6d4" wireframe />
        </RotatingMesh>
      </Float>

      {/* PARTICLES (this is the magic ✨) */}
      <Points
        positions={random.inSphere(new Float32Array(6000), { radius: 6 })}
        stride={3}
      >
        <PointMaterial
          transparent
          size={0.02}
          color="#60a5fa"
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </>
  );
}

export default function ThreeBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    >
      <Scene />
    </Canvas>
  );
}