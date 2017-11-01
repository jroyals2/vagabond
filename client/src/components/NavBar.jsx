import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
font-size: 20px;
color: blue;
text-align: center;
background-color: rgba(25, 100, 130, .25);
box-shadow: inset 0 0 1em black, 0 0 1em white;
height: 100px;

a {
  text-decoration: none;
  color: blue;
}
`
class NavBar extends Component {
    render() {
        return (
            <Nav>
              
            <Link to ="/"> Home Page </Link>
            <Link to ="/"> Sign Up </Link>
            <Link to ="/"> Log In  </Link>
            


            </Nav>
        );
    }
}

export default NavBar;