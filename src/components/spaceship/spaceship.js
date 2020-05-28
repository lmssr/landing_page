import React, { useState, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const SpaceShip = () => {
  const [model, setModel] = useState()
  useEffect(() => {
    new GLTFLoader().load('/spaceship/scene.gltf', setModel)

  }, [])

  return model ? <primitive object={model.scene} position={[-4, 0, -7]} scale={[0.5, 0.5, 0.5]} /> : null
}

export default SpaceShip
