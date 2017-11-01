import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import styled from 'styled-components'
import axios from 'axios'
import City from './components/City'





class App extends Component {
  state = {
    cities:[],
    }

  async componentWillMount() {
    try{
      const response = await axios.get("/cities")
      this.setState({cities: response.data})
    }catch(error) {
      console.log(error)
    } 
  } 


  render() {
    return (
      <Router>
       
        <div className="App">
          
        <NavBar/> 
        <Switch>
        <Route exact path='/' render={(props) => (<HomePage cities={this.state.cities}/>)}/>
        <Route exact path='/cities/:cityId' component={City}/>
        </Switch>
        </div>
       
      </Router>
    );
  }
}

export default App;
