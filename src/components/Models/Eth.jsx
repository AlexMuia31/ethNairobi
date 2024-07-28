import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Eth = (props) => {
  const { nodes, materials } = useGLTF("/models/ethereum.glb");
  const groupRef = useRef();

  // Rotate the model
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Adjust the rotation speed as needed
    }
  });

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <OrbitControls />
      <ambientLight intensity={0.3} />
      <directionalLight color="gold" position={[0, 0, 5]} />
      <group
        position={[0.014, 1.483, 0.086]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.976, 0.96, 0.986]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.Gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.Gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.Gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.Gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.Gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.Gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.Black_metalic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials["Gold.texture"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials.Gold}
        position={[-0.008, 1.76, -0.071]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.428}
      />
    </group>
  );
};

export default Eth;

useGLTF.preload("/models/ethereum.glb");
