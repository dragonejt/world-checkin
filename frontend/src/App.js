import React from 'react';
import logo from './logo.svg';
import Navi from './components/Navi';
import Display from './components/Display';
import Heatmap from './components/Heatmap';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import './App.css';

var backendUrl = "https://www.google.com";

function App() {
  return (
    <div className="App">
      <Navi />
      <Router>
        <Switch>
          <Route path = "/map">
            <Heatmap />
          </Route>
          <Route path = "/">
            <Display />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
