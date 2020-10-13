import React, {Component} from 'react';
import axios from 'axios';
import {Jumbotron, Button} from 'react-bootstrap';
import Cookies from 'js-cookie';
require('dotenv').config({path: __dirname + '../../.env'});

//if there is no zipcode, the state of zipcode gets set to undefined meaning the component doesnt mount and it asks the server for an undefined zip code
class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      population : 0,
      zipcode: Cookies.get("zipcode") || 10001,
      isCheckedIn: false,
      checkinClass: "btn btn-primary btn-lg",
      checkoutClass: "btn btn-secondary btn-lg",
      checkinStat: "NOT"
    }
    if (Cookies.get("isCheckedIn") === "true") {
      this.state = {
          population: 0,
          isCheckedIn: true,
          checkinClass: "btn btn-secondary btn-lg",
          checkoutClass: "btn btn-primary btn-lg",
          checkinStat: "",
          zipcode: Cookies.get("zipcode")
      }
    }
    if (Cookies.get("isCheckedIn") === "false") {
      this.state ={
        zipcode: Cookies.get("zipcode"),
        population : 0,
        isCheckedIn: false,
        checkinClass: "btn btn-primary btn-lg",
        checkoutClass: "btn btn-secondary btn-lg",
        checkinStat: "NOT"
      }
    }
    console.log("Cookies were loaded and isCheckedIn is " + this.state.isCheckedIn + ", ZIP code is " + this.state.zipcode);
  }
  
  retrievePopulation = async () => {

    let backend = process.env.REACT_APP_BACK_END;
    
    try {
      
      const response = await axios.get(backend + 'pop?zip=' + this.state.zipcode);
      const pop = response.data.population;
      this.setState({
        population: pop,
      });
    }
    catch {
      console.log("There was an error");
    }
  }
  
  checkin = async () => {
    
    let backend = process.env.REACT_APP_BACK_END;

    try {
      if (this.state.isCheckedIn === false) {
        const response = await axios.post(backend + 'checkin?zip=' + this.state.zipcode);
        const pop = response.data.population;
        this.setState({
          population: pop,
          isCheckedIn: true,
          checkinClass: "btn btn-secondary btn-lg",
          checkoutClass: "btn btn-primary btn-lg",
          checkinStat: ""
        });
        Cookies.set("isCheckedIn", "true", {sameSite: 'lax'});
        Cookies.set("zipcode", this.state.zipcode.toString(), {sameSite: 'lax'});
      }
      else {
        console.log("Already checked in!")
      }
    }
    catch {
      console.log("There was an error");
    }
  }
  
  checkout = async () => {

    let backend = process.env.REACT_APP_BACK_END;

    try {
      if (this.state.isCheckedIn === true) {
              const response = await axios.post(backend + 'checkout?zip=' + this.state.zipcode);
              const pop = response.data.population;
              this.setState({
                population: pop,
                isCheckedIn: false,
                checkinClass: "btn btn-primary btn-lg",
                checkoutClass: "btn btn-secondary btn-lg",
                checkinStat: "NOT",
              });
              Cookies.set("isCheckedIn", "false", {sameSite: 'lax'});
              Cookies.set("zipcode", this.state.zipcode.toString(), {sameSite: 'lax'});
      }
      else {
        console.log("Not checked in!")
      }
    }
    catch {
      console.log("There was an error");
    }
  }
  
  handleChange(value) {
        if (this.state.isCheckedIn === false) {
          this.setState({
            zipcode: value
          });
        }
    }

  componentDidMount() {
    this.retrievePopulation();
    window.setInterval(() => {
       this.retrievePopulation()
     }, 5000);
  }

  render() {
    return <div className="jumbotron">
        <Jumbotron>
          <h1 className="display-4">{this.state.population}</h1>
            <p className="lead">people in ZIP code {this.state.zipcode}</p>
            <hr className="my-4" />
            <p>A population density tracker as a response to the COVID-19 pandemic using metrics that users submit themselves. Enter the ZIP code of your destination and click "Check-in" whenever you leave your house, and click "Check-out" whenever you arrive back at home.</p>
            <div className="form-group">
              <input type="text" maxLength = "5" className="form-control" id="zipcode" placeholder="ZIP Code (5 digits)" value = {this.state.new} onChange={(e) => this.handleChange(e.target.value)} />
            </div>
            <p className="lead">
              <button type="button" className={this.state.checkinClass}  onClick={this.checkin}>Check-in</button>
              <span className="mx-3"></span>
              <button type="button" className={this.state.checkoutClass}  onClick={this.checkout}>Check-out</button>
            </p>
            <p>You are {this.state.checkinStat} checked in! If you are checked in, you must check out before you can change your ZIP Code.</p>
        </Jumbotron>
    </div>
  }
}

export default Display;
