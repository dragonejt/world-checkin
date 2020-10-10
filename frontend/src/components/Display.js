import React, {Component} from 'react';
import {Jumbotron, Button} from 'react-bootstrap';

class Display extends React.Component {
  componentDidMount() {
    // Simple GET request using fetch
    fetch('{url}/v2/search?q=react')
        .then(response => response.json())
        .then(data => this.setState({ totalReactPackages: data.total }));
}
  render() {
    return <div class="jumbotron">
        <Jumbotron>
          <h1 className="display-4" pop="10">{this.props.pop}</h1>
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
