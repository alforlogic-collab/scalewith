"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { fibonacciSphere, isMobileViewport, prefersReducedMotion } from "@/lib/utils";

function CoreField({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const points = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const { size } = useThree();
  const mobile = size.width < 768;

  const count = mobile ? 800 : reduced ? 700 : 1800;
  const innerCount = mobile ? 140 : 360;

  const positions = useMemo(() => fibonacciSphere(count, 1.55), [count]);
  const innerPos = useMemo(() => fibonacciSphere(innerCount, 0.62), [innerCount]);
  const base = useMemo(() => new Float32Array(positions), [positions]);

  const lineGeo = useMemo(() => {
    const maxLinks = mobile ? 70 : 140;
    const verts: number[] = [];
    const step = Math.max(1, Math.floor(count / maxLinks));
    for (let i = 0; i < count && verts.length / 6 < maxLinks; i += step) {
      const ax = positions[i * 3];
      const ay = positions[i * 3 + 1];
      const az = positions[i * 3 + 2];
      let best = -1;
      let bestD = 0.52;
      for (let j = i + 1; j < Math.min(i + 36, count); j++) {
        const dx = ax - positions[j * 3];
        const dy = ay - positions[j * 3 + 1];
        const dz = az - positions[j * 3 + 2];
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d < bestD) {
          bestD = d;
          best = j;
        }
      }
      if (best > -1) {
        verts.push(
          ax,
          ay,
          az,
          positions[best * 3],
          positions[best * 3 + 1],
          positions[best * 3 + 2]
        );
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
    return g;
  }, [positions, count, mobile]);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useEffect(() => {
    return () => {
      lineGeo.dispose();
    };
  }, [lineGeo]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const g = group.current;
    if (!g) return;
    const targetY = t * 0.08 + mouse.current.x * 0.32;
    const targetX = mouse.current.y * 0.18;
    g.rotation.y += (targetY - g.rotation.y) * 0.045;
    g.rotation.x += (targetX - g.rotation.x) * 0.045;
    g.position.y = Math.sin(t * 0.4) * 0.05;

    if (points.current && !reduced && !mobile) {
      const arr = points.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const breathe = 1 + Math.sin(t * 0.65 + i * 0.03) * 0.012;
        arr[i3] = base[i3] * breathe;
        arr[i3 + 1] = base[i3 + 1] * breathe;
        arr[i3 + 2] = base[i3 + 2] * breathe;
      }
      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group ref={group}>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={mobile ? 0.02 : 0.015}
          color="#c9d0ff"
          transparent
          opacity={0.72}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[innerPos, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#8b9bff"
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial color="#7b8cff" transparent opacity={0.18} />
      </lineSegments>
      <mesh>
        <icosahedronGeometry args={[0.38, 1]} />
        <meshBasicMaterial color="#9aa6ff" wireframe transparent opacity={0.22} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.22, 24, 24]} />
        <meshBasicMaterial color="#dfe4ff" transparent opacity={0.16} />
      </mesh>
    </group>
  );
}

function Scene({ reduced }: { reduced: boolean }) {
  return (
    <>
      <fog attach="fog" args={["#050505", 4.2, 9]} />
      <ambientLight intensity={0.35} />
      <pointLight position={[2, 1.4, 2]} intensity={1.1} color="#8b9bff" />
      <pointLight position={[-2, -1, -1]} intensity={0.4} color="#a78bfa" />
      <CoreField reduced={reduced} />
    </>
  );
}

function detectWebGL() {
  if (typeof window === "undefined") return true;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

export default function Hero3D() {
  const [ok] = useState(detectWebGL);
  const [reduced] = useState(prefersReducedMotion);
  const [dpr] = useState<[number, number]>(() =>
    isMobileViewport() ? [1, 1.2] : [1, 1.75]
  );

  if (!ok) {
    return (
      <div className="absolute inset-0" aria-hidden="true">
        <SystemCoreFallback />
      </div>
    );
  }

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Suspense fallback={<SystemCoreFallback />}>
        <Canvas
          dpr={dpr}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          camera={{ position: [0, 0, 4.2], fov: 42 }}
          frameloop={reduced ? "demand" : "always"}
          onCreated={({ gl }) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.toneMappingExposure = 1.05;
            gl.setClearColor(0x050505, 0);
          }}
        >
          <Scene reduced={reduced} />
        </Canvas>
      </Suspense>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050505]/25 via-transparent to-[#050505]" />
    </div>
  );
}

export function SystemCoreFallback() {
  return (
    <div className="absolute inset-0 grid-fade">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(123,140,255,0.14),transparent_55%)]" />
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7b8cff]/25" />
      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" />
    </div>
  );
}
