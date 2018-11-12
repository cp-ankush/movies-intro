import React from 'react'
import PropTypes from 'prop-types'

import {
  HamburgerContainer,
  Hamburger,
} from '../styles'

class HamburgerIcon extends React.Component {
  render () {
    return (
      <HamburgerContainer>
        <Hamburger>
          <span />
          <span />
          <span />
        </Hamburger>
      </HamburgerContainer>
    )
  }
}

export default HamburgerIcon;
