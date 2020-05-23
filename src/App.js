import React, { useRef, useState } from 'react';
import { FaAlignRight } from 'react-icons/fa'
import * as THREE from 'three'
import { useSpring, a  } from "react-spring/three";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { OrbitControls, HTML, Text, Sky } from 'drei'

import './App.css';

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}


function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: [0, 0, 5]}} onCreated={({ gl })=> {
        gl.shadowMap.enabled = true
        gl.shadowMap.type = THREE.PCFSoftShadowMap
      }}>
        <OrbitControls />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
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
