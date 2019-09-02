import styled from 'styled-components'

export const Logo = styled.h1`
  color: white;
  display: flex;
  align-items: center;
  border: 1px solid;
  border-radius: 5px;
`

export const Container = styled.div`
  background-image: linear-gradient(to right, rgb(13, 28, 35), rgba(7, 64, 52, 1));
  height: ${props => (props.isMobile? '60px' : '90px')};
  width: 100%;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 999;
  ${Logo} {
    font-size: ${props => (props.isMobile? '16px' : '32px')}
    padding: ${props => (props.isMobile? '5px' : '10px')}
  }
`
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

export const Navbar = styled.ul`
  display: flex;
  align-items: center;
  list-style-type:none;
  font-size: 18px;
`

export const Item = styled.li`
  color: white;
  padding: 0 15px;
  font-weight: bold;
  cursor: pointer;
`

export const LoginItem = styled(Item)`
  font-weight: normal;
  width: 70px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-radius: 5px;
  margin-left: 10px;
`

export const HamburgerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
`

export const Hamburger = styled.div`
  width: 20px;
  height: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
  }
  span {
    width: 20px;
    height: 2px;
    background-color: #ecf0f1;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
`
