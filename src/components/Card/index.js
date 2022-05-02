import React from 'react'
import { Card } from './styled'

export default function CardPokemon({description, image, name }) {
  console.log('image >>> ', image)
  return (
      <Card>
          <h4>{name}</h4>
          <img src={image} alt={name} />
          <p>
            {description}
          </p>
      </Card>
  )
}


