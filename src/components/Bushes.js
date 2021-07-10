import React, { useEffect, useRef } from 'react'

const Bush = ({scale, position}) => {
  const ref = useRef()
  useEffect(() => {
    ref.current.scale.set(...scale)
    ref.current.position.set(...position)
  }, [scale, position])
  return(
    <mesh ref={ref} castShadow>
      <sphereBufferGeometry />
      <meshStandardMaterial color='#89c854' />
    </mesh>
  )
}

const Bushes = () => {
  return (
    <>
      <Bush scale={[0.5, 0.5, 0.5]} position={[0.8, 0.2, 2.2]} />
      <Bush scale={[0.25, 0.25, 0.25]} position={[1.4, 0.1, 2.1]} />
      <Bush scale={[0.4, 0.4, 0.4]} position={[-0.8, 0.1, 2.2]} />
      <Bush scale={[0.15, 0.15, 0.15]} position={[-1, 0.05, 2.6]} />
    </>
  )
}

export default Bushes
