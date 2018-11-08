import React from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import Card from './Card'
import isEmpty from 'lodash/isEmpty'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_MOVIE_API_URL}/discover/movie?primary_release_date.gte=2018-10-01&primary_release_date.lte=2018-10-31&api_key=${process.env.REACT_APP_MOVIE_API_KEY}`)
      .then(res => {
        return res.json()
      }).then(res => {
        this.setState({
          movies: res.results
        })
      })
  }

  renderCards = () => (
    this.state.movies.map((item, index) => {
      return (
        <Card title={item.title} description={item.overview}  img={item.poster_path} key={index} />
      )
    })
  )

  render () {
    const cardElements = !isEmpty(this.state.movies) && this.renderCards()
    return (
      <div style={{marginTop: '100px'}}>
      {
        cardElements
      }
      </div>
    )
  }
}

export default Home;
