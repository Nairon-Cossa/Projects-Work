// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/LogoHPH.png';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Logo" className="navbar-logo" />

        {/* Hamburger icon (only on mobile) */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        {/* Links */}
        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/sobre-nos" onClick={() => setMenuOpen(false)}>Sobre Nós</Link>
          <Link to="/servicos" onClick={() => setMenuOpen(false)}>Serviços</Link>
          <Link to="/projectos" onClick={() => setMenuOpen(false)}>Projectos</Link>
          <Link to="/team" onClick={() => setMenuOpen(false)}>Team</Link>
          <Link to="/contacte" onClick={() => setMenuOpen(false)}>Contacte</Link>
          <Link to="/app" onClick={() => setMenuOpen(false)}>App</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
