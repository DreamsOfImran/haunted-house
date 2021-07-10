import React, { useEffect, useRef } from 'react'

const Roof = () => {
  const ref = useRef()
  useEffect(() => {
    ref.current.position.y = 2.5 + 0.5
    ref.current.rotation.y = Math.PI * 0.25
  }, [])
  return (
    <mesh ref={ref}>
      <coneBufferGeometry args={[3.5, 1, 4]} />
      <meshStandardMaterial color='#b35f45' />
    </mesh>
  )
}

export default Roof
