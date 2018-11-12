import React from 'react'
import PropTypes from 'prop-types'
import {
 Container,
 Content,
 ContentContainer
} from '../styles'
import moment from 'moment'
import IsMobileContext from 'IsMobileContext'

import {Section} from 'Common/styles'

class Footer extends React.Component {

  static contextType = IsMobileContext

  render () {
    const year = moment().format("YYYY");
    return (
      <Container isMobile={this.context.isMobile}>
        <Section>
          <ContentContainer>
            <Content><b>MovieInfo</b>&nbsp;is the site to find the movies, TV shows, movies stars.</Content>
            <Content>It provides the movie reviews, releases date and many more.</Content>
            <Content>&copy; {year}</Content>
          </ContentContainer>
        </Section>
      </Container>
    )
  }
}

export default Footer;
