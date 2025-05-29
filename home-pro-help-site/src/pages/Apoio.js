// src/pages/Apoio.js
import React from 'react';
import './LegalPage.css';

const Apoio = () => {
  return (
    <div className="legal-page">
      <h1>Apoio & Suporte</h1>
      <p>Precisa de ajuda? A nossa equipa está aqui para oferecer suporte e resolver qualquer dúvida que possa ter.</p>

      <h2>1. Contacto Direto</h2>
      <p>Para apoio técnico ou dúvidas sobre os nossos serviços, entre em contacto connosco através:</p>
      <ul>
        <li>Email: suporte@homeprohelp.co.mz</li>
        <li>Telefone: +258 84 000 0000</li>
        <li>Horário: Segunda a Sexta, das 08h às 17h</li>
      </ul>

      <h2>2. FAQ</h2>
      <p>Consulte a nossa <a href="/faq">página de perguntas frequentes</a> para respostas rápidas às dúvidas mais comuns.</p>
    </div>
  );
};

export default Apoio;
