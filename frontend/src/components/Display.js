import React, {Component} from 'react';
import {Jumbotron, Button} from 'react-bootstrap';

class Display extends React.Component {
  render() {
    return <div class="jumbotron">
        <Jumbotron>
          <h1 className="display-4">Number</h1>
            <p class="lead">people in your area</p>
            <hr class="my-4" />
            <p>A population density tracker using metrics that users submit themselves. Enter the ZIP code of your destination and click "Check-in" whenever you leave your house, and click "Check-out" whenever you arrive back at home.</p>
            <div class="form-group">
              <input type="email" class="form-control" id="zipcode" placeholder="ZIP Code (5 digits)" />
            </div>
            <p class="lead">
              <a class="btn btn-primary btn-lg" href="." role="button">Check-in</a>
              <span class="mx-3"></span>
              <a class="btn btn-secondary btn-lg" href="." role="button">Check-out</a>
            </p>
        </Jumbotron>
    </div>
  }
}

export default Display;
