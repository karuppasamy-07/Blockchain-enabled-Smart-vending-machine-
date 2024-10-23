// src/components/Header.js

import React from 'react';
import { NavLink } from 'react-router-dom'; // Ensure this is imported
import logo from '../assets/logo.png'; // Import the logo image
import './Header.css'; // Import your CSS for styling

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Smart Vending Machine Logo" />
      </div>
      <h1>Smart Vending Machine</h1>
      <nav>
        <ul>
          <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
          <li><NavLink to="/medicine" activeClassName="active">Medicine Selection</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/authorized-access" activeClassName="active">Authorized Access</NavLink></li> {/* New link */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
