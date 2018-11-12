import React from 'react'
import PropTypes from 'prop-types'
import {
 Container,
 Row,
 Logo,
 Navbar,
 Item,
 LoginItem,
} from '../styles'

import {Section} from 'Common/styles'
import {navItems} from 'Common/data'
import HamburgerIcon from './Hamburger'
import IsMobileContext from 'IsMobileContext'

class Header extends React.Component {

  static contextType = IsMobileContext

  render () {
    return (
      <Container isMobile={this.context.isMobile}>
        <Section>
          <Row>
           <Logo>
             Movie Info
           </Logo>
           {
             !this.context.isMobile ?
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
           </Navbar> :
           <HamburgerIcon />
           }
          </Row>
        </Section>
      </Container>
    )
  }
}

export default Header;
