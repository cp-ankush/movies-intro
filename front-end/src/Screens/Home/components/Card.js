import React from 'react'
import PropTypes from 'prop-types'
import {
  CardContainer,
  Image
} from '../styles'


const Card = ({title, description, img}) => {
  const displayDescription = description.length > 110? description.substring(0, 110) : description;
  return (
    <CardContainer>
      <Image src={`${process.env.REACT_APP_IMAGE_URL}${img}`} alt="logo" />
    </CardContainer>
  )
}

export default Card
