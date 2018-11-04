import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card'

class App extends Component {

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
        console.log(res)
        this.setState({
          movies: res.results
        })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            this.state.movies.map((item) => {
              return (<Card title={item.title} description={item.overview} img={item.poster_path} />)
            })
          }
        </header>
      </div>
    );
  }
}

export default App;
