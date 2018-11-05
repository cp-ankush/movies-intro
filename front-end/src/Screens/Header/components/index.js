import React from 'react'
import PropTypes from 'prop-types'
import {
 Container,
 Row,
 Logo,
 Navbar,
 Item,
 LoginItem
} from '../styles'

import {Section} from 'Common/styles'
import {navItems} from 'Common/data'


class Header extends React.Component {
  render () {
    return (
      <Container>
        <Section>
          <Row>
           <Logo>
             Movie Info
           </Logo>
           <Navbar>
           {
             navItems.map( (item, index) => (
               item.login?
               <LoginItem key={index}>
                 Login
               </LoginItem> :
               <Item key={index}>
                 {item.displayName}
               </Item>
             ))
           }
           </Navbar>
          </Row>
        </Section>
      </Container>
    )
  }
}

export default Header;
