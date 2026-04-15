import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import ReviewCard from './ReviewCard';

const Reviews = ({ reviews }) => {
  return (
    <Swiper
    loop={true}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 30,
        stretch: '50%',
        depth: 200,
        modifier: 1,
        scale:0.75,
        slideShadows: false,
      }}
      autoplay={{
        delay:1000,
        disableOnInteraction:false
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper"
    >
      {
        reviews.map(review => (
          <SwiperSlide key={review.id} style={{ width: "300px", padding:'20px'}}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};

export default Reviews;