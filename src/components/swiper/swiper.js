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
  const categories_api_url = `https://selenmebelapi20240307024627.azurewebsites.net/api/Categories`;
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

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(
  //         "https://selenmebelapi20240307024627.azurewebsites.net/api/Categories"
  //       );
  //       const data = await response.json();
  //       console.log(data);
  //       setMyArray(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   fetchData();
  // }, []);
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
          {/* {myArray ? (
            myArray.map((r, index) => (
              <SwiperSlide>
                <div className="mgrp" key={index}>
                  <img
                    src={`${categories_api_url}/DownloadByImageName?imageName=${r.image}`}
                    alt="oshxona mebel"
                  />
                  <p>{r.name}</p>
                  {r.typeOfFurnitures.length > 0 ? (
                    <NavLink to={`/oraliq/${r.id}`}>
                      <button>{t("pod")}</button>
                    </NavLink>
                  ) : (
                    <NavLink to={`/ofis/${r.id}`}>
                      <button>{t("pod")}</button>
                    </NavLink>
                  )}
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p>Images are loading ... </p>
          )}, */}
          {isLoading? <Info_load/>:data?data.map((r, index) => (
          <SwiperSlide>
          <div className="mgrp" key={index}>
            <img
              src={`${categories_api_url}/DownloadByImageName?imageName=${r.image}`}
              alt="oshxona mebel"
            />
            <p>{r.name}</p>
            {r.typeOfFurnitures.length > 0 ? (
              <NavLink to={`/oraliq/${r.id}`}>
                <button>{t("pod")}</button>
              </NavLink>
            ) : (
              <NavLink to={`/ofis/${r.id}`}>
                <button>{t("pod")}</button>
              </NavLink>
            )}
          </div>
        </SwiperSlide>
        )):<No_result/>}
        </Swiper>
      </div>
    </div>
  );
}
