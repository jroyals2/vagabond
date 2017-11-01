import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <div>
              
            <Link to ="/"> Home Page </Link>
            <Link to ="/"> Sign Up </Link>
            <Link to ="/"> Login In  </Link>
            


            </div>
        );
    }
}

export default NavBar;