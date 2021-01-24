import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'

const Navbar = () => {
  return (
      <div className="navbar">
   
          <Link to="/" className="navbar-link">
            Dashboard
          </Link>
          <Link to="/clients" className="navbar-link">
            Clients
          </Link>
      </div>
  )
}
export default Navbar