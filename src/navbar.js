import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style/navbar.css';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const navLinkStyle = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: isActive ? 'underline' : 'none',
  });

  return (
    <header>
      <div className="main-header">
        <img src="./images/logo.png" alt="Logo" className="header-logo" />

        <nav className="nav-desktop">
          <NavLink className="link" style={navLinkStyle} to="/">Home</NavLink>
          <NavLink className="link" style={navLinkStyle} to="/program">The Program</NavLink>
          <NavLink className="link" style={navLinkStyle} to="/about">About</NavLink>
          <NavLink className="link" style={navLinkStyle} to="/signpage">Sign Up</NavLink>
          <NavLink className="link" style={navLinkStyle} to="/crud">CRUD</NavLink>
          <NavLink className="link" style={navLinkStyle} to="/loginpage">Login</NavLink>
          <button className="btn">Apply Now</button>
        </nav>

        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          <i className={isMobile ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
      </div>

      {/* Mobile nav that pushes content down */}
      {isMobile && (
        <nav className="nav-mobile">
          <NavLink className="link" style={navLinkStyle} to="/">Home</NavLink>
          <NavLink className="link" style={navLinkStyle} to="/program">The Program</NavLink>
          <NavLink className="link" style={navLinkStyle} to="/about">About</NavLink>
          <NavLink className="link" style={navLinkStyle} to="/signpage">Sign Up</NavLink>
          <NavLink className="link" style={navLinkStyle} to="/crud">CRUD</NavLink>
          <NavLink className="link" style={navLinkStyle} to="/loginpage">Login</NavLink>
          <button className="btn">Apply Now</button>
        </nav>
      )}
    </header>
  );
};

export default Header;
