import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom'
import App from "./App"
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Details from './Details'

import './style.css'

ReactDOM.render(
  <Router>
    <div className="grid-main">
      <Navbar />
      <App />
    </div>
  </Router>, 
  document.getElementById("root"));
