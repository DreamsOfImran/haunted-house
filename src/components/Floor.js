import React, { useEffect, useRef } from 'react'
import { Float32BufferAttribute, TextureLoader, RepeatWrapping } from 'three'

const Floor = () => {
  const ref = useRef()
  const textureLoader = new TextureLoader()

  const colorTexture = textureLoader.load('/textures/grass/color.jpg')
  const ambientOcclusionTexture = textureLoader.load('/textures/grass/ambientOcclusion.jpg')
  const normalTexture = textureLoader.load('/textures/grass/normal.jpg')
  const roughnessTexture = textureLoader.load('/textures/grass/roughness.jpg')
  colorTexture.repeat.set(8, 8)
  ambientOcclusionTexture.repeat.set(8, 8)
  normalTexture.repeat.set(8, 8)
  roughnessTexture.repeat.set(8, 8)

  colorTexture.wrapS = RepeatWrapping
  ambientOcclusionTexture.wrapS = RepeatWrapping
  normalTexture.wrapS = RepeatWrapping
  roughnessTexture.wrapS = RepeatWrapping

  colorTexture.wrapT = RepeatWrapping
  ambientOcclusionTexture.wrapT = RepeatWrapping
  normalTexture.wrapT = RepeatWrapping
  roughnessTexture.wrapT = RepeatWrapping

  useEffect(() => {
    ref.current.geometry.setAttribute('uv2', new Float32BufferAttribute(ref.current.geometry.attributes.uv.array, 2))
    ref.current.rotation.x = -Math.PI * 0.5
    ref.current.position.y = 0
  }, [])

  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry args={[20, 20]} />
      <meshStandardMaterial
        map={colorTexture}
        aoMap={ambientOcclusionTexture}
        normalMap={normalTexture}
        roughnessMap={roughnessTexture}
      />
    </mesh>
  )
}

export default Floor
