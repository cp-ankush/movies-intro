import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  ImageContainer,
  Image,
  TextContainer,
  Title,
  Description
} from '../styles'


const Card = ({title, description, img}) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={`${process.env.REACT_APP_IMAGE_URL}${img}`} alt="logo" />
      </ImageContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContainer>
    </Container>
  )
}

export default Card
