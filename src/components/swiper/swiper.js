import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css"; // Main Swiper styles
import "swiper/css/pagination"; // Additional styles for pagination, if needed
import "swiper/css/navigation"; // Additional styles for navigation, if needed

import "./swiper.scss";

import { useTranslation } from "react-i18next";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Info_load from "../loadPart/info_load";
import No_result from "../mainPageItems/mahsulotlar/no_result";
import { useQuery } from "react-query";

export default function MahsulotlarSwiper() {
  const { t } = useTranslation();
  const [myArray, setMyArray] = useState(false);

  const { isLoading, error, data } = useQuery("solos", async () => {
    const response = await fetch(
      "https://selenmebelapi20240307024627.azurewebsites.net/api/Categories"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }
    return response.json(); // Parse response body as JSON
  });
  useEffect(()=>{
    setMyArray(Array.isArray(data) ? data : [data]); 
  },[data])
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
          modules={isLoading?[]:!data?[]:[]}
          className={isLoading?'for_none':!data?'for_none':`mySwiper`}
        >
          {isLoading? <Info_load/>:data?data.map((r, index) => (
          <SwiperSlide>
          <div className="mgrp" key={index}>
            <img
              src={`https://adminserenmebeluz.azurewebsites.net/${r.image}`}
              alt="oshxona mebel"
            />
            <p>{r.name}</p>
            {r.typeOfFurnitures.length > 0 ? (
                <NavLink to={`/oraliq/${r.id}/${r.name}`}>
                  <button>{t("pod")}</button>
                </NavLink>
              ) : (
                <NavLink to={`/ofis/${r.id}/${r.name}`}>
                  <button>{t("pod")}</button>
                </NavLink>
              )}
          </div>
        </SwiperSlide>
        )):<No_result/>}
        </Swiper>
      </div>
      {error && <No_result/>}
    </div>
  );
}
