import styled from 'styled-components';

export const Heading = styled.h1`
  text-align: left;
  margin: 20px 10px;
`

export const CardContainer = styled.div`
 margin-bottom: 10px;
 display: flex;
 margin: 0 10px;
`

export const Container = styled.div`
  margin: ${props => props.isMobile? "80px 10px" : "120px 20px"};
  color: white;
  ${Heading} {
    font-size: ${props => props.isMobile? "24px" : "32px"};
  };
  ${CardContainer} {
    width: ${props => props.isMobile? "150px" : "200px"};
    height: ${props => props.isMobile? "250px" : "300px"};
  }
`

export const CardItemsContainer = styled.div`
  display: flex;
  overflow-x: auto;
`

export const Separator = styled.div`
  margin-top: 10px;
`

export const Image = styled.img`
  overflow: hidden;
  min-width: 100%;
  min-height: 100%;
`
