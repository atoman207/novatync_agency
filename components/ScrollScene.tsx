"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

/**
 * Scroll-driven 3D scene.
 * Reads normalized page-scroll progress and uses it to dolly the camera,
 * rotate/scale a wireframe torus-knot, spin an outer icosahedron shell,
 * and drift a green particle field — creating a "fly-through" effect.
 */
function Scene() {
  const scroll = useRef(0);
  const smooth = useRef(0);

  const knot = useRef<THREE.Mesh>(null);
  const shell = useRef<THREE.Mesh>(null);
  const stars = useRef<THREE.Points>(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scroll.current = max > 0 ? clamp01(window.scrollY / max) : 0;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Green particle field
  const starGeometry = useMemo(() => {
    const COUNT = 1100;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);

    const emerald = new THREE.Color("#34d17f");
    const lime = new THREE.Color("#a3e635");
    const mint = new THREE.Color("#d1fadf");

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 46;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 46;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;

      const pick = Math.random();
      const col = pick < 0.6 ? emerald : pick < 0.88 ? lime : mint;
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, []);

  useFrame((state, delta) => {
    // Smoothly approach the target scroll value (frame-rate independent).
    smooth.current += (scroll.current - smooth.current) * Math.min(1, delta * 3.2);
    const p = smooth.current;
    const t = state.clock.getElapsedTime();

    if (knot.current) {
      knot.current.rotation.x = t * 0.12 + p * Math.PI * 2.2;
      knot.current.rotation.y = t * 0.16 + p * Math.PI * 3;
      const s = 0.9 + p * 1.7;
      knot.current.scale.setScalar(s);
    }

    if (shell.current) {
      shell.current.rotation.y = -t * 0.06 - p * Math.PI * 1.6;
      shell.current.rotation.z = p * Math.PI;
      const s = 1 + p * 0.6;
      shell.current.scale.setScalar(s);
    }

    if (stars.current) {
      stars.current.rotation.y = t * 0.02;
      stars.current.position.z = p * 14;
    }

    // Camera dolly + slight rise as the user scrolls down.
    state.camera.position.z = 9 - p * 5.5;
    state.camera.position.y = p * 1.6;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group>
      <points ref={stars} geometry={starGeometry}>
        <pointsMaterial
          size={0.06}
          vertexColors
          transparent
          opacity={0.7}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      <mesh ref={knot}>
        <torusKnotGeometry args={[1.55, 0.48, 190, 32]} />
        <meshBasicMaterial color="#34d17f" wireframe transparent opacity={0.5} depthWrite={false} />
      </mesh>

      <mesh ref={shell}>
        <icosahedronGeometry args={[3.4, 1]} />
        <meshBasicMaterial color="#84cc16" wireframe transparent opacity={0.2} depthWrite={false} />
      </mesh>
    </group>
  );
}

export default function ScrollScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 60 }}
      gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      dpr={[0.7, 1.3]}
      style={{ background: "transparent" }}
    >
      <Scene />
    </Canvas>
  );
}
