import React from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import Card from './Card'
import isEmpty from 'lodash/isEmpty'
import moment from 'moment'

import {
  Container,
  Heading,
  CardItemsContainer,
  Separator
} from '../styles';

import {Section} from 'Common/styles'
import {IsMobileContext} from 'App'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      newMovies: [],
      moviesByPopularity: []
    }
  }

  componentDidMount() {
    const today = moment().format('YYYY-MM-DD');
    const monthBack = moment().subtract(1, 'months').format('YYYY-MM-DD');
    fetch(`${process.env.REACT_APP_MOVIE_API_URL}/discover/movie?primary_release_date.gte=${monthBack}&primary_release_date.lte=${today}&api_key=${process.env.REACT_APP_MOVIE_API_KEY}`)
      .then(res => {
        return res.json()
      }).then(res => {
        this.setState({
          newMovies: res.results
        })
      })

    fetch(`${process.env.REACT_APP_MOVIE_API_URL}/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_MOVIE_API_KEY}`)
      .then(res => {
        return res.json()
      }).then(res => {
        this.setState({
          moviesByPopularity: res.results
        })
      })
  }

  renderCards = (items) => (
    items.map((item, index) => {
      return (
        <Card title={item.title} description={item.overview}  img={item.poster_path} key={index} />
      )
    })
  )

  render () {
    const {newMovies, moviesByPopularity} = this.state;
    const newCardElements = !isEmpty(newMovies) && this.renderCards(newMovies)
    const popularCardElements = !isEmpty(moviesByPopularity) && this.renderCards(moviesByPopularity)

    return (
      <IsMobileContext.Consumer>
        {
          isMobile => (
            <Container isMobile={isMobile}>
              <Heading>New Releases</Heading>
              <CardItemsContainer>
              {
                newCardElements
              }
              </CardItemsContainer>
              <Separator />
              <Heading>By Popularity</Heading>
              <CardItemsContainer>
              {
                popularCardElements
              }
              </CardItemsContainer>
            </Container>
          )
        }
      </IsMobileContext.Consumer>
    )
  }
}

export default Home;
