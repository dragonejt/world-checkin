import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';

class Navi extends React.Component {
  render() {
    return <div id="navdiv">
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="/">World Check-in</a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/map">Heatmap</a>
          </li>
        </ul>
      </nav>
    </div>
  }
}

export default Navi;
