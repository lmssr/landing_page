import React, { useState, useRef, useEffect } from "react";
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { useSpring, a  } from "react-spring/three";

extend({ OrbitControls })

const Controls = props => {
  const { gl, camera } = useThree()
  const ref = useRef()
  useFrame(() => ref.current.update())
  return (
    <orbitControls
    autoRotate
    ref={ref}
    args={[camera, gl.domElement]} {...props}
    />
  )
}

export default Controls
