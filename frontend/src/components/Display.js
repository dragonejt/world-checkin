import React, {Component} from 'react';
import axios from 'axios';
import {Jumbotron, Button} from 'react-bootstrap';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      population : 0,
      zipcode: 12345,
      isCheckedIn: false
    }
  }
  
  retrievePopulation = async () => {
    const response = await axios.get('/pop?zip=' + this.state.zipcode);
    const pop = response.data.pop;
    console.log(pop);
    this.setState({
      population: pop
    })
  }
  
  checkin = async () => {
    console.log(this.state.zipcode);
    const response = await axios.post('/checkin?zip=' + this.state.zipcode)
    const pop = response.data.pop;
    this.setState({
      population: pop,
      isCheckedIn: true
    })
  }
  
  checkout = async () => {
    const response = await axios.post('/checkout?zip=' + this.state.zipcode)
    const pop = response.data.pop;
    this.setState({
      population: pop
    })
  }
  
  handleChange(value) {
        this.setState({
            zipcode: value
        });
    }

  componentDidMount() {
    this.retrievePopulation();
    /*window.setInterval(() => {
      this.retrievePopulation()
    }, 5000); */
  }

  render() {
    return <div className="jumbotron">
        <Jumbotron>
          <h1 className="display-4">{this.state.population}</h1>
            <p className="lead">people in ZIP code {this.state.zipcode}</p>
            <hr className="my-4" />
            <p>A population density tracker using metrics that users submit themselves. Enter the ZIP code of your destination and click "Check-in" whenever you leave your house, and click "Check-out" whenever you arrive back at home.</p>
            <div className="form-group">
              <input type="number" className="form-control" id="zipcode" placeholder="ZIP Code (5 digits)" value = {this.state.new} onChange={(e) =>this.handleChange(e.target.value)} />
            </div>
            <p className="lead">
              <button type="button" className="btn btn-primary btn-lg"  onClick={this.checkin}>Check-in</button>
              <span className="mx-3"></span>
              <button type="button" className="btn btn-secondary btn-lg"  onClick={this.checkout}>Check-out</button>
            </p>
        </Jumbotron>
    </div>
  }
}

export default Display;
