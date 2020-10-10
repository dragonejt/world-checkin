import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';

class Navi extends React.Component {
  render() {
    return <div id="navdiv">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">World Check-in</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/map">Heatmap</a>
          </li>
        </ul>
      </nav>
    </div>
  }
}

export default Navi;
