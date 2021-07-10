import React, { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Clock } from 'three'

const Ghosts = () => {
  const ghost1 = useRef()
  const ghost2 = useRef()
  const ghost3 = useRef()

  useEffect(() => {
    ghost1.current.shadow.mapSize.width = 256
    ghost1.current.shadow.mapSize.height = 256
    ghost1.current.shadow.camera.far = 7

    ghost2.current.shadow.mapSize.width = 256
    ghost2.current.shadow.mapSize.height = 256
    ghost2.current.shadow.camera.far = 7

    ghost3.current.shadow.mapSize.width = 256
    ghost3.current.shadow.mapSize.height = 256
    ghost3.current.shadow.camera.far = 7
  }, [])

  const clock = new Clock()

  useFrame(() => {
    const elapsedTime = clock.getElapsedTime()

    const ghost1Angle = elapsedTime * 0.5
    ghost1.current.position.x = Math.cos(ghost1Angle) * 4
    ghost1.current.position.z = Math.sin(ghost1Angle) * 4
    ghost1.current.position.y = Math.sin(elapsedTime * 3)

    const ghost2Angle = elapsedTime * 0.32
    ghost2.current.position.x = Math.cos(ghost2Angle) * 5
    ghost2.current.position.z = Math.sin(ghost2Angle) * 5
    ghost2.current.position.y = Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5)

    const ghost3Angle = elapsedTime * 0.18
    ghost3.current.position.x = Math.cos(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.32))
    ghost3.current.position.z = Math.sin(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.32))
    ghost3.current.position.y = Math.sin(elapsedTime * 5) + Math.sin(elapsedTime * 2)
  })

  return (
    <>
      <pointLight ref={ghost1} args={['#ff00ff', 2, 3]} />
      <pointLight ref={ghost2} args={['#00ffff', 2, 3]} />
      <pointLight ref={ghost3} args={['#ffff00', 2, 3]} />
    </>
  )
}

export default Ghosts
