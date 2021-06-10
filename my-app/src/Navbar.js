import React from 'react'
import './Navbar.css'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar__container">
            <div className="navbar__container_left">
                        <h2>LOGO</h2>
            </div>
            <div className="navbar__container_right">
            <Router>
      <div>
        <nav>
          <ul className="navbar_links">
            <div className="navbar_links_class">
            <li className="navbar_link">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar_link">
              <Link to="/About">About</Link>
            </li>
            <li className="navbar_link">
              <Link to="/Contact_us">Contact us</Link>
            </li>
            <li className="navbar_link">
              <Link to="/FAQ">FAQ</Link>
            </li>
            </div>
            <div className="login_register_container">
            <li className="login_link">
              <Link to="/Login">Login</Link>
            </li>
            <li className="login_link">
              <Link to="/Register">Register</Link>
            </li>
            </div>
          </ul>
        </nav>
      </div>
    </Router>
            </div>
     
        </div>
    )
}

export default Navbar
