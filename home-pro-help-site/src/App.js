// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Layout from './components/Layout';

import Home from './pages/Inicio';
import SobreNos from './pages/SobreNos';
import Servicos from './pages/Servicos';
import Projectos from './pages/Projectos';
import Team from './pages/Team';
import Contacte from './pages/Contacte';
import AppPage from './pages/AppPage';

// New imports
import Privacidade from './pages/Privacidade';
import Termos from './pages/Termos';
import Apoio from './pages/Apoio';

function App() {
  return (
    <Router>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/projectos" element={<Projectos />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contacte" element={<Contacte />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/apoio" element={<Apoio />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
