import React, { useRef, useState } from 'react';
import { FaAlignRight } from 'react-icons/fa'
import * as THREE from 'three'
import { useSpring, a  } from "react-spring/three";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { OrbitControls, HTML, Text, Sky } from 'drei'

import './App.css';

import Navbar from './components/navbar/navbar'
import Box from './components/box/box'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Canvas camera={{ position: [0, 0, 5]}} onCreated={({ gl })=> {
        gl.shadowMap.enabled = true
        gl.shadowMap.type = THREE.PCFSoftShadowMap
      }}>
        <OrbitControls />
        <Box position={[-4.2, 0, 0]} />
        <Box position={[-2.2, 0, 0]} />
        <ambientLight intensity={0.5} />
        <spotLight
          position={[15, 20, 5]}
          penumbra={1}
          castShadow
        />
      </Canvas>
    </div>
  );
}

export default App;
