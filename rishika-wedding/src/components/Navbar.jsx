// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>Rishika Wedding's</h2>
      </div>
      
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>

      <div className={`navbar-right ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/offerings" onClick={() => setMenuOpen(false)}>Offerings</Link>
        <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
        <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
        <Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
        <Link to="/contactus" onClick={() => setMenuOpen(false)}>Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
