import React from 'react'
import { NavLink  } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
  <nav className="navbar">
        <h2 className="logo">MySite</h2>
        <ul className="nav-links">
            <li><NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>
    </nav>
  )
}

export default Nav