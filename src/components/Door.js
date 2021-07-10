import React, { useEffect, useRef } from 'react'
import { TextureLoader, Float32BufferAttribute } from 'three'

const Door = () => {
  const ref = useRef()
  useEffect(() => {
    ref.current.position.y = 1
    ref.current.position.z = 2 + 0.01
    ref.current.geometry.setAttribute('uv2', new Float32BufferAttribute(ref.current.geometry.attributes.uv.array, 2))
  }, [])
  const textureLoader = new TextureLoader()
  const colorTexture = textureLoader.load('/haunted-house/textures/door/color.jpg')
  const alphaTexture = textureLoader.load('/haunted-house/textures/door/alpha.jpg')
  const aoTexture = textureLoader.load('/haunted-house/textures/door/ambientOcclusion.jpg')
  const heightTexture = textureLoader.load('/haunted-house/textures/door/height.jpg')
  const normalTexture = textureLoader.load('/haunted-house/textures/door/normal.jpg')
  const metalnessTexture = textureLoader.load('/haunted-house/textures/door/metalness.jpg')
  const roughtnessTexture = textureLoader.load('/haunted-house/textures/door/roughtness.jpg')
  
  return (
    <mesh ref={ref}>
      <planeBufferGeometry args={[2.2, 2.2, 100, 100]} />
      <meshStandardMaterial
        map={colorTexture}
        transparent={true}
        alphaMap={alphaTexture}
        aoMap={aoTexture}
        displacementMap={heightTexture}
        displacementScale={0.1}
        normalMap={normalTexture}
        metalnessMap={metalnessTexture}
        roughnessMap={roughtnessTexture}
      />
    </mesh>
  )
}

export default Door
