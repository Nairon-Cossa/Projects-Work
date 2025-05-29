import React from 'react';
import './Footer.css';
import logo from '../assets/LogoHPH.png'; // Import the logo image properly

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="footer-logo-img" />
        </div>
        <div className="footer-links">
          <a href="/privacidade">Privacidade & Política</a>
          <a href="/termos">Termos & Condições</a>
          <a href="/apoio">Apoio & Suporte</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
