import styled from 'styled-components'

export const Container = styled.div`
  background-image: linear-gradient(to right,rgb(13,28,35),rgba(7,64,52,1));
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 140px;
  font-size: ${props => props.isMobile? '14px' : '20px'}
`

export const Content = styled.div`
  line-height: 28px;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`
