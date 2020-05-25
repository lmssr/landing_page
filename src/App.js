import React, { useRef, useState } from 'react';
import { FaAlignRight } from 'react-icons/fa'
import * as THREE from 'three'
import { useSpring, a  } from "react-spring/three";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { HTML, Text, Sky } from 'drei'

import './App.css';

import Navbar from './components/navbar/navbar'
import Box from './components/box/box'


function App() {
  return (
    <div className="App">
    <div className="container">
      <Navbar />
      <h1>
        Welcome to our brand new website
      </h1>
      <div className="description">
      <a>This is our cool description</a>
      </div>
      <Canvas camera={{ position: [0, 0, 5]}} onCreated={({ gl })=> {
        gl.shadowMap.enabled = true
        gl.shadowMap.type = THREE.PCFSoftShadowMap
      }}>
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
    </div>
  );
}

export default App;
