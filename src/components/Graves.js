import React, { useEffect, useRef, useState } from 'react'

const Grave = ({position, rotationY, rotationZ}) => {
  const ref = useRef()
  useEffect(() => {
    ref.current.position.set(...position)
    ref.current.rotation.y = rotationY
    ref.current.rotation.z = rotationZ
    ref.current.castShadow = true
  }, [position, rotationY, rotationZ])
  return(
    <mesh ref={ref} castShadow>
      <boxBufferGeometry args={[0.6, 0.8, 0.2]} />
      <meshStandardMaterial color='#b2b6b1' />
    </mesh>
  )
}

const Graves = () => {
  const [graves, setGraves]= useState([])
  useEffect(() => {
    let randomGraves = []
    for (let i = 0; i < 50; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = 3 + Math.random() * 6

      const x = Math.sin(angle) * radius
      const z = Math.cos(angle) * radius

      randomGraves.push({ position: [x, 0.3, z], rotationY: (Math.random() - 0.5) * 0.4, rotationZ: (Math.random() - 0.5) * 0.4 })
    }
    setGraves(randomGraves)
  }, [])

  return (
    <group castShadow receiveShadow>
      {graves.length > 0 ? graves.map((grave, index) => (
        <Grave position={grave.position} rotationY={grave.rotationY} rotationZ={grave.rotationZ} key={index} />
      )) : null}
    </group>
  )
}

export default Graves
