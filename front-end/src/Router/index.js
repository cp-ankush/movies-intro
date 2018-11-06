import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from 'Screens/Header/components'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          {
            //<Route exact path='/' component={HomeComponent}></Route>
          }
        </div>
      </Router>
    );
  }
}

export default App;
