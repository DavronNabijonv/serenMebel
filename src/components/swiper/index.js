import React, { useEffect, useState } from "react";
import "./styles.scss";
import { NavLink } from "react-router-dom";
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
  const categories_api_url = `https://selenmebelapi20240307024627.azurewebsites.net/api/Categories`;
  const [myArray, setMyArray] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://selenmebelapi20240307024627.azurewebsites.net/api/Categories"
        );
        const data = await response.json();
        console.log(data);
        setMyArray(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
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
          {myArray ? (
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
          )}
        </Swiper>
      </div>
    </div>
  );
}
