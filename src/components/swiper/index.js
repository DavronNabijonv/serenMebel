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

import { useTranslation } from "react-i18next";
import m2 from "../../assets/images/m2.jpg";
import m3 from "../../assets/images/m3.jpg";
import m5 from "../../assets/images/m5.jpg";
import m7 from "../../assets/images/m7.jpg";
import m8 from "../../assets/images/m8.jpg";
import m9 from "../../assets/images/m9.jpg";
import m10 from "../../assets/images/m10.jpg";
import m11 from "../../assets/images/seren/polkalar va stellaj/image15.jpg";
import m12 from "../../assets/images/seren/ayvon va zal/hi tech/image15.jpg";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function MahsulotlarSwiper() {
  const { t } = useTranslation();
  return (
    <div className="swipergrp">
      <p className="ttl">{t("b_mahsulot")}</p>
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
          <SwiperSlide>
            <div className="mgrp" key="1">
              <img src={m2} alt="oshxona mebel" />
              <p>{t("m1")}</p>
              <NavLink to={"/oshxonaOraliq"}>
                <button>{t("pod")}</button>
              </NavLink>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mgrp" key="2">
              <img src={m3} alt="shkaf mebel" />
              <p>{t("m2")}</p>
              <NavLink to={"/km"}>
                <button>{t("pod")}</button>
              </NavLink>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mgrp" key="3">
              <img src={m5} alt="ofis mebel" />
              <p>{t("m3")}</p>
              <NavLink to={"/ofis"}>
                <button>{t("pod")}</button>
              </NavLink>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mgrp" key="4">
              <img src={m7} alt="yumshoq mebel" />
              <p>{t("m4")}</p>
              <NavLink to={"/yumshoq"}>
                <button>{t("pod")}</button>
              </NavLink>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mgrp" key="5">
              <img src={m12} alt="ayvon va zal mebel" />
              <p>{t("m5")}</p>
              <NavLink to={"/AyvonOraliq"}>
                <button>{t("pod")}</button>
              </NavLink>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mgrp" key="6">
              <img src={m9} alt="yumshoq mebel" />
              <p>{t("m6")}</p>
              <NavLink to={"/yotoqxona"}>
                <button>{t("pod")}</button>
              </NavLink>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mgrp" key="7">
              <img src={m10} alt="bolalar mebel" />
              <p>{t("m7")}</p>
              <NavLink to={"/bolalar"}>
                <button>{t("pod")}</button>
              </NavLink>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mgrp" key="8">
              <img src={m11} alt="polkalar va stellajlar" />
              <p>{t("m8")}</p>
              <NavLink to={"/polkalar"}>
                <button>{t("pod")}</button>
              </NavLink>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mgrp" key="9">
              <img src={m8} alt="stol va stullar" />
              <p>{t("m9")}</p>
              <NavLink to={"/stolst"}>
                <button>{t("pod")}</button>
              </NavLink>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
