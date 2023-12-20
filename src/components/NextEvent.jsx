import './styles.css'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import one from '../assets/arabtronica/1.png';
import two from '../assets/arabtronica/2.png';
import three from '../assets/arabtronica/3.png';
import four from '../assets/arabtronica/4.png';
import five from '../assets/arabtronica/5.png';
import six from '../assets/arabtronica/6.png';


function NextEvent () {
    return (
        <div className='nxt-evnt-container'>
            <div className='nxt-container-col'>
                <h2>Next Event <i class="fa-solid fa-angles-right"></i></h2>
                <h1>Arabtronica Night</h1>
                <h3>[ DJ Party ]</h3>
                <h3>07.10.2023</h3>
                <h3>Zakk, Düsseldorf</h3>
                <hr></hr>
                <p>
                Habibi Act! präsentiert die Arabtronica Night - Klänge aus dem Nahen Osten. Ob westliche Club-Sounds mit arabischen Grooves, türkische Melodien gewürzt mit Jazz- und Funk-Elementen oder traditionelle Dabke mit Techno-Effekten, wir feiern die Vielfalt der Musik.
                Erlebt mit uns diese spannende musikalische Erfahrung und tanzt zu elektronischer Musik mit östlichen Klängen und Vocals.
                </p>
            </div>
            <div className='nxt-container-col'>
                <div className='img-slider'>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={one} alt='1'></img></SwiperSlide>
                        <SwiperSlide><img src={two} alt='2'></img></SwiperSlide>
                        <SwiperSlide><img src={three} alt='3'></img></SwiperSlide>
                        <SwiperSlide><img src={four} alt='4'></img></SwiperSlide>
                        <SwiperSlide><img src={five} alt='5'></img></SwiperSlide>
                        <SwiperSlide><img src={six} alt='6'></img></SwiperSlide>
                    </Swiper>
                </div>
                <button className="button" href="https://www.zakk.de/event-detail?event=12193">
                    <span>Tickets</span>
                </button>
            </div>

        </div>

        )
    }

    export default NextEvent;