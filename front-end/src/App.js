import React, { Component } from 'react';
import logo from './logo.svg';
import Router from 'Router'
import './App.css';
import Footer from 'Screens/Footer/components'
import Header from 'Screens/Header/components'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;
