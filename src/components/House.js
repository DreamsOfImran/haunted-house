import React from 'react'
import Bushes from './Bushes'
import Door from './Door'
import DoorLight from './DoorLight'
import Floor from './Floor'
import Roof from './Roof'
import Walls from './Walls'

const House = () => {
  return (
    <group>
      <Floor />
      <Walls />
      <Roof />
      <Door />
      <Bushes />
      <DoorLight />
    </group>
  )
}

export default House
