import React, { useRef, useState } from 'react';
import * as THREE from 'three'
import { useSpring, a  } from "react-spring/three";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { OrbitControls } from "drei";

import './App.css';

import Navbar from './components/navbar/navbar'
import Box from './components/box/box'
import SpaceShip from './components/spaceship/spaceship'
import Controls from './components/controls'


function App() {
  return (
    <div className="App">
    <div className="container">
      <Navbar />
      <h1>
        Welcome to our brand new website
      </h1>
      <div className="description">
      <p> This is our cool description</p>
      </div>

      <Canvas  camera={{ position: [0, 0, 0]}} onCreated={({ gl })=> {
        gl.shadowMap.enabled = true
        gl.shadowMap.type = THREE.PCFSoftShadowMap
      }}>
        <Controls
          autoRotate
          enablePan={false}
          enableZoom={false}
          enableDamping
          dampingFactor={0.5}
          rotateSpeed={1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.5} />
        <spotLight
          position={[15, 20, 5]}
          penumbra={1}
          castShadow
        />
        <SpaceShip />
      </Canvas>
      </div>
    </div>
  );
}

export default App;
