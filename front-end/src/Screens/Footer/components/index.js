import React from 'react'
import PropTypes from 'prop-types'
import {
 Container,
 Content,
 ContentContainer
} from '../styles'
import moment from 'moment'
import {IsMobileContext} from 'App'

import {Section} from 'Common/styles'

class Footer extends React.Component {
  render () {
    const year = moment().format("YYYY");
    const {isMobile} = this.props;

    return (
      <IsMobileContext.Consumer>
        {
          isMobile => (
             <Container isMobile={isMobile}>
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
      </IsMobileContext.Consumer>
    )
  }
}

export default Footer;
