'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// -----------------------------------------------------------------------------
// CURVED 3D ARCHITECTURAL SPLINE WITH NATURAL KINETIC BENDS
// -----------------------------------------------------------------------------
const TUNNEL_POINTS = [
  new THREE.Vector3(0, 0, 28),
  new THREE.Vector3(3.2, 1.2, -18),
  new THREE.Vector3(-4.0, -1.4, -62),
  new THREE.Vector3(4.2, 1.6, -112),
  new THREE.Vector3(-3.0, -0.9, -165),
  new THREE.Vector3(0, 0, -220),
];

// -----------------------------------------------------------------------------
// 1. KINETIC PARTICULATE STARDUST (1,600 Precision Depth Particles)
// -----------------------------------------------------------------------------
function KineticStarfield({ curve, count = 1600 }: { curve: THREE.CatmullRomCurve3; count?: number }) {
  const pointsRef = useRef<any>(null);

  const [positions, colors, scales] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const sca = new Float32Array(count);

    const cSlate = new THREE.Color('#475569');
    const cGrey = new THREE.Color('#94A3B8');
    const cSilver = new THREE.Color('#CBD5E1');

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const t = Math.random();
      const pointOnCurve = curve.getPointAt(t);

      const angle = Math.random() * Math.PI * 2;
      const radius = 0.8 + Math.random() * 5.8;

      pos[i3] = pointOnCurve.x + Math.cos(angle) * radius;
      pos[i3 + 1] = pointOnCurve.y + Math.sin(angle) * radius;
      pos[i3 + 2] = pointOnCurve.z + (Math.random() - 0.5) * 6;

      const rand = Math.random();
      const c = rand < 0.35 ? cSlate : rand < 0.75 ? cGrey : cSilver;
      col[i3] = c.r;
      col[i3 + 1] = c.g;
      col[i3 + 2] = c.b;

      sca[i] = 0.5 + Math.random() * 1.5;
    }

    return [pos, col, sca];
  }, [curve, count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.z = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.034}
        vertexColors
        transparent
        opacity={0.42}
        sizeAttenuation
      />
    </points>
  );
}

// -----------------------------------------------------------------------------
// 2. AAA DUAL-RING DIMENSIONAL PORTALS ALONG THE BENDS
// -----------------------------------------------------------------------------
function DualRingPortals({ curve, numPortals = 22 }: { curve: THREE.CatmullRomCurve3; numPortals?: number }) {
  const outerGroupRef = useRef<any>(null);
  const innerGroupRef = useRef<any>(null);

  const portals = useMemo(() => {
    const list = [];
    for (let i = 0; i < numPortals; i++) {
      const t = i / (numPortals - 1);
      const position = curve.getPointAt(t);
      const tangent = curve.getTangentAt(t);

      // Orientation matrix from tangent vector
      const up = new THREE.Vector3(0, 1, 0);
      const matrix = new THREE.Matrix4();
      const zAxis = tangent.clone().normalize();
      const xAxis = new THREE.Vector3().crossVectors(up, zAxis).normalize();
      const yAxis = new THREE.Vector3().crossVectors(zAxis, xAxis).normalize();
      matrix.makeBasis(xAxis, yAxis, zAxis);
      const rotation = new THREE.Euler().setFromRotationMatrix(matrix);

      list.push({
        id: i,
        position,
        rotation,
        scale: 1 - t * 0.12, // Slight organic perspective taper
        outerColor: i % 2 === 0 ? '#475569' : '#64748B',
        innerColor: i % 3 === 0 ? '#0F172A' : '#94A3B8',
        speed: (i % 2 === 0 ? 1 : -1) * 0.0012,
      });
    }
    return list;
  }, [curve, numPortals]);

  useFrame(() => {
    if (outerGroupRef.current && outerGroupRef.current.children) {
      outerGroupRef.current.children.forEach((child: any, i: number) => {
        child.rotation.z += portals[i]?.speed || 0.001;
      });
    }
    if (innerGroupRef.current && innerGroupRef.current.children) {
      innerGroupRef.current.children.forEach((child: any, i: number) => {
        child.rotation.z -= (portals[i]?.speed || 0.001) * 1.5;
      });
    }
  });

  return (
    <>
      {/* Outer Sleek Structural Portal Ring */}
      <group ref={outerGroupRef}>
        {portals.map((p) => (
          <group
            key={`outer-${p.id}`}
            position={[p.position.x, p.position.y, p.position.z]}
            rotation={[p.rotation.x, p.rotation.y, p.rotation.z]}
            scale={p.scale}
          >
            {/* Main Outer Torus Frame (Smooth Pure Circle) */}
            <mesh>
              <torusGeometry args={[4.4, 0.022, 16, 80]} />
              <meshBasicMaterial color={p.outerColor} transparent opacity={0.34} />
            </mesh>
          </group>
        ))}
      </group>

      {/* Inner Concentric Floating Ring (Smooth Pure Circle) */}
      <group ref={innerGroupRef}>
        {portals.map((p) => (
          <group
            key={`inner-${p.id}`}
            position={[p.position.x, p.position.y, p.position.z]}
            rotation={[p.rotation.x, p.rotation.y, p.rotation.z]}
            scale={p.scale}
          >
            <mesh>
              <torusGeometry args={[3.8, 0.012, 14, 72]} />
              <meshBasicMaterial color={p.innerColor} transparent opacity={0.25} />
            </mesh>
          </group>
        ))}
      </group>
    </>
  );
}

// -----------------------------------------------------------------------------
// 3. ARCHITECTURAL DUAL HELIX TUBE CORRIDOR (Pure Smooth Circular Cylinders)
// -----------------------------------------------------------------------------
function ArchitecturalCorridor({ curve }: { curve: THREE.CatmullRomCurve3 }) {
  return (
    <group>
      {/* Primary Structural Tube Wireframe - Smooth Round Cylinder */}
      <mesh>
        <tubeGeometry args={[curve, 200, 4.45, 36, false]} />
        <meshBasicMaterial
          color="#94A3B8"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Secondary Outer Concentric Tube Cage - Smooth Round Cylinder */}
      <mesh>
        <tubeGeometry args={[curve, 160, 4.75, 32, false]} />
        <meshBasicMaterial
          color="#CBD5E1"
          wireframe
          transparent
          opacity={0.07}
        />
      </mesh>
    </group>
  );
}

// -----------------------------------------------------------------------------
// 4. CINEMATIC INERTIAL CAMERA CONTROLLER (Smooth Banking & Dolly Along Bends)
// -----------------------------------------------------------------------------
function CinematicCameraController({ curve }: { curve: THREE.CatmullRomCurve3 }) {
  const { camera, size } = useThree();
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const scrollRef = useRef({ progress: 0, currentProgress: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        scrollRef.current.progress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = ((e.clientX / window.innerWidth) - 0.5) * 1.0;
      mouseRef.current.targetY = -((e.clientY / window.innerHeight) - 0.5) * 0.8;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame(() => {
    // Responsive portrait FOV adjustment for mobile phones
    if (size.width < size.height) {
      if ('fov' in camera && (camera as any).fov !== 62) {
        (camera as any).fov = 62;
        (camera as any).updateProjectionMatrix();
      }
    } else {
      if ('fov' in camera && (camera as any).fov !== 50) {
        (camera as any).fov = 50;
        (camera as any).updateProjectionMatrix();
      }
    }

    // Ultra-smooth exponential scroll interpolation (smooth dampening)
    scrollRef.current.currentProgress +=
      (scrollRef.current.progress - scrollRef.current.currentProgress) * 0.055;

    // Position along the curved trajectory
    const t = scrollRef.current.currentProgress * 0.88;
    const curvePos = curve.getPointAt(t);

    // Look-ahead vector along the curved corridor
    const lookAheadT = Math.min(t + 0.075, 1);
    const lookTarget = curve.getPointAt(lookAheadT);

    // Smooth inertial mouse parallax
    mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.045;
    mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.045;

    // Dolly camera with subtle banking roll as it steers into curves
    camera.position.x += (curvePos.x + mouseRef.current.x * 0.6 - camera.position.x) * 0.055;
    camera.position.y += (curvePos.y + mouseRef.current.y * 0.45 - camera.position.y) * 0.055;
    camera.position.z += (curvePos.z - camera.position.z) * 0.055;

    camera.lookAt(
      lookTarget.x + mouseRef.current.x * 0.25,
      lookTarget.y + mouseRef.current.y * 0.18,
      lookTarget.z
    );

    // Natural banking roll into curve turns based on curve tangent
    const tangent = curve.getTangentAt(t);
    const targetRoll = -tangent.x * 0.06;
    camera.rotation.z += (targetRoll - camera.rotation.z) * 0.05;
  });

  return null;
}

// -----------------------------------------------------------------------------
// MAIN COMPONENT WRAPPER
// -----------------------------------------------------------------------------
export default function CameraTunnel3D() {
  const curve = useMemo(() => new THREE.CatmullRomCurve3(TUNNEL_POINTS), []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-white">
      <Canvas
        camera={{ position: [0, 0, 28], fov: 50, near: 0.1, far: 320 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.75]}
      >
        {/* Soft Pristine White Exponential Fog */}
        <fogExp2 attach="fog" args={['#FFFFFF', 0.015]} />

        {/* Studio Lighting Rig */}
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 20, 15]} intensity={0.5} />
        <directionalLight position={[-10, -10, -20]} intensity={0.3} color="#94A3B8" />

        <KineticStarfield curve={curve} count={1600} />
        <DualRingPortals curve={curve} numPortals={22} />
        <ArchitecturalCorridor curve={curve} />
        <CinematicCameraController curve={curve} />
      </Canvas>
    </div>
  );
}
