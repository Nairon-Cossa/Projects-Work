import React, { useEffect, useState, useRef } from 'react';
import './Inicio.css';
import banner from '../assets/banner.jpg';
import serviceImage1 from '../assets/service1.png';
import serviceImage2 from '../assets/service2.png';
import serviceImage3 from '../assets/service3.png';
import aboutImage from '../assets/about.jpg';
import missionIcon from '../assets/mission.png';
import visionIcon from '../assets/vision.png';

function Inicio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const testimonials = [
    { name: 'Beto', text: 'Serviço excelente e atendimento muito profissional!' },
    { name: 'Elsa', text: 'A pintura ficou impecável, recomendo totalmente.' },
    { name: 'Armando', text: 'Profissionais eficientes e muito simpáticos.' },
    { name: 'Felizarda', text: 'Adorei o trabalho feito em minha casa, 5 estrelas!' },
  ];

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  return (
    <>
      <div className="hero-section" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-content">
          <h1>Transforme a sua empresa</h1>
          <p>Com muita facilidade transformamos o seu local de trabalho ou a sua morada, transformando a sua visão em realidade</p>
          <a href="/contacte" className="hero-button">Contacte agora</a>
        </div>
      </div>

      <div className="service-intro">
        <h2>SERVIÇO</h2>
        <p>Soluções de alta qualidade para residências e indústrias</p>
      </div>

      <div className="service-columns">
        <div className="service-column">
          <img src={serviceImage2} alt="Serviço de Eletricista" />
          <h3>Serviços de Eletricista</h3>
          <p>Instalação e manutenção de sistemas elétricos, iluminação, e equipamentos elétricos, assegurando eficiência e segurança.</p>
          <a href="/servico/eletricista">Saiba mais</a>
        </div>

        <div className="service-column">
          <img src={serviceImage1} alt="Serviço de Energia Renovável" />
          <h3>Serviços de Energia Renovável</h3>
          <p>Implementação e manutenção de sistemas de energia solar e eólica, promovendo soluções sustentáveis e eficientes para reduzir o impacto ambiental e os custos com energia.</p>
          <a href="/servico/energia">Saiba mais</a>
        </div>

        <div className="service-column">
          <img src={serviceImage3} alt="Serviço de Pintura" />
          <h3>Serviços de Pintura</h3>
          <p>Pintura de interiores e exteriores, com acabamentos de alta qualidade e durabilidade, adaptados às suas necessidades.</p>
          <a href="/servico/pintura">Saiba mais</a>
        </div>

        <div className="service-column">
          <img src={serviceImage1} alt="Serviço de Canalização" />
          <h3>Serviços de Canalização</h3>
          <p>Instalação de tubulações, sistemas de esgoto e aparelhos sanitários, garantindo o correto funcionamento e a segurança das suas instalações hidráulicas.</p>
          <a href="/servicos/canalizacao">Saiba Mais</a>
        </div>

        <div className="service-column">
          <img src={serviceImage2} alt="Serviço de Serralharia" />
          <h3>Serviços de Serralharia</h3>
          <p>Fabricação e instalação de estruturas metálicas, portas, portões e grades, garantindo segurança e durabilidade.</p>
          <a href="/servicos/serralharia">Saiba Mais</a>
        </div>

        <div className="service-column">
          <img src={serviceImage3} alt="Serviço de Carpintaria" />
          <h3>Serviços de Carpintaria</h3>
          <p>Fabricação e instalação de móveis sob medida, portas, e janelas, combinando funcionalidade e estética.</p>
          <a href="/servicos/carpintaria">Saiba Mais</a>
        </div>
      </div>

      <div className="about-section">
        <div className="about-text">
          <h2>SOBRE NÓS</h2>
          <p>
            Na Home Pro Help, Somos uma empresa especializada em oferecer soluções completas para suas necessidades residenciais de confiança sediada em Maputo. Estamos empenhados em fornecer serviços de construção, canalização, electrificação, pintura e muito mais, de alta qualidade aos nossos clientes. Desde projectos residenciais a comerciais, temos profissionais e os recursos necessários para fornecer resultados excepcionais.
          </p>

          <div className="mission-vision">
            <div className="mv-item">
              <img src={missionIcon} alt="Missão" />
              <div>
                <h3>Missão</h3>
                <p>Transformar espaços em ambientes acolhedores, ultrapassando expectativas e reflectindo a singularidade de cada cliente.</p>
              </div>
            </div>
            <div className="mv-item">
              <img src={visionIcon} alt="Visão" />
              <div>
                <h3>Visão</h3>
                <p>Liderar na criação de ambientes acolhedores e únicos, elevando padrões e sendo a referência em transformação de espaços dos nossos clientes.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img src={aboutImage} alt="Sobre Nós" style={{ width: '80%', height: 'auto' }} />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2 className="testimonials-heading">TESTEMUNHOS</h2>
        <p className="testimonials-subheading">O que os nossos clientes dizem sobre nós</p>
        <div className="testimonials-container">
          <div className="testimonial-image">
            <img src={aboutImage} alt="Clientes felizes" />
          </div>
          <div
            className="testimonial-carousel"
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-slide ${index === activeIndex ? 'active' : ''}`}
              >
                <div className="testimonial-card">
                  <p>"{testimonial.text}"</p>
                  <h4>- {testimonial.name}</h4>
                </div>
              </div>
            ))}
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="cta-section">
  <div className="cta-content">
    <h4>CONTACTO</h4>
    <h2>Vamos trabalhar em conjunto</h2>
    <p>
      Estamos aqui para responder a todas as suas perguntas e ajudá-lo a dar vida ao seu projeto de construção ou reforma.
      Entre em contato connosco hoje mesmo!
    </p>
    <a href="/contacte" className="cta-button">Contacte agora</a>
  </div>
</div>

    </>
  );
}

export default Inicio;
