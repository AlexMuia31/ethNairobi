import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import Eth from "./Models/Eth";
import Tezos from "./Models/Tezos";
import * as THREE from "three";

const ModelView = () => {
  return (
    <Canvas>
      <Suspense
        fallback={
          <Html>
            <div>Loading</div>
          </Html>
        }
      >
        <Eth position={[-3, 0, 0]} />
      </Suspense>
    </Canvas>
  );
};

export default ModelView;
