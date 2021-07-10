import React, { useEffect, useRef } from 'react'

const DoorLight = () => {
  const ref = useRef()

  useEffect(() => {
    ref.current.shadow.mapSize.width = 256
    ref.current.shadow.mapSize.height = 256
    ref.current.shadow.camera.far = 7
  }, [])

  return (
    <>
      <pointLight ref={ref} args={['#ff7d46', 1, 7]} position={[0, 2.2, 2.7]} castShadow />
    </>
  )
}

export default DoorLight
