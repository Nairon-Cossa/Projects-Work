import React from "react";
import "./AppPage.css";
import logo from '../assets/LogoHPH.png';

const AppPage = () => {
  return (
    <div className="app-page">
      <section className="header-section">
        <img
          src={logo}
          alt="Logo Home Pro Help"
          className="logo"
        />
        <h1 className="title">Nossa Aplicação</h1>
        <p className="subtitle">A nossa aplicação facilita o acesso a serviços residenciais e comerciais de confiança em Maputo.</p>
        <a href="https://example.com/download" className="download-button">Descarregar Aplicação</a>
      </section>

      <section className="video-section">
        <h2 className="section-title">Como Utilizar a Aplicação</h2>
        <div className="video-grid">
          <img
            src="https://via.placeholder.com/300x200?text=Vídeo+Exemplo+1"
            alt="Exemplo de uso da aplicação"
            className="video-thumbnail"
          />
          <img
            src="https://via.placeholder.com/300x200?text=Vídeo+Exemplo+2"
            alt="Demonstração da aplicação"
            className="video-thumbnail"
          />
        </div>
        <div className="text">
          <p>Assista aos vídeos curtos e aprenda a:</p>
          <ul>
            <li>Navegar pela aplicação</li>
            <li>Solicitar serviços de forma simples</li>
            <li>Acompanhar o andamento dos seus pedidos</li>
            <li>Contactar diretamente com a nossa equipa</li>
          </ul>
        </div>
      </section>

      <section className="info-section">
        <h2 className="section-title">Funcionalidades da App</h2>
        <ul className="feature-list">
          <li>✅ Interface simples e intuitiva</li>
          <li>📱 Disponível para Android e iOS</li>
          <li>🛠️ Solicitação rápida de serviços como eletricista, canalização, pintura, e mais</li>
          <li>🔔 Notificações em tempo real sobre o estado do seu serviço</li>
          <li>📞 Comunicação direta com a nossa equipa técnica</li>
        </ul>
      </section>

      <footer className="footer">
        <p>Pronto para transformar o seu espaço? Faça o download da nossa aplicação agora.</p>
        <a href="https://example.com/download" className="download-button">Descarregar Aplicação</a>
      </footer>
    </div>
  );
};

export default AppPage;
