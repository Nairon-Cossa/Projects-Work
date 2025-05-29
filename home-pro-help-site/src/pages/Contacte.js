// Contacte.js
import React from 'react';
import './Contacte.css';

const Contacte = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contacte-nos</h2>
      <div className="contact-content">
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Nome</label>
              <input type="text" placeholder="Nome" />
            </div>
            <div className="form-group">
              <label>Sobrenome</label>
              <input type="text" placeholder="Apelido" />
            </div>
          </div>
          <div className="form-group">
            <label>Email <span className="required">*</span></label>
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="Assunto" />
          </div>
          <div className="form-group">
            <label>Your Message <span className="required">*</span></label>
            <textarea placeholder="Sua mensagem" required></textarea>
          </div>
          <button type="submit" className="submit-button">Enviar o formulário</button>
        </form>
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Avenida%20Karl%20Marx,%20Maputo,%20Mozambique&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacte;
