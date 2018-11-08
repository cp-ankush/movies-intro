import styled from 'styled-components';

export const Container = styled.div`
 padding: 10px;
 margin-bottom: 10px;
 width: 50%;
 height: 500px;
 border: 1px solid grey;
 border-radius: 5px;
 display: flex;
 box-shadow: 1px 1px 10px grey;
`

export const ImageContainer = styled.div`
  width: 250px;
  height: 500px;
  border-radius: 5px;
  overflow: hidden;
`

export const Image = styled.img`
  width: 100%
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
`

export const TextContainer = styled.p`
  width: 50%;
  padding: 0 15px;
  text-align: left;
`

export const Title = styled.h2`
  margin-top: 10px;
`

export const Description = styled.p`
 font-size: 18px
`
