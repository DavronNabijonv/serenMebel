import React from "react";
import "./styles.scss";
import { xizmat } from "../db/xizmatlar";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css"; // Main Swiper styles
import "swiper/css/pagination"; // Additional styles for pagination, if needed
import "swiper/css/navigation"; // Additional styles for navigation, if needed

import "./styles.scss";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function XizmatSwiper() {
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
          {xizmat.map((r) => (
            <SwiperSlide>
              <div className="grp">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                >
                  <g clip-path="url(#clip0_20_2720)">
                    <path
                      d="M16.3333 23.3333H23.3333V16.3333L15.1667 8.16665C17.7791 6.91896 20.7142 6.51187 23.5676 7.00144C26.421 7.49101 29.0525 8.85316 31.0997 10.9003C33.1468 12.9475 34.509 15.579 34.9985 18.4324C35.4881 21.2858 35.081 24.2208 33.8333 26.8333L47.8333 40.8333C48.7616 41.7616 49.2831 43.0206 49.2831 44.3333C49.2831 45.6461 48.7616 46.9051 47.8333 47.8333C46.9051 48.7616 45.6461 49.2831 44.3333 49.2831C43.0206 49.2831 41.7616 48.7616 40.8333 47.8333L26.8333 33.8333C24.2209 35.081 21.2858 35.4881 18.4324 34.9985C15.579 34.509 12.9475 33.1468 10.9003 31.0996C8.85317 29.0525 7.49102 26.421 7.00145 23.5676C6.51188 20.7142 6.91897 17.7791 8.16667 15.1667L16.3333 23.3333Z"
                      fill="#2C3E50"
                    />
                    <path
                      d="M16.3333 23.3333H23.3333V16.3333L15.1667 8.16665C17.7791 6.91896 20.7142 6.51187 23.5676 7.00144C26.421 7.49101 29.0525 8.85316 31.0997 10.9003C33.1468 12.9475 34.509 15.579 34.9985 18.4324C35.4881 21.2858 35.081 24.2208 33.8333 26.8333L47.8333 40.8333C48.7616 41.7616 49.2831 43.0206 49.2831 44.3333C49.2831 45.6461 48.7616 46.9051 47.8333 47.8333C46.9051 48.7616 45.6461 49.2831 44.3333 49.2831C43.0206 49.2831 41.7616 48.7616 40.8333 47.8333L26.8333 33.8333C24.2209 35.081 21.2858 35.4881 18.4324 34.9985C15.579 34.509 12.9475 33.1468 10.9003 31.0996C8.85317 29.0525 7.49102 26.421 7.00145 23.5676C6.51188 20.7142 6.91897 17.7791 8.16667 15.1667L16.3333 23.3333Z"
                      fill="url(#paint0_linear_20_2720)"
                    />
                    <path
                      d="M16.3333 23.3333H23.3333V16.3333L15.1667 8.16665C17.7791 6.91896 20.7142 6.51187 23.5676 7.00144C26.421 7.49101 29.0525 8.85316 31.0997 10.9003C33.1468 12.9475 34.509 15.579 34.9985 18.4324C35.4881 21.2858 35.081 24.2208 33.8333 26.8333L47.8333 40.8333C48.7616 41.7616 49.2831 43.0206 49.2831 44.3333C49.2831 45.6461 48.7616 46.9051 47.8333 47.8333C46.9051 48.7616 45.6461 49.2831 44.3333 49.2831C43.0206 49.2831 41.7616 48.7616 40.8333 47.8333L26.8333 33.8333C24.2209 35.081 21.2858 35.4881 18.4324 34.9985C15.579 34.509 12.9475 33.1468 10.9003 31.0996C8.85317 29.0525 7.49102 26.421 7.00145 23.5676C6.51188 20.7142 6.91897 17.7791 8.16667 15.1667L16.3333 23.3333Z"
                      stroke="url(#paint1_linear_20_2720)"
                      stroke-width="2.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_20_2720"
                      x1="12.3226"
                      y1="3.61356"
                      x2="46.3093"
                      y2="52.6817"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#7E7E7E" />
                      <stop offset="0.429895" stop-color="#CDCBCB" />
                      <stop offset="0.960307" stop-color="#7A7A7A" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_20_2720"
                      x1="12.3226"
                      y1="3.61356"
                      x2="46.3093"
                      y2="52.6817"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#7E7E7E" />
                      <stop offset="0.429895" stop-color="#CDCBCB" />
                      <stop offset="0.960307" stop-color="#7A7A7A" />
                    </linearGradient>
                    <clipPath id="clip0_20_2720">
                      <rect width="56" height="56" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="gttl">{r.ttl}</p>
                <p className="gtxt">{r.txt}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
