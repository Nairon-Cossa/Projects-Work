import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Projectos.css';

import project1 from '../assets/projecto1.jpg';
import project2 from '../assets/projecto2.jpg';
import project3 from '../assets/projecto3.jpg';
import project4 from '../assets/projecto4.jpg';
import project5 from '../assets/projecto5.jpg';
import project6 from '../assets/projecto6.jpg';


const Projectos = () => {
  return (
    <div className="projectos-container">
      <div className="projectos-header">
        <h2>PROJECTOS</h2>
        <p>Veja alguns dos nossos projetos realizados com qualidade e dedicação</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="projectos-swiper"
      >
        <SwiperSlide>
          <div className="projecto-slide">
            <img src={project1} alt="Projeto 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="projecto-slide">
            <img src={project2} alt="Projeto 2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="projecto-slide">
            <img src={project3} alt="Projeto 3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="projecto-slide">
            <img src={project4} alt="Projeto 4" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="projecto-slide">
            <img src={project5} alt="Projeto 5" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="projecto-slide">
            <img src={project6} alt="Projeto 6" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projectos;
