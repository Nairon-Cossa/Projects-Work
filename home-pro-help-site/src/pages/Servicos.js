import React from 'react';
import './Servicos.css';
import serviceImage1 from '../assets/service1.png';
import serviceImage2 from '../assets/service2.png';
import serviceImage3 from '../assets/service3.png';
import limpezaImg from '../assets/limpeza.jpg';
import carpintariaImg from '../assets/carpintaria.jpg';
import manutencaoImg from '../assets/manutencao.jpg';

const Servicos = () => {
  return (
    <div className="servico-container">
      {/* Top Section Title */}
      <div className="service-intro">
        <h2>SERVIÇOS</h2>
        <p>Soluções de alta qualidade para residências e indústrias</p>
      </div>

      {/* Service Grid */}
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
          <a href="/servicos/canalizacao">Saiba mais</a>
        </div>

        <div className="service-column">
          <img src={serviceImage2} alt="Serviço de Serralharia" />
          <h3>Serviços de Serralharia</h3>
          <p>Fabricação e instalação de estruturas metálicas, portas, portões e grades, garantindo segurança e durabilidade.</p>
          <a href="/servicos/serralharia">Saiba mais</a>
        </div>

        <div className="service-column">
          <img src={serviceImage3} alt="Serviço de Carpintaria" />
          <h3>Serviços de Carpintaria</h3>
          <p>Fabricação e instalação de móveis sob medida, portas, e janelas, combinando funcionalidade e estética.</p>
          <a href="/servicos/carpintaria">Saiba mais</a>
        </div>
      </div>

      {/* Featured Horizontal Services */}
      <div className="servico-destaque-container">
        <div className="servico-destaque">
          <div className="servico-texto">
            <p className="servico-categoria">Serviços de Limpeza</p>
            <h2 className="servico-titulo">Limpeza</h2>
            <p>Investir em serviços de limpeza de qualidade não é apenas uma questão
de estética, mas uma estratégia inteligente que pode impactar
positivamente diversos aspectos do negócio. Um ambiente de trabalho
limpo e organizado contribui para a saúde, produtividade e satisfação dos
funcionários, além de melhorar a imagem da empresa junto ao público
externo. Portanto, a limpeza deve ser uma prioridade para qualquer
empresa que busca sucesso e crescimento sustentáveis.</p>
          </div>
          <div className="servico-imagem">
            <img src={limpezaImg} alt="Limpeza" />
          </div>
        </div>

        <div className="servico-destaque reverse">
          <div className="servico-texto">
            <p className="servico-categoria">Serviços de Carpintaria</p>
            <h2 className="servico-titulo">Carpintaria</h2>
            <p>A carpintaria é uma arte essencial que traz inúmeros benefícios para empresas e
residências. Ela oferece soluções funcionais e estéticas, melhora a durabilidade e a
qualidade dos ambientes, e aumenta o valor de mercado dos imóveis. Investir em
serviços de carpintaria de qualidade é uma escolha inteligente que proporciona beleza,
eficiência e satisfação a longo prazo, tornando os espaços onde vivemos e trabalhamos
mais agradáveis e valiosos.</p>
          </div>
          <div className="servico-imagem">
            <img src={carpintariaImg} alt="Carpintaria" />
          </div>
        </div>

        <div className="servico-destaque">
  <div className="servico-texto">
    <p className="servico-categoria">Manutenção Geral</p>
    <h2 className="servico-titulo">Manutenção</h2>
    <p>
      A manutenção geral é essencial para garantir a segurança, eficiência e
      longevidade de empresas e residências. Ela previne problemas graves,
      economiza dinheiro a longo prazo, melhora o desempenho dos sistemas e
      aumenta o valor do imóvel. Investir em manutenção regular é uma decisão
      inteligente que beneficia a todos, proporcionando um ambiente seguro,
      confortável e eficiente para trabalhar e viver.
    </p>
    <a href="/contacto" className="contact-button">Contacte Agora</a>
  </div>
  <div className="servico-imagem">
    <img src={manutencaoImg} alt="Manutenção" />
  </div>
</div>
      </div>
    </div>
  );
};

export default Servicos;
