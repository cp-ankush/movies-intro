import React from 'react'
import PropTypes from 'prop-types'
import {
 Container,
 Content
} from '../styles'
import moment from 'moment'

import {Section} from 'Common/styles'

class Footer extends React.Component {
  render () {
    const year = moment().format("YYYY");
    return (
      <Container>
        <section>
          <Content><b>MovieInfo</b>&nbsp;is the site to find the movies, TV shows, movies stars.</Content>
          <Content>It provides the movie reviews, releases date and many more.</Content>
          <Content>&copy; {year}</Content>
        </section>
      </Container>
    )
  }
}

export default Footer;
