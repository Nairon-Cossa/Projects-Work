import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/LogoHPH.png';
import './Navbar.css';
function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/sobre-nos">Sobre Nós</Link>
        <Link to="/servicos">Serviços</Link>
        <Link to="/projectos">Projectos</Link>
        <Link to="/team">Team</Link>
        <Link to="/contacte">Contacte</Link>
        <Link to="/app">App</Link>
      </div>
    </nav>
  );
}

export default Navbar;
