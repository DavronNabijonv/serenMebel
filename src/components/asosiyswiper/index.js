import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css"; // Main Swiper styles
import "swiper/css/pagination"; // Additional styles for pagination, if needed
import "swiper/css/navigation"; // Additional styles for navigation, if needed


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import "./styles.scss";
import mainpage from '../../assets/images/m2.jpg'
import a1 from '../../assets/images/m5.jpg'
import a2 from '../../assets/images/m3.jpg'
import a3 from '../../assets/images/m4.jpg'
import a4 from '../../assets/images/m9.jpg'

export default function AsosiySwiper() {
  return (
    <div className="asosiy">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        pagination={false}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        navigation={false}
        slidesPerView={1}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={mainpage} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={a1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={a2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={a3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={a4} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
