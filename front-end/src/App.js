import React, { Component } from 'react';
import logo from './logo.svg';
import Router from 'Router'
import './App.css';
import Footer from 'Screens/Footer/components'
import Header from 'Screens/Header/components'
import {isMobile} from 'Utils'
import IsMobileContext from 'IsMobileContext'

class App extends Component {

  render() {
    return (
      <IsMobileContext.Provider value={{isMobile: isMobile()}}>
        <div className="App">
          <Header />
          <Router />
          <Footer />
        </div>
      </IsMobileContext.Provider>
    );
  }
}

export default App;
