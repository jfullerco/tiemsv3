import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom'
import App from "./App"
import Navbar from './Navbar'
import Sidebar from './Sidebar'

import './style.css'

ReactDOM.render(
  <Router>
    <Navbar />
    <div className="container">
      <Sidebar style="order: 1"/>
      <App style="order: 2"/>
    </div>
  </Router>, 
  document.getElementById("root"));
