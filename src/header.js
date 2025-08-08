import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style/navbar.css';

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const navLinkStyle = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: isActive ? 'underline' : 'none',
  });

  return (
    <div className="header-container">
      <div className="main-header">
        <img src="./images/logo.png" alt="Logo" className="header-logo" />

        <button className="mobile-menu-icon" onClick={() => setShowMobileNav(!showMobileNav)}>
          <i className={showMobileNav ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>

        <div className="nav-desktop">
          <NavLink className="link" style={navLinkStyle} to="/">Home</NavLink>
          <NavLink className="link" style={navLinkStyle} to="/program">The Program</NavLink>
          <NavLink className="link" style={navLinkStyle} to="/about">About</NavLink>
          <NavLink className="link" style={navLinkStyle} to="/signpage">Sign Up</NavLink>
          <NavLink className="link" style={navLinkStyle} to="/crud">CRUD</NavLink>
          <NavLink className="link" style={navLinkStyle} to="/loginpage">Login</NavLink>
          <button className="btn">Apply Now</button>
        </div>
      </div>

      {showMobileNav && (
        <div className="nav-mobile">
          <NavLink className="link" style={navLinkStyle} to="/">Home</NavLink>
          <NavLink className="link" style={navLinkStyle} to="/program">The Program</NavLink>
          <NavLink className="link" style={navLinkStyle} to="/about">About</NavLink>
          <NavLink className="link" style={navLinkStyle} to="/signpage">Sign Up</NavLink>
          <NavLink className="link" style={navLinkStyle} to="/crud">CRUD</NavLink>
          <NavLink className="link" style={navLinkStyle} to="/loginpage">Login</NavLink>
          <button className="btn">Apply Now</button>
        </div>
      )}
    </div>
  );
};

export default Header;
