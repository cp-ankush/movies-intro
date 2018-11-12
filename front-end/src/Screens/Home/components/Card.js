import React from 'react'
import PropTypes from 'prop-types'
import {
  CardContainer,
  Image
} from '../styles'


const Card = ({title, description, img}) => (
  <CardContainer>
    <Image src={`${process.env.REACT_APP_IMAGE_URL}${img}`} alt="logo" />
  </CardContainer>
)

export default Card
