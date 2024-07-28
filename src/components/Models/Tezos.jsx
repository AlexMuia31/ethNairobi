import React, { useRef } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";

const Tezos = (props) => {
  const { nodes, materials } = useGLTF("/models/gold_tezos_coin.glb");
  return (
    <group {...props} dispose={null}>
      <OrbitControls />
      <ambientLight intensity={0.3} />
      <directionalLight color="red" position={[0, 0, 5]} />

      <group scale={0.01}>
        <group
          position={[130.592, 37.02, -27.423]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100.415, 100.415, 9.471]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_coin_0.geometry}
            material={materials.coin}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Curve_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-1.2, -0.273, -3.909]}
            scale={[0.996, 0.996, 10.558]}
          />
        </group>
      </group>
    </group>
  );
};

export default Tezos;

useGLTF.preload("/models/gold_tezos_coin.glb");
