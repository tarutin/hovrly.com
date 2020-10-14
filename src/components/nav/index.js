import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
      return (
        <div>
          <Link to="/">Home</Link>
          <Link to="/donate">Support Us</Link>
          <Link to="/404">404</Link>
        </div>
      );
  }
}


export default Nav;
