import styled from 'styled-components'

export const Container = styled.div`
  background-color: rgb(13, 28, 35);
  height: 90px;
  width: 100%;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 999;
`
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`
export const Logo = styled.h1`
  color: white;
  display: flex;
  align-items: center;
  border: 1px solid;
  padding: 10px;
  border-radius: 5px;
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
