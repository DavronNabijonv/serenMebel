import React from "react";
import "./styles.scss";
import { NavLink } from "react-router-dom";
import { mahsulot } from "../db/mahsulotlar";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css"; // Main Swiper styles
import "swiper/css/pagination"; // Additional styles for pagination, if needed
import "swiper/css/navigation"; // Additional styles for navigation, if needed

import "./styles.scss";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function MahsulotlarSwiper() {
  return (
    <div className="swipergrp">
      <p className="ttl">Наша продукция</p>
      <div className="swgrp">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          pagination={true}
          navigation={true}
          slidesPerView={1}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {mahsulot.map((r) => (
            <SwiperSlide>
              <div className="mgrp" key={r.id}>
                <img src={r.img} alt={r.ttl} />
                <p>{r.ttl}</p>
                <NavLink to={r.path}>
                  <button>Подробное</button>
                </NavLink>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
