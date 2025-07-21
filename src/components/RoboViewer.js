import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Model = () => {
  const gltf = useGLTF("/cute.glb");
  const modelRef = useRef();

  // Slow auto rotation
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.025; // Slow rotation left to right
    }
  });

  return (
    <primitive ref={modelRef} object={gltf.scene} scale={3} position={[0, 0, 0]} />
  );
};

const RoboViewer = () => {
  return (
    <div className="w-full h-[500px] mt-10 mb-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default RoboViewer;
