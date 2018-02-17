import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './App.css';
import Routes from "./binRoutes.js"

class App extends Component {
  render() {
    return (
      <div>
        <Routes/>
      </div>
    );
  }
}

export default App;
