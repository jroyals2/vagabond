import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <NavBar/> 
        <Switch>
          <Route exact path="/" render={HomePage}/> 
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
