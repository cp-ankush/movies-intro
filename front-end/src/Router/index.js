import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from 'Screens/Header/components'
import Home from 'Screens/Home/components'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          {
            <Route exact path='/' component={Home}></Route>
          }
        </div>
      </Router>
    );
  }
}

export default App;
