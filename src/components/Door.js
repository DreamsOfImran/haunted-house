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
  const colorTexture = textureLoader.load('/textures/door/color.jpg')
  const alphaTexture = textureLoader.load('/textures/door/alpha.jpg')
  const aoTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
  const heightTexture = textureLoader.load('/textures/door/height.jpg')
  const normalTexture = textureLoader.load('/textures/door/normal.jpg')
  const metalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
  const roughtnessTexture = textureLoader.load('/textures/door/roughtness.jpg')
  
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
