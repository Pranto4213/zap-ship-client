import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import brand1 from '../assets/brands/amazon.png'
import brand2 from '../assets/brands/amazon_vector.png'
import brand3 from '../assets/brands/casio.png'
import brand4 from '../assets/brands/moonstar.png'
import brand5 from '../assets/brands/randstad.png'
import brand6 from '../assets/brands/star.png'
import brand7 from '../assets/brands/start_people.png'
import { Autoplay } from 'swiper/modules';




const Brands = () => {
    return (
        <Swiper
        loop={true}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{
            delay:1,
            disableOnInteraction:false,
            
        }}
        >
<SwiperSlide><img src={brand1} alt="" /></SwiperSlide>
<SwiperSlide><img src={brand2} alt="brand" /> </SwiperSlide>
<SwiperSlide><img src={brand3} alt="brand" /> </SwiperSlide>
<SwiperSlide><img src={brand4} alt="brand" /> </SwiperSlide>
<SwiperSlide><img src={brand5} alt="brand" /></SwiperSlide>
<SwiperSlide><img src={brand6} alt="brand" /> </SwiperSlide>
<SwiperSlide><img src={brand7} alt="brand" /> </SwiperSlide>



        </Swiper>
    );
};

export default Brands;