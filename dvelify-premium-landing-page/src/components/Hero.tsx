import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

function Scene() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      
      // Interactive mouse follow
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, (state.pointer.x * viewport.width) / 10, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, (state.pointer.y * viewport.height) / 10, 0.05);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={viewport.width > 5 ? 1.8 : 1.2}>
        <icosahedronGeometry args={[1, 3]} />
        <MeshDistortMaterial
          color="#00FF66"
          emissive="#004411"
          envMapIntensity={2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.9}
          roughness={0.1}
          distort={0.4}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-brand-black">
      {/* Background Glow */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-brand-green/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full pb-20 lg:pb-0">
        {/* Text Content */}
        <div className="space-y-8 z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-green text-sm font-medium tracking-wide backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
            </span>
            Accelerate Your Operations
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tighter text-white leading-[1.05]">
            Next-Generation Solutions for <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-300">
              Modern Enterprises.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed font-light">
            Custom AI agents, powerful Startup Box, and elite brand development engineered to scale your operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <a href="#services" className="px-8 py-4 rounded-full bg-brand-green text-black font-semibold text-center hover:bg-[#00e65c] transition-all shadow-[0_0_20px_rgba(0,255,102,0.3)] hover:shadow-[0_0_35px_rgba(0,255,102,0.5)]">
              Explore Services
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-medium text-center hover:bg-white/5 transition-all backdrop-blur-sm">
              Contact Us
            </a>
          </div>
        </div>

        {/* 3D Canvas */}
        <div className="absolute inset-0 lg:relative lg:inset-auto h-full min-h-[500px] w-full lg:w-auto pointer-events-none lg:pointer-events-auto opacity-40 lg:opacity-100 mix-blend-screen lg:mix-blend-normal z-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
            <directionalLight position={[-10, -10, -5]} intensity={1} color="#00FF66" />
            <Scene />
            <Environment preset="city" />
          </Canvas>
        </div>
      </div>
    </section>
  );
}