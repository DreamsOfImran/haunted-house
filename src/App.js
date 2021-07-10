import React, { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import House from './components/House'
import Graves from './components/Graves'
import Ghosts from './components/Ghosts'
import './style.css'

import { gui } from './utils/GUI'

const App = () => {
  const ambientLightRef = useRef()
  const moonLightRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      const ambientFolder = gui.addFolder("Ambient Light")
      ambientFolder.add(ambientLightRef.current, 'intensity', 0, 1, 0.001)

      const moonLight = gui.addFolder("Moon Light")
      moonLight.add(moonLightRef.current, 'intensity').min(0).max(1).step(0.001)
      moonLight.add(moonLightRef.current.position, 'x', -5, 5, 0.001)
      moonLight.add(moonLightRef.current.position, 'y', -5, 5, 0.001)
      moonLight.add(moonLightRef.current.position, 'z', -5, 5, 0.001)

    }, 1000)

  }, [])

  return (
    <Canvas camera={{
      fov: 75, aspect: window.innerWidth / window.innerHeight, near: 0.1, far: 100, position: [4, 2, 5]
    }} shadows>
      <color attach="background" args={['#262837']} />
      <fog attach="fog" args={['#262837', 1, 15]} />

      <ambientLight ref={al => ambientLightRef.current = al} color="#b9d5ff" intensity={0.12} />
      <directionalLight ref={moonLightRef} color="#b9d5ff" intensity={0.12} position={[4, 5, -2]} castShadow />

      <OrbitControls />

      <House />
      <Graves />
      <Ghosts />
    </Canvas>
  )
}

export default App
