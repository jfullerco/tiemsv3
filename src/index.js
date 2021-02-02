import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom'
import App from "./App"
import Navbar from './Navbar'
import Details from './Details'

import './skeleton.css'

ReactDOM.render(
  <Router>
    <div className="container">
      <div className="row"><Navbar /></div>
      <div className="row"><App /></div>
    </div>
  </Router>, 
  document.getElementById("root"));
