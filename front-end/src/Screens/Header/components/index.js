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
import {IsMobileContext} from 'App'

class Header extends React.Component {

  render () {
    return (
      <IsMobileContext.Consumer>
        {
         isMobile => (
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
      </IsMobileContext.Consumer>
    )
  }
}

export default Header;
