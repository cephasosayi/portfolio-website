import React from 'react'
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import sidebar from '../../img/sidebar.png';
import ecommerce from '../../img/ecommerce.png';
import musicapp from '../../img/musicapp.png';
import hoc from '../../img/hoc.png';
import { themeContext } from '../../context';
import { useContext } from "react";


const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio' id='Portfolio'>
        {/* heading  */}
        <span style={{ color: darkMode? 'white' : ''}}>Recent Project</span>
        <span>Portfolio</span>

        {/* slider  */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-swiper'
        >
             <SwiperSlide className='swiperslide'>
                 <img src={sidebar} alt='' />
             </SwiperSlide>
             <SwiperSlide className='swiperslide'>
                 <img src={ecommerce} alt='' />
             </SwiperSlide>
             <SwiperSlide className='swiperslide'>
                 <img src={hoc} alt='' />
             </SwiperSlide>
             <SwiperSlide>
                 <img src={musicapp} alt='' />
             </SwiperSlide>
        </Swiper>


    </div>
  )
}

export default Portfolio