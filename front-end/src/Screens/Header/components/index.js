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

class Header extends React.Component {

  render () {
    const {isMobile} = this.props;
    return (
      <Container isMobile={isMobile}>
        <Section>
          <Row>
           <Logo isMobile={isMobile}>
             Movie Info
           </Logo>
           {
             !isMobile ?
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
