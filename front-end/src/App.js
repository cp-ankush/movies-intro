import React, { Component } from 'react';
import logo from './logo.svg';
import Router from 'Router'
import './App.css';
import Footer from 'Screens/Footer/components'
import Header from 'Screens/Header/components'
import {isMobile} from 'Utils'

class App extends Component {

  render() {
    const isMob = isMobile()
    return (
      <div className="App">
        <Header isMobile={isMob} />
        <Router isMobile={isMob} />
        <Footer isMobile={isMob} />
      </div>
    );
  }
}

export default App;
