import React, { useState } from 'react';
import './SobreNos.css';
import womanImage from '../assets/woman.jpg';
import missionImg from '../assets/mission.png';
import visionImg from '../assets/vision.png';
import valuesImg from '../assets/values.png';

const SobreNos = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const cards = [
    {
      title: 'Missão',
      img: missionImg,
      text: 'Transformar espaços em ambientes acolhedores, ultrapassando expectativas e reflectindo a singularidade de cada cliente.',
    },
    {
      title: 'Visão',
      img: visionImg,
      text: 'Liderar na criação de ambientes acolhedores e únicos, elevando padrões e sendo a referência em transformação de espaços dos nossos clientes.',
    },
    {
      title: 'Valores',
    img: valuesImg,
    text: (
      <>
        <p><strong>Excelência</strong> – Buscamos a excelência em cada detalhe para superar as expectativas dos clientes.</p>
        <p><strong>Empatia</strong> – Valorizamos a compreensão das necessidades individuais, criando ambientes que se conectam profundamente com as histórias e personalidades.</p>
        <p><strong>Inovação</strong> – Exploramos soluções criativas para transformar espaços, mantendo-nos na vanguarda e proporcionando experiências únicas.</p>
        <p><strong>Transparência</strong> – Atuamos com total transparência, construindo confiança sólida em cada interação com o cliente.</p>
        <p><strong>Qualidade</strong> – Priorizamos a qualidade em todos os aspectos do trabalho, garantindo resultados duradouros e satisfatórios.</p>
      </>
    ),
    },
  ];

  return (
    <div className="sobre-nos-container">
      <h2 className="sobre-nos-title">
        <span className="sobre-nos-highlight">SOBRE NÓS</span>
        <br />
        Sobre a Home Pro Help
      </h2>

      <div className="sobre-nos-intro">
        <img src={womanImage} alt="Colaboradora" className="sobre-nos-image" loading="lazy" />
        <p className="sobre-nos-text">
        Na Home Pro Help, Somos uma empresa especializada em oferecer soluções completas para suas necessidades residenciais de confiança sediada em Maputo. Estamos empenhados em fornecer serviços de construção, canalização, electrificação, pintura e muito mais, de alta qualidade aos nossos clientes. Desde projectos residenciais a comerciais, temos profissionais e os recursos necessários para fornecer resultados excepcionais.
        </p>
      </div>

      <div className="sobre-nos-cards">
        {cards.map((card, index) => (
          <div key={index} className="sobre-nos-card" onClick={() => toggle(index)}>
            <img src={card.img} alt={card.title} className="card-icon-img" />
            <div>
              <h3>{card.title}</h3>
              {open === index && <p>{card.text}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SobreNos;
