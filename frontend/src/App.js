import React from 'react';
import logo from './logo.svg';
import Navi from './components/Navi';
import Display from './components/Display';
import DensityMap from './components/Heatmap/Map'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <Navi />
      <Router>
        <Switch>
          <Route path = "/map">
            <DensityMap />
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
