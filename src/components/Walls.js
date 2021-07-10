import React, { useEffect, useRef } from 'react'
import { Float32BufferAttribute, TextureLoader } from 'three'

const Walls = () => {
  const ref = useRef()
  const textureLoader = new TextureLoader()

  const colorTexture = textureLoader.load('/haunted-house/textures/bricks/color.jpg')
  const ambientOcclusionTexture = textureLoader.load('/haunted-house/textures/bricks/ambientOcclusion.jpg')
  const normalTexture = textureLoader.load('/haunted-house/textures/bricks/normal.jpg')
  const roughnessTexture = textureLoader.load('/haunted-house/textures/bricks/roughness.jpg')

  useEffect(() => {
    ref.current.position.y = 1.25
    ref.current.geometry.setAttribute('uv2', new Float32BufferAttribute(ref.current.geometry.attributes.uv.array, 2))
  }, [])
  return (
    <mesh ref={ref} castShadow>
      <boxBufferGeometry args={[4, 2.5, 4]} />
      <meshStandardMaterial
        map={colorTexture}
        aoMap={ambientOcclusionTexture}
        normalMap={normalTexture}
        roughnessMap={roughnessTexture}
      />
    </mesh>
  )
}

export default Walls
